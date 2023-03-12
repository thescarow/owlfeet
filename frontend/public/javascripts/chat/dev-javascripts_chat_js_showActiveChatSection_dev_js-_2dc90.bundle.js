"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_chat_js_showActiveChatSection_dev_js-_2dc90"],{

/***/ "./dev-javascripts/chat/js/showActiveChatSection.dev.js":
/*!**************************************************************!*\
  !*** ./dev-javascripts/chat/js/showActiveChatSection.dev.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearActiveChatMessageContainer\": () => (/* binding */ clearActiveChatMessageContainer),\n/* harmony export */   \"createMessageSeenByModal\": () => (/* binding */ createMessageSeenByModal),\n/* harmony export */   \"onOffActiveChatInputContainer\": () => (/* binding */ onOffActiveChatInputContainer),\n/* harmony export */   \"showActiveChatSection\": () => (/* binding */ showActiveChatSection),\n/* harmony export */   \"updateActiveChatSection\": () => (/* binding */ updateActiveChatSection)\n/* harmony export */ });\n/* harmony import */ var _common_calculateTimeDifference_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/calculateTimeDifference.dev.js */ \"./dev-javascripts/common/calculateTimeDifference.dev.js\");\n/* harmony import */ var _common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/mainNotification.dev.js */ \"./dev-javascripts/common/mainNotification.dev.js\");\n/* harmony import */ var _chat_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.dev */ \"./dev-javascripts/chat/chat.dev.js\");\n\n\n\nlet allChatSection = document.getElementById(\"allChatSection\");\nlet activeChatSection = document.getElementById(\"activeChatSection\");\nasync function showActiveChatSection(chat) {\n  const activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n  let activeChatInputTextContent = document.getElementById(\"activeChatInputTextContent\");\n  activeChatInputTextContent.value = \"\";\n  activeChatMessageContainer.innerHTML = \"\";\n  let {\n    openActiveChatInputBox\n  } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../chat.dev.js */ \"./dev-javascripts/chat/chat.dev.js\"));\n  openActiveChatInputBox();\n  updateActiveChatSection(chat); /////////////////////\n\n  const {\n    checkTimeAndCreateOldMessage\n  } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n  fetch(`/message/fetch-messages/${chat._id}`).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(data => {\n    if (data.isSuccess) {\n      console.log(data.allMessages);\n      checkTimeAndCreateOldMessage(data.allMessages, activeChatMessageContainer);\n      if (activeChatMessageContainer.lastElementChild) activeChatMessageContainer.lastElementChild.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"center\",\n        inline: \"nearest\"\n      });\n    } else {\n      (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(data.error, \"error\");\n    }\n  }).catch(err => {\n    console.log(err);\n    (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(\"Server Error In Accessing Messages, Please Refresh Your Page\", \"error\");\n  });\n  allChatSection.classList.add(\"all-chat-section--hide\");\n  activeChatSection.classList.remove(\"active-chat-section--hide\");\n  (0,_chat_dev__WEBPACK_IMPORTED_MODULE_2__.adjustMessageContainerBottomPadding)();\n}\nasync function updateActiveChatSection(chat) {\n  let {\n    closeReplyMessageBox\n  } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_replyMessageBox_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./replyMessageBox.dev.js */ \"./dev-javascripts/chat/js/replyMessageBox.dev.js\"));\n  closeReplyMessageBox();\n  activeChatSection.dataset.chatId = chat._id;\n  const activeChatHeader = document.getElementById(\"activeChatHeader\");\n  const activeChatHeaderPic = document.getElementById(\"activeChatHeaderPic\");\n  const activeChatImg = document.getElementById(\"activeChatImg\");\n  const activeChatHeaderName = document.getElementById(\"activeChatHeaderName\");\n  const activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n  const activeChatInputContainer = document.getElementById(\"activeChatInputContainer\");\n  activeChatHeader.dataset.chatId = chat._id;\n\n  if (chat.hasOwnProperty(\"chatPic\") && chat.chatPic !== \"\") {\n    activeChatImg.src = chat.chatPic;\n    activeChatHeaderPic.classList.add(\"active-chat-header__pic--hide-svg\");\n    activeChatHeaderPic.classList.remove(\"active-chat-header__pic--hide-img\");\n  } else {\n    activeChatHeaderPic.classList.add(\"active-chat-header__pic--hide-img\");\n    activeChatHeaderPic.classList.remove(\"active-chat-header__pic--hide-svg\");\n  }\n\n  activeChatHeaderName.textContent = chat.chatName;\n\n  if (!chat.isGroupChat) {\n    if (chat.isUserActive) {\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      activeChatHeaderStatus.textContent = \"Active\";\n    } else {\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      activeChatHeaderStatus.textContent = `last active ${(0,_common_calculateTimeDifference_dev_js__WEBPACK_IMPORTED_MODULE_0__.timeDifferenceFromNow)(chat.userLastActive)} ago`;\n    }\n  } else {\n    activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    activeChatHeaderStatus.textContent = \"\";\n  }\n\n  onOffActiveChatInputContainer(chat);\n}\nasync function clearActiveChatMessageContainer() {\n  let activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n  activeChatMessageContainer.innerHTML = \"\";\n}\nasync function createMessageSeenByModal() {\n  let chatMainContainer = document.getElementById(\"chatMainContainer\");\n\n  if (chatMainContainer) {\n    let messageSeenByModal = document.createElement(\"div\");\n    messageSeenByModal.classList.add(\"inner-modal\", \"inner-modal--hide\", \"inner-modal--message-seen-by\");\n    messageSeenByModal.innerHTML = `\n    <div class=\"inner-modal-content inner-modal-content--message-seen-by\">\n    \n    <div class=\"inner-modal-header\">\n    <div class=\"inner-modal-header__title\">\n  Message seen by\n    </div>\n    <div class=\"inner-modal-header__message-count\">\n  20\n    </div>\n    </div>\n    <div class=\"inner-modal-main\">\n    <div class=\"message-seen-user-container\">\n    <div class=\"message-seen-user\">\n    <div class=\"message-seen-user__pic\">\n    <img src=\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\">\n    </div>\n    <div class=\"message-seen-user__fullname\">Rithik Pathak</div>\n    </div>\n    <div class=\"message-seen-user\">\n    <div class=\"message-seen-user__pic\">\n    <img src=\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\">\n    </div>\n    <div class=\"message-seen-user__fullname\">Rithik Pathak</div>\n    </div>\n    <div class=\"message-seen-user\">\n    <div class=\"message-seen-user__pic\">\n    <img src=\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\">\n    </div>\n    <div class=\"message-seen-user__fullname\">Rithik Pathak</div>\n    </div>\n    <div class=\"message-seen-user\">\n    <div class=\"message-seen-user__pic\">\n    <img src=\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\">\n    </div>\n    <div class=\"message-seen-user__fullname\">Rithik Pathak</div>\n    </div>\n    </div>\n    </div>\n  \n    `;\n    chatMainContainer.insertAdjacentElement(\"afterbegin\", messageSeenByModal);\n  }\n}\nasync function onOffActiveChatInputContainer(chat) {\n  const activeChatInputContainer = document.getElementById(\"activeChatInputContainer\");\n\n  if (chat.hasOwnProperty(\"canSendMessageToThisChat\") && chat.canSendMessageToThisChat === false) {\n    activeChatInputContainer.classList.add(\"active-chat-input-container--disable\");\n    activeChatInputContainer.classList.remove(\"active-chat-input-container--enable\");\n  } else {\n    activeChatInputContainer.classList.add(\"active-chat-input-container--enable\");\n    activeChatInputContainer.classList.remove(\"active-chat-input-container--disable\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUcsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXJCO0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7QUFDTyxlQUFlRSxxQkFBZixDQUFxQ0MsSUFBckMsRUFBMkM7RUFDaEQsTUFBTUMsMEJBQTBCLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUNqQyw0QkFEaUMsQ0FBbkM7RUFJQSxJQUFJSywwQkFBMEIsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQy9CLDRCQUQrQixDQUFqQztFQUlBSywwQkFBMEIsQ0FBQ0MsS0FBM0IsR0FBbUMsRUFBbkM7RUFDQUYsMEJBQTBCLENBQUNHLFNBQTNCLEdBQXVDLEVBQXZDO0VBQ0EsSUFBSTtJQUFFQztFQUFGLElBQTZCLE1BQU0sZ0pBQXZDO0VBQ0FBLHNCQUFzQjtFQUN0QkMsdUJBQXVCLENBQUNOLElBQUQsQ0FBdkIsQ0FiZ0QsQ0FlaEQ7O0VBQ0EsTUFBTTtJQUFFTztFQUFGLElBQW1DLE1BQU0sdVJBQS9DO0VBRUFDLEtBQUssQ0FBRSwyQkFBMEJSLElBQUksQ0FBQ1MsR0FBSSxFQUFyQyxDQUFMLENBQ0dDLElBREgsQ0FDUUMsUUFBUSxJQUFJO0lBQ2hCLElBQUlBLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtNQUNmLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0lBQ0Q7O0lBQ0QsT0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFFBQWYsQ0FBUDtFQUNELENBTkgsRUFPR0QsSUFQSCxDQU9RTSxJQUFJLElBQUk7SUFDWixJQUFJQSxJQUFJLENBQUNDLFNBQVQsRUFBb0I7TUFDbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNJ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QW1EO0VBQ3hELE1BQU13Qyx3QkFBd0IsR0FBRzVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUMvQiwwQkFEK0IsQ0FBakM7O0VBR0EsSUFDRUcsSUFBSSxDQUFDeUMsY0FBTCxDQUFvQiwwQkFBcEIsS0FDQXpDLElBQUksQ0FBQ3dELHdCQUFMLEtBQWtDLEtBRnBDLEVBR0U7SUFDQWhCLHdCQUF3QixDQUFDWCxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FDRSxzQ0FERjtJQUdBVSx3QkFBd0IsQ0FBQ1gsU0FBekIsQ0FBbUNFLE1BQW5DLENBQ0UscUNBREY7RUFHRCxDQVZELE1BVU87SUFDTFMsd0JBQXdCLENBQUNYLFNBQXpCLENBQW1DQyxHQUFuQyxDQUNFLHFDQURGO0lBR0FVLHdCQUF3QixDQUFDWCxTQUF6QixDQUFtQ0UsTUFBbkMsQ0FDRSxzQ0FERjtFQUdEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXYuanM/YmI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lRGlmZmVyZW5jZUZyb21Ob3cgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NhbGN1bGF0ZVRpbWVEaWZmZXJlbmNlLmRldi5qc1wiXHJcbmltcG9ydCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2LmpzXCJcclxuaW1wb3J0IHsgYWRqdXN0TWVzc2FnZUNvbnRhaW5lckJvdHRvbVBhZGRpbmcgfSBmcm9tIFwiLi4vY2hhdC5kZXZcIlxyXG5cclxubGV0IGFsbENoYXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxDaGF0U2VjdGlvblwiKVxyXG5sZXQgYWN0aXZlQ2hhdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRTZWN0aW9uXCIpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG93QWN0aXZlQ2hhdFNlY3Rpb24oY2hhdCkge1xyXG4gIGNvbnN0IGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyXCJcclxuICApXHJcblxyXG4gIGxldCBhY3RpdmVDaGF0SW5wdXRUZXh0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY3RpdmVDaGF0SW5wdXRUZXh0Q29udGVudFwiXHJcbiAgKVxyXG5cclxuICBhY3RpdmVDaGF0SW5wdXRUZXh0Q29udGVudC52YWx1ZSA9IFwiXCJcclxuICBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgbGV0IHsgb3BlbkFjdGl2ZUNoYXRJbnB1dEJveCB9ID0gYXdhaXQgaW1wb3J0KFwiLi4vY2hhdC5kZXYuanNcIilcclxuICBvcGVuQWN0aXZlQ2hhdElucHV0Qm94KClcclxuICB1cGRhdGVBY3RpdmVDaGF0U2VjdGlvbihjaGF0KVxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCB7IGNoZWNrVGltZUFuZENyZWF0ZU9sZE1lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcIi4vbWVzc2FnZS5kZXZcIilcclxuXHJcbiAgZmV0Y2goYC9tZXNzYWdlL2ZldGNoLW1lc3NhZ2VzLyR7Y2hhdC5faWR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5hbGxNZXNzYWdlcylcclxuICAgICAgICBjaGVja1RpbWVBbmRDcmVhdGVPbGRNZXNzYWdlKFxyXG4gICAgICAgICAgZGF0YS5hbGxNZXNzYWdlcyxcclxuICAgICAgICAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmIChhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKVxyXG4gICAgICAgICAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaW5saW5lOiBcIm5lYXJlc3RcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKGRhdGEuZXJyb3IsIFwiZXJyb3JcIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gQWNjZXNzaW5nIE1lc3NhZ2VzLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgYWxsQ2hhdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFsbC1jaGF0LXNlY3Rpb24tLWhpZGVcIilcclxuICBhY3RpdmVDaGF0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtc2VjdGlvbi0taGlkZVwiKVxyXG4gIGFkanVzdE1lc3NhZ2VDb250YWluZXJCb3R0b21QYWRkaW5nKClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uKGNoYXQpIHtcclxuICBsZXQgeyBjbG9zZVJlcGx5TWVzc2FnZUJveCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9yZXBseU1lc3NhZ2VCb3guZGV2LmpzXCIpXHJcbiAgY2xvc2VSZXBseU1lc3NhZ2VCb3goKVxyXG4gIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkID0gY2hhdC5faWRcclxuICBjb25zdCBhY3RpdmVDaGF0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SGVhZGVyXCIpXHJcbiAgY29uc3QgYWN0aXZlQ2hhdEhlYWRlclBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdEhlYWRlclBpY1wiKVxyXG4gIGNvbnN0IGFjdGl2ZUNoYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRJbWdcIilcclxuICBjb25zdCBhY3RpdmVDaGF0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdEhlYWRlck5hbWVcIilcclxuICBjb25zdCBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjdGl2ZUNoYXRIZWFkZXJTdGF0dXNcIlxyXG4gIClcclxuICBjb25zdCBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyXCJcclxuICApXHJcblxyXG4gIGFjdGl2ZUNoYXRIZWFkZXIuZGF0YXNldC5jaGF0SWQgPSBjaGF0Ll9pZFxyXG5cclxuICBpZiAoY2hhdC5oYXNPd25Qcm9wZXJ0eShcImNoYXRQaWNcIikgJiYgY2hhdC5jaGF0UGljICE9PSBcIlwiKSB7XHJcbiAgICBhY3RpdmVDaGF0SW1nLnNyYyA9IGNoYXQuY2hhdFBpY1xyXG5cclxuICAgIGFjdGl2ZUNoYXRIZWFkZXJQaWMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LWhlYWRlcl9fcGljLS1oaWRlLXN2Z1wiKVxyXG4gICAgYWN0aXZlQ2hhdEhlYWRlclBpYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtaGVhZGVyX19waWMtLWhpZGUtaW1nXCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIGFjdGl2ZUNoYXRIZWFkZXJQaWMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LWhlYWRlcl9fcGljLS1oaWRlLWltZ1wiKVxyXG4gICAgYWN0aXZlQ2hhdEhlYWRlclBpYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtaGVhZGVyX19waWMtLWhpZGUtc3ZnXCIpXHJcbiAgfVxyXG4gIGFjdGl2ZUNoYXRIZWFkZXJOYW1lLnRleHRDb250ZW50ID0gY2hhdC5jaGF0TmFtZVxyXG4gIGlmICghY2hhdC5pc0dyb3VwQ2hhdCkge1xyXG4gICAgaWYgKGNoYXQuaXNVc2VyQWN0aXZlKSB7XHJcbiAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LWhlYWRlcl9fY2hhdC1zdGF0dXMtLWhpZGVcIlxyXG4gICAgICApXHJcbiAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIkFjdGl2ZVwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgXCJhY3RpdmUtY2hhdC1oZWFkZXJfX2NoYXQtc3RhdHVzLS1oaWRlXCJcclxuICAgICAgKVxyXG5cclxuICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IGBsYXN0IGFjdGl2ZSAke3RpbWVEaWZmZXJlbmNlRnJvbU5vdyhcclxuICAgICAgICBjaGF0LnVzZXJMYXN0QWN0aXZlXHJcbiAgICAgICl9IGFnb2BcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICBcImFjdGl2ZS1jaGF0LWhlYWRlcl9fY2hhdC1zdGF0dXMtLWhpZGVcIlxyXG4gICAgKVxyXG4gICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCJcclxuICB9XHJcblxyXG4gIG9uT2ZmQWN0aXZlQ2hhdElucHV0Q29udGFpbmVyKGNoYXQpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhckFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyKCkge1xyXG4gIGxldCBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lclwiXHJcbiAgKVxyXG4gIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VTZWVuQnlNb2RhbCgpIHtcclxuICBsZXQgY2hhdE1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRNYWluQ29udGFpbmVyXCIpXHJcbiAgaWYgKGNoYXRNYWluQ29udGFpbmVyKSB7XHJcbiAgICBsZXQgbWVzc2FnZVNlZW5CeU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbWVzc2FnZVNlZW5CeU1vZGFsLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIFwiaW5uZXItbW9kYWxcIixcclxuICAgICAgXCJpbm5lci1tb2RhbC0taGlkZVwiLFxyXG4gICAgICBcImlubmVyLW1vZGFsLS1tZXNzYWdlLXNlZW4tYnlcIlxyXG4gICAgKVxyXG4gICAgbWVzc2FnZVNlZW5CeU1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpbm5lci1tb2RhbC1jb250ZW50IGlubmVyLW1vZGFsLWNvbnRlbnQtLW1lc3NhZ2Utc2Vlbi1ieVwiPlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWwtaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWwtaGVhZGVyX190aXRsZVwiPlxyXG4gIE1lc3NhZ2Ugc2VlbiBieVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWwtaGVhZGVyX19tZXNzYWdlLWNvdW50XCI+XHJcbiAgMjBcclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWwtbWFpblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJfX3BpY1wiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9maWxlL2Nvb2wtbmVvbi1ibHVlLXByb2ZpbGUtcGljdHVyZS11OXk5eWRvOTcxazltZGNmLXU5eTl5ZG85NzFrOW1kY2YuanBnXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlcl9fZnVsbG5hbWVcIj5SaXRoaWsgUGF0aGFrPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyX19waWNcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvZmlsZS9jb29sLW5lb24tYmx1ZS1wcm9maWxlLXBpY3R1cmUtdTl5OXlkbzk3MWs5bWRjZi11OXk5eWRvOTcxazltZGNmLmpwZ1wiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJfX2Z1bGxuYW1lXCI+Uml0aGlrIFBhdGhhazwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlcl9fcGljXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2ZpbGUvY29vbC1uZW9uLWJsdWUtcHJvZmlsZS1waWN0dXJlLXU5eTl5ZG85NzFrOW1kY2YtdTl5OXlkbzk3MWs5bWRjZi5qcGdcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyX19mdWxsbmFtZVwiPlJpdGhpayBQYXRoYWs8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJfX3BpY1wiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9maWxlL2Nvb2wtbmVvbi1ibHVlLXByb2ZpbGUtcGljdHVyZS11OXk5eWRvOTcxazltZGNmLXU5eTl5ZG85NzFrOW1kY2YuanBnXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlcl9fZnVsbG5hbWVcIj5SaXRoaWsgUGF0aGFrPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgICBgXHJcblxyXG4gICAgY2hhdE1haW5Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBtZXNzYWdlU2VlbkJ5TW9kYWwpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb25PZmZBY3RpdmVDaGF0SW5wdXRDb250YWluZXIoY2hhdCkge1xyXG4gIGNvbnN0IGFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY3RpdmVDaGF0SW5wdXRDb250YWluZXJcIlxyXG4gIClcclxuICBpZiAoXHJcbiAgICBjaGF0Lmhhc093blByb3BlcnR5KFwiY2FuU2VuZE1lc3NhZ2VUb1RoaXNDaGF0XCIpICYmXHJcbiAgICBjaGF0LmNhblNlbmRNZXNzYWdlVG9UaGlzQ2hhdCA9PT0gZmFsc2VcclxuICApIHtcclxuICAgIGFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBcImFjdGl2ZS1jaGF0LWlucHV0LWNvbnRhaW5lci0tZGlzYWJsZVwiXHJcbiAgICApXHJcbiAgICBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgXCJhY3RpdmUtY2hhdC1pbnB1dC1jb250YWluZXItLWVuYWJsZVwiXHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIGFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBcImFjdGl2ZS1jaGF0LWlucHV0LWNvbnRhaW5lci0tZW5hYmxlXCJcclxuICAgIClcclxuICAgIGFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICBcImFjdGl2ZS1jaGF0LWlucHV0LWNvbnRhaW5lci0tZGlzYWJsZVwiXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0aW1lRGlmZmVyZW5jZUZyb21Ob3ciLCJjcmVhdGVNYWluTm90aWZpY2F0aW9uIiwiYWRqdXN0TWVzc2FnZUNvbnRhaW5lckJvdHRvbVBhZGRpbmciLCJhbGxDaGF0U2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhY3RpdmVDaGF0U2VjdGlvbiIsInNob3dBY3RpdmVDaGF0U2VjdGlvbiIsImNoYXQiLCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciIsImFjdGl2ZUNoYXRJbnB1dFRleHRDb250ZW50IiwidmFsdWUiLCJpbm5lckhUTUwiLCJvcGVuQWN0aXZlQ2hhdElucHV0Qm94IiwidXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24iLCJjaGVja1RpbWVBbmRDcmVhdGVPbGRNZXNzYWdlIiwiZmV0Y2giLCJfaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZGF0YSIsImlzU3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJhbGxNZXNzYWdlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJlcnJvciIsImNhdGNoIiwiZXJyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY2xvc2VSZXBseU1lc3NhZ2VCb3giLCJkYXRhc2V0IiwiY2hhdElkIiwiYWN0aXZlQ2hhdEhlYWRlciIsImFjdGl2ZUNoYXRIZWFkZXJQaWMiLCJhY3RpdmVDaGF0SW1nIiwiYWN0aXZlQ2hhdEhlYWRlck5hbWUiLCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzIiwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyIiwiaGFzT3duUHJvcGVydHkiLCJjaGF0UGljIiwic3JjIiwidGV4dENvbnRlbnQiLCJjaGF0TmFtZSIsImlzR3JvdXBDaGF0IiwiaXNVc2VyQWN0aXZlIiwidXNlckxhc3RBY3RpdmUiLCJvbk9mZkFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lciIsImNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJjcmVhdGVNZXNzYWdlU2VlbkJ5TW9kYWwiLCJjaGF0TWFpbkNvbnRhaW5lciIsIm1lc3NhZ2VTZWVuQnlNb2RhbCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJjYW5TZW5kTWVzc2FnZVRvVGhpc0NoYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/showActiveChatSection.dev.js\n");

