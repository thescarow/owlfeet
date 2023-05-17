import "../css/confirmRejoinModal.dev.css"

let callMainContainer = document.getElementById("callMainContainer")
let joiningRoomId
let myMediaStream
let myStreamTypeData
export async function createConfirmRejoinModal(
  callRoomId,
  mediaStream,
  streamTypeData
) {
  if (callMainContainer) {
    joiningRoomId = callRoomId
    myMediaStream = mediaStream
    myStreamTypeData = streamTypeData
    let confirmRejoinModal = document.getElementById("confirmRejoinModal")
    if (!confirmRejoinModal) {
      confirmRejoinModal = document.createElement("div")
      confirmRejoinModal.classList.add(
        "inner-modal",
        "inner-modal--confirm-rejoin"
      )
      confirmRejoinModal.setAttribute("id", "confirmRejoinModal")

      confirmRejoinModal.innerHTML = `
    <div class="inner-modal-content inner-modal-content--confirm-rejoin">

        <div class="rejoin-confirm-modal">
               <div class="rejoin-confirm-modal__title">
                   You have already joined this group.
               </div>
               <div class="rejoin-confirm-modal__desc">
               If you want to join here, you will be removed from there.
               </div>

        </div>
    
        <div class="inner-modal-btns-container">
                <div class="inner-modal-btn" id="closeConfirmRejoinModalBtn">Cancel</div>

                <div class="inner-modal-btn inner-modal-btn--action" id="rejoinRequestBtn">Rejoin</div>
        </div>

  </div>`

      callMainContainer.insertAdjacentElement("afterbegin", confirmRejoinModal)
      initialiseEventForConfirmRejoinModal(confirmRejoinModal)
    } else {
      confirmRejoinModal.classList.remove("inner-modal--hide")
    }
  }
}

async function initialiseEventForConfirmRejoinModal(confirmRejoinModal) {
  document
    .getElementById("rejoinRequestBtn")
    .addEventListener("click", async () => {
      if (joiningRoomId !== "") {
        let isAudioOn = myStreamTypeData.isAudioOn ? true : false

        let isCameraOn = myStreamTypeData.isCameraOn ? true : false

        let isScreenShareOn = myStreamTypeData.isScreenShareOn ? true : false

        let callRoomData = {
          isCameraOn: isCameraOn,
          isScreenShareOn: isScreenShareOn,
          isAudioOn: isAudioOn,
          joiningRoomId: joiningRoomId
        }

        fetch("/call/rejoin-call-room", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(callRoomData)
        })
          .then(response => {
            if (response.ok) {
              return response.json()
            }
            return Promise.reject(response)
          })
          .then(async data => {
            if (data.isSuccess) {
              confirmRejoinModal.classList.add("inner-modal--hide")
              let { createOnCallSection } = await import("./onCallSection.dev")
              createOnCallSection(
                data.callRoom,
                myMediaStream,
                myStreamTypeData
              )
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
              "Server error in rejoining room, Please try again",
              "error"
            )
          })
      } else {
        let { createMainNotification } = await import(
          "../../common/mainNotification.dev"
        )
        createMainNotification(
          "There are some error in rejoining this room, Please refresh your page",
          "error"
        )
      }
    })

  document
    .getElementById("closeConfirmRejoinModalBtn")
    .addEventListener("click", () => {
      confirmRejoinModal.classList.add("inner-modal--hide")
    })
  window.addEventListener("click", e => {
    if (e.target === confirmRejoinModal) {
      confirmRejoinModal.classList.add("inner-modal--hide")
    }
  })
}
