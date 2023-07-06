const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const User = require("../../models/user")

exports.removeUserEmail = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    } else {
      let { userId } = req.body
      if (!userId) {
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        userId = userId.trim()

        if (req.user.id.toString() !== userId.toString()) {
          return res.json({
            isSuccess: false,
            error: "You are not authorized to remove this user's email address"
          })
        } else {
          let user = await User.findById(req.user.id).select({
            email: 1,
            isEmailVerified: 1
          })
          user.email = ""
          user.isEmailVerified = false
          await user.save()
          res.json({ isSuccess: true })
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in Removing User Email:", mainErrorLog(err))
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error, Please try again" })
  }
}