/***/ }),

/***/ "./dev-javascripts/common/calculateTimeDifference.dev.js":
/*!***************************************************************!*\
  !*** ./dev-javascripts/common/calculateTimeDifference.dev.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeDifferenceFromNow\": () => (/* binding */ timeDifferenceFromNow)\n/* harmony export */ });\nfunction timeDifferenceFromNow(date) {\n  let timeStandard = {\n    sec: 1000,\n    min: 60 * 1000,\n    hour: 60 * 60 * 1000,\n    day: 24 * 60 * 60 * 1000,\n    week: 7 * 24 * 60 * 60 * 1000,\n    month: 30 * 24 * 60 * 60 * 1000,\n    year: 365 * 24 * 60 * 60 * 1000\n  };\n  let dateObj = date;\n\n  if (typeof date == \"string\") {\n    dateObj = new Date(date);\n  }\n\n  let timeDiff = Date.now() - dateObj.getTime(); // in milisec\n\n  if (timeDiff >= timeStandard.year) {\n    let count = Math.round(timeDiff / timeStandard.year);\n    return count + \"year\";\n  } else if (timeDiff >= timeStandard.month) {\n    let count = Math.round(timeDiff / timeStandard.month);\n    return count + \"mo\";\n  } else if (timeDiff >= timeStandard.week) {\n    let count = Math.round(timeDiff / timeStandard.week);\n    return count + \"week\";\n  } else if (timeDiff >= timeStandard.day) {\n    let count = Math.round(timeDiff / timeStandard.day);\n    return count + \"day\";\n  } else if (timeDiff >= timeStandard.hour) {\n    let count = Math.round(timeDiff / timeStandard.hour);\n    return count + \"hour\";\n  } else if (timeDiff >= timeStandard.min) {\n    let count = Math.round(timeDiff / timeStandard.min);\n    return count + \"min\";\n  } else if (timeDiff >= timeStandard.sec) {\n    let count = Math.round(timeDiff / timeStandard.sec);\n    return count + \"sec\";\n  } else {\n    return \"1sec\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY29tbW9uL2NhbGN1bGF0ZVRpbWVEaWZmZXJlbmNlLmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EscUJBQVQsQ0FBK0JDLElBQS9CLEVBQXFDO0VBQzFDLElBQUlDLFlBQVksR0FBRztJQUNqQkMsR0FBRyxFQUFFLElBRFk7SUFFakJDLEdBQUcsRUFBRSxLQUFLLElBRk87SUFHakJDLElBQUksRUFBRSxLQUFLLEVBQUwsR0FBVSxJQUhDO0lBSWpCQyxHQUFHLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBSkg7SUFLakJDLElBQUksRUFBRSxJQUFJLEVBQUosR0FBUyxFQUFULEdBQWMsRUFBZCxHQUFtQixJQUxSO0lBTWpCQyxLQUFLLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLEVBQWYsR0FBb0IsSUFOVjtJQU9qQkMsSUFBSSxFQUFFLE1BQU0sRUFBTixHQUFXLEVBQVgsR0FBZ0IsRUFBaEIsR0FBcUI7RUFQVixDQUFuQjtFQVNBLElBQUlDLE9BQU8sR0FBR1QsSUFBZDs7RUFDQSxJQUFJLE9BQU9BLElBQVAsSUFBZSxRQUFuQixFQUE2QjtJQUMzQlMsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBU1YsSUFBVCxDQUFWO0VBQ0Q7O0VBQ0QsSUFBSVcsUUFBUSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsS0FBYUgsT0FBTyxDQUFDSSxPQUFSLEVBQTVCLENBZDBDLENBY0k7O0VBQzlDLElBQUlGLFFBQVEsSUFBSVYsWUFBWSxDQUFDTyxJQUE3QixFQUFtQztJQUNqQyxJQUFJTSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ08sSUFBbkMsQ0FBWjtJQUNBLE9BQU9NLEtBQUssR0FBRyxNQUFmO0VBQ0QsQ0FIRCxNQUdPLElBQUlILFFBQVEsSUFBSVYsWUFBWSxDQUFDTSxLQUE3QixFQUFvQztJQUN6QyxJQUFJTyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ00sS0FBbkMsQ0FBWjtJQUNBLE9BQU9PLEtBQUssR0FBRyxJQUFmO0VBQ0QsQ0FITSxNQUdBLElBQUlILFFBQVEsSUFBSVYsWUFBWSxDQUFDSyxJQUE3QixFQUFtQztJQUN4QyxJQUFJUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ0ssSUFBbkMsQ0FBWjtJQUNBLE9BQU9RLEtBQUssR0FBRyxNQUFmO0VBQ0QsQ0FITSxNQUdBLElBQUlILFFBQVEsSUFBSVYsWUFBWSxDQUFDSSxHQUE3QixFQUFrQztJQUN2QyxJQUFJUyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ0ksR0FBbkMsQ0FBWjtJQUNBLE9BQU9TLEtBQUssR0FBRyxLQUFmO0VBQ0QsQ0FITSxNQUdBLElBQUlILFFBQVEsSUFBSVYsWUFBWSxDQUFDRyxJQUE3QixFQUFtQztJQUN4QyxJQUFJVSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ0csSUFBbkMsQ0FBWjtJQUNBLE9BQU9VLEtBQUssR0FBRyxNQUFmO0VBQ0QsQ0FITSxNQUdBLElBQUlILFFBQVEsSUFBSVYsWUFBWSxDQUFDRSxHQUE3QixFQUFrQztJQUN2QyxJQUFJVyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ0UsR0FBbkMsQ0FBWjtJQUNBLE9BQU9XLEtBQUssR0FBRyxLQUFmO0VBQ0QsQ0FITSxNQUdBLElBQUlILFFBQVEsSUFBSVYsWUFBWSxDQUFDQyxHQUE3QixFQUFrQztJQUN2QyxJQUFJWSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUdWLFlBQVksQ0FBQ0MsR0FBbkMsQ0FBWjtJQUNBLE9BQU9ZLEtBQUssR0FBRyxLQUFmO0VBQ0QsQ0FITSxNQUdBO0lBQ0wsT0FBTyxNQUFQO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2NvbW1vbi9jYWxjdWxhdGVUaW1lRGlmZmVyZW5jZS5kZXYuanM/ZGNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGltZURpZmZlcmVuY2VGcm9tTm93KGRhdGUpIHtcclxuICBsZXQgdGltZVN0YW5kYXJkID0ge1xyXG4gICAgc2VjOiAxMDAwLFxyXG4gICAgbWluOiA2MCAqIDEwMDAsXHJcbiAgICBob3VyOiA2MCAqIDYwICogMTAwMCxcclxuICAgIGRheTogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICAgIHdlZWs6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gICAgbW9udGg6IDMwICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICAgIHllYXI6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICB9XHJcbiAgbGV0IGRhdGVPYmogPSBkYXRlXHJcbiAgaWYgKHR5cGVvZiBkYXRlID09IFwic3RyaW5nXCIpIHtcclxuICAgIGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlKVxyXG4gIH1cclxuICBsZXQgdGltZURpZmYgPSBEYXRlLm5vdygpIC0gZGF0ZU9iai5nZXRUaW1lKCkgLy8gaW4gbWlsaXNlY1xyXG4gIGlmICh0aW1lRGlmZiA+PSB0aW1lU3RhbmRhcmQueWVhcikge1xyXG4gICAgbGV0IGNvdW50ID0gTWF0aC5yb3VuZCh0aW1lRGlmZiAvIHRpbWVTdGFuZGFyZC55ZWFyKVxyXG4gICAgcmV0dXJuIGNvdW50ICsgXCJ5ZWFyXCJcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmID49IHRpbWVTdGFuZGFyZC5tb250aCkge1xyXG4gICAgbGV0IGNvdW50ID0gTWF0aC5yb3VuZCh0aW1lRGlmZiAvIHRpbWVTdGFuZGFyZC5tb250aClcclxuICAgIHJldHVybiBjb3VudCArIFwibW9cIlxyXG4gIH0gZWxzZSBpZiAodGltZURpZmYgPj0gdGltZVN0YW5kYXJkLndlZWspIHtcclxuICAgIGxldCBjb3VudCA9IE1hdGgucm91bmQodGltZURpZmYgLyB0aW1lU3RhbmRhcmQud2VlaylcclxuICAgIHJldHVybiBjb3VudCArIFwid2Vla1wiXHJcbiAgfSBlbHNlIGlmICh0aW1lRGlmZiA+PSB0aW1lU3RhbmRhcmQuZGF5KSB7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gdGltZVN0YW5kYXJkLmRheSlcclxuICAgIHJldHVybiBjb3VudCArIFwiZGF5XCJcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmID49IHRpbWVTdGFuZGFyZC5ob3VyKSB7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gdGltZVN0YW5kYXJkLmhvdXIpXHJcbiAgICByZXR1cm4gY291bnQgKyBcImhvdXJcIlxyXG4gIH0gZWxzZSBpZiAodGltZURpZmYgPj0gdGltZVN0YW5kYXJkLm1pbikge1xyXG4gICAgbGV0IGNvdW50ID0gTWF0aC5yb3VuZCh0aW1lRGlmZiAvIHRpbWVTdGFuZGFyZC5taW4pXHJcbiAgICByZXR1cm4gY291bnQgKyBcIm1pblwiXHJcbiAgfSBlbHNlIGlmICh0aW1lRGlmZiA+PSB0aW1lU3RhbmRhcmQuc2VjKSB7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gdGltZVN0YW5kYXJkLnNlYylcclxuICAgIHJldHVybiBjb3VudCArIFwic2VjXCJcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiMXNlY1wiXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0aW1lRGlmZmVyZW5jZUZyb21Ob3ciLCJkYXRlIiwidGltZVN0YW5kYXJkIiwic2VjIiwibWluIiwiaG91ciIsImRheSIsIndlZWsiLCJtb250aCIsInllYXIiLCJkYXRlT2JqIiwiRGF0ZSIsInRpbWVEaWZmIiwibm93IiwiZ2V0VGltZSIsImNvdW50IiwiTWF0aCIsInJvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/common/calculateTimeDifference.dev.js\n");

/***/ })

}]);