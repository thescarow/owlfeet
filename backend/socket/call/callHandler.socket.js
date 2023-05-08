const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
//////////////////////////////////////////////

const CallRoomMember = require("../../models/callRoomMember")
const CallRoom = require("../../models/callRoom")
// const Chat = require("../../models/chat")

const {
  selectChatFieldForCallRoom
} = require("../../common/filter-field/filterChatField")

const {
  endChatCallRoom
} = require("../../controllers/call/common/endChatCallRoom")

// const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

exports.callHandler = async (io, socket) => {
  try {
    let joinedCallRoomId = null
    socket.on("call:join-call-room", async data => {
      if (socket.loginUser) {
        if (socket.loginUser.id.toString() === data.userId.toString()) {
          let callRoom = await CallRoom.findById(data.callRoomId)
            .select({ _id: 1 })
            .lean()

          if (callRoom) {
            joinedCallRoomId = data.callRoomId
            socket.join(joinedCallRoomId)

            let callRoomMembers = await CallRoomMember.find({
              callRoom: callRoom._id
            })
              .select({ user: 1 })
              .lean()

            console.log("CallRoomMembers:", callRoomMembers)

            let eventData = {
              userId: socket.loginUser.id,
              peerId: data.peerId
            }

            callRoomMembers.forEach(member => {
              if (member.user.toString() !== socket.loginUser.id.toString()) {
                io.to(member.user.toString()).emit(
                  "call:joined-new-member",
                  eventData
                )
              }
            })
          }
        } else {
          console.log(
            errorLog("Server Error In Call Handler Socket:"),
            mainErrorLog("Send wrong user id")
          )
        }
      } else {
        console.log(
          errorLog("Server Error In Call Handler Socket:"),
          mainErrorLog("User not logged in")
        )
      }
    })

    socket.on("call:toggle-audio-stream", async data => {
      if (socket.loginUser) {
        if (
          data.hasOwnProperty("isEnabled") &&
          data.hasOwnProperty("callRoomId")
        ) {
          let callRoomMember = await CallRoomMember.findOne({
            callRoom: data.callRoomId,
            user: socket.loginUser.id
          })
          if (callRoomMember) {
            callRoomMember.isAudioOn = data.isEnabled
            await callRoomMember.save()

            let allCallRoomMembers = await CallRoomMember.find({
              callRoom: data.callRoomId
            })
              .select({ user: 1 })
              .lean()

            let eventData = {
              userId: socket.loginUser.id,
              callRoomId: data.callRoomId,
              isEnabled: data.isEnabled
            }
            allCallRoomMembers.forEach(member => {
              if (member.user.toString() !== socket.loginUser.id.toString()) {
                socket
                  .to(member.user.toString())
                  .emit("call:toggle-audio-stream", eventData)
              }
            })
          }
        } else {
          console.log(
            errorLog("Server Error In Call Handler Socket:"),
            mainErrorLog("Not send all properties with event")
          )
        }
      } else {
        console.log(
          errorLog("Server Error In Call Handler Socket:"),
          mainErrorLog("User not logged in")
        )
      }
    })

    socket.on("call:toggle-video-stream", async data => {
      if (socket.loginUser) {
        if (
          data.hasOwnProperty("isEnabled") &&
          data.hasOwnProperty("callRoomId")
        ) {
          let callRoomMember = await CallRoomMember.findOne({
            callRoom: data.callRoomId,
            user: socket.loginUser.id
          })
          if (callRoomMember) {
            callRoomMember.isVideoOn = data.isEnabled
            console.log("callRoomMember", callRoomMember)
            await callRoomMember.save()

            let allCallRoomMembers = await CallRoomMember.find({
              callRoom: data.callRoomId
            })
              .select({ user: 1 })
              .lean()

            let eventData = {
              userId: socket.loginUser.id,
              callRoomId: data.callRoomId,
              isEnabled: data.isEnabled
            }
            allCallRoomMembers.forEach(member => {
              if (member.user.toString() !== socket.loginUser.id.toString()) {
                socket
                  .to(member.user.toString())
                  .emit("call:toggle-video-stream", eventData)
              }
            })
          }
        } else {
          console.log(
            errorLog("Server Error In Call Handler Socket:"),
            mainErrorLog("Not send all properties with event")
          )
        }
      } else {
        console.log(
          errorLog("Server Error In Call Handler Socket:"),
          mainErrorLog("User not logged in")
        )
      }
    })

    socket.on("disconnecting", async () => {
      if (socket.loginUser) {
        if (joinedCallRoomId !== null) {
          // socket.leave(joinedCallRoomId)
          let callRoom = await CallRoom.findById(joinedCallRoomId)
            .populate({
              path: "roomChat",
              select: selectChatFieldForCallRoom,
              options: { lean: true }
            })
            .lean()

          if (callRoom) {
            let deletedMemberObj = await CallRoomMember.deleteMany({
              callRoom: callRoom._id,
              user: socket.loginUser.id
            })
            if (deletedMemberObj.deletedCount > 0) {
              let leftMembers = await CallRoomMember.find({
                callRoom: callRoom._id
              })
                .select({ user: 1 })
                .lean()
              let isCallEnded = false
              if (leftMembers.length <= 1) {
                isCallEnded = await endChatCallRoom(callRoom, leftMembers, io)
              }

              let eventData = {
                userId: socket.loginUser.id,
                callRoomId: callRoom._id
              }
              leftMembers.forEach(member => {
                io.to(member.user.toString()).emit(
                  "call:disconnect-call-room-member",
                  eventData
                )
              })
            }
          }
        }
      }
    })
  } catch (err) {
    console.log(
      errorLog("Server Error In Call Handler Socket"),
      mainErrorLog(err)
    )
  }
}
