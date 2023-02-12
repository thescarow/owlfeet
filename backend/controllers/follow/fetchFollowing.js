const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const User = require("../../models/user")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
exports.fetchFollowing = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let ownerUser = await User.findById(req.user.id)
        .select({ followings: 1 })
        .populate({
          path: "followings",
          select: selectListUserField,
          options: {
            skip: skipNumber,
            limit: 7
          }
        })
        .lean()

      if (ownerUser.followings.length) {
        for (let i = 0; i < ownerUser.followings.length; i++) {
          ownerUser.followings[i].profileUrl = await signedUrlForGetAwsS3Object(
            ownerUser.followings[i].profile
          )
        }
        res.json({ isSuccess: true, user: ownerUser.followings })
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
      errorLog("Server Error In Fetching Following:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Following,Please Try Again"
    })
  }
}
