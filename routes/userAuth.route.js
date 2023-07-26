const express = require("express")
const router = express.Router()
const {
  checkNewMobile,
  checkRegisterMobile,
  getLoginUser
} = require("../middleware/auth.middleware")

const {
  getAccountPage,
  getResetPasswordPage,
  getEmailLoginPage,
  sendMobileOtp,
  checkMobileOtp,
  checkUsername,
  generateUsername,
  generateCities,
  userSignup,
  userLogin,
  userEmailLogin,
  userLogout,
  resetPassword,
  editUserProfile,
  changeUserPassword,
  userFeedbackReport,
  switchUserPrivacy,
  removeUserEmail,
  sendEmailVerification,
  verifyUserEmail,
  // sendEmailLogin,
  verifyEmailLogin,
  emailLoginOnRequestedWindow
} = require("../controllers/user-auth")

router.get("/login", getLoginUser, getAccountPage)
router.get("/signin", getLoginUser, getAccountPage)
router.get("/signup", getLoginUser, getAccountPage)
router.get("/register", getLoginUser, getAccountPage)
///////////////////////////////////////////////////////
router.get("/email-login", getLoginUser, getEmailLoginPage)
// router.post("/send-email-login", sendEmailLogin)
// we have used socket for it
router.get("/verify-email-login", verifyEmailLogin)
router.get("/email-login-on-requested-window", emailLoginOnRequestedWindow)
router.get("/user-email-login", userEmailLogin)
/////////////
router.get("/reset-password", getLoginUser, getResetPasswordPage)
router.post("/reset-password", resetPassword)
///////////////
router.post("/send-email-verification", getLoginUser, sendEmailVerification)
router.get("/verify-user-email", verifyUserEmail)
router.patch("/remove-user-email", getLoginUser, removeUserEmail)
/////
router.post("/send-signup-mobile-otp", checkNewMobile, sendMobileOtp)
router.post("/send-reset-password-otp", checkRegisterMobile, sendMobileOtp)
router.post("/check-mobile-otp", checkMobileOtp)
router.get("/check-username", getLoginUser, checkUsername)
router.get("/generate-username", generateUsername)
router.get("/generate-cities", generateCities)
router.post("/user-signup", userSignup)
router.post("/user-login", userLogin)
router.post("/user-logout", getLoginUser, userLogout)

//////////////////////////////////////////////////
router.patch("/edit-user-profile", getLoginUser, editUserProfile)
router.patch("/change-user-password", getLoginUser, changeUserPassword)
router.patch("/switch-user-privacy", getLoginUser, switchUserPrivacy)
router.post("/user-feedback-report", getLoginUser, userFeedbackReport)

module.exports = router
