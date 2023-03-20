let allChatSection = document.getElementById("allChatSection")
let activeChatSection = document.getElementById("activeChatSection")
const activeChatMessageContainer = document.getElementById(
  "activeChatMessageContainer"
)
export async function showActiveChatSection(chat) {
  let activeChatInputTextContent = document.getElementById(
    "activeChatInputTextContent"
  )

  activeChatInputTextContent.value = ""
  activeChatMessageContainer.innerHTML = ""
  let { openActiveChatInputBox } = await import("../chat.dev.js")
  openActiveChatInputBox()
  updateActiveChatSection(chat)
  if (USER_MESSAGE_BOX_OBSERVER !== undefined) {
    USER_MESSAGE_BOX_OBSERVER.disconnect()
  }
  initializeUserMessageBoxObserver()

  /////////////////////
  const { checkTimeAndCreateOldMessage } = await import("./message.dev")

  fetch(`/message/fetch-messages/${chat._id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(async data => {
      if (data.isSuccess) {
        activeChatMessageContainer.innerHTML = ""
        console.log(data.allMessages)
        checkTimeAndCreateOldMessage(
          data.allMessages,
          activeChatMessageContainer
        )
        let { adjustMessageContainerBottomPadding } = await import(
          "../chat.dev"
        )
        adjustMessageContainerBottomPadding()
        if (activeChatMessageContainer.lastElementChild)
          activeChatMessageContainer.lastElementChild.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          })
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

export async function createMessageSeenByModal() {
  let chatMainContainer = document.getElementById("chatMainContainer")
  if (chatMainContainer) {
    let messageSeenByModal = document.createElement("div")
    messageSeenByModal.classList.add(
      "inner-modal",
      "inner-modal--hide",
      "inner-modal--message-seen-by"
    )
    messageSeenByModal.innerHTML = `
    <div class="inner-modal-content inner-modal-content--message-seen-by">
    
    <div class="inner-modal-header">
    <div class="inner-modal-header__title">
  Message seen by
    </div>
    <div class="inner-modal-header__message-count">
  20
    </div>
    </div>
    <div class="inner-modal-main">
    <div class="message-seen-user-container">
    <div class="message-seen-user">
    <div class="message-seen-user__pic">
    <img src="https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg">
    </div>
    <div class="message-seen-user__fullname">Rithik Pathak</div>
    </div>
    <div class="message-seen-user">
    <div class="message-seen-user__pic">
    <img src="https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg">
    </div>
    <div class="message-seen-user__fullname">Rithik Pathak</div>
    </div>
    <div class="message-seen-user">
    <div class="message-seen-user__pic">
    <img src="https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg">
    </div>
    <div class="message-seen-user__fullname">Rithik Pathak</div>
    </div>
    <div class="message-seen-user">
    <div class="message-seen-user__pic">
    <img src="https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg">
    </div>
    <div class="message-seen-user__fullname">Rithik Pathak</div>
    </div>
    </div>
    </div>
  
    `

    chatMainContainer.insertAdjacentElement("afterbegin", messageSeenByModal)
  }
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
