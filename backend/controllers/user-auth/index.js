const { getAccountPage } = require("./getAccountPage")
const { getResetPasswordPage } = require("./getResetPasswordPage")
const { getEmailLoginPage } = require("./getEmailLoginPage")
const { sendMobileOtp } = require("./sendMobileOtp")
const { sendEmailVerification } = require("./sendEmailVerification")
const { checkMobileOtp } = require("./checkMobileOtp")
const { checkUsername } = require("./checkUsername")
const { generateUsername } = require("./generateUsername")
const { generateCities } = require("./generateCities")
const { userSignup } = require("./userSignup")
const { userLogin } = require("./userLogin")
const { userLogout } = require("./userLogout")
const { resetPassword } = require("./resetPassword")
const { editUserProfile } = require("./editUserProfile")
const { changeUserPassword } = require("./changeUserPassword")
const { userFeedbackReport } = require("./userFeedbackReport")
const { switchUserPrivacy } = require("./switchUserPrivacy")
const { removeUserEmail } = require("./removeUserEmail")
const { verifyUserEmail } = require("./verifyUserEmail")
const { verifyEmailLogin } = require("./verifyEmailLogin")
const { sendEmailLogin } = require("./sendEmailLogin")

module.exports = {
  getAccountPage,
  getEmailLoginPage,
  getResetPasswordPage,
  sendMobileOtp,
  checkMobileOtp,
  checkUsername,
  generateUsername,
  generateCities,
  userSignup,
  userLogin,
  userLogout,
  resetPassword,
  editUserProfile,
  changeUserPassword,
  userFeedbackReport,
  switchUserPrivacy,
  sendEmailVerification,
  removeUserEmail,
  verifyUserEmail,
  verifyEmailLogin,
  sendEmailLogin
}
