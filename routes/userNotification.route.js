const express = require("express")
const router = express.Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  fetchUserNotification,
  getUserNotificationPage
} = require("../controllers/user-notification")

router.get("/data", getLoginUser, fetchUserNotification)
router.get("/", getLoginUser, getUserNotificationPage)

module.exports = router
