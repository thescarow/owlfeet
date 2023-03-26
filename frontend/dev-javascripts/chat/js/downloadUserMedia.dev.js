export async function downloadUserMedia(messageId) {
  let userMessageBox = document.querySelector(
    `.active-chat-user-message-box[data-message-id="${messageId}"]`
  )
  let source
  if (
    userMessageBox.classList.contains("active-chat-user-message-box--image") ||
    userMessageBox.classList.contains("active-chat-user-message-box--video") ||
    userMessageBox.classList.contains("active-chat-user-message-box--audio")
  ) {
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--image")
    ) {
      source = userMessageBox.getElementsByClassName(
        "active-chat-user-message-box__content--image"
      )[0].src
      downloadLargeFile(source)
    }

    if (
      userMessageBox.classList.contains("active-chat-user-message-box--audio")
    ) {
      source = userMessageBox.querySelector(
        ".active-chat-user-message-box__content--audio source"
      ).src
      downloadLargeFile(source)
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--video")
    ) {
      source = userMessageBox.querySelector(
        ".active-chat-user-message-box__content--video source"
      ).src
      downloadLargeFile(source)
    }
  } else {
    let { createMainNotification } = await import(
      "../../common/mainNotification.dev"
    )
    createMainNotification("You Can Not Download This Message", "info")
  }
}
function downloadLargeFile(source) {
  fetch(source)
    .then(response => response.blob())
    .then(blob => {
      // Create a URL object with the Blob data
      const url = URL.createObjectURL(blob)

      // Create a download link
      const link = document.createElement("a")

      link.download = Date.now()
      link.href = url

      // Click the link to download the video
      link.click()

      // Revoke the URL object to free up memory
      URL.revokeObjectURL(url)
    })
}
function downloadSmallFile(source) {
  // Create a download link
  const link = document.createElement("a")
  link.download = Date.now()
  link.href = source

  // Click the link to download the video
  link.click()
}
