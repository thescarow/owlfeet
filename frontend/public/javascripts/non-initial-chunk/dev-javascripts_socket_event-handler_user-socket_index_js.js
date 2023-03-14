"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_user-socket_index_js"],{

/***/ "./dev-javascripts/socket/event-handler/user-socket/index.js":
/*!*******************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/user-socket/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUserSocket\": () => (/* binding */ createUserSocket)\n/* harmony export */ });\nasync function createUserSocket(socket) {\n  console.log(\"insideUserSocket\");\n\n  if (pageName && pageName === \"chat\") {\n    let {\n      createUserActiveStatusSocket\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_user-socket_userActiveStatusSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./userActiveStatusSocket.dev */ \"./dev-javascripts/socket/event-handler/user-socket/userActiveStatusSocket.dev.js\"));\n    createUserActiveStatusSocket(socket);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvdXNlci1zb2NrZXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLGdCQUFmLENBQWdDQyxNQUFoQyxFQUF3QztFQUM3Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7O0VBRUEsSUFBSUMsUUFBUSxJQUFJQSxRQUFRLEtBQUssTUFBN0IsRUFBcUM7SUFDbkMsSUFBSTtNQUFFQztJQUFGLElBQW1DLE1BQU0sbVNBQTdDO0lBR0FBLDRCQUE0QixDQUFDSixNQUFELENBQTVCO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL3NvY2tldC9ldmVudC1oYW5kbGVyL3VzZXItc29ja2V0L2luZGV4LmpzPzkxZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTb2NrZXQoc29ja2V0KSB7XHJcbiAgY29uc29sZS5sb2coXCJpbnNpZGVVc2VyU29ja2V0XCIpXHJcblxyXG4gIGlmIChwYWdlTmFtZSAmJiBwYWdlTmFtZSA9PT0gXCJjaGF0XCIpIHtcclxuICAgIGxldCB7IGNyZWF0ZVVzZXJBY3RpdmVTdGF0dXNTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgXCIuL3VzZXJBY3RpdmVTdGF0dXNTb2NrZXQuZGV2XCJcclxuICAgIClcclxuICAgIGNyZWF0ZVVzZXJBY3RpdmVTdGF0dXNTb2NrZXQoc29ja2V0KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlVXNlclNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlTmFtZSIsImNyZWF0ZVVzZXJBY3RpdmVTdGF0dXNTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/user-socket/index.js\n");

/***/ })

}]);