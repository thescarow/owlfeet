"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_chat_js_replyMessageBox_dev_js"],{

/***/ "./dev-javascripts/chat/js/replyMessageBox.dev.js":
/*!********************************************************!*\
  !*** ./dev-javascripts/chat/js/replyMessageBox.dev.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeReplyMessageBox\": () => (/* binding */ closeReplyMessageBox),\n/* harmony export */   \"openReplyMessageBox\": () => (/* binding */ openReplyMessageBox)\n/* harmony export */ });\nlet svg_mediaImageIcon = `<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M57.5 20C53.5 20 50 23.5 50 27.5C50 31.5 53.5 35 57.5 35C61.5 35 65 31.5 65 27.5C65 23.5 61.5 20 57.5 20ZM85 0H15C6.5 0 0 6.5 0 15V85C0 93.5 6.5 100 15 100H85C93.5 100 100 93.5 100 85V15C100 6.5 93.5 0 85 0ZM90 59.5L80.5 50C74.5 44.5 65 44.5 59.5 50L55 54.5L40.5 40C34.5 34.5 25 34.5 19.5 40L10 49.5V15C10 12 12 10 15 10H85C88 10 90 12 90 15V59.5Z\" />\n</svg>\n`;\nlet svg_mediaVideoIcon = `<svg width=\"100\" height=\"65\" viewBox=\"0 0 100 65\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M94.9525 9.98214C93.4341 9.34699 91.7483 9.14039 90.1046 9.38803C88.4608 9.63566 86.9317 10.3266 85.7071 11.375L74.9625 20.6607V13.9286C74.9625 10.2345 73.383 6.6917 70.5713 4.07958C67.7597 1.46747 63.9463 0 59.97 0H14.9925C11.0162 0 7.20284 1.46747 4.3912 4.07958C1.57956 6.6917 0 10.2345 0 13.9286V51.0714C0 54.7655 1.57956 58.3083 4.3912 60.9204C7.20284 63.5325 11.0162 65 14.9925 65H59.97C63.9463 65 67.7597 63.5325 70.5713 60.9204C73.383 58.3083 74.9625 54.7655 74.9625 51.0714V44.3393L85.7571 53.625C87.3463 54.9614 89.4107 55.7055 91.5542 55.7143C92.7438 55.7117 93.9192 55.4743 95.0025 55.0179C96.4765 54.4639 97.7392 53.5143 98.6294 52.2903C99.5196 51.0663 99.9968 49.6236 100 48.1464V16.8536C99.9928 15.371 99.5082 13.9244 98.6087 12.6999C97.7092 11.4753 96.4359 10.5288 94.9525 9.98214Z\" />\n</svg>`;\nlet svg_mediaAudioIcon = `<svg width=\"70\" height=\"100\" viewBox=\"0 0 70 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M35 65C40.3043 65 45.3914 62.8929 49.1421 59.1421C52.8929 55.3914 55 50.3043 55 45V20C55 14.6957 52.8929 9.60859 49.1421 5.85786C45.3914 2.10714 40.3043 0 35 0C29.6957 0 24.6086 2.10714 20.8579 5.85786C17.1071 9.60859 15 14.6957 15 20V45C15 50.3043 17.1071 55.3914 20.8579 59.1421C24.6086 62.8929 29.6957 65 35 65Z\" />\n<path d=\"M70 45C70 43.6739 69.4732 42.4021 68.5355 41.4645C67.5979 40.5268 66.3261 40 65 40C63.6739 40 62.4021 40.5268 61.4645 41.4645C60.5268 42.4021 60 43.6739 60 45C60 51.6304 57.3661 57.9893 52.6777 62.6777C47.9893 67.3661 41.6304 70 35 70C28.3696 70 22.0107 67.3661 17.3223 62.6777C12.6339 57.9893 10 51.6304 10 45C10 43.6739 9.47321 42.4021 8.53553 41.4645C7.59785 40.5268 6.32608 40 5 40C3.67392 40 2.40215 40.5268 1.46447 41.4645C0.526785 42.4021 0 43.6739 0 45C0.00985554 53.4092 3.04704 61.5338 8.5559 67.8874C14.0648 74.2409 21.677 78.3987 30 79.6V90H19.45C18.2698 90 17.1379 90.4688 16.3034 91.3034C15.4688 92.1379 15 93.2698 15 94.45V95.55C15 96.7302 15.4688 97.8621 16.3034 98.6966C17.1379 99.5312 18.2698 100 19.45 100H50.55C51.7302 100 52.8621 99.5312 53.6966 98.6966C54.5312 97.8621 55 96.7302 55 95.55V94.45C55 93.2698 54.5312 92.1379 53.6966 91.3034C52.8621 90.4688 51.7302 90 50.55 90H40V79.6C48.323 78.3987 55.9352 74.2409 61.4441 67.8874C66.953 61.5338 69.9901 53.4092 70 45Z\" />\n</svg>\n`;\nlet svg_mediaYoutubeIcon = `<svg width=\"100\" height=\"68\" viewBox=\"0 0 100 68\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M99.977 23.9653C100.202 17.6732 98.7797 11.4282 95.8432 5.81006C93.8509 3.50481 91.0858 1.94914 88.03 1.4141C75.3903 0.304237 62.6984 -0.150661 50.0085 0.0513592C37.3649 -0.15983 24.7186 0.280389 12.1233 1.37015C9.63317 1.80849 7.32871 2.9388 5.49115 4.62315C1.40282 8.27179 0.948564 14.514 0.494306 19.7892C-0.164769 29.2737 -0.164769 38.7904 0.494306 48.2749C0.625724 51.244 1.08254 54.1911 1.85708 57.0668C2.4048 59.2871 3.51296 61.3412 5.08232 63.0453C6.93237 64.8189 9.2905 66.0135 11.8508 66.4742C21.6442 67.644 31.5121 68.1288 41.3776 67.9248C57.2766 68.1446 71.2224 67.9248 87.712 66.694C90.3351 66.2616 92.7597 65.0655 94.6621 63.2651C95.9339 62.0339 96.8838 60.5269 97.4331 58.8692C99.0577 54.0451 99.8556 48.9964 99.7953 43.923C99.977 41.4612 99.977 26.6029 99.977 23.9653ZM39.7423 46.5605V19.3496L66.6344 33.021C59.0937 37.0653 49.1454 41.6371 39.7423 46.5605Z\" />\n</svg>\n`;\nconst svg_mediaStickerIcon = `\n<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M66.6667 77.7778C66.6667 74.8309 67.8373 72.0048 69.921 69.921C72.0048 67.8373 74.8309 66.6667 77.7778 66.6667H100V16.6667C100 12.2464 98.2441 8.00716 95.1184 4.88155C91.9928 1.75595 87.7536 0 83.3333 0H16.6667C12.2464 0 8.00716 1.75595 4.88155 4.88155C1.75595 8.00716 0 12.2464 0 16.6667V83.3333C0 87.7536 1.75595 91.9928 4.88155 95.1184C8.00716 98.2441 12.2464 100 16.6667 100H66.6667V77.7778ZM66.6667 33.3333C67.7654 33.3333 68.8396 33.6592 69.7532 34.2696C70.6668 34.8801 71.3788 35.7477 71.7993 36.7629C72.2198 37.778 72.3298 38.8951 72.1155 39.9727C71.9011 41.0504 71.372 42.0403 70.595 42.8173C69.8181 43.5942 68.8282 44.1233 67.7505 44.3377C66.6728 44.5521 65.5558 44.442 64.5406 44.0216C63.5255 43.6011 62.6578 42.889 62.0474 41.9754C61.4369 41.0618 61.1111 39.9877 61.1111 38.8889C61.1111 37.4155 61.6964 36.0024 62.7383 34.9605C63.7802 33.9186 65.1932 33.3333 66.6667 33.3333ZM33.3333 33.3333C34.4321 33.3333 35.5062 33.6592 36.4198 34.2696C37.3334 34.8801 38.0455 35.7477 38.466 36.7629C38.8865 37.778 38.9965 38.8951 38.7821 39.9727C38.5678 41.0504 38.0387 42.0403 37.2617 42.8173C36.4847 43.5942 35.4948 44.1233 34.4172 44.3377C33.3395 44.5521 32.2225 44.442 31.2073 44.0216C30.1922 43.6011 29.3245 42.889 28.7141 41.9754C28.1036 41.0618 27.7778 39.9877 27.7778 38.8889C27.7778 37.4155 28.3631 36.0024 29.405 34.9605C30.4468 33.9186 31.8599 33.3333 33.3333 33.3333ZM28.8889 52.2222C29.3266 51.6386 29.875 51.1468 30.5028 50.7751C31.1306 50.4034 31.8254 50.159 32.5477 50.0558C33.2699 49.9527 34.0054 49.9927 34.7121 50.1738C35.4189 50.3549 36.083 50.6734 36.6667 51.1111C40.5132 53.996 45.1918 55.5556 50 55.5556C54.8082 55.5556 59.4867 53.996 63.3333 51.1111C63.917 50.6734 64.5811 50.3549 65.2879 50.1738C65.9946 49.9927 66.7301 49.9527 67.4523 50.0558C68.1746 50.159 68.8694 50.4034 69.4972 50.7751C70.125 51.1468 70.6734 51.6386 71.1111 52.2222C71.5488 52.8059 71.8673 53.47 72.0484 54.1768C72.2295 54.8835 72.2696 55.619 72.1664 56.3412C72.0632 57.0635 71.8188 57.7583 71.4471 58.3861C71.0754 59.0138 70.5837 59.5623 70 60C64.2301 64.3274 57.2123 66.6667 50 66.6667C42.7877 66.6667 35.7699 64.3274 30 60C29.4163 59.5623 28.9246 59.0138 28.5529 58.3861C28.1812 57.7583 27.9368 57.0635 27.8336 56.3412C27.7304 55.619 27.7705 54.8835 27.9516 54.1768C28.1327 53.47 28.4511 52.8059 28.8889 52.2222Z\" />\n<path d=\"M77.7778 96.7445L96.7445 77.7778H77.7778V96.7445Z\" />\n</svg>\n\n`;\nconst svg_mediaVideoClipIcon = `\n<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M83.2384 0H16.7616C12.3162 0 8.05279 2.19493 4.90937 6.10194C1.76595 10.0089 0 15.308 0 20.8333V79.1667C0 84.692 1.76595 89.991 4.90937 93.8981C8.05279 97.8051 12.3162 100 16.7616 100H83.2384C87.6838 100 91.9472 97.8051 95.0906 93.8981C98.234 89.991 100 84.692 100 79.1667V20.8333C100 15.308 98.234 10.0089 95.0906 6.10194C91.9472 2.19493 87.6838 0 83.2384 0ZM67.9517 55.5L40.4459 73.8333C39.7145 74.3239 38.8968 74.5816 38.0657 74.5833C36.7321 74.5833 35.453 73.9249 34.51 72.7528C33.567 71.5806 33.0372 69.9909 33.0372 68.3333V31.6667C33.038 30.5862 33.2641 29.5244 33.6935 28.585C34.1229 27.6455 34.7409 26.8605 35.4872 26.3064C36.2335 25.7524 37.0826 25.4483 37.9517 25.4238C38.8208 25.3993 39.6801 25.6552 40.4459 26.1667L67.9517 44.5C68.75 45.0355 69.4169 45.8295 69.8816 46.7977C70.3464 47.766 70.5918 48.8725 70.5918 50C70.5918 51.1275 70.3464 52.234 69.8816 53.2023C69.4169 54.1705 68.75 54.9645 67.9517 55.5ZM39.7419 35.1458L62.0181 50L39.7419 64.8542V35.1458Z\" />\n</svg>\n\n`;\nlet svg_deletedMessageBlankIcon = `<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M50 0C22.4304 0 0 22.4304 0 50C0 77.5696 22.4304 100 50 100C77.5696 100 100 77.5696 100 50C100 22.4304 77.5696 0 50 0ZM12.5 50C12.5 41.9136 15.0986 34.4372 19.4679 28.3058L71.6942 80.5321C65.5628 84.9014 58.0864 87.5 50 87.5C29.3213 87.5 12.5 70.6787 12.5 50ZM80.5319 71.6942L28.3056 19.4679C34.437 15.0986 41.9134 12.5 49.9998 12.5C70.6785 12.5 87.4998 29.3213 87.4998 50C87.4998 58.0864 84.9012 65.5628 80.5319 71.6942Z\" />\n</svg>\n`;\nlet activeChatInputReplyBox = document.getElementById(\"activeChatInputReplyBox\");\nlet activeChatInputReplyUser = document.getElementById(\"activeChatInputReplyUser\");\nlet activeChatInputReplyUserMessage = document.getElementById(\"activeChatInputReplyUserMessage\");\nasync function openReplyMessageBox(messageId) {\n  let userMessageBox = document.querySelector(`.active-chat-user-message-box[data-message-id=\"${messageId}\"]`);\n\n  if (userMessageBox) {\n    let messageContent, messageUser; //reply message user\n\n    messageUser = userMessageBox.dataset.senderId.toString() === loginUser._id.toString() ? \"You\" : userMessageBox.dataset.senderName;\n    activeChatInputReplyUser.textContent = messageUser;\n\n    if (userMessageBox.classList.contains(\"active-chat-user-message-box--deleted-message\")) {\n      activeChatInputReplyUserMessage.innerHTML = `${svg_deletedMessageBlankIcon} <span>This Message has been deleted.</span>`;\n      activeChatInputReplyBox.classList.add(\"active-chat-input-reply-box--deleted-message\");\n    } else {\n      activeChatInputReplyBox.classList.remove(\"active-chat-input-reply-box--deleted-message\");\n\n      if (userMessageBox.classList.contains(\"active-chat-user-message-box--text\")) {\n        let userMessageTextContent = userMessageBox.getElementsByClassName(\"active-chat-user-message-box__content--text\")[0];\n        if (userMessageTextContent) messageContent = userMessageTextContent.textContent;\n        activeChatInputReplyUserMessage.textContent = messageContent;\n      } else {\n        messageContent = \"\";\n\n        if (userMessageBox.classList.contains(\"active-chat-user-message-box--video\")) {\n          messageContent = `${svg_mediaVideoIcon} <span>Video</span>`;\n        }\n\n        if (userMessageBox.classList.contains(\"active-chat-user-message-box--audio\")) {\n          messageContent = `${svg_mediaAudioIcon} <span>Audio</span>`;\n        }\n\n        if (userMessageBox.classList.contains(\"active-chat-user-message-box--image\")) {\n          messageContent = `${svg_mediaImageIcon} <span>Image</span>`;\n        }\n\n        if (userMessageBox.classList.contains(\"active-chat-user-message-box--youtube\")) {\n          messageContent = `${svg_mediaYoutubeIcon} <span>Youtube</span>`;\n        }\n\n        if (userMessageBox.classList.contains(\"active-chat-user-message-box--video-clip\")) {\n          messageContent = `${svg_mediaVideoClipIcon} <span>Video clip</span>`;\n        }\n\n        if (userMessageBox.classList.contains(\"active-chat-user-message-box--sticker\")) {\n          messageContent = `${svg_mediaStickerIcon} <span>Sticker</span>`;\n        }\n\n        activeChatInputReplyUserMessage.innerHTML = messageContent;\n      }\n    }\n\n    document.getElementById(\"activeChatInputContainerEnableBox\").classList.add(\"active-chat-input-container__enable-box--reply\");\n    activeChatInputReplyBox.classList.remove(\"active-chat-input-reply-box--hide\");\n    document.getElementById(\"activeChatInputTextContent\").focus();\n    document.getElementById(\"activeChatInputContainer\").dataset.repliedTo = messageId;\n  }\n\n  let {\n    adjustMessageContainerBottomPadding\n  } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_chat_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../chat.dev */ \"./dev-javascripts/chat/chat.dev.js\"));\n  adjustMessageContainerBottomPadding();\n}\nasync function closeReplyMessageBox() {\n  document.getElementById(\"activeChatInputContainerEnableBox\").classList.remove(\"active-chat-input-container__enable-box--reply\");\n  activeChatInputReplyBox.classList.add(\"active-chat-input-reply-box--hide\");\n  document.getElementById(\"activeChatInputContainer\").dataset.repliedTo = \"\";\n  let {\n    adjustMessageContainerBottomPadding\n  } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_chat_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../chat.dev */ \"./dev-javascripts/chat/chat.dev.js\"));\n  adjustMessageContainerBottomPadding();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9yZXBseU1lc3NhZ2VCb3guZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSUEsa0JBQWtCLEdBQUk7QUFDMUI7QUFDQTtBQUNBLENBSEE7QUFJQSxJQUFJQyxrQkFBa0IsR0FBSTtBQUMxQjtBQUNBLE9BRkE7QUFHQSxJQUFJQyxrQkFBa0IsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBS0EsSUFBSUMsb0JBQW9CLEdBQUk7QUFDNUI7QUFDQTtBQUNBLENBSEE7QUFJQSxNQUFNQyxvQkFBb0IsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQU9BLE1BQU1DLHNCQUFzQixHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU1BLElBQUlDLDJCQUEyQixHQUFJO0FBQ25DO0FBQ0E7QUFDQSxDQUhBO0FBS0EsSUFBSUMsdUJBQXVCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix5QkFBeEIsQ0FBOUI7QUFFQSxJQUFJQyx3QkFBd0IsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQzdCLDBCQUQ2QixDQUEvQjtBQUdBLElBQUlFLCtCQUErQixHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FDcEMsaUNBRG9DLENBQXRDO0FBSU8sZUFBZUcsbUJBQWYsQ0FBbUNDLFNBQW5DLEVBQThDO0VBQ25ELElBQUlDLGNBQWMsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQ2xCLGtEQUFpREYsU0FBVSxJQUR6QyxDQUFyQjs7RUFHQSxJQUFJQyxjQUFKLEVBQW9CO0lBQ2xCLElBQUlFLGNBQUosRUFBb0JDLFdBQXBCLENBRGtCLENBRWxCOztJQUNBQSxXQUFXLEdBQ1RILGNBQWMsQ0FBQ0ksT0FBZixDQUF1QkMsUUFBdkIsQ0FBZ0NDLFFBQWhDLE9BQStDQyxTQUFTLENBQUNDLEdBQVYsQ0FBY0YsUUFBZCxFQUEvQyxHQUNJLEtBREosR0FFSU4sY0FBYyxDQUFDSSxP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LG1DQUFtQztBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2NoYXQvanMvcmVwbHlNZXNzYWdlQm94LmRldi5qcz9mYzNlIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzdmdfbWVkaWFJbWFnZUljb24gPSBgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNNTcuNSAyMEM1My41IDIwIDUwIDIzLjUgNTAgMjcuNUM1MCAzMS41IDUzLjUgMzUgNTcuNSAzNUM2MS41IDM1IDY1IDMxLjUgNjUgMjcuNUM2NSAyMy41IDYxLjUgMjAgNTcuNSAyMFpNODUgMEgxNUM2LjUgMCAwIDYuNSAwIDE1Vjg1QzAgOTMuNSA2LjUgMTAwIDE1IDEwMEg4NUM5My41IDEwMCAxMDAgOTMuNSAxMDAgODVWMTVDMTAwIDYuNSA5My41IDAgODUgMFpNOTAgNTkuNUw4MC41IDUwQzc0LjUgNDQuNSA2NSA0NC41IDU5LjUgNTBMNTUgNTQuNUw0MC41IDQwQzM0LjUgMzQuNSAyNSAzNC41IDE5LjUgNDBMMTAgNDkuNVYxNUMxMCAxMiAxMiAxMCAxNSAxMEg4NUM4OCAxMCA5MCAxMiA5MCAxNVY1OS41WlwiIC8+XHJcbjwvc3ZnPlxyXG5gXHJcbmxldCBzdmdfbWVkaWFWaWRlb0ljb24gPSBgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjY1XCIgdmlld0JveD1cIjAgMCAxMDAgNjVcIiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG48cGF0aCBkPVwiTTk0Ljk1MjUgOS45ODIxNEM5My40MzQxIDkuMzQ2OTkgOTEuNzQ4MyA5LjE0MDM5IDkwLjEwNDYgOS4zODgwM0M4OC40NjA4IDkuNjM1NjYgODYuOTMxNyAxMC4zMjY2IDg1LjcwNzEgMTEuMzc1TDc0Ljk2MjUgMjAuNjYwN1YxMy45Mjg2Qzc0Ljk2MjUgMTAuMjM0NSA3My4zODMgNi42OTE3IDcwLjU3MTMgNC4wNzk1OEM2Ny43NTk3IDEuNDY3NDcgNjMuOTQ2MyAwIDU5Ljk3IDBIMTQuOTkyNUMxMS4wMTYyIDAgNy4yMDI4NCAxLjQ2NzQ3IDQuMzkxMiA0LjA3OTU4QzEuNTc5NTYgNi42OTE3IDAgMTAuMjM0NSAwIDEzLjkyODZWNTEuMDcxNEMwIDU0Ljc2NTUgMS41Nzk1NiA1OC4zMDgzIDQuMzkxMiA2MC45MjA0QzcuMjAyODQgNjMuNTMyNSAxMS4wMTYyIDY1IDE0Ljk5MjUgNjVINTkuOTdDNjMuOTQ2MyA2NSA2Ny43NTk3IDYzLjUzMjUgNzAuNTcxMyA2MC45MjA0QzczLjM4MyA1OC4zMDgzIDc0Ljk2MjUgNTQuNzY1NSA3NC45NjI1IDUxLjA3MTRWNDQuMzM5M0w4NS43NTcxIDUzLjYyNUM4Ny4zNDYzIDU0Ljk2MTQgODkuNDEwNyA1NS43MDU1IDkxLjU1NDIgNTUuNzE0M0M5Mi43NDM4IDU1LjcxMTcgOTMuOTE5MiA1NS40NzQzIDk1LjAwMjUgNTUuMDE3OUM5Ni40NzY1IDU0LjQ2MzkgOTcuNzM5MiA1My41MTQzIDk4LjYyOTQgNTIuMjkwM0M5OS41MTk2IDUxLjA2NjMgOTkuOTk2OCA0OS42MjM2IDEwMCA0OC4xNDY0VjE2Ljg1MzZDOTkuOTkyOCAxNS4zNzEgOTkuNTA4MiAxMy45MjQ0IDk4LjYwODcgMTIuNjk5OUM5Ny43MDkyIDExLjQ3NTMgOTYuNDM1OSAxMC41Mjg4IDk0Ljk1MjUgOS45ODIxNFpcIiAvPlxyXG48L3N2Zz5gXHJcbmxldCBzdmdfbWVkaWFBdWRpb0ljb24gPSBgPHN2ZyB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCA3MCAxMDBcIiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG48cGF0aCBkPVwiTTM1IDY1QzQwLjMwNDMgNjUgNDUuMzkxNCA2Mi44OTI5IDQ5LjE0MjEgNTkuMTQyMUM1Mi44OTI5IDU1LjM5MTQgNTUgNTAuMzA0MyA1NSA0NVYyMEM1NSAxNC42OTU3IDUyLjg5MjkgOS42MDg1OSA0OS4xNDIxIDUuODU3ODZDNDUuMzkxNCAyLjEwNzE0IDQwLjMwNDMgMCAzNSAwQzI5LjY5NTcgMCAyNC42MDg2IDIuMTA3MTQgMjAuODU3OSA1Ljg1Nzg2QzE3LjEwNzEgOS42MDg1OSAxNSAxNC42OTU3IDE1IDIwVjQ1QzE1IDUwLjMwNDMgMTcuMTA3MSA1NS4zOTE0IDIwLjg1NzkgNTkuMTQyMUMyNC42MDg2IDYyLjg5MjkgMjkuNjk1NyA2NSAzNSA2NVpcIiAvPlxyXG48cGF0aCBkPVwiTTcwIDQ1QzcwIDQzLjY3MzkgNjkuNDczMiA0Mi40MDIxIDY4LjUzNTUgNDEuNDY0NUM2Ny41OTc5IDQwLjUyNjggNjYuMzI2MSA0MCA2NSA0MEM2My42NzM5IDQwIDYyLjQwMjEgNDAuNTI2OCA2MS40NjQ1IDQxLjQ2NDVDNjAuNTI2OCA0Mi40MDIxIDYwIDQzLjY3MzkgNjAgNDVDNjAgNTEuNjMwNCA1Ny4zNjYxIDU3Ljk4OTMgNTIuNjc3NyA2Mi42Nzc3QzQ3Ljk4OTMgNjcuMzY2MSA0MS42MzA0IDcwIDM1IDcwQzI4LjM2OTYgNzAgMjIuMDEwNyA2Ny4zNjYxIDE3LjMyMjMgNjIuNjc3N0MxMi42MzM5IDU3Ljk4OTMgMTAgNTEuNjMwNCAxMCA0NUMxMCA0My42NzM5IDkuNDczMjEgNDIuNDAyMSA4LjUzNTUzIDQxLjQ2NDVDNy41OTc4NSA0MC41MjY4IDYuMzI2MDggNDAgNSA0MEMzLjY3MzkyIDQwIDIuNDAyMTUgNDAuNTI2OCAxLjQ2NDQ3IDQxLjQ2NDVDMC41MjY3ODUgNDIuNDAyMSAwIDQzLjY3MzkgMCA0NUMwLjAwOTg1NTU0IDUzLjQwOTIgMy4wNDcwNCA2MS41MzM4IDguNTU1OSA2Ny44ODc0QzE0LjA2NDggNzQuMjQwOSAyMS42NzcgNzguMzk4NyAzMCA3OS42VjkwSDE5LjQ1QzE4LjI2OTggOTAgMTcuMTM3OSA5MC40Njg4IDE2LjMwMzQgOTEuMzAzNEMxNS40Njg4IDkyLjEzNzkgMTUgOTMuMjY5OCAxNSA5NC40NVY5NS41NUMxNSA5Ni43MzAyIDE1LjQ2ODggOTcuODYyMSAxNi4zMDM0IDk4LjY5NjZDMTcuMTM3OSA5OS41MzEyIDE4LjI2OTggMTAwIDE5LjQ1IDEwMEg1MC41NUM1MS43MzAyIDEwMCA1Mi44NjIxIDk5LjUzMTIgNTMuNjk2NiA5OC42OTY2QzU0LjUzMTIgOTcuODYyMSA1NSA5Ni43MzAyIDU1IDk1LjU1Vjk0LjQ1QzU1IDkzLjI2OTggNTQuNTMxMiA5Mi4xMzc5IDUzLjY5NjYgOTEuMzAzNEM1Mi44NjIxIDkwLjQ2ODggNTEuNzMwMiA5MCA1MC41NSA5MEg0MFY3OS42QzQ4LjMyMyA3OC4zOTg3IDU1LjkzNTIgNzQuMjQwOSA2MS40NDQxIDY3Ljg4NzRDNjYuOTUzIDYxLjUzMzggNjkuOTkwMSA1My40MDkyIDcwIDQ1WlwiIC8+XHJcbjwvc3ZnPlxyXG5gXHJcbmxldCBzdmdfbWVkaWFZb3V0dWJlSWNvbiA9IGA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiNjhcIiB2aWV3Qm94PVwiMCAwIDEwMCA2OFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNOTkuOTc3IDIzLjk2NTNDMTAwLjIwMiAxNy42NzMyIDk4Ljc3OTcgMTEuNDI4MiA5NS44NDMyIDUuODEwMDZDOTMuODUwOSAzLjUwNDgxIDkxLjA4NTggMS45NDkxNCA4OC4wMyAxLjQxNDFDNzUuMzkwMyAwLjMwNDIzNyA2Mi42OTg0IC0wLjE1MDY2MSA1MC4wMDg1IDAuMDUxMzU5MkMzNy4zNjQ5IC0wLjE1OTgzIDI0LjcxODYgMC4yODAzODkgMTIuMTIzMyAxLjM3MDE1QzkuNjMzMTcgMS44MDg0OSA3LjMyODcxIDIuOTM4OCA1LjQ5MTE1IDQuNjIzMTVDMS40MDI4MiA4LjI3MTc5IDAuOTQ4NTY0IDE0LjUxNCAwLjQ5NDMwNiAxOS43ODkyQy0wLjE2NDc2OSAyOS4yNzM3IC0wLjE2NDc2OSAzOC43OTA0IDAuNDk0MzA2IDQ4LjI3NDlDMC42MjU3MjQgNTEuMjQ0IDEuMDgyNTQgNTQuMTkxMSAxLjg1NzA4IDU3LjA2NjhDMi40MDQ4IDU5LjI4NzEgMy41MTI5NiA2MS4zNDEyIDUuMDgyMzIgNjMuMDQ1M0M2LjkzMjM3IDY0LjgxODkgOS4yOTA1IDY2LjAxMzUgMTEuODUwOCA2Ni40NzQyQzIxLjY0NDIgNjcuNjQ0IDMxLjUxMjEgNjguMTI4OCA0MS4zNzc2IDY3LjkyNDhDNTcuMjc2NiA2OC4xNDQ2IDcxLjIyMjQgNjcuOTI0OCA4Ny43MTIgNjYuNjk0QzkwLjMzNTEgNjYuMjYxNiA5Mi43NTk3IDY1LjA2NTUgOTQuNjYyMSA2My4yNjUxQzk1LjkzMzkgNjIuMDMzOSA5Ni44ODM4IDYwLjUyNjkgOTcuNDMzMSA1OC44NjkyQzk5LjA1NzcgNTQuMDQ1MSA5OS44NTU2IDQ4Ljk5NjQgOTkuNzk1MyA0My45MjNDOTkuOTc3IDQxLjQ2MTIgOTkuOTc3IDI2LjYwMjkgOTkuOTc3IDIzLjk2NTNaTTM5Ljc0MjMgNDYuNTYwNVYxOS4zNDk2TDY2LjYzNDQgMzMuMDIxQzU5LjA5MzcgMzcuMDY1MyA0OS4xNDU0IDQxLjYzNzEgMzkuNzQyMyA0Ni41NjA1WlwiIC8+XHJcbjwvc3ZnPlxyXG5gXHJcbmNvbnN0IHN2Z19tZWRpYVN0aWNrZXJJY29uID0gYFxyXG48c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk02Ni42NjY3IDc3Ljc3NzhDNjYuNjY2NyA3NC44MzA5IDY3LjgzNzMgNzIuMDA0OCA2OS45MjEgNjkuOTIxQzcyLjAwNDggNjcuODM3MyA3NC44MzA5IDY2LjY2NjcgNzcuNzc3OCA2Ni42NjY3SDEwMFYxNi42NjY3QzEwMCAxMi4yNDY0IDk4LjI0NDEgOC4wMDcxNiA5NS4xMTg0IDQuODgxNTVDOTEuOTkyOCAxLjc1NTk1IDg3Ljc1MzYgMCA4My4zMzMzIDBIMTYuNjY2N0MxMi4yNDY0IDAgOC4wMDcxNiAxLjc1NTk1IDQuODgxNTUgNC44ODE1NUMxLjc1NTk1IDguMDA3MTYgMCAxMi4yNDY0IDAgMTYuNjY2N1Y4My4zMzMzQzAgODcuNzUzNiAxLjc1NTk1IDkxLjk5MjggNC44ODE1NSA5NS4xMTg0QzguMDA3MTYgOTguMjQ0MSAxMi4yNDY0IDEwMCAxNi42NjY3IDEwMEg2Ni42NjY3Vjc3Ljc3NzhaTTY2LjY2NjcgMzMuMzMzM0M2Ny43NjU0IDMzLjMzMzMgNjguODM5NiAzMy42NTkyIDY5Ljc1MzIgMzQuMjY5NkM3MC42NjY4IDM0Ljg4MDEgNzEuMzc4OCAzNS43NDc3IDcxLjc5OTMgMzYuNzYyOUM3Mi4yMTk4IDM3Ljc3OCA3Mi4zMjk4IDM4Ljg5NTEgNzIuMTE1NSAzOS45NzI3QzcxLjkwMTEgNDEuMDUwNCA3MS4zNzIgNDIuMDQwMyA3MC41OTUgNDIuODE3M0M2OS44MTgxIDQzLjU5NDIgNjguODI4MiA0NC4xMjMzIDY3Ljc1MDUgNDQuMzM3N0M2Ni42NzI4IDQ0LjU1MjEgNjUuNTU1OCA0NC40NDIgNjQuNTQwNiA0NC4wMjE2QzYzLjUyNTUgNDMuNjAxMSA2Mi42NTc4IDQyLjg4OSA2Mi4wNDc0IDQxLjk3NTRDNjEuNDM2OSA0MS4wNjE4IDYxLjExMTEgMzkuOTg3NyA2MS4xMTExIDM4Ljg4ODlDNjEuMTExMSAzNy40MTU1IDYxLjY5NjQgMzYuMDAyNCA2Mi43MzgzIDM0Ljk2MDVDNjMuNzgwMiAzMy45MTg2IDY1LjE5MzIgMzMuMzMzMyA2Ni42NjY3IDMzLjMzMzNaTTMzLjMzMzMgMzMuMzMzM0MzNC40MzIxIDMzLjMzMzMgMzUuNTA2MiAzMy42NTkyIDM2LjQxOTggMzQuMjY5NkMzNy4zMzM0IDM0Ljg4MDEgMzguMDQ1NSAzNS43NDc3IDM4LjQ2NiAzNi43NjI5QzM4Ljg4NjUgMzcuNzc4IDM4Ljk5NjUgMzguODk1MSAzOC43ODIxIDM5Ljk3MjdDMzguNTY3OCA0MS4wNTA0IDM4LjAzODcgNDIuMDQwMyAzNy4yNjE3IDQyLjgxNzNDMzYuNDg0NyA0My41OTQyIDM1LjQ5NDggNDQuMTIzMyAzNC40MTcyIDQ0LjMzNzdDMzMuMzM5NSA0NC41NTIxIDMyLjIyMjUgNDQuNDQyIDMxLjIwNzMgNDQuMDIxNkMzMC4xOTIyIDQzLjYwMTEgMjkuMzI0NSA0Mi44ODkgMjguNzE0MSA0MS45NzU0QzI4LjEwMzYgNDEuMDYxOCAyNy43Nzc4IDM5Ljk4NzcgMjcuNzc3OCAzOC44ODg5QzI3Ljc3NzggMzcuNDE1NSAyOC4zNjMxIDM2LjAwMjQgMjkuNDA1IDM0Ljk2MDVDMzAuNDQ2OCAzMy45MTg2IDMxLjg1OTkgMzMuMzMzMyAzMy4zMzMzIDMzLjMzMzNaTTI4Ljg4ODkgNTIuMjIyMkMyOS4zMjY2IDUxLjYzODYgMjkuODc1IDUxLjE0NjggMzAuNTAyOCA1MC43NzUxQzMxLjEzMDYgNTAuNDAzNCAzMS44MjU0IDUwLjE1OSAzMi41NDc3IDUwLjA1NThDMzMuMjY5OSA0OS45NTI3IDM0LjAwNTQgNDkuOTkyNyAzNC43MTIxIDUwLjE3MzhDMzUuNDE4OSA1MC4zNTQ5IDM2LjA4MyA1MC42NzM0IDM2LjY2NjcgNTEuMTExMUM0MC41MTMyIDUzLjk5NiA0NS4xOTE4IDU1LjU1NTYgNTAgNTUuNTU1NkM1NC44MDgyIDU1LjU1NTYgNTkuNDg2NyA1My45OTYgNjMuMzMzMyA1MS4xMTExQzYzLjkxNyA1MC42NzM0IDY0LjU4MTEgNTAuMzU0OSA2NS4yODc5IDUwLjE3MzhDNjUuOTk0NiA0OS45OTI3IDY2LjczMDEgNDkuOTUyNyA2Ny40NTIzIDUwLjA1NThDNjguMTc0NiA1MC4xNTkgNjguODY5NCA1MC40MDM0IDY5LjQ5NzIgNTAuNzc1MUM3MC4xMjUgNTEuMTQ2OCA3MC42NzM0IDUxLjYzODYgNzEuMTExMSA1Mi4yMjIyQzcxLjU0ODggNTIuODA1OSA3MS44NjczIDUzLjQ3IDcyLjA0ODQgNTQuMTc2OEM3Mi4yMjk1IDU0Ljg4MzUgNzIuMjY5NiA1NS42MTkgNzIuMTY2NCA1Ni4zNDEyQzcyLjA2MzIgNTcuMDYzNSA3MS44MTg4IDU3Ljc1ODMgNzEuNDQ3MSA1OC4zODYxQzcxLjA3NTQgNTkuMDEzOCA3MC41ODM3IDU5LjU2MjMgNzAgNjBDNjQuMjMwMSA2NC4zMjc0IDU3LjIxMjMgNjYuNjY2NyA1MCA2Ni42NjY3QzQyLjc4NzcgNjYuNjY2NyAzNS43Njk5IDY0LjMyNzQgMzAgNjBDMjkuNDE2MyA1OS41NjIzIDI4LjkyNDYgNTkuMDEzOCAyOC41NTI5IDU4LjM4NjFDMjguMTgxMiA1Ny43NTgzIDI3LjkzNjggNTcuMDYzNSAyNy44MzM2IDU2LjM0MTJDMjcuNzMwNCA1NS42MTkgMjcuNzcwNSA1NC44ODM1IDI3Ljk1MTYgNTQuMTc2OEMyOC4xMzI3IDUzLjQ3IDI4LjQ1MTEgNTIuODA1OSAyOC44ODg5IDUyLjIyMjJaXCIgLz5cclxuPHBhdGggZD1cIk03Ny43Nzc4IDk2Ljc0NDVMOTYuNzQ0NSA3Ny43Nzc4SDc3Ljc3NzhWOTYuNzQ0NVpcIiAvPlxyXG48L3N2Zz5cclxuXHJcbmBcclxuY29uc3Qgc3ZnX21lZGlhVmlkZW9DbGlwSWNvbiA9IGBcclxuPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNODMuMjM4NCAwSDE2Ljc2MTZDMTIuMzE2MiAwIDguMDUyNzkgMi4xOTQ5MyA0LjkwOTM3IDYuMTAxOTRDMS43NjU5NSAxMC4wMDg5IDAgMTUuMzA4IDAgMjAuODMzM1Y3OS4xNjY3QzAgODQuNjkyIDEuNzY1OTUgODkuOTkxIDQuOTA5MzcgOTMuODk4MUM4LjA1Mjc5IDk3LjgwNTEgMTIuMzE2MiAxMDAgMTYuNzYxNiAxMDBIODMuMjM4NEM4Ny42ODM4IDEwMCA5MS45NDcyIDk3LjgwNTEgOTUuMDkwNiA5My44OTgxQzk4LjIzNCA4OS45OTEgMTAwIDg0LjY5MiAxMDAgNzkuMTY2N1YyMC44MzMzQzEwMCAxNS4zMDggOTguMjM0IDEwLjAwODkgOTUuMDkwNiA2LjEwMTk0QzkxLjk0NzIgMi4xOTQ5MyA4Ny42ODM4IDAgODMuMjM4NCAwWk02Ny45NTE3IDU1LjVMNDAuNDQ1OSA3My44MzMzQzM5LjcxNDUgNzQuMzIzOSAzOC44OTY4IDc0LjU4MTYgMzguMDY1NyA3NC41ODMzQzM2LjczMjEgNzQuNTgzMyAzNS40NTMgNzMuOTI0OSAzNC41MSA3Mi43NTI4QzMzLjU2NyA3MS41ODA2IDMzLjAzNzIgNjkuOTkwOSAzMy4wMzcyIDY4LjMzMzNWMzEuNjY2N0MzMy4wMzggMzAuNTg2MiAzMy4yNjQxIDI5LjUyNDQgMzMuNjkzNSAyOC41ODVDMzQuMTIyOSAyNy42NDU1IDM0Ljc0MDkgMjYuODYwNSAzNS40ODcyIDI2LjMwNjRDMzYuMjMzNSAyNS43NTI0IDM3LjA4MjYgMjUuNDQ4MyAzNy45NTE3IDI1LjQyMzhDMzguODIwOCAyNS4zOTkzIDM5LjY4MDEgMjUuNjU1MiA0MC40NDU5IDI2LjE2NjdMNjcuOTUxNyA0NC41QzY4Ljc1IDQ1LjAzNTUgNjkuNDE2OSA0NS44Mjk1IDY5Ljg4MTYgNDYuNzk3N0M3MC4zNDY0IDQ3Ljc2NiA3MC41OTE4IDQ4Ljg3MjUgNzAuNTkxOCA1MEM3MC41OTE4IDUxLjEyNzUgNzAuMzQ2NCA1Mi4yMzQgNjkuODgxNiA1My4yMDIzQzY5LjQxNjkgNTQuMTcwNSA2OC43NSA1NC45NjQ1IDY3Ljk1MTcgNTUuNVpNMzkuNzQxOSAzNS4xNDU4TDYyLjAxODEgNTBMMzkuNzQxOSA2NC44NTQyVjM1LjE0NThaXCIgLz5cclxuPC9zdmc+XHJcblxyXG5gXHJcbmxldCBzdmdfZGVsZXRlZE1lc3NhZ2VCbGFua0ljb24gPSBgPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNNTAgMEMyMi40MzA0IDAgMCAyMi40MzA0IDAgNTBDMCA3Ny41Njk2IDIyLjQzMDQgMTAwIDUwIDEwMEM3Ny41Njk2IDEwMCAxMDAgNzcuNTY5NiAxMDAgNTBDMTAwIDIyLjQzMDQgNzcuNTY5NiAwIDUwIDBaTTEyLjUgNTBDMTIuNSA0MS45MTM2IDE1LjA5ODYgMzQuNDM3MiAxOS40Njc5IDI4LjMwNThMNzEuNjk0MiA4MC41MzIxQzY1LjU2MjggODQuOTAxNCA1OC4wODY0IDg3LjUgNTAgODcuNUMyOS4zMjEzIDg3LjUgMTIuNSA3MC42Nzg3IDEyLjUgNTBaTTgwLjUzMTkgNzEuNjk0MkwyOC4zMDU2IDE5LjQ2NzlDMzQuNDM3IDE1LjA5ODYgNDEuOTEzNCAxMi41IDQ5Ljk5OTggMTIuNUM3MC42Nzg1IDEyLjUgODcuNDk5OCAyOS4zMjEzIDg3LjQ5OTggNTBDODcuNDk5OCA1OC4wODY0IDg0LjkwMTIgNjUuNTYyOCA4MC41MzE5IDcxLjY5NDJaXCIgLz5cclxuPC9zdmc+XHJcbmBcclxuXHJcbmxldCBhY3RpdmVDaGF0SW5wdXRSZXBseUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdElucHV0UmVwbHlCb3hcIilcclxuXHJcbmxldCBhY3RpdmVDaGF0SW5wdXRSZXBseVVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImFjdGl2ZUNoYXRJbnB1dFJlcGx5VXNlclwiXHJcbilcclxubGV0IGFjdGl2ZUNoYXRJbnB1dFJlcGx5VXNlck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImFjdGl2ZUNoYXRJbnB1dFJlcGx5VXNlck1lc3NhZ2VcIlxyXG4pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlblJlcGx5TWVzc2FnZUJveChtZXNzYWdlSWQpIHtcclxuICBsZXQgdXNlck1lc3NhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94W2RhdGEtbWVzc2FnZS1pZD1cIiR7bWVzc2FnZUlkfVwiXWBcclxuICApXHJcbiAgaWYgKHVzZXJNZXNzYWdlQm94KSB7XHJcbiAgICBsZXQgbWVzc2FnZUNvbnRlbnQsIG1lc3NhZ2VVc2VyXHJcbiAgICAvL3JlcGx5IG1lc3NhZ2UgdXNlclxyXG4gICAgbWVzc2FnZVVzZXIgPVxyXG4gICAgICB1c2VyTWVzc2FnZUJveC5kYXRhc2V0LnNlbmRlcklkLnRvU3RyaW5nKCkgPT09IGxvZ2luVXNlci5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgID8gXCJZb3VcIlxyXG4gICAgICAgIDogdXNlck1lc3NhZ2VCb3guZGF0YXNldC5zZW5kZXJOYW1lXHJcblxyXG4gICAgYWN0aXZlQ2hhdElucHV0UmVwbHlVc2VyLnRleHRDb250ZW50ID0gbWVzc2FnZVVzZXJcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLWRlbGV0ZWQtbWVzc2FnZVwiXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICBhY3RpdmVDaGF0SW5wdXRSZXBseVVzZXJNZXNzYWdlLmlubmVySFRNTCA9IGAke3N2Z19kZWxldGVkTWVzc2FnZUJsYW5rSWNvbn0gPHNwYW4+VGhpcyBNZXNzYWdlIGhhcyBiZWVuIGRlbGV0ZWQuPC9zcGFuPmBcclxuICAgICAgYWN0aXZlQ2hhdElucHV0UmVwbHlCb3guY2xhc3NMaXN0LmFkZChcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LWlucHV0LXJlcGx5LWJveC0tZGVsZXRlZC1tZXNzYWdlXCJcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWN0aXZlQ2hhdElucHV0UmVwbHlCb3guY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LWlucHV0LXJlcGx5LWJveC0tZGVsZXRlZC1tZXNzYWdlXCJcclxuICAgICAgKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0tdGV4dFwiKVxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgdXNlck1lc3NhZ2VUZXh0Q29udGVudCA9IHVzZXJNZXNzYWdlQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hfX2NvbnRlbnQtLXRleHRcIlxyXG4gICAgICAgIClbMF1cclxuICAgICAgICBpZiAodXNlck1lc3NhZ2VUZXh0Q29udGVudClcclxuICAgICAgICAgIG1lc3NhZ2VDb250ZW50ID0gdXNlck1lc3NhZ2VUZXh0Q29udGVudC50ZXh0Q29udGVudFxyXG5cclxuICAgICAgICBhY3RpdmVDaGF0SW5wdXRSZXBseVVzZXJNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZUNvbnRlbnRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlQ29udGVudCA9IFwiXCJcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgIFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0tdmlkZW9cIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbWVzc2FnZUNvbnRlbnQgPSBgJHtzdmdfbWVkaWFWaWRlb0ljb259IDxzcGFuPlZpZGVvPC9zcGFuPmBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLWF1ZGlvXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1lc3NhZ2VDb250ZW50ID0gYCR7c3ZnX21lZGlhQXVkaW9JY29ufSA8c3Bhbj5BdWRpbzwvc3Bhbj5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS1pbWFnZVwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtZXNzYWdlQ29udGVudCA9IGAke3N2Z19tZWRpYUltYWdlSWNvbn0gPHNwYW4+SW1hZ2U8L3NwYW4+YFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgIFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0teW91dHViZVwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtZXNzYWdlQ29udGVudCA9IGAke3N2Z19tZWRpYVlvdXR1YmVJY29ufSA8c3Bhbj5Zb3V0dWJlPC9zcGFuPmBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLXZpZGVvLWNsaXBcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbWVzc2FnZUNvbnRlbnQgPSBgJHtzdmdfbWVkaWFWaWRlb0NsaXBJY29ufSA8c3Bhbj5WaWRlbyBjbGlwPC9zcGFuPmBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLXN0aWNrZXJcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbWVzc2FnZUNvbnRlbnQgPSBgJHtzdmdfbWVkaWFTdGlja2VySWNvbn0gPHNwYW4+U3RpY2tlcjwvc3Bhbj5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhY3RpdmVDaGF0SW5wdXRSZXBseVVzZXJNZXNzYWdlLmlubmVySFRNTCA9IG1lc3NhZ2VDb250ZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRDb250YWluZXJFbmFibGVCb3hcIilcclxuICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY2hhdC1pbnB1dC1jb250YWluZXJfX2VuYWJsZS1ib3gtLXJlcGx5XCIpXHJcbiAgICBhY3RpdmVDaGF0SW5wdXRSZXBseUJveC5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICBcImFjdGl2ZS1jaGF0LWlucHV0LXJlcGx5LWJveC0taGlkZVwiXHJcbiAgICApXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRJbnB1dFRleHRDb250ZW50XCIpLmZvY3VzKClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyXCIpLmRhdGFzZXQucmVwbGllZFRvID1cclxuICAgICAgbWVzc2FnZUlkXHJcbiAgfVxyXG4gIGxldCB7IGFkanVzdE1lc3NhZ2VDb250YWluZXJCb3R0b21QYWRkaW5nIH0gPSBhd2FpdCBpbXBvcnQoXCIuLi9jaGF0LmRldlwiKVxyXG4gIGFkanVzdE1lc3NhZ2VDb250YWluZXJCb3R0b21QYWRkaW5nKClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsb3NlUmVwbHlNZXNzYWdlQm94KCkge1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRDb250YWluZXJFbmFibGVCb3hcIilcclxuICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtaW5wdXQtY29udGFpbmVyX19lbmFibGUtYm94LS1yZXBseVwiKVxyXG4gIGFjdGl2ZUNoYXRJbnB1dFJlcGx5Qm94LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY2hhdC1pbnB1dC1yZXBseS1ib3gtLWhpZGVcIilcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lclwiKS5kYXRhc2V0LnJlcGxpZWRUbyA9IFwiXCJcclxuICBsZXQgeyBhZGp1c3RNZXNzYWdlQ29udGFpbmVyQm90dG9tUGFkZGluZyB9ID0gYXdhaXQgaW1wb3J0KFwiLi4vY2hhdC5kZXZcIilcclxuICBhZGp1c3RNZXNzYWdlQ29udGFpbmVyQm90dG9tUGFkZGluZygpXHJcbn1cclxuIl0sIm5hbWVzIjpbInN2Z19tZWRpYUltYWdlSWNvbiIsInN2Z19tZWRpYVZpZGVvSWNvbiIsInN2Z19tZWRpYUF1ZGlvSWNvbiIsInN2Z19tZWRpYVlvdXR1YmVJY29uIiwic3ZnX21lZGlhU3RpY2tlckljb24iLCJzdmdfbWVkaWFWaWRlb0NsaXBJY29uIiwic3ZnX2RlbGV0ZWRNZXNzYWdlQmxhbmtJY29uIiwiYWN0aXZlQ2hhdElucHV0UmVwbHlCb3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlQ2hhdElucHV0UmVwbHlVc2VyIiwiYWN0aXZlQ2hhdElucHV0UmVwbHlVc2VyTWVzc2FnZSIsIm9wZW5SZXBseU1lc3NhZ2VCb3giLCJtZXNzYWdlSWQiLCJ1c2VyTWVzc2FnZUJveCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlQ29udGVudCIsIm1lc3NhZ2VVc2VyIiwiZGF0YXNldCIsInNlbmRlcklkIiwidG9TdHJpbmciLCJsb2dpblVzZXIiLCJfaWQiLCJzZW5kZXJOYW1lIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVySFRNTCIsImFkZCIsInJlbW92ZSIsInVzZXJNZXNzYWdlVGV4dENvbnRlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9jdXMiLCJyZXBsaWVkVG8iLCJhZGp1c3RNZXNzYWdlQ29udGFpbmVyQm90dG9tUGFkZGluZyIsImNsb3NlUmVwbHlNZXNzYWdlQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/replyMessageBox.dev.js\n");

/***/ })

}]);