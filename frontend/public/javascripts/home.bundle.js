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

eval(";\n\n(async function () {\n  // await import(\"./socket.dev\") // define socket here\n  let {\n    createMainNotification\n  } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev.js */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n  const userNotificationIcon = document.getElementById(\"userNotificationIcon\");\n  const userNotificationModal = document.getElementById(\"userNotificationModal\");\n  const userNotificationModalCloseBtn = document.getElementById(\"userNotificationModalCloseBtn\");\n\n  userNotificationIcon.onclick = async function () {\n    userNotificationModal.style.display = \"block\";\n    let {\n      createUserNotification\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\"));\n    fetch(\"/user-notification\").then(response => {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return Promise.reject(response);\n    }).then(data => {\n      if (data.isSuccess) {\n        data.userNotification.forEach(userNotification => {\n          createUserNotification(userNotificationContainer, userNotification);\n        });\n      } else {\n        createMainNotification(data.error, \"error\");\n      }\n    }).catch(err => {\n      createMainNotification(\"Server Error, Please Try Again\", \"error\");\n    });\n  };\n\n  userNotificationModalCloseBtn.onclick = function () {\n    userNotificationModal.style.display = \"none\";\n  }; // When the user clicks anywhere outside of the modal, close it\n\n\n  window.onclick = function (event) {\n    if (event.target == userNotificationModal) {\n      userNotificationModal.style.display = \"none\";\n    }\n  }; //creating user notification\n\n\n  const userNotificationContainer = document.getElementById(\"userNotificationContainer\");\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvaW5kZXgvaG9tZS5kZXYuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBQUMsQ0FBQyxrQkFBa0I7RUFDbEI7RUFDQSxJQUFJO0lBQUVBO0VBQUYsSUFBNkIsTUFBTSxzWEFBdkM7RUFHQSxNQUFNQyxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHNCQUF4QixDQUE3QjtFQUNBLE1BQU1DLHFCQUFxQixHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsdUJBQXhCLENBQTlCO0VBQ0EsTUFBTUUsNkJBQTZCLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUNwQywrQkFEb0MsQ0FBdEM7O0VBR0FGLG9CQUFvQixDQUFDSyxPQUFyQixHQUErQixrQkFBa0I7SUFDL0NGLHFCQUFxQixDQUFDRyxLQUF0QixDQUE0QkMsT0FBNUIsR0FBc0MsT0FBdEM7SUFDQSxJQUFJO01BQUVDO0lBQUYsSUFBNkIsTUFBTSx5UEFBdkM7SUFHQUMsS0FBSyxDQUFDLG9CQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRQyxRQUFRLElBQUk7TUFDaEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO1FBQ2YsT0FBT0QsUUFBUSxDQUFDRSxJQUFULEVBQVA7TUFDRDs7TUFDRCxPQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUosUUFBZixDQUFQO0lBQ0QsQ0FOSCxFQU9HRCxJQVBILENBT1FNLElBQUksSUFBSTtNQUNaLElBQUlBLElBQUksQ0FBQ0MsU0FBVCxFQUFvQjtRQUNsQkQsSUFBSSxDQUFDRSxnQkFBTCxDQUFzQkMsT0FBdEIsQ0FBOEJELGdCQUFnQixJQUFJO1VBQ2hEVixzQkFBc0IsQ0FBQ1kseUJBQUQsRUFBNEJGLGdCQUE1QixDQUF0QjtRQUNELENBRkQ7TUFHRCxDQUpELE1BSU87UUFDTG5CLHNCQUFzQixDQUFDaUIsSUFBSSxDQUFDSyxLQUFOLEVBQWEsT0FBYixDQUF0QjtNQUNEO0lBQ0YsQ0FmSCxFQWdCR0MsS0FoQkgsQ0FnQlNDLEdBQUcsSUFBSTtNQUNaeEIsc0JBQXNCLENBQUMsZ0NBQUQsRUFBbUMsT0FBbkMsQ0FBdEI7SUFDRCxDQWxCSDtFQW1CRCxDQXhCRDs7RUEwQkFLLDZCQUE2QixDQUFDQyxPQUE5QixHQUF3QyxZQUFZO0lBQ2xERixxQkFBcUIsQ0FBQ0csS0FBdEIsQ0FBNEJDLE9BQTVCLEdBQXNDLE1BQXRDO0VBQ0QsQ0FGRCxDQXBDa0IsQ0F3Q2xCOzs7RUFDQWlCLE1BQU0sQ0FBQ25CLE9BQVAsR0FBaUIsVUFBVW9CLEtBQVYsRUFBaUI7SUFDaEMsSUFBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCdkIscUJBQXBCLEVBQTJDO01BQ3pDQSxxQkFBcUIsQ0FBQ0csS0FBdEIsQ0FBNEJDLE9BQTVCLEdBQXNDLE1BQXRDO0lBQ0Q7RUFDRixDQUpELENBekNrQixDQStDbEI7OztFQUNBLE1BQU1hLHlCQUF5QixHQUFHbkIsUUFBUSxDQUFDQyxjQUFULENBQ2hDLDJCQURnQyxDQUFsQztBQUdELENBbkRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvaW5kZXgvaG9tZS5kZXYuanM/MmYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAvLyBhd2FpdCBpbXBvcnQoXCIuL3NvY2tldC5kZXZcIikgLy8gZGVmaW5lIHNvY2tldCBoZXJlXHJcbiAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXYuanNcIlxyXG4gIClcclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlck5vdGlmaWNhdGlvbkljb25cIilcclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJOb3RpZmljYXRpb25Nb2RhbFwiKVxyXG4gIGNvbnN0IHVzZXJOb3RpZmljYXRpb25Nb2RhbENsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInVzZXJOb3RpZmljYXRpb25Nb2RhbENsb3NlQnRuXCJcclxuICApXHJcbiAgdXNlck5vdGlmaWNhdGlvbkljb24ub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIHVzZXJOb3RpZmljYXRpb25Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICBsZXQgeyBjcmVhdGVVc2VyTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgIFwiLi9qcy9jcmVhdGVVc2VyTm90aWZpY2F0aW9uLmRldi5qc1wiXHJcbiAgICApXHJcbiAgICBmZXRjaChcIi91c2VyLW5vdGlmaWNhdGlvblwiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgICBkYXRhLnVzZXJOb3RpZmljYXRpb24uZm9yRWFjaCh1c2VyTm90aWZpY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlVXNlck5vdGlmaWNhdGlvbih1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyLCB1c2VyTm90aWZpY2F0aW9uKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihkYXRhLmVycm9yLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFwiU2VydmVyIEVycm9yLCBQbGVhc2UgVHJ5IEFnYWluXCIsIFwiZXJyb3JcIilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZXJOb3RpZmljYXRpb25Nb2RhbENsb3NlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB1c2VyTm90aWZpY2F0aW9uTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG5cclxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSB1c2VyTm90aWZpY2F0aW9uTW9kYWwpIHtcclxuICAgICAgdXNlck5vdGlmaWNhdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9jcmVhdGluZyB1c2VyIG5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IHVzZXJOb3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwidXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lclwiXHJcbiAgKVxyXG59KSgpXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVNYWluTm90aWZpY2F0aW9uIiwidXNlck5vdGlmaWNhdGlvbkljb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlck5vdGlmaWNhdGlvbk1vZGFsIiwidXNlck5vdGlmaWNhdGlvbk1vZGFsQ2xvc2VCdG4iLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiY3JlYXRlVXNlck5vdGlmaWNhdGlvbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImRhdGEiLCJpc1N1Y2Nlc3MiLCJ1c2VyTm90aWZpY2F0aW9uIiwiZm9yRWFjaCIsInVzZXJOb3RpZmljYXRpb25Db250YWluZXIiLCJlcnJvciIsImNhdGNoIiwiZXJyIiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/index/home.dev.js\n");

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