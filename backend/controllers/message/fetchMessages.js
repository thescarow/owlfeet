const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")
const Chat = require("../../models/chat")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////
const {
  selectSafeMessageField,
  filterMessageFieldForDeletedForAll,
  selectRepliedToMessageField
} = require("../../common/filter-field/filterMessageField")

// router.get("/fetch-message/:chatId", getLoginUser, fetchMessages)

exports.fetchMessages = async (req, res) => {
  try {
    if (req.user) {
      const chatId = req.params.chatId
      const totalReceivedMessagesCount = req.query.totalReceivedMessagesCount
      const chat = await Chat.findOne({
        _id: chatId,
        allChatMembers: { $elemMatch: { $eq: req.user.id } }
      })
        .select({ _id: 1 })
        .lean()
      if (chat) {
        let allMessages = await Message.find({
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
          .populate({
            path: "repliedTo",
            select: selectRepliedToMessageField,
            populate: {
              path: "sender",
              select: { username: 1, firstName: 1, lastName: 1 }
            },

            options: {
              lean: true
            }
          })
          .select(selectSafeMessageField)
          .sort({ createdAt: -1 })
          .skip(totalReceivedMessagesCount)
          .limit(100)
          .lean()

        await Promise.all(
          allMessages.map(async message => {
            if (
              message.isRepliedMessage === true &&
              message.repliedTo.isDeletedForAll === true
            ) {
              message.repliedTo = filterMessageFieldForDeletedForAll(
                message.repliedTo
              )
            }
            if (message.isDeletedForAll === true) {
              message = filterMessageFieldForDeletedForAll(message)
            }
            if (message.isInfoMessage === false) {
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
            }
          })
        )
        attachSocketForFetchingMessage(req, chat)
        // console.log(allMessages)
        res.json({
          isSuccess: true,
          allMessages: allMessages
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
    console.log(errorLog("Server Error In fetching Message"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Getting Messages, Please Refresh Your Page"
    })
  }
}

async function attachSocketForFetchingMessage(req, chat) {
  let allNotDeliveredMessages = await Message.find({
    chat: chat._id,
    reader: { $elemMatch: { $eq: req.user.id } },
    "deliveryStatus.isDelivered": false
  }).select({ sender: 1, deliveryStatus: 1, isInfoMessage: 1 })

  if (allNotDeliveredMessages.length > 0) {
    await Promise.all(
      allNotDeliveredMessages.map(async message => {
        if (message.deliveryStatus.isDelivered === false) {
          message.deliveryStatus.isDelivered = true
          message.deliveryStatus.deliveredTime = Date.now()
          await message.save()
          if (message.isInfoMessage === false) {
            req.io
              .to(message.sender.toString())
              .emit("chat:message-delivered", {
                messageId: message._id,
                chatId: chat._id,
                deliveredTime: message.deliveryStatus.deliveredTime
              })
          }
        }
      })
    )
  }
}
