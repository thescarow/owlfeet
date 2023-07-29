export async function createChatSocket(socket) {
  try {
    // console.log("insideChatSocket")

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

    socket.on("chat:create-new-group-chat", async chat => {
      let { createChatBox } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )
      createChatBox(chat)
    })
    socket.on("chat:edit-group-chat", async chat => {
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
