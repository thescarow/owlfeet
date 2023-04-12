let svg_callPermissionLockIcon = `<svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
<path d="M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z" />
</svg>
`
let roomInfoContainer = document.getElementById("roomInfoContainer")
let creatingChatRoom = document.getElementById("creatingChatRoom")

export function createChatRoom() {
  initialiseEventForCreatingChatRoom()
}

function initialiseEventForCreatingChatRoom() {
  //   if (calltypeMessageReloadBtn) {
  //     calltypeMessageReloadBtn.addEventListener("click", () => {
  //       location.reload()
  //     })
  //   }
  if (creatingChatRoom) {
    creatingChatRoom.addEventListener("click", async e => {
      let creatingChatRoomBtn = e.target.closest(`.creating-chat-room__btn`)
      if (
        creatingChatRoomBtn &&
        roomInfoContainer.contains(creatingChatRoomBtn)
      ) {
        if (creatingChatRoomBtn.dataset.btn === "start-call") {
          let chatId = creatingChatRoom.dataset.chatId
          if (chatId !== "") {
            fetch("/call/create-chat-room", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ chatId })
            })
              .then(response => {
                if (response.ok) {
                  return response.json()
                }
                return Promise.reject(response)
              })
              .then(async data => {
                if (data.isSuccess) {
                  console.log(data.callRoom)
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
                  "Server error in creating chat room, Please try again",
                  "error"
                )
              })
          }
        }
        // if (calltypeInfoBtn.dataset.calltypeInfoBtn === "mic") {
        //   if (myMediaStream !== null) {
        //     let audioEnabled = myMediaStream.getAudioTracks()[0].enabled
        //     if (audioEnabled) {
        //       myMediaStream.getAudioTracks()[0].enabled = false
        //       calltypeInfoBtn.classList.add("calltype-info-btn--selected")
        //       calltypeInfoBtn.classList.remove("calltype-info-btn--unselected")
        //       calltypeInfoPreview.classList.add("calltype-info__preview--mic-off")
        //     } else {
        //       myMediaStream.getAudioTracks()[0].enabled = true
        //       calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
        //       calltypeInfoBtn.classList.add("calltype-info-btn--unselected")
        //       calltypeInfoPreview.classList.remove(
        //         "calltype-info__preview--mic-off"
        //       )
        //     }
        //   }
        // }
      }
    })
  }
}
