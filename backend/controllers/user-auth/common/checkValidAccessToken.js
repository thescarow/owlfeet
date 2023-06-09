const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const AccessToken = require("../../../models/accessToken")
const bcrypt = require("bcrypt")

exports.checkValidAccessToken = async (mobile, token) => {
  try {
    let accessTokenValidTime = 30 * 60 * 1000 // 30 minutes
    let accessToken = await AccessToken.findOne({
      mobile: mobile
    })
      .sort({ createdAt: -1 })
      .lean()

    if (!accessToken) {
      return {
        isValid: false,
        error:
          "You have not completed OTP verification process, Please verify your number first and then proceed further"
      }
    } else {
      if (Date.now() - accessToken.createdAt.getTime() > accessTokenValidTime) {
        return {
          isValid: false,
          error:
            "Your session is expired,Please verify your mobile number again and then proceed further"
        }
      } else {
        if (!(await bcrypt.compare(token, accessToken.token))) {
          return {
            isValid: false,
            error:
              "You are not allowed for this process, first verify your number then proceed further"
          }
        } else {
          await AccessToken.deleteMany({ mobile: mobile })
          return { isValid: true }
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Error In checking Access Token:"), mainErrorLog(err))
    return {
      isValid: false,
      error: "Server error,Please try again"
    }
  }
}
