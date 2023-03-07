const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
///////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
//////
const {
  selectSafeUserField,
  filterOtherUserField,
  filterUserFollowListToLength
} = require("../../common/userData")
const { userFollowStatus } = require("../../common/userFollowStatus")
const {
  checkInSentFollowRequest,
  checkInReceivedFollowRequest,
  checkInFollowing,
  getReceivedFollowRequestTotalCount
} = require("../../common/checkUserFollowStatus")

//@description     Render profile Page by username
//@route           GET /user/:username
//@access          Accessing login User
exports.getProfilePageByUsername = async (req, res) => {
  try {
    let isOwner = false,
      isLogin = false
    let user = await User.findOne({ username: req.params.username })
      .select(selectSafeUserField)
      .lean()

    if (user) {
      if (req.user) {
        isLogin = true
        if (req.user.username == user.username) {
          isOwner = true
          user.receivedFollowRequestTotalCount =
            await getReceivedFollowRequestTotalCount(user._id)
        } else {
          filterOtherUserField(user)
          //req.user.id => login user and user._id => requested User
          if (await checkInSentFollowRequest(req.user.id, user._id)) {
            user.userFollowStatus = userFollowStatus.CANCEL_SENT_FOLLOW_REQUEST
          } else if (await checkInFollowing(req.user.id, user._id)) {
            user.hasLoginUserAccessToUserContent = true
            user.userFollowStatus = userFollowStatus.UNFOLLOW
          } else {
            user.userFollowStatus = userFollowStatus.SEND_FOLLOW_REQUEST
          }

          if (await checkInReceivedFollowRequest(user._id, req.user.id)) {
            user.isUserInReceivedFollowRequest = true
          } else {
            user.isUserInReceivedFollowRequest = false
          }
        }
      } else {
        filterOtherUserField(user)
      }
      if (user.hasOwnProperty("profile") && user.profile !== "") {
        user.profileUrl = await signedUrlForGetAwsS3Object(user.profile)
      }
      filterUserFollowListToLength(user)

      res.render("./user/profile.ejs", {
        profileUser: user,
        profileUsername: user.username,
        isOwner: isOwner,
        isLogin: isLogin,
        pageName: "profile"
      })
    } else {
      res.render("./error/commonServerError", {
        errorTitle: "User not found",
        errorMessage:
          "Can you please find this user and request him/her to join our community"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Get Profile Page By Username:"),
      mainErrorLog(err)
    )
    res.render("./error/commonServerError", {
      errorTitle: "Server Error",
      errorMessage: "please try again or go to Home Page"
    })
  }
}
