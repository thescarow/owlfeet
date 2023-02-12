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
    let loginUser = req.body.loginUser
    let loginPassword = req.body.loginPassword
    let user
    if (!isNaN(loginUser)) {
      user = await User.findOne({ mobile: loginUser }).lean()
    } else {
      user = await User.findOne({ username: loginUser }).lean()
    }

    if (user) {
      if (await bcrypt.compare(loginPassword, user.password)) {
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
          secure: true, //for https connection only
          sameSite: "Lax",
          signed: true
          // domain: '' // default exclude all subdomain
          // path: '/' // Path for the cookie
        })
        res.json({ isSuccess: true, username: user.username })
      } else {
        res.json({
          isSuccess: false,
          error: "User and Password does not match"
        })
      }
    } else {
      res.json({ isSuccess: false, error: "User is not exist" })
    }
  } catch (err) {
    console.log(errorLog("Error in loginUser:"), mainErrorLog(err))
    res.json({ isSuccess: false, error: "Server Error In Login User" })
  }
}
