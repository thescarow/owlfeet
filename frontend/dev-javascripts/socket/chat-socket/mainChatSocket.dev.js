export function createMainChatSocket(socket) {
  console.log("inside chatSocket")
  let activeChatMessageContainer = document.getElementById(
    "activeChatMessageContainer"
  )
  let activeChatSection = document.getElementById("activeChatSection")

  socket.on("chat:new-message", async message => {
    let chatId = activeChatSection.dataset.chatId
    let { updateAllChatSection } = await import(
      "../../chat/js/updateAllChatSection.dev"
    )
    updateAllChatSection(message)

    if (chatId !== "" && chatId === message.chat._id) {
      let { createMessage } = await import("../../chat/js/message.dev")
      createMessage(message, activeChatMessageContainer, "beforeend")
    }
  })
  //////////////////////////////////////////
  socket.on("chat:create-new-group-chat", async chat => {
    console.log("created-new-group-chat")
    let { createChatBox } = await import(
      "../../chat/js/updateAllChatSection.dev"
    )
    createChatBox(chat)
  })
  socket.on("chat:edit-group-chat", async chat => {
    console.log("edit-group-chat")
    activeChatData = { ...chat }
    let { updateActiveChatInfoModal } = await import(
      "../../chat/js/createActiveChatInfoModal.dev"
    )
    let { updateActiveChatSection } = await import(
      "../../chat/js/showActiveChatSection.dev"
    )
    let { updateChatBox } = await import(
      "../../chat/js/updateAllChatSection.dev"
    )

    updateActiveChatInfoModal()
    updateActiveChatSection(activeChatData)
    updateChatBox(activeChatData)
  })
  socket.on("chat:clear-chat-all-messages", async chatId => {
    let { clearActiveChatMessageContainer } = await import(
      "../../chat/js/showActiveChatSection.dev"
    )
    let { clearChatBoxLatestMessage } = await import(
      "../../chat/js/updateAllChatSection.dev"
    )
    clearActiveChatMessageContainer()
    clearChatBoxLatestMessage(chatId)
  })
  socket.on("chat:delete-chat", async chatId => {
    let { clearActiveChatMessageContainer } = await import(
      "../../chat/js/showActiveChatSection.dev"
    )
    let { showAllChatSection, deleteChatBox } = await import(
      "../../chat/js/updateAllChatSection.dev"
    )

    showAllChatSection()
    deleteChatBox(chatId)
    clearActiveChatMessageContainer()
  })
}
