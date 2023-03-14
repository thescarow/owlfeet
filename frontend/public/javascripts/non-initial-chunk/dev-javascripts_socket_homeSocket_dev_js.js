"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_homeSocket_dev_js"],{

/***/ "./dev-javascripts/socket/homeSocket.dev.js":
/*!**************************************************!*\
  !*** ./dev-javascripts/socket/homeSocket.dev.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeSocket\": () => (/* binding */ createHomeSocket)\n/* harmony export */ });\nconst userNotificationContainer = document.getElementById(\"userNotificationContainer\");\nfunction createHomeSocket(socket) {\n  console.log(\"inside homeSocket\");\n  socket.on(\"new-user-notification\", async userNotification => {\n    let {\n      createUserNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../index/js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\"));\n    console.log(userNotification);\n    createUserNotification(userNotificationContainer, userNotification);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2hvbWVTb2NrZXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSx5QkFBeUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQ2hDLDJCQURnQyxDQUFsQztBQUdPLFNBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztFQUN2Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7RUFDQUYsTUFBTSxDQUFDRyxFQUFQLENBQVUsdUJBQVYsRUFBbUMsTUFBTUMsZ0JBQU4sSUFBMEI7SUFDM0QsSUFBSTtNQUFFQztJQUFGLElBQTZCLE1BQU0sZ1FBQXZDO0lBR0FKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxnQkFBWjtJQUNBQyxzQkFBc0IsQ0FBQ1QseUJBQUQsRUFBNEJRLGdCQUE1QixDQUF0QjtFQUNELENBTkQ7QUFPRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL3NvY2tldC9ob21lU29ja2V0LmRldi5qcz82ZjgxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXJOb3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInVzZXJOb3RpZmljYXRpb25Db250YWluZXJcIlxyXG4pXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lU29ja2V0KHNvY2tldCkge1xyXG4gIGNvbnNvbGUubG9nKFwiaW5zaWRlIGhvbWVTb2NrZXRcIilcclxuICBzb2NrZXQub24oXCJuZXctdXNlci1ub3RpZmljYXRpb25cIiwgYXN5bmMgdXNlck5vdGlmaWNhdGlvbiA9PiB7XHJcbiAgICBsZXQgeyBjcmVhdGVVc2VyTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi4vaW5kZXgvanMvY3JlYXRlVXNlck5vdGlmaWNhdGlvbi5kZXYuanNcIlxyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2codXNlck5vdGlmaWNhdGlvbilcclxuICAgIGNyZWF0ZVVzZXJOb3RpZmljYXRpb24odXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lciwgdXNlck5vdGlmaWNhdGlvbilcclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUhvbWVTb2NrZXQiLCJzb2NrZXQiLCJjb25zb2xlIiwibG9nIiwib24iLCJ1c2VyTm90aWZpY2F0aW9uIiwiY3JlYXRlVXNlck5vdGlmaWNhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/homeSocket.dev.js\n");

/***/ })

}]);