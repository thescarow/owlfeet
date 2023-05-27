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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createChatSocket\": () => (/* binding */ createChatSocket)\n/* harmony export */ });\nasync function createChatSocket(socket) {\n  try {\n    console.log(\"insideChatSocket\");\n    let activeChatSection = document.getElementById(\"activeChatSection\");\n    let activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n    let activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n    socket.on(\"chat:message-start-typing\", async data => {\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        activeChatHeaderStatus.innerHTML = `${data.isGroupChat ? data.user.firstName : \"\"} typing<span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span>`;\n        activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      }\n    });\n    socket.on(\"chat:message-stop-typing\", async data => {\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        if (data.isGroupChat) {\n          activeChatHeaderStatus.textContent = \"\";\n        } else {\n          activeChatHeaderStatus.textContent = \"Active\";\n        }\n\n        activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      }\n    });\n    socket.on(\"chat:new-message\", async data => {\n      console.log(\"new-message data:\", data);\n      let message = data.message;\n      let chatId = activeChatSection.dataset.chatId;\n      let {\n        updateAllChatSection\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      updateAllChatSection(message);\n      let {\n        increaseUnseenMessagesCountInChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      increaseUnseenMessagesCountInChatBox(message.chat._id);\n\n      if (chatId.toString() !== \"\" && chatId.toString() === message.chat._id.toString()) {\n        let {\n          checkTimeAndCreateNewMessage\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n        checkTimeAndCreateNewMessage(message, true);\n      }\n    }); ////////////////////////////////////////////\n\n    socket.on(\"chat:new-info-message\", async data => {\n      let message = data.message;\n      let chatId = activeChatSection.dataset.chatId;\n      let {\n        updateAllChatSection\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      updateAllChatSection(message);\n      let {\n        increaseUnseenMessagesCountInChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      increaseUnseenMessagesCountInChatBox(message.chat._id);\n\n      if (chatId !== \"\" && chatId === message.chat._id) {\n        let {\n          createInfoMessage\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n        let infoMessageBox = createInfoMessage(message);\n        activeChatMessageContainer.insertAdjacentElement(\"beforeend\", infoMessageBox);\n        activeChatMessageContainer.scrollTop = activeChatMessageContainer.scrollHeight + 1000;\n      }\n    }); //////////////////////////////////////////\n\n    socket.on(\"chat:create-new-group-chat\", async chat => {\n      console.log(\"created-new-group-chat\");\n      let {\n        createChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      createChatBox(chat);\n    });\n    socket.on(\"chat:edit-group-chat\", async chat => {\n      console.log(\"edit-group-chat\");\n      activeChatData = { ...chat\n      };\n      let {\n        updateActiveChatInfoModal\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de3\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n      let {\n        updateActiveChatSection\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n      let {\n        updateChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      updateActiveChatInfoModal();\n      updateActiveChatSection(activeChatData);\n      updateChatBox(activeChatData);\n    });\n    socket.on(\"chat:clear-chat-all-messages\", async chatId => {\n      let {\n        clearActiveChatMessageContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n      let {\n        clearChatBoxLatestMessage\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      clearActiveChatMessageContainer();\n      clearChatBoxLatestMessage(chatId);\n    });\n    socket.on(\"chat:delete-chat\", async chatId => {\n      let {\n        clearActiveChatMessageContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n      let {\n        showAllChatSection,\n        deleteChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      showAllChatSection();\n      deleteChatBox(chatId);\n      clearActiveChatMessageContainer();\n    });\n    socket.on(\"chat:user-left-group-chat\", async (chatId, userId) => {\n      let {\n        removeChatInfoMember\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de3\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n      removeChatInfoMember(chatId, userId);\n    });\n    socket.on(\"chat:delete-message-for-all\", async data => {\n      let {\n        convertUserMessageToDeletedForAllMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      convertUserMessageToDeletedForAllMessage(data.deletedForAllMessage);\n\n      if (data.isLatestMessageChanged) {\n        let {\n          updateChatBoxLatestMessage\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n        updateChatBoxLatestMessage(data.latestMessage);\n      }\n    });\n    socket.on(\"chat:message-delivered\", async data => {\n      if (data.chatId.toString() === activeChatSection.dataset.chatId.toString()) {\n        let {\n          changeUserMessageStatusToDelivered\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n        changeUserMessageStatusToDelivered(data.messageId);\n        let {\n          updateMessageInfoDeliveryStatus\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_userMessageOptionModal_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/userMessageOptionModal.dev */ \"./dev-javascripts/chat/js/userMessageOptionModal.dev.js\"));\n        updateMessageInfoDeliveryStatus(data.messageId, data.deliveredTime);\n      }\n    });\n    socket.on(\"chat:update-message-seen-status\", async data => {\n      if (data.chatId.toString() === activeChatSection.dataset.chatId.toString()) {\n        let {\n          changeUserMessageStatusWithMessageSeenStatusCount\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n        changeUserMessageStatusWithMessageSeenStatusCount(data.messageId, data.messageSeenStatusCount, data.messageReaderCount);\n        let {\n          addUserToMessageInfoSeenStatus\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_userMessageOptionModal_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/userMessageOptionModal.dev */ \"./dev-javascripts/chat/js/userMessageOptionModal.dev.js\"));\n        addUserToMessageInfoSeenStatus(data.messageId, data.pushedUser, data.pushedUserTime);\n      }\n    });\n    socket.on(\"chat:message-seen-by-self\", async data => {\n      let {\n        decreaseUnseenMessagesCountInChatBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      decreaseUnseenMessagesCountInChatBox(data.chatId);\n    });\n    socket.on(\"chat:created-chat-call-room\", async data => {\n      let {\n        showChatBoxCallRoomBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      showChatBoxCallRoomBox(data.chatId, data.callRoom._id);\n\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        let {\n          openActiveChatCallRoomBox\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        openActiveChatCallRoomBox(data.callRoom._id);\n      }\n    });\n    socket.on(\"chat:end-chat-call-room\", async data => {\n      let {\n        hideChatBoxCallRoomBox\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n      hideChatBoxCallRoomBox(data.chatId);\n\n      if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n        let {\n          closeActiveChatCallRoomBox\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        closeActiveChatCallRoomBox();\n      }\n    });\n  } catch (e) {\n    console.log(\"socket problem\", e.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvY2hhdC1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLGdCQUFmLENBQWdDQyxNQUFoQyxFQUF3QztFQUM3QyxJQUFJO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0lBRUEsSUFBSUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7SUFFQSxJQUFJQywwQkFBMEIsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQy9CLDRCQUQrQixDQUFqQztJQUlBLElBQUlFLHNCQUFzQixHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FDM0Isd0JBRDJCLENBQTdCO0lBSUFMLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLDJCQUFWLEVBQXVDLE1BQU1DLElBQU4sSUFBYztNQUNuRCxJQUNFTixpQkFBaUIsQ0FBQ08sT0FBbEIsQ0FBMEJDLE1BQTFCLENBQWlDQyxRQUFqQyxPQUFnREgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLFFBQVosRUFEbEQsRUFFRTtRQUNBTCxzQkFBc0IsQ0FBQ00sU0FBdkIsR0FBb0MsR0FDbENKLElBQUksQ0FBQ0ssV0FBTCxHQUFtQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVDLFNBQTdCLEdBQXlDLEVBQzFDLGlMQUZEO1FBSUFULHNCQUFzQixDQUFDVSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FDRSx1Q0FERjtNQUdEO0lBQ0YsQ0FaRDtJQWFBbEIsTUFBTSxDQUFDUSxFQUFQLENBQVUsMEJBQVYsRUFBc0MsTUFBTUMsSUFBTixJQUFjO01BQ2xELElBQ0VOLGlCQUFpQixDQUFDTyxPQUFsQixDQUEwQkMsTUFBMUIsQ0FBaUNDLFFBQWpDLE9BQWdESCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsUUFBWixFQURsRCxFQUVFO1FBQ0EsSUFBSUgsSUFBSSxDQUFDSyxXQUFULEVBQXNCO1VBQ3BCUCxzQkFBc0IsQ0FBQ1ksV0FB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dC9ldmVudC1oYW5kbGVyL2NoYXQtc29ja2V0L2luZGV4LmpzP2I4MjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYXRTb2NrZXQoc29ja2V0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlQ2hhdFNvY2tldFwiKVxyXG5cclxuICAgIGxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuXHJcbiAgICBsZXQgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lclwiXHJcbiAgICApXHJcblxyXG4gICAgbGV0IGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzXCJcclxuICAgIClcclxuXHJcbiAgICBzb2NrZXQub24oXCJjaGF0Om1lc3NhZ2Utc3RhcnQtdHlwaW5nXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gZGF0YS5jaGF0SWQudG9TdHJpbmcoKVxyXG4gICAgICApIHtcclxuICAgICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmlubmVySFRNTCA9IGAke1xyXG4gICAgICAgICAgZGF0YS5pc0dyb3VwQ2hhdCA/IGRhdGEudXNlci5maXJzdE5hbWUgOiBcIlwiXHJcbiAgICAgICAgfSB0eXBpbmc8c3BhbiBjbGFzcz1cImFjdGl2ZS1jaGF0LWhlYWRlcl9fdHlwaW5nLWVmZmVjdFwiPi48L3NwYW4+PHNwYW4gY2xhc3M9XCJhY3RpdmUtY2hhdC1oZWFkZXJfX3R5cGluZy1lZmZlY3RcIj4uPC9zcGFuPjxzcGFuIGNsYXNzPVwiYWN0aXZlLWNoYXQtaGVhZGVyX190eXBpbmctZWZmZWN0XCI+Ljwvc3Bhbj5gXHJcblxyXG4gICAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgIFwiYWN0aXZlLWNoYXQtaGVhZGVyX19jaGF0LXN0YXR1cy0taGlkZVwiXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDptZXNzYWdlLXN0b3AtdHlwaW5nXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gZGF0YS5jaGF0SWQudG9TdHJpbmcoKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoZGF0YS5pc0dyb3VwQ2hhdCkge1xyXG4gICAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQWN0aXZlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgXCJhY3RpdmUtY2hhdC1oZWFkZXJfX2NoYXQtc3RhdHVzLS1oaWRlXCJcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDpuZXctbWVzc2FnZVwiLCBhc3luYyBkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXctbWVzc2FnZSBkYXRhOlwiLCBkYXRhKVxyXG4gICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubWVzc2FnZVxyXG4gICAgICBsZXQgY2hhdElkID0gYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWRcclxuICAgICAgbGV0IHsgdXBkYXRlQWxsQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICB1cGRhdGVBbGxDaGF0U2VjdGlvbihtZXNzYWdlKVxyXG4gICAgICBsZXQgeyBpbmNyZWFzZVVuc2Vlbk1lc3NhZ2VzQ291bnRJbkNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBpbmNyZWFzZVVuc2Vlbk1lc3NhZ2VzQ291bnRJbkNoYXRCb3gobWVzc2FnZS5jaGF0Ll9pZClcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNoYXRJZC50b1N0cmluZygpICE9PSBcIlwiICYmXHJcbiAgICAgICAgY2hhdElkLnRvU3RyaW5nKCkgPT09IG1lc3NhZ2UuY2hhdC5faWQudG9TdHJpbmcoKVxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgeyBjaGVja1RpbWVBbmRDcmVhdGVOZXdNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjaGVja1RpbWVBbmRDcmVhdGVOZXdNZXNzYWdlKG1lc3NhZ2UsIHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDpuZXctaW5mby1tZXNzYWdlXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubWVzc2FnZVxyXG4gICAgICBsZXQgY2hhdElkID0gYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWRcclxuICAgICAgbGV0IHsgdXBkYXRlQWxsQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICB1cGRhdGVBbGxDaGF0U2VjdGlvbihtZXNzYWdlKVxyXG4gICAgICBsZXQgeyBpbmNyZWFzZVVuc2Vlbk1lc3NhZ2VzQ291bnRJbkNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBpbmNyZWFzZVVuc2Vlbk1lc3NhZ2VzQ291bnRJbkNoYXRCb3gobWVzc2FnZS5jaGF0Ll9pZClcclxuICAgICAgaWYgKGNoYXRJZCAhPT0gXCJcIiAmJiBjaGF0SWQgPT09IG1lc3NhZ2UuY2hhdC5faWQpIHtcclxuICAgICAgICBsZXQgeyBjcmVhdGVJbmZvTWVzc2FnZSB9ID0gYXdhaXQgaW1wb3J0KFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiKVxyXG5cclxuICAgICAgICBsZXQgaW5mb01lc3NhZ2VCb3ggPSBjcmVhdGVJbmZvTWVzc2FnZShtZXNzYWdlKVxyXG4gICAgICAgIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcclxuICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgICAgICBpbmZvTWVzc2FnZUJveFxyXG4gICAgICAgIClcclxuICAgICAgICBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lci5zY3JvbGxUb3AgPVxyXG4gICAgICAgICAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgMTAwMFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDpjcmVhdGUtbmV3LWdyb3VwLWNoYXRcIiwgYXN5bmMgY2hhdCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZC1uZXctZ3JvdXAtY2hhdFwiKVxyXG4gICAgICBsZXQgeyBjcmVhdGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlQ2hhdEJveChjaGF0KVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6ZWRpdC1ncm91cC1jaGF0XCIsIGFzeW5jIGNoYXQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVkaXQtZ3JvdXAtY2hhdFwiKVxyXG4gICAgICBhY3RpdmVDaGF0RGF0YSA9IHsgLi4uY2hhdCB9XHJcbiAgICAgIGxldCB7IHVwZGF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGxldCB7IHVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGxldCB7IHVwZGF0ZUNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG5cclxuICAgICAgdXBkYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbCgpXHJcbiAgICAgIHVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uKGFjdGl2ZUNoYXREYXRhKVxyXG4gICAgICB1cGRhdGVDaGF0Qm94KGFjdGl2ZUNoYXREYXRhKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6Y2xlYXItY2hhdC1hbGwtbWVzc2FnZXNcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgICAgbGV0IHsgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBsZXQgeyBjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcigpXHJcbiAgICAgIGNsZWFyQ2hhdEJveExhdGVzdE1lc3NhZ2UoY2hhdElkKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6ZGVsZXRlLWNoYXRcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgICAgbGV0IHsgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBsZXQgeyBzaG93QWxsQ2hhdFNlY3Rpb24sIGRlbGV0ZUNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG5cclxuICAgICAgc2hvd0FsbENoYXRTZWN0aW9uKClcclxuICAgICAgZGVsZXRlQ2hhdEJveChjaGF0SWQpXHJcbiAgICAgIGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIoKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oXCJjaGF0OnVzZXItbGVmdC1ncm91cC1jaGF0XCIsIGFzeW5jIChjaGF0SWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgICBsZXQgeyByZW1vdmVDaGF0SW5mb01lbWJlciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9jcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgcmVtb3ZlQ2hhdEluZm9NZW1iZXIoY2hhdElkLCB1c2VySWQpXHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDpkZWxldGUtbWVzc2FnZS1mb3ItYWxsXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBsZXQgeyBjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRGb3JBbGxNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL21lc3NhZ2UuZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRGb3JBbGxNZXNzYWdlKGRhdGEuZGVsZXRlZEZvckFsbE1lc3NhZ2UpXHJcbiAgICAgIGlmIChkYXRhLmlzTGF0ZXN0TWVzc2FnZUNoYW5nZWQpIHtcclxuICAgICAgICBsZXQgeyB1cGRhdGVDaGF0Qm94TGF0ZXN0TWVzc2FnZSB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHVwZGF0ZUNoYXRCb3hMYXRlc3RNZXNzYWdlKGRhdGEubGF0ZXN0TWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1kZWxpdmVyZWRcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkYXRhLmNoYXRJZC50b1N0cmluZygpID09PSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCB7IGNoYW5nZVVzZXJNZXNzYWdlU3RhdHVzVG9EZWxpdmVyZWQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNoYW5nZVVzZXJNZXNzYWdlU3RhdHVzVG9EZWxpdmVyZWQoZGF0YS5tZXNzYWdlSWQpXHJcbiAgICAgICAgbGV0IHsgdXBkYXRlTWVzc2FnZUluZm9EZWxpdmVyeVN0YXR1cyB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VzZXJNZXNzYWdlT3B0aW9uTW9kYWwuZGV2XCJcclxuICAgICAgICApXHJcbiAgICAgICAgdXBkYXRlTWVzc2FnZUluZm9EZWxpdmVyeVN0YXR1cyhkYXRhLm1lc3NhZ2VJZCwgZGF0YS5kZWxpdmVyZWRUaW1lKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiY2hhdDp1cGRhdGUtbWVzc2FnZS1zZWVuLXN0YXR1c1wiLCBhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRhdGEuY2hhdElkLnRvU3RyaW5nKCkgPT09IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IHsgY2hhbmdlVXNlck1lc3NhZ2VTdGF0dXNXaXRoTWVzc2FnZVNlZW5TdGF0dXNDb3VudCB9ID1cclxuICAgICAgICAgIGF3YWl0IGltcG9ydChcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIilcclxuICAgICAgICBjaGFuZ2VVc2VyTWVzc2FnZVN0YXR1c1dpdGhNZXNzYWdlU2VlblN0YXR1c0NvdW50KFxyXG4gICAgICAgICAgZGF0YS5tZXNzYWdlSWQsXHJcbiAgICAgICAgICBkYXRhLm1lc3NhZ2VTZWVuU3RhdHVzQ291bnQsXHJcbiAgICAgICAgICBkYXRhLm1lc3NhZ2VSZWFkZXJDb3VudFxyXG4gICAgICAgIClcclxuICAgICAgICBsZXQgeyBhZGRVc2VyVG9NZXNzYWdlSW5mb1NlZW5TdGF0dXMgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91c2VyTWVzc2FnZU9wdGlvbk1vZGFsLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGFkZFVzZXJUb01lc3NhZ2VJbmZvU2VlblN0YXR1cyhcclxuICAgICAgICAgIGRhdGEubWVzc2FnZUlkLFxyXG4gICAgICAgICAgZGF0YS5wdXNoZWRVc2VyLFxyXG4gICAgICAgICAgZGF0YS5wdXNoZWRVc2VyVGltZVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1zZWVuLWJ5LXNlbGZcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgIGxldCB7IGRlY3JlYXNlVW5zZWVuTWVzc2FnZXNDb3VudEluQ2hhdEJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGRlY3JlYXNlVW5zZWVuTWVzc2FnZXNDb3VudEluQ2hhdEJveChkYXRhLmNoYXRJZClcclxuICAgIH0pXHJcbiAgICBzb2NrZXQub24oXCJjaGF0OmNyZWF0ZWQtY2hhdC1jYWxsLXJvb21cIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgIGxldCB7IHNob3dDaGF0Qm94Q2FsbFJvb21Cb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgKVxyXG5cclxuICAgICAgc2hvd0NoYXRCb3hDYWxsUm9vbUJveChkYXRhLmNoYXRJZCwgZGF0YS5jYWxsUm9vbS5faWQpXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpID09PSBkYXRhLmNoYXRJZC50b1N0cmluZygpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCB7IG9wZW5BY3RpdmVDaGF0Q2FsbFJvb21Cb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgICAgICApXHJcbiAgICAgICAgb3BlbkFjdGl2ZUNoYXRDYWxsUm9vbUJveChkYXRhLmNhbGxSb29tLl9pZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNoYXQ6ZW5kLWNoYXQtY2FsbC1yb29tXCIsIGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBsZXQgeyBoaWRlQ2hhdEJveENhbGxSb29tQm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgaGlkZUNoYXRCb3hDYWxsUm9vbUJveChkYXRhLmNoYXRJZClcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpID09PSBkYXRhLmNoYXRJZC50b1N0cmluZygpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCB7IGNsb3NlQWN0aXZlQ2hhdENhbGxSb29tQm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uLy4uLy4uL2NoYXQvanMvc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNsb3NlQWN0aXZlQ2hhdENhbGxSb29tQm94KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNvY2tldCBwcm9ibGVtXCIsIGUubWVzc2FnZSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNoYXRTb2NrZXQiLCJzb2NrZXQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2hhdFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzIiwib24iLCJkYXRhIiwiZGF0YXNldCIsImNoYXRJZCIsInRvU3RyaW5nIiwiaW5uZXJIVE1MIiwiaXNHcm91cENoYXQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwidXBkYXRlQWxsQ2hhdFNlY3Rpb24iLCJpbmNyZWFzZVVuc2Vlbk1lc3NhZ2VzQ291bnRJbkNoYXRCb3giLCJjaGF0IiwiX2lkIiwiY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZSIsImNyZWF0ZUluZm9NZXNzYWdlIiwiaW5mb01lc3NhZ2VCb3giLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjcmVhdGVDaGF0Qm94IiwiYWN0aXZlQ2hhdERhdGEiLCJ1cGRhdGVBY3RpdmVDaGF0SW5mb01vZGFsIiwidXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24iLCJ1cGRhdGVDaGF0Qm94IiwiY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciIsImNsZWFyQ2hhdEJveExhdGVzdE1lc3NhZ2UiLCJzaG93QWxsQ2hhdFNlY3Rpb24iLCJkZWxldGVDaGF0Qm94IiwidXNlcklkIiwicmVtb3ZlQ2hhdEluZm9NZW1iZXIiLCJjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRGb3JBbGxNZXNzYWdlIiwiZGVsZXRlZEZvckFsbE1lc3NhZ2UiLCJpc0xhdGVzdE1lc3NhZ2VDaGFuZ2VkIiwidXBkYXRlQ2hhdEJveExhdGVzdE1lc3NhZ2UiLCJsYXRlc3RNZXNzYWdlIiwiY2hhbmdlVXNlck1lc3NhZ2VTdGF0dXNUb0RlbGl2ZXJlZCIsIm1lc3NhZ2VJZCIsInVwZGF0ZU1lc3NhZ2VJbmZvRGVsaXZlcnlTdGF0dXMiLCJkZWxpdmVyZWRUaW1lIiwiY2hhbmdlVXNlck1lc3NhZ2VTdGF0dXNXaXRoTWVzc2FnZVNlZW5TdGF0dXNDb3VudCIsIm1lc3NhZ2VTZWVuU3RhdHVzQ291bnQiLCJtZXNzYWdlUmVhZGVyQ291bnQiLCJhZGRVc2VyVG9NZXNzYWdlSW5mb1NlZW5TdGF0dXMiLCJwdXNoZWRVc2VyIiwicHVzaGVkVXNlclRpbWUiLCJkZWNyZWFzZVVuc2Vlbk1lc3NhZ2VzQ291bnRJbkNoYXRCb3giLCJzaG93Q2hhdEJveENhbGxSb29tQm94IiwiY2FsbFJvb20iLCJvcGVuQWN0aXZlQ2hhdENhbGxSb29tQm94IiwiaGlkZUNoYXRCb3hDYWxsUm9vbUJveCIsImNsb3NlQWN0aXZlQ2hhdENhbGxSb29tQm94IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/chat-socket/index.js\n");

/***/ })

}]);