"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_chat-socket_mainChatSocket_dev_js"],{

/***/ "./dev-javascripts/socket/chat-socket/mainChatSocket.dev.js":
/*!******************************************************************!*\
  !*** ./dev-javascripts/socket/chat-socket/mainChatSocket.dev.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainChatSocket\": () => (/* binding */ createMainChatSocket)\n/* harmony export */ });\nfunction createMainChatSocket(socket) {\n  console.log(\"inside chatSocket\");\n  let activeChatSection = document.getElementById(\"activeChatSection\");\n  let activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n  let activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n  socket.on(\"chat:message-start-typing\", async data => {\n    if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n      activeChatHeaderStatus.innerHTML = `${data.isGroupChat ? data.user.firstName : \"\"} typing<span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span>`;\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    }\n  });\n  socket.on(\"chat:message-stop-typing\", async data => {\n    if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n      if (data.isGroupChat) {\n        activeChatHeaderStatus.textContent = \"\";\n      } else {\n        activeChatHeaderStatus.textContent = \"Active\";\n      }\n\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    }\n  });\n  socket.on(\"chat:new-message\", async message => {\n    let chatId = activeChatSection.dataset.chatId;\n    let {\n      updateAllChatSection\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateAllChatSection(message);\n\n    if (chatId !== \"\" && chatId === message.chat._id) {\n      let {\n        checkTimeAndCreateNewMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      checkTimeAndCreateNewMessage(message, activeChatMessageContainer);\n    }\n  }); ////////////////////////////////////////////\n\n  socket.on(\"chat:new-info-message\", async message => {\n    let chatId = activeChatSection.dataset.chatId;\n    let {\n      updateAllChatSection\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateAllChatSection(message);\n\n    if (chatId !== \"\" && chatId === message.chat._id) {\n      let {\n        createInfoMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      createInfoMessage(message, activeChatMessageContainer, \"beforeend\");\n    }\n  }); //////////////////////////////////////////\n\n  socket.on(\"chat:create-new-group-chat\", async chat => {\n    console.log(\"created-new-group-chat\");\n    let {\n      createChatBox\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    createChatBox(chat);\n  });\n  socket.on(\"chat:edit-group-chat\", async chat => {\n    console.log(\"edit-group-chat\");\n    activeChatData = { ...chat\n    };\n    let {\n      updateActiveChatInfoModal\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de0\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n    let {\n      updateActiveChatSection\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_chat_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js-_2dc91\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      updateChatBox\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateActiveChatInfoModal();\n    updateActiveChatSection(activeChatData);\n    updateChatBox(activeChatData);\n  });\n  socket.on(\"chat:clear-chat-all-messages\", async chatId => {\n    let {\n      clearActiveChatMessageContainer\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_chat_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js-_2dc91\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      clearChatBoxLatestMessage\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    clearActiveChatMessageContainer();\n    clearChatBoxLatestMessage(chatId);\n  });\n  socket.on(\"chat:delete-chat\", async chatId => {\n    let {\n      clearActiveChatMessageContainer\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_chat_dev_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_showActiveChatSection_dev_js-_2dc91\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      showAllChatSection,\n      deleteChatBox\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_updateAllChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    showAllChatSection();\n    deleteChatBox(chatId);\n    clearActiveChatMessageContainer();\n  });\n  socket.on(\"chat:user-left-group-chat\", async (chatId, userId) => {\n    let {\n      removeChatInfoMember\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de0\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n    removeChatInfoMember(chatId, userId);\n  });\n  socket.on(\"chat:delete-message-for-all\", async deletedMessage => {\n    let {\n      convertUserMessageToDeletedMessageForAll\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n    convertUserMessageToDeletedMessageForAll(deletedMessage);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2NoYXQtc29ja2V0L21haW5DaGF0U29ja2V0LmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0Esb0JBQVQsQ0FBOEJDLE1BQTlCLEVBQXNDO0VBQzNDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtFQUNBLElBQUlDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQXhCO0VBRUEsSUFBSUMsMEJBQTBCLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUMvQiw0QkFEK0IsQ0FBakM7RUFJQSxJQUFJRSxzQkFBc0IsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLHdCQUF4QixDQUE3QjtFQUVBTCxNQUFNLENBQUNRLEVBQVAsQ0FBVSwyQkFBVixFQUF1QyxNQUFNQyxJQUFOLElBQWM7SUFDbkQsSUFDRU4saUJBQWlCLENBQUNPLE9BQWxCLENBQTBCQyxNQUExQixDQUFpQ0MsUUFBakMsT0FBZ0RILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxRQUFaLEVBRGxELEVBRUU7TUFDQUwsc0JBQXNCLENBQUNNLFNBQXZCLEdBQW9DLEdBQ2xDSixJQUFJLENBQUNLLFdBQUwsR0FBbUJMLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxTQUE3QixHQUF5QyxFQUMxQyxpTEFGRDtNQUlBVCxzQkFBc0IsQ0FBQ1UsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQ0UsdUNBREY7SUFHRDtFQUNGLENBWkQ7RUFhQWxCLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLDBCQUFWLEVBQXNDLE1BQU1DLElBQU4sSUFBYztJQUNsRCxJQUNFTixpQkFBaUIsQ0FBQ08sT0FBbEIsQ0FBMEJDLE1BQTFCLENBQWlDQyxRQUFqQyxPQUFnREgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLFFBQVosRUFEbEQsRUFFRTtNQUNBLElBQUlILElBQUksQ0FBQ0ssV0FBVCxFQUFzQjtRQUNwQlAsc0JBQXNCLENBQUNZLFdBQXZCLEdBQXFDLEVBQXJDO01BQ0QsQ0FGRCxNQUVPO1FBQ0xaLHNCQUFzQixDQUFDWSxXQUF2QixHQUFxQyxRQUFyQztNQUNEOztNQUNEWixzQkFBc0IsQ0FBQ1UsU0FBdkIsQ0FBaUNDLE1BQWpDLENBQ0UsdUNBREY7SUFHRDtFQUNGLENBYkQ7RUFlQWxCLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLGtCQUFWLEVBQThCLE1BQU1ZLE9BQU4sSUFBaUI7SUFDN0MsSUFBSVQsTUFBTSxHQUFHUixpQkFBaUIsQ0FBQ08sT0FBbEIsQ0FBMEJDLE1BQXZDO0lBQ0EsSUFBSTtNQUFFVTtJQUFGLElBQTJCLE1BQU0sdVBBQXJDO0lBR0FBLG9CQUFvQixDQUFDRCxPQUFELENBQXBCOztJQUVBLElBQUlULE1BQU0sS0FBSyxFQUFYLElBQWlCQSxNQUFNLEtBQUtTLE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxHQUE3QyxFQUFrRDtNQUNoRCxJQUFJO1FBQUVDO01BQUYsSUFBbUMsTUFBTSxtU0FBN0M7TUFHQUEsNEJBQTRCLENBQUNKLE9BQUQsRUFBVWQsMEJBQVYsQ0FBNUI7SUFDRDtFQUNGLENBYkQsRUF0QzJDLENBb0QzQzs7RUFDQU4sTUFBTSxDQUFDUSxFQUFQLENBQVUsdUJBQVYsRUFBbUMsTUFBTVksT0FBTixJQUFpQjtJQUNsRCxJQUFJVCxNQUFNLEdBQUdSLGlCQUFpQixDQUFDTyxPQUFsQixDQUEwQkMsTUFBdkM7SUFDQSxJQUFJO01BQUVVO0lBQUYsSUFBMkIsTUFBTSx1UEFBckM7SUFHQUEsb0JBQW9CLENBQUNELE9BQUQsQ0FBcEI7O0lBRUEsSUFBSVQsTUFBTSxLQUFLLEVBQVgsSUFBaUJBLE1BQU0sS0FBS1MsT0FBTyxDQUFDRSxJQUFSLENBQWFDLEdBQTdDLEVBQWtEO01BQ2hELElBQUk7UUFBRUU7TUFBRixJQUF3QixNQUFNLG1TQUFsQztNQUNBQSxpQkFBaUIsQ0FBQ0wsT0FBRCxFQUFVZCwwQkFBVixFQUFzQyxXQUF0QyxDQUFqQjtJQUNEO0VBQ0YsQ0FYRCxFQXJEMkMsQ0FrRTNDOztFQUNBTixNQUFNLENBQUNRLEVBQVAsQ0FBVSw0QkFBVixFQUF3QyxNQUFNYyxJQUFOLElBQWM7SUFDcERyQixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtJQUNBLElBQUk7TUFBRXdCO0lBQUYsSUFBb0IsTUFBTSx1UEFBOUI7SUFHQUEsYUFBYSxDQUFDSixJQUFELENBQWI7RUFDRCxDQU5EO0VBT0F0QixNQUFNLENBQUNRLEVBQVAsQ0FBVSxzQkFBVixFQUFrQyxNQUFNYyxJQUFOLElBQWM7SUFDOUNyQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtJQUNBeUIsY0FBYyxHQUFHLEVBQUUsR0FBR0w7SUFBTCxDQUFqQjtJQUNBLElBQUk7TUFBRU07SUFBRixJQUFnQyxNQUFNLG9aQUExQztJQUdBLElBQUk7TUFBRUM7SUFBRixJQUE4QixNQUFNLDBVQUF4QztJQUdBLElBQUk7TUFBRUM7SUFBRixJQUFvQixNQUFNLHVQQUE5QjtJQUlBRix5QkFBeUI7SUFDekJDLHVCQUF1QixDQUFDRixjQUFELENBQXZCO0lBQ0FHLGFBQWEsQ0FBQ0gsY0FBRCxDQUFiO0VBQ0QsQ0FoQkQ7RUFpQkEzQixNQUFNLENBQUNRLEVBQVAsQ0FBVSw4QkFBVixFQUEwQyxNQUFNRyxNQUFOLElBQWdCO0lBQ3hELElBQUk7TUFBRW9CO0lBQUYsSUFBc0MsTUFBTSwwVUFBaEQ7SUFHQSxJQUFJO01BQUVDO0lBQUYsSUFBZ0MsTUFBTSx1UEFBMUM7SUFHQUQsK0JBQStCO0lBQy9CQyx5QkFBeUIsQ0FBQ3JCLE1BQUQsQ0FBekI7RUFDRCxDQVREO0VBVUFYLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLGtCQUFWLEVBQThCLE1BQU1HLE1BQU4sSUFBZ0I7SUFDNUMsSUFBSTtNQUFFb0I7SUFBRixJQUFzQyxNQUFNLDBVQUFoRDtJQUdBLElBQUk7TUFBRUUsa0JBQUY7TUFBc0JDO0lBQXRCLElBQXdDLE1BQU0sdVBBQWxEO0lBSUFELGtCQUFrQjtJQUNsQkMsYUFBYSxDQUFDdkIsTUFBRCxDQUFiO0lBQ0FvQiwrQkFBK0I7RUFDaEMsQ0FYRDtFQWFBL0IsTUFBTSxDQUFDUSxFQUFQLENBQVUsMkJBQVYsRUFBdUMsT0FBT0csTUFBUCxFQUFld0IsTUFBZixLQUEwQjtJQUMvRCxJQUFJO01BQUVDO0lBQUYsSUFBMkIsTUFBTSxvWkFBckM7SUFHQUEsb0JBQW9CLENBQUN6QixNQUFELEVBQVN3QixNQUFULENBQXBCO0VBQ0QsQ0FMRDtFQU1BbkMsTUFBTSxDQUFDUSxFQUFQLENBQVUsNkJBQVYsRUFBeUMsTUFBTTZCLGNBQU4sSUFBd0I7SUFDL0QsSUFBSTtNQUFFQztJQUFGLElBQStDLE1BQU0sbVNBQXpEO0lBR0FBLHdDQUF3QyxDQUFDRCxjQUFELENBQXhDO0VBQ0QsQ0FMRDtBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2NoYXQtc29ja2V0L21haW5DaGF0U29ja2V0LmRldi5qcz9iN2RhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluQ2hhdFNvY2tldChzb2NrZXQpIHtcclxuICBjb25zb2xlLmxvZyhcImluc2lkZSBjaGF0U29ja2V0XCIpXHJcbiAgbGV0IGFjdGl2ZUNoYXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0U2VjdGlvblwiKVxyXG5cclxuICBsZXQgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXJcIlxyXG4gIClcclxuXHJcbiAgbGV0IGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRIZWFkZXJTdGF0dXNcIilcclxuXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDptZXNzYWdlLXN0YXJ0LXR5cGluZ1wiLCBhc3luYyBkYXRhID0+IHtcclxuICAgIGlmIChcclxuICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gZGF0YS5jaGF0SWQudG9TdHJpbmcoKVxyXG4gICAgKSB7XHJcbiAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuaW5uZXJIVE1MID0gYCR7XHJcbiAgICAgICAgZGF0YS5pc0dyb3VwQ2hhdCA/IGRhdGEudXNlci5maXJzdE5hbWUgOiBcIlwiXHJcbiAgICAgIH0gdHlwaW5nPHNwYW4gY2xhc3M9XCJhY3RpdmUtY2hhdC1oZWFkZXJfX3R5cGluZy1lZmZlY3RcIj4uPC9zcGFuPjxzcGFuIGNsYXNzPVwiYWN0aXZlLWNoYXQtaGVhZGVyX190eXBpbmctZWZmZWN0XCI+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cImFjdGl2ZS1jaGF0LWhlYWRlcl9fdHlwaW5nLWVmZmVjdFwiPi48L3NwYW4+YFxyXG5cclxuICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgIFwiYWN0aXZlLWNoYXQtaGVhZGVyX19jaGF0LXN0YXR1cy0taGlkZVwiXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9KVxyXG4gIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1zdG9wLXR5cGluZ1wiLCBhc3luYyBkYXRhID0+IHtcclxuICAgIGlmIChcclxuICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gZGF0YS5jaGF0SWQudG9TdHJpbmcoKVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChkYXRhLmlzR3JvdXBDaGF0KSB7XHJcbiAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJBY3RpdmVcIlxyXG4gICAgICB9XHJcbiAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LWhlYWRlcl9fY2hhdC1zdGF0dXMtLWhpZGVcIlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpuZXctbWVzc2FnZVwiLCBhc3luYyBtZXNzYWdlID0+IHtcclxuICAgIGxldCBjaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gICAgbGV0IHsgdXBkYXRlQWxsQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICB1cGRhdGVBbGxDaGF0U2VjdGlvbihtZXNzYWdlKVxyXG5cclxuICAgIGlmIChjaGF0SWQgIT09IFwiXCIgJiYgY2hhdElkID09PSBtZXNzYWdlLmNoYXQuX2lkKSB7XHJcbiAgICAgIGxldCB7IGNoZWNrVGltZUFuZENyZWF0ZU5ld01lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGNoZWNrVGltZUFuZENyZWF0ZU5ld01lc3NhZ2UobWVzc2FnZSwgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIpXHJcbiAgICB9XHJcbiAgfSlcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHNvY2tldC5vbihcImNoYXQ6bmV3LWluZm8tbWVzc2FnZVwiLCBhc3luYyBtZXNzYWdlID0+IHtcclxuICAgIGxldCBjaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gICAgbGV0IHsgdXBkYXRlQWxsQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICB1cGRhdGVBbGxDaGF0U2VjdGlvbihtZXNzYWdlKVxyXG5cclxuICAgIGlmIChjaGF0SWQgIT09IFwiXCIgJiYgY2hhdElkID09PSBtZXNzYWdlLmNoYXQuX2lkKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZUluZm9NZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9jaGF0L2pzL21lc3NhZ2UuZGV2XCIpXHJcbiAgICAgIGNyZWF0ZUluZm9NZXNzYWdlKG1lc3NhZ2UsIGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyLCBcImJlZm9yZWVuZFwiKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHNvY2tldC5vbihcImNoYXQ6Y3JlYXRlLW5ldy1ncm91cC1jaGF0XCIsIGFzeW5jIGNoYXQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVkLW5ldy1ncm91cC1jaGF0XCIpXHJcbiAgICBsZXQgeyBjcmVhdGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgY3JlYXRlQ2hhdEJveChjaGF0KVxyXG4gIH0pXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDplZGl0LWdyb3VwLWNoYXRcIiwgYXN5bmMgY2hhdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVkaXQtZ3JvdXAtY2hhdFwiKVxyXG4gICAgYWN0aXZlQ2hhdERhdGEgPSB7IC4uLmNoYXQgfVxyXG4gICAgbGV0IHsgdXBkYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uL2NoYXQvanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXZcIlxyXG4gICAgKVxyXG4gICAgbGV0IHsgdXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgbGV0IHsgdXBkYXRlQ2hhdEJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuXHJcbiAgICB1cGRhdGVBY3RpdmVDaGF0SW5mb01vZGFsKClcclxuICAgIHVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uKGFjdGl2ZUNoYXREYXRhKVxyXG4gICAgdXBkYXRlQ2hhdEJveChhY3RpdmVDaGF0RGF0YSlcclxuICB9KVxyXG4gIHNvY2tldC5vbihcImNoYXQ6Y2xlYXItY2hhdC1hbGwtbWVzc2FnZXNcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgIGxldCB7IGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgbGV0IHsgY2xlYXJDaGF0Qm94TGF0ZXN0TWVzc2FnZSB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuICAgIGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIoKVxyXG4gICAgY2xlYXJDaGF0Qm94TGF0ZXN0TWVzc2FnZShjaGF0SWQpXHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0OmRlbGV0ZS1jaGF0XCIsIGFzeW5jIGNoYXRJZCA9PiB7XHJcbiAgICBsZXQgeyBjbGVhckFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuICAgIGxldCB7IHNob3dBbGxDaGF0U2VjdGlvbiwgZGVsZXRlQ2hhdEJveCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuXHJcbiAgICBzaG93QWxsQ2hhdFNlY3Rpb24oKVxyXG4gICAgZGVsZXRlQ2hhdEJveChjaGF0SWQpXHJcbiAgICBjbGVhckFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyKClcclxuICB9KVxyXG5cclxuICBzb2NrZXQub24oXCJjaGF0OnVzZXItbGVmdC1ncm91cC1jaGF0XCIsIGFzeW5jIChjaGF0SWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgbGV0IHsgcmVtb3ZlQ2hhdEluZm9NZW1iZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi9jaGF0L2pzL2NyZWF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwuZGV2XCJcclxuICAgIClcclxuICAgIHJlbW92ZUNoYXRJbmZvTWVtYmVyKGNoYXRJZCwgdXNlcklkKVxyXG4gIH0pXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpkZWxldGUtbWVzc2FnZS1mb3ItYWxsXCIsIGFzeW5jIGRlbGV0ZWRNZXNzYWdlID0+IHtcclxuICAgIGxldCB7IGNvbnZlcnRVc2VyTWVzc2FnZVRvRGVsZXRlZE1lc3NhZ2VGb3JBbGwgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi9jaGF0L2pzL21lc3NhZ2UuZGV2XCJcclxuICAgIClcclxuICAgIGNvbnZlcnRVc2VyTWVzc2FnZVRvRGVsZXRlZE1lc3NhZ2VGb3JBbGwoZGVsZXRlZE1lc3NhZ2UpXHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlTWFpbkNoYXRTb2NrZXQiLCJzb2NrZXQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2hhdFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzIiwib24iLCJkYXRhIiwiZGF0YXNldCIsImNoYXRJZCIsInRvU3RyaW5nIiwiaW5uZXJIVE1MIiwiaXNHcm91cENoYXQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwidXBkYXRlQWxsQ2hhdFNlY3Rpb24iLCJjaGF0IiwiX2lkIiwiY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZSIsImNyZWF0ZUluZm9NZXNzYWdlIiwiY3JlYXRlQ2hhdEJveCIsImFjdGl2ZUNoYXREYXRhIiwidXBkYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbCIsInVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uIiwidXBkYXRlQ2hhdEJveCIsImNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIiwic2hvd0FsbENoYXRTZWN0aW9uIiwiZGVsZXRlQ2hhdEJveCIsInVzZXJJZCIsInJlbW92ZUNoYXRJbmZvTWVtYmVyIiwiZGVsZXRlZE1lc3NhZ2UiLCJjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRNZXNzYWdlRm9yQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/chat-socket/mainChatSocket.dev.js\n");

/***/ })

}]);