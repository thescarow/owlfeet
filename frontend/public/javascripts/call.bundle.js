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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCallAudioTrack\": () => (/* binding */ getCallAudioTrack),\n/* harmony export */   \"getCameraVideoTrack\": () => (/* binding */ getCameraVideoTrack),\n/* harmony export */   \"getScreenShareVideoTrack\": () => (/* binding */ getScreenShareVideoTrack)\n/* harmony export */ });\nlet svg_callPermissionLockIcon = `\n<svg width=\"80\" height=\"100\" viewBox=\"0 0 80 100\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z\" />\n</svg>\n`;\nlet myMediaStream = null;\nlet myStreamTypeData = {\n  isScreenShareOn: false,\n  isCameraOn: false,\n  isAudioOn: false\n};\n\n(async function () {\n  if (!IS_INIT_CALL_MODULE) {\n    let data = await createMediaStream();\n\n    if (data.isSuccess) {\n      myMediaStream = data.stream;\n      myStreamTypeData.isScreenShareOn = false;\n      myStreamTypeData.isCameraOn = data.isCameraOn;\n      myStreamTypeData.isAudioOn = data.isAudioOn;\n      let {\n        createCalltypeInfoContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      createCalltypeInfoContainer(myMediaStream, myStreamTypeData);\n    } else {\n      console.log(\"error message: \", data.error);\n      let {\n        showCalltypeMessage\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      showCalltypeMessage(data.problem, data.solution);\n    }\n\n    let roomInfoContainer = document.getElementById(\"roomInfoContainer\");\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"join\") {\n      let {\n        joinCallRoom\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_joinCallRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/joinCallRoom.dev */ \"./dev-javascripts/call/js/joinCallRoom.dev.js\"));\n      joinCallRoom(myMediaStream, myStreamTypeData);\n    }\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"create\") {\n      let creatingRoomInfo = document.getElementById(\"creatingRoomInfo\");\n\n      if (creatingRoomInfo) {\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"chat\") {\n          let {\n            createChatRoom\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_createChatRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createChatRoom.dev */ \"./dev-javascripts/call/js/createChatRoom.dev.js\"));\n          createChatRoom(myMediaStream, myStreamTypeData);\n        }\n\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"new\") {\n          let {\n            createNewRoom\n          } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_lodash_throttle_index_js-node_modules_namespace-emitter_index_js-node_mo-fa5147\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_aws-s3-multipart_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_dist_style_css\"), __webpack_require__.e(\"dev-javascripts_call_js_createNewRoom_dev_js-node_modules_css-loader_dist_runtime_api_js-node-08459b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/createNewRoom.dev */ \"./dev-javascripts/call/js/createNewRoom.dev.js\"));\n          createNewRoom(myMediaStream, myStreamTypeData);\n        }\n      }\n    }\n\n    IS_INIT_CALL_MODULE = true;\n  }\n})();\n\nfunction initialiseEventForCallModule() {}\n\nasync function createMediaStream() {\n  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n    console.log(\"Camera and microphone access is supported\");\n\n    try {\n      let stream = await navigator.mediaDevices.getUserMedia({\n        video: {\n          aspectRatio: 4 / 3\n        },\n        audio: {\n          echoCancellation: true\n        }\n      });\n      return {\n        isSuccess: true,\n        stream: stream,\n        isCameraOn: true,\n        isAudioOn: true\n      };\n    } catch (err) {\n      console.log(\"error in accessing camera and mic:\", err.message);\n\n      try {\n        let stream = await navigator.mediaDevices.getUserMedia({\n          video: true,\n          audio: true\n        });\n        return {\n          isSuccess: true,\n          stream: stream,\n          isCameraOn: true,\n          isAudioOn: true\n        };\n      } catch (err) {\n        if (err.message === \"Permission dismissed\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        } else if (err.message === \"Permission denied\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, click\n          the <span>lock icon</span> ${svg_callPermissionLockIcon} in the\n          address bar. Select the <span>Allow</span> option for <span>Camera</span> and\n          <span>Microphone</span>. Then reload the page\n          for the new settings to take effect.`\n          };\n        } else {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        }\n      }\n    }\n  } else {\n    console.warn(\"Camera and microphone access is not supported\");\n    return {\n      isSuccess: false,\n      error: \"Camera and microphone access is not supported\",\n      problem: \"Your browser does not support microphone and camera access\",\n      solution: `please upgrade your browser version or switch to <span>Chrome</span> latest version`\n    };\n  }\n}\n\nasync function getCallAudioTrack() {\n  try {\n    let callAudioTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      audio: {\n        echoCancellation: true\n      }\n    });\n    callAudioTrack = stream.getAudioTracks()[0];\n    return callAudioTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your mic:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getCameraVideoTrack() {\n  try {\n    let cameraVideoTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      video: {\n        aspectRatio: 4 / 3\n      }\n    });\n    cameraVideoTrack = stream.getVideoTracks()[0];\n    return cameraVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your camera:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getScreenShareVideoTrack() {\n  try {\n    let screenShareVideoTrack;\n    let stream = await navigator.mediaDevices.getDisplayMedia({\n      video: true\n    });\n    screenShareVideoTrack = stream.getVideoTracks()[0];\n    return screenShareVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your screen:\", e.message, \"error.name:\", e.name);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBWSxnQkFBZ0IsR0FBR3BDLE1BQU0sQ0FBQ3FDLGNBQVAsR0FBd0IsQ0FBeEIsQ0FBbkI7SUFDQSxPQUFPRCxnQkFBUDtFQUNELENBUEQsQ0FPRSxPQUFPSCxDQUFQLEVBQVU7SUFDVi9CLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLGlDQURGLEVBRUU4QixDQUFDLENBQUNMLE9BRkosRUFHRSxhQUhGLEVBSUVLLENBQUMsQ0FBQ0MsSUFKSjtFQU1EO0FBQ0Y7QUFFTSxlQUFlSSx3QkFBZixHQUEwQztFQUMvQyxJQUFJO0lBQ0YsSUFBSUMscUJBQUo7SUFDQSxJQUFJdkMsTUFBTSxHQUFHLE1BQU1vQixTQUFTLENBQUNDLFlBQVYsQ0FBdUJtQixlQUF2QixDQUF1QztNQUN4RGpCLEtBQUssRUFBRTtJQURpRCxDQUF2QyxDQUFuQjtJQUdBZ0IscUJBQXFCLEdBQUd2QyxNQUFNLENBQUNxQyxjQUFQLEdBQXdCLENBQXhCLENBQXhCO0lBQ0EsT0FBT0UscUJBQVA7RUFDRCxDQVBELENBT0UsT0FBT04sQ0FBUCxFQUFVO0lBQ1YvQixPQUFPLENBQUNDLEdBQVIsQ0FDRSxpQ0FERixFQUVFOEIsQ0FBQyxDQUFDTCxPQUZKLEVBR0UsYUFIRixFQUlFSyxDQUFDLENBQUNDLElBSko7RUFNRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvY2FsbC9jYWxsLmRldi5qcz9kN2ZkIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzdmdfY2FsbFBlcm1pc3Npb25Mb2NrSWNvbiA9IGBcclxuPHN2ZyB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCA4MCAxMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNNzMuMTQyOSAzOC44ODg5SDYyLjg1NzFWMjUuNTU1NkM2Mi44NTcxIDkuNDYxMTEgNTUuMjI4NiAwIDQwIDBDMjQuNzY1NyAwIDE3LjE0MjkgOS40NjExMSAxNy4xNDI5IDI1LjU1NTZWMzguODg4OUg1LjcxNDI5QzIuNTU0MjkgMzguODg4OSAwIDQyLjQ3NzggMCA0NS41NVY4OC44ODg5QzAgOTEuOTM4OSAyLjQ0NTcxIDk1LjIxNjcgNS40MzQyOSA5Ni4xNUwxMi4yNzQzIDk4LjNDMTUuOTAyMyA5OS4zMjgyIDE5LjY1MSA5OS44OTk1IDIzLjQyODYgMTAwSDU2LjU3MTRDNjAuMzQ3NiA5OS45MDAzIDY0LjA5NDggOTkuMzI3MSA2Ny43MiA5OC4yOTQ0TDc0LjU1NDMgOTYuMTQ0NEM3Ny41NDg2IDk1LjIxNjcgODAgOTEuOTM4OSA4MCA4OC44ODg5VjQ1LjU1QzgwIDQyLjQ3NzggNzYuMjk3MSAzOC44ODg5IDczLjE0MjkgMzguODg4OVpNNTEuNDI4NiAzOC44ODg5SDI4LjU3MTRWMjMuMzI3OEMyOC41NzE0IDE1LjMgMzMuMTI1NyAxMS4xMTExIDQwIDExLjExMTFDNDYuODc0MyAxMS4xMTExIDUxLjQyODYgMTUuMyA1MS40Mjg2IDIzLjMyNzhWMzguODg4OVpcIiAvPlxyXG48L3N2Zz5cclxuYFxyXG5cclxubGV0IG15TWVkaWFTdHJlYW0gPSBudWxsXHJcbmxldCBteVN0cmVhbVR5cGVEYXRhID0ge1xyXG4gIGlzU2NyZWVuU2hhcmVPbjogZmFsc2UsXHJcbiAgaXNDYW1lcmFPbjogZmFsc2UsXHJcbiAgaXNBdWRpb09uOiBmYWxzZVxyXG59XHJcbjsoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGlmICghSVNfSU5JVF9DQUxMX01PRFVMRSkge1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBjcmVhdGVNZWRpYVN0cmVhbSgpXHJcbiAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgbXlNZWRpYVN0cmVhbSA9IGRhdGEuc3RyZWFtXHJcbiAgICAgIG15U3RyZWFtVHlwZURhdGEuaXNTY3JlZW5TaGFyZU9uID0gZmFsc2VcclxuICAgICAgbXlTdHJlYW1UeXBlRGF0YS5pc0NhbWVyYU9uID0gZGF0YS5pc0NhbWVyYU9uXHJcbiAgICAgIG15U3RyZWFtVHlwZURhdGEuaXNBdWRpb09uID0gZGF0YS5pc0F1ZGlvT25cclxuXHJcbiAgICAgIGxldCB7IGNyZWF0ZUNhbGx0eXBlSW5mb0NvbnRhaW5lciB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi9qcy9jYWxsdHlwZUluZm9Db250YWluZXIuZGV2XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIobXlNZWRpYVN0cmVhbSwgbXlTdHJlYW1UeXBlRGF0YSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbWVzc2FnZTogXCIsIGRhdGEuZXJyb3IpXHJcbiAgICAgIGxldCB7IHNob3dDYWxsdHlwZU1lc3NhZ2UgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4vanMvY2FsbHR5cGVJbmZvQ29udGFpbmVyLmRldlwiXHJcbiAgICAgIClcclxuICAgICAgc2hvd0NhbGx0eXBlTWVzc2FnZShkYXRhLnByb2JsZW0sIGRhdGEuc29sdXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJvb21JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tSW5mb0NvbnRhaW5lclwiKVxyXG5cclxuICAgIGlmIChyb29tSW5mb0NvbnRhaW5lci5kYXRhc2V0LmNhbGxSb29tVHlwZS50cmltKCkgPT09IFwiam9pblwiKSB7XHJcbiAgICAgIGxldCB7IGpvaW5DYWxsUm9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9qb2luQ2FsbFJvb20uZGV2XCIpXHJcbiAgICAgIGpvaW5DYWxsUm9vbShteU1lZGlhU3RyZWFtLCBteVN0cmVhbVR5cGVEYXRhKVxyXG4gICAgfVxyXG4gICAgaWYgKHJvb21JbmZvQ29udGFpbmVyLmRhdGFzZXQuY2FsbFJvb21UeXBlLnRyaW0oKSA9PT0gXCJjcmVhdGVcIikge1xyXG4gICAgICBsZXQgY3JlYXRpbmdSb29tSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRpbmdSb29tSW5mb1wiKVxyXG4gICAgICBpZiAoY3JlYXRpbmdSb29tSW5mbykge1xyXG4gICAgICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvLmRhdGFzZXQuY3JlYXRpbmdDYWxsUm9vbS50cmltKCkgPT09IFwiY2hhdFwiKSB7XHJcbiAgICAgICAgICBsZXQgeyBjcmVhdGVDaGF0Um9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9jcmVhdGVDaGF0Um9vbS5kZXZcIilcclxuICAgICAgICAgIGNyZWF0ZUNoYXRSb29tKG15TWVkaWFTdHJlYW0sIG15U3RyZWFtVHlwZURhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvLmRhdGFzZXQuY3JlYXRpbmdDYWxsUm9vbS50cmltKCkgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCB7IGNyZWF0ZU5ld1Jvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvY3JlYXRlTmV3Um9vbS5kZXZcIilcclxuICAgICAgICAgIGNyZWF0ZU5ld1Jvb20obXlNZWRpYVN0cmVhbSwgbXlTdHJlYW1UeXBlRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBJU19JTklUX0NBTExfTU9EVUxFID0gdHJ1ZVxyXG4gIH1cclxufSkoKVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGlzZUV2ZW50Rm9yQ2FsbE1vZHVsZSgpIHt9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVNZWRpYVN0cmVhbSgpIHtcclxuICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xyXG4gICAgY29uc29sZS5sb2coXCJDYW1lcmEgYW5kIG1pY3JvcGhvbmUgYWNjZXNzIGlzIHN1cHBvcnRlZFwiKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgdmlkZW86IHsgYXNwZWN0UmF0aW86IDQgLyAzIH0sXHJcbiAgICAgICAgYXVkaW86IHtcclxuICAgICAgICAgIGVjaG9DYW5jZWxsYXRpb246IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNTdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHN0cmVhbTogc3RyZWFtLFxyXG4gICAgICAgIGlzQ2FtZXJhT246IHRydWUsXHJcbiAgICAgICAgaXNBdWRpb09uOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIGFjY2Vzc2luZyBjYW1lcmEgYW5kIG1pYzpcIiwgZXJyLm1lc3NhZ2UpXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICAgIGF1ZGlvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNTdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgc3RyZWFtOiBzdHJlYW0sXHJcbiAgICAgICAgICBpc0NhbWVyYU9uOiB0cnVlLFxyXG4gICAgICAgICAgaXNBdWRpb09uOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUGVybWlzc2lvbiBkaXNtaXNzZWRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm9ibGVtOiBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYFRvIGFsbG93IGFjY2VzcywgUGxlYXNlIDxzcGFuPnJlbG9hZDwvc3Bhbj4geW91ciBwYWdlIGFuZCBnaXZlIHBlcm1pc3Npb24gdG8geW91ciA8c3Bhbj5jYW1lcmE8L3NwYW4+IGFuZCA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBcIlBlcm1pc3Npb24gZGVuaWVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzU3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgICAgcHJvYmxlbTogXCJZb3UndmUgYmxvY2tlZCBhY2Nlc3MgdG8geW91ciBjYW1lcmEgYW5kIG1pY3JvcGhvbmVcIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBUbyBhbGxvdyBhY2Nlc3MsIGNsaWNrXHJcbiAgICAgICAgICB0aGUgPHNwYW4+bG9jayBpY29uPC9zcGFuPiAke3N2Z19jYWxsUGVybWlzc2lvbkxvY2tJY29ufSBpbiB0aGVcclxuICAgICAgICAgIGFkZHJlc3MgYmFyLiBTZWxlY3QgdGhlIDxzcGFuPkFsbG93PC9zcGFuPiBvcHRpb24gZm9yIDxzcGFuPkNhbWVyYTwvc3Bhbj4gYW5kXHJcbiAgICAgICAgICA8c3Bhbj5NaWNyb3Bob25lPC9zcGFuPi4gVGhlbiByZWxvYWQgdGhlIHBhZ2VcclxuICAgICAgICAgIGZvciB0aGUgbmV3IHNldHRpbmdzIHRvIHRha2UgZWZmZWN0LmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm9ibGVtOiBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYFlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBvciA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPiBpcyBidXN5IGluIDxzcGFuPmFub3RoZXIgYXBwPC9zcGFuPiBvciB0aGVyZSBpcyA8c3Bhbj5wcm9ibGVtPC9zcGFuPiB3aXRoIDxzcGFuPmNhbWVyYTwvc3Bhbj4gb3IgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj4sIFBsZWFzZSA8c3Bhbj5yZWxvYWQ8L3NwYW4+IHlvdXIgcGFnZSBhbmQgZ2l2ZSBwZXJtaXNzaW9uIHRvIHlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBhbmQgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNhbWVyYSBhbmQgbWljcm9waG9uZSBhY2Nlc3MgaXMgbm90IHN1cHBvcnRlZFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiQ2FtZXJhIGFuZCBtaWNyb3Bob25lIGFjY2VzcyBpcyBub3Qgc3VwcG9ydGVkXCIsXHJcbiAgICAgIHByb2JsZW06IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgbWljcm9waG9uZSBhbmQgY2FtZXJhIGFjY2Vzc1wiLFxyXG4gICAgICBzb2x1dGlvbjogYHBsZWFzZSB1cGdyYWRlIHlvdXIgYnJvd3NlciB2ZXJzaW9uIG9yIHN3aXRjaCB0byA8c3Bhbj5DaHJvbWU8L3NwYW4+IGxhdGVzdCB2ZXJzaW9uYFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FsbEF1ZGlvVHJhY2soKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjYWxsQXVkaW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgYXVkaW86IHtcclxuICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjYWxsQXVkaW9UcmFjayA9IHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gY2FsbEF1ZGlvVHJhY2tcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJFcnJvciBpbiBhY2Nlc3NpbmcgeW91ciBtaWM6XCIsXHJcbiAgICAgIGUubWVzc2FnZSxcclxuICAgICAgXCJlcnJvci5uYW1lOlwiLFxyXG4gICAgICBlLm5hbWVcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW1lcmFWaWRlb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY2FtZXJhVmlkZW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgdmlkZW86IHsgYXNwZWN0UmF0aW86IDQgLyAzIH1cclxuICAgIH0pXHJcbiAgICBjYW1lcmFWaWRlb1RyYWNrID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF1cclxuICAgIHJldHVybiBjYW1lcmFWaWRlb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgY2FtZXJhOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NyZWVuU2hhcmVWaWRlb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgc2NyZWVuU2hhcmVWaWRlb1RyYWNrXHJcbiAgICBsZXQgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoe1xyXG4gICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHNjcmVlblNoYXJlVmlkZW9UcmFjayA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gc2NyZWVuU2hhcmVWaWRlb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgc2NyZWVuOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdmdfY2FsbFBlcm1pc3Npb25Mb2NrSWNvbiIsIm15TWVkaWFTdHJlYW0iLCJteVN0cmVhbVR5cGVEYXRhIiwiaXNTY3JlZW5TaGFyZU9uIiwiaXNDYW1lcmFPbiIsImlzQXVkaW9PbiIsIklTX0lOSVRfQ0FMTF9NT0RVTEUiLCJkYXRhIiwiY3JlYXRlTWVkaWFTdHJlYW0iLCJpc1N1Y2Nlc3MiLCJzdHJlYW0iLCJjcmVhdGVDYWxsdHlwZUluZm9Db250YWluZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzaG93Q2FsbHR5cGVNZXNzYWdlIiwicHJvYmxlbSIsInNvbHV0aW9uIiwicm9vbUluZm9Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsImNhbGxSb29tVHlwZSIsInRyaW0iLCJqb2luQ2FsbFJvb20iLCJjcmVhdGluZ1Jvb21JbmZvIiwiY3JlYXRpbmdDYWxsUm9vbSIsImNyZWF0ZUNoYXRSb29tIiwiY3JlYXRlTmV3Um9vbSIsImluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImFzcGVjdFJhdGlvIiwiYXVkaW8iLCJlY2hvQ2FuY2VsbGF0aW9uIiwiZXJyIiwibWVzc2FnZSIsIndhcm4iLCJnZXRDYWxsQXVkaW9UcmFjayIsImNhbGxBdWRpb1RyYWNrIiwiZ2V0QXVkaW9UcmFja3MiLCJlIiwibmFtZSIsImdldENhbWVyYVZpZGVvVHJhY2siLCJjYW1lcmFWaWRlb1RyYWNrIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRTY3JlZW5TaGFyZVZpZGVvVHJhY2siLCJzY3JlZW5TaGFyZVZpZGVvVHJhY2siLCJnZXREaXNwbGF5TWVkaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/call/call.dev.js\n");

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