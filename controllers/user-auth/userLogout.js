const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

exports.userLogout = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "You are not logged in, First login then logout"
      })
    } else {
      let { userId } = req.body
      if (!userId) {
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        if (userId !== req.user.id) {
          return res.json({
            isSuccess: false,
            error: "You are not authorized to logout this user"
          })
        } else {
          res.clearCookie("user", {
            httpOnly: true,
            secure: true, //for https connection only
            sameSite: "Lax",
            signed: true
            // domain: '' // default exclude all subdomain
            // path: '/' // Path for the cookie
          })
          res.json({
            isSuccess: true
          })
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Error in logoutUser:"), mainErrorLog(err))
    res.json({ isSuccess: false, error: "Server Error In Logout User" })
  }
}
