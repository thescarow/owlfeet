let svg_infoBlankBtn = `<svg width="53" height="104" viewBox="0 0 53 104" xmlns="http://www.w3.org/2000/svg">
<path d="M38.6887 2C45.68 2 49.1756 6.56 49.1756 11.785C49.1756 18.31 43.1026 24.345 35.1983 24.345C28.5774 24.345 24.7165 20.595 24.8991 14.395C24.8991 9.18 29.4957 2 38.6887 2ZM17.1774 102C11.6574 102 7.61391 98.74 11.4748 84.38L17.8087 58.92C18.9096 54.85 19.0922 53.215 17.8087 53.215C16.1548 53.215 8.99652 56.025 4.75478 58.8L2 54.4C15.4191 43.47 30.8574 37.065 37.4835 37.065C42.9983 37.065 43.9165 43.43 41.1617 53.215L33.9043 79.975C32.6209 84.7 33.1687 86.33 34.4574 86.33C36.1113 86.33 41.5374 84.37 46.8696 80.295L50 84.365C36.9461 97.1 22.687 102 17.1774 102Z"/>
</svg>`

let svg_messageTick = `<svg width="100" height="100" viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg">
<path d="M35.5523 72.8954C34.3946 74.0434 32.7545 75 31.3073 75C29.8601 75 28.22 73.9955 27.014 72.8476L0 46.0619L8.58659 37.5478L31.3555 60.1244L91.5581 0L100 8.65752L35.5523 72.8954V72.8954Z" />
</svg>`

let svg_videoCallBlankIcon = `<svg width="100" height="63" viewBox="0 0 100 66"  xmlns="http://www.w3.org/2000/svg">
<path d="M16.6636 0C7.46055 0 0 6.56645 0 14.6666V51.3334C0 59.433 7.46055 66 16.6636 66H58.3226C67.2118 66 74.4747 59.8738 74.9604 52.1577L93.7278 61.8362C95.0159 62.5005 96.6098 62.5072 97.9054 61.8538C99.201 61.2004 100 59.9867 100 58.6726V7.3275C100 6.01462 99.2026 4.80191 97.9087 4.148C96.6156 3.49409 95.0234 3.49879 93.7353 4.16032L74.9579 13.8005C74.4489 6.10357 67.1952 0 58.3226 0H16.6636ZM8.33181 14.6666C8.33181 10.6166 12.0621 7.33329 16.6636 7.33329H58.3226C62.9242 7.33329 66.6544 10.6166 66.6544 14.6666V51.3334C66.6544 55.3829 62.9242 58.6667 58.3226 58.6667H16.6636C12.0621 58.6667 8.33181 55.3829 8.33181 51.3334V14.6666ZM74.9871 43.6715V22.2753L91.6682 13.7111V52.2743L74.9871 43.6715Z" />
</svg>`
let svg_newGroupIcon = `<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M30.4688 71.875C38.6667 71.875 45.3125 65.2292 45.3125 57.0312C45.3125 48.8333 38.6667 42.1875 30.4688 42.1875C22.2708 42.1875 15.625 48.8333 15.625 57.0312C15.625 65.2292 22.2708 71.875 30.4688 71.875Z" stroke="#010101" stroke-width="4" stroke-miterlimit="10"/>
<path d="M9.375 95.3125C9.375 89.0965 11.8443 83.1351 16.2397 78.7397C20.6351 74.3443 26.5965 71.875 32.8125 71.875M54.6875 95.3125C54.6875 92.2346 54.0813 89.1869 52.9034 86.3434C51.7256 83.4998 49.9992 80.9161 47.8228 78.7397C45.6464 76.5633 43.0627 74.8369 40.2191 73.6591C37.3756 72.4812 34.3279 71.875 31.25 71.875" stroke="#010101" stroke-width="4" stroke-miterlimit="10"/>
<path d="M66.4062 34.375C74.6042 34.375 81.25 27.7292 81.25 19.5312C81.25 11.3333 74.6042 4.6875 66.4062 4.6875C58.2083 4.6875 51.5625 11.3333 51.5625 19.5312C51.5625 27.7292 58.2083 34.375 66.4062 34.375Z" stroke="#010101" stroke-width="4" stroke-miterlimit="10"/>
<path d="M45.3125 56.25C45.3125 44.1563 55.7969 34.375 68.75 34.375M90.625 56.25C90.625 44.1563 80.1406 34.375 67.1875 34.375" stroke="#010101" stroke-width="4" stroke-miterlimit="10"/>
</svg>
`

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

