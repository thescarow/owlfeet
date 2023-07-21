let svg_callPermissionLockIcon = `
<svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
<path d="M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z" />
</svg>
`

let myMediaStream = null
let myStreamTypeData = {
  isScreenShareOn: false,
  isCameraOn: false,
  isAudioOn: false
}
;(async function () {
  if (!IS_INIT_CALL_MODULE) {
    let data = await createMediaStream()
    if (data.isSuccess) {
      myMediaStream = data.stream
      myStreamTypeData.isScreenShareOn = false
      myStreamTypeData.isCameraOn = data.isCameraOn
      myStreamTypeData.isAudioOn = data.isAudioOn

      let { createCalltypeInfoContainer } = await import(
        "./js/calltypeInfoContainer.dev"
      )
      createCalltypeInfoContainer(myMediaStream, myStreamTypeData)

      // let roomInfoContainer = document.getElementById("roomInfoContainer")

      // if (roomInfoContainer.dataset.callRoomType.trim() === "join") {
      //   let { joinCallRoom } = await import("./js/joinCallRoom.dev")
      //   joinCallRoom(myMediaStream, myStreamTypeData)
      // }
      // if (roomInfoContainer.dataset.callRoomType.trim() === "create") {
      //   let creatingRoomInfo = document.getElementById("creatingRoomInfo")
      //   if (creatingRoomInfo) {
      //     if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "chat") {
      //       let { createChatRoom } = await import("./js/createChatRoom.dev")
      //       createChatRoom(myMediaStream, myStreamTypeData)
      //     }
      //     if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "new") {
      //       let { createNewRoom } = await import("./js/createNewRoom.dev")
      //       createNewRoom(myMediaStream, myStreamTypeData)
      //     }
      //   }
      // }
    } else {
      console.log("error message: ", data.error)
      let { showCalltypeMessage } = await import(
        "./js/calltypeInfoContainer.dev"
      )
      showCalltypeMessage(data.problem, data.solution)
      let emptyMediaStream = null
      const MediaStream = window.MediaStream || window.webkitMediaStream
      // Check if the MediaStream constructor is available in the current environment
      if (MediaStream) emptyMediaStream = new MediaStream()
      // Create an empty MediaStream
      myMediaStream = emptyMediaStream
      myStreamTypeData.isScreenShareOn = false
      myStreamTypeData.isCameraOn = false
      myStreamTypeData.isAudioOn = false
    }

    /////////////////////////////////////////////////////
    // delete this all , when does not want to create call when media is not supported
    /////////////////////////////////////////////////////

    let roomInfoContainer = document.getElementById("roomInfoContainer")
    if (roomInfoContainer.dataset.callRoomType.trim() === "join") {
      let { joinCallRoom } = await import("./js/joinCallRoom.dev")
      joinCallRoom(myMediaStream, myStreamTypeData)
    }
    if (roomInfoContainer.dataset.callRoomType.trim() === "create") {
      let creatingRoomInfo = document.getElementById("creatingRoomInfo")
      if (creatingRoomInfo) {
        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "chat") {
          let { createChatRoom } = await import("./js/createChatRoom.dev")
          createChatRoom(myMediaStream, myStreamTypeData)
        }
        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "new") {
          let { createNewRoom } = await import("./js/createNewRoom.dev")
          createNewRoom(myMediaStream, myStreamTypeData)
        }
      }
    }
    // delete till here
    ///////////////////////////////////////////////////////////

    IS_INIT_CALL_MODULE = true
  }
})()

function initialiseEventForCallModule() {}

async function createMediaStream() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("Camera and microphone access is supported")
    try {
      let stream = await navigator.mediaDevices.getUserMedia({
        video: { aspectRatio: 4 / 3 },
        audio: {
          echoCancellation: true
        }
      })
      return {
        isSuccess: true,
        stream: stream,
        isCameraOn: true,
        isAudioOn: true
      }
    } catch (err) {
      console.log("error in accessing camera and mic:", err.message)

      try {
        let stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        return {
          isSuccess: true,
          stream: stream,
          isCameraOn: true,
          isAudioOn: true
        }
      } catch (err) {
        if (err.message === "Permission dismissed") {
          return {
            isSuccess: false,
            error: err.message,
            problem: "You've blocked access to your camera and microphone",
            solution: `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`
          }
        } else if (err.message === "Permission denied") {
          return {
            isSuccess: false,
            error: err.message,
            problem: "You've blocked access to your camera and microphone",
            solution: `To allow access, click
          the <span>lock icon</span> ${svg_callPermissionLockIcon} in the
          address bar. Select the <span>Allow</span> option for <span>Camera</span> and
          <span>Microphone</span>. Then reload the page
          for the new settings to take effect.`
          }
        } else {
          return {
            isSuccess: false,
            error: err.message,
            problem: "You've blocked access to your camera and microphone",
            solution: `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`
          }
        }
      }
    }
  } else {
    console.warn("Camera and microphone access is not supported")
    return {
      isSuccess: false,
      error: "Camera and microphone access is not supported",
      problem:
        "Your browser does not support microphone and camera access Or you are on unsecure protocol (http:).",
      solution: `Please upgrade your browser version or switch to <span>Chrome</span> latest version or if you are on <span>unsecure network (http:)</span>, please switch to <span>secure network (https:)</span>.`
    }
  }
}
export async function getCallAudioTrack() {
  try {
    let callAudioTrack
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true
      }
    })
    callAudioTrack = stream.getAudioTracks()[0]
    return callAudioTrack
  } catch (e) {
    console.log(
      "Error in accessing your mic:",
      e.message,
      "error.name:",
      e.name
    )
  }
}

export async function getCameraVideoTrack() {
  try {
    let cameraVideoTrack
    let stream = await navigator.mediaDevices.getUserMedia({
      video: { aspectRatio: 4 / 3 }
    })
    cameraVideoTrack = stream.getVideoTracks()[0]
    return cameraVideoTrack
  } catch (e) {
    console.log(
      "Error in accessing your camera:",
      e.message,
      "error.name:",
      e.name
    )
  }
}

export async function getScreenShareVideoTrack() {
  try {
    let screenShareVideoTrack
    let stream = await navigator.mediaDevices.getDisplayMedia({
      video: true
    })
    screenShareVideoTrack = stream.getVideoTracks()[0]
    return screenShareVideoTrack
  } catch (e) {
    console.log(
      "Error in accessing your screen:",
      e.message,
      "error.name:",
      e.name
    )
  }
}
