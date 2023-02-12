const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  createMessage,
  fetchMessage
  //   fetchAllMessage,
  //   accessChatId
} = require("../controllers/message")

router.post("/", getLoginUser, createMessage)
router.get("/fetch-message/:chatId", getLoginUser, fetchMessage)

module.exports = router
