const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const User = require("../../models/user")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
exports.fetchFollower = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let ownerUser = await User.findById(req.user.id)
        .select({ followers: 1 })
        .populate({
          path: "followers",
          select: selectListUserField,
          options: {
            skip: skipNumber,
            limit: 7
          }
        })
        .lean()

      if (ownerUser.followers.length) {
        for (let i = 0; i < ownerUser.followers.length; i++) {
          ownerUser.followers[i].profileUrl = await signedUrlForGetAwsS3Object(
            ownerUser.followers[i].profile
          )
        }
        res.json({ isSuccess: true, user: ownerUser.followers })
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
      errorLog("Server Error In Fetching Follower:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Followers,Please Try Again"
    })
  }
}
