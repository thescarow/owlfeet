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

eval(";\n\n(async function () {\n  if (!IS_INIT_CALL_MODULE) {\n    let {\n      createCalltypeInfoContainer\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n    createCalltypeInfoContainer();\n    let roomInfoContainer = document.getElementById(\"roomInfoContainer\");\n\n    if (roomInfoContainer.dataset.callRoom.trim() === \"join\") {\n      let {\n        joinCallRoom\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_joinCallRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/joinCallRoom.dev */ \"./dev-javascripts/call/js/joinCallRoom.dev.js\"));\n      joinCallRoom();\n    }\n\n    if (roomInfoContainer.dataset.callRoom.trim() === \"create\") {\n      let creatingRoomInfo = document.getElementById(\"creatingRoomInfo\");\n\n      if (creatingRoomInfo) {\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"chat\") {\n          let {\n            createChatRoom\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_createChatRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createChatRoom.dev */ \"./dev-javascripts/call/js/createChatRoom.dev.js\"));\n          createChatRoom();\n        }\n\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"new\") {\n          let {\n            createNewRoom\n          } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_lodash_throttle_index_js-node_modules_namespace-emitter_index_js-node_mo-fa5147\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_aws-s3-multipart_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_dist_style_css\"), __webpack_require__.e(\"dev-javascripts_call_js_createNewRoom_dev_js-node_modules_css-loader_dist_runtime_api_js-node-08459b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/createNewRoom.dev */ \"./dev-javascripts/call/js/createNewRoom.dev.js\"));\n          createNewRoom();\n        }\n      }\n    }\n\n    IS_INIT_CALL_MODULE = true;\n  }\n})();\n\nfunction initialiseEventForCallModule() {// initialize event to active chat\n  // active chat to all chat btn\n  //   const ActiveChatToAllChatBtn = document.getElementById(\n  //     \"ActiveChatToAllChatBtn\"\n  //   )\n  //   ActiveChatToAllChatBtn.addEventListener(\"click\", async () => {\n  //     location.hash = \"\"\n  //     if (activeChatSection.dataset.chatId !== \"\") {\n  //       let { sendChatMessageStopTypingSocket } = await import(\n  //         \"../socket/event-emitter/chat-socket\"\n  //       )\n  //       sendChatMessageStopTypingSocket(activeChatSection.dataset.chatId)\n  //       isUserTyping = false\n  //     }\n  //   })\n  //   //active chat header pic and active chat header name\n  //   let activeChatHeaderPic = document.getElementById(\"activeChatHeaderPic\")\n  //   activeChatHeaderPic.addEventListener(\"click\", async () => {\n  //     let activeChatId = activeChatSection.dataset.chatId\n  //     if (activeChatId != \"\") {\n  //       let { createActiveChatInfoModal } = await import(\n  //         \"./js/createActiveChatInfoModal.dev.js\"\n  //       )\n  //       createActiveChatInfoModal(activeChatId)\n  //     }\n  //   })\n  //   let activeChatHeaderName = document.getElementById(\"activeChatHeaderName\")\n  //   activeChatHeaderName.addEventListener(\"click\", async () => {\n  //     let activeChatId = activeChatSection.dataset.chatId\n  //     if (activeChatId != \"\") {\n  //       let { createActiveChatInfoModal } = await import(\n  //         \"./js/createActiveChatInfoModal.dev.js\"\n  //       )\n  //       createActiveChatInfoModal(activeChatId)\n  //     }\n  //   })\n  //   ////////////////////\n  //   // create new group chat btn\n  //   // group chat form Modal and assign event to btn\n  //   const createNewGroupChatBtn = document.getElementById(\"createNewGroupChatBtn\")\n  //   createNewGroupChatBtn.addEventListener(\"click\", async () => {\n  //     let { createGroupChatFormModal } = await import(\n  //       \"./js/createGroupChatFormModal.dev\"\n  //     )\n  //     createGroupChatFormModal()\n  //   })\n  //   document\n  //     .getElementById(\"activeChatInputReplyBoxCloseBtn\")\n  //     .addEventListener(\"click\", async () => {\n  //       let { closeReplyMessageBox } = await import(\"./js/replyMessageBox.dev\")\n  //       closeReplyMessageBox()\n  //     })\n  //   //send chat:message-typing event\n  //   activeChatInputTextContent.addEventListener(\"input\", async e => {\n  //     if (activeChatSection.dataset.chatId !== \"\") {\n  //       if (\n  //         lastActiveChatId !== \"\" &&\n  //         lastActiveChatId !== activeChatSection.dataset.chatId\n  //       ) {\n  //         let { sendChatMessageStopTypingSocket } = await import(\n  //           \"../socket/event-emitter/chat-socket\"\n  //         )\n  //         sendChatMessageStopTypingSocket(lastActiveChatId)\n  //         isUserTyping = false\n  //         lastActiveChatId = activeChatSection.dataset.chatId.toString()\n  //       }\n  //       lastActiveChatId = activeChatSection.dataset.chatId.toString()\n  //       let chatId = activeChatSection.dataset.chatId.toString()\n  //       const inputValue = activeChatInputTextContent.value.trim()\n  //       if (inputValue && !isUserTyping) {\n  //         isUserTyping = true\n  //         let { sendChatMessageStartTypingSocket } = await import(\n  //           \"../socket/event-emitter/chat-socket\"\n  //         )\n  //         sendChatMessageStartTypingSocket(chatId)\n  //       } else if (!inputValue && isUserTyping) {\n  //         isUserTyping = false\n  //         let { sendChatMessageStopTypingSocket } = await import(\n  //           \"../socket/event-emitter/chat-socket\"\n  //         )\n  //         sendChatMessageStopTypingSocket(chatId)\n  //       }\n  //     }\n  //   })\n  //   allChatChatBoxContainer.addEventListener(\"click\", async e => {\n  //     let chatBox = e.target.closest(`.chat-box`)\n  //     if (chatBox && allChatChatBoxContainer.contains(chatBox)) {\n  //       let chatId = chatBox.dataset.chatId\n  //       if (chatId) {\n  //         let { fetchActiveChat } = await import(\"./js/fetchActiveChat.dev\")\n  //         fetchActiveChat(chatId)\n  //       }\n  //     } else {\n  //       return\n  //     }\n  //   })\n  //   let activeChatMessageContainer = document.getElementById(\n  //     \"activeChatMessageContainer\"\n  //   )\n  //   activeChatMessageContainer.addEventListener(\"click\", async e => {\n  //     console.log(\"activeChatMessageContainer click\")\n  //     let userMessageBox = e.target.closest(`.active-chat-user-message-box`)\n  //     let userMessageBoxBtn = e.target.closest(\n  //       `.active-chat-user-message-box__btn[data-message-box-btn =\"user\"]`\n  //     )\n  //     let userMessageContentBox = e.target.closest(\n  //       `.active-chat-user-message-box__content-box`\n  //     )\n  //     if (\n  //       userMessageBoxBtn &&\n  //       activeChatMessageContainer.contains(userMessageBoxBtn)\n  //     ) {\n  //       userMessageBox.classList.add(\"active-chat-user-message-box--selected\")\n  //       let { createUserMessageOptionModal } = await import(\n  //         \"./js/userMessageOptionModal.dev\"\n  //       )\n  //       createUserMessageOptionModal(userMessageBox)\n  //     } else if (\n  //       userMessageContentBox &&\n  //       activeChatMessageContainer.contains(userMessageContentBox)\n  //     ) {\n  //       if (\n  //         userMessageBox.classList.contains(\n  //           \"active-chat-user-message-box--replied-message\"\n  //         )\n  //       ) {\n  //         let repliedMessageId = userMessageBox.dataset.repliedMessageId\n  //         let repliedUserMessageBox = document.querySelector(\n  //           `.active-chat-user-message-box[data-message-id=\"${repliedMessageId}\"]`\n  //         )\n  //         if (repliedUserMessageBox) {\n  //           repliedUserMessageBox.scrollIntoView({\n  //             behavior: \"smooth\",\n  //             block: \"center\",\n  //             inline: \"nearest\"\n  //           })\n  //           repliedUserMessageBox.classList.add(\n  //             \"active-chat-user-message-box--highlight\"\n  //           )\n  //           setTimeout(function () {\n  //             repliedUserMessageBox.classList.remove(\n  //               \"active-chat-user-message-box--highlight\"\n  //             )\n  //           }, 1000)\n  //         }\n  //       }\n  //     } else {\n  //       return\n  //     }\n  //   })\n  //   activeChatMessageContainer.addEventListener(\"dblclick\", async e => {\n  //     let userMessageBox = e.target.closest(`.active-chat-user-message-box`)\n  //     if (userMessageBox && activeChatMessageContainer.contains(userMessageBox)) {\n  //       let messageId = userMessageBox.dataset.messageId\n  //       let { openReplyMessageBox } = await import(\"./js/replyMessageBox.dev.js\")\n  //       openReplyMessageBox(messageId)\n  //     } else {\n  //       return\n  //     }\n  //   })\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2FsbC9jYWxsLmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLG1CQUFMLEVBQTBCO0lBQ3hCLElBQUk7TUFBRUM7SUFBRixJQUFrQyxNQUFNLGlQQUE1QztJQUdBQSwyQkFBMkI7SUFDM0IsSUFBSUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7O0lBRUEsSUFBSUYsaUJBQWlCLENBQUNHLE9BQWxCLENBQTBCQyxRQUExQixDQUFtQ0MsSUFBbkMsT0FBOEMsTUFBbEQsRUFBMEQ7TUFDeEQsSUFBSTtRQUFFQztNQUFGLElBQW1CLE1BQU0sc05BQTdCO01BQ0FBLFlBQVk7SUFDYjs7SUFDRCxJQUFJTixpQkFBaUIsQ0FBQ0csT0FBbEIsQ0FBMEJDLFFBQTFCLENBQW1DQyxJQUFuQyxPQUE4QyxRQUFsRCxFQUE0RDtNQUMxRCxJQUFJRSxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF2Qjs7TUFDQSxJQUFJSyxnQkFBSixFQUFzQjtRQUNwQixJQUFJQSxnQkFBZ0IsQ0FBQ0osT0FBakIsQ0FBeUJLLGdCQUF6QixDQUEwQ0gsSUFBMUMsT0FBcUQsTUFBekQsRUFBaUU7VUFDL0QsSUFBSTtZQUFFSTtVQUFGLElBQXFCLE1BQU0sNE5BQS9CO1VBQ0FBLGNBQWM7UUFDZjs7UUFDRCxJQUFJRixnQkFBZ0IsQ0FBQ0osT0FBakIsQ0FBeUJLLGdCQUF6QixDQUEwQ0gsSUFBMUMsT0FBcUQsS0FBekQsRUFBZ0U7VUFDOUQsSUFBSTtZQUFFSztVQUFGLElBQW9CLE1BQU0sc2tDQUE5QjtVQUNBQSxhQUFhO1FBQ2Q7TUFDRjtJQUNGOztJQUVEWixtQkFBbUIsR0FBRyxJQUF0QjtFQUNEO0FBQ0YsQ0E1QkE7O0FBOEJELFNBQVNhLDRCQUFULEdBQXdDLENBQ3RDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9jYWxsL2NhbGwuZGV2LmpzP2Q3ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFJU19JTklUX0NBTExfTU9EVUxFKSB7XHJcbiAgICBsZXQgeyBjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuL2pzL2NhbGx0eXBlSW5mb0NvbnRhaW5lci5kZXZcIlxyXG4gICAgKVxyXG4gICAgY3JlYXRlQ2FsbHR5cGVJbmZvQ29udGFpbmVyKClcclxuICAgIGxldCByb29tSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbUluZm9Db250YWluZXJcIilcclxuXHJcbiAgICBpZiAocm9vbUluZm9Db250YWluZXIuZGF0YXNldC5jYWxsUm9vbS50cmltKCkgPT09IFwiam9pblwiKSB7XHJcbiAgICAgIGxldCB7IGpvaW5DYWxsUm9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9qb2luQ2FsbFJvb20uZGV2XCIpXHJcbiAgICAgIGpvaW5DYWxsUm9vbSgpXHJcbiAgICB9XHJcbiAgICBpZiAocm9vbUluZm9Db250YWluZXIuZGF0YXNldC5jYWxsUm9vbS50cmltKCkgPT09IFwiY3JlYXRlXCIpIHtcclxuICAgICAgbGV0IGNyZWF0aW5nUm9vbUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0aW5nUm9vbUluZm9cIilcclxuICAgICAgaWYgKGNyZWF0aW5nUm9vbUluZm8pIHtcclxuICAgICAgICBpZiAoY3JlYXRpbmdSb29tSW5mby5kYXRhc2V0LmNyZWF0aW5nQ2FsbFJvb20udHJpbSgpID09PSBcImNoYXRcIikge1xyXG4gICAgICAgICAgbGV0IHsgY3JlYXRlQ2hhdFJvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvY3JlYXRlQ2hhdFJvb20uZGV2XCIpXHJcbiAgICAgICAgICBjcmVhdGVDaGF0Um9vbSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvLmRhdGFzZXQuY3JlYXRpbmdDYWxsUm9vbS50cmltKCkgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCB7IGNyZWF0ZU5ld1Jvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvY3JlYXRlTmV3Um9vbS5kZXZcIilcclxuICAgICAgICAgIGNyZWF0ZU5ld1Jvb20oKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIElTX0lOSVRfQ0FMTF9NT0RVTEUgPSB0cnVlXHJcbiAgfVxyXG59KSgpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlRXZlbnRGb3JDYWxsTW9kdWxlKCkge1xyXG4gIC8vIGluaXRpYWxpemUgZXZlbnQgdG8gYWN0aXZlIGNoYXRcclxuICAvLyBhY3RpdmUgY2hhdCB0byBhbGwgY2hhdCBidG5cclxuICAvLyAgIGNvbnN0IEFjdGl2ZUNoYXRUb0FsbENoYXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAvLyAgICAgXCJBY3RpdmVDaGF0VG9BbGxDaGF0QnRuXCJcclxuICAvLyAgIClcclxuICAvLyAgIEFjdGl2ZUNoYXRUb0FsbENoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgbG9jYXRpb24uaGFzaCA9IFwiXCJcclxuICAvLyAgICAgaWYgKGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkICE9PSBcIlwiKSB7XHJcbiAgLy8gICAgICAgbGV0IHsgc2VuZENoYXRNZXNzYWdlU3RvcFR5cGluZ1NvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gIC8vICAgICAgICAgXCIuLi9zb2NrZXQvZXZlbnQtZW1pdHRlci9jaGF0LXNvY2tldFwiXHJcbiAgLy8gICAgICAgKVxyXG4gIC8vICAgICAgIHNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQoYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQpXHJcbiAgLy8gICAgICAgaXNVc2VyVHlwaW5nID0gZmFsc2VcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgIC8vYWN0aXZlIGNoYXQgaGVhZGVyIHBpYyBhbmQgYWN0aXZlIGNoYXQgaGVhZGVyIG5hbWVcclxuICAvLyAgIGxldCBhY3RpdmVDaGF0SGVhZGVyUGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SGVhZGVyUGljXCIpXHJcbiAgLy8gICBhY3RpdmVDaGF0SGVhZGVyUGljLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBhY3RpdmVDaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gIC8vICAgICBpZiAoYWN0aXZlQ2hhdElkICE9IFwiXCIpIHtcclxuICAvLyAgICAgICBsZXQgeyBjcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgLy8gICAgICAgICBcIi4vanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXYuanNcIlxyXG4gIC8vICAgICAgIClcclxuICAvLyAgICAgICBjcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsKGFjdGl2ZUNoYXRJZClcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgIGxldCBhY3RpdmVDaGF0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdEhlYWRlck5hbWVcIilcclxuICAvLyAgIGFjdGl2ZUNoYXRIZWFkZXJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBhY3RpdmVDaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gIC8vICAgICBpZiAoYWN0aXZlQ2hhdElkICE9IFwiXCIpIHtcclxuICAvLyAgICAgICBsZXQgeyBjcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgLy8gICAgICAgICBcIi4vanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXYuanNcIlxyXG4gIC8vICAgICAgIClcclxuICAvLyAgICAgICBjcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsKGFjdGl2ZUNoYXRJZClcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gICAvLyBjcmVhdGUgbmV3IGdyb3VwIGNoYXQgYnRuXHJcbiAgLy8gICAvLyBncm91cCBjaGF0IGZvcm0gTW9kYWwgYW5kIGFzc2lnbiBldmVudCB0byBidG5cclxuICAvLyAgIGNvbnN0IGNyZWF0ZU5ld0dyb3VwQ2hhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlTmV3R3JvdXBDaGF0QnRuXCIpXHJcbiAgLy8gICBjcmVhdGVOZXdHcm91cENoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgbGV0IHsgY3JlYXRlR3JvdXBDaGF0Rm9ybU1vZGFsIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgLy8gICAgICAgXCIuL2pzL2NyZWF0ZUdyb3VwQ2hhdEZvcm1Nb2RhbC5kZXZcIlxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIGNyZWF0ZUdyb3VwQ2hhdEZvcm1Nb2RhbCgpXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgZG9jdW1lbnRcclxuICAvLyAgICAgLmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdElucHV0UmVwbHlCb3hDbG9zZUJ0blwiKVxyXG4gIC8vICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgICBsZXQgeyBjbG9zZVJlcGx5TWVzc2FnZUJveCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9yZXBseU1lc3NhZ2VCb3guZGV2XCIpXHJcbiAgLy8gICAgICAgY2xvc2VSZXBseU1lc3NhZ2VCb3goKVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgLy9zZW5kIGNoYXQ6bWVzc2FnZS10eXBpbmcgZXZlbnRcclxuICAvLyAgIGFjdGl2ZUNoYXRJbnB1dFRleHRDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBhc3luYyBlID0+IHtcclxuICAvLyAgICAgaWYgKGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkICE9PSBcIlwiKSB7XHJcbiAgLy8gICAgICAgaWYgKFxyXG4gIC8vICAgICAgICAgbGFzdEFjdGl2ZUNoYXRJZCAhPT0gXCJcIiAmJlxyXG4gIC8vICAgICAgICAgbGFzdEFjdGl2ZUNoYXRJZCAhPT0gYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWRcclxuICAvLyAgICAgICApIHtcclxuICAvLyAgICAgICAgIGxldCB7IHNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcclxuICAvLyAgICAgICAgICAgXCIuLi9zb2NrZXQvZXZlbnQtZW1pdHRlci9jaGF0LXNvY2tldFwiXHJcbiAgLy8gICAgICAgICApXHJcbiAgLy8gICAgICAgICBzZW5kQ2hhdE1lc3NhZ2VTdG9wVHlwaW5nU29ja2V0KGxhc3RBY3RpdmVDaGF0SWQpXHJcbiAgLy8gICAgICAgICBpc1VzZXJUeXBpbmcgPSBmYWxzZVxyXG4gIC8vICAgICAgICAgbGFzdEFjdGl2ZUNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKClcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgbGFzdEFjdGl2ZUNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKClcclxuICAvLyAgICAgICBsZXQgY2hhdElkID0gYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKVxyXG4gIC8vICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBhY3RpdmVDaGF0SW5wdXRUZXh0Q29udGVudC52YWx1ZS50cmltKClcclxuICAvLyAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiAhaXNVc2VyVHlwaW5nKSB7XHJcbiAgLy8gICAgICAgICBpc1VzZXJUeXBpbmcgPSB0cnVlXHJcbiAgLy8gICAgICAgICBsZXQgeyBzZW5kQ2hhdE1lc3NhZ2VTdGFydFR5cGluZ1NvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gIC8vICAgICAgICAgICBcIi4uL3NvY2tldC9ldmVudC1lbWl0dGVyL2NoYXQtc29ja2V0XCJcclxuICAvLyAgICAgICAgIClcclxuICAvLyAgICAgICAgIHNlbmRDaGF0TWVzc2FnZVN0YXJ0VHlwaW5nU29ja2V0KGNoYXRJZClcclxuICAvLyAgICAgICB9IGVsc2UgaWYgKCFpbnB1dFZhbHVlICYmIGlzVXNlclR5cGluZykge1xyXG4gIC8vICAgICAgICAgaXNVc2VyVHlwaW5nID0gZmFsc2VcclxuICAvLyAgICAgICAgIGxldCB7IHNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcclxuICAvLyAgICAgICAgICAgXCIuLi9zb2NrZXQvZXZlbnQtZW1pdHRlci9jaGF0LXNvY2tldFwiXHJcbiAgLy8gICAgICAgICApXHJcbiAgLy8gICAgICAgICBzZW5kQ2hhdE1lc3NhZ2VTdG9wVHlwaW5nU29ja2V0KGNoYXRJZClcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gICBhbGxDaGF0Q2hhdEJveENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZSA9PiB7XHJcbiAgLy8gICAgIGxldCBjaGF0Qm94ID0gZS50YXJnZXQuY2xvc2VzdChgLmNoYXQtYm94YClcclxuICAvLyAgICAgaWYgKGNoYXRCb3ggJiYgYWxsQ2hhdENoYXRCb3hDb250YWluZXIuY29udGFpbnMoY2hhdEJveCkpIHtcclxuICAvLyAgICAgICBsZXQgY2hhdElkID0gY2hhdEJveC5kYXRhc2V0LmNoYXRJZFxyXG4gIC8vICAgICAgIGlmIChjaGF0SWQpIHtcclxuICAvLyAgICAgICAgIGxldCB7IGZldGNoQWN0aXZlQ2hhdCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9mZXRjaEFjdGl2ZUNoYXQuZGV2XCIpXHJcbiAgLy8gICAgICAgICBmZXRjaEFjdGl2ZUNoYXQoY2hhdElkKVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICByZXR1cm5cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgIGxldCBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIC8vICAgICBcImFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyXCJcclxuICAvLyAgIClcclxuICAvLyAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBlID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciBjbGlja1wiKVxyXG4gIC8vICAgICBsZXQgdXNlck1lc3NhZ2VCb3ggPSBlLnRhcmdldC5jbG9zZXN0KGAuYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveGApXHJcbiAgLy8gICAgIGxldCB1c2VyTWVzc2FnZUJveEJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXHJcbiAgLy8gICAgICAgYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94X19idG5bZGF0YS1tZXNzYWdlLWJveC1idG4gPVwidXNlclwiXWBcclxuICAvLyAgICAgKVxyXG4gIC8vICAgICBsZXQgdXNlck1lc3NhZ2VDb250ZW50Qm94ID0gZS50YXJnZXQuY2xvc2VzdChcclxuICAvLyAgICAgICBgLmFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hfX2NvbnRlbnQtYm94YFxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIGlmIChcclxuICAvLyAgICAgICB1c2VyTWVzc2FnZUJveEJ0biAmJlxyXG4gIC8vICAgICAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmNvbnRhaW5zKHVzZXJNZXNzYWdlQm94QnRuKVxyXG4gIC8vICAgICApIHtcclxuICAvLyAgICAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0tc2VsZWN0ZWRcIilcclxuICAvLyAgICAgICBsZXQgeyBjcmVhdGVVc2VyTWVzc2FnZU9wdGlvbk1vZGFsIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgLy8gICAgICAgICBcIi4vanMvdXNlck1lc3NhZ2VPcHRpb25Nb2RhbC5kZXZcIlxyXG4gIC8vICAgICAgIClcclxuICAvLyAgICAgICBjcmVhdGVVc2VyTWVzc2FnZU9wdGlvbk1vZGFsKHVzZXJNZXNzYWdlQm94KVxyXG4gIC8vICAgICB9IGVsc2UgaWYgKFxyXG4gIC8vICAgICAgIHVzZXJNZXNzYWdlQ29udGVudEJveCAmJlxyXG4gIC8vICAgICAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmNvbnRhaW5zKHVzZXJNZXNzYWdlQ29udGVudEJveClcclxuICAvLyAgICAgKSB7XHJcbiAgLy8gICAgICAgaWYgKFxyXG4gIC8vICAgICAgICAgdXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gIC8vICAgICAgICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLXJlcGxpZWQtbWVzc2FnZVwiXHJcbiAgLy8gICAgICAgICApXHJcbiAgLy8gICAgICAgKSB7XHJcbiAgLy8gICAgICAgICBsZXQgcmVwbGllZE1lc3NhZ2VJZCA9IHVzZXJNZXNzYWdlQm94LmRhdGFzZXQucmVwbGllZE1lc3NhZ2VJZFxyXG4gIC8vICAgICAgICAgbGV0IHJlcGxpZWRVc2VyTWVzc2FnZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgLy8gICAgICAgICAgIGAuYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveFtkYXRhLW1lc3NhZ2UtaWQ9XCIke3JlcGxpZWRNZXNzYWdlSWR9XCJdYFxyXG4gIC8vICAgICAgICAgKVxyXG4gIC8vICAgICAgICAgaWYgKHJlcGxpZWRVc2VyTWVzc2FnZUJveCkge1xyXG4gIC8vICAgICAgICAgICByZXBsaWVkVXNlck1lc3NhZ2VCb3guc2Nyb2xsSW50b1ZpZXcoe1xyXG4gIC8vICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gIC8vICAgICAgICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gIC8vICAgICAgICAgICAgIGlubGluZTogXCJuZWFyZXN0XCJcclxuICAvLyAgICAgICAgICAgfSlcclxuICAvLyAgICAgICAgICAgcmVwbGllZFVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoXHJcbiAgLy8gICAgICAgICAgICAgXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS1oaWdobGlnaHRcIlxyXG4gIC8vICAgICAgICAgICApXHJcbiAgLy8gICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgICAgICAgICAgIHJlcGxpZWRVc2VyTWVzc2FnZUJveC5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gIC8vICAgICAgICAgICAgICAgXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS1oaWdobGlnaHRcIlxyXG4gIC8vICAgICAgICAgICAgIClcclxuICAvLyAgICAgICAgICAgfSwgMTAwMClcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgcmV0dXJuXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gICBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgYXN5bmMgZSA9PiB7XHJcbiAgLy8gICAgIGxldCB1c2VyTWVzc2FnZUJveCA9IGUudGFyZ2V0LmNsb3Nlc3QoYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94YClcclxuICAvLyAgICAgaWYgKHVzZXJNZXNzYWdlQm94ICYmIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmNvbnRhaW5zKHVzZXJNZXNzYWdlQm94KSkge1xyXG4gIC8vICAgICAgIGxldCBtZXNzYWdlSWQgPSB1c2VyTWVzc2FnZUJveC5kYXRhc2V0Lm1lc3NhZ2VJZFxyXG4gIC8vICAgICAgIGxldCB7IG9wZW5SZXBseU1lc3NhZ2VCb3ggfSA9IGF3YWl0IGltcG9ydChcIi4vanMvcmVwbHlNZXNzYWdlQm94LmRldi5qc1wiKVxyXG4gIC8vICAgICAgIG9wZW5SZXBseU1lc3NhZ2VCb3gobWVzc2FnZUlkKVxyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIHJldHVyblxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJU19JTklUX0NBTExfTU9EVUxFIiwiY3JlYXRlQ2FsbHR5cGVJbmZvQ29udGFpbmVyIiwicm9vbUluZm9Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsImNhbGxSb29tIiwidHJpbSIsImpvaW5DYWxsUm9vbSIsImNyZWF0aW5nUm9vbUluZm8iLCJjcmVhdGluZ0NhbGxSb29tIiwiY3JlYXRlQ2hhdFJvb20iLCJjcmVhdGVOZXdSb29tIiwiaW5pdGlhbGlzZUV2ZW50Rm9yQ2FsbE1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/call/call.dev.js\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			}
/******/ 			;
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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