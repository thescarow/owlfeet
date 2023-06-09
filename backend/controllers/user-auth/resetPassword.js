const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const bcrypt = require("bcrypt")

const { checkValidPassword } = require("./common/checkValidPassword")
const { checkValidAccessToken } = require("./common/checkValidAccessToken")

exports.resetPassword = async (req, res) => {
  try {
    let { mobile, password, resetAccessToken } = req.body
    if (!(mobile && password && resetAccessToken)) {
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      let passwordResult = checkValidPassword(password)
      if (!passwordResult.isValid) {
        res.json({
          isSuccess: false,
          error: passwordResult.error
        })
      } else {
        const user = await User.findOne({ mobile: mobile }).select({
          password: 1,
          allPassword: 1,
          mobile: 1
        })
        if (!user) {
          return res.json({
            isSuccess: false,
            error: "User is not exist with this number"
          })
        } else {
          if (await checkExistanceInOldPassword(password, user.allPassword)) {
            return res.json({
              isSuccess: false,
              error:
                "You have used this password before, Please use new one for security purpose"
            })
          } else {
            console.log("reached here")
            let tokenResult = await checkValidAccessToken(
              user.mobile,
              resetAccessToken
            )
            if (!tokenResult.isValid) {
              return res.json({
                isSuccess: false,
                error: tokenResult.error
              })
            } else {
              const hashedPassword = await bcrypt.hash(password, 10)
              user.password = hashedPassword
              user.allPassword.push(hashedPassword)
              await user.save()
              res.json({
                isSuccess: true
              })
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in resetting password:"),
      mainErrorLog(err)
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server Error,Please try again" })
  }
}

async function checkExistanceInOldPassword(password, oldPasswords) {
  let isExist = false
  for (let i = 0; i < oldPasswords.length; i++) {
    if (await bcrypt.compare(password, oldPasswords[i])) {
      isExist = true
    }
  }
  return isExist
}
