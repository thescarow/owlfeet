"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_profile-socket_updateForAllSocket_dev_js"],{

/***/ "./dev-javascripts/socket/profile-socket/updateForAllSocket.dev.js":
/*!*************************************************************************!*\
  !*** ./dev-javascripts/socket/profile-socket/updateForAllSocket.dev.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUpdateForAllSocket\": () => (/* binding */ createUpdateForAllSocket)\n/* harmony export */ });\nasync function createUpdateForAllSocket(socket) {\n  socket.on(\"update-follower-for-all\", (userId, data) => {\n    if (profileUser._id == userId) {\n      let profileUserFollowerCount = document.getElementById(\"profileUserFollowerCount\");\n\n      if (profileUserFollowerCount) {\n        profileUserFollowerCount.textContent = (parseInt(profileUserFollowerCount.textContent) + data).toString();\n      }\n    }\n  });\n  socket.on(\"update-following-for-all\", (userId, data) => {\n    if (profileUser._id == userId) {\n      let profileUserFollowingCount = document.getElementById(\"profileUserFollowingCount\");\n\n      if (profileUserFollowingCount) {\n        profileUserFollowingCount.textContent = (parseInt(profileUserFollowingCount.textContent) + data).toString();\n      }\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L3Byb2ZpbGUtc29ja2V0L3VwZGF0ZUZvckFsbFNvY2tldC5kZXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLHdCQUFmLENBQXdDQyxNQUF4QyxFQUFnRDtFQUNyREEsTUFBTSxDQUFDQyxFQUFQLENBQVUseUJBQVYsRUFBcUMsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFULEtBQWtCO0lBQ3JELElBQUlDLFdBQVcsQ0FBQ0MsR0FBWixJQUFtQkgsTUFBdkIsRUFBK0I7TUFDN0IsSUFBSUksd0JBQXdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUM3QiwwQkFENkIsQ0FBL0I7O01BR0EsSUFBSUYsd0JBQUosRUFBOEI7UUFDNUJBLHdCQUF3QixDQUFDRyxXQUF6QixHQUF1QyxDQUNyQ0MsUUFBUSxDQUFDSix3QkFBd0IsQ0FBQ0csV0FBMUIsQ0FBUixHQUFpRE4sSUFEWixFQUVyQ1EsUUFGcUMsRUFBdkM7TUFHRDtJQUNGO0VBQ0YsQ0FYRDtFQVlBWCxNQUFNLENBQUNDLEVBQVAsQ0FBVSwwQkFBVixFQUFzQyxDQUFDQyxNQUFELEVBQVNDLElBQVQsS0FBa0I7SUFDdEQsSUFBSUMsV0FBVyxDQUFDQyxHQUFaLElBQW1CSCxNQUF2QixFQUErQjtNQUM3QixJQUFJVSx5QkFBeUIsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQzlCLDJCQUQ4QixDQUFoQzs7TUFHQSxJQUFJSSx5QkFBSixFQUErQjtRQUM3QkEseUJBQXlCLENBQUNILFdBQTFCLEdBQXdDLENBQ3RDQyxRQUFRLENBQUNFLHlCQUF5QixDQUFDSCxXQUEzQixDQUFSLEdBQWtETixJQURaLEVBRXRDUSxRQUZzQyxFQUF4QztNQUdEO0lBQ0Y7RUFDRixDQVhEO0FBWUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvcHJvZmlsZS1zb2NrZXQvdXBkYXRlRm9yQWxsU29ja2V0LmRldi5qcz8yYTlhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVcGRhdGVGb3JBbGxTb2NrZXQoc29ja2V0KSB7XHJcbiAgc29ja2V0Lm9uKFwidXBkYXRlLWZvbGxvd2VyLWZvci1hbGxcIiwgKHVzZXJJZCwgZGF0YSkgPT4ge1xyXG4gICAgaWYgKHByb2ZpbGVVc2VyLl9pZCA9PSB1c2VySWQpIHtcclxuICAgICAgbGV0IHByb2ZpbGVVc2VyRm9sbG93ZXJDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwicHJvZmlsZVVzZXJGb2xsb3dlckNvdW50XCJcclxuICAgICAgKVxyXG4gICAgICBpZiAocHJvZmlsZVVzZXJGb2xsb3dlckNvdW50KSB7XHJcbiAgICAgICAgcHJvZmlsZVVzZXJGb2xsb3dlckNvdW50LnRleHRDb250ZW50ID0gKFxyXG4gICAgICAgICAgcGFyc2VJbnQocHJvZmlsZVVzZXJGb2xsb3dlckNvdW50LnRleHRDb250ZW50KSArIGRhdGFcclxuICAgICAgICApLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgc29ja2V0Lm9uKFwidXBkYXRlLWZvbGxvd2luZy1mb3ItYWxsXCIsICh1c2VySWQsIGRhdGEpID0+IHtcclxuICAgIGlmIChwcm9maWxlVXNlci5faWQgPT0gdXNlcklkKSB7XHJcbiAgICAgIGxldCBwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50XCJcclxuICAgICAgKVxyXG4gICAgICBpZiAocHJvZmlsZVVzZXJGb2xsb3dpbmdDb3VudCkge1xyXG4gICAgICAgIHByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnQudGV4dENvbnRlbnQgPSAoXHJcbiAgICAgICAgICBwYXJzZUludChwcm9maWxlVXNlckZvbGxvd2luZ0NvdW50LnRleHRDb250ZW50KSArIGRhdGFcclxuICAgICAgICApLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZVVwZGF0ZUZvckFsbFNvY2tldCIsInNvY2tldCIsIm9uIiwidXNlcklkIiwiZGF0YSIsInByb2ZpbGVVc2VyIiwiX2lkIiwicHJvZmlsZVVzZXJGb2xsb3dlckNvdW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInByb2ZpbGVVc2VyRm9sbG93aW5nQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/profile-socket/updateForAllSocket.dev.js\n");

/***/ })

}]);