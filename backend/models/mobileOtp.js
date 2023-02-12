const mongoose = require("mongoose")
const mobileOtpSchema = mongoose.Schema({
  mobile: {
    type: Number,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  expireAt: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
})
module.exports = mongoose.model("mobileOtp", mobileOtpSchema)
