"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_chat_js_copyMessage_dev_js"],{

/***/ "./dev-javascripts/chat/js/copyMessage.dev.js":
/*!****************************************************!*\
  !*** ./dev-javascripts/chat/js/copyMessage.dev.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copyUserMessage\": () => (/* binding */ copyUserMessage)\n/* harmony export */ });\n/* harmony import */ var _common_mainNotification_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\");\n\nfunction copyUserMessage(messageId) {\n  let userMessageBox = document.querySelector(`.active-chat-user-message-box[data-message-id=\"${messageId}\"]`);\n  let copiedText;\n\n  if (userMessageBox.classList.contains(\"active-chat-user-message-box--text\")) {\n    copiedText = userMessageBox.getElementsByClassName(\"active-chat-user-message-box__content--text\")[0].textContent;\n  }\n\n  if (userMessageBox.classList.contains(\"active-chat-user-message-box--image\")) {\n    copiedText = userMessageBox.getElementsByClassName(\"active-chat-user-message-box__content--image\")[0].src;\n  }\n\n  if (userMessageBox.classList.contains(\"active-chat-user-message-box--youtube\")) {\n    copiedText = userMessageBox.querySelector(\"iframe\").src;\n  }\n\n  if (userMessageBox.classList.contains(\"active-chat-user-message-box--audio\")) {\n    copiedText = userMessageBox.querySelector(\".active-chat-user-message-box__content--audio source\").src;\n  }\n\n  if (userMessageBox.classList.contains(\"active-chat-user-message-box--video\")) {\n    copiedText = userMessageBox.querySelector(\".active-chat-user-message-box__content--video source\").src;\n  }\n\n  console.log(copiedText);\n  navigator.clipboard.writeText(copiedText).then(() => {\n    (0,_common_mainNotification_dev__WEBPACK_IMPORTED_MODULE_0__.createMainNotification)(\"Copied !!!\", \"success\");\n  }, e => {\n    (0,_common_mainNotification_dev__WEBPACK_IMPORTED_MODULE_0__.createMainNotification)(e.message, \"error\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9jb3B5TWVzc2FnZS5kZXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVPLFNBQVNDLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0VBQ3pDLElBQUlDLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQ2xCLGtEQUFpREgsU0FBVSxJQUR6QyxDQUFyQjtFQUlBLElBQUlJLFVBQUo7O0VBRUEsSUFBSUgsY0FBYyxDQUFDSSxTQUFmLENBQXlCQyxRQUF6QixDQUFrQyxvQ0FBbEMsQ0FBSixFQUE2RTtJQUMzRUYsVUFBVSxHQUFHSCxjQUFjLENBQUNNLHNCQUFmLENBQ1gsNkNBRFcsRUFFWCxDQUZXLEVBRVJDLFdBRkw7RUFHRDs7RUFDRCxJQUNFUCxjQUFjLENBQUNJLFNBQWYsQ0FBeUJDLFFBQXpCLENBQWtDLHFDQUFsQyxDQURGLEVBRUU7SUFDQUYsVUFBVSxHQUFHSCxjQUFjLENBQUNNLHNCQUFmLENBQ1gsOENBRFcsRUFFWCxDQUZXLEVBRVJFLEdBRkw7RUFHRDs7RUFDRCxJQUNFUixjQUFjLENBQUNJLFNBQWYsQ0FBeUJDLFFBQXpCLENBQWtDLHVDQUFsQyxDQURGLEVBRUU7SUFDQUYsVUFBVSxHQUFHSCxjQUFjLENBQUNFLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUNNLEdBQXBEO0VBQ0Q7O0VBQ0QsSUFDRVIsY0FBYyxDQUFDSSxTQUFmLENBQXlCQyxRQUF6QixDQUFrQyxxQ0FBbEMsQ0FERixFQUVFO0lBQ0FGLFVBQVUsR0FBR0gsY0FBYyxDQUFDRSxhQUFmLENBQ1gsc0RBRFcsRUFFWE0sR0FGRjtFQUdEOztFQUNELElBQ0VSLGNBQWMsQ0FBQ0ksU0FBZixDQUF5QkMsUUFBekIsQ0FBa0MscUNBQWxDLENBREYsRUFFRTtJQUNBRixVQUFVLEdBQUdILGNBQWMsQ0FBQ0UsYUFBZixDQUNYLHNEQURXLEVBRVhNLEdBRkY7RUFHRDs7RUFDREMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLFVBQVo7RUFDQVEsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QlYsVUFBOUIsRUFBMENXLElBQTFDLENBQ0UsTUFBTTtJQUNKakIsb0ZBQXNCLENBQUMsWUFBRCxFQUFlLFNBQWYsQ0FBdEI7RUFDRCxDQUhILEVBSUVrQixDQUFDLElBQUk7SUFDSGxCLG9GQUFzQixDQUFDa0IsQ0FBQyxDQUFDQyxPQUFILEVBQVksT0FBWixDQUF0QjtFQUNELENBTkg7QUFRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2NoYXQvanMvY29weU1lc3NhZ2UuZGV2LmpzPzIzMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlVc2VyTWVzc2FnZShtZXNzYWdlSWQpIHtcclxuICBsZXQgdXNlck1lc3NhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgYC5hY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94W2RhdGEtbWVzc2FnZS1pZD1cIiR7bWVzc2FnZUlkfVwiXWBcclxuICApXHJcblxyXG4gIGxldCBjb3BpZWRUZXh0XHJcblxyXG4gIGlmICh1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS10ZXh0XCIpKSB7XHJcbiAgICBjb3BpZWRUZXh0ID0gdXNlck1lc3NhZ2VCb3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94X19jb250ZW50LS10ZXh0XCJcclxuICAgIClbMF0udGV4dENvbnRlbnRcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgdXNlck1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWNoYXQtdXNlci1tZXNzYWdlLWJveC0taW1hZ2VcIilcclxuICApIHtcclxuICAgIGNvcGllZFRleHQgPSB1c2VyTWVzc2FnZUJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hfX2NvbnRlbnQtLWltYWdlXCJcclxuICAgIClbMF0uc3JjXHJcbiAgfVxyXG4gIGlmIChcclxuICAgIHVzZXJNZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3gtLXlvdXR1YmVcIilcclxuICApIHtcclxuICAgIGNvcGllZFRleHQgPSB1c2VyTWVzc2FnZUJveC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLnNyY1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS1hdWRpb1wiKVxyXG4gICkge1xyXG4gICAgY29waWVkVGV4dCA9IHVzZXJNZXNzYWdlQm94LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hfX2NvbnRlbnQtLWF1ZGlvIHNvdXJjZVwiXHJcbiAgICApLnNyY1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICB1c2VyTWVzc2FnZUJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtY2hhdC11c2VyLW1lc3NhZ2UtYm94LS12aWRlb1wiKVxyXG4gICkge1xyXG4gICAgY29waWVkVGV4dCA9IHVzZXJNZXNzYWdlQm94LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmFjdGl2ZS1jaGF0LXVzZXItbWVzc2FnZS1ib3hfX2NvbnRlbnQtLXZpZGVvIHNvdXJjZVwiXHJcbiAgICApLnNyY1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhjb3BpZWRUZXh0KVxyXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcGllZFRleHQpLnRoZW4oXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXCJDb3BpZWQgISEhXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgfSxcclxuICAgIGUgPT4ge1xyXG4gICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKGUubWVzc2FnZSwgXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsImNvcHlVc2VyTWVzc2FnZSIsIm1lc3NhZ2VJZCIsInVzZXJNZXNzYWdlQm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29waWVkVGV4dCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRleHRDb250ZW50Iiwic3JjIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/copyMessage.dev.js\n");

