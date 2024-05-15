const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const User = require("../../models/user")
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")
const { infoMessageType } = require("../../models/common/infoMessageType")

let {
  createAndSendInfoMessage
} = require("../../common/createAndSendInfoMessage")

exports.changeChatBackground = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    } else {
      let { chatId } = req.params
      let { backgroundType, backgroundValue } = req.body

      let isBackgroundChanged = false
      if (!(backgroundType && backgroundValue)) {
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
              "You are not allowed to change background of this chat because you are not the member of this chat."
          })
        } else {
          if (
            chat.isGroupChat &&
            !chat.groupChatAdmin.some(userId => {
              return userId.toString() === req.user.id.toString()
            })
          ) {
            return res.json({
              isSuccess: false,
              error:
                "You are not allowed to change background of this chat because you are not the admin of this chat."
            })
          } else {
            if (backgroundType === "color") {
              isBackgroundChanged = true
              chat.chatCustomBackground.hasBackgroundColor = true
              chat.chatCustomBackground.backgroundColor =
                checkCSSColor(backgroundValue)

              chat.chatCustomBackground.hasBackgroundImage = false
              if (chat.chatCustomBackground.backgroundImage !== "") {
                await deleteAwsS3Object(
                  chat.chatCustomBackground.backgroundImage
                )
              }
            } else if (backgroundType === "image") {
              isBackgroundChanged = true
              chat.chatCustomBackground.hasBackgroundImage = true
              chat.chatCustomBackground.backgroundImage = backgroundValue
              backgroundValue = await signedUrlForGetAwsS3Object(
                backgroundValue
              )
              chat.chatCustomBackground.color = false
              chat.chatCustomBackground.backgroundColor = "#eee"
            }

            await chat.save()
            createInfoMessage(req, chat, backgroundType)
            attachSocket(req, chat, backgroundType, backgroundValue)
            res.json({
              isSuccess: true,
              isBackgroundChanged: isBackgroundChanged,
              backgroundType: backgroundType,
              backgroundValue: backgroundValue
            })
          }
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In set Chat Background:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server error, Please try again"
    })
  }
}

async function attachSocket(req, chat, backgroundType, backgroundValue) {
  chat.currentChatMembers.forEach(userId => {
    if (userId.toString() !== req.user.id.toString()) {
      req.io.to(userId.toString()).emit("chat:changed-active-chat-background", {
        chatId: chat._id,
        backgroundType: backgroundType,
        backgroundValue: backgroundValue
      })
    }
  })
}
async function createInfoMessage(req, chat, backgroundType) {
  let user = await User.findById(req.user.id)
    .select({ firstName: 1, lastName: 1, username: 1 })
    .lean()
  let messageContent = `${user.firstName} ${user.lastName} has changed background.`
  if (backgroundType === "color") {
    messageContent = `${user.firstName} ${user.lastName} has changed background color.`
  }
  if (backgroundType === "image") {
    messageContent = `${user.firstName} ${user.lastName} has changed background image.`
  }

  let messageType = infoMessageType.CHANGE_BACKGROUND
  createAndSendInfoMessage(
    messageContent,
    messageType,
    chat,
    req.io,
    req.user.id
  )
}
function checkCSSColor(str) {
  const regex =
    /^(#([0-9a-fA-F]{3}){1,2}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\))$/

  if (regex.test(str)) {
    return str // Return the original string if it's a valid CSS color value
  } else {
    return "#eee" // Return '#fff' as the default color value
  }
}
