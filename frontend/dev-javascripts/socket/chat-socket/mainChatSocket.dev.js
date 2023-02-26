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
      let { checkTimeAndCreateNewMessage } = await import(
        "../../chat/js/message.dev"
      )
      checkTimeAndCreateNewMessage(message, activeChatMessageContainer)
    }
  })
  ////////////////////////////////////////////
  socket.on("chat:new-info-message", async message => {
    let chatId = activeChatSection.dataset.chatId
    let { updateAllChatSection } = await import(
      "../../chat/js/updateAllChatSection.dev"
    )
    updateAllChatSection(message)

    if (chatId !== "" && chatId === message.chat._id) {
      let { createInfoMessage } = await import("../../chat/js/message.dev")
      createInfoMessage(message, activeChatMessageContainer, "beforeend")
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

  socket.on("chat:user-left-group-chat", async (chatId, userId) => {
    let { removeChatInfoMember } = await import(
      "../../chat/js/createActiveChatInfoModal.dev"
    )
    removeChatInfoMember(chatId, userId)
  })
  socket.on("chat:delete-message-for-all", async deletedMessage => {
    let { convertUserMessageToDeletedMessageForAll } = await import(
      "../../chat/js/message.dev"
    )
    convertUserMessageToDeletedMessageForAll(deletedMessage)
  })
}
