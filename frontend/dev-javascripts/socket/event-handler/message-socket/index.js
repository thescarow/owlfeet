export async function createMessageSocket(socket) {
  try {
    console.log("insideMessageSocket")
    let { createMainNotification } = await import(
      "../../../common/mainNotification.dev.js"
    )
    let activeChatSection = document.getElementById("activeChatSection")

    let activeChatMessageContainer = document.getElementById(
      "activeChatMessageContainer"
    )

    let activeChatHeaderStatus = document.getElementById(
      "activeChatHeaderStatus"
    )

    socket.on("message:client-message-sent", async data => {
      let chatId = activeChatSection.dataset.chatId
      if (
        chatId.toString() !== "" &&
        chatId.toString() === data.chatId.toString()
      ) {
        let { updateClientUserMessageStatus } = await import(
          "../../../chat/js/message.dev.js"
        )
        updateClientUserMessageStatus(data.clientMessageId, "sent")
      }
    })
    socket.on("message:create-user-message-res", async data => {
      console.log("create-message data:", data)
      if (data.isSuccess) {
        let message = data.message
        let chatId = activeChatSection.dataset.chatId
        let { updateAllChatSection } = await import(
          "../../../chat/js/updateAllChatSection.dev"
        )
        updateAllChatSection(message)
        // let { increaseUnseenMessagesCountInChatBox } = await import(
        //   "../../../chat/js/updateAllChatSection.dev"
        // )
        // increaseUnseenMessagesCountInChatBox(message.chat._id)
        if (
          chatId.toString() !== "" &&
          chatId.toString() === message.chat._id.toString()
        ) {
          let { replaceClientUserMessage } = await import(
            "../../../chat/js/message.dev"
          )
          replaceClientUserMessage(data.clientMessageId, message, true, false)
        }
      } else {
        let { updateClientUserMessageStatus } = await import(
          "../../../chat/js/message.dev.js"
        )
        updateClientUserMessageStatus(data.clientMessageId, "error")
        createMainNotification(data.error, "error")
      }
    })

    socket.on("message:new-message", async data => {
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
    socket.on("message:new-info-message", async data => {
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
    socket.on("message:delete-message-for-all", async data => {
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
    socket.on("message:message-delivered", async data => {
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
    socket.on("message:update-message-seen-status", async data => {
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
    socket.on("message:message-seen-by-self", async data => {
      let { decreaseUnseenMessagesCountInChatBox } = await import(
        "../../../chat/js/updateAllChatSection.dev"
      )
      decreaseUnseenMessagesCountInChatBox(data.chatId)
    })
  } catch (e) {
    console.log("socket problem", e.message)
  }
}
