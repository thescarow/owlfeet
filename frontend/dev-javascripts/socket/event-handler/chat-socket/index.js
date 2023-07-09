export async function createChatSocket(socket) {
  try {
    console.log("insideChatSocket")

    let activeChatSection = document.getElementById("activeChatSection")

    let activeChatMessageContainer = document.getElementById(
      "activeChatMessageContainer"
    )

    let activeChatHeaderStatus = document.getElementById(
      "activeChatHeaderStatus"
    )

    socket.on("chat:changed-active-chat-background", async data => {
      if (
        activeChatSection.dataset.chatId.toString() === data.chatId.toString()
      ) {
        let { changeActiveChatBackground } = await import(
          "../../../chat/js/showActiveChatSection.dev.js"
        )
        changeActiveChatBackground(data.backgroundType, data.backgroundValue)
      }
    })

    socket.on("chat:removed-active-chat-background", async data => {
      if (
        activeChatSection.dataset.chatId.toString() === data.chatId.toString()
      ) {
        let { removeActiveChatBackground } = await import(
          "../../../chat/js/showActiveChatSection.dev.js"
        )
        removeActiveChatBackground()
      }
    })

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

    socket.on("chat:new-message", async data => {
      console.log("new-message data:", data)
      let message = data.message
      let chatId = activeChatSection.dataset.chatId
      let { updateAllChatSection } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )
      updateAllChatSection(message)
      let { increaseUnseenMessagesCountInChatBox } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )
      increaseUnseenMessagesCountInChatBox(message.chat._id)
      if (
        chatId.toString() !== "" &&
        chatId.toString() === message.chat._id.toString()
      ) {
        let { checkTimeAndCreateNewMessage } = await import(
          "../../../chat/js/message.dev"
        )
        checkTimeAndCreateNewMessage(message, true)
      }
    })
    ////////////////////////////////////////////
    socket.on("chat:new-info-message", async data => {
      let message = data.message
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

        let infoMessageBox = createInfoMessage(message)
        activeChatMessageContainer.insertAdjacentElement(
          "beforeend",
          infoMessageBox
        )
        activeChatMessageContainer.scrollTop =
          activeChatMessageContainer.scrollHeight + 1000
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
        let { changeUserMessageStatusWithMessageSeenStatusCount } =
          await import("../../../chat/js/message.dev")
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
    socket.on("chat:created-chat-call-room", async data => {
      let { showChatBoxCallRoomBox } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )

      showChatBoxCallRoomBox(data.chatId, data.callRoom._id)
      if (
        activeChatSection.dataset.chatId.toString() === data.chatId.toString()
      ) {
        let { openActiveChatCallRoomBox } = await import(
          "../../../chat/js/showActiveChatSection.dev"
        )
        openActiveChatCallRoomBox(data.callRoom._id)
      }
    })
    socket.on("chat:end-chat-call-room", async data => {
      let { hideChatBoxCallRoomBox } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )
      hideChatBoxCallRoomBox(data.chatId)

      if (
        activeChatSection.dataset.chatId.toString() === data.chatId.toString()
      ) {
        let { closeActiveChatCallRoomBox } = await import(
          "../../../chat/js/showActiveChatSection.dev"
        )
        closeActiveChatCallRoomBox()
      }
    })
  } catch (e) {
    console.log("socket problem", e.message)
  }
}
