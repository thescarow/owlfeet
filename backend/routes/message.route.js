const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  createMessage,
  fetchMessages,
  deleteMessage
  //   fetchAllMessage,
  //   accessChatId
} = require("../controllers/message")

router.post("/", getLoginUser, createMessage)
router.get("/fetch-messages/:chatId", getLoginUser, fetchMessages)
router.post("/delete-message", getLoginUser, deleteMessage)

module.exports = router
