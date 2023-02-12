const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

//@description     Logout user
//@route           POST /user-auth/user-logout
//@access          private // getLoginUser
exports.userLogout = async (req, res) => {
  try {
    if (req.user) {
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
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged in, First Login then Logout"
      })
    }
  } catch (err) {
    console.log(errorLog("Error in logoutUser:"), mainErrorLog(err))
    res.json({ isSuccess: false, error: "Server Error In Logout User" })
  }
}
