const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../../models/message")
// const Chat = require("../../../models/chat")
const User = require("../../../models/user")
//////////////////////
const { signedUrlForGetAwsS3Object } = require("../../../services/awsS3")
///////
// const { checkInFollowing } = require("../../common/checkUserFollowStatus")

exports.createAndSendInfoMessage = async (
  messageContent,
  messageType,
  chat,
  req
) => {
  try {
    const newInfoMessageData = {
      chat: chat._id,
      reader: chat.currentChatMembers,
      isInfoMessage: true,
      infoMessageType: messageType,
      infoMessageContent: messageContent
    }

    const newInfoMessage = new Message(newInfoMessageData)
    await newInfoMessage.save()

    let createdInfoMessage = await Message.findById(newInfoMessage._id)
      .select({
        chat: 1,
        reader: 1,
        isInfoMessage: 1,
        infoMessageType: 1,
        infoMessageContent: 1,
        createdAt: 1
      })
      .populate({
        path: "chat",
        select: {
          isGroupChat: 1,
          chatName: 1,
          chatPic: 1,
          groupChatAdmin: 1,
          currentChatMembers: 1
        },
        options: {
          lean: true
        }
      })
      .lean()

    if (createdInfoMessage.chat.isGroupChat) {
      if (
        createdInfoMessage.chat.hasOwnProperty("chatPic") &&
        createdInfoMessage.chat.chatPic !== ""
      ) {
        createdInfoMessage.chat.chatPic = await signedUrlForGetAwsS3Object(
          createdInfoMessage.chat.chatPic
        )
      }
    } else {
      let otherUserId = createdInfoMessage.chat.currentChatMembers.find(
        userId => {
          return userId.toString() !== req.user.id.toString()
        }
      )
      let groupOtherUser = await User.findById(otherUserId)
        .select({ profile: 1 })
        .lean()
      if (
        groupOtherUser.hasOwnProperty("profile") &&
        groupOtherUser.profile !== ""
      ) {
        createdInfoMessage.chat.chatPic = await signedUrlForGetAwsS3Object(
          groupOtherUser.profile
        )
      }
    }

    createdInfoMessage.reader.forEach(userId => {
      req.io
        .to(userId.toString())
        .emit("chat:new-info-message", createdInfoMessage)
    })
  } catch (e) {
    console.log(
      errorLog("Server Error In Creating And Sending Info Messages:"),
      mainErrorLog(err)
    )
  }
}
