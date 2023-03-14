/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev-javascripts/layout/mainLayout.dev.js":
/*!**************************************************!*\
  !*** ./dev-javascripts/layout/mainLayout.dev.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateGlobalAllChatData\": () => (/* binding */ updateGlobalAllChatData),\n/* harmony export */   \"updateGlobalLoginUserData\": () => (/* binding */ updateGlobalLoginUserData),\n/* harmony export */   \"updateGlobalProfileUserData\": () => (/* binding */ updateGlobalProfileUserData)\n/* harmony export */ });\n;\n\n(async function () {\n  if (!IS_INIT_MAIN_LAYOUT_MODULE) {\n    updateGlobalLoginUserData();\n\n    if (pageName === \"profile\") {\n      if (PROFILE_USERNAME) updateGlobalProfileUserData(PROFILE_USERNAME);\n    }\n\n    if (pageName === \"chat\") {\n      updateGlobalAllChatData();\n    }\n\n    IS_INIT_MAIN_LAYOUT_MODULE = true;\n  }\n})();\n\nasync function updateGlobalLoginUserData() {\n  fetch(`/user/data/login-user`).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      loginUser = data.loginUser;\n    } else {\n      let {\n        createMainNotification\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js-_81c90\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Server Error In Fetching Login User Data, Please Refresh Your Page\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js-_81c90\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Server Error In Fetching Login User Data, Please Refresh Your Page\", \"error\");\n  });\n}\nasync function updateGlobalProfileUserData(username) {\n  fetch(`/user/data/profile-user`, {\n    method: \"POST\",\n    // or 'PUT'\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      username: username\n    })\n  }).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      profileUser = data.profileUser;\n    } else {\n      let {\n        createMainNotification\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js-_81c90\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js-_81c90\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n  });\n}\nasync function updateGlobalAllChatData() {\n  fetch(`/chat/data/all-chat`).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      allChatData = data.allChatData;\n    } else {\n      let {\n        createMainNotification\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js-_81c90\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js-_81c90\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFDLENBQUMsa0JBQWtCO0VBQ2xCLElBQUksQ0FBQ0EsMEJBQUwsRUFBaUM7SUFDL0JDLHlCQUF5Qjs7SUFFekIsSUFBSUMsUUFBUSxLQUFLLFNBQWpCLEVBQTRCO01BQzFCLElBQUlDLGdCQUFKLEVBQXNCQywyQkFBMkIsQ0FBQ0QsZ0JBQUQsQ0FBM0I7SUFDdkI7O0lBRUQsSUFBSUQsUUFBUSxLQUFLLE1BQWpCLEVBQXlCO01BQ3ZCRyx1QkFBdUI7SUFDeEI7O0lBQ0RMLDBCQUEwQixHQUFHLElBQTdCO0VBQ0Q7QUFDRixDQWJBOztBQWVNLGVBQWVDLHlCQUFmLEdBQTJDO0VBQ2hESyxLQUFLLENBQUUsdUJBQUYsQ0FBTCxDQUNHQyxJQURILENBQ1FDLFFBQVEsSUFBSTtJQUNoQixJQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7TUFDZixPQUFPRCxRQUFRLENBQUNFLElBQVQsRUFBUDtJQUNEOztJQUNELE9BQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixRQUFmLENBQVA7RUFDRCxDQU5ILEVBT0dELElBUEgsQ0FPUSxNQUFNTSxJQUFOLElBQWM7SUFDbEIsSUFBSUEsSUFBSSxDQUFDQyxTQUFULEVBQW9CO01BQ2xCQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0UsU0FBakI7SUFDRCxDQUZELE1BRU87TUFDTCxJQUFJO1FBQUVDO01BQUYsSUFBNkIsTUFBTSw0T0FBdkM7TUFHQUEsc0JBQXNCLENBQ3BCLG9FQURvQixFQUVwQixPQUZvQixDQUF0QjtJQUlEO0VBQ0YsQ0FuQkgsRUFvQkdDLEtBcEJILENBb0JTLE1BQU1DLEdBQU4sSUFBYTtJQUNsQkMsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7SUFDQSxJQUFJO01BQUVGO0lBQUYsSUFBNkIsTUFBTSw0T0FBdkM7SUFHQUEsc0JBQXNCLENBQ3BCLG9FQURvQixFQUVwQixPQUZvQixDQUF0QjtFQUlELENBN0JIO0FBOEJEO0FBQ00sZUFBZVosMkJBQWYsQ0FBMkNpQixRQUEzQyxFQUFxRDtFQUMxRGYsS0FBSyxDQUFFLHlCQUFGLEVBQTRCO0lBQy9CZ0IsTUFBTSxFQUFFLE1BRHVCO0lBQ2Y7SUFDaEJDLE9BQU8sRUFBRTtNQUNQLGdCQUFnQjtJQURULENBRnNCO0lBSy9CQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO01BQUVMLFFBQVEsRUFBRUE7SUFBWixDQUFmO0VBTHlCLENBQTVCLENBQUwsQ0FPR2QsSUFQSCxDQU9RQyxRQUFRLElBQUk7SUFDaEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO01BQ2YsT0FBT0QsUUFBUSxDQUFDRSxJQUFULEVBQVA7SUFDRDs7SUFDRCxPQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUosUUFBZixDQUFQO0VBQ0QsQ0FaSCxFQWFHRCxJQWJILENBYVEsTUFBTU0sSUFBTixJQUFjO0lBQ2xCLElBQUlBLElBQUksQ0FBQ0MsU0FBVCxFQUFvQjtNQUNsQmEsV0FBVyxHQUFHZCxJQUFJLENBQUNjLFdBQW5CO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsSUFBSTtRQUFFWDtNQUFGLElBQTZCLE1BQU0sNE9BQXZDO01BR0FBLHNCQUFzQixDQUNwQixpRUFEb0IsRUFFcEIsT0FGb0IsQ0FBdEI7SUFJRDtFQUNGLENBekJILEVBMEJHQyxLQTFCSCxDQTBCUyxNQUFNQyxHQUFOLElBQWE7SUFDbEJDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0lBQ0EsSUFBSTtNQUFFRjtJQUFGLElBQTZCLE1BQU0sNE9BQXZDO0lBR0FBLHNCQUFzQixDQUNwQixpRUFEb0IsRUFFcEIsT0FGb0IsQ0FBdEI7RUFJRCxDQW5DSDtBQW9DRDtBQUNNLGVBQWVYLHVCQUFmLEdBQXlDO0VBQzlDQyxLQUFLLENBQUUscUJBQUYsQ0FBTCxDQUNHQyxJQURILENBQ1FDLFFBQVEsSUFBSTtJQUNoQixJQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7TUFDZixPQUFPRCxRQUFRLENBQUNFLElBQVQsRUFBUDtJQUNEOztJQUNELE9BQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixRQUFmLENBQVA7RUFDRCxDQU5ILEVBT0dELElBUEgsQ0FPUSxNQUFNTSxJQUFOLElBQWM7SUFDbEIsSUFBSUEsSUFBSSxDQUFDQyxTQUFULEVBQW9CO01BQ2xCYyxXQUFXLEdBQUdmLElBQUksQ0FBQ2UsV0FBbkI7SUFDRCxDQUZELE1BRU87TUFDTCxJQUFJO1FBQUVaO01BQUYsSUFBNkIsTUFBTSw0T0FBdkM7TUFHQUEsc0JBQXNCLENBQ3BCLDREQURvQixFQUVwQixPQUZvQixDQUF0QjtJQUlEO0VBQ0YsQ0FuQkgsRUFvQkdDLEtBcEJILENBb0JTLE1BQU1DLEdBQU4sSUFBYTtJQUNsQkMsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7SUFDQSxJQUFJO01BQUVGO0lBQUYsSUFBNkIsTUFBTSw0T0FBdkM7SUFHQUEsc0JBQXNCLENBQ3BCLDREQURvQixFQUVwQixPQUZvQixDQUF0QjtFQUlELENBN0JIO0FBOEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzPzIxZGEiXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFJU19JTklUX01BSU5fTEFZT1VUX01PRFVMRSkge1xyXG4gICAgdXBkYXRlR2xvYmFsTG9naW5Vc2VyRGF0YSgpXHJcblxyXG4gICAgaWYgKHBhZ2VOYW1lID09PSBcInByb2ZpbGVcIikge1xyXG4gICAgICBpZiAoUFJPRklMRV9VU0VSTkFNRSkgdXBkYXRlR2xvYmFsUHJvZmlsZVVzZXJEYXRhKFBST0ZJTEVfVVNFUk5BTUUpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2VOYW1lID09PSBcImNoYXRcIikge1xyXG4gICAgICB1cGRhdGVHbG9iYWxBbGxDaGF0RGF0YSgpXHJcbiAgICB9XHJcbiAgICBJU19JTklUX01BSU5fTEFZT1VUX01PRFVMRSA9IHRydWVcclxuICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHbG9iYWxMb2dpblVzZXJEYXRhKCkge1xyXG4gIGZldGNoKGAvdXNlci9kYXRhL2xvZ2luLXVzZXJgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfSlcclxuICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICBsb2dpblVzZXIgPSBkYXRhLmxvZ2luVXNlclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2XCJcclxuICAgICAgICApXHJcbiAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgICAgIFwiU2VydmVyIEVycm9yIEluIEZldGNoaW5nIExvZ2luIFVzZXIgRGF0YSwgUGxlYXNlIFJlZnJlc2ggWW91ciBQYWdlXCIsXHJcbiAgICAgICAgICBcImVycm9yXCJcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgICBcIlNlcnZlciBFcnJvciBJbiBGZXRjaGluZyBMb2dpbiBVc2VyIERhdGEsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZVwiLFxyXG4gICAgICAgIFwiZXJyb3JcIlxyXG4gICAgICApXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHbG9iYWxQcm9maWxlVXNlckRhdGEodXNlcm5hbWUpIHtcclxuICBmZXRjaChgL3VzZXIvZGF0YS9wcm9maWxlLXVzZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pXHJcbiAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgcHJvZmlsZVVzZXIgPSBkYXRhLnByb2ZpbGVVc2VyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gRmV0Y2hpbmcgUHJvZmlsZSBVc2VyLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgICAgIFwiZXJyb3JcIlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChhc3luYyBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgIFwiU2VydmVyIEVycm9yIEluIEZldGNoaW5nIFByb2ZpbGUgVXNlciwgUGxlYXNlIFJlZnJlc2ggWW91ciBQYWdlXCIsXHJcbiAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgIClcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEFsbENoYXREYXRhKCkge1xyXG4gIGZldGNoKGAvY2hhdC9kYXRhL2FsbC1jaGF0YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgYWxsQ2hhdERhdGEgPSBkYXRhLmFsbENoYXREYXRhXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJFcnJvciBJbiBGZXRjaGluZyBBbGwgQ2hhdCBEYXRhLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2U6XCIsXHJcbiAgICAgICAgICBcImVycm9yXCJcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgICBcIkVycm9yIEluIEZldGNoaW5nIEFsbCBDaGF0IERhdGEsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZTpcIixcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKVxyXG4gICAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiSVNfSU5JVF9NQUlOX0xBWU9VVF9NT0RVTEUiLCJ1cGRhdGVHbG9iYWxMb2dpblVzZXJEYXRhIiwicGFnZU5hbWUiLCJQUk9GSUxFX1VTRVJOQU1FIiwidXBkYXRlR2xvYmFsUHJvZmlsZVVzZXJEYXRhIiwidXBkYXRlR2xvYmFsQWxsQ2hhdERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJkYXRhIiwiaXNTdWNjZXNzIiwibG9naW5Vc2VyIiwiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidXNlcm5hbWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9maWxlVXNlciIsImFsbENoYXREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/layout/mainLayout.dev.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "non-initial-chunk/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"mainLayout": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-javascripts/layout/mainLayout.dev.js");
/******/ 	
/******/ })()
;