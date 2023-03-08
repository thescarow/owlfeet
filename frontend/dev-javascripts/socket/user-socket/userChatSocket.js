// import { timeDifferenceFromNow } from "../../common/calculateTimeDifference.dev"

export function createUserChatSocket(socket) {
  let activeChatSection = document.getElementById("activeChatSection")
  let activeChatHeaderStatus = document.getElementById("activeChatHeaderStatus")
  ////////////////////////////////////////////
  socket.on("user:online", async (userId, chatId) => {
    console.log("user online:", userId)

    let chatBox = document.querySelector(`.chat-box[data-chat-id="${chatId}"]`)
    if (chatBox) chatBox.classList.add("chat-box--active-user")

    if (activeChatSection.dataset.chatId.toString() === chatId.toString()) {
      activeChatHeaderStatus.classList.remove(
        "active-chat-header__chat-status--hide"
      )
      activeChatHeaderStatus.textContent = "Active"
    }
  })
  socket.on("user:offline", async (userId, chatId) => {
    console.log("user offline:", userId)
    let chatBox = document.querySelector(`.chat-box[data-chat-id="${chatId}"]`)
    if (chatBox) chatBox.classList.remove("chat-box--active-user")

    if (activeChatSection.dataset.chatId.toString() === chatId.toString()) {
      activeChatHeaderStatus.classList.add(
        "active-chat-header__chat-status--hide"
      )
      activeChatHeaderStatus.textContent = "last active 1sec ago"
      setTimeout(() => {
        activeChatHeaderStatus.classList.remove(
          "active-chat-header__chat-status--hide"
        )
      }, 5000)
    }
  })
}
