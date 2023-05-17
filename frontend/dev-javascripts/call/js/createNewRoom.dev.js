let svg_callPermissionLockIcon = `<svg width="80" height="100" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
<path d="M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z" />
</svg>
`
let callMainContainer = document.getElementById("callMainContainer")
let roomInfoContainer = document.getElementById("roomInfoContainer")
let creatingNewRoom = document.getElementById("creatingNewRoom")

import Uppy from "@uppy/core"
import Dashboard from "@uppy/dashboard"
import Webcam from "@uppy/webcam"
import ImageEditor from "@uppy/image-editor"

import "@uppy/core/dist/style.css"
import "@uppy/dashboard/dist/style.css"
import "@uppy/webcam/dist/style.css"
import "@uppy/image-editor/dist/style.css"

import AwsS3Multipart from "@uppy/aws-s3-multipart"
let myMediaStream
let myStreamTypeData
export function createNewRoom(mediaStream, streamTypeData) {
  myMediaStream = mediaStream
  myStreamTypeData = streamTypeData
  initialiseEventForCreatingNewRoom()
}

function initialiseEventForCreatingNewRoom() {
  if (creatingNewRoom) {
    const uppy = new Uppy({
      id: "creatingNewRoomPic",
      autoProceed: false,
      allowMultipleUploadBatches: false,
      debug: false,
      onBeforeFileAdded: (currentFile, files) => {
        if (!currentFile.type) {
          uppy.log(`Skipping file because it has no type`)
          uppy.info(`Skipping file because it has no type`, "error", 500)
          return false
        } else {
          let creatingNewRoomPicKey =
            document.getElementById("creatingNewRoomPic").dataset.roomPic
          currentFile.name = creatingNewRoomPicKey
          return currentFile
        }
      },
      onBeforeUpload: files => {
        // const updatedFiles = {}
        // Object.keys(files).forEach(fileID => {
        //   updatedFiles[fileID] = {
        //     ...files[fileID],
        //     meta: {
        //       ...files[fileID].meta,
        //       fileType: files[fileID].type
        //     }
        //   }
        // })
        // console.log(updatedFiles)
        // return updatedFiles
      },
      restrictions: {
        maxFileSize: 1024 * 1024 * 5,
        minFileSize: null,
        maxTotalFileSize: 1024 * 1024 * 5 * 1,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: [
          "image/jpeg",
          "image/png",
          "image/gif",
          "image/svg+xml",
          "image/x-png"
        ]
      },
      meta: { mediaType: "new-call-room-pic" },
      infoTimeout: 5000
    })
      .use(Dashboard, {
        trigger: "#creatingNewRoomPic",
        target: "body",
        inline: false,
        plugins: ["Webcam", "ImageEditor"],
        thumbnailWidth: 300,
        // closeAfterFinish: false,
        showRemoveButtonAfterComplete: false,
        disablePageScrollWhenModalOpen: true,
        closeModalOnClickOutside: true,

        theme: "dark",
        locale: {
          strings: {}
        },
        note: "File size up to 5 MB",
        proudlyDisplayPoweredByUppy: false
      })
      .use(Webcam, {
        target: Dashboard,
        title: "Camera",
        mirror: true,
        modes: ["picture"]
      })
      .use(ImageEditor, {
        target: Dashboard,
        quality: 0.8
      })

      .use(AwsS3Multipart, {
        limit: 4,
        companionUrl: "http://localhost:5000/companion"
      })

    // uppy.on("complete", result => {
    //   console.log(
    //     "Upload complete! We’ve uploaded these files:",
    //     result.successful
    //   )
    // })
    uppy.on("upload-success", (file, response) => {
      let creatingNewRoomPic = document.getElementById("creatingNewRoomPic")
      creatingNewRoomPic.classList.add("creating-new-room__pic--img")
      creatingNewRoomPic.classList.remove("creating-new-room__pic--svg")

      creatingNewRoomPic.dataset.roomPic = file.s3Multipart.key

      let creatingNewRoomPicImg = creatingNewRoomPic.querySelector("img")
      if (creatingNewRoomPicImg) {
        creatingNewRoomPicImg.src = file.preview
      }
    })

    creatingNewRoom.addEventListener("click", async e => {
      let callRoomBtn = e.target.closest(`.creating-new-room__btn `)
      console.log(callRoomBtn)

      if (callRoomBtn && roomInfoContainer.contains(callRoomBtn)) {
        if (callRoomBtn.dataset.btn === "create-new-room") {
          let newRoomNameInput = document.getElementById("newRoomNameInput")
          let newRoomAboutInput = document.getElementById("newRoomAboutInput")
          let creatingNewRoomPic = document.getElementById("creatingNewRoomPic")

          let newRoomNameInputValue = newRoomNameInput.value
          let newRoomAboutInputValue = newRoomAboutInput.value
          let creatingNewRoomPicKey = creatingNewRoomPic.dataset.roomPic

          if (newRoomNameInputValue.trim() !== "") {
            let isAudioOn = myStreamTypeData.isAudioOn ? true : false

            let isCameraOn = myStreamTypeData.isCameraOn ? true : false

            let isScreenShareOn = myStreamTypeData.isScreenShareOn
              ? true
              : false

            let callRoomData = {
              isCameraOn: isCameraOn,
              isScreenShareOn: isScreenShareOn,
              isAudioOn: isAudioOn,
              roomName: newRoomNameInputValue,
              roomAbout: newRoomAboutInputValue,
              roomPic: creatingNewRoomPicKey
            }

            fetch("/call/create-new-room", {
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

                  callMainContainer.dataset.callRoomId =
                    data.callRoom._id.toString()
                  let { createOnCallSection } = await import(
                    "./onCallSection.dev"
                  )
                  createOnCallSection(
                    data.callRoom,
                    myMediaStream,
                    myStreamTypeData
                  )
                  history.replaceState(
                    data.callRoom,
                    "",
                    `/call/?room=${data.callRoom._id.toString()}`
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
                  "Server error in creating new room, Please try again",
                  "error"
                )
              })
          } else {
            let { createMainNotification } = await import(
              "../../common/mainNotification.dev"
            )
            createMainNotification("Please give a name to call room", "error")
            newRoomNameInput.focus()
          }
        }
      }
    })
  }
}
