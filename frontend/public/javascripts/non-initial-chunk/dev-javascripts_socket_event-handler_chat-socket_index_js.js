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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createChatSocket\": () => (/* binding */ createChatSocket)\n/* harmony export */ });\nasync function createChatSocket(socket) {\n  console.log(\"insideChatSocket\");\n  let activeChatSection = document.getElementById(\"activeChatSection\");\n  let activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n  let activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n  socket.on(\"chat:message-start-typing\", async data => {\n    if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n      activeChatHeaderStatus.innerHTML = `${data.isGroupChat ? data.user.firstName : \"\"} typing<span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span><span class=\"active-chat-header__typing-effect\">.</span>`;\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    }\n  });\n  socket.on(\"chat:message-stop-typing\", async data => {\n    if (activeChatSection.dataset.chatId.toString() === data.chatId.toString()) {\n      if (data.isGroupChat) {\n        activeChatHeaderStatus.textContent = \"\";\n      } else {\n        activeChatHeaderStatus.textContent = \"Active\";\n      }\n\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n    }\n  });\n  socket.on(\"chat:new-message\", async message => {\n    socket.emit(\"called message socket bhaiya\", 3, 3, 3, 3);\n    let chatId = activeChatSection.dataset.chatId;\n    let {\n      updateAllChatSection\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateAllChatSection(message);\n\n    if (chatId.toString() !== \"\" && chatId.toString() === message.chat.toString()) {\n      let {\n        checkTimeAndCreateNewMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      checkTimeAndCreateNewMessage(message, activeChatMessageContainer);\n    }\n  }); ////////////////////////////////////////////\n\n  socket.on(\"chat:new-info-message\", async message => {\n    let chatId = activeChatSection.dataset.chatId;\n    let {\n      updateAllChatSection\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateAllChatSection(message);\n\n    if (chatId !== \"\" && chatId === message.chat._id) {\n      let {\n        createInfoMessage\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n      createInfoMessage(message, activeChatMessageContainer, \"beforeend\");\n    }\n  }); //////////////////////////////////////////\n\n  socket.on(\"chat:create-new-group-chat\", async chat => {\n    console.log(\"created-new-group-chat\");\n    let {\n      createChatBox\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    createChatBox(chat);\n  });\n  socket.on(\"chat:edit-group-chat\", async chat => {\n    console.log(\"edit-group-chat\");\n    activeChatData = { ...chat\n    };\n    let {\n      updateActiveChatInfoModal\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n    let {\n      updateActiveChatSection\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      updateChatBox\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateActiveChatInfoModal();\n    updateActiveChatSection(activeChatData);\n    updateChatBox(activeChatData);\n  });\n  socket.on(\"chat:clear-chat-all-messages\", async chatId => {\n    let {\n      clearActiveChatMessageContainer\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      clearChatBoxLatestMessage\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    clearActiveChatMessageContainer();\n    clearChatBoxLatestMessage(chatId);\n  });\n  socket.on(\"chat:delete-chat\", async chatId => {\n    let {\n      clearActiveChatMessageContainer\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n    let {\n      showAllChatSection,\n      deleteChatBox\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    showAllChatSection();\n    deleteChatBox(chatId);\n    clearActiveChatMessageContainer();\n  });\n  socket.on(\"chat:user-left-group-chat\", async (chatId, userId) => {\n    let {\n      removeChatInfoMember\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_chat_js_createActiveChatInfoModal_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/createActiveChatInfoModal.dev */ \"./dev-javascripts/chat/js/createActiveChatInfoModal.dev.js\"));\n    removeChatInfoMember(chatId, userId);\n  });\n  socket.on(\"chat:delete-message-for-all\", async data => {\n    let {\n      convertUserMessageToDeletedForAllMessage\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n    let {\n      updateChatBoxLatestMessage\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-backend_node_modules_mongoose_dist_browser_umd_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_updateAllChatSection_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../chat/js/updateAllChatSection.dev */ \"./dev-javascripts/chat/js/updateAllChatSection.dev.js\"));\n    updateChatBoxLatestMessage(data.deletedForAllMessage);\n    convertUserMessageToDeletedForAllMessage(data.deletedForAllMessage);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvY2hhdC1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLGdCQUFmLENBQWdDQyxNQUFoQyxFQUF3QztFQUM3Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7RUFFQSxJQUFJQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUF4QjtFQUVBLElBQUlDLDBCQUEwQixHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FDL0IsNEJBRCtCLENBQWpDO0VBSUEsSUFBSUUsc0JBQXNCLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix3QkFBeEIsQ0FBN0I7RUFFQUwsTUFBTSxDQUFDUSxFQUFQLENBQVUsMkJBQVYsRUFBdUMsTUFBTUMsSUFBTixJQUFjO0lBQ25ELElBQ0VOLGlCQUFpQixDQUFDTyxPQUFsQixDQUEwQkMsTUFBMUIsQ0FBaUNDLFFBQWpDLE9BQWdESCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsUUFBWixFQURsRCxFQUVFO01BQ0FMLHNCQUFzQixDQUFDTSxTQUF2QixHQUFvQyxHQUNsQ0osSUFBSSxDQUFDSyxXQUFMLEdBQW1CTCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsU0FBN0IsR0FBeUMsRUFDMUMsaUxBRkQ7TUFJQVQsc0JBQXNCLENBQUNVLFNBQXZCLENBQWlDQyxNQUFqQyxDQUNFLHVDQURGO0lBR0Q7RUFDRixDQVpEO0VBYUFsQixNQUFNLENBQUNRLEVBQVAsQ0FBVSwwQkFBVixFQUFzQyxNQUFNQyxJQUFOLElBQWM7SUFDbEQsSUFDRU4saUJBQWlCLENBQUNPLE9BQWxCLENBQTBCQyxNQUExQixDQUFpQ0MsUUFBakMsT0FBZ0RILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxRQUFaLEVBRGxELEVBRUU7TUFDQSxJQUFJSCxJQUFJLENBQUNLLFdBQVQsRUFBc0I7UUFDcEJQLHNCQUFzQixDQUFDWSxXQUF2QixHQUFxQyxF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O01BQXNCQztJQUF0QixJQUF3QyxNQUFNLDRWQUFsRDtJQUlBRCxrQkFBa0I7SUFDbEJDLGFBQWEsQ0FBQ3hCLE1BQUQsQ0FBYjtJQUNBcUIsK0JBQStCO0VBQ2hDLENBWEQ7RUFhQWhDLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLDJCQUFWLEVBQXVDLE9BQU9HLE1BQVAsRUFBZXlCLE1BQWYsS0FBMEI7SUFDL0QsSUFBSTtNQUFFQztJQUFGLElBQTJCLE1BQU0sdVpBQXJDO0lBR0FBLG9CQUFvQixDQUFDMUIsTUFBRCxFQUFTeUIsTUFBVCxDQUFwQjtFQUNELENBTEQ7RUFNQXBDLE1BQU0sQ0FBQ1EsRUFBUCxDQUFVLDZCQUFWLEVBQXlDLE1BQU1DLElBQU4sSUFBYztJQUNyRCxJQUFJO01BQUU2QjtJQUFGLElBQStDLE1BQU0sc1NBQXpEO0lBR0EsSUFBSTtNQUFFQztJQUFGLElBQWlDLE1BQU0sNFZBQTNDO0lBR0FBLDBCQUEwQixDQUFDOUIsSUFBSSxDQUFDK0Isb0JBQU4sQ0FBMUI7SUFDQUYsd0NBQXdDLENBQUM3QixJQUFJLENBQUMrQixvQkFBTixDQUF4QztFQUNELENBVEQ7QUFVRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL3NvY2tldC9ldmVudC1oYW5kbGVyL2NoYXQtc29ja2V0L2luZGV4LmpzP2I4MjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYXRTb2NrZXQoc29ja2V0KSB7XHJcbiAgY29uc29sZS5sb2coXCJpbnNpZGVDaGF0U29ja2V0XCIpXHJcblxyXG4gIGxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuXHJcbiAgbGV0IGFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjdGl2ZUNoYXRNZXNzYWdlQ29udGFpbmVyXCJcclxuICApXHJcblxyXG4gIGxldCBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzXCIpXHJcblxyXG4gIHNvY2tldC5vbihcImNoYXQ6bWVzc2FnZS1zdGFydC10eXBpbmdcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICkge1xyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmlubmVySFRNTCA9IGAke1xyXG4gICAgICAgIGRhdGEuaXNHcm91cENoYXQgPyBkYXRhLnVzZXIuZmlyc3ROYW1lIDogXCJcIlxyXG4gICAgICB9IHR5cGluZzxzcGFuIGNsYXNzPVwiYWN0aXZlLWNoYXQtaGVhZGVyX190eXBpbmctZWZmZWN0XCI+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cImFjdGl2ZS1jaGF0LWhlYWRlcl9fdHlwaW5nLWVmZmVjdFwiPi48L3NwYW4+PHNwYW4gY2xhc3M9XCJhY3RpdmUtY2hhdC1oZWFkZXJfX3R5cGluZy1lZmZlY3RcIj4uPC9zcGFuPmBcclxuXHJcbiAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICBcImFjdGl2ZS1jaGF0LWhlYWRlcl9fY2hhdC1zdGF0dXMtLWhpZGVcIlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0Om1lc3NhZ2Utc3RvcC10eXBpbmdcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkLnRvU3RyaW5nKCkgPT09IGRhdGEuY2hhdElkLnRvU3RyaW5nKClcclxuICAgICkge1xyXG4gICAgICBpZiAoZGF0YS5pc0dyb3VwQ2hhdCkge1xyXG4gICAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQWN0aXZlXCJcclxuICAgICAgfVxyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgXCJhY3RpdmUtY2hhdC1oZWFkZXJfX2NoYXQtc3RhdHVzLS1oaWRlXCJcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHNvY2tldC5vbihcImNoYXQ6bmV3LW1lc3NhZ2VcIiwgYXN5bmMgbWVzc2FnZSA9PiB7XHJcbiAgICBzb2NrZXQuZW1pdChcImNhbGxlZCBtZXNzYWdlIHNvY2tldCBiaGFpeWFcIiwgMywgMywgMywgMylcclxuICAgIGxldCBjaGF0SWQgPSBhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZFxyXG4gICAgbGV0IHsgdXBkYXRlQWxsQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICB1cGRhdGVBbGxDaGF0U2VjdGlvbihtZXNzYWdlKVxyXG5cclxuICAgIGlmIChcclxuICAgICAgY2hhdElkLnRvU3RyaW5nKCkgIT09IFwiXCIgJiZcclxuICAgICAgY2hhdElkLnRvU3RyaW5nKCkgPT09IG1lc3NhZ2UuY2hhdC50b1N0cmluZygpXHJcbiAgICApIHtcclxuICAgICAgbGV0IHsgY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZSB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZShtZXNzYWdlLCBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcilcclxuICAgIH1cclxuICB9KVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpuZXctaW5mby1tZXNzYWdlXCIsIGFzeW5jIG1lc3NhZ2UgPT4ge1xyXG4gICAgbGV0IGNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcbiAgICBsZXQgeyB1cGRhdGVBbGxDaGF0U2VjdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuICAgIHVwZGF0ZUFsbENoYXRTZWN0aW9uKG1lc3NhZ2UpXHJcblxyXG4gICAgaWYgKGNoYXRJZCAhPT0gXCJcIiAmJiBjaGF0SWQgPT09IG1lc3NhZ2UuY2hhdC5faWQpIHtcclxuICAgICAgbGV0IHsgY3JlYXRlSW5mb01lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcIi4uLy4uLy4uL2NoYXQvanMvbWVzc2FnZS5kZXZcIilcclxuICAgICAgY3JlYXRlSW5mb01lc3NhZ2UobWVzc2FnZSwgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIsIFwiYmVmb3JlZW5kXCIpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpjcmVhdGUtbmV3LWdyb3VwLWNoYXRcIiwgYXN5bmMgY2hhdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQtbmV3LWdyb3VwLWNoYXRcIilcclxuICAgIGxldCB7IGNyZWF0ZUNoYXRCb3ggfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3VwZGF0ZUFsbENoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICBjcmVhdGVDaGF0Qm94KGNoYXQpXHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0OmVkaXQtZ3JvdXAtY2hhdFwiLCBhc3luYyBjaGF0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZWRpdC1ncm91cC1jaGF0XCIpXHJcbiAgICBhY3RpdmVDaGF0RGF0YSA9IHsgLi4uY2hhdCB9XHJcbiAgICBsZXQgeyB1cGRhdGVBY3RpdmVDaGF0SW5mb01vZGFsIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9jcmVhdGVBY3RpdmVDaGF0SW5mb01vZGFsLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyB1cGRhdGVBY3RpdmVDaGF0U2VjdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyB1cGRhdGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG5cclxuICAgIHVwZGF0ZUFjdGl2ZUNoYXRJbmZvTW9kYWwoKVxyXG4gICAgdXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24oYWN0aXZlQ2hhdERhdGEpXHJcbiAgICB1cGRhdGVDaGF0Qm94KGFjdGl2ZUNoYXREYXRhKVxyXG4gIH0pXHJcbiAgc29ja2V0Lm9uKFwiY2hhdDpjbGVhci1jaGF0LWFsbC1tZXNzYWdlc1wiLCBhc3luYyBjaGF0SWQgPT4ge1xyXG4gICAgbGV0IHsgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyBjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcigpXHJcbiAgICBjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlKGNoYXRJZClcclxuICB9KVxyXG4gIHNvY2tldC5vbihcImNoYXQ6ZGVsZXRlLWNoYXRcIiwgYXN5bmMgY2hhdElkID0+IHtcclxuICAgIGxldCB7IGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9jaGF0L2pzL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG4gICAgbGV0IHsgc2hvd0FsbENoYXRTZWN0aW9uLCBkZWxldGVDaGF0Qm94IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy91cGRhdGVBbGxDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgKVxyXG5cclxuICAgIHNob3dBbGxDaGF0U2VjdGlvbigpXHJcbiAgICBkZWxldGVDaGF0Qm94KGNoYXRJZClcclxuICAgIGNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIoKVxyXG4gIH0pXHJcblxyXG4gIHNvY2tldC5vbihcImNoYXQ6dXNlci1sZWZ0LWdyb3VwLWNoYXRcIiwgYXN5bmMgKGNoYXRJZCwgdXNlcklkKSA9PiB7XHJcbiAgICBsZXQgeyByZW1vdmVDaGF0SW5mb01lbWJlciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvY3JlYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbC5kZXZcIlxyXG4gICAgKVxyXG4gICAgcmVtb3ZlQ2hhdEluZm9NZW1iZXIoY2hhdElkLCB1c2VySWQpXHJcbiAgfSlcclxuICBzb2NrZXQub24oXCJjaGF0OmRlbGV0ZS1tZXNzYWdlLWZvci1hbGxcIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICBsZXQgeyBjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRGb3JBbGxNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vLi4vLi4vY2hhdC9qcy9tZXNzYWdlLmRldlwiXHJcbiAgICApXHJcbiAgICBsZXQgeyB1cGRhdGVDaGF0Qm94TGF0ZXN0TWVzc2FnZSB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2NoYXQvanMvdXBkYXRlQWxsQ2hhdFNlY3Rpb24uZGV2XCJcclxuICAgIClcclxuICAgIHVwZGF0ZUNoYXRCb3hMYXRlc3RNZXNzYWdlKGRhdGEuZGVsZXRlZEZvckFsbE1lc3NhZ2UpXHJcbiAgICBjb252ZXJ0VXNlck1lc3NhZ2VUb0RlbGV0ZWRGb3JBbGxNZXNzYWdlKGRhdGEuZGVsZXRlZEZvckFsbE1lc3NhZ2UpXHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2hhdFNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVDaGF0U2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciIsImFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMiLCJvbiIsImRhdGEiLCJkYXRhc2V0IiwiY2hhdElkIiwidG9TdHJpbmciLCJpbm5lckhUTUwiLCJpc0dyb3VwQ2hhdCIsInVzZXIiLCJmaXJzdE5hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJlbWl0IiwidXBkYXRlQWxsQ2hhdFNlY3Rpb24iLCJjaGF0IiwiY2hlY2tUaW1lQW5kQ3JlYXRlTmV3TWVzc2FnZSIsIl9pZCIsImNyZWF0ZUluZm9NZXNzYWdlIiwiY3JlYXRlQ2hhdEJveCIsImFjdGl2ZUNoYXREYXRhIiwidXBkYXRlQWN0aXZlQ2hhdEluZm9Nb2RhbCIsInVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uIiwidXBkYXRlQ2hhdEJveCIsImNsZWFyQWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJjbGVhckNoYXRCb3hMYXRlc3RNZXNzYWdlIiwic2hvd0FsbENoYXRTZWN0aW9uIiwiZGVsZXRlQ2hhdEJveCIsInVzZXJJZCIsInJlbW92ZUNoYXRJbmZvTWVtYmVyIiwiY29udmVydFVzZXJNZXNzYWdlVG9EZWxldGVkRm9yQWxsTWVzc2FnZSIsInVwZGF0ZUNoYXRCb3hMYXRlc3RNZXNzYWdlIiwiZGVsZXRlZEZvckFsbE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/chat-socket/index.js\n");

/***/ })

}]);