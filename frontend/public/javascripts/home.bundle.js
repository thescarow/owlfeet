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

eval(";\n\n(async function () {\n  // await import(\"./socket.dev\") // define socket here\n  let {\n    createMainNotification\n  } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev.js */ \"./dev-javascripts/common/mainNotification.dev.js\")); //creating user notification\n\n  const userNotificationContainer = document.getElementById(\"userNotificationContainer\");\n  const userNotificationBtn = document.getElementById(\"userNotificationBtn\");\n  const userNotificationModal = document.getElementById(\"userNotificationModal\");\n  const userNotificationModalCloseBtn = document.getElementById(\"userNotificationModalCloseBtn\");\n  userNotificationBtn.addEventListener(\"click\", async () => {\n    if (userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.remove(\"hide\");\n    fetch(\"/user-notification\").then(response => {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return Promise.reject(response);\n    }).then(async data => {\n      if (data.isSuccess) {\n        let {\n          createUserNotification\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\"));\n        data.userNotification.forEach(userNotification => {\n          createUserNotification(userNotificationContainer, userNotification);\n        });\n      } else {\n        createMainNotification(data.error, \"error\");\n      }\n    }).catch(err => {\n      createMainNotification(\"Server Error, Please Try Again\", \"error\");\n    });\n  });\n  userNotificationModalCloseBtn.addEventListener(\"click\", () => {\n    if (!userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.add(\"hide\");\n  }); // When the user clicks anywhere outside of the modal, close it\n\n  window.onclick = function (event) {\n    if (event.target === userNotificationModal) {\n      if (!userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.add(\"hide\");\n    }\n  };\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvaW5kZXgvaG9tZS5kZXYuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBQUMsQ0FBQyxrQkFBa0I7RUFDbEI7RUFDQSxJQUFJO0lBQUVBO0VBQUYsSUFBNkIsTUFBTSxzWEFBdkMsQ0FGa0IsQ0FLbEI7O0VBQ0EsTUFBTUMseUJBQXlCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUNoQywyQkFEZ0MsQ0FBbEM7RUFHQSxNQUFNQyxtQkFBbUIsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUE1QjtFQUNBLE1BQU1FLHFCQUFxQixHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsdUJBQXhCLENBQTlCO0VBQ0EsTUFBTUcsNkJBQTZCLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUNwQywrQkFEb0MsQ0FBdEM7RUFHQUMsbUJBQW1CLENBQUNHLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxZQUFZO0lBQ3hELElBQUlGLHFCQUFxQixDQUFDRyxTQUF0QixDQUFnQ0MsUUFBaEMsQ0FBeUMsTUFBekMsQ0FBSixFQUNFSixxQkFBcUIsQ0FBQ0csU0FBdEIsQ0FBZ0NFLE1BQWhDLENBQXVDLE1BQXZDO0lBRUZDLEtBQUssQ0FBQyxvQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUUMsUUFBUSxJQUFJO01BQ2hCLElBQUlBLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtRQUNmLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO01BQ0Q7O01BQ0QsT0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFFBQWYsQ0FBUDtJQUNELENBTkgsRUFPR0QsSUFQSCxDQU9RLE1BQU1NLElBQU4sSUFBYztNQUNsQixJQUFJQSxJQUFJLENBQUNDLFNBQVQsRUFBb0I7UUFDbEIsSUFBSTtVQUFFQztRQUFGLElBQTZCLE1BQU0seVBBQXZDO1FBR0FGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0JDLE9BQXRCLENBQThCRCxnQkFBZ0IsSUFBSTtVQUNoREQsc0JBQXNCLENBQUNuQix5QkFBRCxFQUE0Qm9CLGdCQUE1QixDQUF0QjtRQUNELENBRkQ7TUFHRCxDQVBELE1BT087UUFDTHJCLHNCQUFzQixDQUFDa0IsSUFBSSxDQUFDSyxLQUFOLEVBQWEsT0FBYixDQUF0QjtNQUNEO0lBQ0YsQ0FsQkgsRUFtQkdDLEtBbkJILENBbUJTQyxHQUFHLElBQUk7TUFDWnpCLHNCQUFzQixDQUFDLGdDQUFELEVBQW1DLE9BQW5DLENBQXRCO0lBQ0QsQ0FyQkg7RUFzQkQsQ0ExQkQ7RUEyQkFNLDZCQUE2QixDQUFDQyxnQkFBOUIsQ0FBK0MsT0FBL0MsRUFBd0QsTUFBTTtJQUM1RCxJQUFJLENBQUNGLHFCQUFxQixDQUFDRyxTQUF0QixDQUFnQ0MsUUFBaEMsQ0FBeUMsTUFBekMsQ0FBTCxFQUNFSixxQkFBcUIsQ0FBQ0csU0FBdEIsQ0FBZ0NrQixHQUFoQyxDQUFvQyxNQUFwQztFQUNILENBSEQsRUF6Q2tCLENBOENsQjs7RUFDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEtBQVYsRUFBaUI7SUFDaEMsSUFBSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCekIscUJBQXJCLEVBQTRDO01BQzFDLElBQUksQ0FBQ0EscUJBQXFCLENBQUNHLFNBQXRCLENBQWdDQyxRQUFoQyxDQUF5QyxNQUF6QyxDQUFMLEVBQ0VKLHFCQUFxQixDQUFDRyxTQUF0QixDQUFnQ2tCLEdBQWhDLENBQW9DLE1BQXBDO0lBQ0g7RUFDRixDQUxEO0FBTUQsQ0FyREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9pbmRleC9ob21lLmRldi5qcz8yZjE3Il0sInNvdXJjZXNDb250ZW50IjpbIjsoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIC8vIGF3YWl0IGltcG9ydChcIi4vc29ja2V0LmRldlwiKSAvLyBkZWZpbmUgc29ja2V0IGhlcmVcclxuICBsZXQgeyBjcmVhdGVNYWluTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICBcIi4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldi5qc1wiXHJcbiAgKVxyXG4gIC8vY3JlYXRpbmcgdXNlciBub3RpZmljYXRpb25cclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInVzZXJOb3RpZmljYXRpb25Db250YWluZXJcIlxyXG4gIClcclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTm90aWZpY2F0aW9uQnRuXCIpXHJcbiAgY29uc3QgdXNlck5vdGlmaWNhdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTm90aWZpY2F0aW9uTW9kYWxcIilcclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uTW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJ1c2VyTm90aWZpY2F0aW9uTW9kYWxDbG9zZUJ0blwiXHJcbiAgKVxyXG4gIHVzZXJOb3RpZmljYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgIGlmICh1c2VyTm90aWZpY2F0aW9uTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSlcclxuICAgICAgdXNlck5vdGlmaWNhdGlvbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcblxyXG4gICAgZmV0Y2goXCIvdXNlci1ub3RpZmljYXRpb25cIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgbGV0IHsgY3JlYXRlVXNlck5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgICBcIi4vanMvY3JlYXRlVXNlck5vdGlmaWNhdGlvbi5kZXYuanNcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgZGF0YS51c2VyTm90aWZpY2F0aW9uLmZvckVhY2godXNlck5vdGlmaWNhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJOb3RpZmljYXRpb24odXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lciwgdXNlck5vdGlmaWNhdGlvbilcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oZGF0YS5lcnJvciwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcIlNlcnZlciBFcnJvciwgUGxlYXNlIFRyeSBBZ2FpblwiLCBcImVycm9yXCIpXHJcbiAgICAgIH0pXHJcbiAgfSlcclxuICB1c2VyTm90aWZpY2F0aW9uTW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCF1c2VyTm90aWZpY2F0aW9uTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSlcclxuICAgICAgdXNlck5vdGlmaWNhdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXHJcbiAgfSlcclxuXHJcbiAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT09IHVzZXJOb3RpZmljYXRpb25Nb2RhbCkge1xyXG4gICAgICBpZiAoIXVzZXJOb3RpZmljYXRpb25Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKVxyXG4gICAgICAgIHVzZXJOb3RpZmljYXRpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG4gICAgfVxyXG4gIH1cclxufSkoKVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsInVzZXJOb3RpZmljYXRpb25Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlck5vdGlmaWNhdGlvbkJ0biIsInVzZXJOb3RpZmljYXRpb25Nb2RhbCIsInVzZXJOb3RpZmljYXRpb25Nb2RhbENsb3NlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZGF0YSIsImlzU3VjY2VzcyIsImNyZWF0ZVVzZXJOb3RpZmljYXRpb24iLCJ1c2VyTm90aWZpY2F0aW9uIiwiZm9yRWFjaCIsImVycm9yIiwiY2F0Y2giLCJlcnIiLCJhZGQiLCJ3aW5kb3ciLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/index/home.dev.js\n");

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