let svg_infoBlankBtn = `<svg width="53" height="104" viewBox="0 0 53 104" xmlns="http://www.w3.org/2000/svg">
<path d="M38.6887 2C45.68 2 49.1756 6.56 49.1756 11.785C49.1756 18.31 43.1026 24.345 35.1983 24.345C28.5774 24.345 24.7165 20.595 24.8991 14.395C24.8991 9.18 29.4957 2 38.6887 2ZM17.1774 102C11.6574 102 7.61391 98.74 11.4748 84.38L17.8087 58.92C18.9096 54.85 19.0922 53.215 17.8087 53.215C16.1548 53.215 8.99652 56.025 4.75478 58.8L2 54.4C15.4191 43.47 30.8574 37.065 37.4835 37.065C42.9983 37.065 43.9165 43.43 41.1617 53.215L33.9043 79.975C32.6209 84.7 33.1687 86.33 34.4574 86.33C36.1113 86.33 41.5374 84.37 46.8696 80.295L50 84.365C36.9461 97.1 22.687 102 17.1774 102Z"/>
</svg>`

let svg_messageTick = `<svg width="100" height="75" viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg">
<path d="M35.5523 72.8954C34.3946 74.0434 32.7545 75 31.3073 75C29.8601 75 28.22 73.9955 27.014 72.8476L0 46.0619L8.58659 37.5478L31.3555 60.1244L91.5581 0L100 8.65752L35.5523 72.8954V72.8954Z" />
</svg>`

import Plyr from "plyr"

async function createPlyr(element, type) {
  let player = new Plyr(element, {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "settings",
      "pip",
      "airplay",
      "fullscreen"
    ],
    debug: false,
    settings: ["captions", "quality", "speed", "loop"],
    clickToPlay: true,
    resetOnEnd: true,
    invertTime: true,
    ratio: "16:9",

    youtube: {
      origin: "http://localhost:5000"
    }
  })
}

function getTimeString(date) {
  let dateObj = typeof date === "string" ? new Date(date) : date

  let dateHour = dateObj.getHours()
  let dateMin = dateObj.getMinutes()
  let dateStr1 = dateHour < 10 ? "0" + dateHour : dateHour
  let dateStr2 = dateMin < 10 ? "0" + dateMin : dateMin
  let dateStr3 = dateHour < 12 ? "AM" : "PM"
  let dateString = dateStr1 + ":" + dateStr2 + " " + dateStr3

  return dateString
}

export async function createMessage(
  message,
  activeChatMessageContainer,
  addPosition = "beforeend"
) {
  const messageBox = document.createElement("div")
  messageBox.classList.add("active-chat-message-box")
  messageBox.setAttribute("data-message-id", message._id)

  let messageBoxInnerHtml = `
        <div class="active-chat-message-box__row"></div>
        <div class="active-chat-message-box__row">
        <div class="active-chat-message-box__message-time">
        ${getTimeString(message.createdAt)}
        </div>
        </div>`
  messageBox.insertAdjacentHTML("beforeend", messageBoxInnerHtml)

  let messageBoxRow = [
    ...messageBox.getElementsByClassName("active-chat-message-box__row")
  ]

  if (message.hasMediaContent) {
    let activeChatMessageContent = document.createElement("div")
    if (message.mediaContentType === "video") {
      activeChatMessageContent.classList.add(
        "active-chat-message-box__video-content"
      )
      let video = document.createElement("video")

      let videoSource = document.createElement("source")
      videoSource.src = message.mediaContentPath
      //   videoSource.type = message.mediaContentMimeType.split(";")[0]
      video.insertAdjacentElement("beforeend", videoSource)

      activeChatMessageContent.insertAdjacentElement("beforeend", video)
      createPlyr(video, "video")
    }
    if (message.mediaContentType === "audio") {
      activeChatMessageContent.classList.add(
        "active-chat-message-box__audio-content"
      )
      let audio = document.createElement("audio")

      let audioSource = document.createElement("source")
      audioSource.src = message.mediaContentPath
      audioSource.type = message.mediaContentMimeType
      audio.insertAdjacentElement("beforeend", audioSource)

      activeChatMessageContent.insertAdjacentElement("beforeend", audio)
      createPlyr(audio, "audio")
    }
    if (message.mediaContentType === "youtube") {
      activeChatMessageContent.classList.add(
        "active-chat-message-box__youtube-content"
      )
      let youtube = document.createElement("div")

      youtube.setAttribute("data-plyr-provider", "youtube")
      youtube.setAttribute("data-plyr-embed-id", message.mediaContentPath)

      activeChatMessageContent.insertAdjacentElement("beforeend", youtube)
      createPlyr(youtube, "youtube")
    }
    if (message.mediaContentType === "image") {
      activeChatMessageContent.classList.add(
        "active-chat-message-box__image-content"
      )
      let image = document.createElement("img")

      image.setAttribute("src", message.mediaContentPath)
      image.setAttribute("alt", "Image")

      activeChatMessageContent.insertAdjacentElement("beforeend", image)
    }
    messageBoxRow[0].insertAdjacentElement(
      "beforeend",
      activeChatMessageContent
    )
  } else {
    let activeChatMessageContent = document.createElement("div")
    activeChatMessageContent.textContent = message.textContent
    activeChatMessageContent.classList.add(
      "active-chat-message-box__text-content"
    )
    messageBoxRow[0].insertAdjacentElement(
      "beforeend",
      activeChatMessageContent
    )
  }

  messageBoxRow[0].insertAdjacentHTML(
    "beforeend",
    `<div class="active-chat-message-box__btn">${svg_infoBlankBtn}</div>`
  )

  if (message.sender._id === loginUser._id) {
    messageBox.classList.add("active-chat-message-box--right")

    messageBoxRow[1].insertAdjacentHTML(
      "afterbegin",
      `<div class="active-chat-message-box__message-status-container ">
      <div class="active-chat-message-box__message-status">
               ${svg_messageTick}
      </div>
      <div class="active-chat-message-box__message-status active-chat-message-box__message-status--second ">
             ${svg_messageTick}
      </div>

  </div>`
    )
  }

  activeChatMessageContainer.insertAdjacentElement(addPosition, messageBox)
  activeChatMessageContainer.scrollTop =
    activeChatMessageContainer.scrollHeight + 1000
  // {/* <div class="active-chat-message-date-box">
  //     30 november 2022
  // </div> */}
  /////////////////////////////

  // active chat message info modal
  const activeChatMessageInfoModal = document.getElementById(
    "activeChatMessageInfoModal"
  )
  let activeChatMessageBoxBtn = messageBox.getElementsByClassName(
    "active-chat-message-box__btn"
  )[0]
  activeChatMessageBoxBtn.addEventListener("click", () => {
    activeChatMessageInfoModal.classList.remove("chat-modal--hide")
  })
}
