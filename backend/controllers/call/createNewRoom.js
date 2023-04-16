const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")

const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

const {
  selectSafeCallRoomField
} = require("../../common/filter-field/filterCallRoomField")
const {
  selectChatFieldForCallRoom
} = require("../../common/filter-field/filterChatField")
const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")
const { createCallRoomMember } = require("./common/createCallRoomMember")

// router.post("/create-chat-room", getLoginUser, createChatRoom)
exports.createNewRoom = async (req, res) => {
  try {
    if (req.user) {
      let userData = req.body
      if (
        userData.hasOwnProperty("roomName") &&
        userData.hasOwnProperty("roomAbout") &&
        userData.hasOwnProperty("roomPic") &&
        userData.hasOwnProperty("isAudioOn") &&
        userData.hasOwnProperty("isVideoOn")
      ) {
        if (userData.isVideoOn === "string")
          userData.isVideoOn = userData.isVideoOn === "true" ? true : false
        if (userData.isAudioOn === "string")
          userData.isAudioOn = userData.isAudioOn === "true" ? true : false

        if (userData.roomName.trim() === "") {
          return response.json({
            isSuccess: false,
            error: "Please give a name to call room"
          })
        }
        let newCallRoomData = {
          roomPic: userData.roomPic,
          roomName: userData.roomName,
          roomDescription: userData.roomAbout,
          isChatRoom: false
        }

        let newCallRoom = new CallRoom(newCallRoomData)
        newCallRoom = await newCallRoom.save()
        let createdNewRoom = await CallRoom.findById(newCallRoom._id)
          .select(selectSafeCallRoomField)
          .populate({
            path: "roomChat",
            select: selectChatFieldForCallRoom,
            options: { lean: true }
          })
          .lean()
        if (
          createdNewRoom.hasOwnProperty("roomPic") &&
          createdNewRoom.roomPic !== ""
        ) {
          createdNewRoom.roomPic = await signedUrlForGetAwsS3Object(
            createdNewRoom.roomPic
          )
        }
        let callRoomMemberData = {
          roomId: createdNewRoom._id,
          userId: req.user.id,
          isVideoOn: userData.isVideoOn,
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
        let callRoomMembers = await CallRoomMember.find({
          callRoom: createdNewRoom._id
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
        createdNewRoom.members = callRoomMembers
        res.json({ isSuccess: true, callRoom: createdNewRoom })
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
    console.log(
      errorLog("Server Error In Creating Chat Room:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server error in creating chat room, Please try again"
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
