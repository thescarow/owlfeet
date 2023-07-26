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
  if (mobile) {
    const user = await User.findOne({ mobile: mobile })
      .select({ _id: 1 })
      .lean()
    if (user) {
      res.json({
        isSuccess: false,
        error:
          "User already registered with this number, please try diffrent number"
      })
    } else {
      next()
    }
  } else {
    res.json({
      isSuccess: false,
      error: "Please send all the required data with the request"
    })
  }
}
exports.checkRegisterMobile = async (req, res, next) => {
  const mobile = req.body.mobile
  if (mobile) {
    const user = await User.findOne({ mobile: mobile })
      .select({ _id: 1 })
      .lean()
    if (user) {
      next()
    } else {
      res.json({
        isSuccess: false,
        error:
          "This mobile number is not registered,please check your number and try again"
      })
    }
  } else {
    res.json({
      isSuccess: false,
      error: "Please send all the required data with the request"
    })
  }
}
