const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const CallRoom = require("../../models/callRoom")

const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

const {
  selectSafeCallRoomField
} = require("../../common/filter-field/filterCallRoomField")
const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")

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
            callRoom: createdChatRoom._id,
            isVideoOn: userData.isVideoOn,
            isAudioOn: userData.isAudioOn
          }
          await createCallRoomMember(req, res, callRoomMemberData)
          let callRoomMembers = await CallRoomMember.find({
            callRoom: createdChatRoom._id
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
          createdChatRoom.members = callRoomMembers
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

async function createCallRoomMember(req, res, callRoomMemberData) {
  let callRoomMember = await findOne({
    callRoom: callRoomMemberData.callRoom,
    user: req.user.id
  }).lean()
  if (!callRoomMember) {
    let newCallRoomMemberData = {
      callRoom: callRoomMemberData.callRoom,
      user: req.user.id,
      isVideoOn: callRoomMemberData.isVideoOn,
      isAudioOn: callRoomMemberData.userData.isAudioOn
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
