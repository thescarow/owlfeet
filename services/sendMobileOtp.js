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
    console.log("OTP Info:", number, "==>", otp)

    const apiKey = process.env.FAST2SMS_API_KEY
    const message = "your otp:" + otp + "\nsent by Owlfeet"

    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "post",
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        variables_values: otp,
        route: "otp",
        numbers: number,
        flash: 0 //1 for flash sms
      })
    })

    let returnData = await response.json()
    return returnData.return
    // console.log("OTP Info:", number, "==>", returnData)
    // return true
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
