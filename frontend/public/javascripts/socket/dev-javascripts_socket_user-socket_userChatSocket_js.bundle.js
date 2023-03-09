"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_user-socket_userChatSocket_js"],{

/***/ "./dev-javascripts/socket/user-socket/userChatSocket.js":
/*!**************************************************************!*\
  !*** ./dev-javascripts/socket/user-socket/userChatSocket.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUserChatSocket\": () => (/* binding */ createUserChatSocket)\n/* harmony export */ });\n// import { timeDifferenceFromNow } from \"../../common/calculateTimeDifference.dev\"\nfunction createUserChatSocket(socket) {\n  let activeChatSection = document.getElementById(\"activeChatSection\");\n  let activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\"); ////////////////////////////////////////////\n\n  socket.on(\"user:online\", async (userId, chatId) => {\n    console.log(\"user online:\", userId);\n    let chatBox = document.querySelector(`.chat-box[data-chat-id=\"${chatId}\"]`);\n    if (chatBox) chatBox.classList.add(\"chat-box--active-user\");\n\n    if (activeChatSection.dataset.chatId.toString() === chatId.toString()) {\n      activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      activeChatHeaderStatus.textContent = \"Active\";\n    }\n  });\n  socket.on(\"user:offline\", async (userId, chatId) => {\n    console.log(\"user offline:\", userId);\n    let chatBox = document.querySelector(`.chat-box[data-chat-id=\"${chatId}\"]`);\n    if (chatBox) chatBox.classList.remove(\"chat-box--active-user\");\n\n    if (activeChatSection.dataset.chatId.toString() === chatId.toString()) {\n      activeChatHeaderStatus.classList.add(\"active-chat-header__chat-status--hide\");\n      activeChatHeaderStatus.textContent = \"last active 1sec ago\";\n      setTimeout(() => {\n        activeChatHeaderStatus.classList.remove(\"active-chat-header__chat-status--hide\");\n      }, 5000);\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L3VzZXItc29ja2V0L3VzZXJDaGF0U29ja2V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVPLFNBQVNBLG9CQUFULENBQThCQyxNQUE5QixFQUFzQztFQUMzQyxJQUFJQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUF4QjtFQUNBLElBQUlDLHNCQUFzQixHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQTdCLENBRjJDLENBRzNDOztFQUNBSCxNQUFNLENBQUNLLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLE9BQU9DLE1BQVAsRUFBZUMsTUFBZixLQUEwQjtJQUNqREMsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkgsTUFBNUI7SUFFQSxJQUFJSSxPQUFPLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF3QiwyQkFBMEJKLE1BQU8sSUFBekQsQ0FBZDtJQUNBLElBQUlHLE9BQUosRUFBYUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQix1QkFBdEI7O0lBRWIsSUFBSVosaUJBQWlCLENBQUNhLE9BQWxCLENBQTBCUCxNQUExQixDQUFpQ1EsUUFBakMsT0FBZ0RSLE1BQU0sQ0FBQ1EsUUFBUCxFQUFwRCxFQUF1RTtNQUNyRVgsc0JBQXNCLENBQUNRLFNBQXZCLENBQWlDSSxNQUFqQyxDQUNFLHVDQURGO01BR0FaLHNCQUFzQixDQUFDYSxXQUF2QixHQUFxQyxRQUFyQztJQUNEO0VBQ0YsQ0FaRDtFQWFBakIsTUFBTSxDQUFDSyxFQUFQLENBQVUsY0FBVixFQUEwQixPQUFPQyxNQUFQLEVBQWVDLE1BQWYsS0FBMEI7SUFDbERDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJILE1BQTdCO0lBQ0EsSUFBSUksT0FBTyxHQUFHUixRQUFRLENBQUNTLGFBQVQsQ0FBd0IsMkJBQTBCSixNQUFPLElBQXpELENBQWQ7SUFDQSxJQUFJRyxPQUFKLEVBQWFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkksTUFBbEIsQ0FBeUIsdUJBQXpCOztJQUViLElBQUlmLGlCQUFpQixDQUFDYSxPQUFsQixDQUEwQlAsTUFBMUIsQ0FBaUNRLFFBQWpDLE9BQWdEUixNQUFNLENBQUNRLFFBQVAsRUFBcEQsRUFBdUU7TUFDckVYLHNCQUFzQixDQUFDUSxTQUF2QixDQUFpQ0MsR0FBakMsQ0FDRSx1Q0FERjtNQUdBVCxzQkFBc0IsQ0FBQ2EsV0FBdkIsR0FBcUMsc0JBQXJDO01BQ0FDLFVBQVUsQ0FBQyxNQUFNO1FBQ2ZkLHNCQUFzQixDQUFDUSxTQUF2QixDQUFpQ0ksTUFBakMsQ0FDRSx1Q0FERjtNQUdELENBSlMsRUFJUCxJQUpPLENBQVY7SUFLRDtFQUNGLENBaEJEO0FBaUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L3VzZXItc29ja2V0L3VzZXJDaGF0U29ja2V0LmpzPzJjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdGltZURpZmZlcmVuY2VGcm9tTm93IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jYWxjdWxhdGVUaW1lRGlmZmVyZW5jZS5kZXZcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJDaGF0U29ja2V0KHNvY2tldCkge1xyXG4gIGxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuICBsZXQgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdEhlYWRlclN0YXR1c1wiKVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgc29ja2V0Lm9uKFwidXNlcjpvbmxpbmVcIiwgYXN5bmMgKHVzZXJJZCwgY2hhdElkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgb25saW5lOlwiLCB1c2VySWQpXHJcblxyXG4gICAgbGV0IGNoYXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2hhdC1ib3hbZGF0YS1jaGF0LWlkPVwiJHtjaGF0SWR9XCJdYClcclxuICAgIGlmIChjaGF0Qm94KSBjaGF0Qm94LmNsYXNzTGlzdC5hZGQoXCJjaGF0LWJveC0tYWN0aXZlLXVzZXJcIilcclxuXHJcbiAgICBpZiAoYWN0aXZlQ2hhdFNlY3Rpb24uZGF0YXNldC5jaGF0SWQudG9TdHJpbmcoKSA9PT0gY2hhdElkLnRvU3RyaW5nKCkpIHtcclxuICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgIFwiYWN0aXZlLWNoYXQtaGVhZGVyX19jaGF0LXN0YXR1cy0taGlkZVwiXHJcbiAgICAgIClcclxuICAgICAgYWN0aXZlQ2hhdEhlYWRlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQWN0aXZlXCJcclxuICAgIH1cclxuICB9KVxyXG4gIHNvY2tldC5vbihcInVzZXI6b2ZmbGluZVwiLCBhc3luYyAodXNlcklkLCBjaGF0SWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlciBvZmZsaW5lOlwiLCB1c2VySWQpXHJcbiAgICBsZXQgY2hhdEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jaGF0LWJveFtkYXRhLWNoYXQtaWQ9XCIke2NoYXRJZH1cIl1gKVxyXG4gICAgaWYgKGNoYXRCb3gpIGNoYXRCb3guY2xhc3NMaXN0LnJlbW92ZShcImNoYXQtYm94LS1hY3RpdmUtdXNlclwiKVxyXG5cclxuICAgIGlmIChhY3RpdmVDaGF0U2VjdGlvbi5kYXRhc2V0LmNoYXRJZC50b1N0cmluZygpID09PSBjaGF0SWQudG9TdHJpbmcoKSkge1xyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgXCJhY3RpdmUtY2hhdC1oZWFkZXJfX2NoYXQtc3RhdHVzLS1oaWRlXCJcclxuICAgICAgKVxyXG4gICAgICBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJsYXN0IGFjdGl2ZSAxc2VjIGFnb1wiXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgIFwiYWN0aXZlLWNoYXQtaGVhZGVyX19jaGF0LXN0YXR1cy0taGlkZVwiXHJcbiAgICAgICAgKVxyXG4gICAgICB9LCA1MDAwKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXJDaGF0U29ja2V0Iiwic29ja2V0IiwiYWN0aXZlQ2hhdFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlQ2hhdEhlYWRlclN0YXR1cyIsIm9uIiwidXNlcklkIiwiY2hhdElkIiwiY29uc29sZSIsImxvZyIsImNoYXRCb3giLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsInRvU3RyaW5nIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/user-socket/userChatSocket.js\n");

/***/ })

}]);