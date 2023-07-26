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
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error:
          "You are not logged in, First login then try to change your user privacy"
      })
    } else {
      let { switchedUserPrivacyTo } = req.body
      if (!switchedUserPrivacyTo) {
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        if (!Object.values(userPrivacy).includes(switchedUserPrivacyTo)) {
          return res.json({
            isSuccess: false,
            error: "You are not allowed to set this privacy"
          })
        } else {
          let user = await User.findById(req.user.id).select({ privacy: 1 })
          user.privacy = switchedUserPrivacyTo
          await user.save()
          res.json({
            isSuccess: true,
            switchedTo: switchedUserPrivacyTo
          })
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Error in switchign User Privacy:"), mainErrorLog(err))
    res.json({
      isSuccess: false,
      error: "Server error in switching your privacy,Please try again"
    })
  }
}
