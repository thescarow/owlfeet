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

exports.emailLoginOnRequestedWindow = async (req, res) => {
  try {
    let { token } = req.query
    if (!token) {
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      token = token.trim()
      jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
          return res.json({
            isSuccess: false,
            error:
              "This URL is Expired, Please try to send a new Secure Login Link "
          })
        } else {
          let emailLoginToken = await EmailLoginToken.findOne({
            token: token
          }).lean()
          if (!emailLoginToken) {
            return res.json({
              isSuccess: false,
              error:
                "This is an old link, Please use new link to enter your account."
            })
          } else {
            if (!emailLoginToken.isReadyToLogin) {
              return res.json({
                isSuccess: false,
                error:
                  "We have sent a Secure Login Link to your email box. First use that link to verify your email."
              })
            } else {
              if (emailLoginToken.isUsedForLogin) {
                return res.json({
                  isSuccess: false,
                  error:
                    "You have used this link before, Please try to send a new Secure link to enter your account."
                })
              } else {
                req.io
                  .to(emailLoginToken.socketId.toString())
                  .emit("user-auth:user-email-login", {
                    token: token,
                    email: data.email
                  })

                res.json({ isSuccess: true })
              }
            }
          }
        }
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In User Email Login:", mainErrorLog(err))
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error, Please try again" })
  }
}
