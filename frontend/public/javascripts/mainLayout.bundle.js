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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateGlobalAllChatData\": () => (/* binding */ updateGlobalAllChatData),\n/* harmony export */   \"updateGlobalIsLogin\": () => (/* binding */ updateGlobalIsLogin),\n/* harmony export */   \"updateGlobalLoginUserData\": () => (/* binding */ updateGlobalLoginUserData),\n/* harmony export */   \"updateGlobalProfileUserData\": () => (/* binding */ updateGlobalProfileUserData)\n/* harmony export */ });\ndocument.body.style.height = window.innerHeight + \"px\";\nwindow.addEventListener(\"resize\", () => {\n  document.body.style.height = window.innerHeight + \"px\";\n});\n\n(async function () {\n  document.body.style.height = window.innerHeight;\n\n  if (!IS_INIT_MAIN_LAYOUT_MODULE) {\n    await updateGlobalIsLogin();\n\n    if (isLogin) {\n      await updateGlobalLoginUserData();\n    }\n\n    if (pageName === \"profile\") {\n      if (PROFILE_USERNAME) updateGlobalProfileUserData(PROFILE_USERNAME);\n    }\n\n    if (pageName === \"chat\") {\n      updateGlobalAllChatData();\n    } // handle keyboard for main navigation\n\n\n    const {\n      checkKeyboard\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_keyboardDetector_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../common/keyboardDetector.dev */ \"./dev-javascripts/common/keyboardDetector.dev.js\"));\n    checkKeyboard(onKeyboard, offKeyboard);\n    IS_INIT_MAIN_LAYOUT_MODULE = true;\n  }\n})();\n\nasync function updateGlobalLoginUserData() {\n  try {\n    let response = await fetch(`/user/data/login-user`);\n    if (!response.ok) throw Error(\"Server Error In Accessing Login User, Please Refresh Your Page\");\n    let data = await response.json();\n\n    if (data.isSuccess) {\n      loginUser = data.loginUser;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(data.error, \"error\");\n    }\n  } catch (e) {\n    console.error(e);\n    createMainNotification(\"Server Error In Fetching Login User Data, Please Refresh Your Page\", \"error\");\n  }\n}\nasync function updateGlobalProfileUserData(username) {\n  fetch(`/user/data/profile-user`, {\n    method: \"POST\",\n    // or 'PUT'\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      username: username\n    })\n  }).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      profileUser = data.profileUser;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Server Error In Fetching Profile User, Please Refresh Your Page\", \"error\");\n  });\n}\nasync function updateGlobalAllChatData() {\n  fetch(`/chat/data/all-chat`).then(response => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return Promise.reject(response);\n  }).then(async data => {\n    if (data.isSuccess) {\n      allChatData = data.allChatData;\n    } else {\n      let {\n        createMainNotification\n      } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n    }\n  }).catch(async err => {\n    console.error(err);\n    let {\n      createMainNotification\n    } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n    createMainNotification(\"Error In Fetching All Chat Data, Please Refresh Your Page:\", \"error\");\n  });\n}\nasync function updateGlobalIsLogin() {\n  try {\n    let response = await fetch(`/user/check/login-status`);\n    if (!response.ok) throw Error(\"server error\");\n    let data = await response.json();\n\n    if (data.isLogin) {\n      isLogin = true;\n    } else {\n      isLogin = false;\n    }\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nfunction onKeyboard(height) {\n  const mainNavContainer = document.getElementById(\"mainNavContainer\");\n\n  if (!mainNavContainer.classList.contains(\"hide\")) {\n    mainNavContainer.classList.add(\"hide\");\n  }\n}\n\nfunction offKeyboard() {\n  const mainNavContainer = document.getElementById(\"mainNavContainer\");\n\n  if (mainNavContainer.classList.contains(\"hide\")) {\n    mainNavContainer.classList.remove(\"hide\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvbGF5b3V0L21haW5MYXlvdXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLE1BQXBCLEdBQTZCQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsSUFBbEQ7QUFDQUQsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNO0VBQ3RDTixRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsTUFBcEIsR0FBNkJDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixJQUFsRDtBQUNELENBRkQ7O0FBR0MsQ0FBQyxrQkFBa0I7RUFDbEJMLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxNQUFwQixHQUE2QkMsTUFBTSxDQUFDQyxXQUFwQzs7RUFDQSxJQUFJLENBQUNFLDBCQUFMLEVBQWlDO0lBQy9CLE1BQU1DLG1CQUFtQixFQUF6Qjs7SUFDQSxJQUFJQyxPQUFKLEVBQWE7TUFDWCxNQUFNQyx5QkFBeUIsRUFBL0I7SUFDRDs7SUFFRCxJQUFJQyxRQUFRLEtBQUssU0FBakIsRUFBNEI7TUFDMUIsSUFBSUMsZ0JBQUosRUFBc0JDLDJCQUEyQixDQUFDRCxnQkFBRCxDQUEzQjtJQUN2Qjs7SUFFRCxJQUFJRCxRQUFRLEtBQUssTUFBakIsRUFBeUI7TUFDdkJHLHVCQUF1QjtJQUN4QixDQVo4QixDQWMvQjs7O0lBQ0EsTUFBTTtNQUFFQztJQUFGLElBQW9CLE1BQU0scU9BQWhDO0lBRUFBLGFBQWEsQ0FBQ0MsVUFBRCxFQUFhQyxXQUFiLENBQWI7SUFFQVYsMEJBQTBCLEdBQUcsSUFBN0I7RUFDRDtBQUNGLENBdkJBOztBQXlCTSxlQUFlRyx5QkFBZixHQUEyQztFQUNoRCxJQUFJO0lBQ0YsSUFBSVEsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSx1QkFBRixDQUExQjtJQUNBLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxFQUFkLEVBQ0UsTUFB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RixDQUExQjtJQUNBLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxFQUFkLEVBQWtCLE1BQU1DLEtBQUssQ0FBQyxjQUFELENBQVg7SUFDbEIsSUFBSUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBVCxFQUFqQjs7SUFDQSxJQUFJRCxJQUFJLENBQUNiLE9BQVQsRUFBa0I7TUFDaEJBLE9BQU8sR0FBRyxJQUFWO0lBQ0QsQ0FGRCxNQUVPO01BQ0xBLE9BQU8sR0FBRyxLQUFWO0lBQ0Q7RUFDRixDQVRELENBU0UsT0FBT21CLENBQVAsRUFBVTtJQUNWQyxPQUFPLENBQUNGLEtBQVIsQ0FBY0MsQ0FBZDtFQUNEO0FBQ0Y7O0FBRUQsU0FBU1osVUFBVCxDQUFvQmIsTUFBcEIsRUFBNEI7RUFDMUIsTUFBTXVDLGdCQUFnQixHQUFHMUMsUUFBUSxDQUFDMkMsY0FBVCxDQUF3QixrQkFBeEIsQ0FBekI7O0VBQ0EsSUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQ0UsU0FBakIsQ0FBMkJDLFFBQTNCLENBQW9DLE1BQXBDLENBQUwsRUFBa0Q7SUFDaERILGdCQUFnQixDQUFDRSxTQUFqQixDQUEyQkUsR0FBM0IsQ0FBK0IsTUFBL0I7RUFDRDtBQUNGOztBQUNELFNBQVM3QixXQUFULEdBQXVCO0VBQ3JCLE1BQU15QixnQkFBZ0IsR0FBRzFDLFFBQVEsQ0FBQzJDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXpCOztFQUNBLElBQUlELGdCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsUUFBM0IsQ0FBb0MsTUFBcEMsQ0FBSixFQUFpRDtJQUMvQ0gsZ0JBQWdCLENBQUNFLFNBQWpCLENBQTJCRyxNQUEzQixDQUFrQyxNQUFsQztFQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9sYXlvdXQvbWFpbkxheW91dC5kZXYuanM/MjFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIlxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCJcclxufSlcclxuOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICBpZiAoIUlTX0lOSVRfTUFJTl9MQVlPVVRfTU9EVUxFKSB7XHJcbiAgICBhd2FpdCB1cGRhdGVHbG9iYWxJc0xvZ2luKClcclxuICAgIGlmIChpc0xvZ2luKSB7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZUdsb2JhbExvZ2luVXNlckRhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJwcm9maWxlXCIpIHtcclxuICAgICAgaWYgKFBST0ZJTEVfVVNFUk5BTUUpIHVwZGF0ZUdsb2JhbFByb2ZpbGVVc2VyRGF0YShQUk9GSUxFX1VTRVJOQU1FKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJjaGF0XCIpIHtcclxuICAgICAgdXBkYXRlR2xvYmFsQWxsQ2hhdERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGhhbmRsZSBrZXlib2FyZCBmb3IgbWFpbiBuYXZpZ2F0aW9uXHJcbiAgICBjb25zdCB7IGNoZWNrS2V5Ym9hcmQgfSA9IGF3YWl0IGltcG9ydChcIi4uL2NvbW1vbi9rZXlib2FyZERldGVjdG9yLmRldlwiKVxyXG5cclxuICAgIGNoZWNrS2V5Ym9hcmQob25LZXlib2FyZCwgb2ZmS2V5Ym9hcmQpXHJcblxyXG4gICAgSVNfSU5JVF9NQUlOX0xBWU9VVF9NT0RVTEUgPSB0cnVlXHJcbiAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2xvYmFsTG9naW5Vc2VyRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC91c2VyL2RhdGEvbG9naW4tdXNlcmApXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKVxyXG4gICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICBcIlNlcnZlciBFcnJvciBJbiBBY2Nlc3NpbmcgTG9naW4gVXNlciwgUGxlYXNlIFJlZnJlc2ggWW91ciBQYWdlXCJcclxuICAgICAgKVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGlmIChkYXRhLmlzU3VjY2Vzcykge1xyXG4gICAgICBsb2dpblVzZXIgPSBkYXRhLmxvZ2luVXNlclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKGRhdGEuZXJyb3IsIFwiZXJyb3JcIilcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICBcIlNlcnZlciBFcnJvciBJbiBGZXRjaGluZyBMb2dpbiBVc2VyIERhdGEsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZVwiLFxyXG4gICAgICBcImVycm9yXCJcclxuICAgIClcclxuICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbFByb2ZpbGVVc2VyRGF0YSh1c2VybmFtZSkge1xyXG4gIGZldGNoKGAvdXNlci9kYXRhL3Byb2ZpbGUtdXNlcmAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIG9yICdQVVQnXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogdXNlcm5hbWUgfSlcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfSlcclxuICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICBwcm9maWxlVXNlciA9IGRhdGEucHJvZmlsZVVzZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgeyBjcmVhdGVNYWluTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgICBcIlNlcnZlciBFcnJvciBJbiBGZXRjaGluZyBQcm9maWxlIFVzZXIsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZVwiLFxyXG4gICAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGFzeW5jIGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICBsZXQgeyBjcmVhdGVNYWluTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gRmV0Y2hpbmcgUHJvZmlsZSBVc2VyLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2xvYmFsQWxsQ2hhdERhdGEoKSB7XHJcbiAgZmV0Y2goYC9jaGF0L2RhdGEvYWxsLWNoYXRgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfSlcclxuICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICBhbGxDaGF0RGF0YSA9IGRhdGEuYWxsQ2hhdERhdGFcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgeyBjcmVhdGVNYWluTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgICBcIkVycm9yIEluIEZldGNoaW5nIEFsbCBDaGF0IERhdGEsIFBsZWFzZSBSZWZyZXNoIFlvdXIgUGFnZTpcIixcclxuICAgICAgICAgIFwiZXJyb3JcIlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChhc3luYyBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgIFwiRXJyb3IgSW4gRmV0Y2hpbmcgQWxsIENoYXQgRGF0YSwgUGxlYXNlIFJlZnJlc2ggWW91ciBQYWdlOlwiLFxyXG4gICAgICAgIFwiZXJyb3JcIlxyXG4gICAgICApXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHbG9iYWxJc0xvZ2luKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL3VzZXIvY2hlY2svbG9naW4tc3RhdHVzYClcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IEVycm9yKFwic2VydmVyIGVycm9yXCIpXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgaWYgKGRhdGEuaXNMb2dpbikge1xyXG4gICAgICBpc0xvZ2luID0gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNMb2dpbiA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25LZXlib2FyZChoZWlnaHQpIHtcclxuICBjb25zdCBtYWluTmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluTmF2Q29udGFpbmVyXCIpXHJcbiAgaWYgKCFtYWluTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgIG1haW5OYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gb2ZmS2V5Ym9hcmQoKSB7XHJcbiAgY29uc3QgbWFpbk5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbk5hdkNvbnRhaW5lclwiKVxyXG4gIGlmIChtYWluTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgIG1haW5OYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiSVNfSU5JVF9NQUlOX0xBWU9VVF9NT0RVTEUiLCJ1cGRhdGVHbG9iYWxJc0xvZ2luIiwiaXNMb2dpbiIsInVwZGF0ZUdsb2JhbExvZ2luVXNlckRhdGEiLCJwYWdlTmFtZSIsIlBST0ZJTEVfVVNFUk5BTUUiLCJ1cGRhdGVHbG9iYWxQcm9maWxlVXNlckRhdGEiLCJ1cGRhdGVHbG9iYWxBbGxDaGF0RGF0YSIsImNoZWNrS2V5Ym9hcmQiLCJvbktleWJvYXJkIiwib2ZmS2V5Ym9hcmQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiaXNTdWNjZXNzIiwibG9naW5Vc2VyIiwiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJ1c2VybmFtZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsIlByb21pc2UiLCJyZWplY3QiLCJwcm9maWxlVXNlciIsImNhdGNoIiwiZXJyIiwiYWxsQ2hhdERhdGEiLCJtYWluTmF2Q29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/layout/mainLayout.dev.js\n");

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