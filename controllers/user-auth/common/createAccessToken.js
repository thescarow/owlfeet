const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const AccessToken = require("../../../models/accessToken")
const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require("uuid")

exports.createAccessTokenWithMobile = async mobile => {
  try {
    let token = uuidv4()
    const hashedToken = await bcrypt.hash(token, 10)
    let accessTokenData = {
      token: hashedToken,
      mobile: mobile
    }
    let newAccessToken = new AccessToken(accessTokenData)
    await newAccessToken.save()
    return { isSuccess: true, token: token }
  } catch (err) {
    console.log(errorLog("Error In Creating Access Token:"), mainErrorLog(err))
    return { isSuccess: false, error: "Server error, Please try again" }
  }
}
