"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_chat_js_replyMessageBox_dev_js-_6b960"],{

/***/ "./dev-javascripts/chat/js/replyMessageBox.dev.js":
/*!********************************************************!*\
  !*** ./dev-javascripts/chat/js/replyMessageBox.dev.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeReplyMessageBox\": () => (/* binding */ closeReplyMessageBox),\n/* harmony export */   \"openReplyMessageBox\": () => (/* binding */ openReplyMessageBox)\n/* harmony export */ });\n/* harmony import */ var _chat_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat.dev */ \"./dev-javascripts/chat/chat.dev.js\");\nlet imageIcon = `<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M57.5 20C53.5 20 50 23.5 50 27.5C50 31.5 53.5 35 57.5 35C61.5 35 65 31.5 65 27.5C65 23.5 61.5 20 57.5 20ZM85 0H15C6.5 0 0 6.5 0 15V85C0 93.5 6.5 100 15 100H85C93.5 100 100 93.5 100 85V15C100 6.5 93.5 0 85 0ZM90 59.5L80.5 50C74.5 44.5 65 44.5 59.5 50L55 54.5L40.5 40C34.5 34.5 25 34.5 19.5 40L10 49.5V15C10 12 12 10 15 10H85C88 10 90 12 90 15V59.5Z\" />\n</svg>\n`;\nlet videoIcon = `<svg width=\"100\" height=\"65\" viewBox=\"0 0 100 65\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M94.9525 9.98214C93.4341 9.34699 91.7483 9.14039 90.1046 9.38803C88.4608 9.63566 86.9317 10.3266 85.7071 11.375L74.9625 20.6607V13.9286C74.9625 10.2345 73.383 6.6917 70.5713 4.07958C67.7597 1.46747 63.9463 0 59.97 0H14.9925C11.0162 0 7.20284 1.46747 4.3912 4.07958C1.57956 6.6917 0 10.2345 0 13.9286V51.0714C0 54.7655 1.57956 58.3083 4.3912 60.9204C7.20284 63.5325 11.0162 65 14.9925 65H59.97C63.9463 65 67.7597 63.5325 70.5713 60.9204C73.383 58.3083 74.9625 54.7655 74.9625 51.0714V44.3393L85.7571 53.625C87.3463 54.9614 89.4107 55.7055 91.5542 55.7143C92.7438 55.7117 93.9192 55.4743 95.0025 55.0179C96.4765 54.4639 97.7392 53.5143 98.6294 52.2903C99.5196 51.0663 99.9968 49.6236 100 48.1464V16.8536C99.9928 15.371 99.5082 13.9244 98.6087 12.6999C97.7092 11.4753 96.4359 10.5288 94.9525 9.98214Z\" />\n</svg>`;\nlet audioIcon = `<svg width=\"70\" height=\"100\" viewBox=\"0 0 70 100\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M35 65C40.3043 65 45.3914 62.8929 49.1421 59.1421C52.8929 55.3914 55 50.3043 55 45V20C55 14.6957 52.8929 9.60859 49.1421 5.85786C45.3914 2.10714 40.3043 0 35 0C29.6957 0 24.6086 2.10714 20.8579 5.85786C17.1071 9.60859 15 14.6957 15 20V45C15 50.3043 17.1071 55.3914 20.8579 59.1421C24.6086 62.8929 29.6957 65 35 65Z\" />\n<path d=\"M70 45C70 43.6739 69.4732 42.4021 68.5355 41.4645C67.5979 40.5268 66.3261 40 65 40C63.6739 40 62.4021 40.5268 61.4645 41.4645C60.5268 42.4021 60 43.6739 60 45C60 51.6304 57.3661 57.9893 52.6777 62.6777C47.9893 67.3661 41.6304 70 35 70C28.3696 70 22.0107 67.3661 17.3223 62.6777C12.6339 57.9893 10 51.6304 10 45C10 43.6739 9.47321 42.4021 8.53553 41.4645C7.59785 40.5268 6.32608 40 5 40C3.67392 40 2.40215 40.5268 1.46447 41.4645C0.526785 42.4021 0 43.6739 0 45C0.00985554 53.4092 3.04704 61.5338 8.5559 67.8874C14.0648 74.2409 21.677 78.3987 30 79.6V90H19.45C18.2698 90 17.1379 90.4688 16.3034 91.3034C15.4688 92.1379 15 93.2698 15 94.45V95.55C15 96.7302 15.4688 97.8621 16.3034 98.6966C17.1379 99.5312 18.2698 100 19.45 100H50.55C51.7302 100 52.8621 99.5312 53.6966 98.6966C54.5312 97.8621 55 96.7302 55 95.55V94.45C55 93.2698 54.5312 92.1379 53.6966 91.3034C52.8621 90.4688 51.7302 90 50.55 90H40V79.6C48.323 78.3987 55.9352 74.2409 61.4441 67.8874C66.953 61.5338 69.9901 53.4092 70 45Z\" />\n</svg>\n`;\nlet youtubeIcon = `<svg width=\"100\" height=\"68\" viewBox=\"0 0 100 68\"  xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M99.977 23.9653C100.202 17.6732 98.7797 11.4282 95.8432 5.81006C93.8509 3.50481 91.0858 1.94914 88.03 1.4141C75.3903 0.304237 62.6984 -0.150661 50.0085 0.0513592C37.3649 -0.15983 24.7186 0.280389 12.1233 1.37015C9.63317 1.80849 7.32871 2.9388 5.49115 4.62315C1.40282 8.27179 0.948564 14.514 0.494306 19.7892C-0.164769 29.2737 -0.164769 38.7904 0.494306 48.2749C0.625724 51.244 1.08254 54.1911 1.85708 57.0668C2.4048 59.2871 3.51296 61.3412 5.08232 63.0453C6.93237 64.8189 9.2905 66.0135 11.8508 66.4742C21.6442 67.644 31.5121 68.1288 41.3776 67.9248C57.2766 68.1446 71.2224 67.9248 87.712 66.694C90.3351 66.2616 92.7597 65.0655 94.6621 63.2651C95.9339 62.0339 96.8838 60.5269 97.4331 58.8692C99.0577 54.0451 99.8556 48.9964 99.7953 43.923C99.977 41.4612 99.977 26.6029 99.977 23.9653ZM39.7423 46.5605V19.3496L66.6344 33.021C59.0937 37.0653 49.1454 41.6371 39.7423 46.5605Z\" />\n</svg>\n`;\n\nfunction openReplyMessageBox(messageId) {\n  let userMessageBox = document.querySelector(`.active-chat-user-message-box[data-message-id=\"${messageId}\"]`);\n\n  if (userMessageBox) {\n    let messageContent, messageUser; //reply message user\n\n    messageUser = userMessageBox.dataset.senderId.toString() === loginUser._id.toString() ? \"You\" : userMessageBox.dataset.senderName;\n    document.getElementById(\"activeChatInputReplyUser\").textContent = messageUser; // reply message content\n\n    if (userMessageBox.classList.contains(\"active-chat-user-message-box--text\")) {\n      let userMessageTextContent = userMessageBox.getElementsByClassName(\"active-chat-user-message-box__content--text\")[0];\n      if (userMessageTextContent) messageContent = userMessageTextContent.textContent;\n      document.getElementById(\"activeChatInputReplyUserMessage\").textContent = messageContent;\n    } else {\n      messageContent = \"\";\n\n      if (userMessageBox.classList.contains(\"active-chat-user-message-box--video\")) {\n        messageContent = `${videoIcon} <span>Video</span>`;\n      }\n\n      if (userMessageBox.classList.contains(\"active-chat-user-message-box--audio\")) {\n        messageContent = `${audioIcon} <span>Audio</span>`;\n      }\n\n      if (userMessageBox.classList.contains(\"active-chat-user-message-box--image\")) {\n        messageContent = `${imageIcon} <span>Image</span>`;\n      }\n\n      if (userMessageBox.classList.contains(\"active-chat-user-message-box--youtube\")) {\n        messageContent = `${youtubeIcon} <span>Youtube</span>`;\n      }\n\n      document.getElementById(\"activeChatInputReplyUserMessage\").innerHTML = messageContent;\n    }\n\n    document.getElementById(\"activeChatInputContainerEnableBox\").classList.add(\"active-chat-input-container__enable-box--reply\");\n    document.getElementById(\"activeChatInputReplyBox\").classList.remove(\"active-chat-input-reply-box--hide\");\n    document.getElementById(\"activeChatInputTextContent\").focus();\n    document.getElementById(\"activeChatInputContainer\").dataset.repliedTo = messageId;\n  }\n\n  (0,_chat_dev__WEBPACK_IMPORTED_MODULE_0__.adjustMessageContainerBottomPadding)();\n}\nfunction closeReplyMessageBox() {\n  document.getElementById(\"activeChatInputContainerEnableBox\").classList.remove(\"active-chat-input-container__enable-box--reply\");\n  document.getElementById(\"activeChatInputReplyBox\").classList.add(\"active-chat-input-reply-box--hide\");\n  document.getElementById(\"activeChatInputContainer\").dataset.repliedTo = \"\";\n  (0,_chat_dev__WEBPACK_IMPORTED_MODULE_0__.adjustMessageContainerBottomPadding)();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9yZXBseU1lc3NhZ2VCb3guZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBSTtBQUNqQjtBQUNBO0FBQ0EsQ0FIQTtBQUlBLElBQUlDLFNBQVMsR0FBSTtBQUNqQjtBQUNBLE9BRkE7QUFHQSxJQUFJQyxTQUFTLEdBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQUtBLElBQUlDLFdBQVcsR0FBSTtBQUNuQjtBQUNBO0FBQ0EsQ0FIQTtBQUlBO0FBQ08sU0FBU0UsbUJBQVQsQ0FBNkJDLFNBQTdCLEVBQXdDO0VBQzdDLElBQUlDLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQ2xCLGtEQUFpREgsU0FBVSxJQUR6QyxDQUFyQjs7RUFHQSxJQUFJQyxjQUFKLEVBQW9CO0lBQ2xCLElBQUlHLGNBQUosRUFBb0JDLFdBQXBCLENBRGtCLENBRWxCOztJQUNBQSxXQUFXLEdBQ1RKLGNBQWMsQ0FBQ0ssT0FBZixDQUF1QkMsUUFBdkIsQ0FBZ0NDLFFBQWhDLE9BQStDQyxTQUFTLENBQUNDLEdBQVYsQ0FBY0YsUUFBZCxFQUEvQyxHQUNJLEtBREosR0FFSVAsY0FBYyxDQUFDSyxPQUFmLENBQXVCSyxVQUg3QjtJQUtBVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsMEJBQXhCLEVBQW9EQyxXQUFwRCxHQUNFUixXQURGLENBUmtCLENBV2xCOztJQUNBLElBQ0VKLGNBQWMsQ0FBQ2EsU0FBZixDQUF5QkMsUUFBekIsQ0FBa0Msb0NBQWxDLENBREYsRUFFRTtNQUNBLElBQUlDLHNCQUFzQixHQUFHZixjQUFjLENBQUNnQixzQkFBZixDQUMzQiw2Q0FEMkIsRUFFM0IsQ0FGMkIsQ0FBN0I7TUFHQSxJQUFJRCxzQkFBSixFQUNFWixjQUFjLEdBQUdZLHNCQUFzQixDQUFDSCxXQUF4QztNQUVGWCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsaUNBQXhCLEVBQTJEQyxXQUEzRCxHQUNFVCxjQURGO0lBRUQsQ0FYRCxNQVdPO01BQ0xBLGNBQWMsR0FBRyxFQUFqQjs7TUFDQSxJQUNFSCxjQUFjLENBQUNhLFNBQWYsQ0FBeUJDLFFBQXpCLENBQWtDLHFDQUFsQyxDQURGLEVBRUU7UUFDQVgsY0FBYyxHQUFJLEdBQUVULFNBQVUscUJBQTlCO01BQ0Q7O01BQ0QsSUFDRU0sY0FBYyxDQUFDYSxTQUFmLENBQXlCQyxRQUF6QixDQUFrQyxxQ0FBbEMsQ0FERixFQUVFO1FBQ0FYLGNBQWMsR0FBSSxHQUFFUixTQUFVLHFCQUE5QjtNQUNEOztNQUNELElBQ0VLLGNBQWMsQ0FBQ2EsU0FBZixDQUF5QkMsUUFBekIsQ0FBa0MscUNBQWxDLENBREYsRUFFRTtRQUNBWCxjQUFjLEdBQUksR0FBRVYsU0FBVSxxQkFBOUI7TUFDRDs7TUFDRCxJQUNFTyxjQUFjLENBQUNhLFNBQWYsQ0FBeUJDLFFBQXpCLENBQ0UsdUNBREYsQ0FERixFQUlFO1FBQ0FYLGNBQWMsR0FBSSxHQUFFUCxXQUFZLHVCQUFoQztNQUNEOztNQUVESyxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsaUNBQXhCLEVBQTJETSxTQUEzRCxHQUNFZCxjQURGO0lBRUQ7O0lBRURGLFFBQVEsQ0FDTFUsY0FESCxDQUNrQixtQ0FEbEIsRUFFR0UsU0FGSCxDQUVhSyxHQUZiLENBRWlCLGdEQUZqQjtJQUdBakIsUUFBUSxDQUNMVSxjQURILENBQ2tCLHlCQURsQixFQUVHRSxTQUZILENBRWFNLE1BRmIsQ0FFb0IsbUNBRnBCO0lBR0FsQixRQUFRLENBQUNVLGNBQVQsQ0FBd0IsNEJBQXhCLEVBQXNEUyxLQUF0RDtJQUNBbkIsUUFBUSxDQUFDVSxjQUFULENBQXdCLDBCQUF4QixFQUFvRE4sT0FBcEQsQ0FBNERnQixTQUE1RCxHQUNFdEIsU0FERjtFQUVEOztFQUNERiw4RUFBbUM7QUFDcEM7QUFFTSxTQUFTeUIsb0JBQVQsR0FBZ0M7RUFDckNyQixRQUFRLENBQ0xVLGNBREgsQ0FDa0IsbUNBRGxCLEVBRUdFLFNBRkgsQ0FFYU0sTUFGYixDQUVvQixnREFGcEI7RUFHQWxCLFFBQVEsQ0FDTFUsY0FESCxDQUNrQix5QkFEbEIsRUFFR0UsU0FGSCxDQUVhSyxHQUZiLENBRWlCLG1DQUZqQjtFQUdBakIsUUFBUSxDQUFDVSxjQUFULENBQXdCLDBCQUF4QixFQUFvRE4sT0FBcEQsQ0FBNERnQixTQUE1RCxHQUF3RSxFQUF4RTtFQUNBeEIsOEVBQW1DO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9yZXBseU1lc3NhZ2VCb3guZGV2LmpzP2ZjM2UiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGltYWdlSWNvbiA9IGA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk01Ny41IDIwQzUzLjUgMjAgNTAgMjMuNSA1MCAyNy41QzUwIDMxLjUgNTMuNSAzNSA1Ny41IDM1QzYxLjUgMzUgNjUgMzEuNSA2NSAyNy41QzY1IDIzLjUgNjEuNSAyMCA1Ny41IDIwWk04NSAwSDE1QzYuNSAwIDAgNi41IDAgMTVWODVDMCA5My41IDYuNSAxMDAgMTUgMTAwSDg1QzkzLjUgMTAwIDEwMCA5My41IDEwMCA4NVYxNUMxMDAgNi41IDkzLjUgMCA4NSAwWk05MCA1OS41TDgwLjUgNTBDNzQuNSA0NC41IDY1IDQ0LjUgNTkuNSA1MEw1NSA1NC41TDQwLjUgNDBDMzQuNSAzNC41IDI1IDM0LjUgMTkuNSA0MEwxMCA0OS41VjE1QzEwIDEyIDEyIDEwIDE1IDEwSDg1Qzg4IDEwIDkwIDEyIDkwIDE1VjU5LjVaXCIgLz5cclxuPC9zdmc+XHJcbmBcclxubGV0IHZpZGVvSWNvbiA9IGA8c3ZnIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiNjVcIiB2aWV3Qm94PVwiMCAwIDEwMCA2NVwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNOTQuOTUyNSA5Ljk4MjE0QzkzLjQzNDEgOS4zNDY5OSA5MS43NDgzIDkuMTQwMzkgOTAuMTA0NiA5LjM4ODAzQzg4LjQ2MDggOS42MzU2NiA4Ni45MzE3IDEwLjMyNjYgODUuNzA3MSAxMS4zNzVMNzQuOTYyNSAyMC42NjA3VjEzLjkyODZDNzQuOTYyNSAxMC4yMzQ1IDczLjM4MyA2LjY5MTcgNzAuNTcxMyA0LjA3OTU4QzY3Ljc1OTcgMS40Njc0NyA2My45NDYzIDAgNTkuOTcgMEgxNC45OTI1QzExLjAxNjIgMCA3LjIwMjg0IDEuNDY3NDcgNC4zOTEyIDQuMDc5NThDMS41Nzk1NiA2LjY5MTcgMCAxMC4yMzQ1IDAgMTMuOTI4NlY1MS4wNzE0QzAgNTQuNzY1NSAxLjU3OTU2IDU4LjMwODMgNC4zOTEyIDYwLjkyMDRDNy4yMDI4NCA2My41MzI1IDExLjAxNjIgNjUgMTQuOTkyNSA2NUg1OS45N0M2My45NDYzIDY1IDY3Ljc1OTcgNjMuNTMyNSA3MC41NzEzIDYwLjkyMDRDNzMuMzgzIDU4LjMwODMgNzQuOTYyNSA1NC43NjU1IDc0Ljk2MjUgNTEuMDcxNFY0NC4zMzkzTDg1Ljc1NzEgNTMuNjI1Qzg3LjM0NjMgNTQuOTYxNCA4OS40MTA3IDU1LjcwNTUgOTEuNTU0MiA1NS43MTQzQzkyLjc0MzggNTUuNzExNyA5My45MTkyIDU1LjQ3NDMgOTUuMDAyNSA1NS4wMTc5Qzk2LjQ3NjUgNTQuNDYzOSA5Ny43MzkyIDUzLjUxNDMgOTguNjI5NCA1Mi4yOTAzQzk5LjUxOTYgNTEuMDY2MyA5OS45OTY4IDQ5LjYyMzYgMTAwIDQ4LjE0NjRWMTYuODUzNkM5OS45OTI4IDE1LjM3MSA5OS41MDgyIDEzLjkyNDQgOTguNjA4NyAxMi42OTk5Qzk3LjcwOTIgMTEuNDc1MyA5Ni40MzU5IDEwLjUyODggOTQuOTUyNSA5Ljk4MjE0WlwiIC8+XHJcbjwvc3ZnPmBcclxubGV0IGF1ZGlvSWNvbiA9IGA8c3ZnIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDcwIDEwMFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNMzUgNjVDNDAuMzA0MyA2NSA0NS4zOTE0IDYyLjg5MjkgNDkuMTQyMSA1OS4xNDIxQzUyLjg5MjkgNTUuMzkxNCA1NSA1MC4zMDQzIDU1IDQ1VjIwQzU1IDE0LjY5NTcgNTIuODkyOSA5LjYwODU5IDQ5LjE0MjEgNS44NTc4NkM0NS4zOTE0IDIuMTA3MTQgNDAuMzA0MyAwIDM1IDBDMjkuNjk1NyAwIDI0LjYwODYgMi4xMDcxNCAyMC44NTc5IDUuODU3ODZDMTcuMTA3MSA5LjYwODU5IDE1IDE0LjY5NTcgMTUgMjBWNDVDMTUgNTAuMzA0MyAxNy4xMDcxIDU1LjM5MTQgMjAuODU3OSA1OS4xNDIxQzI0LjYwODYgNjIuODkyOSAyOS42OTU3IDY1IDM1IDY1WlwiIC8+XHJcbjxwYXRoIGQ9XCJNNzAgNDVDNzAgNDMuNjczOSA2OS40NzMyIDQyLjQwMjEgNjguNTM1NSA0MS40NjQ1QzY3LjU5NzkgNDAuNTI2OCA2Ni4zMjYxIDQwIDY1IDQwQzYzLjY3MzkgNDAgNjIuNDAyMSA0MC41MjY4IDYxLjQ2NDUgNDEuNDY0NUM2MC41MjY4IDQyLjQwMjEgNjAgNDMuNjczOSA2MCA0NUM2MCA1MS42MzA0IDU3LjM2NjEgNTcuOTg5MyA1Mi42Nzc3IDYyLjY3NzdDNDcuOTg5MyA2Ny4zNjYxIDQxLjYzMDQgNzAgMzUgNzBDMjguMzY5NiA3MCAyMi4wMTA3IDY3LjM2NjEgMTcuMzIyMyA2Mi42Nzc3QzEyLjYzMzkgNTcuOTg5MyAxMCA1MS42MzA0IDEwIDQ1QzEwIDQzLjY3MzkgOS40NzMyMSA0Mi40MDIxIDguNTM1NTMgNDEuNDY0NUM3LjU5Nzg1IDQwLjUyNjggNi4zMjYwOCA0MCA1IDQwQzMuNjczOTIgNDAgMi40MDIxNSA0MC41MjY4IDEuNDY0NDcgNDEuNDY0NUMwLjUyNjc4NSA0Mi40MDIxIDAgNDMuNjczOSAwIDQ1QzAuMDA5ODU1NTQgNTMuNDA5MiAzLjA0NzA0IDYxLjUzMzggOC41NTU5IDY3Ljg4NzRDMTQuMDY0OCA3NC4yNDA5IDIxLjY3NyA3OC4zOTg3IDMwIDc5LjZWOTBIMTkuNDVDMTguMjY5OCA5MCAxNy4xMzc5IDkwLjQ2ODggMTYuMzAzNCA5MS4zMDM0QzE1LjQ2ODggOTIuMTM3OSAxNSA5My4yNjk4IDE1IDk0LjQ1Vjk1LjU1QzE1IDk2LjczMDIgMTUuNDY4OCA5Ny44NjIxIDE2LjMwMzQgOTguNjk2NkMxNy4xMzc5IDk5LjUzMTIgMTguMjY5OCAxMDAgMTkuNDUgMTAwSDUwLjU1QzUxLjczMDIgMTAwIDUyLjg2MjEgOTkuNTMxMiA1My42OTY2IDk4LjY5NjZDNTQuNTMxMiA5Ny44NjIxIDU1IDk2LjczMDIgNTUgOTUuNTVWOTQuNDVDNTUgOTMuMjY5OCA1NC41MzEyIDkyLjEzNzkgNTMuNjk2NiA5MS4zMDM0QzUyLjg2MjEgOTAuNDY4OCA1MS43MzAyIDkwIDUwLjU1IDkwSDQwVjc5LjZDNDguMzIzIDc4LjM5ODcgNTUuOTM1MiA3NC4yNDA5IDYxLjQ0NDEgNjcuODg3NEM2Ni45NTMgNjEuNTMzOCA2OS45OTAxIDUzLjQwOTIgNzAgNDVaXCIgLz5cclxuPC9zdmc+XHJcbmBcclxubGV0IHlvdXR1YmVJY29uID0gYDxzdmcgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI2OFwiIHZpZXdCb3g9XCIwIDAgMTAwIDY4XCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk05OS45NzcgMjMuOTY1M0MxMDAuMjAyIDE3LjY3MzIgOTguNzc5NyAxMS40MjgyIDk1Ljg0MzIgNS44MTAwNkM5My44NTA5IDMuNTA0ODEgOTEuMDg1OCAxLjk0OTE0IDg4LjAzIDEuNDE0MUM3NS4zOTAzIDAuMzA0MjM3IDYyLjY5ODQgLTAuMTUwNjYxIDUwLjAwODUgMC4wNTEzNTkyQzM3LjM2NDkgLTAuMTU5ODMgMjQuNzE4NiAwLjI4MDM4OSAxMi4xMjMzIDEuMzcwMTVDOS42MzMxNyAxLjgwODQ5IDcuMzI4NzEgMi45Mzg4IDUuNDkxMTUgNC42MjMxNUMxLjQwMjgyIDguMjcxNzkgMC45NDg1NjQgMTQuNTE0IDAuNDk0MzA2IDE5Ljc4OTJDLTAuMTY0NzY5IDI5LjI3MzcgLTAuMTY0NzY5IDM4Ljc5MDQgMC40OTQzMDYgNDguMjc0OUMwLjYyNTcyNCA1MS4yNDQgMS4wODI1NCA1NC4xOTExIDEuODU3MDggNTcuMDY2OEMyLjQwNDggNTkuMjg3MSAzLjUxMjk2IDYxLjM0MTIgNS4wODIzMiA2My4wNDUzQzYuOTMyMzcgNjQuODE4OSA5LjI5MDUgNjYuMDEzNSAxMS44NTA4IDY2LjQ3NDJDMjEuNjQ0MiA2Ny42NDQgMzEuNTEyMSA2OC4xMjg4IDQxLjM3NzYgNjcuOTI0OEM1Ny4yNzY2IDY4LjE0NDYgNzEuMjIyNCA2Ny45MjQ4IDg3LjcxMiA2Ni42OTRDOTAuMzM1MSA2Ni4yNjE2IDkyLjc1OTcgNjUuMDY1NSA5NC42NjIxIDYzLjI2NTFDOTUuOTMzOSA2Mi4wMzM5IDk2Ljg4MzggNjAuNTI2OSA5Ny40MzMxIDU4Ljg2OTJDOTkuMDU3NyA1NC4wNDUxIDk5Ljg1NTYgNDguOTk2NCA5OS43OTUzIDQzLjkyM0M5OS45NzcgNDEuNDYxMiA5OS45NzcgMjYuNjAyOSA5OS45NzcgMjMuOTY1M1pNMzkuNzQyMyA0Ni41NjA1VjE5LjM0OTZMNjYuNjM0NCAzMy4wMjFDNTkuMDkzNyAzNy4wNjUzIDQ5LjE0NTQgNDEuNjM3MSAzOS43NDIzIDQ2LjU2MDVaXCIgLz5cclxuPC9zdmc+XHJcbmBcclxuaW1wb3J0IHsgYWRqdXN0TWVzc2FnZUNvbnRhaW5lckJvdHRvbVBhZGRpbmcgfSBmcm9tIFwiLi4vY2hhdC5kZXZcIlxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblJlcGx5TWVzc2FnZUJveChtZXNzYWdlSWQpIHtcclxuICBsZXQgdXNlck1lc3NhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94W2RhdGEtbWVzc2FnZS1pZD1cIiR7bWVzc2FnZUlkfVwiXWBcclxuICApXHJcbiAgaWYgKHVzZXJNZXNzYWdlQm94KSB7XHJcbiAgICBsZXQgbWVzc2FnZUNvbnRlbnQsIG1lc3NhZ2VVc2VyXHJcbiAgICAvL3JlcGx5IG1lc3NhZ2UgdXNlclxyXG4gICAgbWVzc2FnZVVzZXIgPVxyXG4gICAgICB1c2VyTWVzc2FnZUJveC5kYXRhc2V0LnNlbmRlcklkLnRvU3RyaW5nKCkgPT09IGxvZ2luVXNlci5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgID8gXCJZb3VcIlxyXG4gICAgICAgIDogdXNlck1lc3NhZ2VCb3guZGF0YXNldC5zZW5kZXJOYW1lXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRSZXBseVVzZXJcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICBtZXNzYWdlVXNlclxyXG5cclxuICAgIC8vIHJlcGx5IG1lc3NhZ2UgY29udGVudFxyXG4gICAgaWYgKFxyXG4gICAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS10ZXh0XCIpXHJcbiAgICApIHtcclxuICAgICAgbGV0IHVzZXJNZXNzYWdlVGV4dENvbnRlbnQgPSB1c2VyTWVzc2FnZUJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveF9fY29udGVudC0tdGV4dFwiXHJcbiAgICAgIClbMF1cclxuICAgICAgaWYgKHVzZXJNZXNzYWdlVGV4dENvbnRlbnQpXHJcbiAgICAgICAgbWVzc2FnZUNvbnRlbnQgPSB1c2VyTWVzc2FnZVRleHRDb250ZW50LnRleHRDb250ZW50XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRJbnB1dFJlcGx5VXNlck1lc3NhZ2VcIikudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIG1lc3NhZ2VDb250ZW50XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlQ29udGVudCA9IFwiXCJcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLXZpZGVvXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG1lc3NhZ2VDb250ZW50ID0gYCR7dmlkZW9JY29ufSA8c3Bhbj5WaWRlbzwvc3Bhbj5gXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLWF1ZGlvXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG1lc3NhZ2VDb250ZW50ID0gYCR7YXVkaW9JY29ufSA8c3Bhbj5BdWRpbzwvc3Bhbj5gXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLWltYWdlXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG1lc3NhZ2VDb250ZW50ID0gYCR7aW1hZ2VJY29ufSA8c3Bhbj5JbWFnZTwvc3Bhbj5gXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgIFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0teW91dHViZVwiXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICBtZXNzYWdlQ29udGVudCA9IGAke3lvdXR1YmVJY29ufSA8c3Bhbj5Zb3V0dWJlPC9zcGFuPmBcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRSZXBseVVzZXJNZXNzYWdlXCIpLmlubmVySFRNTCA9XHJcbiAgICAgICAgbWVzc2FnZUNvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRDb250YWluZXJFbmFibGVCb3hcIilcclxuICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY2hhdC1pbnB1dC1jb250YWluZXJfX2VuYWJsZS1ib3gtLXJlcGx5XCIpXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRSZXBseUJveFwiKVxyXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1jaGF0LWlucHV0LXJlcGx5LWJveC0taGlkZVwiKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRUZXh0Q29udGVudFwiKS5mb2N1cygpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lclwiKS5kYXRhc2V0LnJlcGxpZWRUbyA9XHJcbiAgICAgIG1lc3NhZ2VJZFxyXG4gIH1cclxuICBhZGp1c3RNZXNzYWdlQ29udGFpbmVyQm90dG9tUGFkZGluZygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVJlcGx5TWVzc2FnZUJveCgpIHtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyRW5hYmxlQm94XCIpXHJcbiAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1jaGF0LWlucHV0LWNvbnRhaW5lcl9fZW5hYmxlLWJveC0tcmVwbHlcIilcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdElucHV0UmVwbHlCb3hcIilcclxuICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWNoYXQtaW5wdXQtcmVwbHktYm94LS1oaWRlXCIpXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRDb250YWluZXJcIikuZGF0YXNldC5yZXBsaWVkVG8gPSBcIlwiXHJcbiAgYWRqdXN0TWVzc2FnZUNvbnRhaW5lckJvdHRvbVBhZGRpbmcoKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJpbWFnZUljb24iLCJ2aWRlb0ljb24iLCJhdWRpb0ljb24iLCJ5b3V0dWJlSWNvbiIsImFkanVzdE1lc3NhZ2VDb250YWluZXJCb3R0b21QYWRkaW5nIiwib3BlblJlcGx5TWVzc2FnZUJveCIsIm1lc3NhZ2VJZCIsInVzZXJNZXNzYWdlQm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVzc2FnZUNvbnRlbnQiLCJtZXNzYWdlVXNlciIsImRhdGFzZXQiLCJzZW5kZXJJZCIsInRvU3RyaW5nIiwibG9naW5Vc2VyIiwiX2lkIiwic2VuZGVyTmFtZSIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJNZXNzYWdlVGV4dENvbnRlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYWRkIiwicmVtb3ZlIiwiZm9jdXMiLCJyZXBsaWVkVG8iLCJjbG9zZVJlcGx5TWVzc2FnZUJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/replyMessageBox.dev.js\n");

/***/ })

}]);