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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeSocket\": () => (/* binding */ createHomeSocket)\n/* harmony export */ });\nasync function createHomeSocket(socket) {\n  // console.log(\"insideHomeSocket\")\n  const userNotificationContainer = document.getElementById(\"userNotificationContainer\");\n  socket.on(\"new-user-notification\", async userNotification => {\n    let {\n      createUserNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../../index/js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\")); // console.log(userNotification)\n\n    createUserNotification(userNotificationContainer, userNotification);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvaG9tZS1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLGdCQUFmLENBQWdDQyxNQUFoQyxFQUF3QztFQUM3QztFQUVBLE1BQU1DLHlCQUF5QixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FDaEMsMkJBRGdDLENBQWxDO0VBSUFILE1BQU0sQ0FBQ0ksRUFBUCxDQUFVLHVCQUFWLEVBQW1DLE1BQU1DLGdCQUFOLElBQTBCO0lBQzNELElBQUk7TUFBRUM7SUFBRixJQUE2QixNQUFNLHNRQUF2QyxDQUQyRCxDQUkzRDs7SUFDQUEsc0JBQXNCLENBQUNMLHlCQUFELEVBQTRCSSxnQkFBNUIsQ0FBdEI7RUFDRCxDQU5EO0FBT0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvZXZlbnQtaGFuZGxlci9ob21lLXNvY2tldC9pbmRleC5qcz85YWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb21lU29ja2V0KHNvY2tldCkge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlSG9tZVNvY2tldFwiKVxyXG5cclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInVzZXJOb3RpZmljYXRpb25Db250YWluZXJcIlxyXG4gIClcclxuXHJcbiAgc29ja2V0Lm9uKFwibmV3LXVzZXItbm90aWZpY2F0aW9uXCIsIGFzeW5jIHVzZXJOb3RpZmljYXRpb24gPT4ge1xyXG4gICAgbGV0IHsgY3JlYXRlVXNlck5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4uLy4uLy4uL2luZGV4L2pzL2NyZWF0ZVVzZXJOb3RpZmljYXRpb24uZGV2LmpzXCJcclxuICAgIClcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJOb3RpZmljYXRpb24pXHJcbiAgICBjcmVhdGVVc2VyTm90aWZpY2F0aW9uKHVzZXJOb3RpZmljYXRpb25Db250YWluZXIsIHVzZXJOb3RpZmljYXRpb24pXHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlSG9tZVNvY2tldCIsInNvY2tldCIsInVzZXJOb3RpZmljYXRpb25Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib24iLCJ1c2VyTm90aWZpY2F0aW9uIiwiY3JlYXRlVXNlck5vdGlmaWNhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/home-socket/index.js\n");

/***/ })

}]);