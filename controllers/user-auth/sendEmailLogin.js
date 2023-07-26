const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const ORIGIN = process.env.PROTOCOL + "://" + process.env.HOSTNAME

const User = require("../../models/user")
const EmailLoginToken = require("../../models/EmailLoginToken")
const jwt = require("jsonwebtoken")
const emailValidator = require("email-validator")
const { sendEmailLink } = require("../../services/sendEmailLink")

exports.sendEmailLogin = async (req, res) => {
  try {
    let { email } = req.body
    if (!email) {
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      email = email.trim()
      email = email.toString()

      if (!emailValidator.validate(email)) {
        return res.json({
          isSuccess: false,
          error:
            "This email address is not valid, Please enter a valid email address"
        })
      } else {
        let user = await User.findOne({ email: email, isEmailVerified: true })
          .select({ username: 1, firstName: 1, lastName: 1 })
          .lean()
        if (!user) {
          return res.json({
            isSuccess: false,
            error: "This email address is not verified."
          })
        } else {
          let oldToken = await EmailLoginToken.findOne({
            email: email
          })
            .sort({ createdAt: -1 })
            .lean()
          if (
            oldToken &&
            Date.now() - oldToken.createdAt.getTime() < 2 * 60 * 1000
          ) {
            return res.json({
              isSuccess: false,
              error: `Please wait for ${
                2 * 60 -
                Math.floor((Date.now() - oldToken.createdAt.getTime()) / 1000)
              } seconds to send Secure Login Link again`
            })
          } else {
            await EmailLoginToken.deleteMany({ email: email })
            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
                email: email
              },
              process.env.JWT_SECRET,
              {
                expiresIn: 15 * 60 //15 minutes
              }
            )
            let emailLoginToken = new EmailLoginToken({
              email: email,
              token: token
            })
            await emailLoginToken.save()

            let verificationUrl = `${ORIGIN}/user-auth/verify-email-login/?token=${token}`

            let userFullName = user.firstName + " " + user.lastName

            // console.log("email login link:", verificationUrl)
            sendEmailLink(email, "email-login", verificationUrl, userFullName)

            res.json({ isSuccess: true })
          }
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in Sending Email Login:", mainErrorLog(err))
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error, Please try again" })
  }
}
