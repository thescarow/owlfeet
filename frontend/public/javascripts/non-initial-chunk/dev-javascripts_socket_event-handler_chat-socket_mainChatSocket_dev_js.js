"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_chat-socket_mainChatSocket_dev_js"],{

/***/ "./dev-javascripts/socket/event-handler/chat-socket/mainChatSocket.dev.js":
/*!********************************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/chat-socket/mainChatSocket.dev.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainChatSocket\": () => (/* binding */ createMainChatSocket)\n/* harmony export */ });\nfunction createMainChatSocket(socket) {\n  console.log(\"inside chatSocket\");\n  let activeChatSection = document.getElementById(\"activeChatSection\");\n  let activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n  let activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n  socket.on(\"chat:message-start-typing\", async data => {\n    if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n      activeChatHeaderStatus.innerHTML = `${data.isGroupChat ? data.user.firstName : \"\"} typing<span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span>`;\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    }\n  });\n  socket.on(\"chat:message-stop-typing\", async data => {\n    if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n      if (data.isGroupChat) {\n        activeChatHeaderStatus.textContent = \"\";\n      } else {\n        activeChatHeaderStatus.textContent = \"Active\";\n      }\n\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    }\n  });\n  socket.on(\"chat:new-message\", async message => {\n    socket.emit(\"called message socket bhaiya\", 3, 3, 3, 3);\n    let chatId = activeChatSection.dataset.chatId;\n    let {\n      updateAllChatSection\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateAllChatSection(message);\n\n    if (chatId.toString() !== \"\" && chatId.toString() === message.chat.toString()) {\n      let {\n        checkTimeAndCreateNewMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      checkTimeAndCreateNewMessage(message, activeChatMessageContainer);\n    }\n  }); ////////////////////////////////////////////\n\n  socket.on(\"chat:new-info-message\", async message => {\n    let chatId = activeChatSection.dataset.chatId;\n    let {\n      updateAllChatSection\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateAllChatSection(message);\n\n    if (chatId !== \"\" && chatId === message.chat._id) {\n      let {\n        createInfoMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      createInfoMessage(message, activeChatMessageContainer, \"beforeend\");\n    }\n  }); //////////////////////////////////////////\n\n  socket.on(\"chat:create-new-group-chat\", async chat => {\n    console.log(\"created-new-group-chat\");\n    let {\n      createChatBox\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    createChatBox(chat);\n  });\n  socket.on(\"chat:edit-group-chat\", async chat => {\n    console.log(\"edit-group-chat\");\n    activeChatData = { ...chat\n    };\n    let {\n      updateActiveChatInfoModal\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n    let {\n      updateActiveChatSection\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      updateChatBox\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateActiveChatInfoModal();\n    updateActiveChatSection(activeChatData);\n    updateChatBox(activeChatData);\n  });\n  socket.on(\"chat:clear-chat-all-messages\", async chatId => {\n    let {\n      clearActiveChatMessageContainer\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      clearChatBoxLatestMessage\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    clearActiveChatMessageContainer();\n    clearChatBoxLatestMessage(chatId);\n  });\n  socket.on(\"chat:delete-chat\", async chatId => {\n    let {\n      clearActiveChatMessageContainer\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      showAllChatSection,\n      deleteChatBox\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    showAllChatSection();\n    deleteChatBox(chatId);\n    clearActiveChatMessageContainer();\n  });\n  socket.on(\"chat:user-left-group-chat\", async (chatId, userId) => {\n    let {\n      removeChatInfoMember\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n    removeChatInfoMember(chatId, userId);\n  });\n  socket.on(\"chat:delete-message-for-all\", async deletedMessage => {\n    let {\n      convertUserMessageToDeletedMessageForAll\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n    convertUserMessageToDeletedMessageForAll(deletedMessage);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvY2hhdC1zb2NrZXQvbWFpbkNoYXRTb2NrZXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxvQkFBVCxDQUE4QkMsTUFBOUIsRUFBc0M7RUFDM0NDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0VBQ0EsSUFBSUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7RUFFQSxJQUFJQywwQkFBMEIsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQy9CLDRCQUQrQixDQUFqQztFQUlBLElBQUlFLHNCQUFzQixHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQTdCO0VBRUFMLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLDJCQUFWLEVBQXVDLE1BQU1DLElBQU4sSUFBYztJQUNuRCxJQUNFTixpQkFBaUIsQ0FBQ08sT0FBbEIsQ0FBMEJDLE1BQTFCLENBQWlDQyxRQUFqQyxPQUFnREgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLFFBQVosRUFEbEQsRUFFRTtNQUNBTCxzQkFBc0IsQ0FBQ00sU0FBdkIsR0FBb0MsR0FDbENKLElBQUksQ0FBQ0ssV0FBTCxHQUFtQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVDLFNBQTdCLEdBQXlDLEVBQzFDLGlMQUZEO01BSUFULHNCQUFzQixDQUFDVSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FDRSx1Q0FERjtJQUdEO0VBQ0YsQ0FaRDtFQWFBbEIsTUFBTSxDQUFDUSxFQUFQLENBQVUsMEJBQVYsRUFBc0MsTUFBTUMsSUFBTixJQUFjO0lBQ2xELElBQ0VOLGlCQUFpQixDQUFDTyxPQUFsQixDQUEwQkMsTUFBMUIsQ0FBaUNDLFFBQWpDLE9BQWdESCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsUUFBWixFQURsRCxFQUVFO01BQ0EsSUFBSUgsSUFBSSxDQUFDSyxXQUFULEVBQXNCO1FBQ3BCUCxzQkFBc0IsQ0FBQ1ks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STtNQUFFRSxrQkFBRjtNQUFzQkM7SUFBdEIsSUFBd0MsTUFBTSwwUEFBbEQ7SUFJQUQsa0JBQWtCO0lBQ2xCQyxhQUFhLENBQUN4QixNQUFELENBQWI7SUFDQXFCLCtCQUErQjtFQUNoQyxDQVhEO0VBYUFoQyxNQUFNLENBQUNRLEVBQVAsQ0FBVSwyQkFBVixFQUF1QyxPQUFPRyxNQUFQLEVBQWV5QixNQUFmLEtBQTBCO0lBQy9ELElBQUk7TUFBRUM7SUFBRixJQUEyQixNQUFNLHVaQUFyQztJQUdBQSxvQkFBb0IsQ0FBQzFCLE1BQUQsRUFBU3lCLE1BQVQsQ0FBcEI7RUFDRCxDQUxEO0VBTUFwQyxNQUFNLENBQUNRLEVBQVAsQ0FBVSw2QkFBVixFQUF5QyxNQUFNOEIsY0FBTixJQUF3QjtJQUMvRCxJQUFJO01BQUVDO0lBQUYsSUFBK0MsTUFBTSxzU0FBekQ7SUFHQUEsd0NBQXdDLENBQUNELGNBQUQsQ0FBeEM7RUFDRCxDQUxEO0FBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvZXZlbnQtaGFuZGxlci9jaGF0LXNvY2tldC9tYWluQ2hhdFNvY2tldC5kZXYuanM/OWFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbkNoYXRTb2NrZXQoc29ja2V0KSB7XHJcbiAgY29uc29sZS5sb2coXCJpbnNpZGUgY2hhdFNvY2tldFwiKVxyXG4gIGxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuXHJcbiAgbGV0IGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyXCJcclxuICApXHJcblxyXG4gIGxldCBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzXCIpXHJcblxyXG4gIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1zdGFydC10eXBpbmdcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICkge1xyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmlubmVySFRNTCA9IGAke1xyXG4gICAgICAgIGRhdGEuaXNHcm91cENoYXQgPyBkYXRhLnVzZXIuZmlyc3ROYW1lIDogXCJcIlxyXG4gICAgICB9IHR5cGluZzxzcGFuIGNsYXNzPVwiYWN0aXZlLWNoYXQtaGVhZGVyX190eXBpbmctZWZmZWN0XCI+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cImFjdGl2ZS1jaGF0LWhlYWRlcl9fdHlwaW5nLWVmZmVjdFwiPi48L3NwYW4+PHNwYW4gY2xhc3M9XCJhY3RpdmUtY2hhdC1oZWFkZXJfX3R5cGluZy1lZmZlY3RcIj4uPC9zcGFuPmBcclxuXHJcbiAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LWhlYWRlcl9fY2hhdC1zdGF0dXMtLWhpZGVcIlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0Om1lc3NhZ2Utc3RvcC10eXBpbmdcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICkge1xyXG4gICAgICBpZiAoZGF0YS5pc0dyb3VwQ2hhdCkge1xyXG4gICAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQWN0aXZlXCJcclxuICAgICAgfVxyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgXCJhY3RpdmUtY2hhdC1oZWFkZXJfX2NoYXQtc3RhdHVzLS1oaWRlXCJcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHNvY2tldC5vbihcImNoYXQ6bmV3LW1lc3NhZ2VcIiwgYXN5bmMgbWVzc2FnZSA9PiB7XHJcbiAgICBzb2NrZXQuZW1pdChcImNhbGxlZCBtZXNzYWdlIHNvY2tldCBiaGFpeWFcIiwgMywgMywgMywgMylcclxuICAgIGxldCBjaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gICAgbGV0IHsgdXBkYXRlQWxsQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICB1cGRhdGVBbGxDaGF0U2VjdGlvbihtZXNzYWdlKVxyXG5cclxuICAgIGlmIChcclxuICAgICAgY2hhdElkLnRvU3RyaW5nKCkgIT09IFwiXCIgJiZcclxuICAgICAgY2hhdElkLnRvU3RyaW5nKCkgPT09IG1lc3NhZ2UuY2hhdC50b1N0cmluZygpXHJcbiAgICApIHtcclxuICAgICAgbGV0IHsgY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZSB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZShtZXNzYWdlLCBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcilcclxuICAgIH1cclxuICB9KVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpuZXctaW5mby1tZXNzYWdlXCIsIGFzeW5jIG1lc3NhZ2UgPT4ge1xyXG4gICAgbGV0IGNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcbiAgICBsZXQgeyB1cGRhdGVBbGxDaGF0U2VjdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuICAgIHVwZGF0ZUFsbENoYXRTZWN0aW9uKG1lc3NhZ2UpXHJcblxyXG4gICAgaWYgKGNoYXRJZCAhPT0gXCJcIiAmJiBjaGF0SWQgPT09IG1lc3NhZ2UuY2hhdC5faWQpIHtcclxuICAgICAgbGV0IHsgY3JlYXRlSW5mb01lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIilcclxuICAgICAgY3JlYXRlSW5mb01lc3NhZ2UobWVzc2FnZSwgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIsIFwiYmVmb3JlZW5kXCIpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpjcmVhdGUtbmV3LWdyb3VwLWNoYXRcIiwgYXN5bmMgY2hhdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQtbmV3LWdyb3VwLWNoYXRcIilcclxuICAgIGxldCB7IGNyZWF0ZUNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICBjcmVhdGVDaGF0Qm94KGNoYXQpXHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0OmVkaXQtZ3JvdXAtY2hhdFwiLCBhc3luYyBjaGF0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWRpdC1ncm91cC1jaGF0XCIpXHJcbiAgICBhY3RpdmVDaGF0RGF0YSA9IHsgLi4uY2hhdCB9XHJcbiAgICBsZXQgeyB1cGRhdGVBY3RpdmVDaGF0SW5mb01vZGFsIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9jcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyB1cGRhdGVBY3RpdmVDaGF0U2VjdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyB1cGRhdGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG5cclxuICAgIHVwZGF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwoKVxyXG4gICAgdXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24oYWN0aXZlQ2hhdERhdGEpXHJcbiAgICB1cGRhdGVDaGF0Qm94KGFjdGl2ZUNoYXREYXRhKVxyXG4gIH0pXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpjbGVhci1jaGF0LWFsbC1tZXNzYWdlc1wiLCBhc3luYyBjaGF0SWQgPT4ge1xyXG4gICAgbGV0IHsgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyBjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcigpXHJcbiAgICBjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlKGNoYXRJZClcclxuICB9KVxyXG4gIHNvY2tldC5vbihcImNoYXQ6ZGVsZXRlLWNoYXRcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgIGxldCB7IGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgbGV0IHsgc2hvd0FsbENoYXRTZWN0aW9uLCBkZWxldGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG5cclxuICAgIHNob3dBbGxDaGF0U2VjdGlvbigpXHJcbiAgICBkZWxldGVDaGF0Qm94KGNoYXRJZClcclxuICAgIGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIoKVxyXG4gIH0pXHJcblxyXG4gIHNvY2tldC5vbihcImNoYXQ6dXNlci1sZWZ0LWdyb3VwLWNoYXRcIiwgYXN5bmMgKGNoYXRJZCwgdXNlcklkKSA9PiB7XHJcbiAgICBsZXQgeyByZW1vdmVDaGF0SW5mb01lbWJlciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXZcIlxyXG4gICAgKVxyXG4gICAgcmVtb3ZlQ2hhdEluZm9NZW1iZXIoY2hhdElkLCB1c2VySWQpXHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0OmRlbGV0ZS1tZXNzYWdlLWZvci1hbGxcIiwgYXN5bmMgZGVsZXRlZE1lc3NhZ2UgPT4ge1xyXG4gICAgbGV0IHsgY29udmVydFVzZXJNZXNzYWdlVG9EZWxldGVkTWVzc2FnZUZvckFsbCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIlxyXG4gICAgKVxyXG4gICAgY29udmVydFVzZXJNZXNzYWdlVG9EZWxldGVkTWVzc2FnZUZvckFsbChkZWxldGVkTWVzc2FnZSlcclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVNYWluQ2hhdFNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVDaGF0U2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciIsImFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMiLCJvbiIsImRhdGEiLCJkYXRhc2V0IiwiY2hhdElkIiwidG9TdHJpbmciLCJpbm5lckhUTUwiLCJpc0dyb3VwQ2hhdCIsInVzZXIiLCJmaXJzdE5hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJlbWl0IiwidXBkYXRlQWxsQ2hhdFNlY3Rpb24iLCJjaGF0IiwiY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZSIsIl9pZCIsImNyZWF0ZUluZm9NZXNzYWdlIiwiY3JlYXRlQ2hhdEJveCIsImFjdGl2ZUNoYXREYXRhIiwidXBkYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbCIsInVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uIiwidXBkYXRlQ2hhdEJveCIsImNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIiwic2hvd0FsbENoYXRTZWN0aW9uIiwiZGVsZXRlQ2hhdEJveCIsInVzZXJJZCIsInJlbW92ZUNoYXRJbmZvTWVtYmVyIiwiZGVsZXRlZE1lc3NhZ2UiLCJjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRNZXNzYWdlRm9yQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/chat-socket/mainChatSocket.dev.js\n");

/***/ })

}]);