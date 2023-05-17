const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  getCallPage,
  createChatRoom,
  createNewRoom,
  joinCallRoom,
  rejoinCallRoom,
  leftCallRoom
} = require("../controllers/call")

router.get("/", getLoginUser, getCallPage)
router.post("/create-chat-room", getLoginUser, createChatRoom)
router.post("/create-new-room", getLoginUser, createNewRoom)
router.post("/join-call-room", getLoginUser, joinCallRoom)
router.post("/rejoin-call-room", getLoginUser, rejoinCallRoom)
router.post("/left-call-room", getLoginUser, leftCallRoom)

module.exports = router
