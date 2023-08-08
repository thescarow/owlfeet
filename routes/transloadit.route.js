const express = require("express")
const router = express.Router()
const { notifyUserMediaMessage } = require("../controllers/transloadit")
const { getLoginUser } = require("../middleware/auth.middleware")

// /transloadit/

router.post("/notify/user-media-message", notifyUserMediaMessage)

module.exports = router
