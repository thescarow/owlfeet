;(async function () {
  if (!isInitModule) {
    console.log("init isInitModule:", isInitModule, "socket:", socket)
    let { io } = await import("socket.io-client")
    socket = io()
    console.log("checking socket:", socket)
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
        "socketId:",
        socket.id,
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
    isInitModule = true
  }
  console.log(
    "init outside block isInitModule:",
    isInitModule,
    "socket:",
    socket
  )
})()
console.log(
  "init outside function isInitModule:",
  isInitModule,
  "socket:",
  socket
)
export function sendChatMessageStartTypingSocket(chatId) {
  console.log("start isInitModule:", isInitModule, "socket:", socket)

  let eventData = {
    chatId: chatId.toString()
  }
  // socket.emit("chat:message-start-typing", eventData)
}
export function sendChatMessageStopTypingSocket(chatId) {
  console.log("stop isInitModule:", isInitModule, "socket:", socket)
  let eventData = {
    chatId: chatId.toString()
  }
  // socket.emit("chat:message-stop-typing", eventData)
}
