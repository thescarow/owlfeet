const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
/////////////////////////////////////////////////////////////
const User = require("../../../models/user")

// function for generating unique username
exports.generateUsername = async firstName => {
  try {
    let filterSpecial = new RegExp("[^a-zA-Z.]", "g")
    let filterSpace = new RegExp("\\s", "g")
    let newUsername
    let isUnique = false
    firstName = firstName != "" ? firstName : "user"
    firstName = firstName.replace(filterSpace, "")
    firstName = firstName.replace(filterSpecial, "")
    while (!isUnique) {
      newUsername = firstName + Math.floor(Math.random() * 10000)
      console.log("newUserName:", dataLog(newUsername))
      let user = await User.countDocuments({ username: newUsername })
      if (user == 0) {
        isUnique = true
      }
    }
    return newUsername
  } catch (err) {
    console.log(errorLog("error in checking username:"), mainErrorLog(err))
    res.status(500).json({ error: "Server Error" })
  }
}
