const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const FollowRequest = require("../../models/followRequest")
//////
const {
  selectListUserField,
  selectSafeUserField
} = require("../../common/userData")
///////
const {
  checkInSentFollowRequest,
  checkInFollowing
} = require("../../common/checkUserFollowStatus")
const { userFollowStatus } = require("../../common/userFollowStatus")

//  router.patch(
//   "/cancle-sent-follow-request/:userId",
//   getLoginUser,
//   cancelSentFollowRequest
// )
exports.cancelSentFollowRequest = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.params.userId
      const user = await User.findById(userId).select(selectSafeUserField)
      if (user) {
        // const ownerUser = await User.findById(req.user.id)
        if (!(await checkInFollowing(req.user.id, userId))) {
          const followRequest = await checkInSentFollowRequest(
            req.user.id,
            userId
          )
          if (followRequest) {
            await FollowRequest.deleteMany({ _id: followRequest._id })

            req.io
              .to(user._id.toString())
              .emit("remove-received-follow-request", req.user.id)
            res.json({
              isSuccess: true,
              userFollowStatus: userFollowStatus.SEND_FOLLOW_REQUEST
            })
          } else {
            res.json({
              isSuccess: false,
              error: "This User Is Not In Your Sent Follow Requests List"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "This User Is Already In Your Following List"
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "User Not Found, Please Try Again"
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
      errorLog("Server Error In Cancelling Sent Follow Request:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In Cancelling Sent Follow Request,Please Check Your Data And Try Again"
    })
  }
}
