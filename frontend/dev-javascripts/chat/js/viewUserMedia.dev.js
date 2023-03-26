export async function viewUserMedia(messageId) {
  let userMessageBox = document.querySelector(
    `.active-chat-user-message-box[data-message-id="${messageId}"]`
  )

  let url
  if (
    userMessageBox.classList.contains("active-chat-user-message-box--image") ||
    userMessageBox.classList.contains("active-chat-user-message-box--video") ||
    userMessageBox.classList.contains("active-chat-user-message-box--audio") ||
    userMessageBox.classList.contains("active-chat-user-message-box--youtube")
  ) {
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--image")
    ) {
      url = userMessageBox.getElementsByClassName(
        "active-chat-user-message-box__content--image"
      )[0].src
      openNewTab(url)
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--youtube")
    ) {
      url = userMessageBox.querySelector("iframe").src
      openNewTab(url)
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--audio")
    ) {
      url = userMessageBox.querySelector(
        ".active-chat-user-message-box__content--audio source"
      ).src
      openNewTab(url)
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--video")
    ) {
      url = userMessageBox.querySelector(
        ".active-chat-user-message-box__content--video source"
      ).src
      openNewTab(url)
    }
  } else {
    let { createMainNotification } = await import(
      "../../common/mainNotification.dev"
    )
    createMainNotification("This Message Can Not Be viewed", "info")
  }
}
function openNewTab(url) {
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("target", "_blank")
  link.setAttribute("rel", "noopener noreferrer")

  // simulate a click on the link to open the new tab
  link.click()
}
