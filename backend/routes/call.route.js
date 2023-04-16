const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  getCallPage,
  createChatRoom,
  createNewRoom,
  joinRoom
} = require("../controllers/call")

router.get("/", getLoginUser, getCallPage)
router.post("/create-chat-room", getLoginUser, createChatRoom)
router.post("/create-new-room", getLoginUser, createNewRoom)
router.post("/join-room", getLoginUser, joinRoom)

module.exports = router
