"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_homeSocket_dev_js"],{

/***/ "./dev-javascripts/socket/event-handler/homeSocket.dev.js":
/*!****************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/homeSocket.dev.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeSocket\": () => (/* binding */ createHomeSocket)\n/* harmony export */ });\nconst userNotificationContainer = document.getElementById(\"userNotificationContainer\");\nfunction createHomeSocket(socket) {\n  console.log(\"inside homeSocket\");\n  socket.on(\"new-user-notification\", async userNotification => {\n    let {\n      createUserNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../index/js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\"));\n    console.log(userNotification);\n    createUserNotification(userNotificationContainer, userNotification);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvaG9tZVNvY2tldC5kZXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLHlCQUF5QixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FDaEMsMkJBRGdDLENBQWxDO0FBR08sU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0VBQ3ZDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtFQUNBRixNQUFNLENBQUNHLEVBQVAsQ0FBVSx1QkFBVixFQUFtQyxNQUFNQyxnQkFBTixJQUEwQjtJQUMzRCxJQUFJO01BQUVDO0lBQUYsSUFBNkIsTUFBTSxtUUFBdkM7SUFHQUosT0FBTyxDQUFDQyxHQUFSLENBQVlFLGdCQUFaO0lBQ0FDLHNCQUFzQixDQUFDVCx5QkFBRCxFQUE0QlEsZ0JBQTVCLENBQXRCO0VBQ0QsQ0FORDtBQU9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvaG9tZVNvY2tldC5kZXYuanM/NzY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJ1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyXCJcclxuKVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZVNvY2tldChzb2NrZXQpIHtcclxuICBjb25zb2xlLmxvZyhcImluc2lkZSBob21lU29ja2V0XCIpXHJcbiAgc29ja2V0Lm9uKFwibmV3LXVzZXItbm90aWZpY2F0aW9uXCIsIGFzeW5jIHVzZXJOb3RpZmljYXRpb24gPT4ge1xyXG4gICAgbGV0IHsgY3JlYXRlVXNlck5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uL2luZGV4L2pzL2NyZWF0ZVVzZXJOb3RpZmljYXRpb24uZGV2LmpzXCJcclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHVzZXJOb3RpZmljYXRpb24pXHJcbiAgICBjcmVhdGVVc2VyTm90aWZpY2F0aW9uKHVzZXJOb3RpZmljYXRpb25Db250YWluZXIsIHVzZXJOb3RpZmljYXRpb24pXHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsidXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVIb21lU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsIm9uIiwidXNlck5vdGlmaWNhdGlvbiIsImNyZWF0ZVVzZXJOb3RpZmljYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/homeSocket.dev.js\n");

/***/ })

}]);