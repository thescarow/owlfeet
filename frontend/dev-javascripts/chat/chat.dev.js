const allChatSection = document.getElementById("allChatSection")
const emptyChatSection = document.getElementById("emptyChatSection")
const activeChatSection = document.getElementById("activeChatSection")
const activeChatMessageContainer = document.getElementById(
  "activeChatMessageContainer"
)
let activeChatInputTextContent = document.getElementById(
  "activeChatInputTextContent"
)

let allChatChatBoxContainer = document.getElementById("allChatChatBoxContainer")

const activeChatInputContainer = document.getElementById(
  "activeChatInputContainer"
)
const activeChatInputAttachmentBox = document.getElementById(
  "activeChatInputAttachmentBox"
)
let isUserTyping = false
let lastActiveChatId = activeChatSection.dataset.chatId.toString()

import { v4 as uuidv4 } from "uuid"
;(async function () {
  if (!IS_INIT_CHAT_MODULE) {
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

        allChatSection.classList.remove("all-chat-section--open-active-chat")
        activeChatSection.classList.add("active-chat-section--hide")

        if (emptyChatSection.classList.contains("empty-chat-section--hide"))
          emptyChatSection.classList.remove("empty-chat-section--hide")
      }
    }

    document.addEventListener("DOMContentLoaded", checkChatState)
    window.addEventListener("popstate", checkChatState)

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // active chat message container

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // active chat input container

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
        adjustMessageContainerBottomPadding()
      },
      false
    )

    ///////////////////////////////////////////////////

    const { default: insertTextAtCursor } = await import(
      "insert-text-at-cursor"
    )
    const { Picker } = await import("emoji-mart")

    function getEmojiAndAddToInput(emoji) {
      insertTextAtCursor(activeChatInputTextContent, emoji.native)
    }

    const activeChatInputEmojiBtn = document.getElementById(
      "activeChatInputEmojiBtn"
    )
    const activeChatEmojiContainer = document.getElementById(
      "activeChatEmojiContainer"
    )

    let emojiPickerOptions = {
      parent: activeChatEmojiContainer,
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

    let emojiPicker = new Picker(emojiPickerOptions)

    activeChatInputEmojiBtn.addEventListener("click", () => {
      activeChatEmojiContainer.classList.toggle(
        "active-chat-emoji-container--hide"
      )
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ///////////////////////////////////////////////////////////// /////////////////////////////////////////////////////
    // const { checkTimeAndCreateNewMessage } = await import("./js/message.dev")
    // const { updateAllChatSection } = await import(
    //   "./js/updateAllChatSection.dev"
    // )

    const { default: Uppy } = await import("@uppy/core")
    const { default: Dashboard } = await import("@uppy/dashboard")
    const { default: Webcam } = await import("@uppy/webcam")
    const { default: ImageEditor } = await import("@uppy/image-editor")
    const { default: ScreenCapture } = await import("@uppy/screen-capture")
    const { default: Audio } = await import("@uppy/audio")
    const { default: RemoteSources } = await import("@uppy/remote-sources")
    const {
      default: Transloadit,
      COMPANION_URL,
      COMPANION_ALLOWED_HOSTS
    } = await import("@uppy/transloadit")

    await import("@uppy/core/dist/style.min.css")
    await import("@uppy/dashboard/dist/style.min.css")
    await import("@uppy/webcam/dist/style.min.css")
    await import("@uppy/image-editor/dist/style.min.css")
    await import("@uppy/screen-capture/dist/style.min.css")
    await import("@uppy/audio/dist/style.min.css")

    const uppy = new Uppy({
      id: "CHAT_MEDIA",
      autoProceed: false,
      allowMultipleUploadBatches: false,

      onBeforeFileAdded: (currentFile, files) => {
        if (!currentFile.type) {
          uppy.log(`Skipping file because it has no type`)
          uppy.info(`Skipping file because it has no type`, "error", 500)
          return false
        } else {
          const modifiedFile = {
            ...currentFile,
            name: `${Date.now()}`
          }
          return modifiedFile
        }
      },
      // onBeforeUpload: files => {
      //   // We’ll be careful to return a new object, not mutating the original `files`
      //   const updatedFiles = {}
      //   Object.keys(files).forEach(fileID => {
      //     updatedFiles[fileID] = {
      //       ...files[fileID],
      //       name: `${myCustomPrefix}__${files[fileID].name}`
      //     }
      //   })
      //   return updatedFiles
      // },
      restrictions: {
        maxFileSize: 1024 * 1024 * 200 * 1,
        minFileSize: null,
        maxTotalFileSize: 1024 * 1024 * 200 * 1,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: [
          ".jpg",
          ".jpeg",
          ".png",
          ".gif",
          ".svg",
          // "audio/*",
          "audio/mpeg",
          "audio/wav",
          "audio/x-wav",
          "audio/ogg",
          "audio/webm",
          // video
          "video/mp4",
          "video/webm",
          "video/ogg",
          "video/quicktime",
          "video/x-matroska"
        ]
      },

      infoTimeout: 5000,
      locale: {
        strings: {
          companionError: "first connect to provider"
        }
      }
    })
      .use(Dashboard, {
        trigger: "#activeChatInputAttachmentFileBtn",
        target: "body",
        inline: false,

        waitForThumbnailsBeforeUpload: false,
        showSelectedFiles: true,
        showRemoveButtonAfterComplete: false,
        singleFileFullScreen: true,
        closeModalOnClickOutside: true,
        closeAfterFinish: false,
        animateOpenClose: true,

        autoOpenFileEditor: false,
        disablePageScrollWhenModalOpen: true,
        proudlyDisplayPoweredByUppy: false,
        theme: "dark",
        locale: {
          strings: {
            dropPasteImportFiles: ""
          }
        }
        // note: "file-size: up to 10MB, file-type: [jpeg  jpg  gif  png]"
      })
      .use(Webcam, {
        target: Dashboard,
        countdown: false,
        modes: ["video-audio", "video-only", "picture"],
        mirror: true,
        videoConstraints: {},
        showVideoSourceDropdown: true,
        showRecordingLength: false,
        preferredImageMimeType: "image/jpeg",
        preferredVideoMimeType: null
      })
      .use(ImageEditor, { target: Dashboard })
      .use(ScreenCapture, { target: Dashboard, preferredVideoMimeType: null })
      .use(Audio, { target: Dashboard, showAudioSourceDropdown: true })
      .use(RemoteSources, {
        target: Dashboard,
        sources: [
          "Unsplash",
          "Instagram",
          "Facebook",
          "GoogleDrive",
          "OneDrive",
          "Dropbox",
          "Box",
          "Url",
          "Zoom"
        ],
        companionUrl: COMPANION_URL,
        companionAllowedHosts: COMPANION_ALLOWED_HOSTS
      })
      // .use(Unsplash, {
      //   target: Dashboard,
      //   companionUrl: COMPANION_URL,
      //   companionAllowedHosts: COMPANION_ALLOWED_HOSTS
      // })
      // .use(Instagram, {
      //   target: Dashboard,
      //   companionUrl: COMPANION_URL,
      //   companionAllowedHosts: COMPANION_ALLOWED_HOSTS
      // })
      .use(Transloadit, {
        waitForEncoding: true,
        waitForMetadata: true,
        // alwaysRunAssembly: false,
        // limit: 20
        assemblyOptions: {
          params: {
            auth: {
              key: "6811ee5b698f4aa0b05a0a65755841c0"
            },
            template_id: "0bedb1fefa9b4a8ba36f61fc541b618d"
            // notify_url: `${location.origin}/transloadit/notify/user-media-message`
          },
          fields: {
            mediaFolder: "chat-media"
          }
          // signature: "generated-signature"
        }
      })
    uppy.on("transloadit:complete", assembly => {
      let file = assembly.uploads[0]
      let mediaFolder = assembly.fields.mediaFolder
      let fileKey =
        mediaFolder + "/" + file.type + "/" + file.id + "-" + file.basename
      let fileTempUrl = file.tus_upload_url

      let userMessage = {}
      userMessage.chat = activeChatSection.dataset.chatId
      userMessage.hasMediaContent = true
      userMessage.hasDirectMediaContentPath = false
      userMessage.mediaContentType = file.type
      userMessage.mediaContentMimeType = file.mime
      userMessage.mediaContentPath = fileKey
      if (activeChatInputContainer.dataset.repliedTo !== "") {
        userMessage.isRepliedMessage = true
        userMessage.repliedTo = activeChatInputContainer.dataset.repliedTo
      } else {
        userMessage.isRepliedMessage = false
      }

      userMessage.clientMediaContentPath = fileTempUrl
      sendAndCreateClientUserMessage(userMessage, "media-content")
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
          userMessage.hasDirectMediaContentPath = true
          userMessage.mediaContentType = "youtube"
          userMessage.mediaContentMimeType = "video/mp4"
          userMessage.mediaContentPath =
            activeChatInputAttachmentYoutubeContent.value
          if (activeChatInputContainer.dataset.repliedTo !== "") {
            userMessage.isRepliedMessage = true
            userMessage.repliedTo = activeChatInputContainer.dataset.repliedTo
          } else {
            userMessage.isRepliedMessage = false
          }

          userMessage.clientMediaContentPath =
            activeChatInputAttachmentYoutubeContent.value
          activeChatInputAttachmentYoutubeContent.value = ""
          // createUserMessageSocket(userMessage)
          sendAndCreateClientUserMessage(userMessage, "youtube")

          // fetch("/message", {
          //   method: "POST", // or 'PUT'
          //   headers: {
          //     "Content-Type": "application/json"
          //   },
          //   body: JSON.stringify(userMessage)
          // })
          //   .then(response => {
          //     if (response.ok) {
          //       return response.json()
          //     }
          //     return Promise.reject(response)
          //   })
          //   .then(async data => {
          //     if (data.isSuccess) {
          //       checkTimeAndCreateNewMessage(data.message, true)
          //       closeReplyMessageBox()
          //       document
          //         .getElementById("activeChatInputAttachmentYoutubeBtnInputBox")
          //         .classList.add("input-attachment-btn-box__input-box--hide")
          //       updateAllChatSection(data.message)

          //     } else {
          //       let { createMainNotification } = await import(
          //         "../common/mainNotification.dev"
          //       )
          //       createMainNotification(data.error, "error")
          //     }
          //   })
          //   .catch(async err => {
          //     console.log(err)
          //     let { createMainNotification } = await import(
          //       "../common/mainNotification.dev"
          //     )
          //     createMainNotification(
          //       "Server Error In Sending Message, Please Try Again",
          //       "error"
          //     )
          //   })
        }
      }
    )

    /////////////////////////////////////////////////////////////
    // active chat input send btn

    const activeChatInputSendBtn = document.getElementById(
      "activeChatInputSendBtn"
    )
    if (activeChatInputSendBtn)
      activeChatInputSendBtn.addEventListener("click", async () => {
        sendTextMessage()
      })

    activeChatInputTextContent.addEventListener("keydown", async event => {
      if (event.key === "Enter" && !event.shiftKey) {
        // Prevent the default behavior of the Enter key
        event.preventDefault()
        sendTextMessage()
      } else if (event.key === "Enter" && event.shiftKey) {
        // Simulate the press of the enter key
        var enterKeyEvent = new KeyboardEvent("keydown", {
          key: "Enter",
          keyCode: 13,
          code: "Enter",
          which: 13,
          keyCodeVal: 13,
          bubbles: true
        })

        this.dispatchEvent(enterKeyEvent)
        // // Insert a new line in the input field
        // const inputText = activeChatInputTextContent.value
        // const selectionStart = activeChatInputTextContent.selectionStart
        // const selectionEnd = activeChatInputTextContent.selectionEnd

        // // Insert a new line at the current cursor position
        // const newText =
        //   inputText.substring(0, selectionStart) +
        //   "\n" +
        //   inputText.substring(selectionEnd)

        // // Update the input field value and cursor position
        // activeChatInputTextContent.value = newText
        // activeChatInputTextContent.selectionStart = selectionStart + 1
        // activeChatInputTextContent.selectionEnd = selectionStart + 1
      }
    })
    async function sendTextMessage() {
      let userMessage = {}
      if (
        activeChatInputTextContent.value.trim() !== "" &&
        activeChatSection.dataset.chatId !== ""
      ) {
        userMessage.chat = activeChatSection.dataset.chatId
        userMessage.hasMediaContent = false
        userMessage.textContent = activeChatInputTextContent.value.trim()
        if (activeChatInputContainer.dataset.repliedTo !== "") {
          userMessage.isRepliedMessage = true
          userMessage.repliedTo = activeChatInputContainer.dataset.repliedTo
        } else {
          userMessage.isRepliedMessage = false
        }
        activeChatInputTextContent.value = ""
        if (activeChatSection.dataset.chatId !== "") {
          let { sendChatMessageStopTypingSocket } = await import(
            "../socket/event-emitter/chat-socket"
          )
          sendChatMessageStopTypingSocket(activeChatSection.dataset.chatId)
          isUserTyping = false
        }
        sendAndCreateClientUserMessage(userMessage, "text")
      }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // active-chat-input-attachment-box

    const activeChatInputAttachmentBoxBtn = document.getElementById(
      "activeChatInputAttachmentBoxBtn"
    )

    activeChatInputAttachmentBoxBtn.addEventListener("click", () => {
      if (
        activeChatInputAttachmentBoxBtn.classList.contains(
          "active-chat-input-attachment-box-btn--selected"
        )
      ) {
        openActiveChatInputBox()
      } else {
        openActivechatInputAttachmentBox()
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
        "input-attachment-btn-box__input-box--hide"
      )
    })

    initialiseEventForChatModule()

    IS_INIT_CHAT_MODULE = true
  }
})()

