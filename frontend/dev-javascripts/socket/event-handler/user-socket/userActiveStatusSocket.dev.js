export function createUserActiveStatusSocket(socket) {
  let activeChatSection = document.getElementById("activeChatSection")
  let activeChatHeaderStatus = document.getElementById("activeChatHeaderStatus")
  ////////////////////////////////////////////
  socket.on("user:online", async data => {
    console.log("user online:", data.userId)

    let chatBox = document.querySelector(
      `.chat-box[data-chat-id="${data.chatId}"]`
    )
    if (chatBox) chatBox.classList.add("chat-box--active-user")

    if (
      activeChatSection.dataset.chatId.toString() === data.chatId.toString()
    ) {
      activeChatHeaderStatus.classList.remove(
        "active-chat-header__chat-status--hide"
      )
      activeChatHeaderStatus.textContent = "Active"
    }
  })
  socket.on("user:offline", async data => {
    console.log("user offline:", data.userId)
    let chatBox = document.querySelector(
      `.chat-box[data-chat-id="${data.chatId}"]`
    )
    if (chatBox) chatBox.classList.remove("chat-box--active-user")

    if (
      activeChatSection.dataset.chatId.toString() === data.chatId.toString()
    ) {
      activeChatHeaderStatus.classList.add(
        "active-chat-header__chat-status--hide"
      )
      activeChatHeaderStatus.textContent = "last active 1sec ago"
      setTimeout(() => {
        activeChatHeaderStatus.classList.remove(
          "active-chat-header__chat-status--hide"
        )
      }, 4000)
    }
  })
}