/***/ }),

/***/ "./dev-javascripts/common/mainNotification.dev.js":
/*!********************************************************!*\
  !*** ./dev-javascripts/common/mainNotification.dev.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainNotification\": () => (/* binding */ createMainNotification)\n/* harmony export */ });\n__webpack_require__.e(/*! import() */ \"dev-javascripts_common_css_mainNotification_dev_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./css/mainNotification.dev.css */ \"./dev-javascripts/common/css/mainNotification.dev.css\"));\nfunction createMainNotification(message) {\n  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n\n  if (type != \"error\" && type != \"success\") {\n    type = \"info\";\n  }\n\n  const mainNotification = document.createElement(\"div\");\n  mainNotification.classList.add(\"main-notification\", type);\n  mainNotification.innerHTML = `\n     <div class=\"main-notification-message\"> ${type.charAt(0).toUpperCase() + type.slice(1)}:\n     ${message}    \n     </div>\n    <div class=\"main-notification-timer-and-close\">\n                <svg viewBox=\"0 0 70 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g id=\"timerAndClose\">\n                <path id=\"timerPath\" d=\"M35 10C39.5356 10 43.7185 11.1176 47.5488 13.3529C51.3791 15.5881 54.4119 18.6209 56.6471 22.4512C58.8824 26.2815 60 30.4644 60 35C60 39.5356 58.8824 43.7185 56.6471 47.5488C54.4119 51.3791 51.3791 54.4119 47.5488 56.6471C43.7185 58.8824 39.5356 60 35 60C30.4644 60 26.2815 58.8824 22.4512 56.6471C18.6209 54.4119 15.5881 51.3791 13.3529 47.5488C11.1176 43.7185 10 39.5356 10 35C10 30.4644 11.1176 26.2815 13.3529 22.4512C15.5881 18.6209 18.6209 15.5881 22.4512 13.3529C26.2815 11.1176 30.4644 10 35 10Z\" stroke=\"#5CEB2A\" stroke-width=\"20\"/>\n                <path id=\"closePath\" d=\"M35 10C21.25 10 10 21.25 10 35C10 48.75 21.25 60 35 60C48.75 60 60 48.75 60 35C60 21.25 48.75 10 35 10ZM44.25 40.75C45.25 41.75 45.25 43.25 44.25 44.25C43.25 45.25 41.75 45.25 40.75 44.25L35 38.5L29.25 44.25C28.25 45.25 26.75 45.25 25.75 44.25C24.75 43.25 24.75 41.75 25.75 40.75L31.5 35L25.75 29.25C24.75 28.25 24.75 26.75 25.75 25.75C26.75 24.75 28.25 24.75 29.25 25.75L35 31.5L40.75 25.75C41.75 24.75 43.25 24.75 44.25 25.75C45.25 26.75 45.25 28.25 44.25 29.25L38.5 35L44.25 40.75Z\" fill=\"black\"/>\n                </g>\n                </svg>\n       </div> `;\n  let mainNotificationCloseTimeout; // delete after click on close button\n\n  mainNotification.getElementsByClassName(\"main-notification-timer-and-close\")[0].addEventListener(\"click\", () => {\n    mainNotification.parentNode.removeChild(mainNotification);\n    clearTimeout(mainNotificationCloseTimeout);\n  }); // delete after 10s automatically\n\n  mainNotificationCloseTimeout = setTimeout(() => {\n    mainNotification.parentNode.removeChild(mainNotification);\n  }, 10000);\n  document.body.appendChild(mainNotification);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVPLFNBQVNBLHNCQUFULENBQWdDQyxPQUFoQyxFQUF3RDtFQUFBLElBQWZDLElBQWUsdUVBQVIsTUFBUTs7RUFDN0QsSUFBSUEsSUFBSSxJQUFJLE9BQVIsSUFBbUJBLElBQUksSUFBSSxTQUEvQixFQUEwQztJQUN4Q0EsSUFBSSxHQUFHLE1BQVA7RUFDRDs7RUFDRCxNQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXpCO0VBQ0FGLGdCQUFnQixDQUFDRyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsbUJBQS9CLEVBQW9ETCxJQUFwRDtFQUVBQyxnQkFBZ0IsQ0FBQ0ssU0FBakIsR0FBOEI7QUFDaEMsK0NBQ09OLElBQUksQ0FBQ08sTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixLQUErQlIsSUFBSSxDQUFDUyxLQUFMLENBQVcsQ0FBWCxDQUNoQztBQUNOLE9BQU9WLE9BQVE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFiRTtFQWVBLElBQUlXLDRCQUFKLENBdEI2RCxDQXVCN0Q7O0VBQ0FULGdCQUFnQixDQUNiVSxzQkFESCxDQUMwQixtQ0FEMUIsRUFDK0QsQ0FEL0QsRUFFR0MsZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkIsTUFBTTtJQUMvQlgsZ0JBQWdCLENBQUNZLFVBQWpCLENBQTRCQyxXQUE1QixDQUF3Q2IsZ0JBQXhDO0lBQ0FjLFlBQVksQ0FBQ0wsNEJBQUQsQ0FBWjtFQUNELENBTEgsRUF4QjZELENBK0I3RDs7RUFDQUEsNEJBQTRCLEdBQUdNLFVBQVUsQ0FBQyxNQUFNO0lBQzlDZixnQkFBZ0IsQ0FBQ1ksVUFBakIsQ0FBNEJDLFdBQTVCLENBQXdDYixnQkFBeEM7RUFDRCxDQUZ3QyxFQUV0QyxLQUZzQyxDQUF6QztFQUlBQyxRQUFRLENBQUNlLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmpCLGdCQUExQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2LmpzPzU0MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KFwiLi9jc3MvbWFpbk5vdGlmaWNhdGlvbi5kZXYuY3NzXCIpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluTm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSBcImluZm9cIikge1xuICBpZiAodHlwZSAhPSBcImVycm9yXCIgJiYgdHlwZSAhPSBcInN1Y2Nlc3NcIikge1xuICAgIHR5cGUgPSBcImluZm9cIlxuICB9XG4gIGNvbnN0IG1haW5Ob3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG1haW5Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tbm90aWZpY2F0aW9uXCIsIHR5cGUpXG5cbiAgbWFpbk5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtYWluLW5vdGlmaWNhdGlvbi1tZXNzYWdlXCI+ICR7XG4gICAgICAgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSlcbiAgICAgfTpcbiAgICAgJHttZXNzYWdlfSAgICBcbiAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4tbm90aWZpY2F0aW9uLXRpbWVyLWFuZC1jbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA3MCA3MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwidGltZXJBbmRDbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwidGltZXJQYXRoXCIgZD1cIk0zNSAxMEMzOS41MzU2IDEwIDQzLjcxODUgMTEuMTE3NiA0Ny41NDg4IDEzLjM1MjlDNTEuMzc5MSAxNS41ODgxIDU0LjQxMTkgMTguNjIwOSA1Ni42NDcxIDIyLjQ1MTJDNTguODgyNCAyNi4yODE1IDYwIDMwLjQ2NDQgNjAgMzVDNjAgMzkuNTM1NiA1OC44ODI0IDQzLjcxODUgNTYuNjQ3MSA0Ny41NDg4QzU0LjQxMTkgNTEuMzc5MSA1MS4zNzkxIDU0LjQxMTkgNDcuNTQ4OCA1Ni42NDcxQzQzLjcxODUgNTguODgyNCAzOS41MzU2IDYwIDM1IDYwQzMwLjQ2NDQgNjAgMjYuMjgxNSA1OC44ODI0IDIyLjQ1MTIgNTYuNjQ3MUMxOC42MjA5IDU0LjQxMTkgMTUuNTg4MSA1MS4zNzkxIDEzLjM1MjkgNDcuNTQ4OEMxMS4xMTc2IDQzLjcxODUgMTAgMzkuNTM1NiAxMCAzNUMxMCAzMC40NjQ0IDExLjExNzYgMjYuMjgxNSAxMy4zNTI5IDIyLjQ1MTJDMTUuNTg4MSAxOC42MjA5IDE4LjYyMDkgMTUuNTg4MSAyMi40NTEyIDEzLjM1MjlDMjYuMjgxNSAxMS4xMTc2IDMwLjQ2NDQgMTAgMzUgMTBaXCIgc3Ryb2tlPVwiIzVDRUIyQVwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiY2xvc2VQYXRoXCIgZD1cIk0zNSAxMEMyMS4yNSAxMCAxMCAyMS4yNSAxMCAzNUMxMCA0OC43NSAyMS4yNSA2MCAzNSA2MEM0OC43NSA2MCA2MCA0OC43NSA2MCAzNUM2MCAyMS4yNSA0OC43NSAxMCAzNSAxMFpNNDQuMjUgNDAuNzVDNDUuMjUgNDEuNzUgNDUuMjUgNDMuMjUgNDQuMjUgNDQuMjVDNDMuMjUgNDUuMjUgNDEuNzUgNDUuMjUgNDAuNzUgNDQuMjVMMzUgMzguNUwyOS4yNSA0NC4yNUMyOC4yNSA0NS4yNSAyNi43NSA0NS4yNSAyNS43NSA0NC4yNUMyNC43NSA0My4yNSAyNC43NSA0MS43NSAyNS43NSA0MC43NUwzMS41IDM1TDI1Ljc1IDI5LjI1QzI0Ljc1IDI4LjI1IDI0Ljc1IDI2Ljc1IDI1Ljc1IDI1Ljc1QzI2Ljc1IDI0Ljc1IDI4LjI1IDI0Ljc1IDI5LjI1IDI1Ljc1TDM1IDMxLjVMNDAuNzUgMjUuNzVDNDEuNzUgMjQuNzUgNDMuMjUgMjQuNzUgNDQuMjUgMjUuNzVDNDUuMjUgMjYuNzUgNDUuMjUgMjguMjUgNDQuMjUgMjkuMjVMMzguNSAzNUw0NC4yNSA0MC43NVpcIiBmaWxsPVwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgIDwvZGl2PiBgXG5cbiAgbGV0IG1haW5Ob3RpZmljYXRpb25DbG9zZVRpbWVvdXRcbiAgLy8gZGVsZXRlIGFmdGVyIGNsaWNrIG9uIGNsb3NlIGJ1dHRvblxuICBtYWluTm90aWZpY2F0aW9uXG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLW5vdGlmaWNhdGlvbi10aW1lci1hbmQtY2xvc2VcIilbMF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1haW5Ob3RpZmljYXRpb24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYWluTm90aWZpY2F0aW9uKVxuICAgICAgY2xlYXJUaW1lb3V0KG1haW5Ob3RpZmljYXRpb25DbG9zZVRpbWVvdXQpXG4gICAgfSlcblxuICAvLyBkZWxldGUgYWZ0ZXIgMTBzIGF1dG9tYXRpY2FsbHlcbiAgbWFpbk5vdGlmaWNhdGlvbkNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1haW5Ob3RpZmljYXRpb24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYWluTm90aWZpY2F0aW9uKVxuICB9LCAxMDAwMClcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Ob3RpZmljYXRpb24pXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwibWFpbk5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJtYWluTm90aWZpY2F0aW9uQ2xvc2VUaW1lb3V0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYm9keSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/common/mainNotification.dev.js\n");

/***/ })

}]);