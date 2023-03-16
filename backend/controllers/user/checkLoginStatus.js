const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold

exports.checkLoginStatus = async (req, res) => {
  try {
    if (req.user) {
      res.json({ isLogin: true })
    } else {
      res.json({ isLogin: false })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Checking Login Status"),
      mainErrorLog(err)
    )
  }
}
