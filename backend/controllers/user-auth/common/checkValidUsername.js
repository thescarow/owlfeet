const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../../models/user")

exports.checkValidUsername = async username => {
  try {
    let specialReg = new RegExp(`[^A-Za-z.0-9_\\s]`, "g") //special character, space is also excluded from special character
    let spaceReg = new RegExp("\\s", "g") //space character

    let alphaReg = new RegExp("[a-zA-Z]", "g") // alphabate character

    if (username.search(spaceReg) !== -1) {
      return {
        isValid: false,
        error:
          "Spaces are not allowed in username ,Please remove space from your username"
      }
    }
    if (username.search(specialReg) !== -1) {
      return {
        isValid: false,
        error:
          "Special characters (except .) are not allowed in username,Please remove them from your username"
      }
    }
    if (username.search(alphaReg) === -1) {
      return {
        isValid: false,
        error: "Please use atleast one alphabet (a-z or A-Z) in your username"
      }
    }

    let user = await User.countDocuments({ username: username })
    if (user > 0) {
      return {
        isValid: false,
        error:
          "This username is already exists, Please choose a diffrent unique username"
      }
    } else {
      return {
        isValid: true
      }
    }
  } catch (err) {
    console.log(
      errorLog("Error In checking Valid Username:"),
      mainErrorLog(err)
    )
    return {
      isValid: false,
      error: "Server error,Please check your username or just try again"
    }
  }
}
