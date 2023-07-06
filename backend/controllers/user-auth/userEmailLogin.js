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

exports.userEmailLogin = async (req, res) => {
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
              "This URL is Invalid or Expired, Please check your URL or just try to send a new Secure Link."
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
            if (!emailLoginToken.isReadyToLogin) {
              return res.render("./response-status/emailLoginStatus.ejs", {
                layout: false,
                isSuccess: false,
                errorTitle: "Verify Your Link",
                errorDesc:
                  "We have sent a Secure Login Link to your email box. Please use that link to verify your email."
              })
            } else {
              if (emailLoginToken.isUsedForLogin) {
                return res.render("./response-status/emailLoginStatus.ejs", {
                  layout: false,
                  isSuccess: false,
                  errorTitle: "Already Used Link",
                  errorDesc:
                    "You have used this link before, Please try to send a new Secure link to enter your account."
                })
              } else {
                let user = await User.findById(data.userId)
                  .select({ username: 1, role: 1 })
                  .lean()
                const accessToken = jwt.sign(
                  {
                    username: user.username,
                    userId: user._id,
                    userRole: user.role
                  },
                  process.env.JWT_SECRET,
                  {
                    expiresIn: 24 * 60 * 60 // 24 hour
                  }
                )
                res.cookie("user", accessToken, {
                  expires: new Date(Date.now() + 84600 * 1000 * 1), // 24 hours
                  httpOnly: true,
                  secure: true, //for https connection only
                  sameSite: "Lax",
                  signed: true
                  // domain: '' // default exclude all subdomain
                  // path: '/' // Path for the cookie
                })

                emailLoginToken.isUsedForLogin = true
                await emailLoginToken.save()
                await EmailLoginToken.deleteMany({ email: data.email })
                res.redirect(`/user/${user.username}`)
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
// req.io
//   .to(data.userId.toString())
//   .emit("user-auth:verified-user-email", {
//     userId: data.userId,
//     email: data.email
//   })
// res.redirect(`/user/${user.username}`)
