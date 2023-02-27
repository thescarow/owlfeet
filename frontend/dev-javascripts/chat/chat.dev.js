const { createMainNotification } = require("../common/mainNotification.dev")

;(async function () {
  const allChatSection = document.getElementById("allChatSection")
  const activeChatSection = document.getElementById("activeChatSection")
  async function checkChatState() {
    // console.log(location)
    // console.log(history)
    if (location.hash) {
      let chatId = location.hash.replace("#", "")
      let { fetchActiveChat } = await import("./js/fetchActiveChat.dev")
      fetchActiveChat(chatId)
    } else {
      // history.replaceState({}, "", "")
      document.title = "Chats"
      allChatSection.classList.remove("all-chat-section--hide")
      activeChatSection.classList.add("active-chat-section--hide")
    }
  }

  document.addEventListener("DOMContentLoaded", checkChatState)
  window.addEventListener("popstate", checkChatState)

  const allChatBox = [...document.getElementsByClassName("chat-box")]
  allChatBox.forEach(chatBox => {
    chatBox.addEventListener("click", async () => {
      let chatId = chatBox.dataset.chatId
      let { fetchActiveChat } = await import("./js/fetchActiveChat.dev")
      fetchActiveChat(chatId)
    })
  })
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // active chat message container
  const activeChatMessageContainer = document.getElementById(
    "activeChatMessageContainer"
  )

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // active chat input container

  const activeChatInputTextContent = document.getElementById(
    "activeChatInputTextContent"
  )
  const activeChatInputAttachmentBox = document.getElementById(
    "activeChatInputAttachmentBox"
  )

  activeChatInputTextContent.addEventListener(
    "input",
    () => {
      if (activeChatInputTextContent.value === "") {
        activeChatInputAttachmentBox.classList.remove(
          "active-chat-input-attachment-box--hide"
        )
      } else {
        if (
          !activeChatInputAttachmentBox.classList.contains(
            "active-chat-input-attachment-box--hide"
          )
        ) {
          activeChatInputAttachmentBox.classList.add(
            "active-chat-input-attachment-box--hide"
          )
        }
      }
      activeChatInputTextContent.style.height = "auto"
      activeChatInputTextContent.style.height =
        activeChatInputTextContent.scrollHeight + "px"
      activeChatInputTextContent.style.paddingTop = 6 + "px"
      activeChatInputTextContent.style.paddingBottom = 6 + "px"

      // because 40px is min height of textarea
      if (
        parseInt(activeChatInputTextContent.style.height.slice(0, -2)) <= 40
      ) {
        activeChatMessageContainer.style.paddingBottom = "60px"
      } else {
        activeChatMessageContainer.style.paddingBottom =
          activeChatInputTextContent.clientHeight + 10 + "px"
      }
      activeChatMessageContainer.scrollTop =
        activeChatMessageContainer.scrollHeight + 1000
    },
    false
  )

  ///////////////////////////////////////////////////

  const { default: insertTextAtCursor } = await import("insert-text-at-cursor")
  const { Picker } = await import("emoji-mart")

  function getEmojiAndAddToInput(emoji) {
    insertTextAtCursor(activeChatInputTextContent, emoji.native)
  }

  const activeChatInputEmojiBtn = document.getElementById(
    "activeChatInputEmojiBtn"
  )
  const activeChatInputEmojiContainer = document.getElementById(
    "activeChatInputEmojiContainer"
  )

  let emojiPickerOptions = {
    parent: activeChatInputEmojiContainer,
    data: async () => {
      const data = await import("@emoji-mart/data")
      return data
    },
    onEmojiSelect: getEmojiAndAddToInput,
    // onClickOutside: () => {
    //   console.log("hello")
    // },
    autoFocus: false,
    emojiButtonColors: [
      "rgba(155, 223, 88, 0.7)",
      "rgba(155, 40, 88, 0.7)",
      "rgba(40, 223, 88, 0.7)",
      "rgba(155, 223, 88, 0.7)",
      "rgba(40, 223, 223, 0.7)",
      "rgba(20, 150, 150, 0.7)",
      "rgba(150, 150, 20, 0.7)",
      "rgba(150, 20, 150, 0.7)"
    ],
    emojiButtonSize: 40,
    // emojiSize: 25,
    emojiVersion: 14,
    icons: "auto",
    maxFrequentRows: 2,
    navPosition: "bottom",
    previewPosition: "none",
    set: "native",
    dynamicWidth: true
  }

  new Picker(emojiPickerOptions)

  activeChatInputEmojiBtn.addEventListener("click", () => {
    activeChatInputEmojiContainer.classList.toggle(
      "active-chat-input-box__emoji-container--hide"
    )
  })

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // input message creation
  // ///////////////////////////////////////////////////////////// /////////////////////////////////////////////////////
  const { checkTimeAndCreateNewMessage } = await import("./js/message.dev")
  const { updateAllChatSection } = await import("./js/updateAllChatSection.dev")
  const { default: Uppy } = await import("@uppy/core")
  const { default: Dashboard } = await import("@uppy/dashboard")
  const { default: Webcam } = await import("@uppy/webcam")
  const { default: ImageEditor } = await import("@uppy/image-editor")
  const { default: Audio } = await import("@uppy/audio")

  await import("@uppy/core/dist/style.css")
  await import("@uppy/dashboard/dist/style.css")
  await import("@uppy/webcam/dist/style.css")
  await import("@uppy/image-editor/dist/style.css")
  await import("@uppy/audio/dist/style.css")

  const { default: AwsS3Multipart } = await import("@uppy/aws-s3-multipart")

  const uppy = new Uppy({
    id: "chatMedia",
    autoProceed: false,
    allowMultipleUploadBatches: true,
    debug: false,
    onBeforeFileAdded: (currentFile, files) => {
      console.log(currentFile)
      if (!currentFile.type) {
        uppy.log(`Skipping file because it has no type`)
        uppy.info(`Skipping file because it has no type`, "error", 500)
        return false
      } else {
        currentFile.name = ""
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
      maxFileSize: 1024 * 1024 * 100,
      minFileSize: null,
      maxTotalFileSize: 1024 * 1024 * 100 * 10,
      maxNumberOfFiles: 10,
      minNumberOfFiles: 1,
      allowedFileTypes: [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/x-png",

        "audio/mpeg",
        "audio/wav",
        "audio/x-wav",
        "audio/ogg",
        "audio/webm",
        // "audio/*",

        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/quicktime",
        "video/x-matroska"
      ]
    },
    meta: { mediaType: "chat-media" },
    infoTimeout: 5000
  })
    .use(Dashboard, {
      trigger: "#activeChatInputAttachmentFileBtn",
      target: "body",
      inline: false,
      plugins: ["Webcam", "ImageEditor", "Audio"],
      thumbnailWidth: 300,
      // closeAfterFinish: false,
      showRemoveButtonAfterComplete: false,
      disablePageScrollWhenModalOpen: true,
      closeModalOnClickOutside: true,

      theme: "light",
      locale: {
        strings: {}
      },
      note: "Images, Audios and videos only, up to 10 files, 1 file up to 100 MB",
      proudlyDisplayPoweredByUppy: false
    })
    .use(Webcam, {
      target: Dashboard,
      title: "Camera",
      mirror: true,
      modes: ["video-audio", "video-only", "picture"],
      preferredVideoMimeType: "video/mp4",
      showRecordingLength: true
    })
    .use(ImageEditor, {
      target: Dashboard,
      quality: 0.8
    })
    .use(Audio, {
      id: "Audio",
      target: Dashboard,
      showAudioSourceDropdown: false
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
    let userMessage = {}
    userMessage.chat = activeChatSection.dataset.chatId
    userMessage.hasMediaContent = true
    userMessage.mediaContentType = file.type.split("/")[0]
    userMessage.mediaContentMimeType = file.type
    userMessage.mediaContentPath = file.s3Multipart.key
    fetch("/message", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userMessage)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then(data => {
        if (data.isSuccess) {
          checkTimeAndCreateNewMessage(data.message, activeChatMessageContainer)
          activeChatAttachmentBtnModal.classList.add("chat-modal--hide")
          updateAllChatSection(data.message)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log(err)
        createMainNotification(
          "Server Error In Sending Message, Please Try Again",
          "error"
        )
      })
  })

  // active chat input youtube send btn
  const activeChatInputAttachmentYoutubeContentSendBtn =
    document.getElementById("activeChatInputAttachmentYoutubeContentSendBtn")

  const activeChatInputAttachmentYoutubeContent = document.getElementById(
    "activeChatInputAttachmentYoutubeContent"
  )
  activeChatInputAttachmentYoutubeContentSendBtn.addEventListener(
    "click",
    () => {
      let userMessage = {}

      if (activeChatInputAttachmentYoutubeContent.value !== "") {
        userMessage.chat = activeChatSection.dataset.chatId
        userMessage.hasMediaContent = true
        userMessage.mediaContentType = "youtube"
        userMessage.mediaContentMimeType = "video/mp4"
        userMessage.mediaContentPath =
          activeChatInputAttachmentYoutubeContent.value

        activeChatInputAttachmentYoutubeContent.value = ""
        fetch("/message", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userMessage)
        })
          .then(response => {
            if (response.ok) {
              return response.json()
            }
            return Promise.reject(response)
          })
          .then(data => {
            if (data.isSuccess) {
              checkTimeAndCreateNewMessage(
                data.message,
                activeChatMessageContainer
              )
              updateAllChatSection(data.message)
              activeChatInputAttachmentYoutubeBtnInputBox.classList.add(
                "attachment-btn-box__input-box--hide"
              )
            } else {
              createMainNotification(data.error, "error")
            }
          })
          .catch(err => {
            console.log(err)
            createMainNotification(
              "Server Error In Sending Message, Please Try Again",
              "error"
            )
          })
      }
    }
  )

  /////////////////////////////////////////////////////////////
  // active chat input send btn

  const activeChatInputSendBtn = document.getElementById(
    "activeChatInputSendBtn"
  )
  activeChatInputSendBtn.addEventListener("click", () => {
    let userMessage = {}
    if (
      activeChatInputTextContent.value.trim() !== "" &&
      activeChatSection.dataset.chatId !== ""
    ) {
      userMessage.chat = activeChatSection.dataset.chatId
      userMessage.hasMediaContent = false
      userMessage.textContent = activeChatInputTextContent.value.trim()
      activeChatInputTextContent.value = ""
      fetch("/message", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userMessage)
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then(data => {
          if (data.isSuccess) {
            activeChatInputAttachmentBox.classList.remove(
              "active-chat-input-attachment-box--hide"
            )
            activeChatInputTextContent.style.height = "auto"
            activeChatInputTextContent.style.height =
              activeChatInputTextContent.scrollHeight + "px"
            if (
              parseInt(activeChatInputTextContent.style.height.slice(0, -2)) <=
              40
            ) {
              activeChatMessageContainer.style.paddingBottom = "60px"
            } else {
              activeChatMessageContainer.style.paddingBottom =
                activeChatInputTextContent.style.height
            }
            checkTimeAndCreateNewMessage(
              data.message,
              activeChatMessageContainer
            )
            updateAllChatSection(data.message)
            activeChatMessageContainer.scrollTop =
              activeChatMessageContainer.scrollHeight + 1000
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log(err)
          createMainNotification(
            "Server Error In Sending Message, Please Try Again",
            "error"
          )
        })
    }
  })

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // active-chat-input-attachment-box

  const activeChatInputAttachmentBoxBtn = document.getElementById(
    "activeChatInputAttachmentBoxBtn"
  )

  activeChatInputAttachmentBoxBtn.addEventListener("click", () => {
    if (
      activeChatInputAttachmentBoxBtn.classList.contains(
        "active-chat-input-attachment-box__btn--selected"
      )
    ) {
      openActiveChatInputBox()
    } else {
      openActivechatInputAttachmentBox
    }
  })

  const activeChatInputAttachmentYoutubeBtn = document.getElementById(
    "activeChatInputAttachmentYoutubeBtn"
  )
  const activeChatInputAttachmentYoutubeBtnInputBox = document.getElementById(
    "activeChatInputAttachmentYoutubeBtnInputBox"
  )
  activeChatInputAttachmentYoutubeBtn.addEventListener("click", () => {
    activeChatInputAttachmentYoutubeBtnInputBox.classList.toggle(
      "attachment-btn-box__input-box--hide"
    )
  })

  function openActivechatInputAttachmentBox() {
    document
      .getElementById("activeChatInputAttachmentBoxBtn")
      .classList.add("active-chat-input-attachment-box__btn--selected")

    const activeChatInputAttachmentBox = document.getElementById(
      "activeChatInputAttachmentBox"
    )
    activeChatInputAttachmentBox.classList.add(
      "active-chat-input-attachment-box--selected"
    )
    activeChatInputAttachmentBox.classList.remove(
      "active-chat-input-attachment-box--hide"
    )
    document
      .getElementById("activeChatInputAttachmentBtnContainer")
      .classList.remove("input-attachment-btn-container--hide")
    document
      .getElementById("activeChatInputBox")
      .classList.add("active-chat-input-box--hide")

    document
      .getElementById("activeChatInputSendBox")
      .classList.add("active-chat-input-send-box--hide")
  }
  function openActiveChatInputBox() {
    document
      .getElementById("activeChatInputAttachmentBoxBtn")
      .classList.remove("active-chat-input-attachment-box__btn--selected")
    document
      .getElementById("activeChatInputAttachmentBox")
      .classList.remove("active-chat-input-attachment-box--selected")

    document
      .getElementById("activeChatInputAttachmentBtnContainer")
      .classList.add("input-attachment-btn-container--hide")

    document
      .getElementById("activeChatInputBox")
      .classList.remove("active-chat-input-box--hide")

    document
      .getElementById("activeChatInputSendBox")
      .classList.remove("active-chat-input-send-box--hide")
  }

  // initialize event to active chat
  ////////////////////
  ///////////////////
  // active chat to all chat btn
  const ActiveChatToAllChatBtn = document.getElementById(
    "ActiveChatToAllChatBtn"
  )
  ActiveChatToAllChatBtn.addEventListener("click", () => {
    location.hash = ""
  })

  //active chat header pic and active chat header name
  let activeChatHeaderPic = document.getElementById("activeChatHeaderPic")

  activeChatHeaderPic.addEventListener("click", async () => {
    let activeChatId = activeChatSection.dataset.chatId
    if (activeChatId != "") {
      let { createActiveChatInfoModal } = await import(
        "./js/createActiveChatInfoModal.dev.js"
      )
      createActiveChatInfoModal(activeChatId)
    }
  })
  let activeChatHeaderName = document.getElementById("activeChatHeaderName")
  activeChatHeaderName.addEventListener("click", async () => {
    let activeChatId = activeChatSection.dataset.chatId
    if (activeChatId != "") {
      let { createActiveChatInfoModal } = await import(
        "./js/createActiveChatInfoModal.dev.js"
      )
      createActiveChatInfoModal(activeChatId)
    }
  })

  ////////////////////
  // create new group chat btn
  // group chat form Modal and assign event to btn
  const createNewGroupChatBtn = document.getElementById("createNewGroupChatBtn")
  createNewGroupChatBtn.addEventListener("click", async () => {
    let { createGroupChatFormModal } = await import(
      "./js/createGroupChatFormModal.dev"
    )
    createGroupChatFormModal()
  })
})()