async function sendAndCreateClientUserMessage(userMessage, type) {
  let { sendCreateUserMessageSocket } = await import(
    "../socket/event-emitter/message-socket"
  )
  let { checkTimeAndCreateNewClientUserMessage } = await import(
    "./js/message.dev"
  )

  userMessage.clientMessageId = uuidv4()

  checkTimeAndCreateNewClientUserMessage(userMessage, true)

  let { closeReplyMessageBox } = await import("./js/replyMessageBox.dev")
  closeReplyMessageBox()
  if (type === "media-content") {
  } else if (type === "youtube") {
    document
      .getElementById("activeChatInputAttachmentYoutubeBtnInputBox")
      .classList.add("input-attachment-btn-box__input-box--hide")
  } else if (type === "text") {
    activeChatInputAttachmentBox.classList.remove(
      "active-chat-input-attachment-box--hide"
    )
    activeChatInputTextContent.style.height = "auto"
    activeChatInputTextContent.style.height =
      activeChatInputTextContent.scrollHeight + "px"
    if (parseInt(activeChatInputTextContent.style.height.slice(0, -2)) <= 40) {
      activeChatMessageContainer.style.paddingBottom = "60px"
    } else {
      activeChatMessageContainer.style.paddingBottom =
        activeChatInputTextContent.style.height
    }
    activeChatMessageContainer.scrollTop =
      activeChatMessageContainer.scrollHeight
  }
  sendCreateUserMessageSocket(userMessage)
}

