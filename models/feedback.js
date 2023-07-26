const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    username: {
      type: String
    },
    feedback: {
      type: String,
      default: "",
      required: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model("Feedback", feedbackSchema)
