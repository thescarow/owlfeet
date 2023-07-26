const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const User = require("../../models/user")
const EmailVerificationToken = require("../../models/emailVerificationToken")
const jwt = require("jsonwebtoken")

exports.verifyUserEmail = async (req, res) => {
  try {
    let { token } = req.query
    if (!token) {
      res.render("./response-status/emailStatus.ejs", {
        layout: false,
        status: "failed",
        errorTitle: "Invalid URL",
        errorDesc: "Please check your URL and try again"
      })
    } else {
      token = token.trim()

      jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
          return res.render("./response-status/emailStatus.ejs", {
            layout: false,
            status: "failed",
            errorTitle: "Invalid URL",
            errorDesc:
              "This URL is invalid or Expired , Please check your URL or just try to send a new Email Verification Link."
          })
        } else {
          let emailVerificationToken = await EmailVerificationToken.findOne({
            token: token
          })

          if (!emailVerificationToken) {
            return res.render("./response-status/emailStatus.ejs", {
              layout: false,
              status: "failed",
              errorTitle: "Old Link",
              errorDesc:
                "You have requested a new Email Verification link, Please use that new link to verify your account."
            })
          } else {
            if (emailVerificationToken.isUsedOnce) {
              return res.render("./response-status/emailStatus.ejs", {
                layout: false,
                status: "failed",
                errorTitle: "Already Used Link",
                errorDesc:
                  "You have used this link before, Please try to send a new Email Verification link to verify your account."
              })
            } else {
              let user = await User.findById(data.userId).select({
                email: 1,
                isEmailVerified: 1
              })
              user.email = data.email
              user.isEmailVerified = true
              await user.save()
              // we have already checked email is unique or not in sending email verification

              emailVerificationToken.isUsedOnce = true
              await emailVerificationToken.save()

              req.io
                .to(data.userId.toString())
                .emit("user-auth:verified-user-email", {
                  userId: data.userId,
                  email: data.email
                })
              return res.render("./response-status/emailStatus.ejs", {
                layout: false,
                status: "email-verified"
              })
            }
          }
        }
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Verify user Email:", mainErrorLog(err))
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error, Please try again" })
  }
}
