const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const bcrypt = require("bcrypt")

//@description     change User password
//@route           PATCH /userAuth/userEditProfile
//@access          private
exports.changeUserPassword = async (req, res) => {
  try {
    if (req.user) {
      let user = await User.findById(req.user.id)
      let changePasswordData = req.body

      if (
        await bcrypt.compare(changePasswordData.currentPassword, user.password)
      ) {
        let newPassword = await bcrypt.hash(changePasswordData.newPassword, 10)
        user.password = newPassword
        user.save()
        res.status(200).json({
          isSuccess: true
        })
      } else {
        res.json({
          isSuccess: false,
          error:
            "Current Password Is Not Correct,Please Try With Correct Password If You Forgot It Please Reset It"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "Please Login First To Change Your Password"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Changing Password"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Changing Password,Please Try Again"
    })
  }
}
