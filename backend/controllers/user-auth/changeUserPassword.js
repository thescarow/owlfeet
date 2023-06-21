const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const bcrypt = require("bcrypt")
const { checkValidPassword } = require("./common/checkValidPassword")
//@description     change User password
//@route           PATCH /userAuth/userEditProfile
//@access          private
exports.changeUserPassword = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "Please login first to change your password"
      })
    } else {
      let { currentPassword, newPassword } = req.body

      if (!(currentPassword && newPassword)) {
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        let passwordResult = checkValidPassword(newPassword)
        if (!passwordResult.isValid) {
          return res.json({
            isSuccess: false,
            error: passwordResult.error
          })
        } else {
          const user = await User.findById(req.user.id).select({
            password: 1,
            allPassword: 1
          })

          if (!(await bcrypt.compare(currentPassword, user.password))) {
            return res.json({
              isSuccess: false,
              error:
                "Current Password is not correct,Please try with correct Password, if you forgot it Please reset it"
            })
          } else {
            if (
              await checkExistanceInOldPassword(newPassword, user.allPassword)
            ) {
              return res.json({
                isSuccess: false,
                error:
                  "You have used this password before, Please use new one for security purpose"
              })
            } else {
              const hashedPassword = await bcrypt.hash(newPassword, 10)
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
      errorLog("Server Error In Changing Password"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server error in changing password,Please try again"
    })
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
