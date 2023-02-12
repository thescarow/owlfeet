const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const FollowRequest = require("../../models/followRequest")
const {
  userNotificationType
} = require("../../models/common/userNotificationType")
///////
const {
  createUserNotification
} = require("../../common/createUserNotification")
const {
  selectListUserField,
  selectSafeUserField
} = require("../../common/userData")
//////
const {
  checkInFollower,
  checkInReceivedFollowRequest
} = require("../../common/checkUserFollowStatus")
const { userFollowStatus } = require("../../common/userFollowStatus")

// router.delete(
//   "/delete-received-follow-request/:userId",
//   getLoginUser,
//   deleteReceivedFollowRequest
// )
exports.deleteReceivedFollowRequest = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.params.userId
      const user = await User.findById(userId).select(selectSafeUserField)
      if (user) {
        // const ownerUser = await User.findById(req.user.id)
        if (!(await checkInFollower(req.user.id, userId))) {
          const followRequest = await checkInReceivedFollowRequest(
            req.user.id,
            userId
          )
          if (followRequest) {
            await FollowRequest.deleteMany({ _id: followRequest._id })

            req.io
              .to(user._id.toString())
              .emit("remove-sent-follow-request", req.user.id)
            //send owner user id so that we can recognise when this user page is open and then update that profile follow btn
            req.io
              .to(user._id.toString())
              .emit(
                "change-user-follow-status",
                req.user.id,
                userFollowStatus.SEND_FOLLOW_REQUEST
              )

            createUserNotification(
              req.io,
              req.user.id,
              user._id,
              "has cancelled your follow request",
              userNotificationType.FOLLOW_REQUEST
            )
            res.json({
              isSuccess: true
            })
          } else {
            res.json({
              isSuccess: false,
              error: "This User Is Not In Your Received Follow List"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "This User Is Already In Your Follower List"
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
      errorLog("Server Error In Deleting Received Follow  Request:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In Deleting Received Follow  Request,Please Check Your Data And Try Again"
    })
  }
}
