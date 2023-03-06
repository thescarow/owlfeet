import { createMainNotification } from "../../common/mainNotification.dev"

export function copyUserMessage(messageId) {
  let userMessageBox = document.querySelector(
    `.active-chat-user-message-box[data-message-id="${messageId}"]`
  )

  let copiedText

  if (userMessageBox.classList.contains("active-chat-user-message-box--text")) {
    copiedText = userMessageBox.getElementsByClassName(
      "active-chat-user-message-box__content--text"
    )[0].textContent
  }
  if (
    userMessageBox.classList.contains("active-chat-user-message-box--image")
  ) {
    copiedText = userMessageBox.getElementsByClassName(
      "active-chat-user-message-box__content--image"
    )[0].src
  }
  if (
    userMessageBox.classList.contains("active-chat-user-message-box--youtube")
  ) {
    copiedText = userMessageBox.querySelector("iframe").src
  }
  if (
    userMessageBox.classList.contains("active-chat-user-message-box--audio")
  ) {
    copiedText = userMessageBox.querySelector(
      ".active-chat-user-message-box__content--audio source"
    ).src
  }
  if (
    userMessageBox.classList.contains("active-chat-user-message-box--video")
  ) {
    copiedText = userMessageBox.querySelector(
      ".active-chat-user-message-box__content--video source"
    ).src
  }
  console.log(copiedText)
  navigator.clipboard.writeText(copiedText).then(
    () => {
      createMainNotification("Copied !!!", "success")
    },
    e => {
      createMainNotification(e.message, "error")
    }
  )
}
