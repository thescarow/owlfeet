const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
exports.getAccountPage = async (req, res) => {
  try {
    if (req.user) {
      res.redirect(`/user/${req.user.username}`)
    } else {
      if (req.path === "/login" || req.path === "/signin")
        res.render("./user-auth/account", {
          pageName: "profile",
          accountType: "login"
        })
      else if (req.path === "/signup" || req.path === "/register") {
        res.render("./user-auth/account", {
          pageName: "profile",
          accountType: "register"
        })
      }
    }
  } catch (err) {
    console.log(errorLog("Server Error In Account Page:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error, Please Try Again"
    })
  }
}
