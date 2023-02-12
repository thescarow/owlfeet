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
      if (deleteChatData.hasOwnProperty("chatId")) {
        let chat = await Chat.findOne({
          _id: deleteChatData.chatId,
          groupChatAdmin: { $elemMatch: { $eq: req.user.id } },
          isDeleted: false
        }).select({
          isGroupChat: 1,
          currentChatMembers: 1,
          groupChatAdmin: 1,
          isDeleted: 1
        })

        if (chat) {
          chat.isDeleted = false
          await chat.save()
          chat.currentChatMembers.forEach(memberId => {
            if (memberId.toString() !== req.user.id.toString()) {
              req.io
                .to(memberId.toString())
                .emit("chat:delete-chat", chat._id.toString())
            }
          })
          res.json({ isSuccess: true, deletedChat: chat })
        } else {
          res.json({
            isSuccess: false,
            error: "You Are Not authorized To Delete This Chat "
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
      errorLog("Server Error In Clearing Chat History :"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Clearing Chat History, Please Try Again"
    })
  }
}
