const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  createMessage,
  fetchMessages,
  deleteMessage,
  getMessageStatusData,
  fetchUnseenMessagesCount
  //   fetchAllMessage,
  //   accessChatId
} = require("../controllers/message")

router.get("/data/status/:messageId", getLoginUser, getMessageStatusData)
router.get(
  "/data/unseen-messages-count/:messageId",
  getLoginUser,
  fetchUnseenMessagesCount
)
router.post("/", getLoginUser, createMessage)
router.get("/fetch-messages/:chatId", getLoginUser, fetchMessages)
router.post("/delete-message", getLoginUser, deleteMessage)

module.exports = router
