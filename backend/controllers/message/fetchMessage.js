const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")
const Chat = require("../../models/chat")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////
const { selectMessageField } = require("./common/filterMessageField")
// router.get("/fetch-message/:chatId", getLoginUser, fetchMessage)

exports.fetchMessage = async (req, res) => {
  try {
    if (req.user) {
      const chatId = req.params.chatId
      const chat = await Chat.findOne({
        _id: chatId,
        allChatMembers: { $elemMatch: { $eq: req.user.id } }
      })
      if (chat) {
        let allMessage = await Message.find({
          chat: chat._id,
          reader: { $elemMatch: { $eq: req.user.id } },
          deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
        })
          .populate({
            path: "sender",
            select: { username: 1, firstName: 1, lastName: 1, profile: 1 }
          })
          .populate({
            path: "chat",
            select: {
              chatName: 1
            },
            options: {
              lean: true
            }
          })
          .select(selectMessageField)
          .sort({ createdAt: -1 })
          .lean()

        await Promise.all(
          allMessage.map(async message => {
            if (
              message.sender.hasOwnProperty("profile") &&
              message.sender.profile !== ""
            ) {
              message.sender.profile = await signedUrlForGetAwsS3Object(
                message.sender.profile
              )
            }
            if (
              message.hasMediaContent &&
              message.mediaContentType !== "youtube"
            ) {
              message.mediaContentPath = await signedUrlForGetAwsS3Object(
                message.mediaContentPath
              )
            }
          })
        )

        // console.log(allMessage)
        res.json({ isSuccess: true, allMessage: allMessage })
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
    console.log(errorLog("Server Error In fetching Message"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Getting Messages, Please Refresh Your Page"
    })
  }
}
