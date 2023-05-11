const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const User = require("../../models/user")
const { infoMessageType } = require("../../models/common/infoMessageType")
///////
const {
  createAndSendInfoMessage
} = require("../../common/createAndSendInfoMessage")

const {
  timeDifferenceFromNow
} = require("../../common/calculateTimeDifference")

const { checkInFollowing } = require("../../common/checkUserFollowStatus")
////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////////////
const { filterChatFieldForNonMember } = require("./common/filterChatField")

// router.post("/leave-group-chat", getLoginUser, leaveGroupChat)
exports.leaveGroupChat = async (req, res) => {
  try {
    if (req.user) {
      let leaveChatData = req.body

      if (leaveChatData.hasOwnProperty("chatId")) {
        let chat = await Chat.findOne({
          _id: leaveChatData.chatId,
          currentChatMembers: { $elemMatch: { $eq: req.user.id } },
          isGroupChat: true,
          isDeleted: false
        }).select({
          isGroupChat: 1,
          chatName: 1,
          currentChatMembers: 1,
          groupChatAdmin: 1
        })

        if (chat) {
          chat.currentChatMembers = chat.currentChatMembers.filter(
            userId => userId.toString() !== req.user.id.toString()
          )
          await chat.save()
          let updatedChat = await Chat.findById(chat._id)
            .select({
              isGroupChat: 1,
              chatName: 1,
              chatPic: 1,
              chatDescription: 1
            })
            .lean()

          if (
            updatedChat.hasOwnProperty("chatPic") &&
            updatedChat.chatPic !== ""
          ) {
            updatedChat.chatPic = await signedUrlForGetAwsS3Object(
              updatedChat.chatPic
            )
          }

          updatedChat.canSendMessageToThisChat = false
          res.json({ isSuccess: true, chat: updatedChat })

          attachSocket(req, chat)
        } else {
          res.json({
            isSuccess: false,
            error:
              "You Can Not Leave This Group Because You Are Not Member Of This Chat"
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
      errorLog("Server Error In Leaving Group Chat:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Leaving Group Chat, Please Try Again"
    })
  }
}

async function attachSocket(req, chat) {
  createInfoMessage(req, chat)
  chat.currentChatMembers.forEach(userId => {
    if (userId.toString() !== req.user.id.toString()) {
      req.io
        .to(userId.toString())
        .emit("chat:user-left-group-chat", chat._id, req.user.id)
    }
  })
}
async function createInfoMessage(req, chat) {
  let user = await User.findById(req.user.id)
    .select({ firstName: 1, lastName: 1, username: 1 })
    .lean()
  let messageContent = `${user.firstName} ${user.lastName} leave this *${chat.chatName}* group`
  let messageType = infoMessageType.LEAVE_GROUP
  createAndSendInfoMessage(
    messageContent,
    messageType,
    chat,
    req.io,
    req.user.id
  )
}
