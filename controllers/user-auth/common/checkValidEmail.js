const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../../models/user")
const emailValidator = require("email-validator")

exports.checkValidEmail = async email => {
  try {
    email = email.trim()
    email = email.toString()
    if (email === "") {
      return {
        isValid: false,
        error:
          "Email address should not be empty. Please enter a valid email address"
      }
    } else if (!emailValidator.validate(email)) {
      return {
        isValid: false,
        error:
          "This email address is not valid, Please enter a valid email address"
      }
    } else {
      let user = await User.countDocuments({ email: email })
      if (user > 0) {
        return {
          isValid: false,
          error:
            "This email is already used with an account, Please choose a diffrent email."
        }
      } else {
        return {
          isValid: true
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Error In checking Valid Email:"), mainErrorLog(err))
    return {
      isValid: false,
      error: "Server error,Please check your email or just try again"
    }
  }
}
