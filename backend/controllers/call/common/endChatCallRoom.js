const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
// const CallRoom = require("../../../models/callRoom")
const Chat = require("../../../models/chat")
const User = require("../../../models/user")
const CallRoomMember = require("../../../models/callRoomMember")
const { infoMessageType } = require("../../../models/common/infoMessageType")

const {
  selectChatFieldForCallRoom
} = require("../../../common/filter-field/filterChatField")
const {
  createAndSendInfoMessage
} = require("../../../common/createAndSendInfoMessage")
const { getCurrentTimeString } = require("../../../common/getTime")
const { signedUrlForGetAwsS3Object } = require("../../../services/awsS3")

exports.endChatCallRoom = async (io, callRoom, leftMembers, loginUserId) => {
  let isCallEnded = false
  try {
    if (callRoom.isChatRoom) {
      if (leftMembers.length <= 1) {
        let chat = await Chat.findById(callRoom.roomChat).select(
          selectChatFieldForCallRoom
        )
        chat.isOnCall = false
        chat.callRoomId = undefined
        await chat.save()

        let deletedAllMembersObj = await CallRoomMember.deleteMany({
          callRoom: callRoom._id
        })

        let eventData = {
          callRoomId: callRoom._id,
          chatId: chat._id
        }
        chat.currentChatMembers.forEach(userId => {
          io.to(userId.toString()).emit("chat:end-chat-call-room", eventData)
        })
        if (leftMembers.length > 0) {
          callRoom.roomPic = await signedUrlForGetAwsS3Object(callRoom.roomPic)
          let eventData = {
            callRoom: callRoom,
            chatId: chat._id
          }
          leftMembers.forEach(member => {
            io.to(member.user.toString()).emit("call:end-call-room", eventData)
          })
        }
        isCallEnded = true
        createInfoMessage(io, chat, loginUserId)
      }
    }
    return isCallEnded
  } catch (err) {
    isCallEnded = false
    console.log(
      errorLog("Server Error In Checking And Ending Chat Call Room:"),
      mainErrorLog(err)
    )
    return isCallEnded
  }
}
async function createInfoMessage(io, chat, loginUserId) {
  // let user = await User.findById(req.user.id)
  //   .select({ firstName: 1, lastName: 1, username: 1 })
  //   .lean()
  let timeString = getCurrentTimeString()
  let messageContent = `Call ended at ${timeString}`
  let messageType = infoMessageType.END_CALL
  createAndSendInfoMessage(messageContent, messageType, chat, io, loginUserId)
}
