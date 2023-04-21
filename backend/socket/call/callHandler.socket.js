const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
//////////////////////////////////////////////

const CallRoomMember = require("../../models/callRoomMember")
const CallRoom = require("../../models/callRoom")
const Chat = require("../../models/chat")

const {
  selectSafeCallRoomMemberField
} = require("../../common/filter-field/filterCallRoomMemberField")

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

    socket.on("disconnecting", async () => {
      if (socket.loginUser) {
        if (joinedCallRoomId !== null) {
          let deletedMembers = await CallRoomMember.deleteMany({
            callRoom: joinedCallRoomId,
            user: socket.loginUser.id
          })
          console.log("deletedMembers:", deletedMembers)

          let eventData = {
            userId: socket.loginUser.id
          }
          socket
            .to(joinedCallRoomId)
            .emit("call:disconnect-call-member", eventData)
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
