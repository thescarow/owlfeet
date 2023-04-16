;(async function () {
  if (!IS_INIT_CALL_MODULE) {
    let { createCalltypeInfoContainer } = await import(
      "./js/calltypeInfoContainer.dev"
    )
    createCalltypeInfoContainer()
    let roomInfoContainer = document.getElementById("roomInfoContainer")
    console.log(roomInfoContainer)
    if (roomInfoContainer.dataset.callRoom.trim() === "join") {
      console.log("here")
      let { joinCallRoom } = await import("./js/joinCallRoom.dev")
      joinCallRoom()
    }
    if (roomInfoContainer.dataset.callRoom.trim() === "create") {
      let creatingRoomInfo = document.getElementById("creatingRoomInfo")
      if (creatingRoomInfo) {
        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "chat") {
          let { createChatRoom } = await import("./js/createChatRoom.dev")
          createChatRoom()
        }
        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "new") {
          let { createNewRoom } = await import("./js/createNewRoom.dev")
          createNewRoom()
        }
      }
    }

    IS_INIT_CALL_MODULE = true
  }
})()

function initialiseEventForCallModule() {
  // initialize event to active chat
  // active chat to all chat btn
  //   const ActiveChatToAllChatBtn = document.getElementById(
  //     "ActiveChatToAllChatBtn"
  //   )
  //   ActiveChatToAllChatBtn.addEventListener("click", async () => {
  //     location.hash = ""
  //     if (activeChatSection.dataset.chatId !== "") {
  //       let { sendChatMessageStopTypingSocket } = await import(
  //         "../socket/event-emitter/chat-socket"
  //       )
  //       sendChatMessageStopTypingSocket(activeChatSection.dataset.chatId)
  //       isUserTyping = false
  //     }
  //   })
  //   //active chat header pic and active chat header name
  //   let activeChatHeaderPic = document.getElementById("activeChatHeaderPic")
  //   activeChatHeaderPic.addEventListener("click", async () => {
  //     let activeChatId = activeChatSection.dataset.chatId
  //     if (activeChatId != "") {
  //       let { createActiveChatInfoModal } = await import(
  //         "./js/createActiveChatInfoModal.dev.js"
  //       )
  //       createActiveChatInfoModal(activeChatId)
  //     }
  //   })
  //   let activeChatHeaderName = document.getElementById("activeChatHeaderName")
  //   activeChatHeaderName.addEventListener("click", async () => {
  //     let activeChatId = activeChatSection.dataset.chatId
  //     if (activeChatId != "") {
  //       let { createActiveChatInfoModal } = await import(
  //         "./js/createActiveChatInfoModal.dev.js"
  //       )
  //       createActiveChatInfoModal(activeChatId)
  //     }
  //   })
  //   ////////////////////
  //   // create new group chat btn
  //   // group chat form Modal and assign event to btn
  //   const createNewGroupChatBtn = document.getElementById("createNewGroupChatBtn")
  //   createNewGroupChatBtn.addEventListener("click", async () => {
  //     let { createGroupChatFormModal } = await import(
  //       "./js/createGroupChatFormModal.dev"
  //     )
  //     createGroupChatFormModal()
  //   })
  //   document
  //     .getElementById("activeChatInputReplyBoxCloseBtn")
  //     .addEventListener("click", async () => {
  //       let { closeReplyMessageBox } = await import("./js/replyMessageBox.dev")
  //       closeReplyMessageBox()
  //     })
  //   //send chat:message-typing event
  //   activeChatInputTextContent.addEventListener("input", async e => {
  //     if (activeChatSection.dataset.chatId !== "") {
  //       if (
  //         lastActiveChatId !== "" &&
  //         lastActiveChatId !== activeChatSection.dataset.chatId
  //       ) {
  //         let { sendChatMessageStopTypingSocket } = await import(
  //           "../socket/event-emitter/chat-socket"
  //         )
  //         sendChatMessageStopTypingSocket(lastActiveChatId)
  //         isUserTyping = false
  //         lastActiveChatId = activeChatSection.dataset.chatId.toString()
  //       }
  //       lastActiveChatId = activeChatSection.dataset.chatId.toString()
  //       let chatId = activeChatSection.dataset.chatId.toString()
  //       const inputValue = activeChatInputTextContent.value.trim()
  //       if (inputValue && !isUserTyping) {
  //         isUserTyping = true
  //         let { sendChatMessageStartTypingSocket } = await import(
  //           "../socket/event-emitter/chat-socket"
  //         )
  //         sendChatMessageStartTypingSocket(chatId)
  //       } else if (!inputValue && isUserTyping) {
  //         isUserTyping = false
  //         let { sendChatMessageStopTypingSocket } = await import(
  //           "../socket/event-emitter/chat-socket"
  //         )
  //         sendChatMessageStopTypingSocket(chatId)
  //       }
  //     }
  //   })
  //   allChatChatBoxContainer.addEventListener("click", async e => {
  //     let chatBox = e.target.closest(`.chat-box`)
  //     if (chatBox && allChatChatBoxContainer.contains(chatBox)) {
  //       let chatId = chatBox.dataset.chatId
  //       if (chatId) {
  //         let { fetchActiveChat } = await import("./js/fetchActiveChat.dev")
  //         fetchActiveChat(chatId)
  //       }
  //     } else {
  //       return
  //     }
  //   })
  //   let activeChatMessageContainer = document.getElementById(
  //     "activeChatMessageContainer"
  //   )
  //   activeChatMessageContainer.addEventListener("click", async e => {
  //     console.log("activeChatMessageContainer click")
  //     let userMessageBox = e.target.closest(`.active-chat-user-message-box`)
  //     let userMessageBoxBtn = e.target.closest(
  //       `.active-chat-user-message-box__btn[data-message-box-btn ="user"]`
  //     )
  //     let userMessageContentBox = e.target.closest(
  //       `.active-chat-user-message-box__content-box`
  //     )
  //     if (
  //       userMessageBoxBtn &&
  //       activeChatMessageContainer.contains(userMessageBoxBtn)
  //     ) {
  //       userMessageBox.classList.add("active-chat-user-message-box--selected")
  //       let { createUserMessageOptionModal } = await import(
  //         "./js/userMessageOptionModal.dev"
  //       )
  //       createUserMessageOptionModal(userMessageBox)
  //     } else if (
  //       userMessageContentBox &&
  //       activeChatMessageContainer.contains(userMessageContentBox)
  //     ) {
  //       if (
  //         userMessageBox.classList.contains(
  //           "active-chat-user-message-box--replied-message"
  //         )
  //       ) {
  //         let repliedMessageId = userMessageBox.dataset.repliedMessageId
  //         let repliedUserMessageBox = document.querySelector(
  //           `.active-chat-user-message-box[data-message-id="${repliedMessageId}"]`
  //         )
  //         if (repliedUserMessageBox) {
  //           repliedUserMessageBox.scrollIntoView({
  //             behavior: "smooth",
  //             block: "center",
  //             inline: "nearest"
  //           })
  //           repliedUserMessageBox.classList.add(
  //             "active-chat-user-message-box--highlight"
  //           )
  //           setTimeout(function () {
  //             repliedUserMessageBox.classList.remove(
  //               "active-chat-user-message-box--highlight"
  //             )
  //           }, 1000)
  //         }
  //       }
  //     } else {
  //       return
  //     }
  //   })
  //   activeChatMessageContainer.addEventListener("dblclick", async e => {
  //     let userMessageBox = e.target.closest(`.active-chat-user-message-box`)
  //     if (userMessageBox && activeChatMessageContainer.contains(userMessageBox)) {
  //       let messageId = userMessageBox.dataset.messageId
  //       let { openReplyMessageBox } = await import("./js/replyMessageBox.dev.js")
  //       openReplyMessageBox(messageId)
  //     } else {
  //       return
  //     }
  //   })
}
