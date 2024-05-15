const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")
const Chat = require("../../models/chat")

///////

exports.fetchUnseenMessagesCount = async (req, res) => {
  try {
    if (req.user) {
      const chatId = req.params.chatId
      const chat = await Chat.findOne({
        _id: chatId,
        currentChatMembers: { $elemMatch: { $eq: req.user.id } }
      })
        .select({ _id: 1 })
        .lean()
      if (chat) {
        let unseenMessagesCount = await Message.countDocuments({
          chat: chat._id,
          reader: { $elemMatch: { $eq: req.user.id } },
          "seenStatus.seenBy": { $ne: req.user.id }
        })
        console.log("unseenMessagesCount:", unseenMessagesCount)
        res.json({
          isSuccess: true,
          unseenMessagesCount: unseenMessagesCount
        })
      } else {
        res.json({
          isSuccess: false,
          error: "You Are Not Allowed To Access Messages from This Chat"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In fetching Unseen Messages Count"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In fetching Unseen Messages Count, Please Refresh Your Page"
    })
  }
}
