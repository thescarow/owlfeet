const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
///////////////////////////////////////////

const linkify = require("linkifyjs")
const { getLinkPreview } = require("link-preview-js")
// const dns = require("node:dns")

const User = require("../../models/user")
const Message = require("../../models/message")
const Chat = require("../../models/chat")
const TransloaditUserMediaMessageEntry = require("../../models/transloaditUserMediaMessageEntry")
//////////////////////

const {
  sendMessageToOtherMembersAndUpdateMessageStatusForSender
} = require("../../controllers/message/common/sendMessageAndUpdateMessageStatus")
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")

const { checkInFollowing } = require("../../common/checkUserFollowStatus")

exports.messageHandler = async (io, socket) => {
  try {
    socket.on("message:update-message-seen-status", async data => {
      if (socket.loginUser) {
        let message = await Message.findOne({
          _id: data.messageId,
          reader: { $elemMatch: { $eq: socket.loginUser.id } },
          "seenStatus.seenBy": { $ne: socket.loginUser.id }
        }).select({
          _id: 1,
          seenStatus: 1,
          reader: 1,
          sender: 1,
          chat: 1,
          isInfoMessage: 1
        })

        if (message) {
          let userExist = false
          if (message.hasOwnProperty("seenStatus")) {
            userExist = message.seenStatus.find(entry => {
              return entry.seenBy.toString() === socket.loginUser.id.toString()
            })
          }
          if (!userExist) {
            message.seenStatus.push({
              seenBy: socket.loginUser.id,
              seenTime: Date.now()
            })
            await message.save()

            if (message.isInfoMessage === false) {
              let updatedMessage = await Message.findById(message._id)
                .select({
                  _id: 1,
                  seenStatus: 1,
                  reader: 1,
                  sender: 1,
                  chat: 1
                })
                .lean()
              let pushedUser = await User.findById(socket.loginUser.id)
                .select({ firstName: 1, lastName: 1, username: 1, profile: 1 })
                .lean()
              if (
                pushedUser.hasOwnProperty("profile") &&
                pushedUser.profile !== ""
              ) {
                pushedUser.profile = await signedUrlForGetAwsS3Object(
                  pushedUser.profile
                )
              }

              io.to(updatedMessage.sender.toString()).emit(
                "message:update-message-seen-status",
                {
                  messageId: updatedMessage._id.toString(),
                  chatId: updatedMessage.chat.toString(),
                  messageSeenStatusCount: updatedMessage.seenStatus.length,
                  messageReaderCount: updatedMessage.reader.length,
                  pushedUser: pushedUser,
                  pushedUserTime: Date.now()
                }
              )
            }
            io.to(socket.loginUser.id.toString()).emit(
              "message:message-seen-by-self",
              {
                chatId: message.chat
              }
            )
          }
        }
      }
    })
    socket.on("message:update-chat-unseen-messages", async data => {
      if (socket.loginUser) {
        let unseenMessages = await Message.find({
          chat: data.chatId,
          reader: { $elemMatch: { $eq: socket.loginUser.id } },
          "seenStatus.seenBy": { $ne: socket.loginUser.id }
        }).select({
          _id: 1,
          seenStatus: 1,
          reader: 1,
          sender: 1,
          chat: 1,
          isInfoMessage: 1
        })

        if (unseenMessages.length > 0) {
          await Promise.all(
            unseenMessages.map(async message => {
              let userExist = false
              if (message.hasOwnProperty("seenStatus")) {
                userExist = message.seenStatus.find(entry => {
                  return (
                    entry.seenBy.toString() === socket.loginUser.id.toString()
                  )
                })
              }

              if (!userExist) {
                message.seenStatus.push({
                  seenBy: socket.loginUser.id,
                  seenTime: Date.now()
                })

                await message.save()
                if (message.isInfoMessage === false) {
                  let updatedMessage = await Message.findById(message._id)
                    .select({
                      _id: 1,
                      seenStatus: 1,
                      reader: 1,
                      sender: 1,
                      chat: 1
                    })
                    .lean()
                  let pushedUser = await User.findById(socket.loginUser.id)
                    .select({
                      firstName: 1,
                      lastName: 1,
                      username: 1,
                      profile: 1
                    })
                    .lean()
                  if (
                    pushedUser.hasOwnProperty("profile") &&
                    pushedUser.profile !== ""
                  ) {
                    pushedUser.profile = await signedUrlForGetAwsS3Object(
                      pushedUser.profile
                    )
                  }
                  io.to(updatedMessage.sender.toString()).emit(
                    "message:update-message-seen-status",
                    {
                      messageId: updatedMessage._id.toString(),
                      chatId: updatedMessage.chat.toString(),
                      messageSeenStatusCount: updatedMessage.seenStatus.length,
                      messageReaderCount: updatedMessage.reader.length,
                      pushedUser: pushedUser,
                      pushedUserTime: Date.now()
                    }
                  )
                }
                io.to(socket.loginUser.id.toString()).emit(
                  "message:message-seen-by-self",
                  {
                    chatId: data.chatId
                  }
                )
              }
            })
          )
        }
      }
    })
    socket.on("message:create-user-message", async data => {
      const { userMessage } = data
      let clientMessageId = ""
      let messageChatId = userMessage.chat
      if (
        userMessage.hasOwnProperty("clientMessageId") &&
        userMessage.clientMessageId !== ""
      ) {
        clientMessageId = userMessage.clientMessageId
      } else {
        if (
          userMessage.hasOwnProperty("hasMediaContent") &&
          userMessage.hasMediaContent &&
          (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
            (userMessage.hasOwnProperty("hasDirectMediaContentPath") &&
              userMessage.hasDirectMediaContentPath === false))
        ) {
          await deleteAwsS3Object(userMessage.mediaContentPath)
        }
        return socket.emit("message:create-user-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Please send client message id."
        })
      }
      // for testing
      // return socket.emit("message:create-user-message-res", {
      //   isSuccess: false,
      //   clientMessageId: clientMessageId,
      //   chatId: messageChatId,
      //   error: "Please send client message id."
      // })
      try {
        if (socket.loginUser) {
          const newMessageData = {}

          if (userMessage.hasOwnProperty("chat") && userMessage.chat !== "") {
            let messageChat = await Chat.findOne({
              _id: userMessage.chat,
              currentChatMembers: {
                $elemMatch: { $eq: socket.loginUser.id }
              },
              isDeleted: false
            })
              .select({ isGroupChat: 1, currentChatMembers: 1 })
              .lean()

            if (messageChat) {
              if (!messageChat.isGroupChat) {
                let otherUserId = messageChat.currentChatMembers.find(
                  userId => userId.toString() !== socket.loginUser.id.toString()
                )

                if (!checkInFollowing(socket.loginUser.id, otherUserId)) {
                  if (
                    userMessage.hasOwnProperty("hasMediaContent") &&
                    userMessage.hasMediaContent &&
                    (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
                      (userMessage.hasOwnProperty(
                        "hasDirectMediaContentPath"
                      ) &&
                        userMessage.hasDirectMediaContentPath === false))
                  ) {
                    await deleteAwsS3Object(userMessage.mediaContentPath)
                  }
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error:
                      "You are not allowed to send message to this chat, First follow him/her"
                  })
                }
              }

              newMessageData.chat = messageChat._id
              newMessageData.sender = socket.loginUser.id
              newMessageData.reader = messageChat.currentChatMembers
              newMessageData.seenStatus = [
                { seenBy: socket.loginUser.id, seenTime: Date.now() }
              ]

              if (userMessage.hasMediaContent) {
                if (
                  userMessage.hasOwnProperty("mediaContentType") &&
                  userMessage.hasOwnProperty("mediaContentPath")
                ) {
                  newMessageData.hasMediaContent = true
                  newMessageData.mediaContentType = userMessage.mediaContentType
                  newMessageData.mediaContentMimeType =
                    userMessage.mediaContentMimeType || ""
                  newMessageData.mediaContentPath = userMessage.mediaContentPath

                  if (
                    userMessage.hasOwnProperty("hasDirectMediaContentPath") &&
                    userMessage.hasDirectMediaContentPath === true
                  ) {
                    newMessageData.hasDirectMediaContentPath = true
                    if (userMessage.mediaContentType === "video-clip") {
                      if (userMessage.hasOwnProperty("mediaVideoClipSpecs")) {
                        newMessageData.mediaVideoClipSpecs = {
                          width: userMessage.mediaVideoClipSpecs.width || "",
                          height: userMessage.mediaVideoClipSpecs.height || "",
                          mediaQuality: {
                            hasLow:
                              userMessage.mediaVideoClipSpecs.mediaQuality
                                .hasLow || false,
                            low: {
                              width:
                                userMessage.mediaVideoClipSpecs.mediaQuality.low
                                  .width || "",
                              height:
                                userMessage.mediaVideoClipSpecs.mediaQuality.low
                                  .height || "",
                              url:
                                userMessage.mediaVideoClipSpecs.mediaQuality.low
                                  .url || ""
                            },
                            hasMedium:
                              userMessage.mediaVideoClipSpecs.mediaQuality
                                .hasMedium || false,
                            medium: {
                              width:
                                userMessage.mediaVideoClipSpecs.mediaQuality
                                  .medium.width || "",
                              height:
                                userMessage.mediaVideoClipSpecs.mediaQuality
                                  .medium.height || "",
                              url:
                                userMessage.mediaVideoClipSpecs.mediaQuality
                                  .medium.url || ""
                            },
                            hasHigh:
                              userMessage.mediaVideoClipSpecs.mediaQuality
                                .hasHigh || false,
                            high: {
                              width:
                                userMessage.mediaVideoClipSpecs.mediaQuality
                                  .high.width || "",
                              height:
                                userMessage.mediaVideoClipSpecs.mediaQuality
                                  .high.height || "",
                              url:
                                userMessage.mediaVideoClipSpecs.mediaQuality
                                  .high.url || ""
                            }
                          },

                          hasPreview:
                            userMessage.mediaVideoClipSpecs.hasPreview || false,
                          preview: {
                            width:
                              userMessage.mediaVideoClipSpecs.preview.width ||
                              "",
                            height:
                              userMessage.mediaVideoClipSpecs.preview.height ||
                              "",
                            hasMp4:
                              userMessage.mediaVideoClipSpecs.preview.hasMp4 ||
                              false,
                            mp4:
                              userMessage.mediaVideoClipSpecs.preview.mp4 || "",
                            hasWebp:
                              userMessage.mediaVideoClipSpecs.preview.hasWebp ||
                              false,
                            webp:
                              userMessage.mediaVideoClipSpecs.preview.webp ||
                              "",
                            hasGif:
                              userMessage.mediaVideoClipSpecs.preview.hasGif ||
                              false,
                            gif:
                              userMessage.mediaVideoClipSpecs.preview.gif || ""
                          }
                        }
                      }
                    } else if (userMessage.mediaContentType === "sticker") {
                      if (userMessage.hasOwnProperty("mediaStickerSpecs")) {
                        newMessageData.mediaStickerSpecs = {
                          width: userMessage.mediaStickerSpecs.width || "",
                          height: userMessage.mediaStickerSpecs.height || "",
                          hasMp4: userMessage.mediaStickerSpecs.hasMp4 || false,
                          mp4: userMessage.mediaStickerSpecs.mp4 || "",
                          hasWebp:
                            userMessage.mediaStickerSpecs.hasWebp || false,
                          webp: userMessage.mediaStickerSpecs.webp || "",
                          hasGif: userMessage.mediaStickerSpecs.hasGif || false,
                          gif: userMessage.mediaStickerSpecs.gif || "",

                          hasPreview:
                            userMessage.mediaStickerSpecs.hasPreview || false,
                          preview: {
                            width:
                              userMessage.mediaStickerSpecs.preview.width || "",
                            height:
                              userMessage.mediaStickerSpecs.preview.height ||
                              "",
                            hasMp4:
                              userMessage.mediaStickerSpecs.preview.hasMp4 ||
                              false,
                            mp4:
                              userMessage.mediaStickerSpecs.preview.mp4 || "",
                            hasWebp:
                              userMessage.mediaStickerSpecs.preview.hasWebp ||
                              false,
                            webp:
                              userMessage.mediaStickerSpecs.preview.webp || "",
                            hasGif:
                              userMessage.mediaStickerSpecs.preview.hasGif ||
                              false,
                            gif: userMessage.mediaStickerSpecs.preview.gif || ""
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (
                    userMessage.hasOwnProperty("hasMediaContent") &&
                    userMessage.hasMediaContent &&
                    (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
                      (userMessage.hasOwnProperty(
                        "hasDirectMediaContentPath"
                      ) &&
                        userMessage.hasDirectMediaContentPath === false))
                  ) {
                    await deleteAwsS3Object(userMessage.mediaContentPath)
                  }
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "Send all the required fields with request."
                  })
                }
              } else {
                if (
                  userMessage.hasOwnProperty("textContent") &&
                  userMessage.textContent !== ""
                ) {
                  newMessageData.textContent = userMessage.textContent
                } else {
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "You can not create an empty message."
                  })
                }
              }

              if (
                userMessage.hasOwnProperty("isRepliedMessage") &&
                userMessage.isRepliedMessage &&
                userMessage.hasOwnProperty("repliedTo")
              ) {
                let userRepliedMessage = await Message.findById(
                  userMessage.repliedTo
                )
                  .select({ chat: 1 })
                  .lean()
                if (
                  userRepliedMessage &&
                  userRepliedMessage.chat.toString() ===
                    messageChat._id.toString()
                ) {
                  newMessageData.isRepliedMessage = true
                  newMessageData.repliedTo = userRepliedMessage._id
                } else {
                  if (
                    userMessage.hasOwnProperty("hasMediaContent") &&
                    userMessage.hasMediaContent &&
                    (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
                      (userMessage.hasOwnProperty(
                        "hasDirectMediaContentPath"
                      ) &&
                        userMessage.hasDirectMediaContentPath === false))
                  ) {
                    await deleteAwsS3Object(userMessage.mediaContentPath)
                  }
                  return socket.emit("message:create-user-text-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "You are not allowed to reply to this message."
                  })
                }
              } else {
                newMessageData.isRepliedMessage = false
              }

              let newMessage = new Message(newMessageData)
              newMessage = await newMessage.save()

              // socket.emit("message:client-user-message-sent", {
              //   chatId: messageChat._id,
              //   clientMessageId: clientMessageId,
              //  messageId: newMessage._id,
              // })

              //here i send the event to client that has created the message only (not all devices where he/she log in with same account because not all devices created the client message so we can not update them if there is not any client message. once message is created on server end we will create the message for all)
              socket.emit("message:create-user-message-res", {
                isSuccess: true,
                clientMessageId: clientMessageId,
                messageId: newMessage._id,
                chatId: messageChatId
              })

              await sendMessageToOtherMembersAndUpdateMessageStatusForSender(
                io,
                clientMessageId,
                newMessage._id
              )

              // socket.emit("message:create-user-message-res", {
              //   isSuccess: true,
              //   message: createdNewMessage,
              //   clientMessageId: clientMessageId
              // })
            } else {
              if (
                userMessage.hasOwnProperty("hasMediaContent") &&
                userMessage.hasMediaContent &&
                (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
                  (userMessage.hasOwnProperty("hasDirectMediaContentPath") &&
                    userMessage.hasDirectMediaContentPath === false))
              ) {
                await deleteAwsS3Object(userMessage.mediaContentPath)
              }
              return socket.emit("message:create-user-message-res", {
                isSuccess: false,
                clientMessageId: clientMessageId,
                chatId: messageChatId,
                error:
                  "You are not allowed to send message to this chat, First ask chat admin to add you in the chat group."
              })
            }
          } else {
            if (
              userMessage.hasOwnProperty("hasMediaContent") &&
              userMessage.hasMediaContent &&
              (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
                (userMessage.hasOwnProperty("hasDirectMediaContentPath") &&
                  userMessage.hasDirectMediaContentPath === false))
            ) {
              await deleteAwsS3Object(userMessage.mediaContentPath)
            }
            return socket.emit("message:create-user-message-res", {
              isSuccess: false,
              clientMessageId: clientMessageId,
              chatId: messageChatId,
              error: "Send all the required fields with request."
            })
          }
        } else {
          if (
            userMessage.hasOwnProperty("hasMediaContent") &&
            userMessage.hasMediaContent &&
            (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
              (userMessage.hasOwnProperty("hasDirectMediaContentPath") &&
                userMessage.hasDirectMediaContentPath === false))
          ) {
            await deleteAwsS3Object(userMessage.mediaContentPath)
          }
          return socket.emit("message:create-user-message-res", {
            isSuccess: false,
            clientMessageId: clientMessageId,
            chatId: messageChatId,
            error: "You are not logged in, Please log in first"
          })
        }
      } catch (err) {
        if (
          userMessage.hasOwnProperty("hasMediaContent") &&
          userMessage.hasMediaContent &&
          (!userMessage.hasOwnProperty("hasDirectMediaContentPath") ||
            (userMessage.hasOwnProperty("hasDirectMediaContentPath") &&
              userMessage.hasDirectMediaContentPath === false))
        ) {
          await deleteAwsS3Object(userMessage.mediaContentPath)
        }

        console.log(
          errorLog("Server Error In Creating Message socket"),
          mainErrorLog(err)
        )
        return socket.emit("message:create-user-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Server error in sending message, Please send it again"
        })
      }
    })

    socket.on("message:create-user-text-message", async data => {
      const { userMessage } = data
      let clientMessageId = ""
      let messageChatId = userMessage.chat

      if (
        userMessage.hasOwnProperty("clientMessageId") &&
        userMessage.clientMessageId !== ""
      ) {
        clientMessageId = userMessage.clientMessageId
      } else {
        return socket.emit("message:create-user-text-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Please send client message id."
        })
      }

      try {
        if (socket.loginUser) {
          const newMessageData = {}

          if (messageChatId) {
            let messageChat = await Chat.findOne({
              _id: messageChatId,
              currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } },
              isDeleted: false
            })
              .select({ isGroupChat: 1, currentChatMembers: 1 })
              .lean()

            if (messageChat) {
              if (!messageChat.isGroupChat) {
                let otherUserId = messageChat.currentChatMembers.find(
                  userId => userId.toString() !== socket.loginUser.id.toString()
                )

                if (!checkInFollowing(socket.loginUser.id, otherUserId)) {
                  return socket.emit("message:create-user-text-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error:
                      "You are not allowed to send message to this chat, First follow him/her"
                  })
                }
              }

              newMessageData.chat = messageChat._id
              newMessageData.sender = socket.loginUser.id
              newMessageData.reader = messageChat.currentChatMembers
              newMessageData.seenStatus = [
                { seenBy: socket.loginUser.id, seenTime: Date.now() }
              ]

              if (
                userMessage.hasOwnProperty("textContent") &&
                userMessage.textContent !== ""
              ) {
                newMessageData.textContent = userMessage.textContent
              } else {
                return socket.emit("message:create-user-text-message-res", {
                  isSuccess: false,
                  clientMessageId: clientMessageId,
                  chatId: messageChatId,
                  error: "You can not create an empty message."
                })
              }

              if (
                userMessage.isRepliedMessage &&
                userMessage.hasOwnProperty("repliedTo")
              ) {
                let userRepliedMessage = await Message.findById(
                  userMessage.repliedTo
                )
                  .select({ chat: 1 })
                  .lean()
                if (
                  userRepliedMessage &&
                  userRepliedMessage.chat.toString() ===
                    messageChat._id.toString()
                ) {
                  newMessageData.isRepliedMessage = true
                  newMessageData.repliedTo = userRepliedMessage._id
                } else {
                  return socket.emit("message:create-user-text-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "You are not allowed to reply to this message."
                  })
                }
              } else {
                newMessageData.isRepliedMessage = false
              }

              let newMessage = new Message(newMessageData)
              newMessage = await newMessage.save()

              //here i send the event to client that has created the message only (not all devices where he/she log in with same account because not all devices created the client message so we can not update them if there is not any client message. once message is created on server end we will create the message for all)
              socket.emit("message:create-user-text-message-res", {
                isSuccess: true,
                clientMessageId: clientMessageId,
                messageId: newMessage._id,
                chatId: messageChatId
              })

              await sendMessageToOtherMembersAndUpdateMessageStatusForSender(
                io,
                clientMessageId,
                newMessage._id
              )
            } else {
              return socket.emit("message:create-user-text-message-res", {
                isSuccess: false,
                clientMessageId: clientMessageId,
                chatId: messageChatId,
                error:
                  "You are not allowed to send message to this chat, First ask chat admin to add you in the chat group"
              })
            }
          } else {
            return socket.emit("message:create-user-text-message-res", {
              isSuccess: false,
              clientMessageId: clientMessageId,
              chatId: messageChatId,
              error: "Send all the required fields with request."
            })
          }
        } else {
          return socket.emit("message:create-user-text-message-res", {
            isSuccess: false,
            clientMessageId: clientMessageId,
            chatId: messageChatId,
            error: "You are not logged in, Please log in first."
          })
        }
      } catch (err) {
        console.log(
          errorLog("Server Error In Creating User Text Message socket"),
          mainErrorLog(err)
        )
        return socket.emit("message:create-user-text-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Server error in sending message, Please send it again"
        })
      }
    })
    socket.on("message:create-user-media-url-message", async data => {
      const { userMessage } = data
      let clientMessageId = ""
      let messageChatId = userMessage.chat

      if (
        userMessage.hasOwnProperty("clientMessageId") &&
        userMessage.clientMessageId !== ""
      ) {
        clientMessageId = userMessage.clientMessageId
      } else {
        return socket.emit("message:create-user-media-url-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Please send client message id."
        })
      }

      try {
        if (socket.loginUser) {
          const newMessageData = {}

          if (messageChatId) {
            let messageChat = await Chat.findOne({
              _id: messageChatId,
              currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } },
              isDeleted: false
            })
              .select({ isGroupChat: 1, currentChatMembers: 1 })
              .lean()

            if (messageChat) {
              if (!messageChat.isGroupChat) {
                let otherUserId = messageChat.currentChatMembers.find(
                  userId => userId.toString() !== socket.loginUser.id.toString()
                )

                if (!checkInFollowing(socket.loginUser.id, otherUserId)) {
                  return socket.emit(
                    "message:create-user-media-url-message-res",
                    {
                      isSuccess: false,
                      clientMessageId: clientMessageId,
                      chatId: messageChatId,
                      error:
                        "You are not allowed to send message to this chat, First follow him/her"
                    }
                  )
                }
              }

              newMessageData.chat = messageChat._id
              newMessageData.sender = socket.loginUser.id
              newMessageData.reader = messageChat.currentChatMembers
              newMessageData.seenStatus = [
                { seenBy: socket.loginUser.id, seenTime: Date.now() }
              ]
              if (
                userMessage.hasOwnProperty("hasMediaContent") &&
                userMessage.hasMediaContent === true
              ) {
                if (
                  userMessage.hasOwnProperty("mediaContentType") &&
                  userMessage.hasOwnProperty("mediaContentPath")
                ) {
                  newMessageData.hasMediaContent = true
                  newMessageData.hasDirectMediaContentPath = true
                  newMessageData.mediaContentPath = userMessage.mediaContentPath
                  newMessageData.mediaContentType = userMessage.mediaContentType
                } else {
                  return socket.emit(
                    "message:create-user-media-url-message-res",
                    {
                      isSuccess: false,
                      clientMessageId: clientMessageId,
                      chatId: messageChatId,
                      error: "Send all the required data with request"
                    }
                  )
                }
              } else {
                return socket.emit(
                  "message:create-user-media-url-message-res",
                  {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "Please send media data with request"
                  }
                )
              }

              if (
                userMessage.isRepliedMessage &&
                userMessage.hasOwnProperty("repliedTo")
              ) {
                let userRepliedMessage = await Message.findById(
                  userMessage.repliedTo
                )
                  .select({ chat: 1 })
                  .lean()
                if (
                  userRepliedMessage &&
                  userRepliedMessage.chat.toString() ===
                    messageChat._id.toString()
                ) {
                  newMessageData.isRepliedMessage = true
                  newMessageData.repliedTo = userRepliedMessage._id
                } else {
                  return socket.emit(
                    "message:create-user-media-url-message-res",
                    {
                      isSuccess: false,
                      clientMessageId: clientMessageId,
                      chatId: messageChatId,
                      error: "You are not allowed to reply to this message."
                    }
                  )
                }
              } else {
                newMessageData.isRepliedMessage = false
              }

              let newMessage = new Message(newMessageData)
              newMessage = await newMessage.save()

              //here i send the event to client that has created the message only (not all devices where he/she log in with same account because not all devices created the client message so we can not update them if there is not any client message. once message is created on server end we will create the message for all)
              socket.emit("message:create-user-media-url-message-res", {
                isSuccess: true,
                clientMessageId: clientMessageId,
                messageId: newMessage._id,
                chatId: messageChatId
              })

              await sendMessageToOtherMembersAndUpdateMessageStatusForSender(
                io,
                clientMessageId,
                newMessage._id
              )
            } else {
              return socket.emit("message:create-user-media-url-message-res", {
                isSuccess: false,
                clientMessageId: clientMessageId,
                chatId: messageChatId,
                error:
                  "You are not allowed to send message to this chat, First ask chat admin to add you in the chat group"
              })
            }
          } else {
            return socket.emit("message:create-user-media-url-message-res", {
              isSuccess: false,
              clientMessageId: clientMessageId,
              chatId: messageChatId,
              error: "Send all the required fields with request."
            })
          }
        } else {
          return socket.emit("message:create-user-media-url-message-res", {
            isSuccess: false,
            clientMessageId: clientMessageId,
            chatId: messageChatId,
            error: "You are not logged in, Please log in first."
          })
        }
      } catch (err) {
        console.log(
          errorLog("Server Error In Creating User Text Message socket"),
          mainErrorLog(err)
        )
        return socket.emit("message:create-user-media-url-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Server error in sending message, Please send it again"
        })
      }
    })
    socket.on("message:create-user-media-message", async data => {
      const { userMessage } = data
      let clientMessageId = ""
      let messageChatId = userMessage.chat

      if (
        userMessage.hasOwnProperty("clientMessageId") &&
        userMessage.clientMessageId !== ""
      ) {
        clientMessageId = userMessage.clientMessageId
      } else {
        return socket.emit("message:create-user-media-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Please send client message id."
        })
      }

      try {
        if (socket.loginUser) {
          const newMessageData = {}

          if (messageChatId) {
            let messageChat = await Chat.findOne({
              _id: messageChatId,
              currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } },
              isDeleted: false
            })
              .select({ isGroupChat: 1, currentChatMembers: 1 })
              .lean()

            if (messageChat) {
              if (!messageChat.isGroupChat) {
                let otherUserId = messageChat.currentChatMembers.find(
                  userId => userId.toString() !== socket.loginUser.id.toString()
                )

                if (!checkInFollowing(socket.loginUser.id, otherUserId)) {
                  return socket.emit("message:create-user-media-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error:
                      "You are not allowed to send message to this chat, First follow him/her"
                  })
                }
              }

              newMessageData.chat = messageChat._id
              newMessageData.sender = socket.loginUser.id
              newMessageData.reader = messageChat.currentChatMembers
              newMessageData.seenStatus = [
                { seenBy: socket.loginUser.id, seenTime: Date.now() }
              ]
              if (
                userMessage.hasOwnProperty("hasMediaContent") &&
                userMessage.hasMediaContent === true
              ) {
                if (
                  userMessage.hasOwnProperty("mediaContentType") &&
                  userMessage.hasOwnProperty("mediaContentPath")
                ) {
                  newMessageData.hasMediaContent = true
                  newMessageData.hasDirectMediaContentPath = false
                  newMessageData.mediaContentPath = userMessage.mediaContentPath
                  newMessageData.mediaContentType = userMessage.mediaContentType
                } else {
                  return socket.emit("message:create-user-media-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "Send all the required data with request"
                  })
                }
              } else {
                return socket.emit("message:create-user-media-message-res", {
                  isSuccess: false,
                  clientMessageId: clientMessageId,
                  chatId: messageChatId,
                  error: "Please send media data with request"
                })
              }

              if (
                userMessage.isRepliedMessage &&
                userMessage.hasOwnProperty("repliedTo")
              ) {
                let userRepliedMessage = await Message.findById(
                  userMessage.repliedTo
                )
                  .select({ chat: 1 })
                  .lean()
                if (
                  userRepliedMessage &&
                  userRepliedMessage.chat.toString() ===
                    messageChat._id.toString()
                ) {
                  newMessageData.isRepliedMessage = true
                  newMessageData.repliedTo = userRepliedMessage._id
                } else {
                  return socket.emit("message:create-user-media-message-res", {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error: "You are not allowed to reply to this message."
                  })
                }
              } else {
                newMessageData.isRepliedMessage = false
              }

              let newMessage = new Message(newMessageData)
              newMessage = await newMessage.save()

              //here i send the event to client that has created the message only (not all devices where he/she log in with same account because not all devices created the client message so we can not update them if there is not any client message. once message is created on server end we will create the message for all)
              socket.emit("message:create-user-media-message-res", {
                isSuccess: true,
                clientMessageId: clientMessageId,
                messageId: newMessage._id,
                chatId: messageChatId
              })

              await sendMessageToOtherMembersAndUpdateMessageStatusForSender(
                io,
                clientMessageId,
                newMessage._id
              )
            } else {
              return socket.emit("message:create-user-media-message-res", {
                isSuccess: false,
                clientMessageId: clientMessageId,
                chatId: messageChatId,
                error:
                  "You are not allowed to send message to this chat, First ask chat admin to add you in the chat group"
              })
            }
          } else {
            return socket.emit("message:create-user-media-message-res", {
              isSuccess: false,
              clientMessageId: clientMessageId,
              chatId: messageChatId,
              error: "Send all the required fields with request."
            })
          }
        } else {
          return socket.emit("message:create-user-media-message-res", {
            isSuccess: false,
            clientMessageId: clientMessageId,
            chatId: messageChatId,
            error: "You are not logged in, Please log in first."
          })
        }
      } catch (err) {
        console.log(
          errorLog("Server Error In Creating User Text Message socket"),
          mainErrorLog(err)
        )
        return socket.emit("message:create-user-media-message-res", {
          isSuccess: false,
          clientMessageId: clientMessageId,
          chatId: messageChatId,
          error: "Server error in sending message, Please send it again"
        })
      }
    })

    socket.on(
      "message:create-transloadit-user-media-message-entry",
      async data => {
        const { messageData } = data
        let clientMessageId = ""
        let assemblyId = messageData.assemblyId
        let fileId = messageData.fileId
        let messageChatId = messageData.chat

        if (
          messageData.hasOwnProperty("clientMessageId") &&
          messageData.clientMessageId !== "" &&
          messageData.hasOwnProperty("assemblyId") &&
          messageData.assemblyId !== "" &&
          messageData.hasOwnProperty("fileId") &&
          messageData.fileId !== ""
        ) {
          clientMessageId = messageData.clientMessageId
          assemblyId = messageData.assemblyId
          fileId = messageData.fileId
        } else {
          createDeletedTransloaditUserMediaMessageEntry(assemblyId, fileId)
          return socket.emit(
            "message:create-transloadit-user-media-message-entry-res",
            {
              isSuccess: false,
              error: "Error In Sending Media Data With Request.",
              clientMessageId: clientMessageId,
              chatId: messageChatId
            }
          )
        }

        try {
          if (socket.loginUser) {
            const userMediaMessageEntryData = {}

            if (messageData.hasOwnProperty("chat") && messageData.chat !== "") {
              let messageChat = await Chat.findOne({
                _id: messageData.chat,
                currentChatMembers: {
                  $elemMatch: { $eq: socket.loginUser.id }
                },
                isDeleted: false
              })
                .select({ isGroupChat: 1, currentChatMembers: 1 })
                .lean()

              if (messageChat) {
                if (!messageChat.isGroupChat) {
                  let otherUserId = messageChat.currentChatMembers.find(
                    userId =>
                      userId.toString() !== socket.loginUser.id.toString()
                  )

                  if (!checkInFollowing(socket.loginUser.id, otherUserId)) {
                    createDeletedTransloaditUserMediaMessageEntry(
                      assemblyId,
                      fileId
                    )
                    return socket.emit(
                      "message:create-transloadit-user-media-message-entry-res",
                      {
                        isSuccess: false,
                        clientMessageId: clientMessageId,
                        chatId: messageChatId,
                        error:
                          "You are not allowed to send message to this chat, First follow him/her"
                      }
                    )
                  }
                }

                if (
                  messageData.isRepliedMessage &&
                  messageData.hasOwnProperty("repliedTo")
                ) {
                  let userRepliedMessage = await Message.findById(
                    messageData.repliedTo
                  )
                    .select({ chat: 1 })
                    .lean()
                  if (
                    userRepliedMessage &&
                    userRepliedMessage.chat.toString() ===
                      messageChat._id.toString()
                  ) {
                    userMediaMessageEntryData.isRepliedMessage = true
                    userMediaMessageEntryData.repliedTo = userRepliedMessage._id
                  } else {
                    createDeletedTransloaditUserMediaMessageEntry(
                      assemblyId,
                      fileId
                    )
                    return socket.emit(
                      "message:create-transloadit-user-media-message-entry-res",
                      {
                        isSuccess: false,
                        clientMessageId: clientMessageId,
                        chatId: messageChatId,
                        error: "You are not allowed to reply to this message"
                      }
                    )
                  }
                } else {
                  userMediaMessageEntryData.isRepliedMessage = false
                }
                userMediaMessageEntryData.assemblyId = assemblyId
                userMediaMessageEntryData.fileId = fileId
                userMediaMessageEntryData.sender = socket.loginUser.id
                userMediaMessageEntryData.chatId = messageData.chat
                userMediaMessageEntryData.clientMessageId = clientMessageId

                let userMediaMessageEntry =
                  new TransloaditUserMediaMessageEntry(
                    userMediaMessageEntryData
                  )

                userMediaMessageEntry = await userMediaMessageEntry.save()

                socket.emit(
                  "message:create-transloadit-user-media-message-entry-res",
                  {
                    isSuccess: true,
                    clientMessageId: clientMessageId,
                    chatId: messageData.chat
                  }
                )
              } else {
                createDeletedTransloaditUserMediaMessageEntry(
                  assemblyId,
                  fileId
                )
                return socket.emit(
                  "message:create-transloadit-user-media-message-entry-res",
                  {
                    isSuccess: false,
                    clientMessageId: clientMessageId,
                    chatId: messageChatId,
                    error:
                      "You are not allowed to send message to this chat, First ask chat admin to add you in the chat group"
                  }
                )
              }
            } else {
              createDeletedTransloaditUserMediaMessageEntry(assemblyId, fileId)
              return socket.emit(
                "message:create-transloadit-user-media-message-entry-res",
                {
                  isSuccess: false,
                  clientMessageId: clientMessageId,
                  chatId: messageChatId,
                  error: "Send all the required fields with request"
                }
              )
            }
          } else {
            createDeletedTransloaditUserMediaMessageEntry(assemblyId, fileId)
            return socket.emit(
              "message:create-transloadit-user-media-message-entry-res",
              {
                isSuccess: false,
                clientMessageId: clientMessageId,
                chatId: messageChatId,
                error: "You are not logged in, Please log in first"
              }
            )
          }
        } catch (err) {
          console.log(
            errorLog(
              "Server Error In Creating Transloadit User Media Message Entry socket"
            ),
            mainErrorLog(err)
          )
          createDeletedTransloaditUserMediaMessageEntry(assemblyId, fileId)
          return socket.emit(
            "message:create-transloadit-user-media-message-entry-res",
            {
              isSuccess: false,
              clientMessageId: clientMessageId,
              chatId: messageChatId,
              error: "Server error in sending message, Please send it again"
            }
          )
        }
      }
    )
  } catch (err) {
    console.log(
      errorLog("Server Error In Chat Handler Socket"),
      mainErrorLog(err)
    )
  }
}

