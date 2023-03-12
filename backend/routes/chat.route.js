const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  getChatPageWithAllChat,
  getUserChatId,
  createNewGroupChat,
  editGroupChat,
  clearChatAllMessages,
  deleteChat,
  leaveGroupChat,
  getChatDataById,
  getChatBoxDataById,
  getAllChatData
} = require("../controllers/chat")

router.get("/", getLoginUser, getChatPageWithAllChat)

router.post("/get-user-chat-id", getLoginUser, getUserChatId)

router.post("/create-new-group-chat", getLoginUser, createNewGroupChat)

router.post("/edit-group-chat", getLoginUser, editGroupChat)

router.post("/clear-chat-all-messages", getLoginUser, clearChatAllMessages)

router.post("/delete-chat", getLoginUser, deleteChat)

router.post("/leave-group-chat", getLoginUser, leaveGroupChat)

router.get("/data/chat/:chatId", getLoginUser, getChatDataById)

router.get("/data/chat-box/:chatId", getLoginUser, getChatBoxDataById)

router.get("/data/all-chat", getLoginUser, getAllChatData)

module.exports = router
