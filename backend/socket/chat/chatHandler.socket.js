const User = require("../../models/user")
const Chat = require("../../models/chat")

exports.chatHandler = async (io, socket) => {
  socket.on("chat:message-start-typing", async data => {
    if (socket.loginUser) {
      let chat = await Chat.findOne({
        _id: data.chatId,
        currentChatMembers: { $elemMatch: { $eq: socket.loginUser.id } }
      })
        .select({ currentChatMembers: 1, isGroupChat: 1 })
        .lean()
      if (chat) {
        console.log("chat:", chat)
        let user = await User.findById(socket.loginUser.id)
          .select({
            firstName: 1,
            lastName: 1
          })
          .lean()
        let data = {
          user: user,
          chatId: chat._id.toString(),
          isGroupChat: chat.isGroupChat
        }

        chat.currentChatMembers.forEach(userId => {
          if (userId.toString() !== socket.loginUser.id.toString()) {
            io.to(userId.toString()).emit("chat:message-start-typing", data)
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
        console.log("chat:", chat)
        let data = {
          chatId: chat._id.toString(),
          isGroupChat: chat.isGroupChat
        }

        chat.currentChatMembers.forEach(userId => {
          if (userId.toString() !== socket.loginUser.id.toString()) {
            io.to(userId.toString()).emit("chat:message-stop-typing", data)
          }
        })
      }
    }
  })
}