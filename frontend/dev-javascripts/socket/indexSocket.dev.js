;(async function () {
  if (!IS_INIT_SOCKET_MODULE) {
    let { io } = await import("socket.io-client")
    socket = io() // socket is define in mainLayout File
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
    let { createUserSocket } = await import("./event-handler/user-socket")
    createUserSocket(socket)

    if (pageName && pageName === "home") {
      let { createHomeSocket } = await import("./event-handler/home-socket")
      createHomeSocket(socket)
    }

    if (pageName && pageName === "profile") {
      let { createProfileSocket } = await import(
        "./event-handler/profile-socket"
      )
      createProfileSocket(socket)
    }

    if (pageName && pageName === "chat") {
      let { createChatSocket } = await import("./event-handler/chat-socket")
      createChatSocket(socket)
    }
    IS_INIT_SOCKET_MODULE = true
  }
})()
