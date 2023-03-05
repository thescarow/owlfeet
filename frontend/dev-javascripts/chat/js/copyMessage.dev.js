import { createMainNotification } from "../../common/mainNotification.dev"

export function copyUserMessage(messageId) {
  let userMessageBox = document.querySelector(
    `.active-chat-user-message-box[data-message-id="${messageId}"]`
  )
  if (userMessageBox.classList.contains("active-chat-user-message-box--text")) {
    let copiedText = userMessageBox.getElementsByClassName(
      "active-chat-user-message-box__content--text"
    )[0].textContent

    navigator.clipboard.writeText(copiedText).then(
      () => {
        createMainNotification("Copied !!!", "success")
      },
      e => {
        createMainNotification(e.message, "error")
      }
    )
  }
}
