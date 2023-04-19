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

/***/ "./dev-javascripts/socket/indexSocket.dev.js":
/*!***************************************************!*\
  !*** ./dev-javascripts/socket/indexSocket.dev.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval(";\n\n(async function () {\n  if (!IS_INIT_SOCKET_MODULE) {\n    let {\n      io\n    } = await __webpack_require__.e(/*! import() */ \"vendors-node_modules_socket_io-client_build_esm_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\"));\n    socket = io(); // socket is define in mainLayout File\n\n    socket.on(\"connect\", () => {\n      console.log(\"client connected\");\n    });\n    socket.on(\"connect_error\", err => {\n      console.log(\"client connection error:\", err);\n    });\n    socket.on(\"disconnect\", reason => {\n      console.log(\"client disconnect:\", reason);\n    });\n    socket.prependAny(function (eventName) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      console.log(\"socketId:\", socket.id, \"_____eventName:\", eventName, \"____args:\", args);\n    }); //////////////////////////////////////////////////\n    //  define socket handler here\n\n    let {\n      createUserSocket\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_user-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/user-socket */ \"./dev-javascripts/socket/event-handler/user-socket/index.js\"));\n    createUserSocket(socket);\n\n    if (pageName && pageName === \"home\") {\n      let {\n        createHomeSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_home-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/home-socket */ \"./dev-javascripts/socket/event-handler/home-socket/index.js\"));\n      createHomeSocket(socket);\n    }\n\n    if (pageName && pageName === \"profile\") {\n      let {\n        createProfileSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_profile-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/profile-socket */ \"./dev-javascripts/socket/event-handler/profile-socket/index.js\"));\n      createProfileSocket(socket);\n    }\n\n    if (pageName && pageName === \"chat\") {\n      let {\n        createChatSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_chat-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/chat-socket */ \"./dev-javascripts/socket/event-handler/chat-socket/index.js\"));\n      createChatSocket(socket);\n    }\n\n    IS_INIT_SOCKET_MODULE = true;\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2luZGV4U29ja2V0LmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLHFCQUFMLEVBQTRCO0lBQzFCLElBQUk7TUFBRUM7SUFBRixJQUFTLE1BQU0sbU9BQW5CO0lBQ0FDLE1BQU0sR0FBR0QsRUFBRSxFQUFYLENBRjBCLENBRVo7O0lBQ2RDLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLFNBQVYsRUFBcUIsTUFBTTtNQUN6QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7SUFDRCxDQUZEO0lBR0FILE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLGVBQVYsRUFBMkJHLEdBQUcsSUFBSTtNQUNoQ0YsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NDLEdBQXhDO0lBQ0QsQ0FGRDtJQUdBSixNQUFNLENBQUNDLEVBQVAsQ0FBVSxZQUFWLEVBQXdCSSxNQUFNLElBQUk7TUFDaENILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRSxNQUFsQztJQUNELENBRkQ7SUFJQUwsTUFBTSxDQUFDTSxVQUFQLENBQWtCLFVBQUNDLFNBQUQsRUFBd0I7TUFBQSxrQ0FBVEMsSUFBUztRQUFUQSxJQUFTO01BQUE7O01BQ3hDTixPQUFPLENBQUNDLEdBQVIsQ0FDRSxXQURGLEVBRUVILE1BQU0sQ0FBQ1MsRUFGVCxFQUdFLGlCQUhGLEVBSUVGLFNBSkYsRUFLRSxXQUxGLEVBTUVDLElBTkY7SUFRRCxDQVRELEVBYjBCLENBdUIxQjtJQUNBOztJQUNBLElBQUk7TUFBRUU7SUFBRixJQUF1QixNQUFNLHdQQUFqQztJQUNBQSxnQkFBZ0IsQ0FBQ1YsTUFBRCxDQUFoQjs7SUFFQSxJQUFJVyxRQUFRLElBQUlBLFFBQVEsS0FBSyxNQUE3QixFQUFxQztNQUNuQyxJQUFJO1FBQUVDO01BQUYsSUFBdUIsTUFBTSx3UEFBakM7TUFDQUEsZ0JBQWdCLENBQUNaLE1BQUQsQ0FBaEI7SUFDRDs7SUFFRCxJQUFJVyxRQUFRLElBQUlBLFFBQVEsS0FBSyxTQUE3QixFQUF3QztNQUN0QyxJQUFJO1FBQUVFO01BQUYsSUFBMEIsTUFBTSxpUUFBcEM7TUFHQUEsbUJBQW1CLENBQUNiLE1BQUQsQ0FBbkI7SUFDRDs7SUFFRCxJQUFJVyxRQUFRLElBQUlBLFFBQVEsS0FBSyxNQUE3QixFQUFxQztNQUNuQyxJQUFJO1FBQUVHO01BQUYsSUFBdUIsTUFBTSx3UEFBakM7TUFDQUEsZ0JBQWdCLENBQUNkLE1BQUQsQ0FBaEI7SUFDRDs7SUFDREYscUJBQXFCLEdBQUcsSUFBeEI7RUFDRDtBQUNGLENBL0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2luZGV4U29ja2V0LmRldi5qcz9hMjE0Il0sInNvdXJjZXNDb250ZW50IjpbIjsoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGlmICghSVNfSU5JVF9TT0NLRVRfTU9EVUxFKSB7XHJcbiAgICBsZXQgeyBpbyB9ID0gYXdhaXQgaW1wb3J0KFwic29ja2V0LmlvLWNsaWVudFwiKVxyXG4gICAgc29ja2V0ID0gaW8oKSAvLyBzb2NrZXQgaXMgZGVmaW5lIGluIG1haW5MYXlvdXQgRmlsZVxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpZW50IGNvbm5lY3RlZFwiKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNvbm5lY3RfZXJyb3JcIiwgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgcmVhc29uID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgZGlzY29ubmVjdDpcIiwgcmVhc29uKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQucHJlcGVuZEFueSgoZXZlbnROYW1lLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwic29ja2V0SWQ6XCIsXHJcbiAgICAgICAgc29ja2V0LmlkLFxyXG4gICAgICAgIFwiX19fX19ldmVudE5hbWU6XCIsXHJcbiAgICAgICAgZXZlbnROYW1lLFxyXG4gICAgICAgIFwiX19fX2FyZ3M6XCIsXHJcbiAgICAgICAgYXJnc1xyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vICBkZWZpbmUgc29ja2V0IGhhbmRsZXIgaGVyZVxyXG4gICAgbGV0IHsgY3JlYXRlVXNlclNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9ldmVudC1oYW5kbGVyL3VzZXItc29ja2V0XCIpXHJcbiAgICBjcmVhdGVVc2VyU29ja2V0KHNvY2tldClcclxuXHJcbiAgICBpZiAocGFnZU5hbWUgJiYgcGFnZU5hbWUgPT09IFwiaG9tZVwiKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZUhvbWVTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcIi4vZXZlbnQtaGFuZGxlci9ob21lLXNvY2tldFwiKVxyXG4gICAgICBjcmVhdGVIb21lU29ja2V0KHNvY2tldClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgJiYgcGFnZU5hbWUgPT09IFwicHJvZmlsZVwiKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZVByb2ZpbGVTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4vZXZlbnQtaGFuZGxlci9wcm9maWxlLXNvY2tldFwiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlUHJvZmlsZVNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2VOYW1lICYmIHBhZ2VOYW1lID09PSBcImNoYXRcIikge1xyXG4gICAgICBsZXQgeyBjcmVhdGVDaGF0U29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXCIuL2V2ZW50LWhhbmRsZXIvY2hhdC1zb2NrZXRcIilcclxuICAgICAgY3JlYXRlQ2hhdFNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcbiAgICBJU19JTklUX1NPQ0tFVF9NT0RVTEUgPSB0cnVlXHJcbiAgfVxyXG59KSgpXHJcbiJdLCJuYW1lcyI6WyJJU19JTklUX1NPQ0tFVF9NT0RVTEUiLCJpbyIsInNvY2tldCIsIm9uIiwiY29uc29sZSIsImxvZyIsImVyciIsInJlYXNvbiIsInByZXBlbmRBbnkiLCJldmVudE5hbWUiLCJhcmdzIiwiaWQiLCJjcmVhdGVVc2VyU29ja2V0IiwicGFnZU5hbWUiLCJjcmVhdGVIb21lU29ja2V0IiwiY3JlYXRlUHJvZmlsZVNvY2tldCIsImNyZWF0ZUNoYXRTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/indexSocket.dev.js\n");

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
/******/ 			"indexSocket": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-javascripts/socket/indexSocket.dev.js");
/******/ 	
/******/ })()
;