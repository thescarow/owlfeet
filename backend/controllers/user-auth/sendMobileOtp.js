const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const MobileOtp = require("../../models/mobileOtp")
const { mobileOtpProcess } = require("../../common/mobileOtpProcess.common")

//@description     Send mobile otp and store it in database
//@route           POST /userAuth/sendSignupMobileOtp or /userAuth/sendResetPasswordOtp

//@access          Check New and Register Mobile

exports.sendMobileOtp = async (req, res) => {
  res.json({ isSuccess: true })
  // try {
  //   const mobile = req.body.mobile
  //   const mobileValidator = /^[5-9][0-9]{9}$/
  //   if (mobileValidator.test(mobile)) {
  //     let otpExist = await MobileOtp.findOne({ mobile: mobile })
  //       .sort({ createdAt: -1 })
  //       .lean()
  //     if (!otpExist || Date.now() - otpExist.createdAt.getTime() >= 120000) {
  //       const result = await mobileOtpProcess(mobile)
  //       // if result has an error property then its mean there is an error in sending otp
  //       if (result.error) {
  //         ///beacuase undefine value result false
  //         console.log(errorLog(result.error))
  //         res.status(500).json({ isSuccess: false, error: "Server Error" })
  //       } else if (result.returnData.return == false) {
  //         res.json({
  //           isSuccess: false,
  //           error: "Invalid Mobile Number, Please check it and send Otp again"
  //         })
  //       } else if (result.returnData.return == true) {
  //         res.json({ isSuccess: true }) // success response
  //       }
  //     } else {
  //       res.json({
  //         isSuccess: false,
  //         error:
  //           "Otp already sent,please wait for given time after that resend it again"
  //       })
  //     }
  //   } else {
  //     //nuber could not pass the validator
  //     res.json({
  //       isSuccess: false,
  //       error: "Invalid Mobile Number, Please check it and send Otp again"
  //     })
  //   }
  // } catch (err) {
  //   console.log(errorLog("Server Error in sendMobileOtp:", mainErrorLog(err)))
  //   res.status(500).json({ isSuccess: false, error: "Server Error" })
  // }
}
