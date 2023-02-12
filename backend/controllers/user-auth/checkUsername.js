const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const { generateUsername } = require("./common/generateUsername")
const User = require("../../models/user")

//@description     Check username and if it is not unique, generate an unique username
//@route           GET /userAuth/checkUsername?checkUsername=&firstname=
//@access          Public
exports.checkUsername = async (req, res) => {
  try {
    let filterSpecial = new RegExp("[^a-zA-Z.]", "g")
    let filterSpace = new RegExp("\\s", "g")
    let isChange = false
    let checkUsername = req.query.checkUsername
    if (
      checkUsername.search(filterSpace) != -1 ||
      checkUsername.search(filterSpecial) != -1
    ) {
      isChange = true
    }
    checkUsername = checkUsername.replace(filterSpecial, "")
    checkUsername = checkUsername.replace(filterSpace, "")

    let firstName = req.query.firstName

    let user = await User.countDocuments({ username: checkUsername })
    if (user > 0) {
      let newUsername = await generateUsername(firstName)
      res.json({ isUnique: false, isChange: "true", newUsername: newUsername })
    } else {
      res.json({
        isUnique: true,
        isChange: isChange,
        newUsername: checkUsername
      })
    }
  } catch (err) {
    console.log(errorLog("error in checkUsername:"), mainErrorLog(err))
    res.status(500).json({ error: "Server Error" })
  }
}
