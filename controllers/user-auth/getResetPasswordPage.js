const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
exports.getResetPasswordPage = (req, res) => {
  try {
    res.render("./user-auth/resetPassword", {
      pageName: "profile"
    })
  } catch (err) {
    console.log(errorLog("Server Error In Reset Page:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error, Please Try Again"
    })
  }
}