const weekDaysArray = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
let firstMessageTimePointer = ""
let lastMessageTimePointer = ""
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
function getDateString(date) {
  let currentDate = new Date()
  date = typeof date === "string" ? new Date(date) : date
  if (
    currentDate.getFullYear() === date.getFullYear() &&
    currentDate.getMonth() === date.getMonth()
  ) {
    if (currentDate.getDate() - date.getDate() === 0) {
      return "Today"
    } else if (currentDate.getDate() - date.getDate() === 1) {
      return "Yesterday"
    } else if (currentDate.getDate() - date.getDate() === 2) {
      return weekDaysArray[date.getDay()]
    } else {
      return (
        weekDaysArray[date.getDay()] +
        ", " +
        date.getDate() +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear()
      )
    }
  } else {
    return (
      weekDaysArray[date.getDay()] +
      ", " +
      date.getDate() +
      "-" +
      date.getMonth() +
      "-" +
      date.getFullYear()
    )
  }
}
function isMessageDateChanged(messageDate, fromCheckingDate) {
  // convert to date object if it is not
  messageDate =
    typeof messageDate === "string" ? new Date(messageDate) : messageDate
  fromCheckingDate =
    typeof fromCheckingDate === "string"
      ? new Date(fromCheckingDate)
      : fromCheckingDate

  if (fromCheckingDate.getDate() !== messageDate.getDate()) {
    return true
  } else if (fromCheckingDate.getMonth() !== messageDate.getMonth()) {
    return true
  } else if (fromCheckingDate.getFullYear() !== messageDate.getFullYear()) {
    return true
  } else {
    return false
  }
}

export async function checkTimeAndCreateOldMessage(
  allMessages,
  activeChatMessageContainer
) {
  if (allMessages.length > 0) {
    if (activeChatMessageContainer.children.length == 0) {
      firstMessageTimePointer = allMessages[0].createdAt
      lastMessageTimePointer = allMessages[0].createdAt
    }
    for (let i = 0; i < allMessages.length; i++) {
      if (
        isMessageDateChanged(allMessages[i].createdAt, lastMessageTimePointer)
      ) {
        createDateMessage(
          lastMessageTimePointer,
          activeChatMessageContainer,
          "afterbegin"
        )
        lastMessageTimePointer = allMessages[i].createdAt
      }
      createUserMessage(
        allMessages[i],
        activeChatMessageContainer,
        "afterbegin"
      )
    }
  } else {
    if (lastMessageTimePointer !== "") {
      createDateMessage(
        lastMessageTimePointer,
        activeChatMessageContainer,
        "afterbegin"
      )
    } else {
      firstMessageTimePointer = ""
      lastMessageTimePointer = ""
    }
  }
  activeChatMessageContainer.scrollTop =
    activeChatMessageContainer.scrollHeight + 1000
}

export async function checkTimeAndCreateNewMessage(
  message,
  activeChatMessageContainer
) {
  if (activeChatMessageContainer.children.length == 0) {
    firstMessageTimePointer = lastMessageTimePointer = message.createdAt
  }
  if (isMessageDateChanged(message.createdAt, firstMessageTimePointer)) {
    createDateMessage(
      lastMessageTimePointer,
      activeChatMessageContainer,
      "beforeend"
    )
    firstMessageTimePointer = message.createdAt
  }
  createUserMessage(message, activeChatMessageContainer, "beforeend")
}