async function createDeletedTransloaditUserMediaMessageEntry(
  assemblyId,
  fileId
) {
  try {
    if (assemblyId && fileId) {
      let deletedUserMediaMessageEntry = new TransloaditUserMediaMessageEntry({
        isMessageDeleted: true,
        assemblyId: assemblyId,
        fileId: fileId
      })
      await deletedUserMediaMessageEntry.save()
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Creating Deleted Media Message Request"),
      mainErrorLog(err)
    )
  }
}

async function sendMessageToOtherMembersAndUpdateStatus(
  socket,
  io,
  messageChat,
  newMessageDocument,
  createdNewMessage,
  clientMessageId
) {
  let eventData = { message: createdNewMessage }
  messageChat.currentChatMembers.forEach(userId => {
    if (socket.loginUser.id.toString() !== userId.toString()) {
      io.to(userId.toString()).emit("message:new-user-message", eventData)
    }
  })
  newMessageDocument.deliveryStatus.isDelivered = true
  newMessageDocument.deliveryStatus.deliveredTime = Date.now()
  await newMessageDocument.save()
  io.to(socket.loginUser.id.toString()).emit("message:user-message-delivered", {
    messageId: newMessageDocument._id,
    clientMessageId: clientMessageId,
    chatId: newMessageDocument.chat,
    deliveredTime: Date.now()
  })
}
