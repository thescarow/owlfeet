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
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
const {
  selectListUserField,
  selectSafeUserField
} = require("../../common/userData")
const {
  createUserNotification
} = require("../../common/createUserNotification")
///////
const {
  checkInSentFollowRequest,
  checkInFollowing
} = require("../../common/checkUserFollowStatus")

const { userFollowStatus } = require("../../common/userFollowStatus")

//router.patch("/send-follow-request/userId", getLoginUser, sendFollowRequest)
exports.sendFollowRequest = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.params.userId
      const user = await User.findById(userId).select(selectSafeUserField)
      if (user) {
        const ownerUser = await User.findById(req.user.id).select(
          selectSafeUserField
        )

        if (!(await checkInFollowing(req.user.id, userId))) {
          const followRequest = await checkInSentFollowRequest(
            req.user.id,
            userId
          )
          if (!followRequest) {
            if (user.privacy === "private") {
              let newFollowRequest = new FollowRequest({
                from: req.user.id,
                to: user._id
              })

              let savedNewFollowRequest = await newFollowRequest.save()
              await savedNewFollowRequest.populate({
                path: "from",
                select: selectListUserField,
                options: {
                  lean: true
                }
              })
              savedNewFollowRequest.from.profileUrl =
                await signedUrlForGetAwsS3Object(
                  savedNewFollowRequest.from.profile
                )
              req.io
                .to(user._id.toString())
                .emit("add-received-follow-request", savedNewFollowRequest.from)

              createUserNotification(
                req.io,
                ownerUser._id,
                user._id,
                "has sent you friend request",
                userNotificationType.FOLLOW_REQUEST
              )

              res.json({
                isSuccess: true,
                userFollowStatus: userFollowStatus.CANCEL_SENT_FOLLOW_REQUEST
              })
            } else if (user.privacy === "public") {
              ownerUser.followings.push(userId)
              user.followers.push(req.user.id)
              await ownerUser.save()
              await user.save()
              const listOwnerUser = await User.findById(ownerUser._id)
                .select(selectListUserField)
                .lean()
              listOwnerUser.profileUrl = await signedUrlForGetAwsS3Object(
                listOwnerUser.profile
              )
              ////////////////////////////////////
              req.io.to(user._id.toString()).emit("add-follower", listOwnerUser)
              createUserNotification(
                req.io,
                ownerUser._id,
                user._id,
                "has followed you",
                userNotificationType.FOLLOW
              )
              // update owner following list and other user user follower list
              req.io.emit("update-following-for-all", req.user.id, 1)
              req.io.emit("update-follower-for-all", user._id, 1)
              res.json({
                isSuccess: true,
                userFollowStatus: userFollowStatus.UNFOLLOW
              })
            }
          } else {
            res.json({
              isSuccess: false,
              error: "You Have Already Sent Follow Request to This User"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "You Have Already Followed This User"
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
      errorLog("Server Error In Sending Follow Request:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In Sending Follow Request,Please Check Your Data And Try Again"
    })
  }
}
