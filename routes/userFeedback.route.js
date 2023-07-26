const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const { createUserFeedback } = require("../controllers/userFeedback")

router.post("/", getLoginUser, createUserFeedback)

module.exports = router
