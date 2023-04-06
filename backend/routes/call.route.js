const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const { getCallPage } = require("../controllers/call")

router.get("/", getLoginUser, getCallPage)

module.exports = router
