const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const { sendMobileOtp } = require("../services/sendMobileOtp")
const MobileOtp = require("../models/mobileOtp")
const bcrypt = require("bcrypt")
//315600
module.exports.mobileOtpProcess = async number => {
  try {
    // create otp and hashed it
    const otpNumber = `${Math.floor(100000 + Math.random() * 900000)}`
    const hashedOtpNumber = await bcrypt.hash(otpNumber, 10)

    const newMobileOtp = new MobileOtp({
      mobile: number,
      otp: hashedOtpNumber
    })
    await newMobileOtp.save()

    await MobileOtp.deleteMany({
      mobile: newMobileOtp.mobile,
      otp: { $ne: newMobileOtp.otp }
    })
    let isSent = await sendMobileOtp(number, otpNumber)

    if (isSent === false) {
      await MobileOtp.deleteMany({
        mobile: newMobileOtp.mobile
      })
      return {
        isSuccess: false,
        error:
          "Check your number,there are some problem in sending OTP to this number or just try again"
      }
    } else {
      return { isSuccess: true }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in Mobile OTP Process Common:", mainErrorLog(err))
    )
  }
  return { isSuccess: false, error: "Server error in sending otp" }
}
