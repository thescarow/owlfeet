const indexRouter = require("./index.route")
const userRouter = require("./user.route")
const userAuthRouter = require("./userAuth.route")
const followRouter = require("./follow.route")
const chatRouter = require("./chat.route")
const messageRouter = require("./message.route")
const callRouter = require("./call.route")
const callRoomMemberRouter = require("./callRoomMember.route")
// const newsRouter = require("./news.route")
// const trendRouter = require("./trend.route")
// const addRouter = require("./add.route")
const userNotificationRouter = require("./userNotification.route")
const testRouter = require("./test.route")
/////////////////////////////////////////////////////

exports.registerRoutes = app => {
  app.use("/", indexRouter)
  app.use("/user", userRouter)
  app.use("/user-auth", userAuthRouter)
  app.use("/follow", followRouter)
  app.use("/chat", chatRouter)
  app.use("/message", messageRouter)
  app.use("/call", callRouter)
  app.use("/call-room-member", callRoomMemberRouter)
  // app.use("/news", newsRouter);
  // app.use("/trends", trendRouter);
  // app.use("/add", addRouter);
  app.use("/user-notification", userNotificationRouter)
  app.use("/test", testRouter)
}
