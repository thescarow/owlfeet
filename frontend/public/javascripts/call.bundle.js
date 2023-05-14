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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCallAudioTrack\": () => (/* binding */ getCallAudioTrack),\n/* harmony export */   \"getCameraVideoTrack\": () => (/* binding */ getCameraVideoTrack),\n/* harmony export */   \"getScreenShareVideoTrack\": () => (/* binding */ getScreenShareVideoTrack)\n/* harmony export */ });\nlet svg_callPermissionLockIcon = `\n<svg width=\"80\" height=\"100\" viewBox=\"0 0 80 100\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z\" />\n</svg>\n`;\nlet myMediaStream = null;\nlet myStreamTypeData = {\n  isScreenShareOn: false,\n  isCameraOn: false,\n  isAudioOn: false\n};\n\n(async function () {\n  if (!IS_INIT_CALL_MODULE) {\n    let data = await createMediaStream();\n\n    if (data.isSuccess) {\n      myMediaStream = data.stream;\n      myStreamTypeData.isScreenShareOn = false;\n      myStreamTypeData.isCameraOn = data.isCameraOn;\n      myStreamTypeData.isAudioOn = data.isAudioOn;\n      let {\n        createCalltypeInfoContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      createCalltypeInfoContainer(myMediaStream, myStreamTypeData);\n    } else {\n      console.log(\"error message: \", data.error);\n      let {\n        showCalltypeMessage\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      showCalltypeMessage(data.problem, data.solution);\n    }\n\n    let roomInfoContainer = document.getElementById(\"roomInfoContainer\");\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"join\") {\n      let {\n        joinCallRoom\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_joinCallRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/joinCallRoom.dev */ \"./dev-javascripts/call/js/joinCallRoom.dev.js\"));\n      joinCallRoom(myMediaStream, myStreamTypeData);\n    }\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"create\") {\n      let creatingRoomInfo = document.getElementById(\"creatingRoomInfo\");\n\n      if (creatingRoomInfo) {\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"chat\") {\n          let {\n            createChatRoom\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_createChatRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createChatRoom.dev */ \"./dev-javascripts/call/js/createChatRoom.dev.js\"));\n          createChatRoom(myMediaStream, myStreamTypeData);\n        }\n\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"new\") {\n          let {\n            createNewRoom\n          } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_lodash_throttle_index_js-node_modules_namespace-emitter_index_js-node_mo-fa5147\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_aws-s3-multipart_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_dist_style_css\"), __webpack_require__.e(\"dev-javascripts_call_js_createNewRoom_dev_js-node_modules_css-loader_dist_runtime_api_js-node-08459b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/createNewRoom.dev */ \"./dev-javascripts/call/js/createNewRoom.dev.js\"));\n          createNewRoom(myMediaStream, myStreamTypeData);\n        }\n      }\n    }\n\n    IS_INIT_CALL_MODULE = true;\n  }\n})();\n\nfunction initialiseEventForCallModule() {}\n\nasync function createMediaStream() {\n  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n    console.log(\"Camera and microphone access is supported\");\n\n    try {\n      let stream = await navigator.mediaDevices.getUserMedia({\n        video: {\n          aspectRatio: 4 / 3\n        },\n        audio: {\n          echoCancellation: true\n        }\n      });\n      return {\n        isSuccess: true,\n        stream: stream,\n        isCameraOn: true,\n        isAudioOn: true\n      };\n    } catch (err) {\n      console.log(\"error in accessing camera and mic:\", err.message);\n\n      try {\n        let stream = await navigator.mediaDevices.getUserMedia({\n          video: true,\n          audio: true\n        });\n        return {\n          isSuccess: true,\n          stream: stream,\n          isCameraOn: true,\n          isAudioOn: true\n        };\n      } catch (err) {\n        if (e.message === \"Permission dismissed\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        } else if (e.message === \"Permission denied\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, click\n          the <span>lock icon</span> ${svg_callPermissionLockIcon} in the\n          address bar. Select the <span>Allow</span> option for <span>Camera</span> and\n          <span>Microphone</span>. Then reload the page\n          for the new settings to take effect.`\n          };\n        } else {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        }\n      }\n    }\n  } else {\n    console.warn(\"Camera and microphone access is not supported\");\n    return {\n      isSuccess: false,\n      error: \"Camera and microphone access is not supported\",\n      problem: \"Your browser does not support microphone and camera access\",\n      solution: `please upgrade your browser version or switch to <span>Chrome</span> latest version`\n    };\n  }\n}\n\nasync function getCallAudioTrack() {\n  try {\n    let callAudioTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      audio: {\n        echoCancellation: true\n      }\n    });\n    callAudioTrack = stream.getAudioTracks()[0];\n    return callAudioTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your mic:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getCameraVideoTrack() {\n  try {\n    let cameraVideoTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      video: {\n        aspectRatio: 4 / 3\n      }\n    });\n    cameraVideoTrack = stream.getVideoTracks()[0];\n    return cameraVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your camera:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getScreenShareVideoTrack() {\n  try {\n    let screenShareVideoTrack;\n    let stream = await navigator.mediaDevices.getDisplayMedia({\n      video: true\n    });\n    screenShareVideoTrack = stream.getVideoTracks()[0];\n    return screenShareVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your screen:\", e.message, \"error.name:\", e.name);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksZ0JBQWdCLEdBQUdwQyxNQUFNLENBQUNxQyxjQUFQLEdBQXdCLENBQXhCLENBQW5CO0lBQ0EsT0FBT0QsZ0JBQVA7RUFDRCxDQVBELENBT0UsT0FBT1AsQ0FBUCxFQUFVO0lBQ1YzQixPQUFPLENBQUNDLEdBQVIsQ0FDRSxpQ0FERixFQUVFMEIsQ0FBQyxDQUFDRCxPQUZKLEVBR0UsYUFIRixFQUlFQyxDQUFDLENBQUNLLElBSko7RUFNRDtBQUNGO0FBRU0sZUFBZUksd0JBQWYsR0FBMEM7RUFDL0MsSUFBSTtJQUNGLElBQUlDLHFCQUFKO0lBQ0EsSUFBSXZDLE1BQU0sR0FBRyxNQUFNb0IsU0FBUyxDQUFDQyxZQUFWLENBQXVCbUIsZUFBdkIsQ0FBdUM7TUFDeERqQixLQUFLLEVBQUU7SUFEaUQsQ0FBdkMsQ0FBbkI7SUFHQWdCLHFCQUFxQixHQUFHdkMsTUFBTSxDQUFDcUMsY0FBUCxHQUF3QixDQUF4QixDQUF4QjtJQUNBLE9BQU9FLHFCQUFQO0VBQ0QsQ0FQRCxDQU9FLE9BQU9WLENBQVAsRUFBVTtJQUNWM0IsT0FBTyxDQUFDQyxHQUFSLENBQ0UsaUNBREYsRUFFRTBCLENBQUMsQ0FBQ0QsT0FGSixFQUdFLGFBSEYsRUFJRUMsQ0FBQyxDQUFDSyxJQUpKO0VBTUQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2NhbGwvY2FsbC5kZXYuanM/ZDdmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3ZnX2NhbGxQZXJtaXNzaW9uTG9ja0ljb24gPSBgXHJcbjxzdmcgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgODAgMTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG48cGF0aCBkPVwiTTczLjE0MjkgMzguODg4OUg2Mi44NTcxVjI1LjU1NTZDNjIuODU3MSA5LjQ2MTExIDU1LjIyODYgMCA0MCAwQzI0Ljc2NTcgMCAxNy4xNDI5IDkuNDYxMTEgMTcuMTQyOSAyNS41NTU2VjM4Ljg4ODlINS43MTQyOUMyLjU1NDI5IDM4Ljg4ODkgMCA0Mi40Nzc4IDAgNDUuNTVWODguODg4OUMwIDkxLjkzODkgMi40NDU3MSA5NS4yMTY3IDUuNDM0MjkgOTYuMTVMMTIuMjc0MyA5OC4zQzE1LjkwMjMgOTkuMzI4MiAxOS42NTEgOTkuODk5NSAyMy40Mjg2IDEwMEg1Ni41NzE0QzYwLjM0NzYgOTkuOTAwMyA2NC4wOTQ4IDk5LjMyNzEgNjcuNzIgOTguMjk0NEw3NC41NTQzIDk2LjE0NDRDNzcuNTQ4NiA5NS4yMTY3IDgwIDkxLjkzODkgODAgODguODg4OVY0NS41NUM4MCA0Mi40Nzc4IDc2LjI5NzEgMzguODg4OSA3My4xNDI5IDM4Ljg4ODlaTTUxLjQyODYgMzguODg4OUgyOC41NzE0VjIzLjMyNzhDMjguNTcxNCAxNS4zIDMzLjEyNTcgMTEuMTExMSA0MCAxMS4xMTExQzQ2Ljg3NDMgMTEuMTExMSA1MS40Mjg2IDE1LjMgNTEuNDI4NiAyMy4zMjc4VjM4Ljg4ODlaXCIgLz5cclxuPC9zdmc+XHJcbmBcclxuXHJcbmxldCBteU1lZGlhU3RyZWFtID0gbnVsbFxyXG5sZXQgbXlTdHJlYW1UeXBlRGF0YSA9IHtcclxuICBpc1NjcmVlblNoYXJlT246IGZhbHNlLFxyXG4gIGlzQ2FtZXJhT246IGZhbHNlLFxyXG4gIGlzQXVkaW9PbjogZmFsc2VcclxufVxyXG47KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIUlTX0lOSVRfQ0FMTF9NT0RVTEUpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgY3JlYXRlTWVkaWFTdHJlYW0oKVxyXG4gICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgIG15TWVkaWFTdHJlYW0gPSBkYXRhLnN0cmVhbVxyXG4gICAgICBteVN0cmVhbVR5cGVEYXRhLmlzU2NyZWVuU2hhcmVPbiA9IGZhbHNlXHJcbiAgICAgIG15U3RyZWFtVHlwZURhdGEuaXNDYW1lcmFPbiA9IGRhdGEuaXNDYW1lcmFPblxyXG4gICAgICBteVN0cmVhbVR5cGVEYXRhLmlzQXVkaW9PbiA9IGRhdGEuaXNBdWRpb09uXHJcblxyXG4gICAgICBsZXQgeyBjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4vanMvY2FsbHR5cGVJbmZvQ29udGFpbmVyLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlQ2FsbHR5cGVJbmZvQ29udGFpbmVyKG15TWVkaWFTdHJlYW0sIG15U3RyZWFtVHlwZURhdGEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIG1lc3NhZ2U6IFwiLCBkYXRhLmVycm9yKVxyXG4gICAgICBsZXQgeyBzaG93Q2FsbHR5cGVNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2pzL2NhbGx0eXBlSW5mb0NvbnRhaW5lci5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIHNob3dDYWxsdHlwZU1lc3NhZ2UoZGF0YS5wcm9ibGVtLCBkYXRhLnNvbHV0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByb29tSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbUluZm9Db250YWluZXJcIilcclxuXHJcbiAgICBpZiAocm9vbUluZm9Db250YWluZXIuZGF0YXNldC5jYWxsUm9vbVR5cGUudHJpbSgpID09PSBcImpvaW5cIikge1xyXG4gICAgICBsZXQgeyBqb2luQ2FsbFJvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvam9pbkNhbGxSb29tLmRldlwiKVxyXG4gICAgICBqb2luQ2FsbFJvb20obXlNZWRpYVN0cmVhbSwgbXlTdHJlYW1UeXBlRGF0YSlcclxuICAgIH1cclxuICAgIGlmIChyb29tSW5mb0NvbnRhaW5lci5kYXRhc2V0LmNhbGxSb29tVHlwZS50cmltKCkgPT09IFwiY3JlYXRlXCIpIHtcclxuICAgICAgbGV0IGNyZWF0aW5nUm9vbUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0aW5nUm9vbUluZm9cIilcclxuICAgICAgaWYgKGNyZWF0aW5nUm9vbUluZm8pIHtcclxuICAgICAgICBpZiAoY3JlYXRpbmdSb29tSW5mby5kYXRhc2V0LmNyZWF0aW5nQ2FsbFJvb20udHJpbSgpID09PSBcImNoYXRcIikge1xyXG4gICAgICAgICAgbGV0IHsgY3JlYXRlQ2hhdFJvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvY3JlYXRlQ2hhdFJvb20uZGV2XCIpXHJcbiAgICAgICAgICBjcmVhdGVDaGF0Um9vbShteU1lZGlhU3RyZWFtLCBteVN0cmVhbVR5cGVEYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3JlYXRpbmdSb29tSW5mby5kYXRhc2V0LmNyZWF0aW5nQ2FsbFJvb20udHJpbSgpID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICBsZXQgeyBjcmVhdGVOZXdSb29tIH0gPSBhd2FpdCBpbXBvcnQoXCIuL2pzL2NyZWF0ZU5ld1Jvb20uZGV2XCIpXHJcbiAgICAgICAgICBjcmVhdGVOZXdSb29tKG15TWVkaWFTdHJlYW0sIG15U3RyZWFtVHlwZURhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgSVNfSU5JVF9DQUxMX01PRFVMRSA9IHRydWVcclxuICB9XHJcbn0pKClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUoKSB7fVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW0oKSB7XHJcbiAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGFuZCBtaWNyb3Bob25lIGFjY2VzcyBpcyBzdXBwb3J0ZWRcIilcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgIHZpZGVvOiB7IGFzcGVjdFJhdGlvOiA0IC8gMyB9LFxyXG4gICAgICAgIGF1ZGlvOiB7XHJcbiAgICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzU3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBzdHJlYW06IHN0cmVhbSxcclxuICAgICAgICBpc0NhbWVyYU9uOiB0cnVlLFxyXG4gICAgICAgIGlzQXVkaW9PbjogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiBhY2Nlc3NpbmcgY2FtZXJhIGFuZCBtaWM6XCIsIGVyci5tZXNzYWdlKVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgICBhdWRpbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzU3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgIHN0cmVhbTogc3RyZWFtLFxyXG4gICAgICAgICAgaXNDYW1lcmFPbjogdHJ1ZSxcclxuICAgICAgICAgIGlzQXVkaW9PbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgaWYgKGUubWVzc2FnZSA9PT0gXCJQZXJtaXNzaW9uIGRpc21pc3NlZFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc1N1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHByb2JsZW06IFwiWW91J3ZlIGJsb2NrZWQgYWNjZXNzIHRvIHlvdXIgY2FtZXJhIGFuZCBtaWNyb3Bob25lXCIsXHJcbiAgICAgICAgICAgIHNvbHV0aW9uOiBgVG8gYWxsb3cgYWNjZXNzLCBQbGVhc2UgPHNwYW4+cmVsb2FkPC9zcGFuPiB5b3VyIHBhZ2UgYW5kIGdpdmUgcGVybWlzc2lvbiB0byB5b3VyIDxzcGFuPmNhbWVyYTwvc3Bhbj4gYW5kIDxzcGFuPm1pY3JvcGhvbmU8L3NwYW4+YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5tZXNzYWdlID09PSBcIlBlcm1pc3Npb24gZGVuaWVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzU3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgICAgcHJvYmxlbTogXCJZb3UndmUgYmxvY2tlZCBhY2Nlc3MgdG8geW91ciBjYW1lcmEgYW5kIG1pY3JvcGhvbmVcIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBUbyBhbGxvdyBhY2Nlc3MsIGNsaWNrXHJcbiAgICAgICAgICB0aGUgPHNwYW4+bG9jayBpY29uPC9zcGFuPiAke3N2Z19jYWxsUGVybWlzc2lvbkxvY2tJY29ufSBpbiB0aGVcclxuICAgICAgICAgIGFkZHJlc3MgYmFyLiBTZWxlY3QgdGhlIDxzcGFuPkFsbG93PC9zcGFuPiBvcHRpb24gZm9yIDxzcGFuPkNhbWVyYTwvc3Bhbj4gYW5kXHJcbiAgICAgICAgICA8c3Bhbj5NaWNyb3Bob25lPC9zcGFuPi4gVGhlbiByZWxvYWQgdGhlIHBhZ2VcclxuICAgICAgICAgIGZvciB0aGUgbmV3IHNldHRpbmdzIHRvIHRha2UgZWZmZWN0LmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm9ibGVtOiBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYFlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBvciA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPiBpcyBidXN5IGluIDxzcGFuPmFub3RoZXIgYXBwPC9zcGFuPiBvciB0aGVyZSBpcyA8c3Bhbj5wcm9ibGVtPC9zcGFuPiB3aXRoIDxzcGFuPmNhbWVyYTwvc3Bhbj4gb3IgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj4sIFBsZWFzZSA8c3Bhbj5yZWxvYWQ8L3NwYW4+IHlvdXIgcGFnZSBhbmQgZ2l2ZSBwZXJtaXNzaW9uIHRvIHlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBhbmQgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNhbWVyYSBhbmQgbWljcm9waG9uZSBhY2Nlc3MgaXMgbm90IHN1cHBvcnRlZFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiQ2FtZXJhIGFuZCBtaWNyb3Bob25lIGFjY2VzcyBpcyBub3Qgc3VwcG9ydGVkXCIsXHJcbiAgICAgIHByb2JsZW06IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgbWljcm9waG9uZSBhbmQgY2FtZXJhIGFjY2Vzc1wiLFxyXG4gICAgICBzb2x1dGlvbjogYHBsZWFzZSB1cGdyYWRlIHlvdXIgYnJvd3NlciB2ZXJzaW9uIG9yIHN3aXRjaCB0byA8c3Bhbj5DaHJvbWU8L3NwYW4+IGxhdGVzdCB2ZXJzaW9uYFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FsbEF1ZGlvVHJhY2soKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjYWxsQXVkaW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgYXVkaW86IHtcclxuICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjYWxsQXVkaW9UcmFjayA9IHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gY2FsbEF1ZGlvVHJhY2tcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJFcnJvciBpbiBhY2Nlc3NpbmcgeW91ciBtaWM6XCIsXHJcbiAgICAgIGUubWVzc2FnZSxcclxuICAgICAgXCJlcnJvci5uYW1lOlwiLFxyXG4gICAgICBlLm5hbWVcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW1lcmFWaWRlb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY2FtZXJhVmlkZW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgdmlkZW86IHsgYXNwZWN0UmF0aW86IDQgLyAzIH1cclxuICAgIH0pXHJcbiAgICBjYW1lcmFWaWRlb1RyYWNrID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF1cclxuICAgIHJldHVybiBjYW1lcmFWaWRlb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgY2FtZXJhOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NyZWVuU2hhcmVWaWRlb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgc2NyZWVuU2hhcmVWaWRlb1RyYWNrXHJcbiAgICBsZXQgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoe1xyXG4gICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHNjcmVlblNoYXJlVmlkZW9UcmFjayA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gc2NyZWVuU2hhcmVWaWRlb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgc2NyZWVuOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdmdfY2FsbFBlcm1pc3Npb25Mb2NrSWNvbiIsIm15TWVkaWFTdHJlYW0iLCJteVN0cmVhbVR5cGVEYXRhIiwiaXNTY3JlZW5TaGFyZU9uIiwiaXNDYW1lcmFPbiIsImlzQXVkaW9PbiIsIklTX0lOSVRfQ0FMTF9NT0RVTEUiLCJkYXRhIiwiY3JlYXRlTWVkaWFTdHJlYW0iLCJpc1N1Y2Nlc3MiLCJzdHJlYW0iLCJjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzaG93Q2FsbHR5cGVNZXNzYWdlIiwicHJvYmxlbSIsInNvbHV0aW9uIiwicm9vbUluZm9Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsImNhbGxSb29tVHlwZSIsInRyaW0iLCJqb2luQ2FsbFJvb20iLCJjcmVhdGluZ1Jvb21JbmZvIiwiY3JlYXRpbmdDYWxsUm9vbSIsImNyZWF0ZUNoYXRSb29tIiwiY3JlYXRlTmV3Um9vbSIsImluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImFzcGVjdFJhdGlvIiwiYXVkaW8iLCJlY2hvQ2FuY2VsbGF0aW9uIiwiZXJyIiwibWVzc2FnZSIsImUiLCJ3YXJuIiwiZ2V0Q2FsbEF1ZGlvVHJhY2siLCJjYWxsQXVkaW9UcmFjayIsImdldEF1ZGlvVHJhY2tzIiwibmFtZSIsImdldENhbWVyYVZpZGVvVHJhY2siLCJjYW1lcmFWaWRlb1RyYWNrIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRTY3JlZW5TaGFyZVZpZGVvVHJhY2siLCJzY3JlZW5TaGFyZVZpZGVvVHJhY2siLCJnZXREaXNwbGF5TWVkaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/call/call.dev.js\n");

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