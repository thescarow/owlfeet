const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const CallRoom = require("../../models/callRoom")
const CallRoomMember = require("../../models/callRoomMember")
// const Message = require("../../models/message")
// const User = require("../../models/user")
////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

const {
  selectSafeCallRoomField
} = require("../../common/filter-field/filterCallRoomField")
const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")
const {
  selectChatFieldForCreatingCallRoom
} = require("../../common/filter-field/filterChatField")

//@description     Render profile Page by username
//@route           GET /chat
//@access          Accessing login User
exports.getCallPage = async (req, res) => {
  try {
    if (req.user) {
      if (req.query.room === undefined || req.query.room === "") {
        if (req.query.chat === undefined || req.query.chat === "") {
          res.render("./call/call.ejs", {
            pageName: "call",
            isLogin: true,
            layout: "layout/callLayout.ejs",
            isJoinCallRoomPage: false,
            isChatCallRoom: false
          })
        } else {
          let chat = await Chat.findOne({
            _id: req.query.chat,
            currentChatMembers: {
              $elemMatch: { $eq: req.user.id }
            },
            isDeleted: false
          })
            .select(selectChatFieldForCreatingCallRoom)
            .lean()
          if (chat) {
            if (chat.hasOwnProperty("chatPic") && chat.chatPic !== "") {
              chat.chatPic = await signedUrlForGetAwsS3Object(chat.chatPic)
            }
            res.render("./call/call.ejs", {
              pageName: "call",
              isLogin: true,
              layout: "layout/callLayout.ejs",
              isJoinCallRoomPage: false,
              isChatCallRoom: true,
              chat: chat
            })
          } else {
            res.redirect(`/call`)
          }
        }
      } else {
        let callRoom = await CallRoom.findById(req.query.room)
          .select(selectSafeCallRoomField)
          .lean()
        if (callRoom) {
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
          res.render("./call/call.ejs", {
            pageName: "call",
            isLogin: true,
            layout: "layout/callLayout.ejs",
            isJoinCallRoomPage: true,
            callRoom: callRoom
          })
        } else {
          res.redirect(`/call`)
        }
      }
    } else {
      res.redirect(`/user-auth/login`)
    }
  } catch (err) {
    console.log(errorLog("Server Error In Get Call Page:"), mainErrorLog(err))
    res.redirect(`/call`)
  }
}
