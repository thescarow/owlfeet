const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
///////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
//////
const {
  selectUserFieldsForSearchedUser
} = require("../../common/filter-field/filterUserField")

// router.get("/fetch-following-user", getLoginUser, fetchFollowingUser)
exports.fetchMainUsersData = async (req, res) => {
  try {
    let { userInput, userCount } = req.query
    userCount = userCount ? parseInt(userCount, 10) : 8
    let userInputArr = userInput.split(/\s+/)
    userInputArr = userInputArr.map(str => "^" + str)
    let userInputQuery = `(${userInputArr.join("|")})`

    let users = await User.find({
      // _id: { $ne: req.user.id },
      $or: [
        { firstName: { $regex: userInputQuery, $options: "i" } },
        { lastName: { $regex: userInputQuery, $options: "i" } },
        { username: { $regex: userInputQuery, $options: "i" } }
      ]
    })
      .select(selectUserFieldsForSearchedUser)
      .sort({ firstName: -1 })
      .limit(userCount)
      .lean()
    if (users.length > 0) {
      await Promise.all(
        users.map(async user => {
          if (user.hasOwnProperty("profile") && user.profile !== "") {
            user.profile = await signedUrlForGetAwsS3Object(user.profile)
          }
        })
      )
    }
    res.json({ isSuccess: true, users: users })
  } catch (err) {
    console.log(
      errorLog("Server Error In Fetching Main Users:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching User"
    })
  }
}
