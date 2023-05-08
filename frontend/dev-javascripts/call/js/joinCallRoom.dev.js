let svg_callPermissionLockIcon = `<svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
<path d="M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z" />
</svg>
`
let roomInfoContainer = document.getElementById("roomInfoContainer")
let joiningCallRoom = document.getElementById("joiningCallRoom")

export function joinCallRoom() {
  console.log("called")
  initialiseEventForJoinCallRoom()
}

function initialiseEventForJoinCallRoom() {
  if (joiningCallRoom) {
    joiningCallRoom.addEventListener("click", async e => {
      console.log("clickedd")
      let callRoomBtn = e.target.closest(`.call-room__btn `)
      if (callRoomBtn && roomInfoContainer.contains(callRoomBtn)) {
        if (callRoomBtn.dataset.btn === "join-call-room") {
          let joiningRoomId = joiningCallRoom.dataset.callRoomId
          if (joiningRoomId !== "") {
            let calltypeInfoVideoBtn = document.getElementById(
              "calltypeInfoVideoBtn"
            )
            let calltypeInfoAudioBtn = document.getElementById(
              "calltypeInfoAudioBtn"
            )

            let isVideoOn = calltypeInfoVideoBtn.dataset.calltypeVideoValue
            let isAudioOn = calltypeInfoAudioBtn.dataset.calltypeAudioValue
            if (isVideoOn === "string")
              isVideoOn = isVideoOn === "true" ? true : false
            if (isAudioOn === "string")
              isAudioOn = isAudioOn === "true" ? true : false

            let callRoomData = {
              isVideoOn: isVideoOn,
              isAudioOn: isAudioOn,
              joiningRoomId: joiningRoomId
            }

            fetch("/call/join-call-room", {
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
                  console.log(data.callRoom)
                  let { createOnCallSection } = await import(
                    "./onCallSection.dev"
                  )
                  createOnCallSection(data.callRoom)
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
                  "Server error in creating new room, Please try again",
                  "error"
                )
              })
          } else {
            let { createMainNotification } = await import(
              "../../common/mainNotification.dev"
            )
            createMainNotification(
              "There are some error in joining this room, Please refresh your page",
              "error"
            )
          }
        }
      }
    })
  }
}
