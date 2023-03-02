let imageIcon = `<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M57.5 20C53.5 20 50 23.5 50 27.5C50 31.5 53.5 35 57.5 35C61.5 35 65 31.5 65 27.5C65 23.5 61.5 20 57.5 20ZM85 0H15C6.5 0 0 6.5 0 15V85C0 93.5 6.5 100 15 100H85C93.5 100 100 93.5 100 85V15C100 6.5 93.5 0 85 0ZM90 59.5L80.5 50C74.5 44.5 65 44.5 59.5 50L55 54.5L40.5 40C34.5 34.5 25 34.5 19.5 40L10 49.5V15C10 12 12 10 15 10H85C88 10 90 12 90 15V59.5Z" />
</svg>
`
let videoIcon = `<svg width="100" height="65" viewBox="0 0 100 65"  xmlns="http://www.w3.org/2000/svg">
<path d="M94.9525 9.98214C93.4341 9.34699 91.7483 9.14039 90.1046 9.38803C88.4608 9.63566 86.9317 10.3266 85.7071 11.375L74.9625 20.6607V13.9286C74.9625 10.2345 73.383 6.6917 70.5713 4.07958C67.7597 1.46747 63.9463 0 59.97 0H14.9925C11.0162 0 7.20284 1.46747 4.3912 4.07958C1.57956 6.6917 0 10.2345 0 13.9286V51.0714C0 54.7655 1.57956 58.3083 4.3912 60.9204C7.20284 63.5325 11.0162 65 14.9925 65H59.97C63.9463 65 67.7597 63.5325 70.5713 60.9204C73.383 58.3083 74.9625 54.7655 74.9625 51.0714V44.3393L85.7571 53.625C87.3463 54.9614 89.4107 55.7055 91.5542 55.7143C92.7438 55.7117 93.9192 55.4743 95.0025 55.0179C96.4765 54.4639 97.7392 53.5143 98.6294 52.2903C99.5196 51.0663 99.9968 49.6236 100 48.1464V16.8536C99.9928 15.371 99.5082 13.9244 98.6087 12.6999C97.7092 11.4753 96.4359 10.5288 94.9525 9.98214Z" />
</svg>`
let audioIcon = `<svg width="100" height="65" viewBox="0 0 100 65"  xmlns="http://www.w3.org/2000/svg">
<path d="M94.9525 9.98214C93.4341 9.34699 91.7483 9.14039 90.1046 9.38803C88.4608 9.63566 86.9317 10.3266 85.7071 11.375L74.9625 20.6607V13.9286C74.9625 10.2345 73.383 6.6917 70.5713 4.07958C67.7597 1.46747 63.9463 0 59.97 0H14.9925C11.0162 0 7.20284 1.46747 4.3912 4.07958C1.57956 6.6917 0 10.2345 0 13.9286V51.0714C0 54.7655 1.57956 58.3083 4.3912 60.9204C7.20284 63.5325 11.0162 65 14.9925 65H59.97C63.9463 65 67.7597 63.5325 70.5713 60.9204C73.383 58.3083 74.9625 54.7655 74.9625 51.0714V44.3393L85.7571 53.625C87.3463 54.9614 89.4107 55.7055 91.5542 55.7143C92.7438 55.7117 93.9192 55.4743 95.0025 55.0179C96.4765 54.4639 97.7392 53.5143 98.6294 52.2903C99.5196 51.0663 99.9968 49.6236 100 48.1464V16.8536C99.9928 15.371 99.5082 13.9244 98.6087 12.6999C97.7092 11.4753 96.4359 10.5288 94.9525 9.98214Z" />
</svg>`
let youtubeIcon = `<svg width="100" height="68" viewBox="0 0 100 68"  xmlns="http://www.w3.org/2000/svg">
<path d="M99.977 23.9653C100.202 17.6732 98.7797 11.4282 95.8432 5.81006C93.8509 3.50481 91.0858 1.94914 88.03 1.4141C75.3903 0.304237 62.6984 -0.150661 50.0085 0.0513592C37.3649 -0.15983 24.7186 0.280389 12.1233 1.37015C9.63317 1.80849 7.32871 2.9388 5.49115 4.62315C1.40282 8.27179 0.948564 14.514 0.494306 19.7892C-0.164769 29.2737 -0.164769 38.7904 0.494306 48.2749C0.625724 51.244 1.08254 54.1911 1.85708 57.0668C2.4048 59.2871 3.51296 61.3412 5.08232 63.0453C6.93237 64.8189 9.2905 66.0135 11.8508 66.4742C21.6442 67.644 31.5121 68.1288 41.3776 67.9248C57.2766 68.1446 71.2224 67.9248 87.712 66.694C90.3351 66.2616 92.7597 65.0655 94.6621 63.2651C95.9339 62.0339 96.8838 60.5269 97.4331 58.8692C99.0577 54.0451 99.8556 48.9964 99.7953 43.923C99.977 41.4612 99.977 26.6029 99.977 23.9653ZM39.7423 46.5605V19.3496L66.6344 33.021C59.0937 37.0653 49.1454 41.6371 39.7423 46.5605Z" />
</svg>
`

export function openReplyMessageBox(messageId) {
  let userMessageBox = document.querySelector(
    `.active-chat-user-message-box[data-message-id="${messageId}"]`
  )
  if (userMessageBox) {
    let messageContent, messageUserName
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--video")
    ) {
      messageContent = `${videoIcon} Video`
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--audio")
    ) {
      messageContent = `${audioIcon} Audio`
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--image")
    ) {
      messageContent = `${imageIcon} Image`
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--youtube")
    ) {
      messageContent = `${youtubeIcon} Youtube`
    }
    if (
      userMessageBox.classList.contains("active-chat-user-message-box--text")
    ) {
      let userMessageTextContent = userMessageBox.getElementsByClassName(
        "active-chat-user-message-box__content--text"
      )[0]
      if (userMessageTextContent)
        messageContent = userMessageTextContent.textContent
    }
    document.getElementById("activeChatInputReplyUserName").textContent =
      messageUserName
    document
      .getElementById("activeChatInputReplyUserMessage")
      .insertAdjacentHTML("beforeend", messageContent)
    messageUserName
    document
      .getElementById("activeChatInputContainerEnableBox")
      .classList.add("active-chat-input-container__enable-box--reply")
    document
      .getElementById("activeChatInputReplyBox")
      .classList.remove("active-chat-input-reply-box--hide")
  }
}
