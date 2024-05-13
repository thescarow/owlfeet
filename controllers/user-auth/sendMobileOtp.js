const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const MobileOtp = require("../../models/mobileOtp")
const { mobileOtpProcess } = require("../../common/mobileOtpProcess.common")

exports.sendMobileOtp = async (req, res) => {
  // res.json({ isSuccess: true })
  try {
    const { mobile } = req.body
    if (!mobile) {
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      const mobileValidator = /^[5-9][0-9]{9}$/
      if (!mobileValidator.test(mobile)) {
        return res.json({
          isSuccess: false,
          error: "Invalid Mobile Number, Please check it and send Otp again"
        })
      } else {
        let otpExist = await MobileOtp.findOne({ mobile: mobile })
          .sort({ createdAt: -1 })
          .lean()
        if (otpExist && Date.now() - otpExist.createdAt.getTime() < 120000) {
          return res.json({
            isSuccess: false,
            error: `Otp already sent,Please wait for ${
              120 -
              Math.floor((Date.now() - otpExist.createdAt.getTime()) / 1000)
            } seconds before resend it again`
          })
        } else {
          const resultOtp = await mobileOtpProcess(mobile)
          if (!resultOtp.isSuccess) {
            return res.json({
              isSuccess: false,
              error: resultOtp.error
            })
          } else {
            res.json({ isSuccess: true })
          }
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Server Error in send Mobile Otp:", mainErrorLog(err)))
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error, Please try again" })
  }
}
