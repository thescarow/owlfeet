const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const ORIGIN = process.env.PROTOCOL + "://" + process.env.HOSTNAME

const EmailVerificationToken = require("../../models/emailVerificationToken")
const jwt = require("jsonwebtoken")
const emailValidator = require("email-validator")
const { sendEmailLink } = require("../../services/sendEmailLink")
const { checkValidEmail } = require("./common/checkValidEmail")

exports.sendEmailVerification = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    } else {
      let { userId, email } = req.body
      if (!(userId && email)) {
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        userId = userId.trim()
        email = email.trim()
        email = email.toString()

        if (req.user.id.toString() !== userId.toString()) {
          return res.json({
            isSuccess: false,
            error: "You are not authorized to verify this user's email address"
          })
        } else {
          let result = await checkValidEmail(email)
          if (!result.isValid) {
            return res.json({
              isSuccess: false,
              error: result.error
            })
          } else {
            let oldToken = await EmailVerificationToken.findOne({
              userId: req.user.id
            })
              .sort({ createdAt: -1 })
              .lean()
            // 2 * 60 * 1000
            if (
              oldToken &&
              Date.now() - oldToken.createdAt.getTime() < 2 * 60 * 1000
            ) {
              return res.json({
                isSuccess: false,
                error: `Please wait for ${
                  2 * 60 -
                  Math.floor((Date.now() - oldToken.createdAt.getTime()) / 1000)
                } seconds to send Email Verification Link again`
              })
            } else {
              await EmailVerificationToken.deleteMany({ userId: req.user.id })
              const token = jwt.sign(
                {
                  userId: req.user.id,
                  email: email
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: 15 * 60 //15 minutes
                }
              )
              let emailVerificationToken = new EmailVerificationToken({
                userId: req.user.id,
                email: email,
                token: token
              })
              await emailVerificationToken.save()

              let verificationUrl = `${ORIGIN}/user-auth/verify-user-email/?token=${token}`

              // console.log("email verification link:", verificationUrl)
              sendEmailLink(
                email,
                "email-verification",
                verificationUrl,
                req.user.username
              )
              res.json({ isSuccess: true })
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in Sending Email Verification:", mainErrorLog(err))
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error, Please try again" })
  }
}
