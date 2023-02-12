const { sendMobileOtp } = require("../services/sendMobileOtp")
const MobileOtp = require("../models/mobileOtp")
const bcrypt = require("bcrypt")
//315600
module.exports.mobileOtpProcess = async number => {
  // create otp and hashed it
  const otpNumber = `${Math.floor(100000 + Math.random() * 900000)}`
  const hashedOtpNumber = await bcrypt.hash(otpNumber, 10).catch(err => {
    return { error: err }
  })

  const mobileOtpRecord = new MobileOtp({
    mobile: number,
    otp: hashedOtpNumber,
    createdAt: Date.now(),
    expireAt: Date.now() + 36000000 //15 min = 900,000
  })
  const savedMobileOtpRecord = await mobileOtpRecord.save().catch(err => {
    return { error: err }
  })
  const result = await sendMobileOtp(number, otpNumber)
  if (result.return == false) {
    await MobileOtp.deleteOne({ mobile: savedMobileOtpRecord.mobile }).catch(
      err => {
        console.log("error in deleting savedOtp:", err)
      }
    )
  }
  return { returnData: result }
}
