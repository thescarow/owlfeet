let svg_callCopyRoomLinkIcon = `<svg width="84" height="100" viewBox="0 0 84 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M8.40245 17.3771L8.4 70.8333C8.4 81.879 17.0649 90.917 28.0192 91.6223L29.4 91.6667L66.4809 91.6725C64.7496 96.5244 60.0839 100 54.6 100H25.2C11.2824 100 0 88.8071 0 75V29.1667C0 23.7232 3.50736 19.0924 8.40245 17.3771ZM71.4 0C78.3588 0 84 5.59644 84 12.5V70.8333C84 77.7369 78.3588 83.3333 71.4 83.3333H29.4C22.4412 83.3333 16.8 77.7369 16.8 70.8333V12.5C16.8 5.59644 22.4412 0 29.4 0H71.4ZM71.4 8.33333H29.4C27.0804 8.33333 25.2 10.1988 25.2 12.5V70.8333C25.2 73.1345 27.0804 75 29.4 75H71.4C73.7196 75 75.6 73.1345 75.6 70.8333V12.5C75.6 10.1988 73.7196 8.33333 71.4 8.33333Z" />
</svg>
`

let svg_callCoppiedLinkSuccessfullyIcon = `<svg width="100" height="70" viewBox="0 0 100 70"  xmlns="http://www.w3.org/2000/svg">
<path d="M37.8113 70C35.7994 70 33.7875 69.2389 32.2444 67.6971L2.30003 37.7786C-0.766676 34.7146 -0.766676 29.7379 2.30003 26.6739C5.36673 23.6098 10.3477 23.6098 13.4144 26.6739L37.8113 51.0497L86.5856 2.29804C89.6523 -0.766014 94.6333 -0.766014 97.7 2.29804C100.767 5.3621 100.767 10.3387 97.7 13.4028L43.3587 67.6971C41.8351 69.2194 39.8232 70 37.8113 70Z" />
</svg>
`

import "../css/onCallRoomShareModal.dev.css"

export function createOnCallRoomShareModal() {
  let onCallSection = document.getElementById("onCallSection")
  if (onCallSection) {
    let onCallRoomShareModal = document.getElementById("onCallRoomShareModal")

    if (!onCallRoomShareModal) {
      onCallRoomShareModal = document.createElement("div")
      onCallRoomShareModal.classList.add(
        "inner-modal",
        "inner-modal--call-room-share"
      )
      onCallRoomShareModal.setAttribute("id", "onCallRoomShareModal")

      onCallRoomShareModal.innerHTML = `
        <div class="inner-modal-content inner-modal-content--call-room-share">
      

              <div class="on-call-room-share__close-btn">X</div>

             <div class="on-call-room-share__title">
                Your room's ready
             </div>

            <div class="on-call-room-share__desc">
                Share this call link with other you want in this call
            </div>

            <div class="on-call-room-share__link">
                    ${location.href}         
                <div class="on-call-btn on-call-btn--copy-room-link on-call-btn--unselected " id="copyCallRoomLinkBtn">

                    <div class="on-call-btn__icon on-call-btn__icon--unselected">
                    ${svg_callCopyRoomLinkIcon}
                    </div>
                    <div class="on-call-btn__icon on-call-btn__icon--selected">
                    ${svg_callCoppiedLinkSuccessfullyIcon}
                    </div>
                </div>

            </div>

       
        </div>`

      onCallSection.insertAdjacentElement("afterbegin", onCallRoomShareModal)
      initialiseEventForOnCallRoomShareModal()
    } else {
      onCallRoomShareModal.classList.remove("inner-modal--hide")
    }
  }
}

async function initialiseEventForOnCallRoomShareModal() {
  let onCallRoomShareModal = document.getElementById("onCallRoomShareModal")
  if (onCallRoomShareModal) {
    document
      .getElementById("copyCallRoomLinkBtn")
      .addEventListener("click", () => {
        let copiedText = location.href
        navigator.clipboard.writeText(copiedText).then(
          async () => {
            copyCallRoomLinkBtn.classList.remove("on-call-btn--unselected")
            copyCallRoomLinkBtn.classList.add("on-call-btn--selected")
            setTimeout(() => {
              copyCallRoomLinkBtn.classList.remove("on-call-btn--selected")
              copyCallRoomLinkBtn.classList.add("on-call-btn--unselected")
            }, 3000)
          },
          async e => {
            let { createMainNotification } = await import(
              "../../common/mainNotification.dev"
            )
            createMainNotification(e.message, "error")
          }
        )
      })

    onCallRoomShareModal
      .getElementsByClassName("on-call-room-share__close-btn")[0]
      .addEventListener("click", () => {
        onCallRoomShareModal.classList.add("inner-modal--hide")
        let onCallRoomShareBtn = document.querySelector(
          `.on-call-btn[data-btn-type="call-share-room"]`
        )
        onCallRoomShareBtn.classList.add("on-call-btn--unselected")
        onCallRoomShareBtn.classList.remove("on-call-btn--selected")
        onCallRoomShareBtn.dataset.btnWorkingState = "open-modal"
      })
  }

  window.addEventListener("click", e => {
    if (e.target === onCallRoomShareModal) {
      onCallRoomShareModal.classList.add("inner-modal--hide")
      let onCallRoomShareBtn = document.querySelector(
        `.on-call-btn[data-btn-type="call-share-room"]`
      )
      onCallRoomShareBtn.classList.add("on-call-btn--unselected")
      onCallRoomShareBtn.classList.remove("on-call-btn--selected")
      onCallRoomShareBtn.dataset.btnWorkingState = "open-modal"
    }
  })
}
