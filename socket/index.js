const { Server } = require("socket.io")
const cookie = require("cookie")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const { chatHandler } = require("./chat/chatHandler.socket")
const { userHandler } = require("./user/userHandler.socket")
const { callHandler } = require("./call/callHandler.socket")
const { userAuthHandler } = require("./user-auth/userAuthHandler.socket")
const { messageHandler } = require("./message/messageHandler.socket")
exports.createSocketIOInstance = httpServer => {
  const io = new Server(httpServer, {
    serveClient: false
  })

  io.use(async (socket, next) => {
    if (socket.request.headers.cookie) {
      let cookies = cookieParser.signedCookies(
        cookie.parse(socket.request.headers.cookie),
        process.env.COOKIE_PARSER_SECRET
      )
      let token = cookies.user
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
            return next()
          } else {
            socket.loginUser = {
              role: user.userRole,
              id: user.userId,
              username: user.username
            }
            socket.join(user.userId)
            return next()
          }
        })
      } else {
        return next()
      }
    } else {
      next()
    }
  })

  io.on("connection", socket => {
    // socket handlers
    userHandler(io, socket)
    chatHandler(io, socket)
    callHandler(io, socket)
    userAuthHandler(io, socket)
    messageHandler(io, socket)
    if (socket.handshake.query.socketType === "call") {
    }
    /////////////////////////////////
    console.log("All Rooms:", socket.rooms)
    // socket.prependAny((eventName, ...args) => {
    //   console.log("@eventName:", eventName, "@args:", args)
    // })
  })

  return io
}
