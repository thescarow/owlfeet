const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
// const Message = require("../../models/message")
// const User = require("../../models/user")
////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

const {
  selectChatFieldForCreatingCallRoom
} = require("../../common/filter-field/filterChatField")

//@description     Render profile Page by username
//@route           GET /chat
//@access          Accessing login User
exports.getCallPage = async (req, res) => {
  try {
    if (req.user) {
      if (req.query.room === undefined) {
        if (req.query.chat === undefined) {
          res.render("./call/call.ejs", {
            pageName: "call",
            isLogin: true,
            layout: "layout/callLayout.ejs",
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
              isChatCallRoom: true,
              chat: chat
            })
          } else {
            res.redirect(`/call`)
          }
        }
      } else {
        res.redirect(`/user-auth/login`)
      }
    } else {
      res.redirect(`/user-auth/login`)
    }
  } catch (err) {
    console.log(errorLog("Server Error In Get Call Page:"), mainErrorLog(err))
    res.redirect(`/call`)
  }
}
