const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const User = require("../../models/user")
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")
const { infoMessageType } = require("../../models/common/infoMessageType")

const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

const {
  selectChatFieldForCallRoom,
  selectSafeChatField
} = require("../../common/filter-field/filterChatField")

const { getCurrentTimeString } = require("../../common/getTime")
const {
  createAndSendInfoMessage
} = require("../../common/createAndSendInfoMessage")

const {
  selectSafeCallRoomField
} = require("../../common/filter-field/filterCallRoomField")
const {
  selectListUserField
} = require("../../common/filter-field/filterUserField")
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
        userData.hasOwnProperty("isCameraOn") &&
        userData.hasOwnProperty("isScreenShareOn")
      ) {
        if (userData.isCameraOn === "string")
          userData.isCameraOn = userData.isCameraOn === "true" ? true : false
        if (userData.isScreenShareOn === "string")
          userData.isScreenShareOn =
            userData.isScreenShareOn === "true" ? true : false
        if (userData.isAudioOn === "string")
          userData.isAudioOn = userData.isAudioOn === "true" ? true : false

        let chat = await Chat.findOne({
          _id: userData.chatId,
          currentChatMembers: {
            $elemMatch: { $eq: req.user.id }
          },
          isDeleted: false
        })
          .select(selectSafeChatField)
          .populate({
            path: "currentChatMembers",
            select: selectListUserField,
            options: {
              lean: true
            }
          })

        if (chat) {
          if (chat.isOnCall === false) {
            let newCallRoomData = {
              createdBy: req.user.id,
              roomPic: "",
              roomName: "",
              roomDescription: "",
              isChatRoom: true,
              roomChat: chat._id
            }

            if (chat.isGroupChat) {
              newCallRoomData.roomPic =
                chat.hasOwnProperty("chatPic") && chat.chatPic !== ""
                  ? chat.chatPic
                  : ""
              newCallRoomData.roomName = chat.chatName
              newCallRoomData.roomDescription = chat.chatDescription
            } else {
              let chatOtherMember = chat.currentChatMembers.find(
                user => user._id.toString() !== req.user.id.toString()
              )

              newCallRoomData.roomPic =
                chatOtherMember.hasOwnProperty("profile") &&
                chatOtherMember.profile !== ""
                  ? chatOtherMember.profile
                  : ""
              newCallRoomData.roomName =
                chatOtherMember.firstName + " " + chatOtherMember.lastName
              newCallRoomData.roomDescription = chatOtherMember.bio
            }

            let newCallRoom = new CallRoom(newCallRoomData)
            newCallRoom = await newCallRoom.save()

            chat.isOnCall = true
            chat.callRoomId = newCallRoom._id
            await chat.save()

            let createdCallRoom = await CallRoom.findById(newCallRoom._id)
              .select(selectSafeCallRoomField)
              .populate({
                path: "roomChat",
                select: selectChatFieldForCallRoom,
                options: { lean: true }
              })
              .lean()

            if (
              createdCallRoom.hasOwnProperty("roomPic") &&
              createdCallRoom.roomPic !== ""
            ) {
              createdCallRoom.roomPic = await signedUrlForGetAwsS3Object(
                createdCallRoom.roomPic
              )
            }

            let callRoomMemberData = {
              roomId: createdCallRoom._id,
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

            createdCallRoom.ownMemberUserId = req.user.id

            let callRoomMembers = await CallRoomMember.find({
              callRoom: createdCallRoom._id
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
            createdCallRoom.members = callRoomMembers
            res.json({
              isSuccess: true,
              callRoom: createdCallRoom
            })
            createInfoMessage(req, chat)
            initialiseSocket(req, chat, createdCallRoom)
          } else {
            let callRoomId = chat.callRoomId
            res.json({
              isSuccess: false,
              isRedirected: true,
              redirectedUrl: `/call/?room=${callRoomId.toString()}`
            })
          }
        } else {
          return res.json({
            isSuccess: false,
            error:
              "You are not authorized to call in this chat or chat is not exists for you."
          })
        }
      } else {
        return res.json({
          isSuccess: false,
          error: "Please send all the required fields"
        })
      }
    } else {
      return res.json({
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

function initialiseSocket(req, chat, createdCallRoom) {
  let eventData = {
    callRoom: createdCallRoom,
    chatId: chat._id,
    startedBy: req.user.id
  }
  chat.currentChatMembers.forEach(user => {
    req.io
      .to(user._id.toString())
      .emit("chat:created-chat-call-room", eventData)
  })
}
async function createInfoMessage(req, chat) {
  let user = await User.findById(req.user.id)
    .select({ firstName: 1, lastName: 1, username: 1 })
    .lean()
  let timeString = getCurrentTimeString()
  let messageContent = `${user.firstName} ${user.lastName} started call at ${timeString}`
  let messageType = infoMessageType.START_CALL
  createAndSendInfoMessage(
    messageContent,
    messageType,
    chat,
    req.io,
    req.user.id
  )
}
