const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
///////
const {
  selectListUserField,
  selectSafeUserField
} = require("../../common/userData")
///////
const { checkInFollowing } = require("../../common/checkUserFollowStatus")
const { userFollowStatus } = require("../../common/userFollowStatus")

// router.patch("/unfollow/:userId", getLoginUser, unfollow)
exports.unfollow = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.params.userId
      const user = await User.findById(userId).select(selectSafeUserField)

      if (user) {
        const ownerUser = await User.findById(req.user.id).select(
          selectSafeUserField
        )

        if (await checkInFollowing(req.user.id, userId)) {
          ownerUser.followings = ownerUser.followings.filter(id => {
            return id != userId
          })
          user.followers = user.followers.filter(id => {
            return id != req.user.id
          })

          await ownerUser.save()
          await user.save()

          req.io.to(user._id.toString()).emit("remove-follower", ownerUser._id)
          //update owner user following list and other user follower list
          req.io.emit("update-following-for-all", req.user.id, -1)
          req.io.emit("update-follower-for-all", user._id, -1)
          res.json({
            isSuccess: true,
            userFollowStatus: userFollowStatus.SEND_FOLLOW_REQUEST
          })
        } else {
          res.json({
            isSuccess: false,
            error: "You Do Not Have This User In Your Following List"
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
      errorLog("Server Error In Unfollowing User:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In Unfollowing User,Please Check Your Data And Try Again"
    })
  }
}
