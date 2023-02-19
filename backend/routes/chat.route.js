const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  getChatPageWithAllChat,
  fetchChatWithId,
  getUserChatId,
  createNewGroupChat,
  editGroupChat,
  clearChatAllMessages,
  deleteChat,
  leaveGroupChat
} = require("../controllers/chat")

router.get("/", getLoginUser, getChatPageWithAllChat)
router.get("/:chatId", getLoginUser, fetchChatWithId)
router.post("/get-user-chat-id", getLoginUser, getUserChatId)
router.post("/create-new-group-chat", getLoginUser, createNewGroupChat)
router.post("/edit-group-chat", getLoginUser, editGroupChat)
router.post("/clear-chat-all-messages", getLoginUser, clearChatAllMessages)
router.post("/delete-chat", getLoginUser, deleteChat)
router.post("/leave-group-chat", getLoginUser, leaveGroupChat)

module.exports = router
