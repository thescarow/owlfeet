const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const Message = require("../../models/message")
///////
const {
  timeDifferenceFromNow
} = require("../../common/calculateTimeDifference")

const { checkInFollowing } = require("../../common/checkUserFollowStatus")
////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////////////
const { filterChatFieldForNonMember } = require("./common/filterChatField")

// router.post("/delete-chat", getLoginUser, deleteChat)
exports.deleteChat = async (req, res) => {
  try {
    if (req.user) {
      let deleteChatData = req.body
      console.log(deleteChatData)
      if (deleteChatData.hasOwnProperty("chatId")) {
        let chat = await Chat.findOne({
          _id: deleteChatData.chatId,
          groupChatAdmin: { $elemMatch: { $eq: req.user.id } },
          isGroupChat: true,
          isDeleted: false
        }).select({
          isGroupChat: 1,
          currentChatMembers: 1,
          allChatMembers: 1,
          groupChatAdmin: 1,
          isDeleted: 1
        })
        console.log(chat)
        if (chat) {
          chat.isDeleted = true
          await chat.save()

          chat.allChatMembers.forEach(memberId => {
            if (memberId.toString() !== req.user.id.toString()) {
              req.io
                .to(memberId.toString())
                .emit("chat:delete-chat", chat._id.toString())
            }
          })
          res.json({ isSuccess: true, deletedChatId: chat._id })

          // also change the messages status as deleted after sending the response to the client
          let allMessages = await Message.find({
            chat: chat._id
          }).select({ chat: 1, sender: 1, reader: 1, deletedFor: 1 })

          allMessages.map(async message => {
            message.deletedFor = message.reader
            await message.save()
          })
        } else {
          res.json({
            isSuccess: false,
            error:
              "You Are Not authorized To Delete This Chat OR This Chat Is Already Deleted"
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
    console.log(errorLog("Server Error In Deleting Chat:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Deleting Chat, Please Try Again"
    })
  }
}
