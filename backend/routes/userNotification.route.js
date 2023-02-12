const express = require("express")
const router = express.Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const { fetchUserNotification } = require("../controllers/user-notification")

router.get("/", getLoginUser, fetchUserNotification)

module.exports = router
