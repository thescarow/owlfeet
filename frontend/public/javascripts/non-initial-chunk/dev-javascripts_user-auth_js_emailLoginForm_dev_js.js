"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_user-auth_js_emailLoginForm_dev_js"],{

/***/ "./dev-javascripts/user-auth/js/emailLoginForm.dev.js":
/*!************************************************************!*\
  !*** ./dev-javascripts/user-auth/js/emailLoginForm.dev.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\");\n/* harmony import */ var _common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/mainNotification.dev.js */ \"./dev-javascripts/common/mainNotification.dev.js\");\n\n\nconst emailLoginInput = document.getElementById(\"emailLoginInput\");\nconst emailLoginPostNote = document.getElementById(\"emailLoginPostNote\");\nconst emailLoginActionBtn = document.getElementById(\"emailLoginActionBtn\");\nemailLoginInput.addEventListener(\"input\", () => {\n  if (!emailLoginPostNote.classList.contains(\"email-login__note--hide\")) emailLoginPostNote.classList.add(\"email-login__note--hide\");\n});\nemailLoginActionBtn.addEventListener(\"click\", () => {\n  let email = emailLoginInput.value.trim();\n\n  if (email !== \"\") {\n    if (email_validator__WEBPACK_IMPORTED_MODULE_0__.validate(email)) {\n      fetch(\"/user-auth/send-email-login\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          email: email\n        })\n      }).then(res => {\n        if (res.ok) return res.json();\n        throw new Error(\"Server error in sending secure login link.\");\n      }).then(data => {\n        if (data.isSuccess) {\n          (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(\"Secure link is sent to your Email Box.\", \"success\");\n          if (emailLoginPostNote.classList.contains(\"email-login__note--hide\")) emailLoginPostNote.classList.remove(\"email-login__note--hide\");\n        } else {\n          (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(data.error, \"error\");\n        }\n      }).catch(err => {\n        (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(\"Server error in sending secure login link,Please try again\", \"error\");\n      });\n    } else {\n      (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(\"This Email Address is not valid, Please check it and try again\", \"error\");\n    }\n  } else {\n    (0,_common_mainNotification_dev_js__WEBPACK_IMPORTED_MODULE_1__.createMainNotification)(\"Email should not be empty\", \"error\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvdXNlci1hdXRoL2pzL2VtYWlsTG9naW5Gb3JtLmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0EsTUFBTUUsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBM0I7QUFDQSxNQUFNRSxtQkFBbUIsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUE1QjtBQUVBRixlQUFlLENBQUNLLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxNQUFNO0VBQzlDLElBQUksQ0FBQ0Ysa0JBQWtCLENBQUNHLFNBQW5CLENBQTZCQyxRQUE3QixDQUFzQyx5QkFBdEMsQ0FBTCxFQUNFSixrQkFBa0IsQ0FBQ0csU0FBbkIsQ0FBNkJFLEdBQTdCLENBQWlDLHlCQUFqQztBQUNILENBSEQ7QUFJQUosbUJBQW1CLENBQUNDLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxNQUFNO0VBQ2xELElBQUlJLEtBQUssR0FBR1QsZUFBZSxDQUFDVSxLQUFoQixDQUFzQkMsSUFBdEIsRUFBWjs7RUFDQSxJQUFJRixLQUFLLEtBQUssRUFBZCxFQUFrQjtJQUNoQixJQUFJWCxxREFBQSxDQUF3QlcsS0FBeEIsQ0FBSixFQUFvQztNQUNsQ0ksS0FBSyxDQUFDLDZCQUFELEVBQWdDO1FBQ25DQyxNQUFNLEVBQUUsTUFEMkI7UUFFbkNDLE9BQU8sRUFBRTtVQUNQLGdCQUFnQjtRQURULENBRjBCO1FBS25DQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1VBQUVULEtBQUssRUFBRUE7UUFBVCxDQUFmO01BTDZCLENBQWhDLENBQUwsQ0FPR1UsSUFQSCxDQU9RQyxHQUFHLElBQUk7UUFDWCxJQUFJQSxHQUFHLENBQUNDLEVBQVIsRUFBWSxPQUFPRCxHQUFHLENBQUNFLElBQUosRUFBUDtRQUNaLE1BQU0sSUFBSUMsS0FBSixDQUFVLDRDQUFWLENBQU47TUFDRCxDQVZILEVBV0dKLElBWEgsQ0FXUUssSUFBSSxJQUFJO1FBQ1osSUFBSUEsSUFBSSxDQUFDQyxTQUFULEVBQW9CO1VBQ2xCMUIsdUZBQXNCLENBQ3BCLHdDQURvQixFQUVwQixTQUZvQixDQUF0QjtVQUlBLElBQ0VJLGtCQUFrQixDQUFDRyxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0MseUJBQXRDLENBREYsRUFHRUosa0JBQWtCLENBQUNHLFNBQW5CLENBQTZCb0IsTUFBN0IsQ0FBb0MseUJBQXBDO1FBQ0gsQ0FURCxNQVNPO1VBQ0wzQix1RkFBc0IsQ0FBQ3lCLElBQUksQ0FBQ0csS0FBTixFQUFhLE9BQWIsQ0FBdEI7UUFDRDtNQUNGLENBeEJILEVBeUJHQyxLQXpCSCxDQXlCU0MsR0FBRyxJQUFJO1FBQ1o5Qix1RkFBc0IsQ0FDcEIsNERBRG9CLEVBRXBCLE9BRm9CLENBQXRCO01BSUQsQ0E5Qkg7SUErQkQsQ0FoQ0QsTUFnQ087TUFDTEEsdUZBQXNCLENBQ3BCLGdFQURvQixFQUVwQixPQUZvQixDQUF0QjtJQUlEO0VBQ0YsQ0F2Q0QsTUF1Q087SUFDTEEsdUZBQXNCLENBQUMsMkJBQUQsRUFBOEIsT0FBOUIsQ0FBdEI7RUFDRDtBQUNGLENBNUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvdXNlci1hdXRoL2pzL2VtYWlsTG9naW5Gb3JtLmRldi5qcz83ODkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbWFpbFZhbGlkYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCJcclxuaW1wb3J0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXYuanNcIlxyXG5jb25zdCBlbWFpbExvZ2luSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsTG9naW5JbnB1dFwiKVxyXG5jb25zdCBlbWFpbExvZ2luUG9zdE5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsTG9naW5Qb3N0Tm90ZVwiKVxyXG5jb25zdCBlbWFpbExvZ2luQWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbExvZ2luQWN0aW9uQnRuXCIpXHJcblxyXG5lbWFpbExvZ2luSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICBpZiAoIWVtYWlsTG9naW5Qb3N0Tm90ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlbWFpbC1sb2dpbl9fbm90ZS0taGlkZVwiKSlcclxuICAgIGVtYWlsTG9naW5Qb3N0Tm90ZS5jbGFzc0xpc3QuYWRkKFwiZW1haWwtbG9naW5fX25vdGUtLWhpZGVcIilcclxufSlcclxuZW1haWxMb2dpbkFjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGxldCBlbWFpbCA9IGVtYWlsTG9naW5JbnB1dC52YWx1ZS50cmltKClcclxuICBpZiAoZW1haWwgIT09IFwiXCIpIHtcclxuICAgIGlmIChlbWFpbFZhbGlkYXRvci52YWxpZGF0ZShlbWFpbCkpIHtcclxuICAgICAgZmV0Y2goXCIvdXNlci1hdXRoL3NlbmQtZW1haWwtbG9naW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXJ2ZXIgZXJyb3IgaW4gc2VuZGluZyBzZWN1cmUgbG9naW4gbGluay5cIilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgXCJTZWN1cmUgbGluayBpcyBzZW50IHRvIHlvdXIgRW1haWwgQm94LlwiLFxyXG4gICAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGVtYWlsTG9naW5Qb3N0Tm90ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlbWFpbC1sb2dpbl9fbm90ZS0taGlkZVwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgZW1haWxMb2dpblBvc3ROb3RlLmNsYXNzTGlzdC5yZW1vdmUoXCJlbWFpbC1sb2dpbl9fbm90ZS0taGlkZVwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihkYXRhLmVycm9yLCBcImVycm9yXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgIFwiU2VydmVyIGVycm9yIGluIHNlbmRpbmcgc2VjdXJlIGxvZ2luIGxpbmssUGxlYXNlIHRyeSBhZ2FpblwiLFxyXG4gICAgICAgICAgICBcImVycm9yXCJcclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgICBcIlRoaXMgRW1haWwgQWRkcmVzcyBpcyBub3QgdmFsaWQsIFBsZWFzZSBjaGVjayBpdCBhbmQgdHJ5IGFnYWluXCIsXHJcbiAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcIkVtYWlsIHNob3VsZCBub3QgYmUgZW1wdHlcIiwgXCJlcnJvclwiKVxyXG4gIH1cclxufSlcclxuIl0sIm5hbWVzIjpbImVtYWlsVmFsaWRhdG9yIiwiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsImVtYWlsTG9naW5JbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbWFpbExvZ2luUG9zdE5vdGUiLCJlbWFpbExvZ2luQWN0aW9uQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwiZW1haWwiLCJ2YWx1ZSIsInRyaW0iLCJ2YWxpZGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIkVycm9yIiwiZGF0YSIsImlzU3VjY2VzcyIsInJlbW92ZSIsImVycm9yIiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/user-auth/js/emailLoginForm.dev.js\n");

