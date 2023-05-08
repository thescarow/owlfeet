"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_call_js_calltypeInfoContainer_dev_js"],{

/***/ "./dev-javascripts/call/js/calltypeInfoContainer.dev.js":
/*!**************************************************************!*\
  !*** ./dev-javascripts/call/js/calltypeInfoContainer.dev.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCalltypeInfoContainer\": () => (/* binding */ createCalltypeInfoContainer)\n/* harmony export */ });\nlet svg_callPermissionLockIcon = `<svg width=\"80\" height=\"100\" viewBox=\"0 0 80 100\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M73.1429 38.8889H62.8571V25.5556C62.8571 9.46111 55.2286 0 40 0C24.7657 0 17.1429 9.46111 17.1429 25.5556V38.8889H5.71429C2.55429 38.8889 0 42.4778 0 45.55V88.8889C0 91.9389 2.44571 95.2167 5.43429 96.15L12.2743 98.3C15.9023 99.3282 19.651 99.8995 23.4286 100H56.5714C60.3476 99.9003 64.0948 99.3271 67.72 98.2944L74.5543 96.1444C77.5486 95.2167 80 91.9389 80 88.8889V45.55C80 42.4778 76.2971 38.8889 73.1429 38.8889ZM51.4286 38.8889H28.5714V23.3278C28.5714 15.3 33.1257 11.1111 40 11.1111C46.8743 11.1111 51.4286 15.3 51.4286 23.3278V38.8889Z\" />\n</svg>\n`;\nlet calltypeInfoContainer = document.getElementById(\"calltypeInfoContainer\");\nlet calltypeInfo = document.getElementById(\"calltypeInfo\");\nlet calltypeInfoPreview = document.getElementById(\"calltypeInfoPreview\");\nlet calltypeInfoBtnContainer = document.getElementById(\"calltypeInfoBtnContainer\");\nlet calltypeMessage = document.getElementById(\"calltypeMessage\");\nlet calltypeMessageReloadBtn = document.getElementById(\"calltypeMessageReloadBtn\");\nlet myMediaStream = null;\nfunction createCalltypeInfoContainer() {\n  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n    console.log(\"Camera and microphone access is supported\");\n    let video = document.createElement(\"video\");\n    video.muted = true;\n    navigator.mediaDevices.getUserMedia({\n      video: {\n        aspectRatio: 4 / 3\n      },\n      audio: true\n    }).then(stream => {\n      myMediaStream = stream;\n      video.srcObject = stream;\n      video.addEventListener(\"loadedmetadata\", () => {\n        video.play();\n      });\n      calltypeInfoPreview.insertAdjacentElement(\"beforeend\", video);\n    }).catch(e => {\n      console.log(e, typeof e, e.message);\n\n      if (e.message === \"Permission dismissed\") {\n        showCalltypeMessage(\"You've blocked access to your camera and microphone\", `To allow access, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`);\n      } else if (e.message === \"Permission denied\") {\n        showCalltypeMessage(\"You've blocked access to your camera and microphone\", `To allow access, click\n        the <span>lock icon</span> ${svg_callPermissionLockIcon} in the\n        address bar. Select the <span>Allow</span> option for <span>Camera</span> and\n        <span>Microphone</span>. Then reload the page\n        for the new settings to take effect.`);\n      } else {\n        showCalltypeMessage(\"You've blocked access to your camera and microphone\", `Your <span>camera</span> or <span>microphone</span> is busy in <span>another app</span> or there is <span>problem</span> with <span>camera</span> or <span>microphone</span>, Please <span>reload</span> your page and give permission to your <span>camera</span> and <span>microphone</span>`);\n      }\n    });\n  } else {\n    console.warn(\"Camera and microphone access is not supported\");\n    showCalltypeMessage(\"Your browser does not support microphone and camera access\", `please upgrade your browser version or switch to <span>Chrome</span> latest version`);\n  }\n\n  initialiseEventForCalltypeInfoContainer();\n}\n\nfunction initialiseEventForCalltypeInfoContainer() {\n  if (calltypeMessageReloadBtn) {\n    calltypeMessageReloadBtn.addEventListener(\"click\", () => {\n      location.reload();\n    });\n  }\n\n  calltypeInfoBtnContainer.addEventListener(\"click\", async e => {\n    let calltypeInfoBtn = e.target.closest(`.calltype-info-btn`);\n\n    if (calltypeInfoBtn && calltypeInfoBtnContainer.contains(calltypeInfoBtn)) {\n      if (calltypeInfoBtn.dataset.calltypeInfoBtn === \"video\") {\n        if (myMediaStream !== null) {\n          let videoEnabled = myMediaStream.getVideoTracks()[0].enabled;\n\n          if (videoEnabled) {\n            myMediaStream.getVideoTracks()[0].enabled = false;\n            calltypeInfoBtn.classList.add(\"calltype-info-btn--selected\");\n            calltypeInfoBtn.classList.remove(\"calltype-info-btn--unselected\");\n            calltypeInfoPreview.classList.add(\"calltype-info__preview--video-off\");\n            calltypeInfoBtn.dataset.calltypeVideoValue = \"false\";\n          } else {\n            myMediaStream.getVideoTracks()[0].enabled = true;\n            calltypeInfoBtn.classList.remove(\"calltype-info-btn--selected\");\n            calltypeInfoBtn.classList.add(\"calltype-info-btn--unselected\");\n            calltypeInfoPreview.classList.remove(\"calltype-info__preview--video-off\");\n            calltypeInfoBtn.dataset.calltypeVideoValue = \"true\";\n          }\n        }\n      }\n\n      if (calltypeInfoBtn.dataset.calltypeInfoBtn === \"audio\") {\n        if (myMediaStream !== null) {\n          let audioEnabled = myMediaStream.getAudioTracks()[0].enabled;\n\n          if (audioEnabled) {\n            myMediaStream.getAudioTracks()[0].enabled = false;\n            calltypeInfoBtn.classList.add(\"calltype-info-btn--selected\");\n            calltypeInfoBtn.classList.remove(\"calltype-info-btn--unselected\");\n            calltypeInfoPreview.classList.add(\"calltype-info__preview--audio-off\");\n            calltypeInfoBtn.dataset.calltypeAudioValue = \"false\";\n          } else {\n            myMediaStream.getAudioTracks()[0].enabled = true;\n            calltypeInfoBtn.classList.remove(\"calltype-info-btn--selected\");\n            calltypeInfoBtn.classList.add(\"calltype-info-btn--unselected\");\n            calltypeInfoPreview.classList.remove(\"calltype-info__preview--audio-off\");\n            calltypeInfoBtn.dataset.calltypeAudioValue = \"true\";\n          }\n        }\n      }\n    }\n  });\n}\n\nfunction showCalltypeMessage(title, desc) {\n  calltypeInfo.classList.add(\"calltype-info--hide\");\n  calltypeMessage.classList.remove(\"calltype-message--hide\");\n  document.getElementById(\"calltypeMessageTitle\").textContent = title;\n  document.getElementById(\"calltypeMessageDesc\").innerHTML = desc;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2FsbC9qcy9jYWxsdHlwZUluZm9Db250YWluZXIuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSwwQkFBMEIsR0FBSTtBQUNsQztBQUNBO0FBQ0EsQ0FIQTtBQUlBLElBQUlDLHFCQUFxQixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsdUJBQXhCLENBQTVCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7QUFDQSxJQUFJRSxtQkFBbUIsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUExQjtBQUNBLElBQUlHLHdCQUF3QixHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FDN0IsMEJBRDZCLENBQS9CO0FBR0EsSUFBSUksZUFBZSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCO0FBRUEsSUFBSUssd0JBQXdCLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUM3QiwwQkFENkIsQ0FBL0I7QUFJQSxJQUFJTSxhQUFhLEdBQUcsSUFBcEI7QUFDTyxTQUFTQywyQkFBVCxHQUF1QztFQUM1QyxJQUFJQyxTQUFTLENBQUNDLFlBQVYsSUFBMEJELFNBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsWUFBckQsRUFBbUU7SUFDakVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJDQUFaO0lBRUEsSUFBSUMsS0FBSyxHQUFHZCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtJQUNBRCxLQUFLLENBQUNFLEtBQU4sR0FBYyxJQUFkO0lBQ0FQLFNBQVMsQ0FBQ0MsWUFBVixDQUNHQyxZQURILENBQ2dCO01BQ1pHLEtBQUssRUFBRTtRQUFFRyxXQUFXLEVBQUUsSUFBSTtNQUFuQixDQURLO01BRVpDLEtBQUssRUFBRTtJQUZLLENBRGhCLEVBS0dDLElBTEgsQ0FLUUMsTUFBTSxJQUFJO01BQ2RiLGFBQWEsR0FBR2EsTUFBaEI7TUFDQU4s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QUNDLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEaUQsV0FBaEQsR0FBOERGLEtBQTlEO0VBQ0FoRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDa0QsU0FBL0MsR0FBMkRGLElBQTNEO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9jYWxsL2pzL2NhbGx0eXBlSW5mb0NvbnRhaW5lci5kZXYuanM/MDIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3ZnX2NhbGxQZXJtaXNzaW9uTG9ja0ljb24gPSBgPHN2ZyB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCA4MCAxMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNNzMuMTQyOSAzOC44ODg5SDYyLjg1NzFWMjUuNTU1NkM2Mi44NTcxIDkuNDYxMTEgNTUuMjI4NiAwIDQwIDBDMjQuNzY1NyAwIDE3LjE0MjkgOS40NjExMSAxNy4xNDI5IDI1LjU1NTZWMzguODg4OUg1LjcxNDI5QzIuNTU0MjkgMzguODg4OSAwIDQyLjQ3NzggMCA0NS41NVY4OC44ODg5QzAgOTEuOTM4OSAyLjQ0NTcxIDk1LjIxNjcgNS40MzQyOSA5Ni4xNUwxMi4yNzQzIDk4LjNDMTUuOTAyMyA5OS4zMjgyIDE5LjY1MSA5OS44OTk1IDIzLjQyODYgMTAwSDU2LjU3MTRDNjAuMzQ3NiA5OS45MDAzIDY0LjA5NDggOTkuMzI3MSA2Ny43MiA5OC4yOTQ0TDc0LjU1NDMgOTYuMTQ0NEM3Ny41NDg2IDk1LjIxNjcgODAgOTEuOTM4OSA4MCA4OC44ODg5VjQ1LjU1QzgwIDQyLjQ3NzggNzYuMjk3MSAzOC44ODg5IDczLjE0MjkgMzguODg4OVpNNTEuNDI4NiAzOC44ODg5SDI4LjU3MTRWMjMuMzI3OEMyOC41NzE0IDE1LjMgMzMuMTI1NyAxMS4xMTExIDQwIDExLjExMTFDNDYuODc0MyAxMS4xMTExIDUxLjQyODYgMTUuMyA1MS40Mjg2IDIzLjMyNzhWMzguODg4OVpcIiAvPlxyXG48L3N2Zz5cclxuYFxyXG5sZXQgY2FsbHR5cGVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxsdHlwZUluZm9Db250YWluZXJcIilcclxubGV0IGNhbGx0eXBlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsbHR5cGVJbmZvXCIpXHJcbmxldCBjYWxsdHlwZUluZm9QcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxsdHlwZUluZm9QcmV2aWV3XCIpXHJcbmxldCBjYWxsdHlwZUluZm9CdG5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImNhbGx0eXBlSW5mb0J0bkNvbnRhaW5lclwiXHJcbilcclxubGV0IGNhbGx0eXBlTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsbHR5cGVNZXNzYWdlXCIpXHJcblxyXG5sZXQgY2FsbHR5cGVNZXNzYWdlUmVsb2FkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJjYWxsdHlwZU1lc3NhZ2VSZWxvYWRCdG5cIlxyXG4pXHJcblxyXG5sZXQgbXlNZWRpYVN0cmVhbSA9IG51bGxcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGx0eXBlSW5mb0NvbnRhaW5lcigpIHtcclxuICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xyXG4gICAgY29uc29sZS5sb2coXCJDYW1lcmEgYW5kIG1pY3JvcGhvbmUgYWNjZXNzIGlzIHN1cHBvcnRlZFwiKVxyXG5cclxuICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKVxyXG4gICAgdmlkZW8ubXV0ZWQgPSB0cnVlXHJcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXHJcbiAgICAgIC5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgIHZpZGVvOiB7IGFzcGVjdFJhdGlvOiA0IC8gMyB9LFxyXG4gICAgICAgIGF1ZGlvOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgbXlNZWRpYVN0cmVhbSA9IHN0cmVhbVxyXG4gICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbVxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB2aWRlby5wbGF5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjYWxsdHlwZUluZm9QcmV2aWV3Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB2aWRlbylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUsIHR5cGVvZiBlLCBlLm1lc3NhZ2UpXHJcblxyXG4gICAgICAgIGlmIChlLm1lc3NhZ2UgPT09IFwiUGVybWlzc2lvbiBkaXNtaXNzZWRcIikge1xyXG4gICAgICAgICAgc2hvd0NhbGx0eXBlTWVzc2FnZShcclxuICAgICAgICAgICAgXCJZb3UndmUgYmxvY2tlZCBhY2Nlc3MgdG8geW91ciBjYW1lcmEgYW5kIG1pY3JvcGhvbmVcIixcclxuICAgICAgICAgICAgYFRvIGFsbG93IGFjY2VzcywgUGxlYXNlIDxzcGFuPnJlbG9hZDwvc3Bhbj4geW91ciBwYWdlIGFuZCBnaXZlIHBlcm1pc3Npb24gdG8geW91ciA8c3Bhbj5jYW1lcmE8L3NwYW4+IGFuZCA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPmBcclxuICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2UgaWYgKGUubWVzc2FnZSA9PT0gXCJQZXJtaXNzaW9uIGRlbmllZFwiKSB7XHJcbiAgICAgICAgICBzaG93Q2FsbHR5cGVNZXNzYWdlKFxyXG4gICAgICAgICAgICBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBgVG8gYWxsb3cgYWNjZXNzLCBjbGlja1xyXG4gICAgICAgIHRoZSA8c3Bhbj5sb2NrIGljb248L3NwYW4+ICR7c3ZnX2NhbGxQZXJtaXNzaW9uTG9ja0ljb259IGluIHRoZVxyXG4gICAgICAgIGFkZHJlc3MgYmFyLiBTZWxlY3QgdGhlIDxzcGFuPkFsbG93PC9zcGFuPiBvcHRpb24gZm9yIDxzcGFuPkNhbWVyYTwvc3Bhbj4gYW5kXHJcbiAgICAgICAgPHNwYW4+TWljcm9waG9uZTwvc3Bhbj4uIFRoZW4gcmVsb2FkIHRoZSBwYWdlXHJcbiAgICAgICAgZm9yIHRoZSBuZXcgc2V0dGluZ3MgdG8gdGFrZSBlZmZlY3QuYFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93Q2FsbHR5cGVNZXNzYWdlKFxyXG4gICAgICAgICAgICBcIllvdSd2ZSBibG9ja2VkIGFjY2VzcyB0byB5b3VyIGNhbWVyYSBhbmQgbWljcm9waG9uZVwiLFxyXG4gICAgICAgICAgICBgWW91ciA8c3Bhbj5jYW1lcmE8L3NwYW4+IG9yIDxzcGFuPm1pY3JvcGhvbmU8L3NwYW4+IGlzIGJ1c3kgaW4gPHNwYW4+YW5vdGhlciBhcHA8L3NwYW4+IG9yIHRoZXJlIGlzIDxzcGFuPnByb2JsZW08L3NwYW4+IHdpdGggPHNwYW4+Y2FtZXJhPC9zcGFuPiBvciA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPiwgUGxlYXNlIDxzcGFuPnJlbG9hZDwvc3Bhbj4geW91ciBwYWdlIGFuZCBnaXZlIHBlcm1pc3Npb24gdG8geW91ciA8c3Bhbj5jYW1lcmE8L3NwYW4+IGFuZCA8c3Bhbj5taWNyb3Bob25lPC9zcGFuPmBcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNhbWVyYSBhbmQgbWljcm9waG9uZSBhY2Nlc3MgaXMgbm90IHN1cHBvcnRlZFwiKVxyXG4gICAgc2hvd0NhbGx0eXBlTWVzc2FnZShcclxuICAgICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBtaWNyb3Bob25lIGFuZCBjYW1lcmEgYWNjZXNzXCIsXHJcbiAgICAgIGBwbGVhc2UgdXBncmFkZSB5b3VyIGJyb3dzZXIgdmVyc2lvbiBvciBzd2l0Y2ggdG8gPHNwYW4+Q2hyb21lPC9zcGFuPiBsYXRlc3QgdmVyc2lvbmBcclxuICAgIClcclxuICB9XHJcbiAgaW5pdGlhbGlzZUV2ZW50Rm9yQ2FsbHR5cGVJbmZvQ29udGFpbmVyKClcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGlzZUV2ZW50Rm9yQ2FsbHR5cGVJbmZvQ29udGFpbmVyKCkge1xyXG4gIGlmIChjYWxsdHlwZU1lc3NhZ2VSZWxvYWRCdG4pIHtcclxuICAgIGNhbGx0eXBlTWVzc2FnZVJlbG9hZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNhbGx0eXBlSW5mb0J0bkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZSA9PiB7XHJcbiAgICBsZXQgY2FsbHR5cGVJbmZvQnRuID0gZS50YXJnZXQuY2xvc2VzdChgLmNhbGx0eXBlLWluZm8tYnRuYClcclxuICAgIGlmIChjYWxsdHlwZUluZm9CdG4gJiYgY2FsbHR5cGVJbmZvQnRuQ29udGFpbmVyLmNvbnRhaW5zKGNhbGx0eXBlSW5mb0J0bikpIHtcclxuICAgICAgaWYgKGNhbGx0eXBlSW5mb0J0bi5kYXRhc2V0LmNhbGx0eXBlSW5mb0J0biA9PT0gXCJ2aWRlb1wiKSB7XHJcbiAgICAgICAgaWYgKG15TWVkaWFTdHJlYW0gIT09IG51bGwpIHtcclxuICAgICAgICAgIGxldCB2aWRlb0VuYWJsZWQgPSBteU1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZW5hYmxlZFxyXG4gICAgICAgICAgaWYgKHZpZGVvRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBteU1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNhbGx0eXBlSW5mb0J0bi5jbGFzc0xpc3QuYWRkKFwiY2FsbHR5cGUtaW5mby1idG4tLXNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgIGNhbGx0eXBlSW5mb0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FsbHR5cGUtaW5mby1idG4tLXVuc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgY2FsbHR5cGVJbmZvUHJldmlldy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgIFwiY2FsbHR5cGUtaW5mb19fcHJldmlldy0tdmlkZW8tb2ZmXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYWxsdHlwZUluZm9CdG4uZGF0YXNldC5jYWxsdHlwZVZpZGVvVmFsdWUgPSBcImZhbHNlXCJcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG15TWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYWxsdHlwZUluZm9CdG4uY2xhc3NMaXN0LnJlbW92ZShcImNhbGx0eXBlLWluZm8tYnRuLS1zZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICBjYWxsdHlwZUluZm9CdG4uY2xhc3NMaXN0LmFkZChcImNhbGx0eXBlLWluZm8tYnRuLS11bnNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgIGNhbGx0eXBlSW5mb1ByZXZpZXcuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgICBcImNhbGx0eXBlLWluZm9fX3ByZXZpZXctLXZpZGVvLW9mZlwiXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGNhbGx0eXBlSW5mb0J0bi5kYXRhc2V0LmNhbGx0eXBlVmlkZW9WYWx1ZSA9IFwidHJ1ZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjYWxsdHlwZUluZm9CdG4uZGF0YXNldC5jYWxsdHlwZUluZm9CdG4gPT09IFwiYXVkaW9cIikge1xyXG4gICAgICAgIGlmIChteU1lZGlhU3RyZWFtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBsZXQgYXVkaW9FbmFibGVkID0gbXlNZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdLmVuYWJsZWRcclxuICAgICAgICAgIGlmIChhdWRpb0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgbXlNZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYWxsdHlwZUluZm9CdG4uY2xhc3NMaXN0LmFkZChcImNhbGx0eXBlLWluZm8tYnRuLS1zZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICBjYWxsdHlwZUluZm9CdG4uY2xhc3NMaXN0LnJlbW92ZShcImNhbGx0eXBlLWluZm8tYnRuLS11bnNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgIGNhbGx0eXBlSW5mb1ByZXZpZXcuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICBcImNhbGx0eXBlLWluZm9fX3ByZXZpZXctLWF1ZGlvLW9mZlwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2FsbHR5cGVJbmZvQnRuLmRhdGFzZXQuY2FsbHR5cGVBdWRpb1ZhbHVlID0gXCJmYWxzZVwiXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBteU1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF0uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgY2FsbHR5cGVJbmZvQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjYWxsdHlwZS1pbmZvLWJ0bi0tc2VsZWN0ZWRcIilcclxuICAgICAgICAgICAgY2FsbHR5cGVJbmZvQnRuLmNsYXNzTGlzdC5hZGQoXCJjYWxsdHlwZS1pbmZvLWJ0bi0tdW5zZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICBjYWxsdHlwZUluZm9QcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgICAgXCJjYWxsdHlwZS1pbmZvX19wcmV2aWV3LS1hdWRpby1vZmZcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhbGx0eXBlSW5mb0J0bi5kYXRhc2V0LmNhbGx0eXBlQXVkaW9WYWx1ZSA9IFwidHJ1ZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0NhbGx0eXBlTWVzc2FnZSh0aXRsZSwgZGVzYykge1xyXG4gIGNhbGx0eXBlSW5mby5jbGFzc0xpc3QuYWRkKFwiY2FsbHR5cGUtaW5mby0taGlkZVwiKVxyXG4gIGNhbGx0eXBlTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2FsbHR5cGUtbWVzc2FnZS0taGlkZVwiKVxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGx0eXBlTWVzc2FnZVRpdGxlXCIpLnRleHRDb250ZW50ID0gdGl0bGVcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGx0eXBlTWVzc2FnZURlc2NcIikuaW5uZXJIVE1MID0gZGVzY1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdmdfY2FsbFBlcm1pc3Npb25Mb2NrSWNvbiIsImNhbGx0eXBlSW5mb0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYWxsdHlwZUluZm8iLCJjYWxsdHlwZUluZm9QcmV2aWV3IiwiY2FsbHR5cGVJbmZvQnRuQ29udGFpbmVyIiwiY2FsbHR5cGVNZXNzYWdlIiwiY2FsbHR5cGVNZXNzYWdlUmVsb2FkQnRuIiwibXlNZWRpYVN0cmVhbSIsImNyZWF0ZUNhbGx0eXBlSW5mb0NvbnRhaW5lciIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImNvbnNvbGUiLCJsb2ciLCJ2aWRlbyIsImNyZWF0ZUVsZW1lbnQiLCJtdXRlZCIsImFzcGVjdFJhdGlvIiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwic3JjT2JqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJjYXRjaCIsImUiLCJtZXNzYWdlIiwic2hvd0NhbGx0eXBlTWVzc2FnZSIsIndhcm4iLCJpbml0aWFsaXNlRXZlbnRGb3JDYWxsdHlwZUluZm9Db250YWluZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhbGx0eXBlSW5mb0J0biIsInRhcmdldCIsImNsb3Nlc3QiLCJjb250YWlucyIsImRhdGFzZXQiLCJ2aWRlb0VuYWJsZWQiLCJnZXRWaWRlb1RyYWNrcyIsImVuYWJsZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjYWxsdHlwZVZpZGVvVmFsdWUiLCJhdWRpb0VuYWJsZWQiLCJnZXRBdWRpb1RyYWNrcyIsImNhbGx0eXBlQXVkaW9WYWx1ZSIsInRpdGxlIiwiZGVzYyIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/call/js/calltypeInfoContainer.dev.js\n");

/***/ })

}]);