const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const Message = require("../../models/message")

// router.post("/clear-chat-all-messages", getLoginUser, clearChatAllMessages)
exports.clearChatAllMessages = async (req, res) => {
  try {
    if (req.user) {
      let clearChatData = req.body
      if (
        clearChatData.hasOwnProperty("forAll") &&
        clearChatData.hasOwnProperty("chatId")
      ) {
        let chat = await Chat.findOne({
          _id: clearChatData.chatId,
          allChatMembers: { $elemMatch: { $eq: req.user.id } }
        })
          .select({
            isGroupChat: 1,
            currentChatMembers: 1,
            groupChatAdmin: 1,
            allChatMembers: 1
          })
          .lean()
        if (chat) {
          if (clearChatData.forAll === false) {
            let allMessages = await Message.find({
              chat: chat._id,
              deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
            }).select({ chat: 1, sender: 1, reader: 1, deletedFor: 1 })

            allMessages.map(async message => {
              message.deletedFor.push(req.user.id)
              await message.save()
            })

            res.json({ isSuccess: true })
          } else if (clearChatData.forAll === true) {
            if (
              chat.groupChatAdmin.some(
                userId => userId.toString() === req.user.id.toString()
              )
            ) {
              //     deletedFor: { $not: { $elemMatch: { $in: "$reader" } } }

              let allMessages = await Message.find({
                chat: chat._id
              }).select({ chat: 1, sender: 1, reader: 1, deletedFor: 1 })

              allMessages.map(async message => {
                message.deletedFor = message.reader
                await message.save()
              })
              chat.currentChatMembers.forEach(memberId => {
                if (memberId.toString() !== req.user.id.toString()) {
                  req.io
                    .to(memberId.toString())
                    .emit("chat:clear-chat-all-messages", chat._id.toString())
                }
              })

              res.json({ isSuccess: true })
            } else {
              res.json({
                isSuccess: false,
                error:
                  "You Are Not authorized To Clear All Messages For All Of This Chat "
              })
            }
          } else {
            res.json({
              isSuccess: false,
              error: "Send All Required Fields With Request"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "You Are Not authorized To Clear All Messages Of This Chat"
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "Send All Required Fields With Request"
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
      errorLog("Server Error In Clearing Chat All Messages :"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Clearing All Messages, Please Try Again"
    })
  }
}
