const User = require("../../models/user")
const Chat = require("../../models/chat")
// const {
//   selectLoginUserField
// } = require("../../common/filter-field/filterUserField")
exports.userHandler = async (io, socket) => {
  if (socket.loginUser) {
    let loginUser = await User.findById(socket.loginUser.id).select({
      isActive: 1,
      lastActive: 1
    })
    loginUser.isActive = true
    await loginUser.save()
    sendUserActiveEventToOneToOneChatUser(io, socket, loginUser, "user:online")
  }

  socket.on("disconnecting", async () => {
    if (socket.loginUser) {
      let loginUser = await User.findById(socket.loginUser.id).select({
        isActive: 1,
        lastActive: 1
      })
      loginUser.isActive = false
      loginUser.lastActive = Date.now()
      await loginUser.save()
      sendUserActiveEventToOneToOneChatUser(
        io,
        socket,
        loginUser,
        "user:offline"
      )
    }
  })
}
async function sendUserActiveEventToOneToOneChatUser(
  io,
  socket,
  loginUser,
  eventName
) {
  let allOneToOneChats = await Chat.find({
    isGroupChat: false,
    currentChatMembers: { $elemMatch: { $eq: loginUser._id } }
  })
    .select({ currentChatMembers: 1 })
    .lean()

  allOneToOneChats.forEach(chat => {
    let otherUserId = chat.currentChatMembers.find(
      userId => userId.toString() !== loginUser._id.toString()
    )

    let eventData = {
      userId: loginUser._id.toString(),
      chatId: chat._id.toString()
    }
    io.to(otherUserId.toString()).emit(eventName, eventData)
  })
}
