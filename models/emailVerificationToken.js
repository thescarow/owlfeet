const mongoose = require("mongoose")

const emailVerificationTokenSchema = new mongoose.Schema(
  {
    token: { type: String, default: "", trim: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    email: {
      type: String,
      default: "",
      trim: true
    },

    isUsedOnce: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model(
  "EmailVerificationToken",
  emailVerificationTokenSchema
)
