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
  selectLoginUserField,
  filterOtherUserField,
  filterUserFollowFieldToLength
} = require("../../common/filter-field/filterUserField")

const { userFollowStatus } = require("../../common/userFollowStatus")
const {
  checkInSentFollowRequest,
  checkInReceivedFollowRequest,
  checkInFollowing,
  getReceivedFollowRequestTotalCount
} = require("../../common/checkUserFollowStatus")

// router.post("/data/profile-user", getLoginUser, getProfileUserData)

exports.getProfileUserData = async (req, res) => {
  try {
    let username = req.body.username
    let isOwner = false,
      isLogin = false
    let profileUser = await User.findOne({ username: username })
      .select(selectLoginUserField)
      .lean()

    if (profileUser) {
      if (req.user) {
        isLogin = true
        if (req.user.username === profileUser.username) {
          isOwner = true
          profileUser.receivedFollowRequestTotalCount =
            await getReceivedFollowRequestTotalCount(profileUser._id)
        } else {
          filterOtherUserField(profileUser)
          //req.user.id => login user and profileUser._id => requested User
          if (await checkInSentFollowRequest(req.user.id, profileUser._id)) {
            profileUser.userFollowStatus =
              userFollowStatus.CANCEL_SENT_FOLLOW_REQUEST
          } else if (await checkInFollowing(req.user.id, profileUser._id)) {
            profileUser.hasLoginUserAccessToUserContent = true
            profileUser.userFollowStatus = userFollowStatus.UNFOLLOW
          } else {
            profileUser.userFollowStatus = userFollowStatus.SEND_FOLLOW_REQUEST
          }

          if (
            await checkInReceivedFollowRequest(profileUser._id, req.user.id)
          ) {
            profileUser.isUserInReceivedFollowRequest = true
          } else {
            profileUser.isUserInReceivedFollowRequest = false
          }
        }
      } else {
        filterOtherUserField(profileUser)
      }
      if (profileUser.hasOwnProperty("profile") && profileUser.profile !== "") {
        profileUser.profileUrl = await signedUrlForGetAwsS3Object(
          profileUser.profile
        )
      }
      filterUserFollowFieldToLength(profileUser)

      res.json({ isSuccess: true, profileUser: profileUser })
    } else {
      res.json({ isSuccess: false, error: "You Are Accessing Wrong User" })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Getting Profile User Data:"),
      mainErrorLog(err)
    )
    res.json({
      isSuccess: false,
      error:
        "Server Error In Getting Profile User Data, Please Refresh Your Page"
    })
  }
}
