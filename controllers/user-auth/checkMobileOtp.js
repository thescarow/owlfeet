const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const MobileOtp = require("../../models/mobileOtp")
const bcrypt = require("bcrypt")

const { createAccessTokenWithMobile } = require("./common/createAccessToken")
exports.checkMobileOtp = async (req, res) => {
  try {
    // res.json({ isSuccess: true })
    const { otp, mobile } = req.body
    if (otp && mobile) {
      if (otp.length === 6 && mobile.length === 10) {
        const mobileValidator = /^[5-9][0-9]{9}$/
        if (mobileValidator.test(mobile)) {
          let otpExpiryDuration = 15 * 60 * 1000 // 15 min
          const createdOtp = await MobileOtp.findOne({
            mobile: mobile
          })
            .sort({ createdAt: -1 })
            .lean()
          if (createdOtp) {
            if (
              Date.now() - createdOtp.createdAt.getTime() <
              otpExpiryDuration
            ) {
              if (await bcrypt.compare(otp, createdOtp.otp)) {
                await MobileOtp.deleteMany({
                  mobile: createdOtp.mobile
                })

                let tokenResult = await createAccessTokenWithMobile(mobile)
                if (!tokenResult.isSuccess) {
                  res.json({
                    isSuccess: false,
                    error: tokenResult.error
                  })
                } else {
                  res.json({ isSuccess: true, accessToken: tokenResult.token })
                }
              } else {
                res.json({
                  isSuccess: false,
                  error: "Incorrect Otp"
                })
              }
            } else {
              await MobileOtp.deleteMany({ mobile: createdOtp.mobile })
              res.json({
                isSuccess: false,
                error: "This Otp is expired, Please send otp again"
              })
            }
          } else {
            res.json({
              isSuccess: false,
              error: "Please send otp first and then try to signup"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "Invalid Mobile Number, Please check it and send Otp again"
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "Incorrect mobile number or OTP,Please check them"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    }
  } catch (err) {
    console.log(errorLog("Error in check Mobile Otp:"), mainErrorLog(err))
    res
      .status(500)
      .json({ isSuccess: false, error: "Server error, Please try again" })
  }
}
