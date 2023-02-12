const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const FollowRequest = require("../../models/followRequest")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
exports.fetchReceivedFollowRequest = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let receivedFollowRequest = await FollowRequest.find({
        to: req.user.id
      })
        .select({ _id: 0, from: 1 })
        .populate({ path: "from", select: selectListUserField })
        .skip(skipNumber)
        .limit(3)
        .lean()
      if (receivedFollowRequest.length) {
        let receivedFollowRequestUser = receivedFollowRequest.map(
          followRequest => {
            return followRequest.from
          }
        )
        for (let i = 0; i < receivedFollowRequestUser.length; i++) {
          receivedFollowRequestUser[i].profileUrl =
            await signedUrlForGetAwsS3Object(
              receivedFollowRequestUser[i].profile
            )
        }
        res.json({ isSuccess: true, user: receivedFollowRequestUser })
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
      errorLog("Server Error In Fetching Received Follow Request:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Received Follow Request,Please Try Again"
    })
  }
}
