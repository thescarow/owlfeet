const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const User = require("../../models/user")
const { checkValidUsername } = require("./common/checkValidUsername")

//@description     Check username and if it is not unique, generate an unique username
//@route           GET /userAuth/checkUsername?checkUsername=&firstname=
//@access          Public
exports.checkUsername = async (req, res) => {
  try {
    let { username } = req.query
    username = username.trim()

    if (req.user && req.user.username.toString() === username.toString()) {
      return res.json({
        isSuccess: true
      })
    } else {
      let result = await checkValidUsername(username)
      if (!result.isValid) {
        return res.json({
          isSuccess: false,
          error: result.error
        })
      } else {
        res.json({
          isSuccess: true
        })
      }
    }
  } catch (err) {
    console.log(errorLog("error in checkUsername:"), mainErrorLog(err))
    res.status(500).json({ error: "Server Error" })
  }
}
