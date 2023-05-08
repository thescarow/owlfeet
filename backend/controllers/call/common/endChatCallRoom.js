const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
// const CallRoom = require("../../../models/callRoom")
const Chat = require("../../../models/chat")
const CallRoomMember = require("../../../models/callRoomMember")

const {
  selectChatFieldForCallRoom
} = require("../../../common/filter-field/filterChatField")

exports.endChatCallRoom = async (callRoom, leftMembers, io) => {
  let isCallEnded = false
  try {
    if (callRoom.isChatRoom) {
      if (leftMembers.length <= 1) {
        let chat = await Chat.findById(callRoom.roomChat).select(
          selectChatFieldForCallRoom
        )
        chat.isOnCall = false
        chat.callRoomId = ""
        await chat.save()

        let deletedAllMembersObj = await CallRoomMember.deleteMany({
          callRoom: callRoom._id
        })

        let eventData = {
          callRoomId: callRoom._id,
          chatId: chat._id
        }
        chat.currenChatMembers.forEach(userId => {
          io.to(userId.toString()).emit("chat:end-chat-call-room", eventData)
        })

        leftMembers.forEach(member => {
          io.to(member.user.toString()).emit("call:end-call-room", eventData)
        })
        isCallEnded = true
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
