const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const User = require("../../models/user")
const { deleteAwsS3Object } = require("../../services/awsS3")
const { infoMessageType } = require("../../models/common/infoMessageType")

let {
  createAndSendInfoMessage
} = require("../../common/createAndSendInfoMessage")
exports.removeChatBackground = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    } else {
      let { chatId } = req.body
      if (!chatId) {
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        chatId = chatId.trim()
        let chat = await Chat.findOne({
          _id: chatId,
          currentChatMembers: {
            $elemMatch: { $eq: req.user.id }
          },
          isDeleted: false
        }).select({
          isGroupChat: 1,
          groupChatAdmin: 1,
          currentChatMembers: 1,
          chatCustomBackground: 1
        })

        if (!chat) {
          return res.json({
            isSuccess: false,
            error:
              "You are not allowed to remove background of this chat because you are not the member of this chat."
          })
        } else {
          if (
            chat.isGroupChat &&
            chat.groupChatAdmin.findIndex(userId => {
              userId.toString() === req.user.id.toString()
            }) !== -1
          ) {
            return res.json({
              isSuccess: false,
              error:
                "You are not allowed to remove background of this chat because you are not the admin of this chat."
            })
          } else {
            chat.chatCustomBackground.hasBackgroundColor = false
            chat.chatCustomBackground.hasBackgroundImage = false

            if (chat.chatCustomBackground.backgroundImage !== "") {
              await deleteAwsS3Object(chat.chatCustomBackground.backgroundImage)
            }
            await chat.save()
            createInfoMessage(req, chat)
            attachSocket(req, chat)
            res.json({
              isSuccess: true
            })
          }
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Remove Chat Background:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server error, Please try again"
    })
  }
}

async function attachSocket(req, chat) {
  chat.currentChatMembers.forEach(userId => {
    if (userId.toString() !== req.user.id.toString()) {
      req.io.to(userId.toString()).emit("chat:removed-active-chat-background", {
        chatId: chat._id
      })
    }
  })
}
async function createInfoMessage(req, chat) {
  let user = await User.findById(req.user.id)
    .select({ firstName: 1, lastName: 1, username: 1 })
    .lean()
  let messageContent = `${user.firstName} ${user.lastName} has removed background.`

  let messageType = infoMessageType.REMOVE_BACKGROUND
  createAndSendInfoMessage(
    messageContent,
    messageType,
    chat,
    req.io,
    req.user.id
  )
}
