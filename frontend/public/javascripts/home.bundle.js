/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev-javascripts/index/home.dev.js":
/*!*******************************************!*\
  !*** ./dev-javascripts/index/home.dev.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval(";\n\n(async function () {\n  // await import(\"./socket.dev\") // define socket here\n  let {\n    createMainNotification\n  } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev.js */ \"./dev-javascripts/common/mainNotification.dev.js\")); //creating user notification\n\n  const userNotificationContainer = document.getElementById(\"userNotificationContainer\");\n  const userNotificationOpenBtn = document.getElementById(\"userNotificationOpenBtn\");\n  const userNotificationModal = document.getElementById(\"userNotificationModal\");\n  const userNotificationModalCloseBtn = document.getElementById(\"userNotificationModalCloseBtn\");\n  userNotificationOpenBtn.addEventListener(\"click\", async () => {\n    if (userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.remove(\"hide\");\n    fetch(\"/user-notification/data?totalReceivedNotificationCount=0\").then(response => {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return Promise.reject(response);\n    }).then(async data => {\n      if (data.isSuccess) {\n        if (data.userNotifications.length > 0) {\n          let {\n            createUserNotification\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\"));\n          data.userNotifications.forEach(userNotification => {\n            createUserNotification(userNotificationContainer, userNotification);\n          });\n        } else {\n          let userNotificationStatus = document.getElementById(\"userNotificationStatus\");\n          if (userNotificationStatus.classList.contains(\"hide\")) userNotificationStatus.classList.remove(\"hide\");\n        }\n      } else {\n        createMainNotification(data.error, \"error\");\n      }\n    }).catch(err => {\n      createMainNotification(\"Server Error, Please Try Again\", \"error\");\n    });\n  });\n  userNotificationModalCloseBtn.addEventListener(\"click\", () => {\n    if (!userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.add(\"hide\");\n  }); // When the user clicks anywhere outside of the modal, close it\n\n  window.onclick = function (event) {\n    if (event.target === userNotificationModal) {\n      if (!userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.add(\"hide\");\n    }\n  };\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEQ7QUFNRCxDQWxFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2luZGV4L2hvbWUuZGV2LmpzPzJmMTciXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gYXdhaXQgaW1wb3J0KFwiLi9zb2NrZXQuZGV2XCIpIC8vIGRlZmluZSBzb2NrZXQgaGVyZVxyXG4gIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgIFwiLi4vY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2LmpzXCJcclxuICApXHJcbiAgLy9jcmVhdGluZyB1c2VyIG5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IHVzZXJOb3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwidXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lclwiXHJcbiAgKVxyXG4gIGNvbnN0IHVzZXJOb3RpZmljYXRpb25PcGVuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInVzZXJOb3RpZmljYXRpb25PcGVuQnRuXCJcclxuICApXHJcbiAgY29uc3QgdXNlck5vdGlmaWNhdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTm90aWZpY2F0aW9uTW9kYWxcIilcclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uTW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJ1c2VyTm90aWZpY2F0aW9uTW9kYWxDbG9zZUJ0blwiXHJcbiAgKVxyXG4gIHVzZXJOb3RpZmljYXRpb25PcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlck5vdGlmaWNhdGlvbk1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpXHJcbiAgICAgIHVzZXJOb3RpZmljYXRpb25Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxyXG5cclxuICAgIGZldGNoKFwiL3VzZXItbm90aWZpY2F0aW9uL2RhdGE/dG90YWxSZWNlaXZlZE5vdGlmaWNhdGlvbkNvdW50PTBcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgaWYgKGRhdGEudXNlck5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgeyBjcmVhdGVVc2VyTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICAgICAgXCIuL2pzL2NyZWF0ZVVzZXJOb3RpZmljYXRpb24uZGV2LmpzXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBkYXRhLnVzZXJOb3RpZmljYXRpb25zLmZvckVhY2godXNlck5vdGlmaWNhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlVXNlck5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgIHVzZXJOb3RpZmljYXRpb25Db250YWluZXIsXHJcbiAgICAgICAgICAgICAgICB1c2VyTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHVzZXJOb3RpZmljYXRpb25TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICBcInVzZXJOb3RpZmljYXRpb25TdGF0dXNcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmICh1c2VyTm90aWZpY2F0aW9uU3RhdHVzLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpXHJcbiAgICAgICAgICAgICAgdXNlck5vdGlmaWNhdGlvblN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKGRhdGEuZXJyb3IsIFwiZXJyb3JcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXCJTZXJ2ZXIgRXJyb3IsIFBsZWFzZSBUcnkgQWdhaW5cIiwgXCJlcnJvclwiKVxyXG4gICAgICB9KVxyXG4gIH0pXHJcbiAgdXNlck5vdGlmaWNhdGlvbk1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghdXNlck5vdGlmaWNhdGlvbk1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpXHJcbiAgICAgIHVzZXJOb3RpZmljYXRpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG4gIH0pXHJcblxyXG4gIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB1c2VyTm90aWZpY2F0aW9uTW9kYWwpIHtcclxuICAgICAgaWYgKCF1c2VyTm90aWZpY2F0aW9uTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSlcclxuICAgICAgICB1c2VyTm90aWZpY2F0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcclxuICAgIH1cclxuICB9XHJcbn0pKClcclxuIl0sIm5hbWVzIjpbImNyZWF0ZU1haW5Ob3RpZmljYXRpb24iLCJ1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJOb3RpZmljYXRpb25PcGVuQnRuIiwidXNlck5vdGlmaWNhdGlvbk1vZGFsIiwidXNlck5vdGlmaWNhdGlvbk1vZGFsQ2xvc2VCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJkYXRhIiwiaXNTdWNjZXNzIiwidXNlck5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJjcmVhdGVVc2VyTm90aWZpY2F0aW9uIiwiZm9yRWFjaCIsInVzZXJOb3RpZmljYXRpb24iLCJ1c2VyTm90aWZpY2F0aW9uU3RhdHVzIiwiZXJyb3IiLCJjYXRjaCIsImVyciIsImFkZCIsIndpbmRvdyIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/index/home.dev.js\n");

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
/******/ 			"home": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-javascripts/index/home.dev.js");
/******/ 	
/******/ })()
;