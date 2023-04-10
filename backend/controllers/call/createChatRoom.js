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

// router.post("/create-chat-room", getLoginUser, createChatRoom)
exports.createChatRoom = async (req, res) => {
  try {
    if (req.user) {
      let chatId = req.body.chatId
      if (chatId && chatId !== "") {
        let chat = await Chat.findOne({
          _id: chatId,
          currentChatMembers: {
            $elemMatch: { $eq: req.user.id }
          },
          isDeleted: false
        }).lean()
        if (chat) {
          let newCallRoomData = {
            roomPic: chat.chatPic,
            roomName: chat.chatName,
            roomDescription: chat.chatDescription,
            isChatRoom: true,
            roomChat: chat._id
          }
          let newCallRoom = new CallRoom(newCallRoomData)
          newCallRoom = await newCallRoom.save()
          let createdNewCallRoom = await CallRoom.findById(newCallRoom._id)
            .select(selectSafeCallRoomField)
            .lean()
          if (
            createdNewCallRoom.hasOwnProperty("roomPic") &&
            createdNewCallRoom.roomPic !== ""
          ) {
            createdNewCallRoom.roomPic = await signedUrlForGetAwsS3Object(
              createdNewCallRoom.roomPic
            )
          }
          res.json({ isSuccess: true, callRoom: createdNewCallRoom })
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
