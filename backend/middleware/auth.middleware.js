const jwt = require("jsonwebtoken")
const User = require("../models/user")

exports.getLoginUser = async (req, res, next) => {
  const token = req.signedCookies.user
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next()
      } else {
        req.user = {
          role: user.userRole,
          id: user.userId,
          username: user.username
        }

        return next()
      }
    })
  } else {
    return next()
  }
}

exports.checkNewMobile = async (req, res, next) => {
  const mobile = req.body.mobile
  const user = await User.find({ mobile: mobile }).lean()
  if (user.length) {
    res.json({
      success: false,
      error:
        "User already registered with this number, please try diffrent number"
    })
  } else {
    next()
  }
}
exports.checkRegisterMobile = async (req, res, next) => {
  const mobile = req.body.mobile
  const user = await User.find({ mobile: mobile }).lean()
  if (user.length) {
    next()
  } else {
    res.json({
      success: false,
      error:
        "Error: This mobile number is not registered,please try with registered number"
    })
  }
}