export function openActivechatInputAttachmentBox() {
  document
    .getElementById("activeChatInputAttachmentBoxBtn")
    .classList.add("active-chat-input-attachment-box-btn--selected")

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
  document
    .getElementById("activeChatInputAttachmentYoutubeBtnInputBox")
    .classList.add("input-attachment-btn-box__input-box--hide")
  adjustMessageContainerBottomPadding()
}
export function openActiveChatInputBox() {
  document
    .getElementById("activeChatInputAttachmentBoxBtn")
    .classList.remove("active-chat-input-attachment-box-btn--selected")
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
  adjustMessageContainerBottomPadding()
}

export function adjustMessageContainerBottomPadding() {
  activeChatMessageContainer.style.paddingBottom =
    activeChatInputContainer.clientHeight + 5 + "px"
  activeChatMessageContainer.scrollTop = activeChatMessageContainer.scrollHeight
}

function initialiseEventForChatModule() {
  // initialize event to active chat

  let activeChatInnerModal = document.getElementById("activeChatInnerModal")
  let activeChatInnerModalCloseBtn = document.getElementById(
    "activeChatInnerModalCloseBtn"
  )
  activeChatInnerModalCloseBtn.addEventListener("click", () => {
    if (!activeChatInnerModal.classList.contains("hide"))
      activeChatInnerModal.classList.add("hide")
  })

  // active chat to all chat btn
  const ActiveChatToAllChatBtn = document.getElementById(
    "ActiveChatToAllChatBtn"
  )
  ActiveChatToAllChatBtn.addEventListener("click", async () => {
    location.hash = ""
    if (activeChatSection.dataset.chatId !== "") {
      let { sendChatMessageStopTypingSocket } = await import(
        "../socket/event-emitter/chat-socket"
      )
      sendChatMessageStopTypingSocket(activeChatSection.dataset.chatId)
      isUserTyping = false
    }
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
  let activeChatCallBtn = document.getElementById("activeChatCallBtn")
  if (activeChatCallBtn) {
    activeChatCallBtn.addEventListener("click", async () => {
      let activeChatId = activeChatSection.dataset.chatId
      if (activeChatId.toString() !== "") {
        openNewTab(`/call/?chat=${activeChatId}`)
      }
    })
  }

  let activeChatCallRoomBox = document.getElementById("activeChatCallRoomBox")
  if (activeChatCallRoomBox) {
    activeChatCallRoomBox.addEventListener("click", async () => {
      let callRoomId = activeChatCallRoomBox.dataset.callRoomId
      if (callRoomId.toString() !== "") {
        openNewTab(`/call/?room=${callRoomId}`)
      }
    })
  }

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

  document
    .getElementById("activeChatInputReplyBoxCloseBtn")
    .addEventListener("click", async () => {
      let { closeReplyMessageBox } = await import("./js/replyMessageBox.dev")
      closeReplyMessageBox()
    })

  //send chat:message-typing event
  activeChatInputTextContent.addEventListener("input", async e => {
    if (activeChatSection.dataset.chatId !== "") {
      if (
        lastActiveChatId !== "" &&
        lastActiveChatId !== activeChatSection.dataset.chatId
      ) {
        let { sendChatMessageStopTypingSocket } = await import(
          "../socket/event-emitter/chat-socket"
        )
        sendChatMessageStopTypingSocket(lastActiveChatId)
        isUserTyping = false
        lastActiveChatId = activeChatSection.dataset.chatId.toString()
      }

      lastActiveChatId = activeChatSection.dataset.chatId.toString()
      let chatId = activeChatSection.dataset.chatId.toString()

      const inputValue = activeChatInputTextContent.value.trim()

      if (inputValue && !isUserTyping) {
        isUserTyping = true
        let { sendChatMessageStartTypingSocket } = await import(
          "../socket/event-emitter/chat-socket"
        )
        sendChatMessageStartTypingSocket(chatId)
      } else if (!inputValue && isUserTyping) {
        isUserTyping = false
        let { sendChatMessageStopTypingSocket } = await import(
          "../socket/event-emitter/chat-socket"
        )
        sendChatMessageStopTypingSocket(chatId)
      }
    }
  })

  allChatChatBoxContainer.addEventListener("click", async e => {
    let chatBox = e.target.closest(`.chat-box`)

    if (chatBox && allChatChatBoxContainer.contains(chatBox)) {
      let chatId = chatBox.dataset.chatId
      if (chatId) {
        let { fetchActiveChat } = await import("./js/fetchActiveChat.dev")
        fetchActiveChat(chatId)
      }
    } else {
      return
    }
  })

  let activeChatMessageContainer = document.getElementById(
    "activeChatMessageContainer"
  )
  activeChatMessageContainer.addEventListener("click", async e => {
    let userMessageBox = e.target.closest(`.active-chat-user-message-box`)
    let userMessageBoxBtn = e.target.closest(
      `.active-chat-user-message-box__btn[data-message-box-btn ="user"]`
    )
    let userMessageContentBox = e.target.closest(
      `.active-chat-user-message-box__content-box`
    )

    if (
      userMessageBoxBtn &&
      activeChatMessageContainer.contains(userMessageBoxBtn)
    ) {
      userMessageBox.classList.add("active-chat-user-message-box--selected")
      let { createUserMessageOptionModal } = await import(
        "./js/userMessageOptionModal.dev"
      )

      createUserMessageOptionModal(userMessageBox)
    } else if (
      userMessageContentBox &&
      activeChatMessageContainer.contains(userMessageContentBox)
    ) {
      if (
        userMessageBox.classList.contains(
          "active-chat-user-message-box--replied-message"
        )
      ) {
        let repliedMessageId = userMessageBox.dataset.repliedMessageId
        let repliedUserMessageBox = document.querySelector(
          `.active-chat-user-message-box[data-message-id="${repliedMessageId}"]`
        )
        if (repliedUserMessageBox) {
          repliedUserMessageBox.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          })
          repliedUserMessageBox.classList.add(
            "active-chat-user-message-box--highlight"
          )
          setTimeout(function () {
            repliedUserMessageBox.classList.remove(
              "active-chat-user-message-box--highlight"
            )
          }, 1000)
        }
      }
    } else {
      return
    }
  })
  activeChatMessageContainer.addEventListener("dblclick", async e => {
    let userMessageBox = e.target.closest(`.active-chat-user-message-box`)

    if (userMessageBox && activeChatMessageContainer.contains(userMessageBox)) {
      let messageId = userMessageBox.dataset.messageId
      let { openReplyMessageBox } = await import("./js/replyMessageBox.dev.js")

      openReplyMessageBox(messageId)
    } else {
      return
    }
  })
  window.addEventListener("click", e => {
    if (e.target === activeChatInnerModal) {
      if (!activeChatInnerModal.classList.contains("hide"))
        activeChatInnerModal.classList.add("hide")
    }
  })
}
function openNewTab(url) {
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("target", "_blank")
  link.setAttribute("rel", "noopener noreferrer")

  // simulate a click on the link to open the new tab
  link.click()
}
