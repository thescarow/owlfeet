const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const Message = require("../../models/message")
const User = require("../../models/user")
////////
// const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

// //////
// const {
//   timeDifferenceFromNow
// } = require("../../common/calculateTimeDifference")

// const { selectLoginUserForClientField } = require("../../common/userData")
// //////////////////

// const {
//   selectLatestMessageField,
//   filterMessageFieldForDeletedForAll
// } = require("../../common/filter-field/filterMessageField")
// const { checkInFollowing } = require("../../common/checkUserFollowStatus")

//@description     Render profile Page by username
//@route           GET /chat
//@access          Accessing login User
exports.getCallPage = async (req, res) => {
  try {
    if (req.user) {
      res.render("./call/call.ejs", {
        pageName: "call",
        isLogin: true,
        layout: "layout/callLayout.ejs"
      })
    } else {
      res.redirect(`/user-auth/login`)
    }
  } catch (err) {
    console.log(errorLog("Server Error In Get Call Page:"), mainErrorLog(err))
    res.render("./error/commonServerError", {
      errorTitle: "Server Error",
      errorMessage: "please try again or go to Home Page"
    })
  }
}
