const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const FollowRequest = require("../../models/followRequest")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
exports.fetchSentFollowRequest = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let sentFollowRequest = await FollowRequest.find({
        from: req.user.id
      })
        .select({ _id: 0, to: 1 })
        .populate({ path: "to", select: selectListUserField })
        .skip(skipNumber)
        .limit(7)
        .lean()
      if (sentFollowRequest) {
        let sentFollowRequestUser = sentFollowRequest.map(followRequest => {
          return followRequest.to
        })

        for (let i = 0; i < sentFollowRequestUser.length; i++) {
          if (
            sentFollowRequestUser[i].hasOwnProperty("profile") &&
            sentFollowRequestUser[i].profile !== ""
          )
            sentFollowRequestUser[i].profile = await signedUrlForGetAwsS3Object(
              sentFollowRequestUser[i].profile
            )
        }
        res.json({ isSuccess: true, user: sentFollowRequestUser })
      } else {
        res.json({
          isSuccess: false
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Fetching Sent Follow Request:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Sent Follow Request,Please Try Again"
    })
  }
}
