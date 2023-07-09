import { createMainNotification } from "../common/mainNotification.dev"
/////////////////////////////////////////////////////////////
let chatStyle = document.getElementById("chatStyle")
let chatStyleSelectionTitle = document.getElementById("chatStyleSelectionTitle")
let chatStyleSelectionBox = document.getElementById("chatStyleSelectionBox")
let chatStylefeature = document.getElementById("chatStylefeature")
let chatStyleBackgroundRemoveBtn = document.getElementById(
  "chatStyleBackgroundRemoveBtn"
)
let chatStyleBackgroundColorBox = document.getElementById(
  "chatStyleBackgroundColorBox"
)
let backgroundCustomColorBtn = document.getElementById(
  "backgroundCustomColorBtn"
)
let backgroundCustomColorLabel = document.getElementById(
  "backgroundCustomColorLabel"
)
let chatStyleBackgroundImageBtn = document.getElementById(
  "chatStyleBackgroundImageBtn"
)
let chatStyleBtnField = document.getElementById("chatStyleBtnField")
let chatStyleSaveBackgroundChangeBtn = document.getElementById(
  "chatStyleSaveBackgroundChangeBtn"
)
let chatStylePreviewBox = document.getElementById("chatStylePreviewBox")

function removeActiveClassFromSelectionBtns() {
  let chatStyleSelectionBtns = [
    ...document.getElementsByClassName("chat-style-selection__btn")
  ]
  chatStyleSelectionBtns.forEach(btn => {
    if (btn.classList.contains("chat-style-selection__btn--active"))
      btn.classList.remove("chat-style-selection__btn--active")
  })
}

if (chatStyleSelectionBox)
  chatStyleSelectionBox.addEventListener("click", async e => {
    let chatStyleSelectionBtn = e.target.closest(`.chat-style-selection__btn`)

    if (
      chatStyleSelectionBtn &&
      chatStyleSelectionBox.contains(chatStyleSelectionBtn)
    ) {
      removeActiveClassFromSelectionBtns()
      if (
        !chatStyleSelectionBtn.classList.contains(
          "chat-style-selection__btn--active"
        )
      )
        chatStyleSelectionBtn.classList.add("chat-style-selection__btn--active")
      if (chatStyleSelectionBtn.dataset.btnType === "background-remove") {
        chatStylefeature.className = `chat-style-feature chat-style-feature--background-remove`
      }
      if (chatStyleSelectionBtn.dataset.btnType === "background-color") {
        chatStylefeature.className = `chat-style-feature chat-style-feature--background-color`
      }
      if (chatStyleSelectionBtn.dataset.btnType === "background-image") {
        chatStylefeature.className = `chat-style-feature chat-style-feature--background-image`
      }
    } else {
      return
    }
  })

function setChatStylePreviewColor(color) {
  chatStylePreviewBox.style.backgroundImage = "none"
  chatStylePreviewBox.style.backgroundColor = color
}
function removeChatStylePreviewColor(color) {
  chatStylePreviewBox.style.backgroundImage = `url(
    "../../assets/images/activeChatBackground.jpg"
  )`
}
if (chatStyleBackgroundColorBox) {
  chatStyleBackgroundColorBox.addEventListener("click", async e => {
    let chatStyleBackgroundColorBtn = e.target.closest(
      `.chat-style-background-color__btn`
    )

    if (
      chatStyleBackgroundColorBtn &&
      chatStyleBackgroundColorBox.contains(chatStyleBackgroundColorBtn)
    ) {
      let color = chatStyleBackgroundColorBtn.style.backgroundColor
      setChatStylePreviewColor(color)
    } else {
      return
    }
  })
}
if (backgroundCustomColorBtn)
  backgroundCustomColorBtn.addEventListener("input", () => {
    let color = backgroundCustomColorBtn.value
    backgroundCustomColorBtn.style.backgroundColor = color
    backgroundCustomColorLabel.style.color = color
    setChatStylePreviewColor(color)
  })
if (chatStyleBackgroundRemoveBtn)
  chatStyleBackgroundRemoveBtn.addEventListener("click", () => {
    removeChatStylePreviewColor()
  })
import Uppy from "@uppy/core"
import Dashboard from "@uppy/dashboard"
import Webcam from "@uppy/webcam"
import ImageEditor from "@uppy/image-editor"
import AwsS3Multipart from "@uppy/aws-s3-multipart"
import "@uppy/core/dist/style.css"
import "@uppy/dashboard/dist/style.css"
import "@uppy/webcam/dist/style.css"
import "@uppy/image-editor/dist/style.css"

const uppy = new Uppy({
  id: "chatBackgroundImage",
  autoProceed: false,
  allowMultipleUploadBatches: false,
  debug: false,
  onBeforeFileAdded: (currentFile, files) => {
    // currentFile.name = signupProfile.dataset.profileKey
    return currentFile
  },
  restrictions: {
    maxFileSize: 1024 * 1024 * 10,
    maxNumberOfFiles: 1,
    allowedFileTypes: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  },
  meta: { mediaType: "chat-background-image" },
  infoTimeout: 5000
})
  .use(Dashboard, {
    trigger: "#chatStyleBackgroundImageBtn",
    target: "body",
    inline: false,
    // plugins: ['Webcam'],
    thumbnailWidth: 300,
    proudlyDisplayPoweredByUppy: false,
    closeModalOnClickOutside: true,
    theme: "dark",
    locale: {
      strings: {
        dropPasteImportFiles: "Upload here or Drop file here 👇"
      }
    },
    note: "file-size: up to 10MB, file-type: [jpeg  jpg  gif  png]"
  })
  .use(Webcam, {
    target: Dashboard,
    mirror: true,
    modes: ["picture"],
    showRecordingLength: true
  })
  .use(ImageEditor, {
    target: Dashboard,
    quality: 0.8
  })
  .use(AwsS3Multipart, {
    limit: 4,
    companionUrl: `${location.origin}/companion`
  })

uppy.on("complete", result => {
  chatStylePreviewBox.style.backgroundImage = `url(
    ${result.successful[0].preview}
  )`
  // const image = document.createElement("img")
  // image.src = result.successful[0].preview
  // signupProfile.innerHTML = ""
  // signupProfile.appendChild(image)
  // signupProfile.dataset.profileKey = result.successful[0].s3Multipart.key
})
