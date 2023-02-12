const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const { userPrivacy } = require("../../models/common/userRoleNPrivacy")
const User = require("../../models/user")

//@description     Switch User Privacy
//@route           POST /user-auth/switch-user-privacy
//@access          private // getLoginUser
exports.switchUserPrivacy = async (req, res) => {
  try {
    if (req.user) {
      let { userPrivacySwitchedTo } = req.body
      if (Object.values(userPrivacy).includes(userPrivacySwitchedTo)) {
        let user = await User.findById(req.user.id)
        user.privacy = userPrivacySwitchedTo
        await user.save()
        res.json({
          isSuccess: true,
          switchedTo: userPrivacySwitchedTo
        })
      } else {
        res.json({
          isSuccess: false,
          error: "You Are Not Allowed To Set This Privacy"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error:
          "You Are Not Logged in, First Login Then Try To Change Your User Privacy"
      })
    }
  } catch (err) {
    console.log(errorLog("Error in switchUserPrivacy:"), mainErrorLog(err))
    res.json({
      isSuccess: false,
      error: "Server Error In Switching Your Privacy,Please Try Again"
    })
  }
}
