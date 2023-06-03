const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
// const Chat = require("../../models/chat")
// const CallRoom = require("../../models/callRoom")
// const CallRoomMember = require("../../models/callRoomMember")
// // const Message = require("../../models/message")
// // const User = require("../../models/user")
// ////////
// const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

// const {
//   selectSafeCallRoomField
// } = require("../../common/filter-field/filterCallRoomField")
// const {
//   selectListUserField
// } = require("../../common/filter-field/filterUserField")
// const {
//   selectUserFieldForCallRoom
// } = require("../../common/filter-field/filterUserField")
// const {
//   selectChatFieldForCreatingCallRoom
// } = require("../../common/filter-field/filterChatField")

//@description     Render profile Page by username
//@route           GET /chat
//@access          Accessing login User
exports.getExplorePage = async (req, res) => {
  try {
    if (req.user) {
      res.render("./explore/explore.ejs", {
        pageName: "explore",
        isLogin: true
        // layout: "layout/callLayout.ejs",
      })
    } else {
      res.redirect("user-auth/login")
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Get explore Page:"),
      mainErrorLog(err)
    )
  }
}
