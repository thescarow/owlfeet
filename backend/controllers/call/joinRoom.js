const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")

const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

// router.post("/join-room", getLoginUser, createChatRoom)
exports.joinRoom = async (req, res) => {
  try {
    if (req.user) {
      let userData = req.body.userData
      if (
        userData.hasOwnProperty("joiningRoomId") &&
        userData.hasOwnProperty("isAudioOn") &&
        userData.hasOwnProperty("isVideoOn")
      ) {
        let callRoom = await CallRoom.findById(userData.joiningRoomId).lean()

        if (callRoom) {
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
              await createCallRoomMember(req, res, userData)
              canJoinedCall = true
            } else {
              return res.json({
                isSuccess: false,
                error: "You are not allowed to join this room"
              })
            }
          } else {
            await createCallRoomMember(req, res, userData)
            canJoinedCall = true
          }

          if (canJoinedCall) {
            if (callRoom.hasOwnProperty("roomPic") && callRoom.roomPic !== "") {
              callRoom.roomPic = await signedUrlForGetAwsS3Object(
                callRoom.roomPic
              )
            }
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
    console.log(errorLog("Server Error In Joining Room:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server error in joining room, Please try again"
    })
  }
}

async function createCallRoomMember(req, res, userData) {
  let callRoomMember = await findOne({
    callRoom: userData.joiningRoomId,
    user: req.user.id
  }).lean()
  if (!callRoomMember) {
    let newCallRoomMemberData = {
      callRoom: userData.joiningRoomId,
      user: req.user.id,
      isVideoOn: userData.isVideoOn,
      isAudioOn: userData.isAudioOn
    }
    let newCallRoomMember = new CallRoomMember(newCallRoomMemberData)
    await newCallRoomMember.save()
  } else {
    res.json({
      isSuccess: false,
      error:
        "You have already joined this room, if you want to join here please left from there"
    })
  }
}

// async function createInfoMessage(chat, req) {
//   let user = await User.findById(req.user.id)
//     .select({ firstName: 1, lastName: 1, username: 1 })
//     .lean()
//   let messageContent = `${user.firstName} ${user.lastName} created *${chat.chatName}*  group`
//   let messageType = infoMessageType.NEW_GROUP
//   createAndSendInfoMessage(messageContent, messageType, chat, req)
// }