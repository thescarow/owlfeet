;(async function () {
  if (!IS_INIT_SOCKET_MODULE) {
    let { io } = await import("socket.io-client")
    let clientSocketOptions = {
      query: {
        socketType: "all"
      }
    }
    if (pageName === "call") {
      clientSocketOptions = {
        query: {
          socketType: "call"
        }
      }
    }
    socket = io(clientSocketOptions) // socket is define in mainLayout File
    socket.on("connect", () => {
      console.log("socket connected")
    })
    socket.on("connect_error", err => {
      console.log("socket connection error:", err)
    })
    socket.on("disconnect", reason => {
      console.log("socket disconnect:", reason)
    })

    // socket.prependAny((eventName, ...args) => {
    //   console.log(
    //     "eventName:",
    //     eventName,
    //     "args:",
    //     args,
    //     "socketId:",
    //     socket.id
    //   )
    // })

    //////////////////////////////////////////////////
    //  define socket handler here
    let { createUserSocket } = await import("./event-handler/user-socket")
    createUserSocket(socket)

    if (isLogin === false) {
      let { createUserAuthSocket } = await import(
        "./event-handler/user-auth-socket"
      )
      createUserAuthSocket(socket)
    }

    if (pageName && pageName === "call") {
      let { createCallSocket } = await import("./event-handler/call-socket")
      createCallSocket(socket)
    }

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

      let { createMessageSocket } = await import(
        "./event-handler/message-socket"
      )
      createMessageSocket(socket)
    }
    IS_INIT_SOCKET_MODULE = true
  }
})()
