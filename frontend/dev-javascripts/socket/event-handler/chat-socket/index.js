export async function createChatSocket(socket) {
  console.log("insideChatSocket")

  let activeChatSection = document.getElementById("activeChatSection")

  let activeChatMessageContainer = document.getElementById(
    "activeChatMessageContainer"
  )

  let activeChatHeaderStatus = document.getElementById("activeChatHeaderStatus")

  socket.on("chat:message-start-typing", async data => {
    if (
      activeChatSection.dataset.chatId.toString() === data.chatId.toString()
    ) {
      activeChatHeaderStatus.innerHTML = `${
        data.isGroupChat ? data.user.firstName : ""
      } typing<span class="active-chat-header__typing-effect">.</span><span class="active-chat-header__typing-effect">.</span><span class="active-chat-header__typing-effect">.</span>`

      activeChatHeaderStatus.classList.remove(
        "active-chat-header__chat-status--hide"
      )
    }
  })
  socket.on("chat:message-stop-typing", async data => {
    if (
      activeChatSection.dataset.chatId.toString() === data.chatId.toString()
    ) {
      if (data.isGroupChat) {
        activeChatHeaderStatus.textContent = ""
      } else {
        activeChatHeaderStatus.textContent = "Active"
      }
      activeChatHeaderStatus.classList.remove(
        "active-chat-header__chat-status--hide"
      )
    }
  })

  socket.on("chat:new-message", async message => {
    let chatId = activeChatSection.dataset.chatId
    let { updateAllChatSection } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    updateAllChatSection(message)
    let { increaseUnseenMessagesCountInChatBox } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    increaseUnseenMessagesCountInChatBox(message.chat)
    if (
      chatId.toString() !== "" &&
      chatId.toString() === message.chat.toString()
    ) {
      let { checkTimeAndCreateNewMessage } = await import(
        "../../../chat/js/message.dev"
      )
      checkTimeAndCreateNewMessage(message, activeChatMessageContainer, true)
    }
  })
  ////////////////////////////////////////////
  socket.on("chat:new-info-message", async message => {
    let chatId = activeChatSection.dataset.chatId
    let { updateAllChatSection } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    updateAllChatSection(message)
    let { increaseUnseenMessagesCountInChatBox } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    increaseUnseenMessagesCountInChatBox(message.chat._id)
    if (chatId !== "" && chatId === message.chat._id) {
      let { createInfoMessage } = await import("../../../chat/js/message.dev")
      createInfoMessage(message, activeChatMessageContainer, "beforeend", true)
    }
  })

  //////////////////////////////////////////
  socket.on("chat:create-new-group-chat", async chat => {
    console.log("created-new-group-chat")
    let { createChatBox } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    createChatBox(chat)
  })
  socket.on("chat:edit-group-chat", async chat => {
    console.log("edit-group-chat")
    activeChatData = { ...chat }
    let { updateActiveChatInfoModal } = await import(
      "../../../chat/js/createActiveChatInfoModal.dev"
    )
    let { updateActiveChatSection } = await import(
      "../../../chat/js/showActiveChatSection.dev"
    )
    let { updateChatBox } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )

    updateActiveChatInfoModal()
    updateActiveChatSection(activeChatData)
    updateChatBox(activeChatData)
  })
  socket.on("chat:clear-chat-all-messages", async chatId => {
    let { clearActiveChatMessageContainer } = await import(
      "../../../chat/js/showActiveChatSection.dev"
    )
    let { clearChatBoxLatestMessage } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    clearActiveChatMessageContainer()
    clearChatBoxLatestMessage(chatId)
  })
  socket.on("chat:delete-chat", async chatId => {
    let { clearActiveChatMessageContainer } = await import(
      "../../../chat/js/showActiveChatSection.dev"
    )
    let { showAllChatSection, deleteChatBox } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )

    showAllChatSection()
    deleteChatBox(chatId)
    clearActiveChatMessageContainer()
  })

  socket.on("chat:user-left-group-chat", async (chatId, userId) => {
    let { removeChatInfoMember } = await import(
      "../../../chat/js/createActiveChatInfoModal.dev"
    )
    removeChatInfoMember(chatId, userId)
  })
  socket.on("chat:delete-message-for-all", async data => {
    let { convertUserMessageToDeletedForAllMessage } = await import(
      "../../../chat/js/message.dev"
    )
    convertUserMessageToDeletedForAllMessage(data.deletedForAllMessage)
    if (data.isLatestMessageChanged) {
      let { updateChatBoxLatestMessage } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )
      updateChatBoxLatestMessage(data.latestMessage)
    }
  })
  socket.on("chat:message-delivered", async data => {
    if (
      data.chatId.toString() === activeChatSection.dataset.chatId.toString()
    ) {
      let { changeUserMessageStatusToDelivered } = await import(
        "../../../chat/js/message.dev"
      )
      changeUserMessageStatusToDelivered(data.messageId)
      let { updateMessageInfoDeliveryStatus } = await import(
        "../../../chat/js/userMessageOptionModal.dev"
      )
      updateMessageInfoDeliveryStatus(data.messageId, data.deliveredTime)
    }
  })
  socket.on("chat:update-message-seen-status", async data => {
    if (
      data.chatId.toString() === activeChatSection.dataset.chatId.toString()
    ) {
      let { changeUserMessageStatusWithMessageSeenStatusCount } = await import(
        "../../../chat/js/message.dev"
      )
      changeUserMessageStatusWithMessageSeenStatusCount(
        data.messageId,
        data.messageSeenStatusCount,
        data.messageReaderCount
      )
      let { addUserToMessageInfoSeenStatus } = await import(
        "../../../chat/js/userMessageOptionModal.dev"
      )
      addUserToMessageInfoSeenStatus(
        data.messageId,
        data.pushedUser,
        data.pushedUserTime
      )
    }
  })
  socket.on("chat:message-seen-by-self", async data => {
    let { decreaseUnseenMessagesCountInChatBox } = await import(
      "../../../chat/js/updateAllChatSection.dev"
    )
    decreaseUnseenMessagesCountInChatBox(data.chatId)
  })
}
