"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_user-socket_comingCallSocket_dev_js"],{

/***/ "./dev-javascripts/socket/event-handler/user-socket/comingCallSocket.dev.js":
/*!**********************************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/user-socket/comingCallSocket.dev.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComingCallSocket\": () => (/* binding */ createComingCallSocket)\n/* harmony export */ });\nfunction createComingCallSocket(socket) {\n  socket.on(\"call:created-chat-call-room\", async data => {\n    if (data.startedBy.toString() !== loginUser._id.toString()) {\n      let {\n        createComingCallModal\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_comingCallModal_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../common/comingCallModal.dev */ \"./dev-javascripts/common/comingCallModal.dev.js\"));\n      createComingCallModal(data.callRoom);\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvdXNlci1zb2NrZXQvY29taW5nQ2FsbFNvY2tldC5kZXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLHNCQUFULENBQWdDQyxNQUFoQyxFQUF3QztFQUM3Q0EsTUFBTSxDQUFDQyxFQUFQLENBQVUsNkJBQVYsRUFBeUMsTUFBTUMsSUFBTixJQUFjO0lBQ3JELElBQUlBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxRQUFmLE9BQThCQyxTQUFTLENBQUNDLEdBQVYsQ0FBY0YsUUFBZCxFQUFsQyxFQUE0RDtNQUMxRCxJQUFJO1FBQUVHO01BQUYsSUFBNEIsTUFBTSx3T0FBdEM7TUFHQUEscUJBQXFCLENBQUNMLElBQUksQ0FBQ00sUUFBTixDQUFyQjtJQUNEO0VBQ0YsQ0FQRDtBQVFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvdXNlci1zb2NrZXQvY29taW5nQ2FsbFNvY2tldC5kZXYuanM/OGMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29taW5nQ2FsbFNvY2tldChzb2NrZXQpIHtcclxuICBzb2NrZXQub24oXCJjYWxsOmNyZWF0ZWQtY2hhdC1jYWxsLXJvb21cIiwgYXN5bmMgZGF0YSA9PiB7XHJcbiAgICBpZiAoZGF0YS5zdGFydGVkQnkudG9TdHJpbmcoKSAhPT0gbG9naW5Vc2VyLl9pZC50b1N0cmluZygpKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZUNvbWluZ0NhbGxNb2RhbCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vLi4vLi4vY29tbW9uL2NvbWluZ0NhbGxNb2RhbC5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGNyZWF0ZUNvbWluZ0NhbGxNb2RhbChkYXRhLmNhbGxSb29tKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbWluZ0NhbGxTb2NrZXQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJzdGFydGVkQnkiLCJ0b1N0cmluZyIsImxvZ2luVXNlciIsIl9pZCIsImNyZWF0ZUNvbWluZ0NhbGxNb2RhbCIsImNhbGxSb29tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/user-socket/comingCallSocket.dev.js\n");

/***/ })

}]);