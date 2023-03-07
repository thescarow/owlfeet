const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
///////
const {
  selectLoginUserField
} = require("../../common/filter-field/filterUserField.js")

const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

// router.post("/get-login-user-data", getLoginUser, getLoginUserData)
exports.getLoginUserData = async (req, res) => {
  try {
    if (req.user) {
      let loginUser = await User.findById(req.user.id)
        .select(selectLoginUserField)
        .lean()
      if (loginUser.hasOwnProperty("profile") && loginUser.profile !== "") {
        loginUser.profile = await signedUrlForGetAwsS3Object(loginUser.profile)
      }
      res.json({ isSuccess: true, loginUser: loginUser })
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Getting Login User Data:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Getting Login User Data"
    })
  }
}
