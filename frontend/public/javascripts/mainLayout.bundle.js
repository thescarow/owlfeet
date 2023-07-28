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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateGlobalAllChatData\": () => (/* binding */ updateGlobalAllChatData),\n/* harmony export */   \"updateGlobalIsLogin\": () => (/* binding */ updateGlobalIsLogin),\n/* harmony export */   \"updateGlobalLoginUserData\": () => (/* binding */ updateGlobalLoginUserData),\n/* harmony export */   \"updateGlobalProfileUserData\": () => (/* binding */ updateGlobalProfileUserData)\n/* harmony export */ });\n;\n\n(async function () {\n  if (!IS_INIT_MAIN_LAYOUT_MODULE) {\n    await updateGlobalIsLogin();\n\n    if (isLogin) {\n      await updateGlobalLoginUserData();\n    }\n\n    if (pageName === \"profile\") {\n      if (PROFILE_USERNAME) updateGlobalProfileUserData(PROFILE_USERNAME);\n    }\n\n    if (pageName === \"chat\") {\n      updateGlobalAllChatData();\n    } // handle keyboard for main navigation\n\n\n    const {\n      checkKeyboard\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_keyboardDetector_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/keyboardDetector.dev */ \"./dev-javascripts/common/keyboardDetector.dev.js\"));\n    checkKeyboard(onKeyboard, offKeyboard);\n    IS_INIT_MAIN_LAYOUT_MODULE = true;\n  }\n})();\n\nasync function updateGlobalLoginUserData() {\n  try {\n    let response = await fetch(`/user/data/login-user`);\n    if (!response.ok) throw Error(\"Server Error In Accessing Login User, Please Refresh Your Page\");\n    let data = await response.json();\n\n    if (data.isSuccess) {\n      loginUser = data.loginUser;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(data.error, \"error\");\n    }\n  } catch (e) {\n    console.error(e);\n    createMainNotification(\"Server Error In Fetching Login User Data, Please Refresh Your Page\", \"error\");\n  }\n}\nasync function updateGlobalProfileUserData(username) {\n  fetch(`/user/data/profile-user`, {\n    method: \"POST\",\n    // or 'PUT'\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      username: username\n    })\n  }).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      profileUser = data.profileUser;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n  });\n}\nasync function updateGlobalAllChatData() {\n  fetch(`/chat/data/all-chat`).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      allChatData = data.allChatData;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n  });\n}\nasync function updateGlobalIsLogin() {\n  try {\n    let response = await fetch(`/user/check/login-status`);\n    if (!response.ok) throw Error(\"server error\");\n    let data = await response.json();\n\n    if (data.isLogin) {\n      isLogin = true;\n    } else {\n      isLogin = false;\n    }\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nfunction onKeyboard(height) {\n  const mainNavContainer = document.getElementById(\"mainNavContainer\");\n\n  if (!mainNavContainer.classList.contains(\"hide\")) {\n    mainNavContainer.classList.add(\"hide\");\n  }\n}\n\nfunction offKeyboard() {\n  const mainNavContainer = document.getElementById(\"mainNavContainer\");\n\n  if (mainNavContainer.classList.contains(\"hide\")) {\n    mainNavContainer.classList.remove(\"hide\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLDBCQUFMLEVBQWlDO0lBQy9CLE1BQU1DLG1CQUFtQixFQUF6Qjs7SUFDQSxJQUFJQyxPQUFKLEVBQWE7TUFDWCxNQUFNQyx5QkFBeUIsRUFBL0I7SUFDRDs7SUFFRCxJQUFJQyxRQUFRLEtBQUssU0FBakIsRUFBNEI7TUFDMUIsSUFBSUMsZ0JBQUosRUFBc0JDLDJCQUEyQixDQUFDRCxnQkFBRCxDQUEzQjtJQUN2Qjs7SUFFRCxJQUFJRCxRQUFRLEtBQUssTUFBakIsRUFBeUI7TUFDdkJHLHVCQUF1QjtJQUN4QixDQVo4QixDQWMvQjs7O0lBQ0EsTUFBTTtNQUFFQztJQUFGLElBQW9CLE1BQU0scU9BQWhDO0lBRUFBLGFBQWEsQ0FBQ0MsVUFBRCxFQUFhQyxXQUFiLENBQWI7SUFFQVYsMEJBQTBCLEdBQUcsSUFBN0I7RUFDRDtBQUNGLENBdEJBOztBQXdCTSxlQUFlRyx5QkFBZixHQUEyQztFQUNoRCxJQUFJO0lBQ0YsSUFBSVEsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSx1QkFBRixDQUExQjtJQUNBLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxFQUFkLEVBQ0UsTUFBTUMsS0FBSyxDQUNULGdFQURTLENBQVg7SUFHRixJQUFJQyxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQWpCOztJQUNBLElBQUlELElBQUksQ0FBQ0UsU0FBVCxFQUFvQjtNQUNsQkMsU0FBUyxHQUFHSCxJQUFJLENBQUNHLFNBQWpCO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsSUFBSTtRQUFFQztNQUFGLElBQTZCLE1BQU0sbVhBQXZDO01BR0FBLHNCQUFzQixDQUFDSixJQUFJLENBQUNLLEtBQU4sRUFBYSxPQUFiLENBQXRCO0lBQ0Q7RUFDRixDQWZELENBZUUsT0FBT0MsQ0FBUCxFQUFVO0lB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Q0Q7QUFDRjs7QUFFRCxTQUFTWixVQUFULENBQW9CMkIsTUFBcEIsRUFBNEI7RUFDMUIsTUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBekI7O0VBQ0EsSUFBSSxDQUFDRixnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJDLFFBQTNCLENBQW9DLE1BQXBDLENBQUwsRUFBa0Q7SUFDaERKLGdCQUFnQixDQUFDRyxTQUFqQixDQUEyQkUsR0FBM0IsQ0FBK0IsTUFBL0I7RUFDRDtBQUNGOztBQUNELFNBQVNoQyxXQUFULEdBQXVCO0VBQ3JCLE1BQU0yQixnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6Qjs7RUFDQSxJQUFJRixnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJDLFFBQTNCLENBQW9DLE1BQXBDLENBQUosRUFBaUQ7SUFDL0NKLGdCQUFnQixDQUFDRyxTQUFqQixDQUEyQkcsTUFBM0IsQ0FBa0MsTUFBbEM7RUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzPzIxZGEiXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFJU19JTklUX01BSU5fTEFZT1VUX01PRFVMRSkge1xyXG4gICAgYXdhaXQgdXBkYXRlR2xvYmFsSXNMb2dpbigpXHJcbiAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICBhd2FpdCB1cGRhdGVHbG9iYWxMb2dpblVzZXJEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgPT09IFwicHJvZmlsZVwiKSB7XHJcbiAgICAgIGlmIChQUk9GSUxFX1VTRVJOQU1FKSB1cGRhdGVHbG9iYWxQcm9maWxlVXNlckRhdGEoUFJPRklMRV9VU0VSTkFNRSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgPT09IFwiY2hhdFwiKSB7XHJcbiAgICAgIHVwZGF0ZUdsb2JhbEFsbENoYXREYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGUga2V5Ym9hcmQgZm9yIG1haW4gbmF2aWdhdGlvblxyXG4gICAgY29uc3QgeyBjaGVja0tleWJvYXJkIH0gPSBhd2FpdCBpbXBvcnQoXCIuLi9jb21tb24va2V5Ym9hcmREZXRlY3Rvci5kZXZcIilcclxuXHJcbiAgICBjaGVja0tleWJvYXJkKG9uS2V5Ym9hcmQsIG9mZktleWJvYXJkKVxyXG5cclxuICAgIElTX0lOSVRfTUFJTl9MQVlPVVRfTU9EVUxFID0gdHJ1ZVxyXG4gIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbExvZ2luVXNlckRhdGEoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvdXNlci9kYXRhL2xvZ2luLXVzZXJgKVxyXG4gICAgaWYgKCFyZXNwb25zZS5vaylcclxuICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gQWNjZXNzaW5nIExvZ2luIFVzZXIsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZVwiXHJcbiAgICAgIClcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgbG9naW5Vc2VyID0gZGF0YS5sb2dpblVzZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihkYXRhLmVycm9yLCBcImVycm9yXCIpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gRmV0Y2hpbmcgTG9naW4gVXNlciBEYXRhLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgXCJlcnJvclwiXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHbG9iYWxQcm9maWxlVXNlckRhdGEodXNlcm5hbWUpIHtcclxuICBmZXRjaChgL3VzZXIvZGF0YS9wcm9maWxlLXVzZXJgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pXHJcbiAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgcHJvZmlsZVVzZXIgPSBkYXRhLnByb2ZpbGVVc2VyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gRmV0Y2hpbmcgUHJvZmlsZSBVc2VyLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgICAgIFwiZXJyb3JcIlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChhc3luYyBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgIFwiU2VydmVyIEVycm9yIEluIEZldGNoaW5nIFByb2ZpbGUgVXNlciwgUGxlYXNlIFJlZnJlc2ggWW91ciBQYWdlXCIsXHJcbiAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgIClcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEFsbENoYXREYXRhKCkge1xyXG4gIGZldGNoKGAvY2hhdC9kYXRhL2FsbC1jaGF0YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgYWxsQ2hhdERhdGEgPSBkYXRhLmFsbENoYXREYXRhXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgIClcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJFcnJvciBJbiBGZXRjaGluZyBBbGwgQ2hhdCBEYXRhLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2U6XCIsXHJcbiAgICAgICAgICBcImVycm9yXCJcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcclxuICAgICAgICBcIkVycm9yIEluIEZldGNoaW5nIEFsbCBDaGF0IERhdGEsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZTpcIixcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2xvYmFsSXNMb2dpbigpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC91c2VyL2NoZWNrL2xvZ2luLXN0YXR1c2ApXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBFcnJvcihcInNlcnZlciBlcnJvclwiKVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGlmIChkYXRhLmlzTG9naW4pIHtcclxuICAgICAgaXNMb2dpbiA9IHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzTG9naW4gPSBmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uS2V5Ym9hcmQoaGVpZ2h0KSB7XHJcbiAgY29uc3QgbWFpbk5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbk5hdkNvbnRhaW5lclwiKVxyXG4gIGlmICghbWFpbk5hdkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICBtYWluTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIG9mZktleWJvYXJkKCkge1xyXG4gIGNvbnN0IG1haW5OYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5OYXZDb250YWluZXJcIilcclxuICBpZiAobWFpbk5hdkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICBtYWluTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJU19JTklUX01BSU5fTEFZT1VUX01PRFVMRSIsInVwZGF0ZUdsb2JhbElzTG9naW4iLCJpc0xvZ2luIiwidXBkYXRlR2xvYmFsTG9naW5Vc2VyRGF0YSIsInBhZ2VOYW1lIiwiUFJPRklMRV9VU0VSTkFNRSIsInVwZGF0ZUdsb2JhbFByb2ZpbGVVc2VyRGF0YSIsInVwZGF0ZUdsb2JhbEFsbENoYXREYXRhIiwiY2hlY2tLZXlib2FyZCIsIm9uS2V5Ym9hcmQiLCJvZmZLZXlib2FyZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJpc1N1Y2Nlc3MiLCJsb2dpblVzZXIiLCJjcmVhdGVNYWluTm90aWZpY2F0aW9uIiwiZXJyb3IiLCJlIiwiY29uc29sZSIsInVzZXJuYW1lIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsIlByb21pc2UiLCJyZWplY3QiLCJwcm9maWxlVXNlciIsImNhdGNoIiwiZXJyIiwiYWxsQ2hhdERhdGEiLCJoZWlnaHQiLCJtYWluTmF2Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/layout/mainLayout.dev.js\n");

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