const UserNotification = require("../models/userNotification")
const {
  userNotificationType
} = require("../models/common/userNotificationType")
const { signedUrlForGetAwsS3Object } = require("../services/awsS3")
//////
const { selectListUserField } = require("./userData.js")

exports.createUserNotification = async (
  io,
  fromUserId,
  toUserId,
  content,
  notificationType = userNotificationType.FRIEND_REQUEST,
  secondContent = ""
) => {
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

  savedUserNotification.fromUser.profileUrl = await signedUrlForGetAwsS3Object(
    savedUserNotification.fromUser.profile
  )

  io.to(savedUserNotification.toUser.toString()).emit(
    "new-user-notification",
    savedUserNotification
  )
}
