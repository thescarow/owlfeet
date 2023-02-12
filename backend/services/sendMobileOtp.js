require("dotenv").config()
const fetch = require("node-fetch")
exports.sendMobileOtp = async (number, otp) => {
  const apiKey = process.env.FAST2SMS_API_KEY
  const message = "your otp:" + otp + "\nsent by KhabarBook"

  const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
    method: "post",
    headers: {
      authorization: apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      route: "v3",
      sender_id: "FTWSMS",
      message: message,
      language: "english",
      flash: 0, //1 for flash sms
      numbers: number
    })
  })
  return await response.json()
}
