import { io } from "socket.io-client"
const socket = io()

;(async function () {
  socket.on("connect", () => {
    console.log("client connected")
  })
  socket.on("connect_error", err => {
    console.log("client connection error:", err)
  })
  socket.on("disconnect", reason => {
    console.log("client disconnect:", reason)
  })

  socket.prependAny((eventName, ...args) => {
    console.log(
      "socket event:",
      "_____eventName:",
      eventName,
      "____args:",
      args
    )
  })
  //////////////////////////////////////////////////
  //  define socket handler here
  let { createUserSocket } = await import("./user-socket")
  createUserSocket(socket)
  if (pageName && pageName === "home") {
    let { createHomeSocket } = await import("./homeSocket.dev.js")
    createHomeSocket(socket)
  }
  if (pageName && pageName === "profile") {
    if (isLogin && isLogin === true) {
      let { createProfileSocket } = await import(
        "./profile-socket/mainProfile.dev.js"
      )
      createProfileSocket(socket)
    }
    if (isOwner === false) {
      let { createUpdateForAllSocket } = await import(
        "./profile-socket/updateForAllSocket.dev.js"
      )
      createUpdateForAllSocket(socket)
    }
  }

  if (pageName && pageName === "chat") {
    let { createMainChatSocket } = await import(
      "./chat-socket/mainChatSocket.dev.js"
    )
    createMainChatSocket(socket)
  }
})()

export function sendChatMessageStartTypingSocket(chatId) {
  let eventData = {
    chatId: chatId.toString()
  }
  socket.emit("chat:message-start-typing", eventData)
}
export function sendChatMessageStopTypingSocket(chatId) {
  let eventData = {
    chatId: chatId.toString()
  }
  socket.emit("chat:message-stop-typing", eventData)
}
