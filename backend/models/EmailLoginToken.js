const mongoose = require("mongoose")

const EmailLoginTokenSchema = new mongoose.Schema(
  {
    token: { type: String, default: "", trim: true },

    socketId: { type: String, default: "", trim: true },

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

module.exports = mongoose.model("EmailLoginToken", EmailLoginTokenSchema)
