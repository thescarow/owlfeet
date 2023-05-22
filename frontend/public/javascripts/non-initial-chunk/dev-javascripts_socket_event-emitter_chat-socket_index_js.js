"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-emitter_chat-socket_index_js"],{

/***/ "./dev-javascripts/socket/event-emitter/chat-socket/index.js":
/*!*******************************************************************!*\
  !*** ./dev-javascripts/socket/event-emitter/chat-socket/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendChatMessageStartTypingSocket\": () => (/* binding */ sendChatMessageStartTypingSocket),\n/* harmony export */   \"sendChatMessageStopTypingSocket\": () => (/* binding */ sendChatMessageStopTypingSocket)\n/* harmony export */ });\nfunction sendChatMessageStartTypingSocket(chatId) {\n  let eventData = {\n    chatId: chatId.toString()\n  };\n  socket.emit(\"chat:message-start-typing\", eventData);\n}\nfunction sendChatMessageStopTypingSocket(chatId) {\n  let eventData = {\n    chatId: chatId.toString()\n  };\n  socket.emit(\"chat:message-stop-typing\", eventData);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWVtaXR0ZXIvY2hhdC1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTQSxnQ0FBVCxDQUEwQ0MsTUFBMUMsRUFBa0Q7RUFDdkQsSUFBSUMsU0FBUyxHQUFHO0lBQ2RELE1BQU0sRUFBRUEsTUFBTSxDQUFDRSxRQUFQO0VBRE0sQ0FBaEI7RUFHQUMsTUFBTSxDQUFDQyxJQUFQLENBQVksMkJBQVosRUFBeUNILFNBQXpDO0FBQ0Q7QUFDTSxTQUFTSSwrQkFBVCxDQUF5Q0wsTUFBekMsRUFBaUQ7RUFDdEQsSUFBSUMsU0FBUyxHQUFHO0lBQ2RELE1BQU0sRUFBRUEsTUFBTSxDQUFDRSxRQUFQO0VBRE0sQ0FBaEI7RUFHQUMsTUFBTSxDQUFDQyxJQUFQLENBQVksMEJBQVosRUFBd0NILFNBQXhDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvZXZlbnQtZW1pdHRlci9jaGF0LXNvY2tldC9pbmRleC5qcz81MTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZW5kQ2hhdE1lc3NhZ2VTdGFydFR5cGluZ1NvY2tldChjaGF0SWQpIHtcclxuICBsZXQgZXZlbnREYXRhID0ge1xyXG4gICAgY2hhdElkOiBjaGF0SWQudG9TdHJpbmcoKVxyXG4gIH1cclxuICBzb2NrZXQuZW1pdChcImNoYXQ6bWVzc2FnZS1zdGFydC10eXBpbmdcIiwgZXZlbnREYXRhKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kQ2hhdE1lc3NhZ2VTdG9wVHlwaW5nU29ja2V0KGNoYXRJZCkge1xyXG4gIGxldCBldmVudERhdGEgPSB7XHJcbiAgICBjaGF0SWQ6IGNoYXRJZC50b1N0cmluZygpXHJcbiAgfVxyXG4gIHNvY2tldC5lbWl0KFwiY2hhdDptZXNzYWdlLXN0b3AtdHlwaW5nXCIsIGV2ZW50RGF0YSlcclxufVxyXG4iXSwibmFtZXMiOlsic2VuZENoYXRNZXNzYWdlU3RhcnRUeXBpbmdTb2NrZXQiLCJjaGF0SWQiLCJldmVudERhdGEiLCJ0b1N0cmluZyIsInNvY2tldCIsImVtaXQiLCJzZW5kQ2hhdE1lc3NhZ2VTdG9wVHlwaW5nU29ja2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-emitter/chat-socket/index.js\n");

/***/ })

}]);