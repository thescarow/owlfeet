"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-emitter_message-socket_index_js"],{

/***/ "./dev-javascripts/socket/event-emitter/message-socket/index.js":
/*!**********************************************************************!*\
  !*** ./dev-javascripts/socket/event-emitter/message-socket/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendCreateUserMessageSocket\": () => (/* binding */ sendCreateUserMessageSocket)\n/* harmony export */ });\nfunction sendCreateUserMessageSocket(userMessage) {\n  let eventData = {\n    userMessage: userMessage\n  };\n  socket.emit(\"message:create-user-message\", eventData);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWVtaXR0ZXIvbWVzc2FnZS1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLDJCQUFULENBQXFDQyxXQUFyQyxFQUFrRDtFQUN2RCxJQUFJQyxTQUFTLEdBQUc7SUFDZEQsV0FBVyxFQUFFQTtFQURDLENBQWhCO0VBR0FFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTJDRixTQUEzQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWVtaXR0ZXIvbWVzc2FnZS1zb2NrZXQvaW5kZXguanM/YWQ2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2VuZENyZWF0ZVVzZXJNZXNzYWdlU29ja2V0KHVzZXJNZXNzYWdlKSB7XHJcbiAgbGV0IGV2ZW50RGF0YSA9IHtcclxuICAgIHVzZXJNZXNzYWdlOiB1c2VyTWVzc2FnZVxyXG4gIH1cclxuICBzb2NrZXQuZW1pdChcIm1lc3NhZ2U6Y3JlYXRlLXVzZXItbWVzc2FnZVwiLCBldmVudERhdGEpXHJcbn1cclxuIl0sIm5hbWVzIjpbInNlbmRDcmVhdGVVc2VyTWVzc2FnZVNvY2tldCIsInVzZXJNZXNzYWdlIiwiZXZlbnREYXRhIiwic29ja2V0IiwiZW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-emitter/message-socket/index.js\n");

/***/ })

}]);