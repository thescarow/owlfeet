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

/***/ "./dev-javascripts/call/call.dev.js":
/*!******************************************!*\
  !*** ./dev-javascripts/call/call.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCallAudioTrack\": () => (/* binding */ getCallAudioTrack),\n/* harmony export */   \"getCameraVideoTrack\": () => (/* binding */ getCameraVideoTrack),\n/* harmony export */   \"getScreenShareVideoTrack\": () => (/* binding */ getScreenShareVideoTrack)\n/* harmony export */ });\nlet svg_callPermissionLockIcon = `\n<svg width=\"80\" height=\"100\" viewBox=\"0 0 80 100\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z\" />\n</svg>\n`;\nlet myMediaStream = null;\nlet isScreenShareOn = false;\nlet isCameraOn = false;\nlet isAudioOn = false;\n\n(async function () {\n  if (!IS_INIT_CALL_MODULE) {\n    let data = await createMediaStream();\n\n    if (data.isSuccess) {\n      myMediaStream = data.stream;\n      let {\n        createCalltypeInfoContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      createCalltypeInfoContainer(myMediaStream);\n    } else {\n      console.log(\"error message: \", data.error);\n      let {\n        showCalltypeMessage\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      showCalltypeMessage(data.problem, data.solution);\n    }\n\n    let roomInfoContainer = document.getElementById(\"roomInfoContainer\");\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"join\") {\n      let {\n        joinCallRoom\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_joinCallRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/joinCallRoom.dev */ \"./dev-javascripts/call/js/joinCallRoom.dev.js\"));\n      joinCallRoom(myMediaStream, isCameraOn, isScreenShareOn, isAudioOn);\n    }\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"create\") {\n      let creatingRoomInfo = document.getElementById(\"creatingRoomInfo\");\n\n      if (creatingRoomInfo) {\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"chat\") {\n          let {\n            createChatRoom\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_createChatRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createChatRoom.dev */ \"./dev-javascripts/call/js/createChatRoom.dev.js\"));\n          createChatRoom(myMediaStream);\n        }\n\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"new\") {\n          let {\n            createNewRoom\n          } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_lodash_throttle_index_js-node_modules_namespace-emitter_index_js-node_mo-fa5147\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_aws-s3-multipart_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_dist_style_css\"), __webpack_require__.e(\"dev-javascripts_call_js_createNewRoom_dev_js-node_modules_css-loader_dist_runtime_api_js-node-08459b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/createNewRoom.dev */ \"./dev-javascripts/call/js/createNewRoom.dev.js\"));\n          createNewRoom(myMediaStream);\n        }\n      }\n    }\n\n    IS_INIT_CALL_MODULE = true;\n  }\n})();\n\nfunction initialiseEventForCallModule() {}\n\nasync function createMediaStream() {\n  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n    console.log(\"Camera and microphone access is supported\");\n\n    try {\n      let stream = await navigator.mediaDevices.getUserMedia({\n        video: {\n          aspectRatio: 4 / 3\n        },\n        audio: {\n          echoCancellation: true\n        }\n      });\n      return {\n        isSuccess: true,\n        stream: stream\n      };\n    } catch (err) {\n      console.log(\"error in accessing camera and mic:\", err.message);\n\n      try {\n        let stream = await navigator.mediaDevices.getUserMedia({\n          video: true,\n          audio: true\n        });\n        return {\n          isSuccess: true,\n          stream: stream\n        };\n      } catch (err) {\n        if (e.message === \"Permission dismissed\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        } else if (e.message === \"Permission denied\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, click\n          the <span>lock icon</span> ${svg_callPermissionLockIcon} in the\n          address bar. Select the <span>Allow</span> option for <span>Camera</span> and\n          <span>Microphone</span>. Then reload the page\n          for the new settings to take effect.`\n          };\n        } else {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        }\n      }\n    }\n  } else {\n    console.warn(\"Camera and microphone access is not supported\");\n    return {\n      isSuccess: false,\n      error: \"Camera and microphone access is not supported\",\n      problem: \"Your browser does not support microphone and camera access\",\n      solution: `please upgrade your browser version or switch to <span>Chrome</span> latest version`\n    };\n  }\n}\n\nasync function getCallAudioTrack() {\n  try {\n    let callAudioTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      audio: {\n        echoCancellation: true\n      }\n    });\n    callAudioTrack = stream.getAudioTracks()[0];\n    return callAudioTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your mic:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getCameraVideoTrack() {\n  try {\n    let cameraVideoTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      video: {\n        aspectRatio: 4 / 3\n      }\n    });\n    cameraVideoTrack = stream.getVideoTracks()[0];\n    return cameraVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your camera:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getScreenShareVideoTrack() {\n  try {\n    let screenShareVideoTrack;\n    let stream = await navigator.mediaDevices.getDisplayMedia({\n      video: true\n    });\n    screenShareVideoTrack = stream.getVideoTracks()[0];\n    return screenShareVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your screen:\", e.message, \"error.name:\", e.name);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLElBQUl2QyxNQUFNLEdBQUcsTUFBTW9CLFNBQVMsQ0FBQ0MsWUFBVixDQUF1Qm1CLGVBQXZCLENBQXVDO01BQ3hEakIsS0FBSyxFQUFFO0lBRGlELENBQXZDLENBQW5CO0lBR0FnQixxQkFBcUIsR0FBR3ZDLE1BQU0sQ0FBQ3FDLGNBQVAsR0FBd0IsQ0FBeEIsQ0FBeEI7SUFDQSxPQUFPRSxxQkFBUDtFQUNELENBUEQsQ0FPRSxPQUFPVixDQUFQLEVBQVU7SUFDVjNCLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLGlDQURGLEVBRUUwQixDQUFDLENBQUNELE9BRkosRUFHRSxhQUhGLEVBSUVDLENBQUMsQ0FBQ0ssSUFKSjtFQU1EO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9jYWxsL2NhbGwuZGV2LmpzP2Q3ZmQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHN2Z19jYWxsUGVybWlzc2lvbkxvY2tJY29uID0gYFxyXG48c3ZnIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDgwIDEwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk03My4xNDI5IDM4Ljg4ODlINjIuODU3MVYyNS41NTU2QzYyLjg1NzEgOS40NjExMSA1NS4yMjg2IDAgNDAgMEMyNC43NjU3IDAgMTcuMTQyOSA5LjQ2MTExIDE3LjE0MjkgMjUuNTU1NlYzOC44ODg5SDUuNzE0MjlDMi41NTQyOSAzOC44ODg5IDAgNDIuNDc3OCAwIDQ1LjU1Vjg4Ljg4ODlDMCA5MS45Mzg5IDIuNDQ1NzEgOTUuMjE2NyA1LjQzNDI5IDk2LjE1TDEyLjI3NDMgOTguM0MxNS45MDIzIDk5LjMyODIgMTkuNjUxIDk5Ljg5OTUgMjMuNDI4NiAxMDBINTYuNTcxNEM2MC4zNDc2IDk5LjkwMDMgNjQuMDk0OCA5OS4zMjcxIDY3LjcyIDk4LjI5NDRMNzQuNTU0MyA5Ni4xNDQ0Qzc3LjU0ODYgOTUuMjE2NyA4MCA5MS45Mzg5IDgwIDg4Ljg4ODlWNDUuNTVDODAgNDIuNDc3OCA3Ni4yOTcxIDM4Ljg4ODkgNzMuMTQyOSAzOC44ODg5Wk01MS40Mjg2IDM4Ljg4ODlIMjguNTcxNFYyMy4zMjc4QzI4LjU3MTQgMTUuMyAzMy4xMjU3IDExLjExMTEgNDAgMTEuMTExMUM0Ni44NzQzIDExLjExMTEgNTEuNDI4NiAxNS4zIDUxLjQyODYgMjMuMzI3OFYzOC44ODg5WlwiIC8+XHJcbjwvc3ZnPlxyXG5gXHJcblxyXG5sZXQgbXlNZWRpYVN0cmVhbSA9IG51bGxcclxubGV0IGlzU2NyZWVuU2hhcmVPbiA9IGZhbHNlXHJcbmxldCBpc0NhbWVyYU9uID0gZmFsc2VcclxubGV0IGlzQXVkaW9PbiA9IGZhbHNlXHJcblxyXG47KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIUlTX0lOSVRfQ0FMTF9NT0RVTEUpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgY3JlYXRlTWVkaWFTdHJlYW0oKVxyXG4gICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgIG15TWVkaWFTdHJlYW0gPSBkYXRhLnN0cmVhbVxyXG4gICAgICBsZXQgeyBjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4vanMvY2FsbHR5cGVJbmZvQ29udGFpbmVyLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlQ2FsbHR5cGVJbmZvQ29udGFpbmVyKG15TWVkaWFTdHJlYW0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIG1lc3NhZ2U6IFwiLCBkYXRhLmVycm9yKVxyXG4gICAgICBsZXQgeyBzaG93Q2FsbHR5cGVNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2pzL2NhbGx0eXBlSW5mb0NvbnRhaW5lci5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIHNob3dDYWxsdHlwZU1lc3NhZ2UoZGF0YS5wcm9ibGVtLCBkYXRhLnNvbHV0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByb29tSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbUluZm9Db250YWluZXJcIilcclxuXHJcbiAgICBpZiAocm9vbUluZm9Db250YWluZXIuZGF0YXNldC5jYWxsUm9vbVR5cGUudHJpbSgpID09PSBcImpvaW5cIikge1xyXG4gICAgICBsZXQgeyBqb2luQ2FsbFJvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvam9pbkNhbGxSb29tLmRldlwiKVxyXG4gICAgICBqb2luQ2FsbFJvb20obXlNZWRpYVN0cmVhbSwgaXNDYW1lcmFPbiwgaXNTY3JlZW5TaGFyZU9uLCBpc0F1ZGlvT24pXHJcbiAgICB9XHJcbiAgICBpZiAocm9vbUluZm9Db250YWluZXIuZGF0YXNldC5jYWxsUm9vbVR5cGUudHJpbSgpID09PSBcImNyZWF0ZVwiKSB7XHJcbiAgICAgIGxldCBjcmVhdGluZ1Jvb21JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGluZ1Jvb21JbmZvXCIpXHJcbiAgICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvKSB7XHJcbiAgICAgICAgaWYgKGNyZWF0aW5nUm9vbUluZm8uZGF0YXNldC5jcmVhdGluZ0NhbGxSb29tLnRyaW0oKSA9PT0gXCJjaGF0XCIpIHtcclxuICAgICAgICAgIGxldCB7IGNyZWF0ZUNoYXRSb29tIH0gPSBhd2FpdCBpbXBvcnQoXCIuL2pzL2NyZWF0ZUNoYXRSb29tLmRldlwiKVxyXG4gICAgICAgICAgY3JlYXRlQ2hhdFJvb20obXlNZWRpYVN0cmVhbSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNyZWF0aW5nUm9vbUluZm8uZGF0YXNldC5jcmVhdGluZ0NhbGxSb29tLnRyaW0oKSA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IHsgY3JlYXRlTmV3Um9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9jcmVhdGVOZXdSb29tLmRldlwiKVxyXG4gICAgICAgICAgY3JlYXRlTmV3Um9vbShteU1lZGlhU3RyZWFtKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIElTX0lOSVRfQ0FMTF9NT0RVTEUgPSB0cnVlXHJcbiAgfVxyXG59KSgpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlRXZlbnRGb3JDYWxsTW9kdWxlKCkge31cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtKCkge1xyXG4gIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBhbmQgbWljcm9waG9uZSBhY2Nlc3MgaXMgc3VwcG9ydGVkXCIpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICB2aWRlbzogeyBhc3BlY3RSYXRpbzogNCAvIDMgfSxcclxuICAgICAgICBhdWRpbzoge1xyXG4gICAgICAgICAgZWNob0NhbmNlbGxhdGlvbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpc1N1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgc3RyZWFtOiBzdHJlYW1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gYWNjZXNzaW5nIGNhbWVyYSBhbmQgbWljOlwiLCBlcnIubWVzc2FnZSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgIHZpZGVvOiB0cnVlLFxyXG4gICAgICAgICAgYXVkaW86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc1N1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICBzdHJlYW06IHN0cmVhbVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgaWYgKGUubWVzc2FnZSA9PT0gXCJQZXJtaXNzaW9uIGRpc21pc3NlZFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc1N1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHByb2JsZW06IFwiWW91J3ZlIGJsb2NrZWQgYWNjZXNzIHRvIHlvdXIgY2FtZXJhIGFuZCBtaWNyb3Bob25lXCIsXHJcbiAgICAgICAgICAgIHNvbHV0aW9uOiBgVG8gYWxsb3cgYWNjZXNzLCBQbGVhc2UgPHNwYW4+cmVsb2FkPC9zcGFuPiB5b3VyIHBhZ2UgYW5kIGdpdmUgcGVybWlzc2lvbiB0byB5b3VyIDxzcGFuPmNhbWVyYTwvc3Bhbj4gYW5kIDxzcGFuPm1pY3JvcGhvbmU8L3NwYW4+YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5tZXNzYWdlID09PSBcIlBlcm1pc3Npb24gZGVuaWVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzU3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgICAgcHJvYmxlbTogXCJZb3UndmUgYmxvY2tlZCBhY2Nlc3MgdG8geW91ciBjYW1lcmEgYW5kIG1pY3JvcGhvbmVcIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBUbyBhbGxvdyBhY2Nlc3MsIGNsaWNrXHJcbiAgICAgICAgICB0aGUgPHNwYW4+bG9jayBpY29uPC9zcGFuPiAke3N2Z19jYWxsUGVybWlzc2lvbkxvY2tJY29ufSBpbiB0aGVcclxuICAgICAgICAgIGFkZHJlc3MgYmFyLiBTZWxlY3QgdGhlIDxzcGFuPkFsbG93PC9zcGFuPiBvcHRpb24gZm9yIDxzcGFuPkNhbWVyYTwvc3Bhbj4gYW5kXHJcbiAgICAgICAgICA8c3Bhbj5NaWNyb3Bob25lPC9zcGFuPi4gVGhlbiByZWxvYWQgdGhlIHBhZ2VcclxuICAgICAgICAgIGZvciB0aGUgbmV3IHNldHRpbmdzIHRvIHRha2UgZWZmZWN0LmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm9ibGVtOiBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYFlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBvciA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPiBpcyBidXN5IGluIDxzcGFuPmFub3RoZXIgYXBwPC9zcGFuPiBvciB0aGVyZSBpcyA8c3Bhbj5wcm9ibGVtPC9zcGFuPiB3aXRoIDxzcGFuPmNhbWVyYTwvc3Bhbj4gb3IgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj4sIFBsZWFzZSA8c3Bhbj5yZWxvYWQ8L3NwYW4+IHlvdXIgcGFnZSBhbmQgZ2l2ZSBwZXJtaXNzaW9uIHRvIHlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBhbmQgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNhbWVyYSBhbmQgbWljcm9waG9uZSBhY2Nlc3MgaXMgbm90IHN1cHBvcnRlZFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiQ2FtZXJhIGFuZCBtaWNyb3Bob25lIGFjY2VzcyBpcyBub3Qgc3VwcG9ydGVkXCIsXHJcbiAgICAgIHByb2JsZW06IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgbWljcm9waG9uZSBhbmQgY2FtZXJhIGFjY2Vzc1wiLFxyXG4gICAgICBzb2x1dGlvbjogYHBsZWFzZSB1cGdyYWRlIHlvdXIgYnJvd3NlciB2ZXJzaW9uIG9yIHN3aXRjaCB0byA8c3Bhbj5DaHJvbWU8L3NwYW4+IGxhdGVzdCB2ZXJzaW9uYFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FsbEF1ZGlvVHJhY2soKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjYWxsQXVkaW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgYXVkaW86IHtcclxuICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjYWxsQXVkaW9UcmFjayA9IHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gY2FsbEF1ZGlvVHJhY2tcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJFcnJvciBpbiBhY2Nlc3NpbmcgeW91ciBtaWM6XCIsXHJcbiAgICAgIGUubWVzc2FnZSxcclxuICAgICAgXCJlcnJvci5uYW1lOlwiLFxyXG4gICAgICBlLm5hbWVcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW1lcmFWaWRlb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY2FtZXJhVmlkZW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgdmlkZW86IHsgYXNwZWN0UmF0aW86IDQgLyAzIH1cclxuICAgIH0pXHJcbiAgICBjYW1lcmFWaWRlb1RyYWNrID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF1cclxuICAgIHJldHVybiBjYW1lcmFWaWRlb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgY2FtZXJhOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NyZWVuU2hhcmVWaWRlb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgc2NyZWVuU2hhcmVWaWRlb1RyYWNrXHJcbiAgICBsZXQgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoe1xyXG4gICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHNjcmVlblNoYXJlVmlkZW9UcmFjayA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gc2NyZWVuU2hhcmVWaWRlb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgc2NyZWVuOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdmdfY2FsbFBlcm1pc3Npb25Mb2NrSWNvbiIsIm15TWVkaWFTdHJlYW0iLCJpc1NjcmVlblNoYXJlT24iLCJpc0NhbWVyYU9uIiwiaXNBdWRpb09uIiwiSVNfSU5JVF9DQUxMX01PRFVMRSIsImRhdGEiLCJjcmVhdGVNZWRpYVN0cmVhbSIsImlzU3VjY2VzcyIsInN0cmVhbSIsImNyZWF0ZUNhbGx0eXBlSW5mb0NvbnRhaW5lciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNob3dDYWxsdHlwZU1lc3NhZ2UiLCJwcm9ibGVtIiwic29sdXRpb24iLCJyb29tSW5mb0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0IiwiY2FsbFJvb21UeXBlIiwidHJpbSIsImpvaW5DYWxsUm9vbSIsImNyZWF0aW5nUm9vbUluZm8iLCJjcmVhdGluZ0NhbGxSb29tIiwiY3JlYXRlQ2hhdFJvb20iLCJjcmVhdGVOZXdSb29tIiwiaW5pdGlhbGlzZUV2ZW50Rm9yQ2FsbE1vZHVsZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiYXNwZWN0UmF0aW8iLCJhdWRpbyIsImVjaG9DYW5jZWxsYXRpb24iLCJlcnIiLCJtZXNzYWdlIiwiZSIsIndhcm4iLCJnZXRDYWxsQXVkaW9UcmFjayIsImNhbGxBdWRpb1RyYWNrIiwiZ2V0QXVkaW9UcmFja3MiLCJuYW1lIiwiZ2V0Q2FtZXJhVmlkZW9UcmFjayIsImNhbWVyYVZpZGVvVHJhY2siLCJnZXRWaWRlb1RyYWNrcyIsImdldFNjcmVlblNoYXJlVmlkZW9UcmFjayIsInNjcmVlblNoYXJlVmlkZW9UcmFjayIsImdldERpc3BsYXlNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/call/call.dev.js\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"call": 0
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-javascripts/call/call.dev.js");
/******/ 	
/******/ })()
;