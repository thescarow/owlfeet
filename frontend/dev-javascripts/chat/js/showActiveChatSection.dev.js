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
  activeChatInputTextContent.value = ""
  activeChatMessageContainer.innerHTML = ""
  updateActiveChatSection(chat)

  totalReceivedMessagesCount = 0
  let unseenMessagesCountResponse = await fetch(
    `/message/data/unseen-messages-count/${chat._id}`
  )
  let unseenMessagesCountData = await unseenMessagesCountResponse.json()
  totalUnseenMessagesCount = unseenMessagesCountData.unseenMessagesCount
  console.log("totalUnseenMessagesCount: " + totalUnseenMessagesCount)
  let { openActiveChatInputBox } = await import("../chat.dev.js")
  openActiveChatInputBox()

  if (USER_MESSAGE_BOX_OBSERVER !== undefined) {
    USER_MESSAGE_BOX_OBSERVER.disconnect()
  }
  initializeUserMessageBoxObserver()
  if (TOP_MESSAGE_BOX_OBSERVER !== undefined) {
    TOP_MESSAGE_BOX_OBSERVER.disconnect()
  }
  initializeTopMessageBoxObserver()
  if (BOTTOM_MESSAGE_BOX_OBSERVER !== undefined) {
    BOTTOM_MESSAGE_BOX_OBSERVER.disconnect()
  }
  initializeBottomMessageBoxObserver()

  ///////////////////
  const { checkTimeAndCreateOldMessages } = await import("./message.dev")

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
          if (
            totalUnseenMessagesCount !== 0 &&
            totalUnseenMessagesCount <= totalReceivedMessagesCount
          ) {
            let { createUnseenMessageTagBox } = await import("./message.dev")

            let positionForUnseeenMessageTag =
              data.allMessages.length -
              (totalReceivedMessagesCount - totalUnseenMessagesCount)
            checkTimeAndCreateOldMessages(
              data.allMessages.slice(0, positionForUnseeenMessageTag),
              activeChatMessageContainer,
              false,
              true
            )
            createUnseenMessageTagBox(
              totalUnseenMessagesCount,
              activeChatMessageContainer,
              "afterbegin"
            )
            checkTimeAndCreateOldMessages(
              data.allMessages.slice(positionForUnseeenMessageTag),
              activeChatMessageContainer,
              false,
              true
            )
            totalUnseenMessagesCount = 0
          } else {
            checkTimeAndCreateOldMessages(
              data.allMessages,
              activeChatMessageContainer,
              false,
              true
            )
          }

          setTimeout(() => {
            if (activeChatMessageContainer.firstElementChild)
              TOP_MESSAGE_BOX_OBSERVER.observe(
                activeChatMessageContainer.firstElementChild
              )
          }, 2000)
          setTimeout(() => {
            if (activeChatMessageContainer.lastElementChild)
              BOTTOM_MESSAGE_BOX_OBSERVER.observe(
                activeChatMessageContainer.lastElementChild
              )
          }, 2000)
        }

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
        if (entry.isIntersecting === true) {
          observer.unobserve(entry.target)
          let chatId = activeChatSection.dataset.chatId

          const { createLoadingMessagesAnimation } = await import(
            "./message.dev"
          )
          let loadingMessageAnimationBox = createLoadingMessagesAnimation()
          activeChatMessageContainer.insertAdjacentElement(
            "afterbegin",
            loadingMessageAnimationBox
          )
          // activeChatMessageContainer.scrollTop += 100
          await fetchMessageAndCreateUserMessageBox(chatId)
        }
      })
    },
    { threshold: 0.5, root: activeChatMessageContainer, rootMargin: "100px" }
  )
}
function initializeBottomMessageBoxObserver() {
  BOTTOM_MESSAGE_BOX_OBSERVER = new IntersectionObserver(
    async (entries, observer) => {
      entries.forEach(async entry => {
        if (entry.isIntersecting === true) {
          observer.unobserve(entry.target)
          let chatId = activeChatSection.dataset.chatId
          socket.emit("chat:update-chat-unseen-messages", {
            chatId: chatId
          })
        }
      })
    },
    { threshold: 0.5, root: activeChatMessageContainer }
  )
}

async function fetchMessageAndCreateUserMessageBox(chatId) {
  const { checkTimeAndCreateOldMessages } = await import("./message.dev")

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
          if (
            totalUnseenMessagesCount !== 0 &&
            totalUnseenMessagesCount <= totalReceivedMessagesCount
          ) {
            let { createUnseenMessageTagBox } = await import("./message.dev")

            let positionForUnseeenMessageTag =
              data.allMessages.length -
              (totalReceivedMessagesCount - totalUnseenMessagesCount)
            checkTimeAndCreateOldMessages(
              data.allMessages.slice(0, positionForUnseeenMessageTag),
              activeChatMessageContainer,
              false,
              true
            )
            createUnseenMessageTagBox(
              totalUnseenMessagesCount,
              activeChatMessageContainer,
              "afterbegin"
            )
            checkTimeAndCreateOldMessages(
              data.allMessages.slice(positionForUnseeenMessageTag),
              activeChatMessageContainer,
              false,
              true
            )
            totalUnseenMessagesCount = 0
          } else {
            checkTimeAndCreateOldMessages(
              data.allMessages,
              activeChatMessageContainer,
              false,
              true
            )
          }

          setTimeout(() => {
            if (activeChatMessageContainer.firstElementChild)
              TOP_MESSAGE_BOX_OBSERVER.observe(
                activeChatMessageContainer.firstElementChild
              )
          }, 2000)
        } else {
          let loadingMessageAnimationBox = [
            ...activeChatMessageContainer.getElementsByClassName(
              "loading-message-animation-box"
            )
          ]
          loadingMessageAnimationBox.forEach(box => {
            box.parentNode.removeChild(box)
          })
        }
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

//////////////////////////

export function increaseTotalReceivedMessagesCount() {
  totalUnseenMessagesCount = 0
  totalReceivedMessagesCount++
}

/////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
