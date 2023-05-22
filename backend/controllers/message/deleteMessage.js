const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")
const Chat = require("../../models/chat")
//////////////////////
// const {
//   deleteAwsS3Object,
//   signedUrlForGetAwsS3Object
// } = require("../../services/awsS3")
///////
const {
  selectDeletedForAllMessageField,
  filterMessageFieldForDeletedForAll,
  selectLatestMessageField
} = require("../../common/filter-field/filterMessageField")
// const { checkInFollowing } = require("../../common/checkUserFollowStatus")

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
          let isDeletedForAll = false
          let deletedForAllMessage
          let prevLatestMessage = await Message.findOne({
            chat: message.chat,
            reader: { $elemMatch: { $eq: req.user.id } },
            deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
          })
            .select({ _id: 1 })
            .sort({ createdAt: -1 })
            .lean()
          let isLatestMessageChanged = false

          if (
            deleteMessageData.hasOwnProperty("forAll") &&
            deleteMessageData.forAll === false
          ) {
            message.deletedFor.push(req.user.id)
            await message.save()
            if (prevLatestMessage._id.toString() === message._id.toString()) {
              isLatestMessageChanged = true
            }
          } else if (
            deleteMessageData.hasOwnProperty("forAll") &&
            deleteMessageData.forAll === true
          ) {
            if (message.isDeletedForAll === false) {
              if (
                req.user.id.toString() === message.sender.toString() ||
                message.chat.groupChatAdmin.some(
                  userId => userId.toString() === req.user.id.toString()
                )
              ) {
                message.isDeletedForAll = true
                await message.save()
                isDeletedForAll = true

                deletedForAllMessage = await Message.findById(message._id)
                  .select(selectDeletedForAllMessageField)
                  .populate({
                    path: "sender",
                    select: { firstName: 1, lastName: 1, username: 1 },
                    options: {
                      lean: true
                    }
                  })
                  .lean()
              } else {
                return res.json({
                  isSuccess: false,
                  error:
                    "You Are Not authorized To Delete This Messages For All"
                })
              }
            } else {
              return res.json({
                isSuccess: false,
                error: "This Message Is Already Deleted For All"
              })
            }
          } else {
            return res.json({
              isSuccess: false,
              error: "Send All Required Fields With Request"
            })
          }
          let latestMessage = await Message.findOne({
            chat: message.chat,
            reader: { $elemMatch: { $eq: req.user.id } },
            deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
          })
            .select(selectLatestMessageField)
            .populate({
              path: "sender",
              select: { firstName: 1, lastName: 1, username: 1 },
              options: {
                lean: true
              }
            })
            .sort({ createdAt: -1 })
            .lean()

          if (latestMessage) {
            if (latestMessage.isDeletedForAll === true) {
              latestMessage = filterMessageFieldForDeletedForAll(latestMessage)
            }

            if (
              isDeletedForAll === true &&
              latestMessage._id.toString() === message._id.toString()
            ) {
              isLatestMessageChanged = true
            }
          }

          res.json({
            isSuccess: true,
            isDeletedForAll: isDeletedForAll,
            deletedForAllMessage: isDeletedForAll ? deletedForAllMessage : {},
            deletedMessageId: message._id,
            isLatestMessageChanged: isLatestMessageChanged,
            latestMessage: isLatestMessageChanged ? latestMessage : {}
          })

          attachSocketForDeleteMessage(
            req,
            isDeletedForAll,
            deletedForAllMessage,
            isLatestMessageChanged,
            latestMessage
          )
        } else {
          return res.json({
            isSuccess: false,
            error:
              "This Message Is Not Exist For You Or You Are Not authorized To Delete This Message"
          })
        }
      } else {
        return res.json({
          isSuccess: false,
          error: "Send All Required Fields With Request"
        })
      }
    } else {
      return res.json({
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

async function attachSocketForDeleteMessage(
  req,
  isDeletedForAll,
  deletedForAllMessage,
  isLatestMessageChanged,
  latestMessage
) {
  if (isDeletedForAll) {
    let eventData = {
      deletedForAllMessage: deletedForAllMessage,
      isLatestMessageChanged: true,
      latestMessage: isLatestMessageChanged ? latestMessage : {}
    }

    deletedForAllMessage.reader.forEach(userId => {
      if (userId.toString() !== req.user.id.toString()) {
        req.io
          .to(userId.toString())
          .emit("chat:delete-message-for-all", eventData)
      }
    })
  }
}
