import { createMainNotification } from "../../common/mainNotification.dev"
import "../css/deleteChatModal.dev.css"

export async function createDeleteChatModal() {
  let chatMainContainer = document.getElementById("chatMainContainer")
  if (chatMainContainer) {
    let deleteChatModal = document.getElementById("deleteChatModal")
    if (!deleteChatModal) {
      deleteChatModal = document.createElement("div")
      deleteChatModal.classList.add(
        "inner-modal",
        "inner-modal--delete-chat-modal"
      )
      deleteChatModal.setAttribute("id", "deleteChatModal")

      deleteChatModal.innerHTML = `
  <div class="inner-modal-content inner-modal-content--delete-chat-modal">
  
  <div class="inner-modal-header">
  <div class="inner-modal-header__title">
  Do you want to delete chat ?
  </div>
  </div>
  <div class="inner-modal-main">

  </div>
  <div class="inner-modal-btns-container">
  <div class="inner-modal-btn" id="closeDeleteChatModalBtn">Cancel</div>
  <div class="inner-modal-btn inner-modal-btn--action" id="submitDeleteChatRequestBtn">Delete</div>
  </div>
  `

      chatMainContainer.insertAdjacentElement("afterbegin", deleteChatModal)
      initialiseEventForDeleteChatModal(deleteChatModal)
    } else {
      deleteChatModal.classList.remove("inner-modal--hide")
    }
    let innerModalMain =
      deleteChatModal.getElementsByClassName("inner-modal-main")[0]

    innerModalMain.innerHTML = ""

    innerModalMain.insertAdjacentHTML(
      "beforeend",
      `<div class="delete-chat-info">
     After deleting chat all messages will be deleted and this chat is also deleted.
     </div>`
    )
  }
}

async function initialiseEventForDeleteChatModal(deleteChatModal) {
  document
    .getElementById("submitDeleteChatRequestBtn")
    .addEventListener("click", () => {
      let deleteChatData = {}
      deleteChatData.chatId = activeChatData._id

      fetch("/chat/delete-chat", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(deleteChatData)
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then(async data => {
          if (data.isSuccess) {
            deleteChatModal.classList.add("inner-modal--hide")

            // let { clearActiveChatMessageContainer } = await import(
            //   "./showActiveChatSection.dev"
            // )
            // clearActiveChatMessageContainer()
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log(err)
          createMainNotification(
            "Server Error In Deleting Chat, Please Try Again",
            "error"
          )
        })
    })

  document
    .getElementById("closeDeleteChatModalBtn")
    .addEventListener("click", () => {
      deleteChatModal.classList.add("inner-modal--hide")
    })
  window.addEventListener("click", e => {
    if (e.target === deleteChatModal) {
      deleteChatModal.classList.add("inner-modal--hide")
    }
  })
}
