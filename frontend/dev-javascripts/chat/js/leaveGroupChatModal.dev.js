import { createMainNotification } from "../../common/mainNotification.dev"
import "../css/leaveGroupChatModal.dev.css"

export async function createLeaveGroupChatModal(chatData) {
  let chatMainContainer = document.getElementById("chatMainContainer")
  if (chatMainContainer) {
    let leaveGroupChatModal = document.getElementById("leaveGroupChatModal")
    if (!leaveGroupChatModal) {
      leaveGroupChatModal = document.createElement("div")
      leaveGroupChatModal.classList.add(
        "inner-modal",
        "inner-modal--leave-group-chat"
      )
      leaveGroupChatModal.setAttribute("id", "leaveGroupChatModal")

      leaveGroupChatModal.innerHTML = `
        <div class="inner-modal-content inner-modal-content--leave-group-chat">

        <div class="inner-modal-header">
        <div class="inner-modal-header__title">
        Do you want to leave this chat ?
        </div>
        </div>
        <div class="inner-modal-main">

        </div>
        <div class="inner-modal-btns-container">
        <div class="inner-modal-btn" id="closeLeaveGroupChatModalBtn">Cancel</div>
        <div class="inner-modal-btn inner-modal-btn--action" id="leaveGroupChatRequestBtn">Leave</div>
        </div>`

      chatMainContainer.insertAdjacentElement("afterbegin", leaveGroupChatModal)
      initialiseEventForLeaveGroupChatModal(leaveGroupChatModal)
    } else {
      leaveGroupChatModal.classList.remove("inner-modal--hide")
    }
    let innerModalMain =
      leaveGroupChatModal.getElementsByClassName("inner-modal-main")[0]

    innerModalMain.innerHTML = ""
    innerModalMain.insertAdjacentHTML(
      "beforeend",
      `<div class="inner-modal-main__info">
   If you leave this group chat, you can not seen any activities in this group. To join again, you have to ask group admin.
   </div>`
    )
  }
}

async function initialiseEventForLeaveGroupChatModal(leaveGroupChatModal) {
  document
    .getElementById("leaveGroupChatRequestBtn")
    .addEventListener("click", () => {
      let leaveGroupChatData = {}

      leaveGroupChatData.chatId = activeChatData._id

      fetch("/chat/leave-group-chat", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(leaveGroupChatData)
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then(async data => {
          if (data.isSuccess) {
            console.log(data.chat)
            leaveGroupChatModal.classList.add("inner-modal--hide")
            if (activeChatData._id.toString() === data.chat._id.toString()) {
              let { onOffActiveChatInputContainer } = await import(
                "./showActiveChatSection.dev"
              )
              onOffActiveChatInputContainer(data.chat)
              activeChatData = { ...data.chat }
              let { updateActiveChatInfoModal } = await import(
                "./createActiveChatInfoModal.dev"
              )
              updateActiveChatInfoModal()
            }
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log(err)
          createMainNotification(
            "Server Error In Leaving Group Chat, Please Try Again",
            "error"
          )
        })
    })

  document
    .getElementById("closeLeaveGroupChatModalBtn")
    .addEventListener("click", () => {
      leaveGroupChatModal.classList.add("inner-modal--hide")
    })
  window.addEventListener("click", e => {
    if (e.target === leaveGroupChatModal) {
      leaveGroupChatModal.classList.add("inner-modal--hide")
    }
  })
}
