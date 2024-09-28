const chalk = require("chalk");
const dataLog = chalk.blue.bold;
const errorLog = chalk.red.bgWhite.bold;
const mainErrorLog = chalk.white.bgYellow.bold;
////////////////////////////////////////////////////

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const sgMail = require("@sendgrid/mail");

const apiKey = process.env.SENDGRID_API_KEY;
const sender = process.env.SENDGRID_SENDER_EMAIL || "joker.tempmail@gmail.com";

sgMail.setApiKey(apiKey);

const EMAIL_LOGIN_TEMPLATE_ID = "d-ee3d0f38459a4dcaaa1b942effea3e0e";
const EMAIL_VERIFICATION_TEMPLATE_ID = "d-08e2a8e6ec8f4adebc260dae43a2bb93";

exports.sendEmailLink = async (
  toEmail,
  emailType,
  emailLink,
  emailUser = ""
) => {
  try {
    let msg = {
      to: toEmail, // Recipient's email address
      from: sender, // Your email address (must be verified with SendGrid)
      templateId: EMAIL_LOGIN_TEMPLATE_ID, // SendGrid Dynamic Template ID
      dynamic_template_data: {
        emailSubject: `OWLFEET !!`,
        emailUser: "",
        emailUrl: emailLink,
        owlfeetTwitterUrl: "#",
        owlfeetInstagramUrl: "#",
        owlfeetFacebookUrl: "#",
        owlfeetWhatsappUrl: "#",
        owlfeetLinkedinUrl: "#",
        owlfeetContactUsEmail: sender,
        owlfeetUnsubscribeUrl: "#",
        owlfeetUnsubscribePreferencesUrl: "#",
      },
    };
    if (emailUser !== "") {
      msg.dynamic_template_data.emailUser = emailUser;
    }

    if (emailType === "email-verification") {
      msg.templateId = EMAIL_VERIFICATION_TEMPLATE_ID;
      msg.dynamic_template_data.emailSubject = "Email Verification";
    } else if (emailType === "email-login") {
      msg.templateId = EMAIL_LOGIN_TEMPLATE_ID;
      msg.dynamic_template_data.emailSubject =
        "Email Login (Login Without Password)";
      templateId = EMAIL_LOGIN_TEMPLATE_ID;
    } else {
      msg = {
        to: toEmail,
        from: sender,
        subject: "OWLFEET !!!",
        text: emailLink,
        html: `<a href="${emailLink}" target="_blank  rel="noopener noreferrer">${emailLink}</a>`,
      };
    }

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email Error:", error);
      if (error.response) {
        console.log(
          errorLog("Error In Sending email link:"),
          mainErrorLog(error.response.body)
        );
      }
    }
  } catch (err) {
    console.log(errorLog("Error In Sending email link:"), mainErrorLog(err));
  }
};

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