export function createUserMessage(
  message,
  activeChatMessageContainer,
  addPosition = "beforeend"
) {
  console.log(
    "=>>>>>",
    new Date(firstMessageTimePointer).getDate(),
    "------",
    new Date(lastMessageTimePointer).getDate()
  )
  console.log("---->", new Date(message.createdAt).getDate())

  const messageBox = document.createElement("div")
  messageBox.classList.add("active-chat-message-box")
  messageBox.setAttribute("data-message-id", message._id)

  let messageBoxInnerHtml = `
        <div class="active-chat-message-box__content-box">
           <div class="active-chat-message-box__content-info">
               <div class="active-chat-message-box__content-time">${getTimeString(
                 message.createdAt
               )}
               </div>
           </div>
       </div>
       <div class="active-chat-message-box__btn">${svg_infoBlankBtn}
       </div>
        `
  messageBox.insertAdjacentHTML("beforeend", messageBoxInnerHtml)

  let messageContentBox = messageBox.getElementsByClassName(
    "active-chat-message-box__content-box"
  )[0]
  let messageContentInfo = messageBox.getElementsByClassName(
    "active-chat-message-box__content-info"
  )[0]

  if (message.hasMediaContent) {
    if (message.mediaContentType === "video") {
      messageBox.classList.add("active-chat-message-box--video")
      messageContentBox.classList.add(
        "active-chat-message-box__content-box--video"
      )
      messageContentInfo.classList.add(
        "active-chat-message-box__content-info--video"
      )
      let video = document.createElement("video")
      video.classList.add("active-chat-message-box__video-content")
      let videoSource = document.createElement("source")
      videoSource.src = message.mediaContentPath
      //   videoSource.type = message.mediaContentMimeType.split(";")[0]
      video.insertAdjacentElement("beforeend", videoSource)

      messageContentBox.insertAdjacentElement("afterbegin", video)
      createPlyr(video, "video")
    }
    if (message.mediaContentType === "audio") {
      messageBox.classList.add("active-chat-message-box--audio")
      messageContentBox.classList.add(
        "active-chat-message-box__content-box--audio"
      )
      messageContentInfo.classList.add(
        "active-chat-message-box__content-info--audio"
      )
      let audio = document.createElement("audio")
      audio.classList.add("active-chat-message-box__audio-content")

      let audioSource = document.createElement("source")
      audioSource.src = message.mediaContentPath
      audioSource.type = message.mediaContentMimeType
      audio.insertAdjacentElement("beforeend", audioSource)

      messageContentBox.insertAdjacentElement("afterbegin", audio)
      createPlyr(audio, "audio")
    }
    if (message.mediaContentType === "youtube") {
      messageBox.classList.add("active-chat-message-box--youtube")
      messageContentBox.classList.add(
        "active-chat-message-box__content-box--youtube"
      )
      messageContentInfo.classList.add(
        "active-chat-message-box__content-info--youtube"
      )
      let youtube = document.createElement("div")
      youtube.classList.add("active-chat-message-box__youtube-content")

      youtube.setAttribute("data-plyr-provider", "youtube")
      youtube.setAttribute("data-plyr-embed-id", message.mediaContentPath)

      messageContentBox.insertAdjacentElement("afterbegin", youtube)
      createPlyr(youtube, "youtube")
    }
    if (message.mediaContentType === "image") {
      messageBox.classList.add("active-chat-message-box--image")
      messageContentBox.classList.add(
        "active-chat-message-box__content-box--image"
      )
      messageContentInfo.classList.add(
        "active-chat-message-box__content-info--image"
      )

      let image = document.createElement("img")
      image.classList.add("active-chat-message-box__image-content")

      image.setAttribute("src", message.mediaContentPath)
      image.setAttribute("alt", "Image")

      messageContentBox.insertAdjacentElement("afterbegin", image)
    }
  } else {
    messageBox.classList.add("active-chat-message-box--text")
    messageContentBox.classList.add(
      "active-chat-message-box__content-box--text"
    )
    messageContentInfo.classList.add(
      "active-chat-message-box__content-info--text"
    )

    let textMessage = document.createElement("div")
    textMessage.classList.add("active-chat-message-box__text-content")

    textMessage.textContent = message.textContent

    messageContentBox.insertAdjacentElement("afterbegin", textMessage)
  }

  if (message.sender._id === loginUser._id) {
    messageBox.classList.add("active-chat-message-box--right")
    messageContentInfo.insertAdjacentHTML(
      "beforeend",
      `<div class="active-chat-message-box__content-status-container ">
               <div class="active-chat-message-box__content-status">${svg_messageTick}
                </div>
               <div class="active-chat-message-box__content-status active-chat-message-box__content-status--second ">${svg_messageTick}
               </div>
      </div>`
    )
  }

  activeChatMessageContainer.insertAdjacentElement(addPosition, messageBox)

  activeChatMessageContainer.scrollTop =
    activeChatMessageContainer.scrollHeight + 1000

  let activeChatMessageBoxBtn = messageBox.getElementsByClassName(
    "active-chat-message-box__btn"
  )[0]
  activeChatMessageBoxBtn.addEventListener("click", () => {
    // activeChatMessageInfoModal.classList.remove("chat-modal--hide")
  })
}

export function createInfoMessage(
  message,
  activeChatMessageContainer,
  addPosition = "beforeend"
) {
  if (
    message.hasOwnProperty("isInfoMessage") &&
    message.isInfoMessage === true
  ) {
    const infoMessageBox = document.createElement("div")
    infoMessageBox.classList.add("active-chat-info-message")
    infoMessageBox.setAttribute("data-message-id", message._id)

    let infoMessageBoxInnerHtml = `<div class="active-chat-info-message__content">
  </div>`
    infoMessageBox.insertAdjacentHTML("beforeend", infoMessageBoxInnerHtml)

    let infoMessageBoxContent = infoMessageBox.getElementsByClassName(
      "active-chat-info-message__content"
    )[0]
    if (message.infoMessageType === "video-call") {
      infoMessageBoxContent.insertAdjacentHTML(
        "afterbegin",
        svg_videoCallBlankIcon
      )
    }
    if (message.infoMessageType === "new-group") {
      infoMessageBoxContent.insertAdjacentHTML("afterbegin", svg_newGroupIcon)
    }
    infoMessageBoxContent.textContent = message.infoMessage

    activeChatMessageContainer.insertAdjacentElement(
      addPosition,
      infoMessageBox
    )
  }
}
export function createDateMessage(
  messageDate,
  activeChatMessageContainer,
  addPosition = "beforeend"
) {
  const dateMessageBox = document.createElement("div")
  dateMessageBox.classList.add("active-chat-date-message-box")

  let dateMessageBoxInnerHtml = `<div class="active-chat-date-message-box__content">
  </div>`
  dateMessageBox.insertAdjacentHTML("beforeend", dateMessageBoxInnerHtml)

  dateMessageBox.getElementsByClassName(
    "active-chat-date-message-box__content"
  )[0].textContent = getDateString(messageDate)

  activeChatMessageContainer.insertAdjacentElement(addPosition, dateMessageBox)
}
