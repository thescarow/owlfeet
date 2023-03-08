const User = require("../../models/user")
const Chat = require("../../models/chat")
const {
  selectLoginUserField
} = require("../../common/filter-field/filterUserField")
exports.userHandler = async (io, socket) => {
  if (socket.loginUser) {
    let loginUser = await User.findById(socket.loginUser.id).select(
      selectLoginUserField
    )
    loginUser.isActive = true
    await loginUser.save()
    sendUserActiveEventToOneToOneChatUser(socket, loginUser, "user:online")
  }

  socket.on("disconnecting", async () => {
    if (socket.loginUser) {
      let loginUser = await User.findById(socket.loginUser.id).select(
        "selectLoginUserField"
      )
      loginUser.isActive = false
      loginUser.lastActive = Date.now()
      await loginUser.save()
      sendUserActiveEventToOneToOneChatUser(socket, loginUser, "user:offline")
    }
  })
}
async function sendUserActiveEventToOneToOneChatUser(
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

    socket
      .to(otherUserId.toString())
      .emit(eventName, loginUser._id.toString(), chat._id.toString())
  })
}
