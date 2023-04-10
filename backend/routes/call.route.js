const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const { getCallPage, createChatRoom } = require("../controllers/call")

router.get("/", getLoginUser, getCallPage)
router.post("/create-chat-room", getLoginUser, createChatRoom)

module.exports = router
