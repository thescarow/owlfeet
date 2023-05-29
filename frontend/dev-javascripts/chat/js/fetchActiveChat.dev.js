let allChatSection = document.getElementById("allChatSection")
let activeChatSection = document.getElementById("activeChatSection")
let emptyChatSection = document.getElementById("emptyChatSection")
let activeChatMessageContainer = document.getElementById(
  "activeChatMessageContainer"
)

// activeChatData is define in main layout as global object
export async function fetchActiveChat(chatId) {
  let activeChatId = activeChatSection.dataset.chatId

  if (activeChatId !== "" && activeChatId === chatId) {
    history.pushState(activeChatData, "", `/chat/#${chatId}`)
    document.title = `${activeChatData.chatName} chat `

    allChatSection.classList.add("all-chat-section--open-active-chat")

    activeChatSection.classList.remove("active-chat-section--hide")

    if (!emptyChatSection.classList.contains("empty-chat-section--hide"))
      emptyChatSection.classList.add("empty-chat-section--hide")

    activeChatMessageContainer.scrollTop =
      activeChatMessageContainer.scrollHeight
  } else {
    fetch(`/chat/data/chat/${chatId}`)
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

          allChatSection.classList.remove("all-chat-section--open-active-chat")
          activeChatSection.classList.add("active-chat-section--hide")

          if (emptyChatSection.classList.contains("empty-chat-section--hide"))
            emptyChatSection.classList.remove("empty-chat-section--hide")
          let { createMainNotification } = await import(
            "../../common/mainNotification.dev"
          )
          createMainNotification(data.error, "error")
        }
      })
      .catch(async err => {
        console.log("error in fetch Active Chat:", err)
        history.replaceState({}, "", "/chat")
        document.title = "Chats"

        allChatSection.classList.remove("all-chat-section--open-active-chat")
        activeChatSection.classList.add("active-chat-section--hide")

        if (emptyChatSection.classList.contains("empty-chat-section--hide"))
          emptyChatSection.classList.remove("empty-chat-section--hide")
        let { createMainNotification } = await import(
          "../../common/mainNotification.dev"
        )
        createMainNotification(
          "Server Error Or May be You Are Accessing Wrong Chat.",
          "info"
        )
      })
  }
}
