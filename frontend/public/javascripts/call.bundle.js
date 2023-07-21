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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCallAudioTrack\": () => (/* binding */ getCallAudioTrack),\n/* harmony export */   \"getCameraVideoTrack\": () => (/* binding */ getCameraVideoTrack),\n/* harmony export */   \"getScreenShareVideoTrack\": () => (/* binding */ getScreenShareVideoTrack)\n/* harmony export */ });\nlet svg_callPermissionLockIcon = `\n<svg width=\"80\" height=\"100\" viewBox=\"0 0 80 100\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z\" />\n</svg>\n`;\nlet myMediaStream = null;\nlet myStreamTypeData = {\n  isScreenShareOn: false,\n  isCameraOn: false,\n  isAudioOn: false\n};\n\n(async function () {\n  if (!IS_INIT_CALL_MODULE) {\n    let data = await createMediaStream();\n\n    if (data.isSuccess) {\n      myMediaStream = data.stream;\n      myStreamTypeData.isScreenShareOn = false;\n      myStreamTypeData.isCameraOn = data.isCameraOn;\n      myStreamTypeData.isAudioOn = data.isAudioOn;\n      let {\n        createCalltypeInfoContainer\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      createCalltypeInfoContainer(myMediaStream, myStreamTypeData); // let roomInfoContainer = document.getElementById(\"roomInfoContainer\")\n      // if (roomInfoContainer.dataset.callRoomType.trim() === \"join\") {\n      //   let { joinCallRoom } = await import(\"./js/joinCallRoom.dev\")\n      //   joinCallRoom(myMediaStream, myStreamTypeData)\n      // }\n      // if (roomInfoContainer.dataset.callRoomType.trim() === \"create\") {\n      //   let creatingRoomInfo = document.getElementById(\"creatingRoomInfo\")\n      //   if (creatingRoomInfo) {\n      //     if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"chat\") {\n      //       let { createChatRoom } = await import(\"./js/createChatRoom.dev\")\n      //       createChatRoom(myMediaStream, myStreamTypeData)\n      //     }\n      //     if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"new\") {\n      //       let { createNewRoom } = await import(\"./js/createNewRoom.dev\")\n      //       createNewRoom(myMediaStream, myStreamTypeData)\n      //     }\n      //   }\n      // }\n    } else {\n      console.log(\"error message: \", data.error);\n      let {\n        showCalltypeMessage\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_calltypeInfoContainer_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/calltypeInfoContainer.dev */ \"./dev-javascripts/call/js/calltypeInfoContainer.dev.js\"));\n      showCalltypeMessage(data.problem, data.solution);\n      let emptyMediaStream = null;\n      const MediaStream = window.MediaStream || window.webkitMediaStream; // Check if the MediaStream constructor is available in the current environment\n\n      if (MediaStream) emptyMediaStream = new MediaStream(); // Create an empty MediaStream\n\n      myMediaStream = emptyMediaStream;\n      myStreamTypeData.isScreenShareOn = false;\n      myStreamTypeData.isCameraOn = false;\n      myStreamTypeData.isAudioOn = false;\n    } /////////////////////////////////////////////////////\n    // delete this all , when does not want to create call when media is not supported\n    /////////////////////////////////////////////////////\n\n\n    let roomInfoContainer = document.getElementById(\"roomInfoContainer\");\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"join\") {\n      let {\n        joinCallRoom\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_joinCallRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/joinCallRoom.dev */ \"./dev-javascripts/call/js/joinCallRoom.dev.js\"));\n      joinCallRoom(myMediaStream, myStreamTypeData);\n    }\n\n    if (roomInfoContainer.dataset.callRoomType.trim() === \"create\") {\n      let creatingRoomInfo = document.getElementById(\"creatingRoomInfo\");\n\n      if (creatingRoomInfo) {\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"chat\") {\n          let {\n            createChatRoom\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_call_js_createChatRoom_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createChatRoom.dev */ \"./dev-javascripts/call/js/createChatRoom.dev.js\"));\n          createChatRoom(myMediaStream, myStreamTypeData);\n        }\n\n        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === \"new\") {\n          let {\n            createNewRoom\n          } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_lodash_throttle_index_js-node_modules_namespace-emitter_index_js-node_mo-fa5147\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_dashboard_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_aws-s3-multipart_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_lib_index_js\"), __webpack_require__.e(\"vendors-node_modules_uppy_image-editor_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_core_dist_style_css\"), __webpack_require__.e(\"vendors-node_modules_uppy_webcam_dist_style_css\"), __webpack_require__.e(\"dev-javascripts_call_js_createNewRoom_dev_js-node_modules_css-loader_dist_runtime_api_js-node-08459b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/createNewRoom.dev */ \"./dev-javascripts/call/js/createNewRoom.dev.js\"));\n          createNewRoom(myMediaStream, myStreamTypeData);\n        }\n      }\n    } // delete till here\n    ///////////////////////////////////////////////////////////\n\n\n    IS_INIT_CALL_MODULE = true;\n  }\n})();\n\nfunction initialiseEventForCallModule() {}\n\nasync function createMediaStream() {\n  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n    console.log(\"Camera and microphone access is supported\");\n\n    try {\n      let stream = await navigator.mediaDevices.getUserMedia({\n        video: {\n          aspectRatio: 4 / 3\n        },\n        audio: {\n          echoCancellation: true\n        }\n      });\n      return {\n        isSuccess: true,\n        stream: stream,\n        isCameraOn: true,\n        isAudioOn: true\n      };\n    } catch (err) {\n      console.log(\"error in accessing camera and mic:\", err.message);\n\n      try {\n        let stream = await navigator.mediaDevices.getUserMedia({\n          video: true,\n          audio: true\n        });\n        return {\n          isSuccess: true,\n          stream: stream,\n          isCameraOn: true,\n          isAudioOn: true\n        };\n      } catch (err) {\n        if (err.message === \"Permission dismissed\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        } else if (err.message === \"Permission denied\") {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `To allow access, click\n          the <span>lock icon</span> ${svg_callPermissionLockIcon} in the\n          address bar. Select the <span>Allow</span> option for <span>Camera</span> and\n          <span>Microphone</span>. Then reload the page\n          for the new settings to take effect.`\n          };\n        } else {\n          return {\n            isSuccess: false,\n            error: err.message,\n            problem: \"You've blocked access to your camera and microphone\",\n            solution: `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`\n          };\n        }\n      }\n    }\n  } else {\n    console.warn(\"Camera and microphone access is not supported\");\n    return {\n      isSuccess: false,\n      error: \"Camera and microphone access is not supported\",\n      problem: \"Your browser does not support microphone and camera access Or you are on unsecure protocol (http:).\",\n      solution: `Please upgrade your browser version or switch to <span>Chrome</span> latest version or if you are on <span>unsecure network (http:)</span>, please switch to <span>secure network (https:)</span>.`\n    };\n  }\n}\n\nasync function getCallAudioTrack() {\n  try {\n    let callAudioTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      audio: {\n        echoCancellation: true\n      }\n    });\n    callAudioTrack = stream.getAudioTracks()[0];\n    return callAudioTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your mic:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getCameraVideoTrack() {\n  try {\n    let cameraVideoTrack;\n    let stream = await navigator.mediaDevices.getUserMedia({\n      video: {\n        aspectRatio: 4 / 3\n      }\n    });\n    cameraVideoTrack = stream.getVideoTracks()[0];\n    return cameraVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your camera:\", e.message, \"error.name:\", e.name);\n  }\n}\nasync function getScreenShareVideoTrack() {\n  try {\n    let screenShareVideoTrack;\n    let stream = await navigator.mediaDevices.getDisplayMedia({\n      video: true\n    });\n    screenShareVideoTrack = stream.getVideoTracks()[0];\n    return screenShareVideoTrack;\n  } catch (e) {\n    console.log(\"Error in accessing your screen:\", e.message, \"error.name:\", e.name);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVU7SUFDVm5DLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLGlDQURGLEVBRUVrQyxDQUFDLENBQUNMLE9BRkosRUFHRSxhQUhGLEVBSUVLLENBQUMsQ0FBQ0MsSUFKSjtFQU1EO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9jYWxsL2NhbGwuZGV2LmpzP2Q3ZmQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHN2Z19jYWxsUGVybWlzc2lvbkxvY2tJY29uID0gYFxyXG48c3ZnIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDgwIDEwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuPHBhdGggZD1cIk03My4xNDI5IDM4Ljg4ODlINjIuODU3MVYyNS41NTU2QzYyLjg1NzEgOS40NjExMSA1NS4yMjg2IDAgNDAgMEMyNC43NjU3IDAgMTcuMTQyOSA5LjQ2MTExIDE3LjE0MjkgMjUuNTU1NlYzOC44ODg5SDUuNzE0MjlDMi41NTQyOSAzOC44ODg5IDAgNDIuNDc3OCAwIDQ1LjU1Vjg4Ljg4ODlDMCA5MS45Mzg5IDIuNDQ1NzEgOTUuMjE2NyA1LjQzNDI5IDk2LjE1TDEyLjI3NDMgOTguM0MxNS45MDIzIDk5LjMyODIgMTkuNjUxIDk5Ljg5OTUgMjMuNDI4NiAxMDBINTYuNTcxNEM2MC4zNDc2IDk5LjkwMDMgNjQuMDk0OCA5OS4zMjcxIDY3LjcyIDk4LjI5NDRMNzQuNTU0MyA5Ni4xNDQ0Qzc3LjU0ODYgOTUuMjE2NyA4MCA5MS45Mzg5IDgwIDg4Ljg4ODlWNDUuNTVDODAgNDIuNDc3OCA3Ni4yOTcxIDM4Ljg4ODkgNzMuMTQyOSAzOC44ODg5Wk01MS40Mjg2IDM4Ljg4ODlIMjguNTcxNFYyMy4zMjc4QzI4LjU3MTQgMTUuMyAzMy4xMjU3IDExLjExMTEgNDAgMTEuMTExMUM0Ni44NzQzIDExLjExMTEgNTEuNDI4NiAxNS4zIDUxLjQyODYgMjMuMzI3OFYzOC44ODg5WlwiIC8+XHJcbjwvc3ZnPlxyXG5gXHJcblxyXG5sZXQgbXlNZWRpYVN0cmVhbSA9IG51bGxcclxubGV0IG15U3RyZWFtVHlwZURhdGEgPSB7XHJcbiAgaXNTY3JlZW5TaGFyZU9uOiBmYWxzZSxcclxuICBpc0NhbWVyYU9uOiBmYWxzZSxcclxuICBpc0F1ZGlvT246IGZhbHNlXHJcbn1cclxuOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFJU19JTklUX0NBTExfTU9EVUxFKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGNyZWF0ZU1lZGlhU3RyZWFtKClcclxuICAgIGlmIChkYXRhLmlzU3VjY2Vzcykge1xyXG4gICAgICBteU1lZGlhU3RyZWFtID0gZGF0YS5zdHJlYW1cclxuICAgICAgbXlTdHJlYW1UeXBlRGF0YS5pc1NjcmVlblNoYXJlT24gPSBmYWxzZVxyXG4gICAgICBteVN0cmVhbVR5cGVEYXRhLmlzQ2FtZXJhT24gPSBkYXRhLmlzQ2FtZXJhT25cclxuICAgICAgbXlTdHJlYW1UeXBlRGF0YS5pc0F1ZGlvT24gPSBkYXRhLmlzQXVkaW9PblxyXG5cclxuICAgICAgbGV0IHsgY3JlYXRlQ2FsbHR5cGVJbmZvQ29udGFpbmVyIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2pzL2NhbGx0eXBlSW5mb0NvbnRhaW5lci5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIGNyZWF0ZUNhbGx0eXBlSW5mb0NvbnRhaW5lcihteU1lZGlhU3RyZWFtLCBteVN0cmVhbVR5cGVEYXRhKVxyXG5cclxuICAgICAgLy8gbGV0IHJvb21JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tSW5mb0NvbnRhaW5lclwiKVxyXG5cclxuICAgICAgLy8gaWYgKHJvb21JbmZvQ29udGFpbmVyLmRhdGFzZXQuY2FsbFJvb21UeXBlLnRyaW0oKSA9PT0gXCJqb2luXCIpIHtcclxuICAgICAgLy8gICBsZXQgeyBqb2luQ2FsbFJvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvam9pbkNhbGxSb29tLmRldlwiKVxyXG4gICAgICAvLyAgIGpvaW5DYWxsUm9vbShteU1lZGlhU3RyZWFtLCBteVN0cmVhbVR5cGVEYXRhKVxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmIChyb29tSW5mb0NvbnRhaW5lci5kYXRhc2V0LmNhbGxSb29tVHlwZS50cmltKCkgPT09IFwiY3JlYXRlXCIpIHtcclxuICAgICAgLy8gICBsZXQgY3JlYXRpbmdSb29tSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRpbmdSb29tSW5mb1wiKVxyXG4gICAgICAvLyAgIGlmIChjcmVhdGluZ1Jvb21JbmZvKSB7XHJcbiAgICAgIC8vICAgICBpZiAoY3JlYXRpbmdSb29tSW5mby5kYXRhc2V0LmNyZWF0aW5nQ2FsbFJvb20udHJpbSgpID09PSBcImNoYXRcIikge1xyXG4gICAgICAvLyAgICAgICBsZXQgeyBjcmVhdGVDaGF0Um9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9jcmVhdGVDaGF0Um9vbS5kZXZcIilcclxuICAgICAgLy8gICAgICAgY3JlYXRlQ2hhdFJvb20obXlNZWRpYVN0cmVhbSwgbXlTdHJlYW1UeXBlRGF0YSlcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvLmRhdGFzZXQuY3JlYXRpbmdDYWxsUm9vbS50cmltKCkgPT09IFwibmV3XCIpIHtcclxuICAgICAgLy8gICAgICAgbGV0IHsgY3JlYXRlTmV3Um9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9jcmVhdGVOZXdSb29tLmRldlwiKVxyXG4gICAgICAvLyAgICAgICBjcmVhdGVOZXdSb29tKG15TWVkaWFTdHJlYW0sIG15U3RyZWFtVHlwZURhdGEpXHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIG1lc3NhZ2U6IFwiLCBkYXRhLmVycm9yKVxyXG4gICAgICBsZXQgeyBzaG93Q2FsbHR5cGVNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2pzL2NhbGx0eXBlSW5mb0NvbnRhaW5lci5kZXZcIlxyXG4gICAgICApXHJcbiAgICAgIHNob3dDYWxsdHlwZU1lc3NhZ2UoZGF0YS5wcm9ibGVtLCBkYXRhLnNvbHV0aW9uKVxyXG4gICAgICBsZXQgZW1wdHlNZWRpYVN0cmVhbSA9IG51bGxcclxuICAgICAgY29uc3QgTWVkaWFTdHJlYW0gPSB3aW5kb3cuTWVkaWFTdHJlYW0gfHwgd2luZG93LndlYmtpdE1lZGlhU3RyZWFtXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBNZWRpYVN0cmVhbSBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnRcclxuICAgICAgaWYgKE1lZGlhU3RyZWFtKSBlbXB0eU1lZGlhU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKClcclxuICAgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IE1lZGlhU3RyZWFtXHJcbiAgICAgIG15TWVkaWFTdHJlYW0gPSBlbXB0eU1lZGlhU3RyZWFtXHJcbiAgICAgIG15U3RyZWFtVHlwZURhdGEuaXNTY3JlZW5TaGFyZU9uID0gZmFsc2VcclxuICAgICAgbXlTdHJlYW1UeXBlRGF0YS5pc0NhbWVyYU9uID0gZmFsc2VcclxuICAgICAgbXlTdHJlYW1UeXBlRGF0YS5pc0F1ZGlvT24gPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBkZWxldGUgdGhpcyBhbGwgLCB3aGVuIGRvZXMgbm90IHdhbnQgdG8gY3JlYXRlIGNhbGwgd2hlbiBtZWRpYSBpcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGxldCByb29tSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbUluZm9Db250YWluZXJcIilcclxuICAgIGlmIChyb29tSW5mb0NvbnRhaW5lci5kYXRhc2V0LmNhbGxSb29tVHlwZS50cmltKCkgPT09IFwiam9pblwiKSB7XHJcbiAgICAgIGxldCB7IGpvaW5DYWxsUm9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9qb2luQ2FsbFJvb20uZGV2XCIpXHJcbiAgICAgIGpvaW5DYWxsUm9vbShteU1lZGlhU3RyZWFtLCBteVN0cmVhbVR5cGVEYXRhKVxyXG4gICAgfVxyXG4gICAgaWYgKHJvb21JbmZvQ29udGFpbmVyLmRhdGFzZXQuY2FsbFJvb21UeXBlLnRyaW0oKSA9PT0gXCJjcmVhdGVcIikge1xyXG4gICAgICBsZXQgY3JlYXRpbmdSb29tSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRpbmdSb29tSW5mb1wiKVxyXG4gICAgICBpZiAoY3JlYXRpbmdSb29tSW5mbykge1xyXG4gICAgICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvLmRhdGFzZXQuY3JlYXRpbmdDYWxsUm9vbS50cmltKCkgPT09IFwiY2hhdFwiKSB7XHJcbiAgICAgICAgICBsZXQgeyBjcmVhdGVDaGF0Um9vbSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9qcy9jcmVhdGVDaGF0Um9vbS5kZXZcIilcclxuICAgICAgICAgIGNyZWF0ZUNoYXRSb29tKG15TWVkaWFTdHJlYW0sIG15U3RyZWFtVHlwZURhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjcmVhdGluZ1Jvb21JbmZvLmRhdGFzZXQuY3JlYXRpbmdDYWxsUm9vbS50cmltKCkgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCB7IGNyZWF0ZU5ld1Jvb20gfSA9IGF3YWl0IGltcG9ydChcIi4vanMvY3JlYXRlTmV3Um9vbS5kZXZcIilcclxuICAgICAgICAgIGNyZWF0ZU5ld1Jvb20obXlNZWRpYVN0cmVhbSwgbXlTdHJlYW1UeXBlRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGRlbGV0ZSB0aWxsIGhlcmVcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgSVNfSU5JVF9DQUxMX01PRFVMRSA9IHRydWVcclxuICB9XHJcbn0pKClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUoKSB7fVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW0oKSB7XHJcbiAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGFuZCBtaWNyb3Bob25lIGFjY2VzcyBpcyBzdXBwb3J0ZWRcIilcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgdmlkZW86IHsgYXNwZWN0UmF0aW86IDQgLyAzIH0sXHJcbiAgICAgICAgYXVkaW86IHtcclxuICAgICAgICAgIGVjaG9DYW5jZWxsYXRpb246IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNTdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHN0cmVhbTogc3RyZWFtLFxyXG4gICAgICAgIGlzQ2FtZXJhT246IHRydWUsXHJcbiAgICAgICAgaXNBdWRpb09uOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIGFjY2Vzc2luZyBjYW1lcmEgYW5kIG1pYzpcIiwgZXJyLm1lc3NhZ2UpXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICAgIGF1ZGlvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNTdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgc3RyZWFtOiBzdHJlYW0sXHJcbiAgICAgICAgICBpc0NhbWVyYU9uOiB0cnVlLFxyXG4gICAgICAgICAgaXNBdWRpb09uOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiUGVybWlzc2lvbiBkaXNtaXNzZWRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm9ibGVtOiBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYFRvIGFsbG93IGFjY2VzcywgUGxlYXNlIDxzcGFuPnJlbG9hZDwvc3Bhbj4geW91ciBwYWdlIGFuZCBnaXZlIHBlcm1pc3Npb24gdG8geW91ciA8c3Bhbj5jYW1lcmE8L3NwYW4+IGFuZCA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBcIlBlcm1pc3Npb24gZGVuaWVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzU3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgICAgcHJvYmxlbTogXCJZb3UndmUgYmxvY2tlZCBhY2Nlc3MgdG8geW91ciBjYW1lcmEgYW5kIG1pY3JvcGhvbmVcIixcclxuICAgICAgICAgICAgc29sdXRpb246IGBUbyBhbGxvdyBhY2Nlc3MsIGNsaWNrXHJcbiAgICAgICAgICB0aGUgPHNwYW4+bG9jayBpY29uPC9zcGFuPiAke3N2Z19jYWxsUGVybWlzc2lvbkxvY2tJY29ufSBpbiB0aGVcclxuICAgICAgICAgIGFkZHJlc3MgYmFyLiBTZWxlY3QgdGhlIDxzcGFuPkFsbG93PC9zcGFuPiBvcHRpb24gZm9yIDxzcGFuPkNhbWVyYTwvc3Bhbj4gYW5kXHJcbiAgICAgICAgICA8c3Bhbj5NaWNyb3Bob25lPC9zcGFuPi4gVGhlbiByZWxvYWQgdGhlIHBhZ2VcclxuICAgICAgICAgIGZvciB0aGUgbmV3IHNldHRpbmdzIHRvIHRha2UgZWZmZWN0LmBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm9ibGVtOiBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBzb2x1dGlvbjogYFlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBvciA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPiBpcyBidXN5IGluIDxzcGFuPmFub3RoZXIgYXBwPC9zcGFuPiBvciB0aGVyZSBpcyA8c3Bhbj5wcm9ibGVtPC9zcGFuPiB3aXRoIDxzcGFuPmNhbWVyYTwvc3Bhbj4gb3IgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj4sIFBsZWFzZSA8c3Bhbj5yZWxvYWQ8L3NwYW4+IHlvdXIgcGFnZSBhbmQgZ2l2ZSBwZXJtaXNzaW9uIHRvIHlvdXIgPHNwYW4+Y2FtZXJhPC9zcGFuPiBhbmQgPHNwYW4+bWljcm9waG9uZTwvc3Bhbj5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNhbWVyYSBhbmQgbWljcm9waG9uZSBhY2Nlc3MgaXMgbm90IHN1cHBvcnRlZFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IFwiQ2FtZXJhIGFuZCBtaWNyb3Bob25lIGFjY2VzcyBpcyBub3Qgc3VwcG9ydGVkXCIsXHJcbiAgICAgIHByb2JsZW06XHJcbiAgICAgICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBtaWNyb3Bob25lIGFuZCBjYW1lcmEgYWNjZXNzIE9yIHlvdSBhcmUgb24gdW5zZWN1cmUgcHJvdG9jb2wgKGh0dHA6KS5cIixcclxuICAgICAgc29sdXRpb246IGBQbGVhc2UgdXBncmFkZSB5b3VyIGJyb3dzZXIgdmVyc2lvbiBvciBzd2l0Y2ggdG8gPHNwYW4+Q2hyb21lPC9zcGFuPiBsYXRlc3QgdmVyc2lvbiBvciBpZiB5b3UgYXJlIG9uIDxzcGFuPnVuc2VjdXJlIG5ldHdvcmsgKGh0dHA6KTwvc3Bhbj4sIHBsZWFzZSBzd2l0Y2ggdG8gPHNwYW4+c2VjdXJlIG5ldHdvcmsgKGh0dHBzOik8L3NwYW4+LmBcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhbGxBdWRpb1RyYWNrKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY2FsbEF1ZGlvVHJhY2tcclxuICAgIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgIGF1ZGlvOiB7XHJcbiAgICAgICAgZWNob0NhbmNlbGxhdGlvbjogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY2FsbEF1ZGlvVHJhY2sgPSBzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXVxyXG4gICAgcmV0dXJuIGNhbGxBdWRpb1RyYWNrXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiRXJyb3IgaW4gYWNjZXNzaW5nIHlvdXIgbWljOlwiLFxyXG4gICAgICBlLm1lc3NhZ2UsXHJcbiAgICAgIFwiZXJyb3IubmFtZTpcIixcclxuICAgICAgZS5uYW1lXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FtZXJhVmlkZW9UcmFjaygpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGNhbWVyYVZpZGVvVHJhY2tcclxuICAgIGxldCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgIHZpZGVvOiB7IGFzcGVjdFJhdGlvOiA0IC8gMyB9XHJcbiAgICB9KVxyXG4gICAgY2FtZXJhVmlkZW9UcmFjayA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXHJcbiAgICByZXR1cm4gY2FtZXJhVmlkZW9UcmFja1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIkVycm9yIGluIGFjY2Vzc2luZyB5b3VyIGNhbWVyYTpcIixcclxuICAgICAgZS5tZXNzYWdlLFxyXG4gICAgICBcImVycm9yLm5hbWU6XCIsXHJcbiAgICAgIGUubmFtZVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNjcmVlblNoYXJlVmlkZW9UcmFjaygpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHNjcmVlblNoYXJlVmlkZW9UcmFja1xyXG4gICAgbGV0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKHtcclxuICAgICAgdmlkZW86IHRydWVcclxuICAgIH0pXHJcbiAgICBzY3JlZW5TaGFyZVZpZGVvVHJhY2sgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxyXG4gICAgcmV0dXJuIHNjcmVlblNoYXJlVmlkZW9UcmFja1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIkVycm9yIGluIGFjY2Vzc2luZyB5b3VyIHNjcmVlbjpcIixcclxuICAgICAgZS5tZXNzYWdlLFxyXG4gICAgICBcImVycm9yLm5hbWU6XCIsXHJcbiAgICAgIGUubmFtZVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3ZnX2NhbGxQZXJtaXNzaW9uTG9ja0ljb24iLCJteU1lZGlhU3RyZWFtIiwibXlTdHJlYW1UeXBlRGF0YSIsImlzU2NyZWVuU2hhcmVPbiIsImlzQ2FtZXJhT24iLCJpc0F1ZGlvT24iLCJJU19JTklUX0NBTExfTU9EVUxFIiwiZGF0YSIsImNyZWF0ZU1lZGlhU3RyZWFtIiwiaXNTdWNjZXNzIiwic3RyZWFtIiwiY3JlYXRlQ2FsbHR5cGVJbmZvQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2hvd0NhbGx0eXBlTWVzc2FnZSIsInByb2JsZW0iLCJzb2x1dGlvbiIsImVtcHR5TWVkaWFTdHJlYW0iLCJNZWRpYVN0cmVhbSIsIndpbmRvdyIsIndlYmtpdE1lZGlhU3RyZWFtIiwicm9vbUluZm9Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsImNhbGxSb29tVHlwZSIsInRyaW0iLCJqb2luQ2FsbFJvb20iLCJjcmVhdGluZ1Jvb21JbmZvIiwiY3JlYXRpbmdDYWxsUm9vbSIsImNyZWF0ZUNoYXRSb29tIiwiY3JlYXRlTmV3Um9vbSIsImluaXRpYWxpc2VFdmVudEZvckNhbGxNb2R1bGUiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImFzcGVjdFJhdGlvIiwiYXVkaW8iLCJlY2hvQ2FuY2VsbGF0aW9uIiwiZXJyIiwibWVzc2FnZSIsIndhcm4iLCJnZXRDYWxsQXVkaW9UcmFjayIsImNhbGxBdWRpb1RyYWNrIiwiZ2V0QXVkaW9UcmFja3MiLCJlIiwibmFtZSIsImdldENhbWVyYVZpZGVvVHJhY2siLCJjYW1lcmFWaWRlb1RyYWNrIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRTY3JlZW5TaGFyZVZpZGVvVHJhY2siLCJzY3JlZW5TaGFyZVZpZGVvVHJhY2siLCJnZXREaXNwbGF5TWVkaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/call/call.dev.js\n");

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