const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
exports.getEmailLoginPage = (req, res) => {
  try {
    if (req.user) {
      res.redirect(`/user/${req.user.username}`)
    } else {
      res.render("./user-auth/emailLogin", {
        pageName: "profile"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Email Login Page:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error, Please Try Again"
    })
  }
}
