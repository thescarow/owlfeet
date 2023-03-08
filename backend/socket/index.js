const { Server } = require("socket.io")
const cookie = require("cookie")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
// const chatHandler = require("./chatHandler")
const { userHandler } = require("./user/userHandler.socket")
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
    /////////////////////////////////
    console.log(socket.rooms)
    socket.prependAny((eventName, ...args) => {
      console.log(
        "socket event:",
        "_____eventName:",
        eventName,
        "____args:",
        args
      )
    })
  })

  return io
}
