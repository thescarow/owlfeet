const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const Message = require("../../../models/message")
const Chat = require("../../../models/chat")

const {
  sendMessageToOtherMembersAndUpdateMessageStatusForSender
} = require("./sendMessageAndUpdateMessageStatus")
const { deleteAwsS3Object } = require("../../../services/awsS3")

////////////////////////////////////////////////////////
exports.createTransloaditUserMediaMessage = async (
  io,
  clientMessageId,
  userMessageInfo,
  mediaFile
) => {
  let clientMessageId = clientMessageId
  let messageSender = userMessageInfo.sender
  let messageChatId = userMessageInfo.chatId
  let mediaPathKey = userMessageInfo.mediaPathKey
  let isRepliedMessage = userMessageInfo.isRepliedMessage
  let repliedTo = ""
  if (isRepliedMessage) repliedTo = userMessageInfo.repliedTo
  /////////////////////////////////////////////////////////
  try {
    const newMessageData = {}
    if (messageChatId) {
      let messageChat = await Chat.findOne({
        _id: messageChatId,
        currentChatMembers: { $elemMatch: { $eq: messageSender } },
        isDeleted: false
      })
        .select({ isGroupChat: 1, currentChatMembers: 1 })
        .lean()

      if (messageChat) {
        newMessageData.chat = messageChat._id
        newMessageData.sender = messageSender
        newMessageData.reader = messageChat.currentChatMembers
        newMessageData.seenStatus = [
          { seenBy: messageSender, seenTime: Date.now() }
        ]

        newMessageData.hasMediaContent = true
        newMessageData.mediaContentType = mediaFile.type

        if (mediaFile.type === "image") {
          newMessageData.mediaImageSpecs.width = mediaFile.meta.width

          newMessageData.mediaImageSpecs.height = mediaFile.meta.height

          newMessageData.mediaImageSpecs.aspectRatio =
            mediaFile.meta.aspectRatio

          newMessageData.mediaImageSpecs.averageColor =
            mediaFile.meta.averageColor
        } else if (mediaFile.type === "video") {
          newMessageData.mediaVideoSpecs.width = mediaFile.meta.width

          newMessageData.mediaVideoSpecs.height = mediaFile.meta.height

          newMessageData.mediaVideoSpecs.aspectRatio =
            mediaFile.meta.aspectRatio
        }

        newMessageData.mediaContentMimeType = mediaFile.mime

        newMessageData.hasDirectMediaContentPath = false
        newMessageData.mediaContentPath = mediaPathKey

        newMessageData.isRepliedMessage = isRepliedMessage
        if (isRepliedMessage) {
          newMessageData.repliedTo = repliedTo
        }

        let newMessage = new Message(newMessageData)

        newMessage = await newMessage.save()

        io.to(messageSender.toString()).emit(
          "message:client-user-media-message-res",
          {
            isSuccess: true,
            clientMessageId: clientMessageId,
            messageId: newMessage._id,
            chatId: messageChatId
          }
        )

        await sendMessageToOtherMembersAndUpdateMessageStatusForSender(
          io,
          clientMessageId,
          newMessage._id
        )
      } else {
        await deleteAwsS3Object(mediaPathKey)
        io.to(messageSender.toString()).emit(
          "message:client-user-media-message-res",
          {
            isSuccess: false,
            chatId: messageChatId,
            clientMessageId: clientMessageId,
            error: "You are not allowed to send message in this chat."
          }
        )
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Creating And Sending User Media Message"),
      mainErrorLog(err)
    )
    await deleteAwsS3Object(mediaPathKey)
    return io
      .to(messageSender.toString())
      .emit("message:client-user-media-message-res", {
        isSuccess: false,
        clientMessageId: clientMessageId,
        chatId: messageChatId,
        error: "Server error in creating message, please try again"
      })
  }
}
