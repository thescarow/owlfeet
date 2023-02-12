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
  selectListUserField,
  selectSafeUserField
} = require("../../common/userData")
const {
  createUserNotification
} = require("../../common/createUserNotification")

///////
const {
  checkInFollower,
  checkInReceivedFollowRequest
} = require("../../common/checkUserFollowStatus")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
const { userFollowStatus } = require("../../common/userFollowStatus")

// router.post("/accept-follow-request", getLoginUser, acceptFollowRequest)
exports.acceptReceivedFollowRequest = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.params.userId
      const user = await User.findById(userId).select(selectSafeUserField)
      if (user) {
        const ownerUser = await User.findById(req.user.id).select(
          selectSafeUserField
        )
        if (!(await checkInFollower(req.user.id, userId))) {
          const followRequest = await checkInReceivedFollowRequest(
            req.user.id,
            userId
          )
          if (followRequest) {
            ownerUser.followers.push(userId)
            user.followings.push(req.user.id)
            await ownerUser.save()
            await user.save()
            //delete that follow request document
            await FollowRequest.deleteMany({ _id: followRequest._id })
            const listOwnerUser = await User.findById(ownerUser._id)
              .select(selectListUserField)
              .lean()
            listOwnerUser.profileUrl = await signedUrlForGetAwsS3Object(
              listOwnerUser.profile
            )
            //////////////////////
            req.io.to(user._id.toString()).emit("add-following", listOwnerUser)
            req.io
              .to(user._id.toString())
              .emit("remove-sent-follow-request", ownerUser._id)

            //send owner user id so that we can recognise when this user page is open and then update that profile follow btn
            req.io
              .to(user._id.toString())
              .emit(
                "change-user-follow-status",
                ownerUser._id,
                userFollowStatus.UNFOLLOW
              )
            // update owner follower list and other user user following list
            req.io.emit("update-follower-for-all", req.user.id, 1)
            req.io.emit("update-following-for-all", user._id, 1)
            createUserNotification(
              req.io,
              ownerUser._id,
              user._id,
              "has accepted your follow request",
              userNotificationType.FRIEND_REQUEST
            )
            const listUser = await User.findById(user._id)
              .select(selectListUserField)
              .lean()
            listUser.profileUrl = await signedUrlForGetAwsS3Object(
              listUser.profile
            )
            res.json({
              isSuccess: true,
              acceptReceivedFollowRequestUser: listUser
            })
          } else {
            res.json({
              isSuccess: false,
              error:
                "You Do Not Have This User Request In Your Received Request"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "This User Is Already in Your Followers List"
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
      errorLog("Server Error In Accepting Follow Request:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In Accepting Follow Request,Please Check Your Data And Try Again"
    })
  }
}
