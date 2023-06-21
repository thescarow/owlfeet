const express = require("express")
const router = express.Router()
const {
  checkNewMobile,
  checkRegisterMobile,
  getLoginUser
} = require("../middleware/auth.middleware")

const {
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
  getAccountPage,
  editUserProfile,
  changeUserPassword,
  userFeedbackReport,
  switchUserPrivacy,
  sendEmailVerification
} = require("../controllers/user-auth")

router.get("/login", getLoginUser, getAccountPage)
router.get("/signin", getLoginUser, getAccountPage)
router.get("/signup", getLoginUser, getAccountPage)
router.get("/register", getLoginUser, getAccountPage)
///////////////////////////////////////////////////////

router.post("/send-signup-mobile-otp", checkNewMobile, sendMobileOtp)
router.post("/send-reset-password-otp", checkRegisterMobile, sendMobileOtp)
router.post("/check-mobile-otp", checkMobileOtp)
router.get("/check-username", checkUsername)
router.get("/generate-username", generateUsername)
router.get("/generate-cities", generateCities)
router.post("/user-signup", userSignup)
router.post("/user-login", userLogin)
router.get("/reset-password", getLoginUser, getResetPasswordPage)
router.post("/reset-password", resetPassword)
router.post("/user-logout", getLoginUser, userLogout)
//////////////////////////////////////////////////
router.patch("/edit-user-profile", getLoginUser, editUserProfile)
router.patch("/change-user-password", getLoginUser, changeUserPassword)
router.patch("/switch-user-privacy", getLoginUser, switchUserPrivacy)
router.post("/send-email-verification", getLoginUser, sendEmailVerification)
router.post("/user-feedback-report", getLoginUser, userFeedbackReport)

module.exports = router
