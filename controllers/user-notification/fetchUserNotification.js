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
      let { totalReceivedNotificationCount } = req.query
      // console.log(
      //   "totalReceivedNotificationCount",
      //   totalReceivedNotificationCount
      // )
      let userNotifications = await UserNotification.find({
        toUser: req.user.id
      })
        .populate({
          path: "fromUser",
          select: selectListUserField,
          options: {
            lean: true
          }
        })
        .limit(10)
        .skip(totalReceivedNotificationCount)
        .sort({ createdAt: -1 })
        .lean()

      for (let i = 0; i < userNotifications.length; i++) {
        if (
          userNotifications[i].fromUser.hasOwnProperty("profile") &&
          userNotifications[i].fromUser.profile !== ""
        )
          userNotifications[i].fromUser.profile =
            await signedUrlForGetAwsS3Object(
              userNotifications[i].fromUser.profile
            )
      }

      res.json({ isSuccess: true, userNotifications: userNotifications })
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
