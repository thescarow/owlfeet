const mongoose = require("mongoose")

const accessTokenSchema = new mongoose.Schema(
  {
    token: { type: String, default: "", trim: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    mobile: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("AccessToken", accessTokenSchema)
