const mongoose = require("mongoose")
const mobileOtpSchema = mongoose.Schema(
  {
    mobile: {
      type: Number,
      required: true
    },
    otp: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model("mobileOtp", mobileOtpSchema)
