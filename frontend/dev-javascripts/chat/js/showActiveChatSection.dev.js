let allChatSection = document.getElementById("allChatSection")
let activeChatSection = document.getElementById("activeChatSection")
const activeChatMessageContainer = document.getElementById(
  "activeChatMessageContainer"
)

let totalReceivedMessagesCount
let totalUnseenMessagesCount
export async function showActiveChatSection(chat) {
  let activeChatInputTextContent = document.getElementById(
    "activeChatInputTextContent"
  )

  totalReceivedMessagesCount = 0
  totalUnseenMessagesCount = 0
  activeChatInputTextContent.value = ""
  activeChatMessageContainer.innerHTML = ""

  let { openActiveChatInputBox } = await import("../chat.dev.js")
  openActiveChatInputBox()

  updateActiveChatSection(chat)

  if (USER_MESSAGE_BOX_OBSERVER !== undefined) {
    USER_MESSAGE_BOX_OBSERVER.disconnect()
  }
  initializeUserMessageBoxObserver()
  if (TOP_MESSAGE_BOX_OBSERVER !== undefined) {
    TOP_MESSAGE_BOX_OBSERVER.disconnect()
  }
  initializeTopMessageBoxObserver()

  ///////////////////
  const { checkTimeAndCreateOldMessage } = await import("./message.dev")

  fetch(`/message/fetch-messages/${chat._id}?totalReceivedMessagesCount=0`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(async data => {
      if (data.isSuccess) {
        activeChatMessageContainer.innerHTML = ""
        console.log(data)
        if (data.allMessages.length > 0) {
          totalReceivedMessagesCount += data.allMessages.length
          checkTimeAndCreateOldMessage(
            data.allMessages,
            activeChatMessageContainer,
            false
          )
          TOP_MESSAGE_BOX_OBSERVER.observe(
            activeChatMessageContainer.firstElementChild
          )
        }

        // let unseenMessages = data.allMessages.slice(0, data.unseenMessagesCount)
        // let seenMessages = data.allMessages.slice(data.unseenMessagesCount)
        // console.log(
        //   "unseenMessages:",
        //   unseenMessages,
        //   "seenMessages:",
        //   seenMessages
        // )
        // await checkTimeAndCreateOldMessage(
        //   seenMessages,
        //   activeChatMessageContainer,
        //   true
        // )

        // if (unseenMessages.length > 0) {
        //   const { checkTimeAndCreateNewMessage } = await import("./message.dev")
        //   const { createUnseenMessageTagBox } = await import("./message.dev")
        //   createUnseenMessageTagBox(
        //     unseenMessages.length,
        //     activeChatMessageContainer,
        //     "beforeend",
        //     false
        //   )

        //   for (let i = unseenMessages.length - 1; i >= 0; i--) {
        //     await checkTimeAndCreateNewMessage(
        //       unseenMessages[i],
        //       activeChatMessageContainer,
        //       false
        //     )
        //   }

        //   let unseenMessageTagBox =
        //     activeChatMessageContainer.getElementsByClassName(
        //       "active-chat-unseen-message-tag-box"
        //     )[0]
        //   if (unseenMessageTagBox) {
        //     activeChatMessageContainer.scrollTop = unseenMessageTagBox.offsetTop
        //     // unseenMessageTagBox.scrollIntoView({
        //     //   behavior: "smooth",
        //     //   block: "end",
        //     //   inline: "nearest"
        //     // })
        //   }
        // }

        // let activeChatUnseenMessageTagBox = document.getElementById(
        //   "activeChatUnseenMessageTagBox"
        // )
        // if (activeChatUnseenMessageTagBox) {
        //   // activeChatMessageContainer.scrollTop = unseenMessageTagBox.offsetTop
        //   activeChatUnseenMessageTagBox.scrollIntoView({
        //     behavior: "smooth",
        //     block: "end",
        //     inline: "nearest"
        //   })
        // }
        let { adjustMessageContainerBottomPadding } = await import(
          "../chat.dev"
        )
        adjustMessageContainerBottomPadding()
      } else {
        let { createMainNotification } = await import(
          "../../common/mainNotification.dev"
        )
        createMainNotification(data.error, "error")
      }
    })
    .catch(async err => {
      console.log(err)
      let { createMainNotification } = await import(
        "../../common/mainNotification.dev"
      )
      createMainNotification(
        "Server Error In Accessing Messages, Please Refresh Your Page",
        "error"
      )
    })

  allChatSection.classList.add("all-chat-section--hide")
  activeChatSection.classList.remove("active-chat-section--hide")
}

export async function updateActiveChatSection(chat) {
  let { closeReplyMessageBox } = await import("./replyMessageBox.dev.js")
  closeReplyMessageBox()
  activeChatSection.dataset.chatId = chat._id
  const activeChatHeader = document.getElementById("activeChatHeader")
  const activeChatHeaderPic = document.getElementById("activeChatHeaderPic")
  const activeChatImg = document.getElementById("activeChatImg")
  const activeChatHeaderName = document.getElementById("activeChatHeaderName")
  const activeChatHeaderStatus = document.getElementById(
    "activeChatHeaderStatus"
  )
  const activeChatInputContainer = document.getElementById(
    "activeChatInputContainer"
  )

  activeChatHeader.dataset.chatId = chat._id

  if (chat.hasOwnProperty("chatPic") && chat.chatPic !== "") {
    activeChatImg.src = chat.chatPic

    activeChatHeaderPic.classList.add("active-chat-header__pic--hide-svg")
    activeChatHeaderPic.classList.remove("active-chat-header__pic--hide-img")
  } else {
    activeChatHeaderPic.classList.add("active-chat-header__pic--hide-img")
    activeChatHeaderPic.classList.remove("active-chat-header__pic--hide-svg")
  }
  activeChatHeaderName.textContent = chat.chatName
  if (!chat.isGroupChat) {
    if (chat.isUserActive) {
      activeChatHeaderStatus.classList.remove(
        "active-chat-header__chat-status--hide"
      )
      activeChatHeaderStatus.textContent = "Active"
    } else {
      let { timeDifferenceFromNow } = await import(
        "../../common/calculateTimeDifference.dev"
      )
      activeChatHeaderStatus.classList.remove(
        "active-chat-header__chat-status--hide"
      )
      if (chat.hasOwnProperty("userLastActive")) {
        activeChatHeaderStatus.textContent = `last active ${timeDifferenceFromNow(
          chat.userLastActive
        )} ago`
      } else {
        activeChatHeaderStatus.textContent = ""
      }
    }
  } else {
    activeChatHeaderStatus.classList.remove(
      "active-chat-header__chat-status--hide"
    )
    activeChatHeaderStatus.textContent = ""
  }

  onOffActiveChatInputContainer(chat)
}

export async function clearActiveChatMessageContainer() {
  let activeChatMessageContainer = document.getElementById(
    "activeChatMessageContainer"
  )
  activeChatMessageContainer.innerHTML = ""
}

export async function onOffActiveChatInputContainer(chat) {
  const activeChatInputContainer = document.getElementById(
    "activeChatInputContainer"
  )
  if (
    chat.hasOwnProperty("canSendMessageToThisChat") &&
    chat.canSendMessageToThisChat === false
  ) {
    activeChatInputContainer.classList.add(
      "active-chat-input-container--disable"
    )
    activeChatInputContainer.classList.remove(
      "active-chat-input-container--enable"
    )
  } else {
    activeChatInputContainer.classList.add(
      "active-chat-input-container--enable"
    )
    activeChatInputContainer.classList.remove(
      "active-chat-input-container--disable"
    )
  }
}

function initializeUserMessageBoxObserver() {
  USER_MESSAGE_BOX_OBSERVER = new IntersectionObserver(
    async (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting === true) {
          let messageId = entry.target.dataset.messageId
          socket.emit("chat:update-message-seen-status", {
            messageId: messageId
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5, root: activeChatMessageContainer }
  )
}
function initializeTopMessageBoxObserver() {
  TOP_MESSAGE_BOX_OBSERVER = new IntersectionObserver(
    async (entries, observer) => {
      entries.forEach(async entry => {
        console.log("entry.target", entry.target)
        if (entry.isIntersecting === true) {
          console.log("called topMessageBoxObserver")
          observer.unobserve(entry.target)
          let chatId = activeChatSection.dataset.chatId
          // activeChatMessageContainer.scrollTop += 100
          await fetchMessageAndCreateUserMessageBox(chatId)
        }
      })
    },
    { threshold: 0.5, root: activeChatMessageContainer, rootMargin: "0px" }
  )
}

async function fetchMessageAndCreateUserMessageBox(chatId) {
  const { checkTimeAndCreateOldMessage } = await import("./message.dev")

  fetch(
    `/message/fetch-messages/${chatId}?totalReceivedMessagesCount=${totalReceivedMessagesCount}`
  )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(async data => {
      if (data.isSuccess) {
        console.log(data)

        if (data.allMessages.length > 0) {
          totalReceivedMessagesCount += data.allMessages.length
          checkTimeAndCreateOldMessage(
            data.allMessages,
            activeChatMessageContainer,
            false
          )
          activeChatMessageContainer.scrollTop =
            activeChatMessageContainer.scrollHeight
          TOP_MESSAGE_BOX_OBSERVER.observe(
            activeChatMessageContainer.firstElementChild
          )
        }

        // if (totalUnseenMessagesCount < totalReceivedMessagesCount) {
        //   let unseenMessagesLine =
        //     totalReceivedMessagesCount - totalUnseenMessagesCount
        //   await checkTimeAndCreateOldMessage(
        //     data.allMessages.slice(0, unseenMessagesLine),
        //     activeChatMessageContainer,
        //     false
        //   )
        //   const { createUnseenMessageTagBox } = await import("./message.dev")
        //   createUnseenMessageTagBox(
        //     totalUnseenMessagesCount,
        //     activeChatMessageContainer,
        //     "afterbegin",
        //     false
        //   )
        //   await checkTimeAndCreateOldMessage(
        //     data.allMessages.slice(unseenMessagesLine),
        //     activeChatMessageContainer,
        //     false
        //   )
        // } else {

        // }
      } else {
        let { createMainNotification } = await import(
          "../../common/mainNotification.dev"
        )
        createMainNotification(data.error, "error")
      }
    })
    .catch(async err => {
      console.log(err)
      let { createMainNotification } = await import(
        "../../common/mainNotification.dev"
      )
      createMainNotification(
        "Server Error In Accessing Messages, Please Refresh Your Page",
        "error"
      )
    })
}

export function increaseTotalReceivedMessagesCount() {
  totalUnseenMessagesCount = -1
  totalReceivedMessagesCount++
}
