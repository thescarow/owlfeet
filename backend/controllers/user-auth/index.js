const { getAccountPage } = require("./getAccountPage")
const { sendMobileOtp } = require("./sendMobileOtp")
const { sendEmailVerification } = require("./sendEmailVerification")
const { checkMobileOtp } = require("./checkMobileOtp")
const { checkUsername } = require("./checkUsername")
const { generateUsername } = require("./generateUsername")
const { generateCities } = require("./generateCities")
const { userSignup } = require("./userSignup")
const { userLogin } = require("./userLogin")
const { userLogout } = require("./userLogout")
const { getResetPasswordPage } = require("./getResetPasswordPage")
const { resetPassword } = require("./resetPassword")
const { editUserProfile } = require("./editUserProfile")
const { changeUserPassword } = require("./changeUserPassword")
const { userFeedbackReport } = require("./userFeedbackReport")
const { switchUserPrivacy } = require("./switchUserPrivacy")

module.exports = {
  getAccountPage,
  sendMobileOtp,
  checkMobileOtp,
  checkUsername,
  generateUsername,
  generateCities,
  userSignup,
  userLogin,
  userLogout,
  getResetPasswordPage,
  resetPassword,
  editUserProfile,
  changeUserPassword,
  userFeedbackReport,
  switchUserPrivacy,
  sendEmailVerification
}
