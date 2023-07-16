"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_chat-socket_index_js"],{

/***/ "./dev-javascripts/socket/event-handler/chat-socket/index.js":
/*!*******************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/chat-socket/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createChatSocket\": () => (/* binding */ createChatSocket)\n/* harmony export */ });\nasync function createChatSocket(socket) {\n  try {\n    console.log(\"insideChatSocket\");\n    let activeChatSection = document.getElementById(\"activeChatSection\");\n    let activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n    let activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n    socket.on(\"chat:changed-active-chat-background\", async data => {\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        let {\n          changeActiveChatBackground\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev.js */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        changeActiveChatBackground(data.backgroundType, data.backgroundValue);\n      }\n    });\n    socket.on(\"chat:removed-active-chat-background\", async data => {\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        let {\n          removeActiveChatBackground\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev.js */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        removeActiveChatBackground();\n      }\n    });\n    socket.on(\"chat:message-start-typing\", async data => {\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        activeChatHeaderStatus.innerHTML = `${data.isGroupChat ? data.user.firstName : \"\"} typing<span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span>`;\n        activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      }\n    });\n    socket.on(\"chat:message-stop-typing\", async data => {\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        if (data.isGroupChat) {\n          activeChatHeaderStatus.textContent = \"\";\n        } else {\n          activeChatHeaderStatus.textContent = \"Active\";\n        }\n\n        activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      }\n    });\n    socket.on(\"chat:create-new-group-chat\", async chat => {\n      console.log(\"created-new-group-chat\");\n      let {\n        createChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      createChatBox(chat);\n    });\n    socket.on(\"chat:edit-group-chat\", async chat => {\n      console.log(\"edit-group-chat\");\n      activeChatData = { ...chat\n      };\n      let {\n        updateActiveChatInfoModal\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de3\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n      let {\n        updateActiveChatSection\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n      let {\n        updateChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      updateActiveChatInfoModal();\n      updateActiveChatSection(activeChatData);\n      updateChatBox(activeChatData);\n    });\n    socket.on(\"chat:clear-chat-all-messages\", async chatId => {\n      let {\n        clearActiveChatMessageContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n      let {\n        clearChatBoxLatestMessage\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      clearActiveChatMessageContainer();\n      clearChatBoxLatestMessage(chatId);\n    });\n    socket.on(\"chat:delete-chat\", async chatId => {\n      let {\n        clearActiveChatMessageContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n      let {\n        showAllChatSection,\n        deleteChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      showAllChatSection();\n      deleteChatBox(chatId);\n      clearActiveChatMessageContainer();\n    });\n    socket.on(\"chat:user-left-group-chat\", async (chatId, userId) => {\n      let {\n        removeChatInfoMember\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de3\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n      removeChatInfoMember(chatId, userId);\n    });\n    socket.on(\"chat:created-chat-call-room\", async data => {\n      let {\n        showChatBoxCallRoomBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      showChatBoxCallRoomBox(data.chatId, data.callRoom._id);\n\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        let {\n          openActiveChatCallRoomBox\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        openActiveChatCallRoomBox(data.callRoom._id);\n      }\n    });\n    socket.on(\"chat:end-chat-call-room\", async data => {\n      let {\n        hideChatBoxCallRoomBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      hideChatBoxCallRoomBox(data.chatId);\n\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        let {\n          closeActiveChatCallRoomBox\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        closeActiveChatCallRoomBox();\n      }\n    }); //////////////////////////////////////////\n    // socket.on(\"chat:new-message\", async data => {\n    //   console.log(\"new-message data:\", data)\n    //   let message = data.message\n    //   let chatId = activeChatSection.dataset.chatId\n    //   let { updateAllChatSection } = await import(\n    //     \"../../../chat/js/updateAllChatSection.dev\"\n    //   )\n    //   updateAllChatSection(message)\n    //   let { increaseUnseenMessagesCountInChatBox } = await import(\n    //     \"../../../chat/js/updateAllChatSection.dev\"\n    //   )\n    //   increaseUnseenMessagesCountInChatBox(message.chat._id)\n    //   if (\n    //     chatId.toString() !== \"\" &&\n    //     chatId.toString() === message.chat._id.toString()\n    //   ) {\n    //     let { checkTimeAndCreateNewMessage } = await import(\n    //       \"../../../chat/js/message.dev\"\n    //     )\n    //     checkTimeAndCreateNewMessage(message, true)\n    //   }\n    // })\n    ////////\n    // socket.on(\"chat:new-info-message\", async data => {\n    //   let message = data.message\n    //   let chatId = activeChatSection.dataset.chatId\n    //   let { updateAllChatSection } = await import(\n    //     \"../../../chat/js/updateAllChatSection.dev\"\n    //   )\n    //   updateAllChatSection(message)\n    //   let { increaseUnseenMessagesCountInChatBox } = await import(\n    //     \"../../../chat/js/updateAllChatSection.dev\"\n    //   )\n    //   increaseUnseenMessagesCountInChatBox(message.chat._id)\n    //   if (chatId !== \"\" && chatId === message.chat._id) {\n    //     let { createInfoMessage } = await import(\"../../../chat/js/message.dev\")\n    //     let infoMessageBox = createInfoMessage(message)\n    //     activeChatMessageContainer.insertAdjacentElement(\n    //       \"beforeend\",\n    //       infoMessageBox\n    //     )\n    //     activeChatMessageContainer.scrollTop =\n    //       activeChatMessageContainer.scrollHeight + 1000\n    //   }\n    // })\n    // socket.on(\"chat:delete-message-for-all\", async data => {\n    //   let { convertUserMessageToDeletedForAllMessage } = await import(\n    //     \"../../../chat/js/message.dev\"\n    //   )\n    //   convertUserMessageToDeletedForAllMessage(data.deletedForAllMessage)\n    //   if (data.isLatestMessageChanged) {\n    //     let { updateChatBoxLatestMessage } = await import(\n    //       \"../../../chat/js/updateAllChatSection.dev\"\n    //     )\n    //     updateChatBoxLatestMessage(data.latestMessage)\n    //   }\n    // })\n    // socket.on(\"chat:message-delivered\", async data => {\n    //   if (\n    //     data.chatId.toString() === activeChatSection.dataset.chatId.toString()\n    //   ) {\n    //     let { changeUserMessageStatusToDelivered } = await import(\n    //       \"../../../chat/js/message.dev\"\n    //     )\n    //     changeUserMessageStatusToDelivered(data.messageId)\n    //     let { updateMessageInfoDeliveryStatus } = await import(\n    //       \"../../../chat/js/userMessageOptionModal.dev\"\n    //     )\n    //     updateMessageInfoDeliveryStatus(data.messageId, data.deliveredTime)\n    //   }\n    // })\n    // socket.on(\"chat:update-message-seen-status\", async data => {\n    //   if (\n    //     data.chatId.toString() === activeChatSection.dataset.chatId.toString()\n    //   ) {\n    //     let { changeUserMessageStatusWithMessageSeenStatusCount } =\n    //       await import(\"../../../chat/js/message.dev\")\n    //     changeUserMessageStatusWithMessageSeenStatusCount(\n    //       data.messageId,\n    //       data.messageSeenStatusCount,\n    //       data.messageReaderCount\n    //     )\n    //     let { addUserToMessageInfoSeenStatus } = await import(\n    //       \"../../../chat/js/userMessageOptionModal.dev\"\n    //     )\n    //     addUserToMessageInfoSeenStatus(\n    //       data.messageId,\n    //       data.pushedUser,\n    //       data.pushedUserTime\n    //     )\n    //   }\n    // })\n    // socket.on(\"chat:message-seen-by-self\", async data => {\n    //   let { decreaseUnseenMessagesCountInChatBox } = await import(\n    //     \"../../../chat/js/updateAllChatSection.dev\"\n    //   )\n    //   decreaseUnseenMessagesCountInChatBox(data.chatId)\n    // })\n  } catch (e) {\n    console.log(\"socket problem\", e.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvY2hhdC1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLGdCQUFmLENBQWdDQyxNQUFoQyxFQUF3QztFQUM3QyxJQUFJO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0lBRUEsSUFBSUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7SUFFQSxJQUFJQywwQkFBMEIsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQy9CLDRCQUQrQixDQUFqQztJQUlBLElBQUlFLHNCQUFzQixHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FDM0Isd0JBRDJCLENBQTdCO0lBSUFMLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLHFDQUFWLEVBQWlELE1BQU1DLElBQU4sSUFBYztNQUM3RCxJQUNFTixpQkFBaUIsQ0FBQ08sT0FBbEIsQ0FBMEJDLE1BQTFCLENBQWlDQyxRQUFqQyxPQUFnREgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLFFBQVosRUFEbEQsRUFFRTtRQUNBLElBQUk7VUFBRUM7UUFBRixJQUFpQyxNQUFNLGdRQUEzQztRQUdBQSwwQkFBMEIsQ0FBQ0osSUFBSSxDQUFDSyxjQUFOLEVBQXNCTCxJQUFJLENBQUNNLGVBQTNCLENBQTFCO01BQ0Q7SUFDRixDQVREO0lBV0FmLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLHFDQUFWLEVBQWlELE1BQU1DLElBQU4sSUFBYztNQUM3RCxJQUNFTixpQkFBaUIsQ0FBQ08sT0FBbEIsQ0FBMEJDLE1BQTFCLENBQWlDQyxRQUFqQyxPQUFnREgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLFFBQVosRUFEbEQsRUFFRTtRQUNBLElBQUk7VUFBRUk7UUFBRixJQUFpQyxNQUFNLGdRQUEzQztRQUdBQSwwQkFBMEI7TUFDM0I7SUFDRixDQVREO0lBV0FoQixNQUFNLENBQUNRLEVBQVAsQ0FBVSwyQkFBVixFQUF1QyxN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QTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNELENBM1BELENBMlBFLE9BQU9DLENBQVAsRUFBVTtJQUNWekMsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJ3QyxDQUFDLENBQUNDLE9BQWhDO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL3NvY2tldC9ldmVudC1oYW5kbGVyL2NoYXQtc29ja2V0L2luZGV4LmpzP2I4MjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYXRTb2NrZXQoc29ja2V0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlQ2hhdFNvY2tldFwiKVxyXG5cclxuICAgIGxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuXHJcbiAgICBsZXQgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lclwiXHJcbiAgICApXHJcblxyXG4gICAgbGV0IGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzXCJcclxuICAgIClcclxuXHJcbiAgICBzb2NrZXQub24oXCJjaGF0OmNoYW5nZWQtYWN0aXZlLWNoYXQtYmFja2dyb3VuZFwiLCBhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IHsgY2hhbmdlQWN0aXZlQ2hhdEJhY2tncm91bmQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2LmpzXCJcclxuICAgICAgICApXHJcbiAgICAgICAgY2hhbmdlQWN0aXZlQ2hhdEJhY2tncm91bmQoZGF0YS5iYWNrZ3JvdW5kVHlwZSwgZGF0YS5iYWNrZ3JvdW5kVmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDpyZW1vdmVkLWFjdGl2ZS1jaGF0LWJhY2tncm91bmRcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpID09PSBkYXRhLmNoYXRJZC50b1N0cmluZygpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCB7IHJlbW92ZUFjdGl2ZUNoYXRCYWNrZ3JvdW5kIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldi5qc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNoYXRCYWNrZ3JvdW5kKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oXCJjaGF0Om1lc3NhZ2Utc3RhcnQtdHlwaW5nXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gZGF0YS5jaGF0SWQudG9TdHJpbmcoKVxyXG4gICAgICApIHtcclxuICAgICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmlubmVySFRNTCA9IGAke1xyXG4gICAgICAgICAgZGF0YS5pc0dyb3VwQ2hhdCA/IGRhdGEudXNlci5maXJzdE5hbWUgOiBcIlwiXHJcbiAgICAgICAgfSB0eXBpbmc8c3BhbiBjbGFzcz1cImFjdGl2ZS1jaGF0LWhlYWRlcl9fdHlwaW5nLWVmZmVjdFwiPi48L3NwYW4+PHNwYW4gY2xhc3M9XCJhY3RpdmUtY2hhdC1oZWFkZXJfX3R5cGluZy1lZmZlY3RcIj4uPC9zcGFuPjxzcGFuIGNsYXNzPVwiYWN0aXZlLWNoYXQtaGVhZGVyX190eXBpbmctZWZmZWN0XCI+Ljwvc3Bhbj5gXHJcblxyXG4gICAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgIFwiYWN0aXZlLWNoYXQtaGVhZGVyX19jaGF0LXN0YXR1cy0taGlkZVwiXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDptZXNzYWdlLXN0b3AtdHlwaW5nXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gZGF0YS5jaGF0SWQudG9TdHJpbmcoKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoZGF0YS5pc0dyb3VwQ2hhdCkge1xyXG4gICAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQWN0aXZlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJhY3RpdmUtY2hhdC1oZWFkZXJfX2NoYXQtc3RhdHVzLS1oaWRlXCJcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDpjcmVhdGUtbmV3LWdyb3VwLWNoYXRcIiwgYXN5bmMgY2hhdCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZC1uZXctZ3JvdXAtY2hhdFwiKVxyXG4gICAgICBsZXQgeyBjcmVhdGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlQ2hhdEJveChjaGF0KVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6ZWRpdC1ncm91cC1jaGF0XCIsIGFzeW5jIGNoYXQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVkaXQtZ3JvdXAtY2hhdFwiKVxyXG4gICAgICBhY3RpdmVDaGF0RGF0YSA9IHsgLi4uY2hhdCB9XHJcbiAgICAgIGxldCB7IHVwZGF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGxldCB7IHVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGxldCB7IHVwZGF0ZUNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG5cclxuICAgICAgdXBkYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbCgpXHJcbiAgICAgIHVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uKGFjdGl2ZUNoYXREYXRhKVxyXG4gICAgICB1cGRhdGVDaGF0Qm94KGFjdGl2ZUNoYXREYXRhKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6Y2xlYXItY2hhdC1hbGwtbWVzc2FnZXNcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgICAgbGV0IHsgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBsZXQgeyBjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcigpXHJcbiAgICAgIGNsZWFyQ2hhdEJveExhdGVzdE1lc3NhZ2UoY2hhdElkKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6ZGVsZXRlLWNoYXRcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgICAgbGV0IHsgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBsZXQgeyBzaG93QWxsQ2hhdFNlY3Rpb24sIGRlbGV0ZUNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG5cclxuICAgICAgc2hvd0FsbENoYXRTZWN0aW9uKClcclxuICAgICAgZGVsZXRlQ2hhdEJveChjaGF0SWQpXHJcbiAgICAgIGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIoKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oXCJjaGF0OnVzZXItbGVmdC1ncm91cC1jaGF0XCIsIGFzeW5jIChjaGF0SWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgICBsZXQgeyByZW1vdmVDaGF0SW5mb01lbWJlciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9jcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgcmVtb3ZlQ2hhdEluZm9NZW1iZXIoY2hhdElkLCB1c2VySWQpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihcImNoYXQ6Y3JlYXRlZC1jaGF0LWNhbGwtcm9vbVwiLCBhc3luYyBkYXRhID0+IHtcclxuICAgICAgbGV0IHsgc2hvd0NoYXRCb3hDYWxsUm9vbUJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgICApXHJcblxyXG4gICAgICBzaG93Q2hhdEJveENhbGxSb29tQm94KGRhdGEuY2hhdElkLCBkYXRhLmNhbGxSb29tLl9pZClcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IHsgb3BlbkFjdGl2ZUNoYXRDYWxsUm9vbUJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBvcGVuQWN0aXZlQ2hhdENhbGxSb29tQm94KGRhdGEuY2FsbFJvb20uX2lkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDplbmQtY2hhdC1jYWxsLXJvb21cIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgIGxldCB7IGhpZGVDaGF0Qm94Q2FsbFJvb21Cb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBoaWRlQ2hhdEJveENhbGxSb29tQm94KGRhdGEuY2hhdElkKVxyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IHsgY2xvc2VBY3RpdmVDaGF0Q2FsbFJvb21Cb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgICApXHJcbiAgICAgICAgY2xvc2VBY3RpdmVDaGF0Q2FsbFJvb21Cb3goKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBzb2NrZXQub24oXCJjaGF0Om5ldy1tZXNzYWdlXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcIm5ldy1tZXNzYWdlIGRhdGE6XCIsIGRhdGEpXHJcbiAgICAvLyAgIGxldCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlXHJcbiAgICAvLyAgIGxldCBjaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gICAgLy8gICBsZXQgeyB1cGRhdGVBbGxDaGF0U2VjdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLy8gICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgIHVwZGF0ZUFsbENoYXRTZWN0aW9uKG1lc3NhZ2UpXHJcbiAgICAvLyAgIGxldCB7IGluY3JlYXNlVW5zZWVuTWVzc2FnZXNDb3VudEluQ2hhdEJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLy8gICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgIGluY3JlYXNlVW5zZWVuTWVzc2FnZXNDb3VudEluQ2hhdEJveChtZXNzYWdlLmNoYXQuX2lkKVxyXG4gICAgLy8gICBpZiAoXHJcbiAgICAvLyAgICAgY2hhdElkLnRvU3RyaW5nKCkgIT09IFwiXCIgJiZcclxuICAgIC8vICAgICBjaGF0SWQudG9TdHJpbmcoKSA9PT0gbWVzc2FnZS5jaGF0Ll9pZC50b1N0cmluZygpXHJcbiAgICAvLyAgICkge1xyXG4gICAgLy8gICAgIGxldCB7IGNoZWNrVGltZUFuZENyZWF0ZU5ld01lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8vICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiXHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gICAgIGNoZWNrVGltZUFuZENyZWF0ZU5ld01lc3NhZ2UobWVzc2FnZSwgdHJ1ZSlcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLy8vLy8vL1xyXG5cclxuICAgIC8vIHNvY2tldC5vbihcImNoYXQ6bmV3LWluZm8tbWVzc2FnZVwiLCBhc3luYyBkYXRhID0+IHtcclxuICAgIC8vICAgbGV0IG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2VcclxuICAgIC8vICAgbGV0IGNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcbiAgICAvLyAgIGxldCB7IHVwZGF0ZUFsbENoYXRTZWN0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAvLyAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAvLyAgIClcclxuICAgIC8vICAgdXBkYXRlQWxsQ2hhdFNlY3Rpb24obWVzc2FnZSlcclxuICAgIC8vICAgbGV0IHsgaW5jcmVhc2VVbnNlZW5NZXNzYWdlc0NvdW50SW5DaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAvLyAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAvLyAgIClcclxuICAgIC8vICAgaW5jcmVhc2VVbnNlZW5NZXNzYWdlc0NvdW50SW5DaGF0Qm94KG1lc3NhZ2UuY2hhdC5faWQpXHJcbiAgICAvLyAgIGlmIChjaGF0SWQgIT09IFwiXCIgJiYgY2hhdElkID09PSBtZXNzYWdlLmNoYXQuX2lkKSB7XHJcbiAgICAvLyAgICAgbGV0IHsgY3JlYXRlSW5mb01lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIilcclxuXHJcbiAgICAvLyAgICAgbGV0IGluZm9NZXNzYWdlQm94ID0gY3JlYXRlSW5mb01lc3NhZ2UobWVzc2FnZSlcclxuICAgIC8vICAgICBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXHJcbiAgICAvLyAgICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgLy8gICAgICAgaW5mb01lc3NhZ2VCb3hcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgICAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID1cclxuICAgIC8vICAgICAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLnNjcm9sbEhlaWdodCArIDEwMDBcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyBzb2NrZXQub24oXCJjaGF0OmRlbGV0ZS1tZXNzYWdlLWZvci1hbGxcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAvLyAgIGxldCB7IGNvbnZlcnRVc2VyTWVzc2FnZVRvRGVsZXRlZEZvckFsbE1lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8vICAgICBcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIlxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgIGNvbnZlcnRVc2VyTWVzc2FnZVRvRGVsZXRlZEZvckFsbE1lc3NhZ2UoZGF0YS5kZWxldGVkRm9yQWxsTWVzc2FnZSlcclxuICAgIC8vICAgaWYgKGRhdGEuaXNMYXRlc3RNZXNzYWdlQ2hhbmdlZCkge1xyXG4gICAgLy8gICAgIGxldCB7IHVwZGF0ZUNoYXRCb3hMYXRlc3RNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAvLyAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgICAgdXBkYXRlQ2hhdEJveExhdGVzdE1lc3NhZ2UoZGF0YS5sYXRlc3RNZXNzYWdlKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1kZWxpdmVyZWRcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAvLyAgIGlmIChcclxuICAgIC8vICAgICBkYXRhLmNoYXRJZC50b1N0cmluZygpID09PSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpXHJcbiAgICAvLyAgICkge1xyXG4gICAgLy8gICAgIGxldCB7IGNoYW5nZVVzZXJNZXNzYWdlU3RhdHVzVG9EZWxpdmVyZWQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8vICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiXHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gICAgIGNoYW5nZVVzZXJNZXNzYWdlU3RhdHVzVG9EZWxpdmVyZWQoZGF0YS5tZXNzYWdlSWQpXHJcbiAgICAvLyAgICAgbGV0IHsgdXBkYXRlTWVzc2FnZUluZm9EZWxpdmVyeVN0YXR1cyB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLy8gICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VzZXJNZXNzYWdlT3B0aW9uTW9kYWwuZGV2XCJcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgICAgdXBkYXRlTWVzc2FnZUluZm9EZWxpdmVyeVN0YXR1cyhkYXRhLm1lc3NhZ2VJZCwgZGF0YS5kZWxpdmVyZWRUaW1lKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gc29ja2V0Lm9uKFwiY2hhdDp1cGRhdGUtbWVzc2FnZS1zZWVuLXN0YXR1c1wiLCBhc3luYyBkYXRhID0+IHtcclxuICAgIC8vICAgaWYgKFxyXG4gICAgLy8gICAgIGRhdGEuY2hhdElkLnRvU3RyaW5nKCkgPT09IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKClcclxuICAgIC8vICAgKSB7XHJcbiAgICAvLyAgICAgbGV0IHsgY2hhbmdlVXNlck1lc3NhZ2VTdGF0dXNXaXRoTWVzc2FnZVNlZW5TdGF0dXNDb3VudCB9ID1cclxuICAgIC8vICAgICAgIGF3YWl0IGltcG9ydChcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIilcclxuICAgIC8vICAgICBjaGFuZ2VVc2VyTWVzc2FnZVN0YXR1c1dpdGhNZXNzYWdlU2VlblN0YXR1c0NvdW50KFxyXG4gICAgLy8gICAgICAgZGF0YS5tZXNzYWdlSWQsXHJcbiAgICAvLyAgICAgICBkYXRhLm1lc3NhZ2VTZWVuU3RhdHVzQ291bnQsXHJcbiAgICAvLyAgICAgICBkYXRhLm1lc3NhZ2VSZWFkZXJDb3VudFxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgICBsZXQgeyBhZGRVc2VyVG9NZXNzYWdlSW5mb1NlZW5TdGF0dXMgfSA9IGF3YWl0IGltcG9ydChcclxuICAgIC8vICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91c2VyTWVzc2FnZU9wdGlvbk1vZGFsLmRldlwiXHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gICAgIGFkZFVzZXJUb01lc3NhZ2VJbmZvU2VlblN0YXR1cyhcclxuICAgIC8vICAgICAgIGRhdGEubWVzc2FnZUlkLFxyXG4gICAgLy8gICAgICAgZGF0YS5wdXNoZWRVc2VyLFxyXG4gICAgLy8gICAgICAgZGF0YS5wdXNoZWRVc2VyVGltZVxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1zZWVuLWJ5LXNlbGZcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAvLyAgIGxldCB7IGRlY3JlYXNlVW5zZWVuTWVzc2FnZXNDb3VudEluQ2hhdEJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgLy8gICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgIGRlY3JlYXNlVW5zZWVuTWVzc2FnZXNDb3VudEluQ2hhdEJveChkYXRhLmNoYXRJZClcclxuICAgIC8vIH0pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJzb2NrZXQgcHJvYmxlbVwiLCBlLm1lc3NhZ2UpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDaGF0U29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUNoYXRTZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyIiwiYWN0aXZlQ2hhdEhlYWRlclN0YXR1cyIsIm9uIiwiZGF0YSIsImRhdGFzZXQiLCJjaGF0SWQiLCJ0b1N0cmluZyIsImNoYW5nZUFjdGl2ZUNoYXRCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFR5cGUiLCJiYWNrZ3JvdW5kVmFsdWUiLCJyZW1vdmVBY3RpdmVDaGF0QmFja2dyb3VuZCIsImlubmVySFRNTCIsImlzR3JvdXBDaGF0IiwidXNlciIsImZpcnN0TmFtZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRleHRDb250ZW50IiwiY2hhdCIsImNyZWF0ZUNoYXRCb3giLCJhY3RpdmVDaGF0RGF0YSIsInVwZGF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwiLCJ1cGRhdGVBY3RpdmVDaGF0U2VjdGlvbiIsInVwZGF0ZUNoYXRCb3giLCJjbGVhckFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyIiwiY2xlYXJDaGF0Qm94TGF0ZXN0TWVzc2FnZSIsInNob3dBbGxDaGF0U2VjdGlvbiIsImRlbGV0ZUNoYXRCb3giLCJ1c2VySWQiLCJyZW1vdmVDaGF0SW5mb01lbWJlciIsInNob3dDaGF0Qm94Q2FsbFJvb21Cb3giLCJjYWxsUm9vbSIsIl9pZCIsIm9wZW5BY3RpdmVDaGF0Q2FsbFJvb21Cb3giLCJoaWRlQ2hhdEJveENhbGxSb29tQm94IiwiY2xvc2VBY3RpdmVDaGF0Q2FsbFJvb21Cb3giLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/chat-socket/index.js\n");

/***/ })

}]);