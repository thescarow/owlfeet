const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
///////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
//////
const { selectListUserField } = require("../../common/userData")

// router.get("/fetch-following-user", getLoginUser, fetchFollowingUser)
exports.fetchFollowingUsers = async (req, res) => {
  try {
    if (req.user) {
      let { userInput, userCount } = req.query

      userCount = userCount ? parseInt(userCount, 10) : 3
      let userInputArr = userInput.split(/\s+/)
      userInputArr = userInputArr.map(str => "^" + str)
      let userInputQuery = `(${userInputArr.join("|")})`

      let users = await User.find({
        _id: { $ne: req.user.id },
        followers: { $elemMatch: { $eq: req.user.id } },
        $or: [
          { firstName: { $regex: userInputQuery, $options: "i" } },
          { lastName: { $regex: userInputQuery, $options: "i" } },
          { username: { $regex: userInputQuery, $options: "i" } }
        ]
      })
        .select(selectListUserField)
        .sort({ firstName: -1 })
        .limit(userCount)
        .lean()
      if (users.length > 0) {
        await Promise.all(
          users.map(async user => {
            if (user.profile) {
              user.profile = await signedUrlForGetAwsS3Object(user.profile)
            }
          })
        )
      }

      res.json({ isSuccess: true, users: users })
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Fetching Following User in User-folder:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching User"
    })
  }
}
