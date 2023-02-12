import { createMainNotification } from "../../common/mainNotification.dev"
import "../css/clearChatHistoryModal.dev.css"

export async function createClearChatHistoryModal(chatData) {
  let chatMainContainer = document.getElementById("chatMainContainer")
  if (chatMainContainer) {
    let clearChatHistoryModal = document.getElementById("clearChatHistoryModal")
    if (!clearChatHistoryModal) {
      clearChatHistoryModal = document.createElement("div")
      clearChatHistoryModal.classList.add(
        "inner-modal",
        "inner-modal--clear-chat-history"
      )
      clearChatHistoryModal.setAttribute("id", "clearChatHistoryModal")

      clearChatHistoryModal.innerHTML = `
  <div class="inner-modal-content inner-modal-content--clear-chat-history">
  
  <div class="inner-modal-header">
  <div class="inner-modal-header__title">
  Do you want to clear chat history?
  </div>
  </div>
  <div class="inner-modal-main">

  </div>
  <div class="inner-modal-btns-container">
  <div class="inner-modal-btn" id="closeClearChatHistoryModal">Cancel</div>
  <div class="inner-modal-btn inner-modal-btn--action" id="submitClearChatHistoryRequestBtn">Clear</div>
  </div>
  `

      chatMainContainer.insertAdjacentElement(
        "afterbegin",
        clearChatHistoryModal
      )
      initialiseEventForClearChatHistoryModal(clearChatHistoryModal)
    } else {
      clearChatHistoryModal.classList.remove("inner-modal--hide")
    }
    let innerModalMain =
      clearChatHistoryModal.getElementsByClassName("inner-modal-main")[0]

    innerModalMain.innerHTML = ""
    if (
      chatData.isGroupChat === true &&
      chatData.groupChatAdmin.indexOf(loginUser._id.toString()) !== -1
    ) {
      innerModalMain.insertAdjacentHTML(
        "beforeend",
        `<lable class="clear-chat-history-for-all-container">
         <input type="checkbox" class="clear-chat-history-for-all-checkbox" id="clearChatHistoryForAllInput"> Clear Chat History For All
         </lable>`
      )
    }
  }
}

async function initialiseEventForClearChatHistoryModal(clearChatHistoryModal) {
  document
    .getElementById("submitClearChatHistoryRequestBtn")
    .addEventListener("click", () => {
      let clearChatData = {}
      clearChatData.chatId = activeChatData._id
      clearChatData.forAll = false
      let clearChatHistoryForAllInput = document.getElementById(
        "clearChatHistoryForAllInput"
      )
      if (
        clearChatHistoryForAllInput &&
        clearChatHistoryForAllInput.checked === true
      ) {
        clearChatData.forAll = true
      }
      console.log(clearChatData)
      fetch("/chat/clear-chat-history", {
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
            clearChatHistoryModal.classList.add("inner-modal--hide")

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
            "Server Error In Clearing Chat History, Please Try Again",
            "error"
          )
        })
    })

  document
    .getElementById("closeClearChatHistoryModal")
    .addEventListener("click", () => {
      clearChatHistoryModal.classList.add("inner-modal--hide")
    })
  window.addEventListener("click", e => {
    if (e.target === clearChatHistoryModal) {
      clearChatHistoryModal.classList.add("inner-modal--hide")
    }
  })
}
