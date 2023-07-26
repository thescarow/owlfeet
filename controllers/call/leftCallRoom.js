const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
// const Chat = require("../../models/chat")
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")

const {
  selectChatFieldForCallRoom
} = require("../../common/filter-field/filterChatField")

const { endChatCallRoom } = require("./common/endChatCallRoom")

// router.post("left-call-room", getLoginUser, leftCallRoom)
exports.leftCallRoom = async (req, res) => {
  try {
    if (req.user) {
      let userData = req.body
      if (userData.hasOwnProperty("callRoomId")) {
        let callRoom = await CallRoom.findById(userData.callRoomId)
          .populate({
            path: "roomChat",
            select: selectChatFieldForCallRoom,
            options: { lean: true }
          })
          .lean()

        if (callRoom) {
          let callRoomMember = await CallRoomMember.findOne({
            user: req.user.id,
            callRoom: callRoom._id
          })
            .select({ peerId: 1 })
            .lean()
          if (callRoomMember) {
            let deletedMemberObj = await CallRoomMember.deleteMany({
              callRoom: callRoom._id,
              user: req.user.id
            })

            let leftMembers = await CallRoomMember.find({
              callRoom: callRoom._id
            })
              .select({ user: 1 })
              .lean()
            let isCallEnded = false
            if (leftMembers.length <= 1) {
              isCallEnded = await endChatCallRoom(
                req.io,
                callRoom,
                leftMembers,
                req.user.id
              )
            }

            res.json({
              isSuccess: true,
              isCallEnded: isCallEnded
            })

            let eventData = {
              userId: req.user.id,
              peerId: callRoomMember.peerId,
              callRoomId: callRoom._id
            }
            leftMembers.forEach(member => {
              req.io
                .to(member.user.toString())
                .emit("call:disconnect-call-room-member", eventData)
            })
          } else {
            return res.json({
              isSuccess: false,
              error: "You have already left this room"
            })
          }
        } else {
          return res.json({
            isSuccess: false,
            error: "This room is not exists anymore"
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "Please send all the required fields"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error In Lefting Room:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server error, Please try again"
    })
  }
}
