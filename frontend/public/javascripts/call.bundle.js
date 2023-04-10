/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev-javascripts/call/call.dev.js":
/*!******************************************!*\
  !*** ./dev-javascripts/call/call.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval(";\n\n(async function () {\n  if (!IS_INIT_CALL_MODULE) {\n    let {\n      createCalltypeInfoContainer\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n    createCalltypeInfoContainer();\n    let {\n      createChatRoom\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_createChatRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createChatRoom.dev */ \"./dev-javascripts/call/js/createChatRoom.dev.js\"));\n    createChatRoom();\n    IS_INIT_CALL_MODULE = true;\n  }\n})();\n\nfunction initialiseEventForCallModule() {// initialize event to active chat\n  // active chat to all chat btn\n  //   const ActiveChatToAllChatBtn = document.getElementById(\n  //     \"ActiveChatToAllChatBtn\"\n  //   )\n  //   ActiveChatToAllChatBtn.addEventListener(\"click\", async () => {\n  //     location.hash = \"\"\n  //     if (activeChatSection.dataset.chatId !== \"\") {\n  //       let { sendChatMessageStopTypingSocket } = await import(\n  //         \"../socket/event-emitter/chat-socket\"\n  //       )\n  //       sendChatMessageStopTypingSocket(activeChatSection.dataset.chatId)\n  //       isUserTyping = false\n  //     }\n  //   })\n  //   //active chat header pic and active chat header name\n  //   let activeChatHeaderPic = document.getElementById(\"activeChatHeaderPic\")\n  //   activeChatHeaderPic.addEventListener(\"click\", async () => {\n  //     let activeChatId = activeChatSection.dataset.chatId\n  //     if (activeChatId != \"\") {\n  //       let { createActiveChatInfoModal } = await import(\n  //         \"./js/createActiveChatInfoModal.dev.js\"\n  //       )\n  //       createActiveChatInfoModal(activeChatId)\n  //     }\n  //   })\n  //   let activeChatHeaderName = document.getElementById(\"activeChatHeaderName\")\n  //   activeChatHeaderName.addEventListener(\"click\", async () => {\n  //     let activeChatId = activeChatSection.dataset.chatId\n  //     if (activeChatId != \"\") {\n  //       let { createActiveChatInfoModal } = await import(\n  //         \"./js/createActiveChatInfoModal.dev.js\"\n  //       )\n  //       createActiveChatInfoModal(activeChatId)\n  //     }\n  //   })\n  //   ////////////////////\n  //   // create new group chat btn\n  //   // group chat form Modal and assign event to btn\n  //   const createNewGroupChatBtn = document.getElementById(\"createNewGroupChatBtn\")\n  //   createNewGroupChatBtn.addEventListener(\"click\", async () => {\n  //     let { createGroupChatFormModal } = await import(\n  //       \"./js/createGroupChatFormModal.dev\"\n  //     )\n  //     createGroupChatFormModal()\n  //   })\n  //   document\n  //     .getElementById(\"activeChatInputReplyBoxCloseBtn\")\n  //     .addEventListener(\"click\", async () => {\n  //       let { closeReplyMessageBox } = await import(\"./js/replyMessageBox.dev\")\n  //       closeReplyMessageBox()\n  //     })\n  //   //send chat:message-typing event\n  //   activeChatInputTextContent.addEventListener(\"input\", async e => {\n  //     if (activeChatSection.dataset.chatId !== \"\") {\n  //       if (\n  //         lastActiveChatId !== \"\" &&\n  //         lastActiveChatId !== activeChatSection.dataset.chatId\n  //       ) {\n  //         let { sendChatMessageStopTypingSocket } = await import(\n  //           \"../socket/event-emitter/chat-socket\"\n  //         )\n  //         sendChatMessageStopTypingSocket(lastActiveChatId)\n  //         isUserTyping = false\n  //         lastActiveChatId = activeChatSection.dataset.chatId.toString()\n  //       }\n  //       lastActiveChatId = activeChatSection.dataset.chatId.toString()\n  //       let chatId = activeChatSection.dataset.chatId.toString()\n  //       const inputValue = activeChatInputTextContent.value.trim()\n  //       if (inputValue && !isUserTyping) {\n  //         isUserTyping = true\n  //         let { sendChatMessageStartTypingSocket } = await import(\n  //           \"../socket/event-emitter/chat-socket\"\n  //         )\n  //         sendChatMessageStartTypingSocket(chatId)\n  //       } else if (!inputValue && isUserTyping) {\n  //         isUserTyping = false\n  //         let { sendChatMessageStopTypingSocket } = await import(\n  //           \"../socket/event-emitter/chat-socket\"\n  //         )\n  //         sendChatMessageStopTypingSocket(chatId)\n  //       }\n  //     }\n  //   })\n  //   allChatChatBoxContainer.addEventListener(\"click\", async e => {\n  //     let chatBox = e.target.closest(`.chat-box`)\n  //     if (chatBox && allChatChatBoxContainer.contains(chatBox)) {\n  //       let chatId = chatBox.dataset.chatId\n  //       if (chatId) {\n  //         let { fetchActiveChat } = await import(\"./js/fetchActiveChat.dev\")\n  //         fetchActiveChat(chatId)\n  //       }\n  //     } else {\n  //       return\n  //     }\n  //   })\n  //   let activeChatMessageContainer = document.getElementById(\n  //     \"activeChatMessageContainer\"\n  //   )\n  //   activeChatMessageContainer.addEventListener(\"click\", async e => {\n  //     console.log(\"activeChatMessageContainer click\")\n  //     let userMessageBox = e.target.closest(`.active-chat-user-message-box`)\n  //     let userMessageBoxBtn = e.target.closest(\n  //       `.active-chat-user-message-box__btn[data-message-box-btn =\"user\"]`\n  //     )\n  //     let userMessageContentBox = e.target.closest(\n  //       `.active-chat-user-message-box__content-box`\n  //     )\n  //     if (\n  //       userMessageBoxBtn &&\n  //       activeChatMessageContainer.contains(userMessageBoxBtn)\n  //     ) {\n  //       userMessageBox.classList.add(\"active-chat-user-message-box--selected\")\n  //       let { createUserMessageOptionModal } = await import(\n  //         \"./js/userMessageOptionModal.dev\"\n  //       )\n  //       createUserMessageOptionModal(userMessageBox)\n  //     } else if (\n  //       userMessageContentBox &&\n  //       activeChatMessageContainer.contains(userMessageContentBox)\n  //     ) {\n  //       if (\n  //         userMessageBox.classList.contains(\n  //           \"active-chat-user-message-box--replied-message\"\n  //         )\n  //       ) {\n  //         let repliedMessageId = userMessageBox.dataset.repliedMessageId\n  //         let repliedUserMessageBox = document.querySelector(\n  //           `.active-chat-user-message-box[data-message-id=\"${repliedMessageId}\"]`\n  //         )\n  //         if (repliedUserMessageBox) {\n  //           repliedUserMessageBox.scrollIntoView({\n  //             behavior: \"smooth\",\n  //             block: \"center\",\n  //             inline: \"nearest\"\n  //           })\n  //           repliedUserMessageBox.classList.add(\n  //             \"active-chat-user-message-box--highlight\"\n  //           )\n  //           setTimeout(function () {\n  //             repliedUserMessageBox.classList.remove(\n  //               \"active-chat-user-message-box--highlight\"\n  //             )\n  //           }, 1000)\n  //         }\n  //       }\n  //     } else {\n  //       return\n  //     }\n  //   })\n  //   activeChatMessageContainer.addEventListener(\"dblclick\", async e => {\n  //     let userMessageBox = e.target.closest(`.active-chat-user-message-box`)\n  //     if (userMessageBox && activeChatMessageContainer.contains(userMessageBox)) {\n  //       let messageId = userMessageBox.dataset.messageId\n  //       let { openReplyMessageBox } = await import(\"./js/replyMessageBox.dev.js\")\n  //       openReplyMessageBox(messageId)\n  //     } else {\n  //       return\n  //     }\n  //   })\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2FsbC9jYWxsLmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLG1CQUFMLEVBQTBCO0lBQ3hCLElBQUk7TUFBRUM7SUFBRixJQUFrQyxNQUFNLGlQQUE1QztJQUdBQSwyQkFBMkI7SUFDM0IsSUFBSTtNQUFFQztJQUFGLElBQXFCLE1BQU0sNE5BQS9CO0lBQ0FBLGNBQWM7SUFFZEYsbUJBQW1CLEdBQUcsSUFBdEI7RUFDRDtBQUNGLENBWEE7O0FBYUQsU0FBU0csNEJBQVQsR0FBd0MsQ0FDdEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2NhbGwvY2FsbC5kZXYuanM/ZDdmZCJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIUlTX0lOSVRfQ0FMTF9NT0RVTEUpIHtcclxuICAgIGxldCB7IGNyZWF0ZUNhbGx0eXBlSW5mb0NvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4vanMvY2FsbHR5cGVJbmZvQ29udGFpbmVyLmRldlwiXHJcbiAgICApXHJcbiAgICBjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIoKVxyXG4gICAgbGV0IHsgY3JlYXRlQ2hhdFJvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvY3JlYXRlQ2hhdFJvb20uZGV2XCIpXHJcbiAgICBjcmVhdGVDaGF0Um9vbSgpXHJcblxyXG4gICAgSVNfSU5JVF9DQUxMX01PRFVMRSA9IHRydWVcclxuICB9XHJcbn0pKClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUoKSB7XHJcbiAgLy8gaW5pdGlhbGl6ZSBldmVudCB0byBhY3RpdmUgY2hhdFxyXG4gIC8vIGFjdGl2ZSBjaGF0IHRvIGFsbCBjaGF0IGJ0blxyXG4gIC8vICAgY29uc3QgQWN0aXZlQ2hhdFRvQWxsQ2hhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIC8vICAgICBcIkFjdGl2ZUNoYXRUb0FsbENoYXRCdG5cIlxyXG4gIC8vICAgKVxyXG4gIC8vICAgQWN0aXZlQ2hhdFRvQWxsQ2hhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBsb2NhdGlvbi5oYXNoID0gXCJcIlxyXG4gIC8vICAgICBpZiAoYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQgIT09IFwiXCIpIHtcclxuICAvLyAgICAgICBsZXQgeyBzZW5kQ2hhdE1lc3NhZ2VTdG9wVHlwaW5nU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgLy8gICAgICAgICBcIi4uL3NvY2tldC9ldmVudC1lbWl0dGVyL2NoYXQtc29ja2V0XCJcclxuICAvLyAgICAgICApXHJcbiAgLy8gICAgICAgc2VuZENoYXRNZXNzYWdlU3RvcFR5cGluZ1NvY2tldChhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZClcclxuICAvLyAgICAgICBpc1VzZXJUeXBpbmcgPSBmYWxzZVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLy9hY3RpdmUgY2hhdCBoZWFkZXIgcGljIGFuZCBhY3RpdmUgY2hhdCBoZWFkZXIgbmFtZVxyXG4gIC8vICAgbGV0IGFjdGl2ZUNoYXRIZWFkZXJQaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRIZWFkZXJQaWNcIilcclxuICAvLyAgIGFjdGl2ZUNoYXRIZWFkZXJQaWMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgbGV0IGFjdGl2ZUNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcbiAgLy8gICAgIGlmIChhY3RpdmVDaGF0SWQgIT0gXCJcIikge1xyXG4gIC8vICAgICAgIGxldCB7IGNyZWF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwgfSA9IGF3YWl0IGltcG9ydChcclxuICAvLyAgICAgICAgIFwiLi9qcy9jcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsLmRldi5qc1wiXHJcbiAgLy8gICAgICAgKVxyXG4gIC8vICAgICAgIGNyZWF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwoYWN0aXZlQ2hhdElkKVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgbGV0IGFjdGl2ZUNoYXRIZWFkZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SGVhZGVyTmFtZVwiKVxyXG4gIC8vICAgYWN0aXZlQ2hhdEhlYWRlck5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgbGV0IGFjdGl2ZUNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcbiAgLy8gICAgIGlmIChhY3RpdmVDaGF0SWQgIT0gXCJcIikge1xyXG4gIC8vICAgICAgIGxldCB7IGNyZWF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwgfSA9IGF3YWl0IGltcG9ydChcclxuICAvLyAgICAgICAgIFwiLi9qcy9jcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsLmRldi5qc1wiXHJcbiAgLy8gICAgICAgKVxyXG4gIC8vICAgICAgIGNyZWF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwoYWN0aXZlQ2hhdElkKVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyAgIC8vIGNyZWF0ZSBuZXcgZ3JvdXAgY2hhdCBidG5cclxuICAvLyAgIC8vIGdyb3VwIGNoYXQgZm9ybSBNb2RhbCBhbmQgYXNzaWduIGV2ZW50IHRvIGJ0blxyXG4gIC8vICAgY29uc3QgY3JlYXRlTmV3R3JvdXBDaGF0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVOZXdHcm91cENoYXRCdG5cIilcclxuICAvLyAgIGNyZWF0ZU5ld0dyb3VwQ2hhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBsZXQgeyBjcmVhdGVHcm91cENoYXRGb3JtTW9kYWwgfSA9IGF3YWl0IGltcG9ydChcclxuICAvLyAgICAgICBcIi4vanMvY3JlYXRlR3JvdXBDaGF0Rm9ybU1vZGFsLmRldlwiXHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgY3JlYXRlR3JvdXBDaGF0Rm9ybU1vZGFsKClcclxuICAvLyAgIH0pXHJcbiAgLy8gICBkb2N1bWVudFxyXG4gIC8vICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SW5wdXRSZXBseUJveENsb3NlQnRuXCIpXHJcbiAgLy8gICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICAgIGxldCB7IGNsb3NlUmVwbHlNZXNzYWdlQm94IH0gPSBhd2FpdCBpbXBvcnQoXCIuL2pzL3JlcGx5TWVzc2FnZUJveC5kZXZcIilcclxuICAvLyAgICAgICBjbG9zZVJlcGx5TWVzc2FnZUJveCgpXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAvL3NlbmQgY2hhdDptZXNzYWdlLXR5cGluZyBldmVudFxyXG4gIC8vICAgYWN0aXZlQ2hhdElucHV0VGV4dENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGFzeW5jIGUgPT4ge1xyXG4gIC8vICAgICBpZiAoYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQgIT09IFwiXCIpIHtcclxuICAvLyAgICAgICBpZiAoXHJcbiAgLy8gICAgICAgICBsYXN0QWN0aXZlQ2hhdElkICE9PSBcIlwiICYmXHJcbiAgLy8gICAgICAgICBsYXN0QWN0aXZlQ2hhdElkICE9PSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gIC8vICAgICAgICkge1xyXG4gIC8vICAgICAgICAgbGV0IHsgc2VuZENoYXRNZXNzYWdlU3RvcFR5cGluZ1NvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gIC8vICAgICAgICAgICBcIi4uL3NvY2tldC9ldmVudC1lbWl0dGVyL2NoYXQtc29ja2V0XCJcclxuICAvLyAgICAgICAgIClcclxuICAvLyAgICAgICAgIHNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQobGFzdEFjdGl2ZUNoYXRJZClcclxuICAvLyAgICAgICAgIGlzVXNlclR5cGluZyA9IGZhbHNlXHJcbiAgLy8gICAgICAgICBsYXN0QWN0aXZlQ2hhdElkID0gYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBsYXN0QWN0aXZlQ2hhdElkID0gYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKVxyXG4gIC8vICAgICAgIGxldCBjaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpXHJcbiAgLy8gICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGFjdGl2ZUNoYXRJbnB1dFRleHRDb250ZW50LnZhbHVlLnRyaW0oKVxyXG4gIC8vICAgICAgIGlmIChpbnB1dFZhbHVlICYmICFpc1VzZXJUeXBpbmcpIHtcclxuICAvLyAgICAgICAgIGlzVXNlclR5cGluZyA9IHRydWVcclxuICAvLyAgICAgICAgIGxldCB7IHNlbmRDaGF0TWVzc2FnZVN0YXJ0VHlwaW5nU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgLy8gICAgICAgICAgIFwiLi4vc29ja2V0L2V2ZW50LWVtaXR0ZXIvY2hhdC1zb2NrZXRcIlxyXG4gIC8vICAgICAgICAgKVxyXG4gIC8vICAgICAgICAgc2VuZENoYXRNZXNzYWdlU3RhcnRUeXBpbmdTb2NrZXQoY2hhdElkKVxyXG4gIC8vICAgICAgIH0gZWxzZSBpZiAoIWlucHV0VmFsdWUgJiYgaXNVc2VyVHlwaW5nKSB7XHJcbiAgLy8gICAgICAgICBpc1VzZXJUeXBpbmcgPSBmYWxzZVxyXG4gIC8vICAgICAgICAgbGV0IHsgc2VuZENoYXRNZXNzYWdlU3RvcFR5cGluZ1NvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gIC8vICAgICAgICAgICBcIi4uL3NvY2tldC9ldmVudC1lbWl0dGVyL2NoYXQtc29ja2V0XCJcclxuICAvLyAgICAgICAgIClcclxuICAvLyAgICAgICAgIHNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQoY2hhdElkKVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgIGFsbENoYXRDaGF0Qm94Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBlID0+IHtcclxuICAvLyAgICAgbGV0IGNoYXRCb3ggPSBlLnRhcmdldC5jbG9zZXN0KGAuY2hhdC1ib3hgKVxyXG4gIC8vICAgICBpZiAoY2hhdEJveCAmJiBhbGxDaGF0Q2hhdEJveENvbnRhaW5lci5jb250YWlucyhjaGF0Qm94KSkge1xyXG4gIC8vICAgICAgIGxldCBjaGF0SWQgPSBjaGF0Qm94LmRhdGFzZXQuY2hhdElkXHJcbiAgLy8gICAgICAgaWYgKGNoYXRJZCkge1xyXG4gIC8vICAgICAgICAgbGV0IHsgZmV0Y2hBY3RpdmVDaGF0IH0gPSBhd2FpdCBpbXBvcnQoXCIuL2pzL2ZldGNoQWN0aXZlQ2hhdC5kZXZcIilcclxuICAvLyAgICAgICAgIGZldGNoQWN0aXZlQ2hhdChjaGF0SWQpXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIHJldHVyblxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgbGV0IGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgLy8gICAgIFwiYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXJcIlxyXG4gIC8vICAgKVxyXG4gIC8vICAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGUgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyIGNsaWNrXCIpXHJcbiAgLy8gICAgIGxldCB1c2VyTWVzc2FnZUJveCA9IGUudGFyZ2V0LmNsb3Nlc3QoYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94YClcclxuICAvLyAgICAgbGV0IHVzZXJNZXNzYWdlQm94QnRuID0gZS50YXJnZXQuY2xvc2VzdChcclxuICAvLyAgICAgICBgLmFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hfX2J0bltkYXRhLW1lc3NhZ2UtYm94LWJ0biA9XCJ1c2VyXCJdYFxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIGxldCB1c2VyTWVzc2FnZUNvbnRlbnRCb3ggPSBlLnRhcmdldC5jbG9zZXN0KFxyXG4gIC8vICAgICAgIGAuYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveF9fY29udGVudC1ib3hgXHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgaWYgKFxyXG4gIC8vICAgICAgIHVzZXJNZXNzYWdlQm94QnRuICYmXHJcbiAgLy8gICAgICAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuY29udGFpbnModXNlck1lc3NhZ2VCb3hCdG4pXHJcbiAgLy8gICAgICkge1xyXG4gIC8vICAgICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS1zZWxlY3RlZFwiKVxyXG4gIC8vICAgICAgIGxldCB7IGNyZWF0ZVVzZXJNZXNzYWdlT3B0aW9uTW9kYWwgfSA9IGF3YWl0IGltcG9ydChcclxuICAvLyAgICAgICAgIFwiLi9qcy91c2VyTWVzc2FnZU9wdGlvbk1vZGFsLmRldlwiXHJcbiAgLy8gICAgICAgKVxyXG4gIC8vICAgICAgIGNyZWF0ZVVzZXJNZXNzYWdlT3B0aW9uTW9kYWwodXNlck1lc3NhZ2VCb3gpXHJcbiAgLy8gICAgIH0gZWxzZSBpZiAoXHJcbiAgLy8gICAgICAgdXNlck1lc3NhZ2VDb250ZW50Qm94ICYmXHJcbiAgLy8gICAgICAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuY29udGFpbnModXNlck1lc3NhZ2VDb250ZW50Qm94KVxyXG4gIC8vICAgICApIHtcclxuICAvLyAgICAgICBpZiAoXHJcbiAgLy8gICAgICAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgLy8gICAgICAgICAgIFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0tcmVwbGllZC1tZXNzYWdlXCJcclxuICAvLyAgICAgICAgIClcclxuICAvLyAgICAgICApIHtcclxuICAvLyAgICAgICAgIGxldCByZXBsaWVkTWVzc2FnZUlkID0gdXNlck1lc3NhZ2VCb3guZGF0YXNldC5yZXBsaWVkTWVzc2FnZUlkXHJcbiAgLy8gICAgICAgICBsZXQgcmVwbGllZFVzZXJNZXNzYWdlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAvLyAgICAgICAgICAgYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94W2RhdGEtbWVzc2FnZS1pZD1cIiR7cmVwbGllZE1lc3NhZ2VJZH1cIl1gXHJcbiAgLy8gICAgICAgICApXHJcbiAgLy8gICAgICAgICBpZiAocmVwbGllZFVzZXJNZXNzYWdlQm94KSB7XHJcbiAgLy8gICAgICAgICAgIHJlcGxpZWRVc2VyTWVzc2FnZUJveC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgLy8gICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgLy8gICAgICAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgLy8gICAgICAgICAgICAgaW5saW5lOiBcIm5lYXJlc3RcIlxyXG4gIC8vICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgICAgICByZXBsaWVkVXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmFkZChcclxuICAvLyAgICAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLWhpZ2hsaWdodFwiXHJcbiAgLy8gICAgICAgICAgIClcclxuICAvLyAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAgICAgICAgcmVwbGllZFVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgLy8gICAgICAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLWhpZ2hsaWdodFwiXHJcbiAgLy8gICAgICAgICAgICAgKVxyXG4gIC8vICAgICAgICAgICB9LCAxMDAwKVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICByZXR1cm5cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBhc3luYyBlID0+IHtcclxuICAvLyAgICAgbGV0IHVzZXJNZXNzYWdlQm94ID0gZS50YXJnZXQuY2xvc2VzdChgLmFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hgKVxyXG4gIC8vICAgICBpZiAodXNlck1lc3NhZ2VCb3ggJiYgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuY29udGFpbnModXNlck1lc3NhZ2VCb3gpKSB7XHJcbiAgLy8gICAgICAgbGV0IG1lc3NhZ2VJZCA9IHVzZXJNZXNzYWdlQm94LmRhdGFzZXQubWVzc2FnZUlkXHJcbiAgLy8gICAgICAgbGV0IHsgb3BlblJlcGx5TWVzc2FnZUJveCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9yZXBseU1lc3NhZ2VCb3guZGV2LmpzXCIpXHJcbiAgLy8gICAgICAgb3BlblJlcGx5TWVzc2FnZUJveChtZXNzYWdlSWQpXHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgcmV0dXJuXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbIklTX0lOSVRfQ0FMTF9NT0RVTEUiLCJjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIiLCJjcmVhdGVDaGF0Um9vbSIsImluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/call/call.dev.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "non-initial-chunk/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"call": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-javascripts/call/call.dev.js");
/******/ 	
/******/ })()
;