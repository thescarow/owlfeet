let svg_callPermissionLockIcon = `<svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
<path d="M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z" />
</svg>
`
let calltypeInfoContainer = document.getElementById("calltypeInfoContainer")
let calltypeInfo = document.getElementById("calltypeInfo")
let calltypeInfoPreview = document.getElementById("calltypeInfoPreview")
let calltypeInfoBtnContainer = document.getElementById(
  "calltypeInfoBtnContainer"
)
let calltypeMessage = document.getElementById("calltypeMessage")

let calltypeMessageReloadBtn = document.getElementById(
  "calltypeMessageReloadBtn"
)

let myMediaStream = null
export function createCalltypeInfoContainer() {
  console.log("calltypeInfoContainer")

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("Camera and microphone access is supported")

    let video = document.createElement("video")
    video.muted = true
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true
      })
      .then(stream => {
        myMediaStream = stream
        video.srcObject = stream
        video.addEventListener("loadedmetadata", () => {
          video.play()
        })

        calltypeInfoPreview.insertAdjacentElement("beforeend", video)
      })
      .catch(e => {
        console.log(e, typeof e, e.message)

        if (e.message === "Permission dismissed") {
          showCalltypeMessage(
            "You've blocked access to your camera and microphone",
            `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`
          )
        } else if (e.message === "Permission denied") {
          showCalltypeMessage(
            "You've blocked access to your camera and microphone",
            `To allow access, click
        the <span>lock icon</span> ${svg_callPermissionLockIcon} in the
        address bar. Select the <span>Allow</span> option for <span>Camera</span> and
        <span>Microphone</span>. Then reload the page
        for the new settings to take effect.`
          )
        } else {
          showCalltypeMessage(
            "You've blocked access to your camera and microphone",
            `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`
          )
        }
      })
  } else {
    console.warn("Camera and microphone access is not supported")
    showCalltypeMessage(
      "Your browser does not support microphone and camera access",
      `please upgrade your browser version or switch to <span>Chrome</span> latest version`
    )
  }
  initialiseEventForCalltypeInfoContainer()
}

function initialiseEventForCalltypeInfoContainer() {
  if (calltypeMessageReloadBtn) {
    calltypeMessageReloadBtn.addEventListener("click", () => {
      location.reload()
    })
  }

  calltypeInfoBtnContainer.addEventListener("click", async e => {
    let calltypeInfoBtn = e.target.closest(`.calltype-info-btn`)
    if (calltypeInfoBtn && calltypeInfoBtnContainer.contains(calltypeInfoBtn)) {
      if (calltypeInfoBtn.dataset.calltypeInfoBtn === "video") {
        if (myMediaStream !== null) {
          let videoEnabled = myMediaStream.getVideoTracks()[0].enabled
          if (videoEnabled) {
            myMediaStream.getVideoTracks()[0].enabled = false
            calltypeInfoBtn.classList.add("calltype-info-btn--selected")
            calltypeInfoBtn.classList.remove("calltype-info-btn--unselected")
            calltypeInfoPreview.classList.add(
              "calltype-info__preview--video-off"
            )
          } else {
            myMediaStream.getVideoTracks()[0].enabled = true
            calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
            calltypeInfoBtn.classList.add("calltype-info-btn--unselected")
            calltypeInfoPreview.classList.remove(
              "calltype-info__preview--video-off"
            )
          }
        }
      }
      if (calltypeInfoBtn.dataset.calltypeInfoBtn === "mic") {
        if (myMediaStream !== null) {
          let audioEnabled = myMediaStream.getAudioTracks()[0].enabled
          if (audioEnabled) {
            myMediaStream.getAudioTracks()[0].enabled = false
            calltypeInfoBtn.classList.add("calltype-info-btn--selected")
            calltypeInfoBtn.classList.remove("calltype-info-btn--unselected")
            calltypeInfoPreview.classList.add("calltype-info__preview--mic-off")
          } else {
            myMediaStream.getAudioTracks()[0].enabled = true
            calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
            calltypeInfoBtn.classList.add("calltype-info-btn--unselected")
            calltypeInfoPreview.classList.remove(
              "calltype-info__preview--mic-off"
            )
          }
        }
      }
    }
  })
}

function showCalltypeMessage(title, desc) {
  calltypeInfo.classList.add("calltype-info--hide")
  calltypeMessage.classList.remove("calltype-message--hide")

  document.getElementById("calltypeMessageTitle").textContent = title
  document.getElementById("calltypeMessageDesc").innerHTML = desc
}
