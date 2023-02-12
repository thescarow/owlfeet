const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
//@description     Reseting Password
//@route           POST /userAuth/resetPassword
//@access          Public
exports.resetPassword = async (req, res) => {
  try {
    let data = req.body
    if (data.mobile && data.password) {
      const user = await User.findOne({ mobile: data.mobile })
      if (user) {
        const hashedPassword = await bcrypt.hash(data.password, 10)
        user.password = hashedPassword
        await user.save()
        res.json({
          isSuccess: true
        })
      } else {
        res.json({
          isSuccess: false,
          error: "User is not exist with this number"
        })
      }
    } else {
      res.json({ isSuccess: false, error: "please fill all fields" })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in reseting password:"),
      mainErrorLog(err)
    )
    res.status(500).json({ isSuccess: false, error: "Server Error" })
  }
}
