import { createMainNotification } from "../../common/mainNotification.dev"
import "../css/clearChatAllMessagesModal.dev.css"

export async function createClearChatAllMessagesModal(chatData) {
  let chatMainContainer = document.getElementById("chatMainContainer")
  if (chatMainContainer) {
    let clearChatAllMessagesModal = document.getElementById(
      "clearChatAllMessagesModal"
    )
    if (!clearChatAllMessagesModal) {
      clearChatAllMessagesModal = document.createElement("div")
      clearChatAllMessagesModal.classList.add(
        "inner-modal",
        "inner-modal--clear-chat-all-messages"
      )
      clearChatAllMessagesModal.setAttribute("id", "clearChatAllMessagesModal")

      clearChatAllMessagesModal.innerHTML = `
        <div class="inner-modal-content inner-modal-content--clear-chat-all-messages">

        <div class="inner-modal-header">
        <div class="inner-modal-header__title">
        Do you want to clear all messages?
        </div>
        </div>
        <div class="inner-modal-main">

        </div>
        <div class="inner-modal-btns-container">
        <div class="inner-modal-btn" id="closeClearChatAllMessagesModal">Cancel</div>
        <div class="inner-modal-btn inner-modal-btn--action" id="submitClearChatAllMessagesRequestBtn">Clear</div>
        </div>`

      chatMainContainer.insertAdjacentElement(
        "afterbegin",
        clearChatAllMessagesModal
      )
      initialiseEventForClearChatAllMessagesModal(clearChatAllMessagesModal)
    } else {
      clearChatAllMessagesModal.classList.remove("inner-modal--hide")
    }
    let innerModalMain =
      clearChatAllMessagesModal.getElementsByClassName("inner-modal-main")[0]

    innerModalMain.innerHTML = ""
    if (
      chatData.isGroupChat === true &&
      chatData.groupChatAdmin.indexOf(loginUser._id.toString()) !== -1
    ) {
      innerModalMain.insertAdjacentHTML(
        "beforeend",
        `<lable class="for-all-input-container">
         <input type="checkbox" class="for-all-input-container__checkbox" id="clearChatAllMessagesForAllInput"> Clear Messages For All
         </lable>`
      )
    }
  }
}

async function initialiseEventForClearChatAllMessagesModal(
  clearChatAllMessagesModal
) {
  document
    .getElementById("submitClearChatAllMessagesRequestBtn")
    .addEventListener("click", () => {
      let clearChatData = {}
      clearChatData.chatId = activeChatData._id
      clearChatData.forAll = false
      let clearChatAllMessagesForAllInput = document.getElementById(
        "clearChatAllMessagesForAllInput"
      )
      if (
        clearChatAllMessagesForAllInput &&
        clearChatAllMessagesForAllInput.checked === true
      ) {
        clearChatData.forAll = true
      }
      console.log(clearChatData)
      fetch("/chat/clear-chat-all-messages", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(clearChatData)
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then(async data => {
          if (data.isSuccess) {
            clearChatAllMessagesModal.classList.add("inner-modal--hide")

            let { clearActiveChatMessageContainer } = await import(
              "./showActiveChatSection.dev"
            )
            clearActiveChatMessageContainer()
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log(err)
          createMainNotification(
            "Server Error In Clearing All Messages, Please Try Again",
            "error"
          )
        })
    })

  document
    .getElementById("closeClearChatAllMessagesModal")
    .addEventListener("click", () => {
      clearChatAllMessagesModal.classList.add("inner-modal--hide")
    })
  window.addEventListener("click", e => {
    if (e.target === clearChatAllMessagesModal) {
      clearChatAllMessagesModal.classList.add("inner-modal--hide")
    }
  })
}
