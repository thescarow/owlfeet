const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
//////////////////////////////////////////////
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const ORIGIN = process.env.PROTOCOL + "://" + process.env.HOSTNAME

const User = require("../../models/user")
const EmailLoginToken = require("../../models/EmailLoginToken")
const jwt = require("jsonwebtoken")
const emailValidator = require("email-validator")
const { sendEmailLink } = require("../../services/sendEmailLink")

// const {
//   selectLoginUserField
// } = require("../../common/filter-field/filterUserField")
exports.userAuthHandler = async (io, socket) => {
  try {
    socket.on("user-auth:send-email-login", async data => {
      let { email } = data
      if (!email) {
        return socket.emit("user-auth:send-email-login-response", {
          isSuccess: false,
          error: "Please send email with the request"
        })
      } else {
        email = email.trim()

        if (!emailValidator.validate(email)) {
          return socket.emit("user-auth:send-email-login-response", {
            isSuccess: false,
            error:
              "This email address is not valid, Please enter a valid email address"
          })
        } else {
          let user = await User.findOne({ email: email, isEmailVerified: true })
            .select({ username: 1, firstName: 1, lastName: 1 })
            .lean()
          if (!user) {
            return socket.emit("user-auth:send-email-login-response", {
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
              return socket.emit("user-auth:send-email-login-response", {
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
                token: token,
                socketId: socket.id
              })
              await emailLoginToken.save()

              let verificationUrl = `${ORIGIN}/user-auth/verify-email-login/?token=${token}`

              let userFullName = user.firstName + " " + user.lastName

              // console.log("email login link:", verificationUrl)
              sendEmailLink(email, "email-login", verificationUrl, userFullName)
              socket.emit("user-auth:send-email-login-response", {
                isSuccess: true
              })
            }
          }
        }
      }
    })
  } catch (err) {
    console.log(errorLog("Server Error In User Auth Socket"), mainErrorLog(err))
  }
}
