const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const User = require("../../models/user")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
exports.fetchFollowSuggestion = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let suggestionUser = await User.find({
        $not: {
          $or: [
            { _id: req.user.id },
            { followers: req.user.id },
            { followings: req.user.id }
          ]
        }
      })
        .select(selectListUserField)
        .skip(skipNumber)
        .limit(10)
        .lean()
      if (suggestionUser.length) {
        for (let i = 0; i < suggestionUser.length; i++) {
          if (
            suggestionUser[i].hasOwnProperty("profile") &&
            suggestionUser[i].profile !== ""
          )
            suggestionUser[i].profile = await signedUrlForGetAwsS3Object(
              suggestionUser[i].profile
            )
        }
        res.json({ isSuccess: true, user: users })
      } else {
        res.json({ isSuccess: false })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Fetching Follow Suggestion:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Follow Suggestion,Please Try Again"
    })
  }
}
