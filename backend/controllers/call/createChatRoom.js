const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")

const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

const {
  selectChatFieldForCallRoom
} = require("../../common/filter-field/filterChatField")

const {
  selectSafeCallRoomField
} = require("../../common/filter-field/filterCallRoomField")
const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")
const { createCallRoomMember } = require("./common/createCallRoomMember")

// router.post("/create-chat-room", getLoginUser, createChatRoom)
exports.createChatRoom = async (req, res) => {
  try {
    if (req.user) {
      let userData = req.body
      if (
        userData.hasOwnProperty("chatId") &&
        userData.hasOwnProperty("isAudioOn") &&
        userData.hasOwnProperty("isVideoOn")
      ) {
        if (userData.isVideoOn === "string")
          userData.isVideoOn = userData.isVideoOn === "true" ? true : false
        if (userData.isAudioOn === "string")
          userData.isAudioOn = userData.isAudioOn === "true" ? true : false

        let chat = await Chat.findOne({
          _id: userData.chatId,
          currentChatMembers: {
            $elemMatch: { $eq: req.user.id }
          },
          isDeleted: false
        }).lean()
        if (chat) {
          let newChatRoomData = {
            roomPic: chat.chatPic,
            roomName: chat.chatName,
            roomDescription: chat.chatDescription,
            isChatRoom: true,
            roomChat: chat._id
          }
          let newChatRoom = new CallRoom(newChatRoomData)
          newChatRoom = await newChatRoom.save()
          let createdChatRoom = await CallRoom.findById(newChatRoom._id)
            .select(selectSafeCallRoomField)
            .populate({
              path: "roomChat",
              select: selectChatFieldForCallRoom,
              options: { lean: true }
            })
            .lean()
          if (
            createdChatRoom.hasOwnProperty("roomPic") &&
            createdChatRoom.roomPic !== ""
          ) {
            createdChatRoom.roomPic = await signedUrlForGetAwsS3Object(
              createdChatRoom.roomPic
            )
          }
          let callRoomMemberData = {
            roomId: createdChatRoom._id,
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
          let joinedMember = await CallRoomMember.findOne({
            callRoom: createdChatRoom._id,
            user: req.user.id
          })
            .populate({
              path: "user",
              select: selectUserFieldForCallRoom,
              options: { lean: true }
            })
            .lean()

          if (
            joinedMember.user.hasOwnProperty("profile") &&
            joinedMember.user.profile !== ""
          ) {
            joinedMember.user.profile = await signedUrlForGetAwsS3Object(
              joinedMember.user.profile
            )
          }

          createdChatRoom.joinedMember = joinedMember

          res.json({ isSuccess: true, callRoom: createdChatRoom })
        } else {
          res.json({
            isSuccess: false,
            error:
              "You are not authorized to call in this chat or chat is not exists for you."
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
