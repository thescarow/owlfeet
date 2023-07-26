const mongoose = require("mongoose")
const { userNotificationType } = require("./common/userNotificationType")

const userNotificationSchema = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    userNotificationType: {
      type: String,
      default: userNotificationType.FOLLOW_REQUEST
    },
    content: {
      type: String,
      default: ""
    },
    secondContent: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model("UserNotification", userNotificationSchema)
