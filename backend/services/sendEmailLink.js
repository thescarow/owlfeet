const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const emailClient = require("@sendgrid/mail")

const OWLFEET_FROM_EMAIL = "thescarow007@gmail.com"
const OWLFEET_CONTACT_US_EMAIL = "thescarow007@gmail.com"

const EMAIL_LOGIN_TEMPLATE_ID = "d-ee3d0f38459a4dcaaa1b942effea3e0e"
const EMAIL_VERIFICATION_TEMPLATE_ID = "d-08e2a8e6ec8f4adebc260dae43a2bb93"

const OWLFEET_TWITTER_URL = "#"
const OWLFEET_INSTAGRAM_URL = "#"
const OWLFEET_FACEBOOK_URL = "#"
const OWLFEET_WHATSAPP_URL = "#"
const OWLFEET_LINKEDIN_URL = "#"

const OWLFEET_UNSUBSCRIBE_URL = "#"
const OWLFEET_UNSUBSCRIBE_PREFERENCES_URL = "#"

// {"emailUser": "Rithik Pathak",
// "emailUrl":"http://localhost:5000",
// "owlfeetContactUsEmail":"thescarow007@gmail.com",
// "owlfeetTwitterUrl":"#",
// "owlfeetInstagramUrl":"#",
// "owlfeetFacebookUrl":"#",
// "owlfeetWhatsappUrl":"#",
// "owlfeetLinkedinUrl":"#",
// "owlfeetUnsubscribeUrl":"#",
// "owlfeetUnsubscribePreferencesUrl":"#"
// }
exports.sendEmailLink = async (
  toEmail,
  emailType,
  emailLink,
  emailUser = ""
) => {
  try {
    const apiKey = process.env.SENDGRID_API_KEY
    emailClient.setApiKey(apiKey)

    let templateId
    let emailSubject = "Owlfeet"

    if (emailType === "email-verification") {
      templateId = EMAIL_VERIFICATION_TEMPLATE_ID
      emailSubject = "Email Verification"
    } else if (emailType === "email-login") {
      templateId = EMAIL_LOGIN_TEMPLATE_ID
      emailSubject = "Email Login (Login Without Password)"
    }

    if (templateId === undefined) {
      message = {
        to: toEmail,
        from: OWLFEET_FROM_EMAIL,
        subject: emailSubject,
        text: emailLink,
        html: `<a href="${emailLink}" target="_blank  rel="noopener noreferrer">${emailLink}</a>`
      }
    } else {
      message = {
        to: toEmail,
        from: OWLFEET_FROM_EMAIL,
        subject: emailSubject,
        personalizations: [
          {
            to: [
              {
                email: toEmail
              }
            ],
            dynamic_template_data: {
              emailUser: emailUser || "",
              emailUrl: emailLink,
              owlfeetContactUsEmail: OWLFEET_CONTACT_US_EMAIL,
              owlfeetTwitterUrl: OWLFEET_TWITTER_URL,
              owlfeetInstagramUrl: OWLFEET_INSTAGRAM_URL,
              owlfeetFacebookUrl: OWLFEET_FACEBOOK_URL,
              owlfeetWhatsappUrl: OWLFEET_WHATSAPP_URL,
              owlfeetLinkedinUrl: OWLFEET_LINKEDIN_URL,
              owlfeetUnsubscribeUrl: OWLFEET_UNSUBSCRIBE_URL,
              owlfeetUnsubscribePreferencesUrl:
                OWLFEET_UNSUBSCRIBE_PREFERENCES_URL
            }
          }
        ],
        template_id: templateId
      }
    }
    emailClient
      .send(message)
      .then(() => {
        console.log("Email is sent successfully:", emailSubject)
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
