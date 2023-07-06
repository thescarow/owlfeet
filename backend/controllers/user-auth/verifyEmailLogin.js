const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const User = require("../../models/user")
const EmailLoginToken = require("../../models/EmailLoginToken")
const jwt = require("jsonwebtoken")

exports.verifyEmailLogin = async (req, res) => {
  try {
    let { token } = req.query
    if (!token) {
      res.render("./response-status/emailLoginStatus.ejs", {
        layout: false,
        isSuccess: false,
        errorTitle: "Invalid URL",
        errorDesc: "Please check your URL and try again"
      })
    } else {
      token = token.trim()
      jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
          return res.render("./response-status/emailLoginStatus.ejs", {
            layout: false,
            isSuccess: false,
            errorTitle: "Invalid URL",
            errorDesc:
              "This URL is invalid or Expired , Please check your URL or just try to send a new Secure Link."
          })
        } else {
          let emailLoginToken = await EmailLoginToken.findOne({
            token: token
          })
          if (!emailLoginToken) {
            return res.render("./response-status/emailLoginStatus.ejs", {
              layout: false,
              isSuccess: false,
              errorTitle: "Old Link",
              errorDesc:
                "This is an old link, Please use new link to enter your account."
            })
          } else {
            if (emailLoginToken.isUsedOnce) {
              return res.render("./response-status/emailLoginStatus.ejs", {
                layout: false,
                isSuccess: false,
                errorTitle: "Already Used Link",
                errorDesc:
                  "You have used this link before, Please try to send a new Secure link to enter your account."
              })
            } else {
              emailLoginToken.isUsedOnce = true
              emailLoginToken.isReadyToLogin = true
              await emailLoginToken.save()
              res.render("./response-status/emailLoginStatus.ejs", {
                layout: false,
                isSuccess: true,
                token: token
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
