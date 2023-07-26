const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
///////////////////////////////////////////

const linkify = require("linkifyjs")
const { getLinkPreview } = require("link-preview-js")
const dns = require("node:dns")

const User = require("../../models/user")
const Message = require("../../models/message")
const Chat = require("../../models/chat")
//////////////////////
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")
///////
const {
  selectSafeMessageField,
  selectRepliedToMessageField,
  filterMessageFieldForDeletedForAll
} = require("../../common/filter-field/filterMessageField")

const {
  selectChatFieldForChatBox
} = require("../../common/filter-field/filterChatField")
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
      if (
        userMessage.hasOwnProperty("clientMessageId") &&
        userMessage.clientMessageId !== ""
      ) {
        clientMessageId = userMessage.clientMessageId
      } else {
        return socket.emit("message:create-user-message-res", {
          isSuccess: false,
          error: "Please send client message id.",
          clientMessageId: clientMessageId
        })
      }

      try {
        if (socket.loginUser) {
          const newMessageData = {}

          if (userMessage.chat) {
            let messageChat = await Chat.findOne({
              _id: userMessage.chat,
              currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } }
            })
              .select({ isGroupChat: 1, currentChatMembers: 1 })
              .lean()

            if (messageChat) {
              if (!messageChat.isGroupChat) {
                let otherUserId = messageChat.currentChatMembers.find(
                  userId => userId.toString() != socket.loginUser.id.toString()
                )

                if (!checkInFollowing(socket.loginUser.id, otherUserId)) {
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    error:
                      "You are not allowed to send message to this chat, First follow him/her",
                    clientMessageId: clientMessageId
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
                    userMessage.mediaContentMimeType
                  newMessageData.mediaContentPath = userMessage.mediaContentPath
                } else {
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    error: "Send all the required fields with request",
                    clientMessageId: clientMessageId
                  })
                }
              } else {
                if (userMessage.hasOwnProperty("textContent")) {
                  newMessageData.textContent = userMessage.textContent
                } else {
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    error: "Send all the required fields with request",
                    clientMessageId: clientMessageId
                  })
                }
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
                  return socket.emit("message:create-user-message-res", {
                    isSuccess: false,
                    error: "You are not allowed to reply to this message",
                    clientMessageId: clientMessageId
                  })
                }
              } else {
                newMessageData.isRepliedMessage = false
              }

              let newMessageDocument = new Message(newMessageData)

              newMessageDocument = await newMessageDocument.save()

              socket.emit("message:client-message-sent", {
                chatId: messageChat._id,
                clientMessageId: clientMessageId
              })

              let createdNewMessage = await Message.findById(
                newMessageDocument._id
              )
                .populate({
                  path: "sender",
                  select: {
                    username: 1,
                    firstName: 1,
                    lastName: 1,
                    profile: 1
                  },
                  options: {
                    lean: true
                  }
                })
                .populate({
                  path: "chat",
                  select: selectChatFieldForChatBox,
                  options: {
                    lean: true
                  }
                })
                .populate({
                  path: "repliedTo",
                  select: selectRepliedToMessageField,
                  populate: {
                    path: "sender",
                    select: { username: 1, firstName: 1, lastName: 1 }
                  },

                  options: {
                    lean: true
                  }
                })
                .select(selectSafeMessageField)
                .lean()

              if (
                createdNewMessage.isRepliedMessage === true &&
                createdNewMessage.repliedTo.isDeletedForAll === true
              ) {
                createdNewMessage.repliedTo =
                  filterMessageFieldForDeletedForAll(
                    createdNewMessage.repliedTo
                  )
              }

              if (
                createdNewMessage.sender.hasOwnProperty("profile") &&
                createdNewMessage.sender.profile !== ""
              ) {
                createdNewMessage.sender.profile =
                  await signedUrlForGetAwsS3Object(
                    createdNewMessage.sender.profile
                  )
              }

              if (
                createdNewMessage.hasMediaContent &&
                createdNewMessage.mediaContentType !== "youtube"
              ) {
                createdNewMessage.mediaContentPath =
                  await signedUrlForGetAwsS3Object(
                    createdNewMessage.mediaContentPath
                  )
              } else {
                if (
                  createdNewMessage.hasOwnProperty("textContent") &&
                  createdNewMessage.textContent !== ""
                ) {
                  // const linkifyOptions = {
                  //   attributes: null,
                  //   className: "hello",
                  //   defaultProtocol: "http",
                  //   events: null,
                  //   format: (value, type) => value,
                  //   formatHref: (href, type) => href,
                  //   ignoreTags: [],
                  //   nl2br: false,
                  //   rel: null,
                  //   render: null,
                  //   tagName: "a",
                  //   target: null,
                  //   truncate: Infinity,
                  //   validate: true
                  // }
                  let linkPreviewOptions = {
                    // resolveDNSHost: async url => {
                    //   return new Promise((resolve, reject) => {
                    //     const hostname = new URL(url).hostname
                    //     dns.lookup(hostname, (err, address, family) => {
                    //       if (err) {
                    //         reject(err)
                    //         return
                    //       }

                    //       resolve(address) // if address resolves to localhost or '127.0.0.1' library will throw an error
                    //     })
                    //   }).catch(e => {
                    //     // will throw a detected redirection to localhost
                    //   })
                    // },
                    // imagesPropertyType: "og", // fetches only open-graph images,

                    headers: {
                      "user-agent": "googlebot", // fetches with googlebot crawler user agent
                      "Accept-Language": "en-US" // fetches site for French language
                      // ...other optional HTTP request headers
                    },
                    // timeout: 1000,
                    followRedirects: `manual`,
                    handleRedirects: (baseURL, forwardedURL) => {
                      const baseURLObj = new URL(baseURL)
                      const forwardedURLObj = new URL(forwardedURL)
                      if (
                        forwardedURLObj.hostname === baseURLObj.hostname ||
                        forwardedURLObj.hostname ===
                          "www." + baseURLObj.hostname ||
                        "www." + forwardedURLObj.hostname ===
                          baseURLObj.hostname
                      ) {
                        return true
                      } else {
                        return false
                      }
                    }
                  }
                  let allLinks = linkify.find(createdNewMessage.textContent)

                  if (allLinks.length > 0) {
                    console.log("allLinks:", allLinks)
                    try {
                      let data = await getLinkPreview(
                        allLinks[0].href,
                        linkPreviewOptions
                      )
                      if (data) {
                        console.log("linkPreviewData:", data)
                        createdNewMessage.hasLinkPreview = true
                        createdNewMessage.linkPreviewData = data
                      }
                    } catch (err) {
                      createdNewMessage.hasLinkPreview = false
                      console.log("linkPreviewError:", err)
                    }

                    createdNewMessage.hasLinks = true
                    createdNewMessage.linksData = allLinks
                  } else {
                    createdNewMessage.hasLinks = false
                    createdNewMessage.hasLinkPreview = false
                  }
                }
              }

              socket.emit("message:create-user-message-res", {
                isSuccess: true,
                message: createdNewMessage,
                clientMessageId: clientMessageId
              })

              sendMessageToOtherMembersAndUpdateStatus(
                socket,
                io,
                messageChat,
                newMessageDocument,
                createdNewMessage,
                clientMessageId
              )
            } else {
              if (
                userMessage.hasMediaContent &&
                userMessage.mediaContentType !== "youtube"
              ) {
                await deleteAwsS3Object(userMessage.mediaContentPath)
              }
              return socket.emit("message:create-user-message-res", {
                isSuccess: false,
                error:
                  "You are not allowed to send message to this chat, First ask chat admin to add you in the chat group",
                clientMessageId: clientMessageId
              })
            }
          } else {
            return socket.emit("message:create-user-message-res", {
              isSuccess: false,
              error: "Send all the required fields with request",
              clientMessageId: clientMessageId
            })
          }
        } else {
          return socket.emit("message:create-user-message-res", {
            isSuccess: false,
            error: "You are not logged in, Please log in first",
            clientMessageId: clientMessageId
          })
        }
      } catch (err) {
        console.log(
          errorLog("Server Error In Creating Message socket"),
          mainErrorLog(err)
        )
        return socket.emit("message:create-user-message-res", {
          isSuccess: false,
          error: "Server error in sending message, Please send it again",
          clientMessageId: clientMessageId
        })
      }
    })
  } catch (err) {
    console.log(
      errorLog("Server Error In Chat Handler Socket"),
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
      io.to(userId.toString()).emit("message:new-message", eventData)
    }
  })
  newMessageDocument.deliveryStatus.isDelivered = true
  newMessageDocument.deliveryStatus.deliveredTime = Date.now()
  await newMessageDocument.save()
  io.to(socket.loginUser.id.toString()).emit("message:message-delivered", {
    messageId: newMessageDocument._id,
    clientMessageId: clientMessageId,
    chatId: newMessageDocument.chat,
    deliveredTime: Date.now()
  })
}
