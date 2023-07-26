const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
exports.checkValidPassword = password => {
  try {
    let spaceReg = new RegExp("\\s", "g") //space character
    if (password.trim() === "") {
      return res.json({
        isValid: false,
        error:
          "Password can not be empty or you can't use only spaces in your password"
      })
    } else {
      if (password.search(spaceReg) !== -1) {
        return res.json({
          isValid: false,
          error:
            "Spaces are not allowed in Password ,Please remove space from your password"
        })
      } else {
        return {
          isValid: true
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Error In checking Valid Password:"),
      mainErrorLog(err)
    )
    return res.json({
      isValid: false,
      error: "Server error,Please check your password or just try again"
    })
  }
}
