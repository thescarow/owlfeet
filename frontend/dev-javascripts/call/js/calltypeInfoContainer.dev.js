let svg_callPermissionLockIcon = `
<svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
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

let myMediaStream
let myStreamTypeData

export function createCalltypeInfoContainer(stream, streamTypeData) {
  myMediaStream = stream
  myStreamTypeData = streamTypeData

  let video = document.createElement("video")
  video.muted = true

  video.srcObject = myMediaStream
  video.addEventListener("loadedmetadata", () => {
    video.play()
  })

  calltypeInfoPreview.insertAdjacentElement("beforeend", video)

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
      if (calltypeInfoBtn.dataset.btnType === "video") {
        if (myStreamTypeData.isScreenShareOn === false) {
          if (calltypeInfoBtn.dataset.btnWorkingState === "video-on") {
            let { getCameraVideoTrack } = await import("../call.dev")
            let cameraVideoTrack = await getCameraVideoTrack()

            if (cameraVideoTrack) {
              let videoTracks = myMediaStream.getVideoTracks()
              videoTracks.forEach(track => {
                track.stop()
                myMediaStream.removeTrack(track)
              })
              myMediaStream.addTrack(cameraVideoTrack)

              calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
              calltypeInfoBtn.classList.add("calltype-info-btn--unselected")
              calltypeInfoPreview.classList.remove(
                "calltype-info__preview--video-off"
              )
              calltypeInfoPreview.classList.add(
                "calltype-info__preview--camera"
              )

              calltypeInfoBtn.dataset.btnWorkingState = "video-off"
              myStreamTypeData.isCameraOn = true
            }
          } else if (calltypeInfoBtn.dataset.btnWorkingState === "video-off") {
            let videoTracks = myMediaStream.getVideoTracks()
            videoTracks.forEach(track => {
              track.stop()
            })

            calltypeInfoBtn.classList.add("calltype-info-btn--selected")
            calltypeInfoBtn.classList.remove("calltype-info-btn--unselected")
            calltypeInfoPreview.classList.add(
              "calltype-info__preview--video-off"
            )
            calltypeInfoPreview.classList.remove(
              "calltype-info__preview--camera"
            )
            calltypeInfoBtn.dataset.btnWorkingState = "video-on"
            myStreamTypeData.isCameraOn = false
          }
        }
      }
      if (calltypeInfoBtn.dataset.btnType === "audio") {
        if (calltypeInfoBtn.dataset.btnWorkingState === "audio-on") {
          let { getCallAudioTrack } = await import("../call.dev")
          let callAudioTrack = await getCallAudioTrack()

          if (callAudioTrack) {
            let audioTracks = myMediaStream.getAudioTracks()
            audioTracks.forEach(track => {
              track.stop()
              myMediaStream.removeTrack(track)
            })
            myMediaStream.addTrack(callAudioTrack)

            calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
            calltypeInfoBtn.classList.add("calltype-info-btn--unselected")
            calltypeInfoPreview.classList.remove(
              "calltype-info__preview--audio-off"
            )
            calltypeInfoBtn.dataset.btnWorkingState = "audio-off"
          }
        } else if (calltypeInfoBtn.dataset.btnWorkingState === "audio-off") {
          let audioTracks = myMediaStream.getAudioTracks()
          audioTracks.forEach(track => {
            track.stop()
          })
          calltypeInfoBtn.classList.add("calltype-info-btn--selected")
          calltypeInfoBtn.classList.remove("calltype-info-btn--unselected")
          calltypeInfoPreview.classList.add("calltype-info__preview--audio-off")
          calltypeInfoBtn.dataset.btnWorkingState = "audio-on"
        }
      }
      if (calltypeInfoBtn.dataset.btnType === "share-screen") {
        if (calltypeInfoBtn.dataset.btnWorkingState === "share-screen-on") {
          let { getScreenShareVideoTrack } = await import("../call.dev")
          let screenShareVideoTrack = await getScreenShareVideoTrack()

          if (screenShareVideoTrack) {
            let videoTracks = myMediaStream.getVideoTracks()
            videoTracks.forEach(track => {
              track.stop()
              myMediaStream.removeTrack(track)
            })
            myMediaStream.addTrack(screenShareVideoTrack)

            calltypeInfoBtn.classList.add("calltype-info-btn--selected")
            calltypeInfoBtn.classList.remove("calltype-info-btn--unselected")
            if (
              calltypeInfoPreview.classList.contains(
                "calltype-info__preview--video-off"
              )
            )
              calltypeInfoPreview.classList.remove(
                "calltype-info__preview--video-off"
              )
            if (
              calltypeInfoPreview.classList.contains(
                "calltype-info__preview--camera"
              )
            )
              calltypeInfoPreview.classList.remove(
                "calltype-info__preview--camera"
              )
            calltypeInfoBtn.dataset.btnWorkingState = "share-screen-off"

            myStreamTypeData.isScreenShareOn = true

            screenShareVideoTrack.onended = async () => {
              let videoTracks = myMediaStream.getVideoTracks()
              videoTracks.forEach(track => {
                track.stop()
                myMediaStream.removeTrack(track)
              })

              if (
                !calltypeInfoPreview.classList.contains(
                  "calltype-info__preview--camera"
                )
              )
                calltypeInfoPreview.classList.add(
                  "calltype-info__preview--camera"
                )

              if (myStreamTypeData.isCameraOn) {
                let { getCameraVideoTrack } = await import("../call.dev")
                let cameraVideoTrack = await getCameraVideoTrack()

                if (cameraVideoTrack) {
                  myMediaStream.addTrack(cameraVideoTrack)
                }
              } else {
                if (
                  !calltypeInfoPreview.classList.contains(
                    "calltype-info__preview--video-off"
                  )
                )
                  calltypeInfoPreview.classList.add(
                    "calltype-info__preview--video-off"
                  )
              }
              if (
                calltypeInfoBtn.dataset.btnWorkingState === "share-screen-off"
              ) {
                calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
                calltypeInfoBtn.classList.add("calltype-info-btn--unselected")

                calltypeInfoBtn.dataset.btnWorkingState = "share-screen-on"
                myStreamTypeData.isScreenShareOn = false
              }
            }
          }
        } else if (
          calltypeInfoBtn.dataset.btnWorkingState === "share-screen-off"
        ) {
          let videoTracks = myMediaStream.getVideoTracks()
          videoTracks.forEach(track => {
            track.stop()
            myMediaStream.removeTrack(track)
          })
          if (
            !calltypeInfoPreview.classList.contains(
              "calltype-info__preview--camera"
            )
          )
            calltypeInfoPreview.classList.add("calltype-info__preview--camera")

          if (myStreamTypeData.isCameraOn) {
            let { getCameraVideoTrack } = await import("../call.dev")
            let cameraVideoTrack = await getCameraVideoTrack()

            if (cameraVideoTrack) {
              myMediaStream.addTrack(cameraVideoTrack)
            }
          } else {
            if (
              !calltypeInfoPreview.classList.contains(
                "calltype-info__preview--video-off"
              )
            )
              calltypeInfoPreview.classList.add(
                "calltype-info__preview--video-off"
              )
          }
          calltypeInfoBtn.classList.remove("calltype-info-btn--selected")
          calltypeInfoBtn.classList.add("calltype-info-btn--unselected")

          calltypeInfoBtn.dataset.btnWorkingState = "share-screen-on"
          myStreamTypeData.isScreenShareOn = false
        }
      }
    }
  })
}

export function showCalltypeMessage(title, desc) {
  calltypeInfo.classList.add("calltype-info--hide")
  calltypeMessage.classList.remove("calltype-message--hide")

  document.getElementById("calltypeMessageTitle").textContent = title
  document.getElementById("calltypeMessageDesc").innerHTML = desc
}
