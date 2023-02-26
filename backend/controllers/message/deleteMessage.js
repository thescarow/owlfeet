const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")
const Chat = require("../../models/chat")
//////////////////////
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")
///////
const {
  selectDeletedForAllMessageField
} = require("./common/filterMessageField")
const { checkInFollowing } = require("../../common/checkUserFollowStatus")

// router.post("/delete-user-message", getLoginUser, deleteUserMessage)

exports.deleteMessage = async (req, res) => {
  try {
    if (req.user) {
      let deleteMessageData = req.body
      if (
        deleteMessageData.hasOwnProperty("forAll") &&
        deleteMessageData.hasOwnProperty("id")
      ) {
        let message = await Message.findOne({
          _id: deleteMessageData.id,
          reader: { $elemMatch: { $eq: req.user.id } },
          deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
        }).populate({
          path: "chat",
          select: { isGroupChat: 1, groupChatAdmin: 1 },
          options: {
            lean: true
          }
        })
        if (message) {
          if (deleteMessageData.forAll === false) {
            message.deletedFor.push(req.user.id)
            await message.save()
            res.json({
              isSuccess: true,
              isDeletedForAll: false,
              deletedMessageId: message._id
            })
          } else if (deleteMessageData.forAll === true) {
            if (
              req.user.id.toString() === message.sender.toString() ||
              message.chat.groupChatAdmin.some(
                userId => userId.toString() === req.user.id.toString()
              )
            ) {
              if (message.isDeletedForAll === false) {
                message.isDeletedForAll = true
                await message.save()
                let deletedMessage = await Message.findById(message._id)
                  .select(selectDeletedForAllMessageField)
                  .lean()
                attachSocketForDeletedForAllMessage(req, deletedMessage)
                res.json({
                  isSuccess: true,
                  isDeletedForAll: true,
                  deletedMessage: deletedMessage
                })
              } else {
                res.json({
                  isSuccess: false,
                  error: "This Message Is Already Deleted For All"
                })
              }
            } else {
              res.json({
                isSuccess: false,
                error: "You Are Not authorized To Delete This Messages For All"
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
            error:
              "This Message Is Not Exist For You Or You Are Not authorized To Delete This Message"
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
    console.log(errorLog("Server Error In Deleting Message"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Deleting Message, Please Send It Again"
    })
  }
}

async function attachSocketForDeletedForAllMessage(req, deletedMessage) {
  deletedMessage.reader.forEach(userId => {
    if (userId.toString() !== req.user.id.toString()) {
      req.io
        .to(userId.toString())
        .emit("chat:delete-message-for-all", deletedMessage)
    }
  })
}
