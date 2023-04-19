const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
///////////////////////////////////////////

const User = require("../../models/user")
const Chat = require("../../models/chat")
const Message = require("../../models/message")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

exports.chatHandler = async (io, socket) => {
  try {
    socket.on("chat:message-start-typing", async data => {
      if (socket.loginUser) {
        let chat = await Chat.findOne({
          _id: data.chatId,
          currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } }
        })
          .select({ currentChatMembers: 1, isGroupChat: 1 })
          .lean()
        if (chat) {
          let user = await User.findById(socket.loginUser.id)
            .select({
              firstName: 1,
              lastName: 1
            })
            .lean()
          let eventData = {
            user: user,
            chatId: chat._id.toString(),
            isGroupChat: chat.isGroupChat
          }

          chat.currentChatMembers.forEach(userId => {
            if (userId.toString() !== socket.loginUser.id.toString()) {
              io.to(userId.toString()).emit(
                "chat:message-start-typing",
                eventData
              )
            }
          })
        }
      }
    })
    socket.on("chat:message-stop-typing", async data => {
      if (socket.loginUser) {
        let chat = await Chat.findOne({
          _id: data.chatId,
          currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } }
        })
          .select({ currentChatMembers: 1, isGroupChat: 1 })
          .lean()
        if (chat) {
          let eventData = {
            chatId: chat._id.toString(),
            isGroupChat: chat.isGroupChat
          }

          chat.currentChatMembers.forEach(userId => {
            if (userId.toString() !== socket.loginUser.id.toString()) {
              io.to(userId.toString()).emit(
                "chat:message-stop-typing",
                eventData
              )
            }
          })
        }
      }
    })
    socket.on("chat:update-message-seen-status", async data => {
      if (socket.loginUser) {
        let message = await Message.findOne({
          _id: data.messageId,
          reader: { $elemMatch: { $eq: socket.loginUser.id } }
        }).select({ _id: 1, seenStatus: 1, reader: 1, sender: 1, chat: 1 })

        if (message) {
          let userExist = message.seenStatus.find(entry => {
            return entry.seenBy.toString() === socket.loginUser.id.toString()
          })
          if (!userExist) {
            message.seenStatus.push({
              seenBy: socket.loginUser.id,
              seenTime: Date.now()
            })

            await message.save()
            let updatedMessage = await Message.findById(message._id)
              .select({ _id: 1, seenStatus: 1, reader: 1, sender: 1, chat: 1 })
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
              "chat:update-message-seen-status",
              {
                messageId: updatedMessage._id.toString(),
                chatId: updatedMessage.chat.toString(),
                messageSeenStatusCount: updatedMessage.seenStatus.length,
                messageReaderCount: updatedMessage.reader.length,
                pushedUser: pushedUser,
                pushedUserTime: Date.now()
              }
            )
            io.to(socket.loginUser.id.toString()).emit(
              "chat:message-seen-by-self",
              {
                chatId: updatedMessage.chat
              }
            )
          }
        }
      }
    })
    socket.on("chat:update-chat-unseen-messages", async data => {
      if (socket.loginUser) {
        let unseenMessages = await Message.find({
          chat: data.chatId,
          reader: { $elemMatch: { $eq: socket.loginUser.id } },
          "seenStatus.seenBy": { $ne: socket.loginUser.id }
        }).select({ _id: 1, seenStatus: 1, reader: 1, sender: 1, chat: 1 })

        if (unseenMessages.length > 0) {
          await Promise.all(
            unseenMessages.map(async message => {
              let userExist = message.seenStatus.find(entry => {
                return (
                  entry.seenBy.toString() === socket.loginUser.id.toString()
                )
              })
              if (!userExist) {
                message.seenStatus.push({
                  seenBy: socket.loginUser.id,
                  seenTime: Date.now()
                })

                await message.save()
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
                  "chat:update-message-seen-status",
                  {
                    messageId: updatedMessage._id.toString(),
                    chatId: updatedMessage.chat.toString(),
                    messageSeenStatusCount: updatedMessage.seenStatus.length,
                    messageReaderCount: updatedMessage.reader.length,
                    pushedUser: pushedUser,
                    pushedUserTime: Date.now()
                  }
                )
                io.to(socket.loginUser.id.toString()).emit(
                  "chat:message-seen-by-self",
                  {
                    chatId: updatedMessage.chat
                  }
                )
              }
            })
          )
        }
      }
    })
  } catch (err) {
    console.log(
      errorLog("Server Error In Chat Handler Socket"),
      mainErrorLog(err)
    )
  }
}