/***/ }),

/***/ "./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n\r\nvar tester = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/;\r\n// Thanks to:\r\n// http://fightingforalostcause.net/misc/2006/compare-email-regex.php\r\n// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx\r\n// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378\r\nexports.validate = function(email)\r\n{\r\n\tif (!email)\r\n\t\treturn false;\r\n\t\t\r\n\tif(email.length>254)\r\n\t\treturn false;\r\n\r\n\tvar valid = tester.test(email);\r\n\tif(!valid)\r\n\t\treturn false;\r\n\r\n\t// Further checking of some things regex can't handle\r\n\tvar parts = email.split(\"@\");\r\n\tif(parts[0].length>64)\r\n\t\treturn false;\r\n\r\n\tvar domainParts = parts[1].split(\".\");\r\n\tif(domainParts.some(function(part) { return part.length>63; }))\r\n\t\treturn false;\r\n\r\n\treturn true;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZW1haWwtdmFsaWRhdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL2VtYWlsLXZhbGlkYXRvci9pbmRleC5qcz8xZmZhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHRlc3RlciA9IC9eWy0hIyQlJicqK1xcLzAtOT0/QS1aXl9hLXp7fH1+XShcXC4/Wy0hIyQlJicqK1xcLzAtOT0/QS1aXl9hLXpge3x9fl0pKkBbYS16QS1aMC05XSgtKlxcLj9bYS16QS1aMC05XSkqXFwuW2EtekEtWl0oLT9bYS16QS1aMC05XSkrJC87XHJcbi8vIFRoYW5rcyB0bzpcclxuLy8gaHR0cDovL2ZpZ2h0aW5nZm9yYWxvc3RjYXVzZS5uZXQvbWlzYy8yMDA2L2NvbXBhcmUtZW1haWwtcmVnZXgucGhwXHJcbi8vIGh0dHA6Ly90aGVkYWlseXd0Zi5jb20vQXJ0aWNsZXMvVmFsaWRhdGluZ19FbWFpbF9BZGRyZXNzZXMuYXNweFxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMTMyMy93aGF0LWlzLXRoZS1iZXN0LXJlZ3VsYXItZXhwcmVzc2lvbi1mb3ItdmFsaWRhdGluZy1lbWFpbC1hZGRyZXNzZXMvMjAxMzc4IzIwMTM3OFxyXG5leHBvcnRzLnZhbGlkYXRlID0gZnVuY3Rpb24oZW1haWwpXHJcbntcclxuXHRpZiAoIWVtYWlsKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHJcblx0aWYoZW1haWwubGVuZ3RoPjI1NClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0dmFyIHZhbGlkID0gdGVzdGVyLnRlc3QoZW1haWwpO1xyXG5cdGlmKCF2YWxpZClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0Ly8gRnVydGhlciBjaGVja2luZyBvZiBzb21lIHRoaW5ncyByZWdleCBjYW4ndCBoYW5kbGVcclxuXHR2YXIgcGFydHMgPSBlbWFpbC5zcGxpdChcIkBcIik7XHJcblx0aWYocGFydHNbMF0ubGVuZ3RoPjY0KVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHR2YXIgZG9tYWluUGFydHMgPSBwYXJ0c1sxXS5zcGxpdChcIi5cIik7XHJcblx0aWYoZG9tYWluUGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7IHJldHVybiBwYXJ0Lmxlbmd0aD42MzsgfSkpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/email-validator/index.js\n");

/***/ })

}]);