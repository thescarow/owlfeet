const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {
  cookieExpireDays,
  jwtExpireDays
} = require("../../common/authExpireDays")
//@description     Login user
//@route           POST /user-auth/user-login
//@access          Public
exports.userLogin = async (req, res) => {
  try {
    let { loginUser, loginPassword } = req.body
    if (!(loginUser && loginPassword)) {
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      let user
      if (!isNaN(loginUser)) {
        const mobileValidator = /^[5-9][0-9]{9}$/
        if (!mobileValidator.test(loginUser)) {
          return res.json({
            isSuccess: false,
            error: "User is not exist, Check your mobile number"
          })
        } else {
          user = await User.findOne({ mobile: loginUser })
            .select({ mobile: 1, password: 1, username: 1, role: 1 })
            .lean()
        }
      } else {
        user = await User.findOne({ username: loginUser })
          .select({ mobile: 1, password: 1, username: 1, role: 1 })
          .lean()
      }

      if (!user) {
        return res.json({ isSuccess: false, error: "User is not exist" })
      } else {
        if (!(await bcrypt.compare(loginPassword, user.password))) {
          return res.json({
            isSuccess: false,
            error: "User and Password does not match"
          })
        } else {
          const accessToken = jwt.sign(
            { username: user.username, userId: user._id, userRole: user.role },
            process.env.JWT_SECRET,
            {
              expiresIn: jwtExpireDays
            }
          )
          res.cookie("user", accessToken, {
            expires: new Date(Date.now() + 84600 * 1000 * cookieExpireDays),
            httpOnly: true,
            // secure: true, //for https connection only
            sameSite: "Lax",
            signed: true
            // domain: '' // default exclude all subdomain
            // path: '/' // Path for the cookie
          })
          res.json({ isSuccess: true, username: user.username })
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Error in login User:"), mainErrorLog(err))
    res.json({ isSuccess: false, error: "Server Error,Please try again" })
  }
}
