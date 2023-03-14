"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_user-socket_index_js"],{

/***/ "./dev-javascripts/socket/user-socket/index.js":
/*!*****************************************************!*\
  !*** ./dev-javascripts/socket/user-socket/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUserSocket\": () => (/* binding */ createUserSocket)\n/* harmony export */ });\nasync function createUserSocket(socket) {\n  console.log(\"insideUserSocket\");\n\n  if (pageName && pageName === \"chat\") {\n    let {\n      createUserActiveStatusSocket\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_user-socket_userActiveStatusSocket_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./userActiveStatusSocket */ \"./dev-javascripts/socket/user-socket/userActiveStatusSocket.js\"));\n    createUserActiveStatusSocket(socket);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L3VzZXItc29ja2V0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSxnQkFBZixDQUFnQ0MsTUFBaEMsRUFBd0M7RUFDN0NDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaOztFQUVBLElBQUlDLFFBQVEsSUFBSUEsUUFBUSxLQUFLLE1BQTdCLEVBQXFDO0lBQ25DLElBQUk7TUFBRUM7SUFBRixJQUFtQyxNQUFNLDJQQUE3QztJQUdBQSw0QkFBNEIsQ0FBQ0osTUFBRCxDQUE1QjtFQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvdXNlci1zb2NrZXQvaW5kZXguanM/YWYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNvY2tldChzb2NrZXQpIHtcclxuICBjb25zb2xlLmxvZyhcImluc2lkZVVzZXJTb2NrZXRcIilcclxuXHJcbiAgaWYgKHBhZ2VOYW1lICYmIHBhZ2VOYW1lID09PSBcImNoYXRcIikge1xyXG4gICAgbGV0IHsgY3JlYXRlVXNlckFjdGl2ZVN0YXR1c1NvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICBcIi4vdXNlckFjdGl2ZVN0YXR1c1NvY2tldFwiXHJcbiAgICApXHJcbiAgICBjcmVhdGVVc2VyQWN0aXZlU3RhdHVzU29ja2V0KHNvY2tldClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXJTb2NrZXQiLCJzb2NrZXQiLCJjb25zb2xlIiwibG9nIiwicGFnZU5hbWUiLCJjcmVhdGVVc2VyQWN0aXZlU3RhdHVzU29ja2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/user-socket/index.js\n");

/***/ })

}]);