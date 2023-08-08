const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const TransloaditUserMediaMessageEntry = require("../../models/transloaditUserMediaMessageEntry")

exports.notifyUserMediaMessage = async (req, res) => {
  try {
    let data = req.body
    console.log("notify transloadit data::::", data)
  } catch (err) {
    console.log(
      errorLog("Server Error In Notify User Media Message:"),
      mainErrorLog(err)
    )

    res.status(500).json({})
  }
}
