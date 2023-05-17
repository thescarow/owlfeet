const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")

const {
  selectChatFieldForCallRoom
} = require("../../common/filter-field/filterChatField")
const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
const { createCallRoomMember } = require("./common/createCallRoomMember")

// router.post("/join-room", getLoginUser, createChatRoom)
exports.rejoinCallRoom = async (req, res) => {
  try {
    if (req.user) {
      let userData = req.body
      if (
        userData.hasOwnProperty("joiningRoomId") &&
        userData.hasOwnProperty("isAudioOn") &&
        userData.hasOwnProperty("isCameraOn") &&
        userData.hasOwnProperty("isScreenShareOn")
      ) {
        let callRoom = await CallRoom.findById(userData.joiningRoomId)
          .populate({
            path: "roomChat",
            select: selectChatFieldForCallRoom,
            options: { lean: true }
          })
          .lean()

        if (callRoom) {
          let deletingCallRoomMember = await CallRoomMember.findOne({
            user: req.user.id,
            callRoom: callRoom._id
          })
            .select({ peerId: 1 })
            .lean()
          if (deletingCallRoomMember) {
            await CallRoomMember.deleteMany({
              callRoom: callRoom._id,
              user: req.user.id
            })

            let leftMembers = await CallRoomMember.find({
              callRoom: callRoom._id
            })
              .select({ user: 1 })
              .lean()

            let eventData = {
              userId: req.user.id,
              peerId: deletingCallRoomMember.peerId,
              callRoomId: callRoom._id
            }
            leftMembers.forEach(member => {
              req.io
                .to(member.user.toString())
                .emit("call:disconnect-call-room-member", eventData)
            })
          }

          let canJoinedCall = false
          if (callRoom.isChatRoom) {
            let chat = Chat.findOne({
              _id: callRoom.roomChat,
              currentChatMembers: {
                $elemMatch: { $eq: req.user.id }
              },
              isDeleted: false
            }).lean()

            if (chat) {
              let callRoomMemberData = {
                roomId: userData.joiningRoomId,
                userId: req.user.id,
                isCameraOn: userData.isCameraOn,
                isScreenShareOn: userData.isScreenShareOn,
                isAudioOn: userData.isAudioOn
              }
              let isCallRoomMemberCreated = await createCallRoomMember(
                callRoomMemberData
              )
              if (!isCallRoomMemberCreated) {
                return res.json({
                  isSuccess: false,
                  error:
                    "You have already joined this room, if you want to join here please left from there"
                })
              }
              canJoinedCall = true
            } else {
              return res.json({
                isSuccess: false,
                error: "You are not allowed to join this room"
              })
            }
          } else {
            let callRoomMemberData = {
              roomId: userData.joiningRoomId,
              userId: req.user.id,
              isCameraOn: userData.isCameraOn,
              isScreenShareOn: userData.isScreenShareOn,
              isAudioOn: userData.isAudioOn
            }
            let isCallRoomMemberCreated = await createCallRoomMember(
              callRoomMemberData
            )
            if (!isCallRoomMemberCreated) {
              return res.json({
                isSuccess: false,
                error:
                  "You have already joined this room, if you want to join here please left from there"
              })
            }
            canJoinedCall = true
          }

          if (canJoinedCall) {
            if (callRoom.hasOwnProperty("roomPic") && callRoom.roomPic !== "") {
              callRoom.roomPic = await signedUrlForGetAwsS3Object(
                callRoom.roomPic
              )
            }

            callRoom.ownMemberUserId = req.user.id

            let callRoomMembers = await CallRoomMember.find({
              callRoom: callRoom._id
            })
              .populate({
                path: "user",
                select: selectUserFieldForCallRoom,
                options: { lean: true }
              })
              .lean()

            await Promise.all(
              callRoomMembers.map(async member => {
                if (
                  member.user.hasOwnProperty("profile") &&
                  member.user.profile !== ""
                ) {
                  member.user.profile = await signedUrlForGetAwsS3Object(
                    member.user.profile
                  )
                }
              })
            )
            callRoom.members = callRoomMembers

            res.json({ isSuccess: true, callRoom: callRoom })
          } else {
            return res.json({
              isSuccess: false,
              error: "You can not join this call room"
            })
          }
        } else {
          return res.json({
            isSuccess: false,
            error: "This room is not exists"
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
    console.log(errorLog("Server Error In rejoining Room:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server error in rejoining room, Please try again"
    })
  }
}
