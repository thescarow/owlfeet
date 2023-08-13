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

eval(";\n\n(async function () {\n  if (!IS_INIT_SOCKET_MODULE) {\n    let {\n      io\n    } = await __webpack_require__.e(/*! import() */ \"vendors-node_modules_socket_io-client_build_esm_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\"));\n    let clientSocketOptions = {\n      query: {\n        socketType: \"all\"\n      }\n    };\n\n    if (pageName === \"call\") {\n      clientSocketOptions = {\n        query: {\n          socketType: \"call\"\n        }\n      };\n    }\n\n    socket = io(clientSocketOptions); // socket is define in mainLayout File\n\n    socket.on(\"connect\", () => {\n      console.log(\"socket connected\");\n    });\n    socket.on(\"connect_error\", err => {\n      console.log(\"socket connection error:\", err);\n    });\n    socket.on(\"disconnect\", reason => {\n      console.log(\"socket disconnect:\", reason);\n    });\n    socket.prependAny(function (eventName) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      console.log(\"eventName:\", eventName, \"args:\", args, \"socketId:\", socket.id);\n    }); //////////////////////////////////////////////////\n    //  define socket handler here\n\n    let {\n      createUserSocket\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_user-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/user-socket */ \"./dev-javascripts/socket/event-handler/user-socket/index.js\"));\n    createUserSocket(socket);\n\n    if (isLogin === false) {\n      let {\n        createUserAuthSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_user-auth-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/user-auth-socket */ \"./dev-javascripts/socket/event-handler/user-auth-socket/index.js\"));\n      createUserAuthSocket(socket);\n    }\n\n    if (pageName && pageName === \"call\") {\n      let {\n        createCallSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_call-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/call-socket */ \"./dev-javascripts/socket/event-handler/call-socket/index.js\"));\n      createCallSocket(socket);\n    }\n\n    if (pageName && pageName === \"home\") {\n      let {\n        createHomeSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_home-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/home-socket */ \"./dev-javascripts/socket/event-handler/home-socket/index.js\"));\n      createHomeSocket(socket);\n    }\n\n    if (pageName && pageName === \"profile\") {\n      let {\n        createProfileSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_profile-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/profile-socket */ \"./dev-javascripts/socket/event-handler/profile-socket/index.js\"));\n      createProfileSocket(socket);\n    }\n\n    if (pageName && pageName === \"chat\") {\n      let {\n        createChatSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_chat-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/chat-socket */ \"./dev-javascripts/socket/event-handler/chat-socket/index.js\"));\n      createChatSocket(socket);\n      let {\n        createMessageSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_message-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/message-socket */ \"./dev-javascripts/socket/event-handler/message-socket/index.js\"));\n      createMessageSocket(socket);\n    }\n\n    IS_INIT_SOCKET_MODULE = true;\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2luZGV4U29ja2V0LmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLHFCQUFMLEVBQTRCO0lBQzFCLElBQUk7TUFBRUM7SUFBRixJQUFTLE1BQU0sbU9BQW5CO0lBQ0EsSUFBSUMsbUJBQW1CLEdBQUc7TUFDeEJDLEtBQUssRUFBRTtRQUNMQyxVQUFVLEVBQUU7TUFEUDtJQURpQixDQUExQjs7SUFLQSxJQUFJQyxRQUFRLEtBQUssTUFBakIsRUFBeUI7TUFDdkJILG1CQUFtQixHQUFHO1FBQ3BCQyxLQUFLLEVBQUU7VUFDTEMsVUFBVSxFQUFFO1FBRFA7TUFEYSxDQUF0QjtJQUtEOztJQUNERSxNQUFNLEdBQUdMLEVBQUUsQ0FBQ0MsbUJBQUQsQ0FBWCxDQWQwQixDQWNPOztJQUNqQ0ksTUFBTSxDQUFDQyxFQUFQLENBQVUsU0FBVixFQUFxQixNQUFNO01BQ3pCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtJQUNELENBRkQ7SUFHQUgsTUFBTSxDQUFDQyxFQUFQLENBQVUsZUFBVixFQUEyQkcsR0FBRyxJQUFJO01BQ2hDRixPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q0MsR0FBeEM7SUFDRCxDQUZEO0lBR0FKLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLFlBQVYsRUFBd0JJLE1BQU0sSUFBSTtNQUNoQ0gsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NFLE1BQWxDO0lBQ0QsQ0FGRDtJQUlBTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsVUFBQ0MsU0FBRCxFQUF3QjtNQUFBLGtDQUFUQyxJQUFTO1FBQVRBLElBQVM7TUFBQTs7TUFDeENOLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLFlBREYsRUFFRUksU0FGRixFQUdFLE9BSEYsRUFJRUMsSUFKRixFQUtFLFdBTEYsRUFNRVIsTUFBTSxDQUFDUyxFQU5UO0lBUUQsQ0FURCxFQXpCMEIsQ0FvQzFCO0lBQ0E7O0lBQ0EsSUFBSTtNQUFFQztJQUFGLElBQXVCLE1BQU0sd1BBQWpDO0lBQ0FBLGdCQUFnQixDQUFDVixNQUFELENBQWhCOztJQUVBLElBQUlXLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtNQUNyQixJQUFJO1FBQUVDO01BQUYsSUFBMkIsTUFBTSx1UUFBckM7TUFHQUEsb0JBQW9CLENBQUNaLE1BQUQsQ0FBcEI7SUFDRDs7SUFFRCxJQUFJRCxRQUFRLElBQUlBLFFBQVEsS0FBSyxNQUE3QixFQUFxQztNQUNuQyxJQUFJO1FBQUVjO01BQUYsSUFBdUIsTUFBTSx3UEFBakM7TUFDQUEsZ0JBQWdCLENBQUNiLE1BQUQsQ0FBaEI7SUFDRDs7SUFFRCxJQUFJRCxRQUFRLElBQUlBLFFBQVEsS0FBSyxNQUE3QixFQUFxQztNQUNuQyxJQUFJO1FBQUVlO01BQUYsSUFBdUIsTUFBTSx3UEFBakM7TUFDQUEsZ0JBQWdCLENBQUNkLE1BQUQsQ0FBaEI7SUFDRDs7SUFFRCxJQUFJRCxRQUFRLElBQUlBLFFBQVEsS0FBSyxTQUE3QixFQUF3QztNQUN0QyxJQUFJO1FBQUVnQjtNQUFGLElBQTBCLE1BQU0saVFBQXBDO01BR0FBLG1CQUFtQixDQUFDZixNQUFELENBQW5CO0lBQ0Q7O0lBRUQsSUFBSUQsUUFBUSxJQUFJQSxRQUFRLEtBQUssTUFBN0IsRUFBcUM7TUFDbkMsSUFBSTtRQUFFaUI7TUFBRixJQUF1QixNQUFNLHdQQUFqQztNQUNBQSxnQkFBZ0IsQ0FBQ2hCLE1BQUQsQ0FBaEI7TUFFQSxJQUFJO1FBQUVpQjtNQUFGLElBQTBCLE1BQU0saVFBQXBDO01BR0FBLG1CQUFtQixDQUFDakIsTUFBRCxDQUFuQjtJQUNEOztJQUNETixxQkFBcUIsR0FBRyxJQUF4QjtFQUNEO0FBQ0YsQ0E3RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvaW5kZXhTb2NrZXQuZGV2LmpzP2EyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFJU19JTklUX1NPQ0tFVF9NT0RVTEUpIHtcclxuICAgIGxldCB7IGlvIH0gPSBhd2FpdCBpbXBvcnQoXCJzb2NrZXQuaW8tY2xpZW50XCIpXHJcbiAgICBsZXQgY2xpZW50U29ja2V0T3B0aW9ucyA9IHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBzb2NrZXRUeXBlOiBcImFsbFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJjYWxsXCIpIHtcclxuICAgICAgY2xpZW50U29ja2V0T3B0aW9ucyA9IHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgc29ja2V0VHlwZTogXCJjYWxsXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNvY2tldCA9IGlvKGNsaWVudFNvY2tldE9wdGlvbnMpIC8vIHNvY2tldCBpcyBkZWZpbmUgaW4gbWFpbkxheW91dCBGaWxlXHJcbiAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdGVkXCIpXHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdF9lcnJvclwiLCBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNvY2tldCBjb25uZWN0aW9uIGVycm9yOlwiLCBlcnIpXHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCByZWFzb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNvY2tldCBkaXNjb25uZWN0OlwiLCByZWFzb24pXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5wcmVwZW5kQW55KChldmVudE5hbWUsIC4uLmFyZ3MpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJldmVudE5hbWU6XCIsXHJcbiAgICAgICAgZXZlbnROYW1lLFxyXG4gICAgICAgIFwiYXJnczpcIixcclxuICAgICAgICBhcmdzLFxyXG4gICAgICAgIFwic29ja2V0SWQ6XCIsXHJcbiAgICAgICAgc29ja2V0LmlkXHJcbiAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vICBkZWZpbmUgc29ja2V0IGhhbmRsZXIgaGVyZVxyXG4gICAgbGV0IHsgY3JlYXRlVXNlclNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9ldmVudC1oYW5kbGVyL3VzZXItc29ja2V0XCIpXHJcbiAgICBjcmVhdGVVc2VyU29ja2V0KHNvY2tldClcclxuXHJcbiAgICBpZiAoaXNMb2dpbiA9PT0gZmFsc2UpIHtcclxuICAgICAgbGV0IHsgY3JlYXRlVXNlckF1dGhTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICBcIi4vZXZlbnQtaGFuZGxlci91c2VyLWF1dGgtc29ja2V0XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVVc2VyQXV0aFNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2VOYW1lICYmIHBhZ2VOYW1lID09PSBcImNhbGxcIikge1xyXG4gICAgICBsZXQgeyBjcmVhdGVDYWxsU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXCIuL2V2ZW50LWhhbmRsZXIvY2FsbC1zb2NrZXRcIilcclxuICAgICAgY3JlYXRlQ2FsbFNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2VOYW1lICYmIHBhZ2VOYW1lID09PSBcImhvbWVcIikge1xyXG4gICAgICBsZXQgeyBjcmVhdGVIb21lU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXCIuL2V2ZW50LWhhbmRsZXIvaG9tZS1zb2NrZXRcIilcclxuICAgICAgY3JlYXRlSG9tZVNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2VOYW1lICYmIHBhZ2VOYW1lID09PSBcInByb2ZpbGVcIikge1xyXG4gICAgICBsZXQgeyBjcmVhdGVQcm9maWxlU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2V2ZW50LWhhbmRsZXIvcHJvZmlsZS1zb2NrZXRcIlxyXG4gICAgICApXHJcbiAgICAgIGNyZWF0ZVByb2ZpbGVTb2NrZXQoc29ja2V0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYWdlTmFtZSAmJiBwYWdlTmFtZSA9PT0gXCJjaGF0XCIpIHtcclxuICAgICAgbGV0IHsgY3JlYXRlQ2hhdFNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9ldmVudC1oYW5kbGVyL2NoYXQtc29ja2V0XCIpXHJcbiAgICAgIGNyZWF0ZUNoYXRTb2NrZXQoc29ja2V0KVxyXG5cclxuICAgICAgbGV0IHsgY3JlYXRlTWVzc2FnZVNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi9ldmVudC1oYW5kbGVyL21lc3NhZ2Utc29ja2V0XCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNZXNzYWdlU29ja2V0KHNvY2tldClcclxuICAgIH1cclxuICAgIElTX0lOSVRfU09DS0VUX01PRFVMRSA9IHRydWVcclxuICB9XHJcbn0pKClcclxuIl0sIm5hbWVzIjpbIklTX0lOSVRfU09DS0VUX01PRFVMRSIsImlvIiwiY2xpZW50U29ja2V0T3B0aW9ucyIsInF1ZXJ5Iiwic29ja2V0VHlwZSIsInBhZ2VOYW1lIiwic29ja2V0Iiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVhc29uIiwicHJlcGVuZEFueSIsImV2ZW50TmFtZSIsImFyZ3MiLCJpZCIsImNyZWF0ZVVzZXJTb2NrZXQiLCJpc0xvZ2luIiwiY3JlYXRlVXNlckF1dGhTb2NrZXQiLCJjcmVhdGVDYWxsU29ja2V0IiwiY3JlYXRlSG9tZVNvY2tldCIsImNyZWF0ZVByb2ZpbGVTb2NrZXQiLCJjcmVhdGVDaGF0U29ja2V0IiwiY3JlYXRlTWVzc2FnZVNvY2tldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/indexSocket.dev.js\n");

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