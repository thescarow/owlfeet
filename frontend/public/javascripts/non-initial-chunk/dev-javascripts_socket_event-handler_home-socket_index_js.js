"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_home-socket_index_js"],{

/***/ "./dev-javascripts/socket/event-handler/home-socket/index.js":
/*!*******************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/home-socket/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeSocket\": () => (/* binding */ createHomeSocket)\n/* harmony export */ });\nasync function createHomeSocket(socket) {\n  console.log(\"insideHomeSocket\");\n  const userNotificationContainer = document.getElementById(\"userNotificationContainer\");\n  socket.on(\"new-user-notification\", async userNotification => {\n    let {\n      createUserNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../index/js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\")); // console.log(userNotification)\n\n    createUserNotification(userNotificationContainer, userNotification);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvaG9tZS1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLGdCQUFmLENBQWdDQyxNQUFoQyxFQUF3QztFQUM3Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7RUFFQSxNQUFNQyx5QkFBeUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQ2hDLDJCQURnQyxDQUFsQztFQUlBTCxNQUFNLENBQUNNLEVBQVAsQ0FBVSx1QkFBVixFQUFtQyxNQUFNQyxnQkFBTixJQUEwQjtJQUMzRCxJQUFJO01BQUVDO0lBQUYsSUFBNkIsTUFBTSxzUUFBdkMsQ0FEMkQsQ0FJM0Q7O0lBQ0FBLHNCQUFzQixDQUFDTCx5QkFBRCxFQUE0QkksZ0JBQTVCLENBQXRCO0VBQ0QsQ0FORDtBQU9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvaG9tZS1zb2NrZXQvaW5kZXguanM/OWFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSG9tZVNvY2tldChzb2NrZXQpIHtcclxuICBjb25zb2xlLmxvZyhcImluc2lkZUhvbWVTb2NrZXRcIilcclxuXHJcbiAgY29uc3QgdXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJ1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyXCJcclxuICApXHJcblxyXG4gIHNvY2tldC5vbihcIm5ldy11c2VyLW5vdGlmaWNhdGlvblwiLCBhc3luYyB1c2VyTm90aWZpY2F0aW9uID0+IHtcclxuICAgIGxldCB7IGNyZWF0ZVVzZXJOb3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuLi8uLi8uLi9pbmRleC9qcy9jcmVhdGVVc2VyTm90aWZpY2F0aW9uLmRldi5qc1wiXHJcbiAgICApXHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyTm90aWZpY2F0aW9uKVxyXG4gICAgY3JlYXRlVXNlck5vdGlmaWNhdGlvbih1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyLCB1c2VyTm90aWZpY2F0aW9uKVxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUhvbWVTb2NrZXQiLCJzb2NrZXQiLCJjb25zb2xlIiwibG9nIiwidXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbiIsInVzZXJOb3RpZmljYXRpb24iLCJjcmVhdGVVc2VyTm90aWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/home-socket/index.js\n");

/***/ })

}]);