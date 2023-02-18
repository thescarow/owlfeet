import { createMainNotification } from "../../common/mainNotification.dev"

// activeChatData is define in main layout as global object
export function fetchActiveChat(chatId) {
  let allChatSection = document.getElementById("allChatSection")
  let activeChatSection = document.getElementById("activeChatSection")

  let activeChatId = activeChatSection.dataset.chatId

  if (activeChatId !== "" && activeChatId === chatId) {
    history.pushState(activeChatData, "", `/chat/#${chatId}`)
    document.title = `${activeChatData.chatName} chat `
    allChatSection.classList.add("all-chat-section--hide")
    activeChatSection.classList.remove("active-chat-section--hide")
  } else {
    fetch(`/chat/${chatId}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then(async data => {
        if (data.isSuccess) {
          activeChatData = { ...data.chat }
          history.pushState(data.chat, "", `/chat/#${chatId}`)
          document.title = `${data.chat.chatName} chat `
          let { showActiveChatSection } = await import(
            "./showActiveChatSection.dev"
          )
          showActiveChatSection(data.chat)
        } else {
          history.replaceState({}, "", "/chat")
          document.title = "Chats"
          allChatSection.classList.remove("all-chat-section--hide")
          activeChatSection.classList.add("active-chat-section--hide")
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log("error in fetch Active Chat:", err)
        history.replaceState({}, "", "/chat")
        document.title = "Chats"
        allChatSection.classList.remove("all-chat-section--hide")
        activeChatSection.classList.add("active-chat-section--hide")
        createMainNotification(
          "Server Error Or May be You Are Accessing Wrong Chat.",
          "info"
        )
      })
  }
}
