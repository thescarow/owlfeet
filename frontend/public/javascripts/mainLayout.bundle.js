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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateGlobalAllChatData\": () => (/* binding */ updateGlobalAllChatData),\n/* harmony export */   \"updateGlobalIsLogin\": () => (/* binding */ updateGlobalIsLogin),\n/* harmony export */   \"updateGlobalLoginUserData\": () => (/* binding */ updateGlobalLoginUserData),\n/* harmony export */   \"updateGlobalProfileUserData\": () => (/* binding */ updateGlobalProfileUserData)\n/* harmony export */ });\n;\n\n(async function () {\n  if (!IS_INIT_MAIN_LAYOUT_MODULE) {\n    await updateGlobalIsLogin();\n\n    if (isLogin) {\n      await updateGlobalLoginUserData();\n    }\n\n    if (pageName === \"profile\") {\n      if (PROFILE_USERNAME) updateGlobalProfileUserData(PROFILE_USERNAME);\n    }\n\n    if (pageName === \"chat\") {\n      updateGlobalAllChatData();\n    }\n\n    IS_INIT_MAIN_LAYOUT_MODULE = true;\n  }\n\n  console.log(\"main layout:\", location);\n})();\n\nasync function updateGlobalLoginUserData() {\n  try {\n    let response = await fetch(`/user/data/login-user`);\n    if (!response.ok) throw Error(\"Server Error In Accessing Login User, Please Refresh Your Page\");\n    let data = await response.json();\n\n    if (data.isSuccess) {\n      loginUser = data.loginUser;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(data.error, \"error\");\n    }\n  } catch (e) {\n    console.error(e);\n    createMainNotification(\"Server Error In Fetching Login User Data, Please Refresh Your Page\", \"error\");\n  }\n}\nasync function updateGlobalProfileUserData(username) {\n  fetch(`/user/data/profile-user`, {\n    method: \"POST\",\n    // or 'PUT'\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      username: username\n    })\n  }).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      profileUser = data.profileUser;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n  });\n}\nasync function updateGlobalAllChatData() {\n  fetch(`/chat/data/all-chat`).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      allChatData = data.allChatData;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n  });\n}\nasync function updateGlobalIsLogin() {\n  try {\n    let response = await fetch(`/user/check/login-status`);\n    if (!response.ok) throw Error(\"server error\");\n    let data = await response.json();\n\n    if (data.isLogin) {\n      isLogin = true;\n    } else {\n      isLogin = false;\n    }\n  } catch (e) {\n    console.error(e);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLDBCQUFMLEVBQWlDO0lBQy9CLE1BQU1DLG1CQUFtQixFQUF6Qjs7SUFDQSxJQUFJQyxPQUFKLEVBQWE7TUFDWCxNQUFNQyx5QkFBeUIsRUFBL0I7SUFDRDs7SUFFRCxJQUFJQyxRQUFRLEtBQUssU0FBakIsRUFBNEI7TUFDMUIsSUFBSUMsZ0JBQUosRUFBc0JDLDJCQUEyQixDQUFDRCxnQkFBRCxDQUEzQjtJQUN2Qjs7SUFFRCxJQUFJRCxRQUFRLEtBQUssTUFBakIsRUFBeUI7TUFDdkJHLHVCQUF1QjtJQUN4Qjs7SUFDRFAsMEJBQTBCLEdBQUcsSUFBN0I7RUFDRDs7RUFDRFEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkMsUUFBNUI7QUFDRCxDQWpCQTs7QUFtQk0sZUFBZVAseUJBQWYsR0FBMkM7RUFDaEQsSUFBSTtJQUNGLElBQUlRLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsdUJBQUYsQ0FBMUI7SUFDQSxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsRUFBZCxFQUNFLE1BQU1DLEtBQUssQ0FDVCxnRUFEUyxDQUFYO0lBR0YsSUFBSUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBVCxFQUFqQjs7SUFDQSxJQUFJRCxJQUFJLENBQUNFLFNBQVQsRUFBb0I7TUFDbEJDLFNBQVMsR0FBR0gsSUFBSSxDQUFDRyxTQUFqQjtJQUNELENBRkQsTUFFTztNQUNMLElBQUk7UUFBRUM7TUFBRixJQUE2QixNQUFNLG1YQUF2QztNQUdBQSxzQkFBc0IsQ0FBQ0osSUFBSSxDQUFDSyxLQUFOLEVBQWEsT0FBYixDQUF0QjtJQUNEO0VBQ0YsQ0FmRCxDQWVFLE9BQU9DLENBQVAsRUFBVTtJQUNWYixPQUFPLENBQUNZLEtBQVIsQ0FBY0MsQ0FBZDtJQUNBRixzQkFBc0Is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ZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzPzIxZGEiXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFJU19JTklUX01BSU5fTEFZT1VUX01PRFVMRSkge1xyXG4gICAgYXdhaXQgdXBkYXRlR2xvYmFsSXNMb2dpbigpXHJcbiAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICBhd2FpdCB1cGRhdGVHbG9iYWxMb2dpblVzZXJEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgPT09IFwicHJvZmlsZVwiKSB7XHJcbiAgICAgIGlmIChQUk9GSUxFX1VTRVJOQU1FKSB1cGRhdGVHbG9iYWxQcm9maWxlVXNlckRhdGEoUFJPRklMRV9VU0VSTkFNRSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgPT09IFwiY2hhdFwiKSB7XHJcbiAgICAgIHVwZGF0ZUdsb2JhbEFsbENoYXREYXRhKClcclxuICAgIH1cclxuICAgIElTX0lOSVRfTUFJTl9MQVlPVVRfTU9EVUxFID0gdHJ1ZVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIm1haW4gbGF5b3V0OlwiLCBsb2NhdGlvbilcclxufSkoKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbExvZ2luVXNlckRhdGEoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvdXNlci9kYXRhL2xvZ2luLXVzZXJgKVxyXG4gICAgaWYgKCFyZXNwb25zZS5vaylcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gQWNjZXNzaW5nIExvZ2luIFVzZXIsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZVwiXHJcbiAgICAgIClcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgbG9naW5Vc2VyID0gZGF0YS5sb2dpblVzZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihkYXRhLmVycm9yLCBcImVycm9yXCIpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gRmV0Y2hpbmcgTG9naW4gVXNlciBEYXRhLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgXCJlcnJvclwiXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHbG9iYWxQcm9maWxlVXNlckRhdGEodXNlcm5hbWUpIHtcclxuICBmZXRjaChgL3VzZXIvZGF0YS9wcm9maWxlLXVzZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pXHJcbiAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgcHJvZmlsZVVzZXIgPSBkYXRhLnByb2ZpbGVVc2VyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gRmV0Y2hpbmcgUHJvZmlsZSBVc2VyLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgICAgIFwiZXJyb3JcIlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChhc3luYyBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgIFwiU2VydmVyIEVycm9yIEluIEZldGNoaW5nIFByb2ZpbGUgVXNlciwgUGxlYXNlIFJlZnJlc2ggWW91ciBQYWdlXCIsXHJcbiAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgIClcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEFsbENoYXREYXRhKCkge1xyXG4gIGZldGNoKGAvY2hhdC9kYXRhL2FsbC1jaGF0YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgYWxsQ2hhdERhdGEgPSBkYXRhLmFsbENoYXREYXRhXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJFcnJvciBJbiBGZXRjaGluZyBBbGwgQ2hhdCBEYXRhLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2U6XCIsXHJcbiAgICAgICAgICBcImVycm9yXCJcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgICBcIkVycm9yIEluIEZldGNoaW5nIEFsbCBDaGF0IERhdGEsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZTpcIixcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2xvYmFsSXNMb2dpbigpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC91c2VyL2NoZWNrL2xvZ2luLXN0YXR1c2ApXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBFcnJvcihcInNlcnZlciBlcnJvclwiKVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGlmIChkYXRhLmlzTG9naW4pIHtcclxuICAgICAgaXNMb2dpbiA9IHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzTG9naW4gPSBmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIklTX0lOSVRfTUFJTl9MQVlPVVRfTU9EVUxFIiwidXBkYXRlR2xvYmFsSXNMb2dpbiIsImlzTG9naW4iLCJ1cGRhdGVHbG9iYWxMb2dpblVzZXJEYXRhIiwicGFnZU5hbWUiLCJQUk9GSUxFX1VTRVJOQU1FIiwidXBkYXRlR2xvYmFsUHJvZmlsZVVzZXJEYXRhIiwidXBkYXRlR2xvYmFsQWxsQ2hhdERhdGEiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiaXNTdWNjZXNzIiwibG9naW5Vc2VyIiwiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsImVycm9yIiwiZSIsInVzZXJuYW1lIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsIlByb21pc2UiLCJyZWplY3QiLCJwcm9maWxlVXNlciIsImNhdGNoIiwiZXJyIiwiYWxsQ2hhdERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/layout/mainLayout.dev.js\n");

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
/******/ 			}
/******/ 			;
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