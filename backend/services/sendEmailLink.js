const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
require("dotenv").config()
const client = require("@sendgrid/mail")

exports.sendEmailLink = async (to, emailLink) => {
  try {
    let emailSubject = "Email Veri"
    const apiKey = process.env.SENDGRID_API_KEY
    // const message = "your otp:" + otp + "\nsent by Owlfeet"

    client.setApiKey(apiKey)
    // const msg = {
    //   to: to, // Change to your recipient
    //   from: "thescarow007@gmail.com", // Change to your verified sender
    //   subject: emailSubject,
    //   //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong style='color:red;'>and easy to do anywhere, even with Node.js</strong>"
    // }
    const msg = {
      to: to, // Change to your recipient
      from: "thescarow007@gmail.com", // Change to your verified sender
      subject: emailSubject,
      //   text: "and easy to do anywhere, even with Node.js",
      //   html: "<strong style='color:red;'>and easy to do anywhere, even with Node.js</strong>",
      personalizations: [
        {
          to: [
            {
              email: to
            }
          ],
          dynamic_template_data: {
            Sender_Name: "rithik pathak",
            url: "http://localhost:5000/"
          }
        }
      ],
      template_id: "d-08e2a8e6ec8f4adebc260dae43a2bb93"
    }

    client
      .send(msg)
      .then(() => {
        console.log("Email is sent successfully")
      })
      .catch(error => {
        console.log(
          errorLog("Error In Sending email link:"),
          mainErrorLog(error)
        )
      })
  } catch (err) {
    console.log(errorLog("Error In Sending email link:"), mainErrorLog(err))
  }
}
