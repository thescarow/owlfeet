const mongoose = require("mongoose")

const userFeedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    email: {
      type: String
    },

    feedbackId: {
      type: String
    },

    feedbackType: {
      type: String
    },

    url: {
      type: String
    },

    message: {
      type: String
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model("UserFeedback", userFeedbackSchema)
