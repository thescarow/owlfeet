const mongoose = require("mongoose")

const followRequestSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    isSeen: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model("FollowRequest", followRequestSchema)
