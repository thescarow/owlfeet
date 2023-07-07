import "../css/changeChatAppearanceModal.dev.css"

export async function createChangeChatAppearanceModal(chat) {
  let chatMainContainer = document.getElementById("chatMainContainer")
  if (chatMainContainer) {
    let chatStyleModal = document.getElementById("chatStyleModal")
    if (!chatStyleModal) {
      chatStyleModal = document.createElement("div")
      chatStyleModal.classList.add("inner-modal")
      chatStyleModal.setAttribute("id", "chatStyleModal")

      chatStyleModal.innerHTML = `
      <div class="inner-modal__close-btn" id="chatStyleModalCloseBtn">X</div>
      <div class="inner-modal-content" id="chatStyleModalContent">
          <div class="chat-style" id="chatStyle">
              <div class="chat-style-title">
                  Change Chat Appearance
              </div>
              <div class="chat-style-selection">
                  <div class="chat-style-selection__title" id="chatStyleSelectionTitle">
                      Remove background
                  </div>
                  <div class="chat-style-selection__box" id="chatStyleSelectionBox">
                      <div class="chat-style-selection__btn " data-btn-type="background-remove">
                          <%- include('../partials/icons/chat-info/backgroundRemoveIcon.svg') _%>
                      </div>
                      <div class="chat-style-selection__btn chat-style-selection__btn--active"
                          data-btn-type="background-color"> <%-
                              include('../partials/icons/chat-info/backgroundColorIcon.svg') _%>
                      </div>
                      <div class="chat-style-selection__btn" data-btn-type="background-image"> <%-
                              include('../partials/icons/chat-info/backgroundImageIcon.svg') _%>
                      </div>
                  </div>
  
              </div>
              <div class="chat-style-feature chat-style-feature--background-color" id="chatStylefeature">
                  <div class="chat-style-remove-background">
                      <div class="chat-style-remove-background__btn" id="chatStyleBackgroundRemoveBtn"><%-
                              include('../partials/icons/chat-info/backgroundRemoveIcon.svg') _%> Remove Background</div>
                  </div>
                  <div class="chat-style-background-color" id="chatStyleBackgroundColorBox">
                      <div class="chat-style-background-color__btn" style="background-color: #E2F6CA;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #FAF1E6;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #A4907C;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #A0C49D;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #A2A378;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #E3F2C1;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #FAF1E6;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #E7AB9A;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #C7E8CA;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #F6F7C1;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #FFF6BD;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #E5D9B6;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #B3FFAE;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #9BA17B;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #FFE9A0;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #FAD5AD;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #99F3BD;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #A4B494;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #D9F8C4;"></div>
                      <div class="chat-style-background-color__btn" style="background-color: #D7D1C9;"></div>
                      <div class="chat-style-background-color__custom-btn">
                          <input type="color" id="backgroundCustomColorBtn" value="#ffffff" />
                          <label for="backgroundCustomColorBtn" id="backgroundCustomColorLabel">Custom</label>
                      </div>
  
                  </div>
                  <div class="chat-style-background-image">
                      <div class="chat-style-background-image__btn" id="chatStyleBackgroundImageBtn">
                          <%- include('../partials/icons/chat-info/backgroundImageIcon.svg') _%>
                              <span>----Select Image----</span>
                      </div>
                  </div>
              </div>
              <div class="chat-style-btn-field" id="chatStyleBtnField">
                  <div class="chat-style-btn" id="chatStyleSaveBackgroundChangeBtn">Save</div>
              </div>
  
              <div class="chat-style-preview-box" id="chatStylePreviewBox">
  
              </div>
  
          </div>
  
      </div>`

      chatMainContainer.insertAdjacentElement("afterbegin", chatStyleModal)
      initialiseEventForClearChatAllMessagesModal(chatStyleModal)
    } else {
      chatStyleModal.classList.remove("inner-modal--hide")
    }
    let innerModalMain =
      chatStyleModal.getElementsByClassName("inner-modal-main")[0]

    innerModalMain.innerHTML = ""
    if (
      chat.isGroupChat === true &&
      chat.groupChatAdmin.indexOf(loginUser._id.toString()) !== -1
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

async function initialiseEventForClearChatAllMessagesModal(chatStyleModal) {
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
            chatStyleModal.classList.add("inner-modal--hide")

            let { clearActiveChatMessageContainer } = await import(
              "./showActiveChatSection.dev"
            )
            clearActiveChatMessageContainer()
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
            "Server Error In Clearing All Messages, Please Try Again",
            "error"
          )
        })
    })

  document
    .getElementById("closeClearChatAllMessagesModal")
    .addEventListener("click", () => {
      chatStyleModal.classList.add("inner-modal--hide")
    })
  window.addEventListener("click", e => {
    if (e.target === chatStyleModal) {
      chatStyleModal.classList.add("inner-modal--hide")
    }
  })
}
