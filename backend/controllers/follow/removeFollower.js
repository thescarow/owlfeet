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

const { userFollowStatus } = require("../../common/userFollowStatus")
///////
const { checkInFollower } = require("../../common/checkUserFollowStatus")

// router.patch("/remove-follower/:userId", getLoginUser, removeFollower)
exports.removeFollower = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.params.userId
      const user = await User.findById(userId).select(selectSafeUserField)
      if (user) {
        const ownerUser = await User.findById(req.user.id).select(
          selectSafeUserField
        )
        if (await checkInFollower(req.user.id, userId)) {
          ownerUser.followers = ownerUser.followers.filter(id => {
            return id.toString() !== userId.toString()
          })
          user.followings = user.followings.filter(id => {
            return id.toString() !== req.user.id.toString()
          })

          await ownerUser.save()
          await user.save()
          ////////////////////////////////////////////////
          req.io.to(user._id.toString()).emit("remove-following", ownerUser._id)
          req.io
            .to(user._id.toString())
            .emit(
              "change-user-follow-status",
              ownerUser._id,
              userFollowStatus.SEND_FOLLOW_REQUEST
            )
          //update owner user follower list and  other user following list
          req.io.emit("update-follower-for-all", req.user.id, -1)
          req.io.emit("update-following-for-all", user._id, -1)
          res.json({
            isSuccess: true
          })
        } else {
          res.json({
            isSuccess: false,
            error: "You Do Not Have This User In Your Follower List"
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
      errorLog("Server Error In Removing Follower:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error:
        "Server Error In Removing Follower,Please Check Your Data And Try Again"
    })
  }
}
