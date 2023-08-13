export async function createMessageSocket(socket) {
  try {
    // console.log("insideMessageSocket")
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
    socket.on("message:create-user-message-res", async data => {
      let { isSuccess, clientMessageId, chatId } = data
      let { updateClientUserMessageStatus } = await import(
        "../../../chat/js/message.dev.js"
      )
      if (
        activeChatSection.dataset.chatId.toString() !== "" &&
        chatId.toString() === activeChatSection.dataset.chatId.toString()
      ) {
        if (isSuccess) {
          let { messageId } = data

          updateClientUserMessageStatus(clientMessageId, "sent", messageId)
        } else {
          let { error } = data

          updateClientUserMessageStatus(clientMessageId, "error")
          createMainNotification(error, "error")
        }
      }
    })

    // socket.on("message:client-user-message-sent", async data => {
    //   let { clientMessageId, messageId, chatId } = data

    //   if (
    //     activeChatSection.dataset.chatId.toString() !== "" &&
    //     chatId.toString() === activeChatSection.dataset.chatId.toString()
    //   ) {
    //     let { updateClientUserMessageStatus } = await import(
    //       "../../../chat/js/message.dev.js"
    //     )
    //     updateClientUserMessageStatus(clientMessageId, "sent", messageId)
    //   }
    // })

    socket.on("message:user-message-delivered", async data => {
      let { clientMessageId, messageId, chatId, deliveredTime } = data

      if (chatId.toString() === activeChatSection.dataset.chatId.toString()) {
        let { changeUserMessageStatusToDelivered } = await import(
          "../../../chat/js/message.dev"
        )
        changeUserMessageStatusToDelivered(clientMessageId, messageId)

        let { updateMessageInfoModalDeliveryStatus } = await import(
          "../../../chat/js/userMessageOptionModal.dev"
        )
        updateMessageInfoModalDeliveryStatus(messageId, deliveredTime)
      }
    })

    socket.on(
      "message:replace-client-user-message-to-server-user-message",
      async data => {
        let clientMessageId = data.clientMessageId
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
          let { replaceClientUserMessageToServerMessage } = await import(
            "../../../chat/js/message.dev"
          )
          replaceClientUserMessageToServerMessage(
            clientMessageId,
            message,
            false
          )
        }
      }
    )

    // socket.on("message:create-user-media-message-request-res", async data => {
    //   if (data.isSuccess) {
    //     let message = data.message
    //     let chatId = activeChatSection.dataset.chatId
    //     let { updateAllChatSection } = await import(
    //       "../../../chat/js/updateAllChatSection.dev"
    //     )
    //     updateAllChatSection(message)
    //     // let { increaseUnseenMessagesCountInChatBox } = await import(
    //     //   "../../../chat/js/updateAllChatSection.dev"
    //     // )
    //     // increaseUnseenMessagesCountInChatBox(message.chat._id)
    //     if (
    //       chatId.toString() !== "" &&
    //       chatId.toString() === message.chat._id.toString()
    //     ) {
    //       let { replaceClientUserMessageToServerMessage } = await import(
    //         "../../../chat/js/message.dev"
    //       )
    //       replaceClientUserMessageToServerMessage(
    //         data.clientMessageId,
    //         message,
    //         true,
    //         false
    //       )
    //     }
    //   } else {
    //     let { updateClientUserMessageStatus } = await import(
    //       "../../../chat/js/message.dev.js"
    //     )
    //     updateClientUserMessageStatus(data.clientMessageId, "error")
    //     createMainNotification(data.error, "error")
    //   }
    // })

    socket.on("message:new-user-message", async data => {
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
    socket.on("message:update-message-seen-status", async data => {
      let {
        messageId,
        chatId,
        pushedUser,
        pushedUserTime,
        messageSeenStatusCount,
        messageReaderCount
      } = data
      if (chatId.toString() === activeChatSection.dataset.chatId.toString()) {
        let { changeUserMessageStatusWithMessageSeenStatusCount } =
          await import("../../../chat/js/message.dev")
        changeUserMessageStatusWithMessageSeenStatusCount(
          messageId,
          messageSeenStatusCount,
          messageReaderCount
        )
        let { addUserToMessageInfoModalSeenStatus } = await import(
          "../../../chat/js/userMessageOptionModal.dev"
        )
        addUserToMessageInfoModalSeenStatus(
          messageId,
          pushedUser,
          pushedUserTime
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
