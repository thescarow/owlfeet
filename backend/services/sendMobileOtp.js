const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const fetch = require("node-fetch")
exports.sendMobileOtp = async (number, otp) => {
  try {
    const apiKey = process.env.FAST2SMS_API_KEY
    const message = "your otp:" + otp + "\nsent by Owlfeet"

    // const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
    //   method: "post",
    //   headers: {
    //     authorization: apiKey,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     route: "v3",
    //     sender_id: "FTWSMS",
    //     message: message,
    //     language: "english",
    //     flash: 0, //1 for flash sms
    //     numbers: number
    //   })
    // })

    // let returnData = await response.json()
    console.log("OTP Info:", number, "==>", otp)
    // console.log("OTP Info:", number, "==>", returnData)
    // return returnData.return
    return true
  } catch (err) {
    console.log(errorLog("Error In Sending Mobile OTP:"), mainErrorLog(err))
    return false
  }
}

// await response.json() ==>
// {
//   "return": true,
//   "request_id": "lwdtp7cjyqxvfe9",
//   "message": [
//       "Message sent successfully"
//   ]
// }

// {
//   "return": false,
//   "status_code": 412,
//   "message": "Invalid Authentication, Check Authorization Key"
// }
