const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const { createUsername } = require("./common/createUsername")
//@description     Generate unique username
//@route           GET /userAuth/generateUsername?firstname=
//@access          Public
exports.generateUsername = async (req, res) => {
  try {
    let { name } = req.query
    if (!name) {
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      if (name.trim() === "") {
        return res.json({
          isSuccess: false,
          error: "Firstname should not be empty, Please change your firstname"
        })
      }

      let usernameResult = await createUsername(name)
      if (!usernameResult.isSuccess) {
        return res.json({
          isSuccess: false,
          error: usernameResult.error
        })
      } else {
        res.json({ isSuccess: true, username: usernameResult.username })
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Generating Username:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error, Please Try Again"
    })
  }
}
