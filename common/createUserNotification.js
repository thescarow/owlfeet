const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////\
const UserNotification = require("../models/userNotification")
const {
  userNotificationType
} = require("../models/common/userNotificationType")
const { signedUrlForGetAwsS3Object } = require("../services/awsS3")
//////
const { selectListUserField } = require("./filter-field/filterUserField")

exports.createUserNotification = async (
  io,
  fromUserId,
  toUserId,
  content,
  notificationType = userNotificationType.FRIEND_REQUEST,
  secondContent = ""
) => {
  try {
    const userNotification = new UserNotification({
      fromUser: fromUserId,
      toUser: toUserId,
      content: content,
      secondContent: secondContent,
      userNotificationType: notificationType
    })

    const savedUserNotification = await userNotification.save()
    await savedUserNotification.populate({
      path: "fromUser",
      select: selectListUserField,
      options: {
        lean: true
      }
    })

    if (
      savedUserNotification.fromUser.hasOwnProperty("profile") &&
      savedUserNotification.fromUser.profile !== ""
    )
      savedUserNotification.fromUser.profile = await signedUrlForGetAwsS3Object(
        savedUserNotification.fromUser.profile
      )

    io.to(savedUserNotification.toUser.toString()).emit(
      "new-user-notification",
      savedUserNotification
    )
  } catch (e) {
    console.log(
      errorLog("Server Error In creating User Notification in common:"),
      mainErrorLog(err)
    )
  }
}
