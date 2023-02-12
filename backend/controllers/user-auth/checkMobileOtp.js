const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const MobileOtp = require("../../models/mobileOtp")

//@description     Check mobile otp and delete from database
//@route           POST /userAuth/checkMobileOtp
//@access          Public
exports.checkMobileOtp = async (req, res) => {
  try {
    res.json({ isSuccess: true })
    // const otp = req.body.otp
    // const mobile = req.body.mobile
    // if (otp.length == 6 && mobile.length == 10) {
    //   const mobileOtpRecord = await MobileOtp.findOne({
    //     mobile: mobile
    //   })
    //     .sort({ createdAt: -1 })
    //     .lean()
    //   if (mobileOtpRecord) {
    //     if (mobileOtpRecord.expireAt.getTime() > Date.now()) {
    //       if (await bcrypt.compare(otp, mobileOtpRecord.otp)) {
    //         // await MobileOtp.deleteMany({
    //         //   mobile: mobileOtpRecord.mobile
    //         // })
    //         res.json({ isSuccess: true })
    //       } else {
    //         res.json({
    //           isSuccess: false,
    //           error: "Incorrect Otp"
    //         })
    //       }
    //     } else {
    //       await MobileOtp.deleteMany({ mobile: mobileOtpRecord.mobile })
    //       res.json({
    //         isSuccess: false,
    //         error: "Otp expired please send otp again"
    //       })
    //     }
    //   } else {
    //     res.json({
    //       isSuccess: false,
    //       error: "please send otp first and then try to signup"
    //     })
    //   }
    // } else {
    //   res.json({
    //     isSuccess: false,
    //     error: "incorrect mobile number or otp,please check them"
    //   })
    // }
  } catch (err) {
    console.log(errorLog("Error in check Mobile Otp:"), mainErrorLog(err))
    res.status(500).json({ isSuccess: false, error: "Server Error" })
  }
}
