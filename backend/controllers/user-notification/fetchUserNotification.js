const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////\
const UserNotification = require("../../models/userNotification")
const {
  selectListUserField
} = require("../../common/filter-field/filterUserField")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

exports.fetchUserNotification = async (req, res) => {
  try {
    if (req.user) {
      let userNotification = await UserNotification.find({
        toUser: req.user.id
      })
        .populate({
          path: "fromUser",
          select: selectListUserField,
          options: {
            lean: true
          }
        })
        .lean()

      for (let i = 0; i < userNotification.length; i++) {
        if (
          userNotification[i].fromUser.hasOwnProperty("profile") &&
          userNotification[i].fromUser.profile !== ""
        )
          userNotification[i].fromUser.profile =
            await signedUrlForGetAwsS3Object(
              userNotification[i].fromUser.profile
            )
      }

      res.json({ isSuccess: true, userNotification: userNotification })
    } else {
      res.json({
        isSuccess: false,
        error:
          "You Are Not Logged In, Please Log In First Then Fetch Your Notifications"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Fetching User Notification:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching User Notification,Please Try Again"
    })
  }
}
