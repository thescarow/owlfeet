"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_event-handler_profile-socket_updateForAllUserSocket_dev_js"],{

/***/ "./dev-javascripts/socket/event-handler/profile-socket/updateForAllUserSocket.dev.js":
/*!*******************************************************************************************!*\
  !*** ./dev-javascripts/socket/event-handler/profile-socket/updateForAllUserSocket.dev.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUpdateForAllUserSocket\": () => (/* binding */ createUpdateForAllUserSocket)\n/* harmony export */ });\nasync function createUpdateForAllUserSocket(socket) {\n  socket.on(\"update-follower-for-all\", (userId, data) => {\n    if (profileUser._id == userId) {\n      let profileUserFollowerCount = document.getElementById(\"profileUserFollowerCount\");\n\n      if (profileUserFollowerCount) {\n        profileUserFollowerCount.textContent = (parseInt(profileUserFollowerCount.textContent) + data).toString();\n      }\n    }\n  });\n  socket.on(\"update-following-for-all\", (userId, data) => {\n    if (profileUser._id == userId) {\n      let profileUserFollowingCount = document.getElementById(\"profileUserFollowingCount\");\n\n      if (profileUserFollowingCount) {\n        profileUserFollowingCount.textContent = (parseInt(profileUserFollowingCount.textContent) + data).toString();\n      }\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2V2ZW50LWhhbmRsZXIvcHJvZmlsZS1zb2NrZXQvdXBkYXRlRm9yQWxsVXNlclNvY2tldC5kZXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLDRCQUFmLENBQTRDQyxNQUE1QyxFQUFvRDtFQUN6REEsTUFBTSxDQUFDQyxFQUFQLENBQVUseUJBQVYsRUFBcUMsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFULEtBQWtCO0lBQ3JELElBQUlDLFdBQVcsQ0FBQ0MsR0FBWixJQUFtQkgsTUFBdkIsRUFBK0I7TUFDN0IsSUFBSUksd0JBQXdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUM3QiwwQkFENkIsQ0FBL0I7O01BR0EsSUFBSUYsd0JBQUosRUFBOEI7UUFDNUJBLHdCQUF3QixDQUFDRyxXQUF6QixHQUF1QyxDQUNyQ0MsUUFBUSxDQUFDSix3QkFBd0IsQ0FBQ0csV0FBMUIsQ0FBUixHQUFpRE4sSUFEWixFQUVyQ1EsUUFGcUMsRUFBdkM7TUFHRDtJQUNGO0VBQ0YsQ0FYRDtFQVlBWCxNQUFNLENBQUNDLEVBQVAsQ0FBVSwwQkFBVixFQUFzQyxDQUFDQyxNQUFELEVBQVNDLElBQVQsS0FBa0I7SUFDdEQsSUFBSUMsV0FBVyxDQUFDQyxHQUFaLElBQW1CSCxNQUF2QixFQUErQjtNQUM3QixJQUFJVSx5QkFBeUIsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQzlCLDJCQUQ4QixDQUFoQzs7TUFHQSxJQUFJSSx5QkFBSixFQUErQjtRQUM3QkEseUJBQXlCLENBQUNILFdBQTFCLEdBQXdDLENBQ3RDQyxRQUFRLENBQUNFLHlCQUF5QixDQUFDSCxXQUEzQixDQUFSLEdBQWtETixJQURaLEVBRXRDUSxRQUZzQyxFQUF4QztNQUdEO0lBQ0Y7RUFDRixDQVhEO0FBWUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvZXZlbnQtaGFuZGxlci9wcm9maWxlLXNvY2tldC91cGRhdGVGb3JBbGxVc2VyU29ja2V0LmRldi5qcz83MmZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVcGRhdGVGb3JBbGxVc2VyU29ja2V0KHNvY2tldCkge1xyXG4gIHNvY2tldC5vbihcInVwZGF0ZS1mb2xsb3dlci1mb3ItYWxsXCIsICh1c2VySWQsIGRhdGEpID0+IHtcclxuICAgIGlmIChwcm9maWxlVXNlci5faWQgPT0gdXNlcklkKSB7XHJcbiAgICAgIGxldCBwcm9maWxlVXNlckZvbGxvd2VyQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcInByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudFwiXHJcbiAgICAgIClcclxuICAgICAgaWYgKHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudCkge1xyXG4gICAgICAgIHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudC50ZXh0Q29udGVudCA9IChcclxuICAgICAgICAgIHBhcnNlSW50KHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudC50ZXh0Q29udGVudCkgKyBkYXRhXHJcbiAgICAgICAgKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIHNvY2tldC5vbihcInVwZGF0ZS1mb2xsb3dpbmctZm9yLWFsbFwiLCAodXNlcklkLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAocHJvZmlsZVVzZXIuX2lkID09IHVzZXJJZCkge1xyXG4gICAgICBsZXQgcHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwicHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudFwiXHJcbiAgICAgIClcclxuICAgICAgaWYgKHByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnQpIHtcclxuICAgICAgICBwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50LnRleHRDb250ZW50ID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQocHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudC50ZXh0Q29udGVudCkgKyBkYXRhXHJcbiAgICAgICAgKS50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVVcGRhdGVGb3JBbGxVc2VyU29ja2V0Iiwic29ja2V0Iiwib24iLCJ1c2VySWQiLCJkYXRhIiwicHJvZmlsZVVzZXIiLCJfaWQiLCJwcm9maWxlVXNlckZvbGxvd2VyQ291bnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwicHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/event-handler/profile-socket/updateForAllUserSocket.dev.js\n");

/***/ })

}]);