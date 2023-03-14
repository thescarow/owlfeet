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

/***/ "./dev-javascripts/socket/indexSocket.dev.js":
/*!***************************************************!*\
  !*** ./dev-javascripts/socket/indexSocket.dev.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendChatMessageStartTypingSocket\": () => (/* binding */ sendChatMessageStartTypingSocket),\n/* harmony export */   \"sendChatMessageStopTypingSocket\": () => (/* binding */ sendChatMessageStopTypingSocket)\n/* harmony export */ });\n;\n\n(async function () {\n  if (!isInitModule) {\n    console.log(\"init isInitModule:\", isInitModule, \"socket:\", socket);\n    let {\n      io\n    } = await __webpack_require__.e(/*! import() */ \"vendors-node_modules_socket_io-client_build_esm_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\"));\n    socket = io();\n    console.log(\"checking socket:\", socket);\n    socket.on(\"connect\", () => {\n      console.log(\"client connected\");\n    });\n    socket.on(\"connect_error\", err => {\n      console.log(\"client connection error:\", err);\n    });\n    socket.on(\"disconnect\", reason => {\n      console.log(\"client disconnect:\", reason);\n    });\n    socket.prependAny(function (eventName) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      console.log(\"socketId:\", socket.id, \"socket event:\", \"_____eventName:\", eventName, \"____args:\", args);\n    }); //////////////////////////////////////////////////\n    //  define socket handler here\n\n    let {\n      createUserSocket\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_user-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./user-socket */ \"./dev-javascripts/socket/user-socket/index.js\"));\n    createUserSocket(socket);\n\n    if (pageName && pageName === \"home\") {\n      let {\n        createHomeSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_homeSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./homeSocket.dev.js */ \"./dev-javascripts/socket/homeSocket.dev.js\"));\n      createHomeSocket(socket);\n    }\n\n    if (pageName && pageName === \"profile\") {\n      if (isLogin && isLogin === true) {\n        let {\n          createProfileSocket\n        } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_user_js_createUserBox_dev_js\"), __webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js-dev-javascripts_socket_profile-socket_mainProf-26390a\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile-socket/mainProfile.dev.js */ \"./dev-javascripts/socket/profile-socket/mainProfile.dev.js\"));\n        createProfileSocket(socket);\n      }\n\n      if (isOwner === false) {\n        let {\n          createUpdateForAllSocket\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_profile-socket_updateForAllSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./profile-socket/updateForAllSocket.dev.js */ \"./dev-javascripts/socket/profile-socket/updateForAllSocket.dev.js\"));\n        createUpdateForAllSocket(socket);\n      }\n    }\n\n    if (pageName && pageName === \"chat\") {\n      let {\n        createMainChatSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_chat-socket_mainChatSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./chat-socket/mainChatSocket.dev.js */ \"./dev-javascripts/socket/chat-socket/mainChatSocket.dev.js\"));\n      createMainChatSocket(socket);\n    }\n\n    isInitModule = true;\n  }\n\n  console.log(\"init outside block isInitModule:\", isInitModule, \"socket:\", socket);\n})();\n\nconsole.log(\"init outside function isInitModule:\", isInitModule, \"socket:\", socket);\nfunction sendChatMessageStartTypingSocket(chatId) {\n  console.log(\"start isInitModule:\", isInitModule, \"socket:\", socket);\n  let eventData = {\n    chatId: chatId.toString()\n  }; // socket.emit(\"chat:message-start-typing\", eventData)\n}\nfunction sendChatMessageStopTypingSocket(chatId) {\n  console.log(\"stop isInitModule:\", isInitModule, \"socket:\", socket);\n  let eventData = {\n    chatId: chatId.toString()\n  }; // socket.emit(\"chat:message-stop-typing\", eventData)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2luZGV4U29ja2V0LmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFDLENBQUMsa0JBQWtCO0VBQ2xCLElBQUksQ0FBQ0EsWUFBTCxFQUFtQjtJQUNqQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NGLFlBQWxDLEVBQWdELFNBQWhELEVBQTJERyxNQUEzRDtJQUNBLElBQUk7TUFBRUM7SUFBRixJQUFTLE1BQU0sbU9BQW5CO0lBQ0FELE1BQU0sR0FBR0MsRUFBRSxFQUFYO0lBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDQyxNQUFoQztJQUNBQSxNQUFNLENBQUNFLEVBQVAsQ0FBVSxTQUFWLEVBQXFCLE1BQU07TUFDekJKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0lBQ0QsQ0FGRDtJQUdBQyxNQUFNLENBQUNFLEVBQVAsQ0FBVSxlQUFWLEVBQTJCQyxHQUFHLElBQUk7TUFDaENMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBQXdDSSxHQUF4QztJQUNELENBRkQ7SUFHQUgsTUFBTSxDQUFDRSxFQUFQLENBQVUsWUFBVixFQUF3QkUsTUFBTSxJQUFJO01BQ2hDTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0ssTUFBbEM7SUFDRCxDQUZEO0lBSUFKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixVQUFDQyxTQUFELEVBQXdCO01BQUEsa0NBQVRDLElBQVM7UUFBVEEsSUFBUztNQUFBOztNQUN4Q1QsT0FBTyxDQUFDQyxHQUFSLENBQ0UsV0FERixFQUVFQyxNQUFNLENBQUNRLEVBRlQsRUFHRSxlQUhGLEVBSUUsaUJBSkYsRUFLRUYsU0FMRixFQU1FLFdBTkYsRUFPRUMsSUFQRjtJQVNELENBVkQsRUFmaUIsQ0EwQmpCO0lBQ0E7O0lBQ0EsSUFBSTtNQUFFRTtJQUFGLElBQXVCLE1BQU0sOE1BQWpDO0lBQ0FBLGdCQUFnQixDQUFDVCxNQUFELENBQWhCOztJQUNBLElBQUlVLFFBQVEsSUFBSUEsUUFBUSxLQUFLLE1BQTdCLEVBQXFDO01BQ25DLElBQUk7UUFBRUM7TUFBRixJQUF1QixNQUFNLDhNQUFqQztNQUNBQSxnQkFBZ0IsQ0FBQ1gsTUFBRCxDQUFoQjtJQUNEOztJQUNELElBQUlVLFFBQVEsSUFBSUEsUUFBUSxLQUFLLFNBQTdCLEVBQXdDO01BQ3RDLElBQUlFLE9BQU8sSUFBSUEsT0FBTyxLQUFLLElBQTNCLEVBQWlDO1FBQy9CLElBQUk7VUFBRUM7UUFBRixJQUEwQixNQUFNLCtYQUFwQztRQUdBQSxtQkFBbUIsQ0FBQ2IsTUFBRCxDQUFuQjtNQUNEOztNQUNELElBQUljLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtRQUNyQixJQUFJO1VBQUVDO1FBQUYsSUFBK0IsTUFBTSxtUkFBekM7UUFHQUEsd0JBQXdCLENBQUNmLE1BQUQsQ0FBeEI7TUFDRDtJQUNGOztJQUVELElBQUlVLFFBQVEsSUFBSUEsUUFBUSxLQUFLLE1BQTdCLEVBQXFDO01BQ25DLElBQUk7UUFBRU07TUFBRixJQUEyQixNQUFNLDhQQUFyQztNQUdBQSxvQkFBb0IsQ0FBQ2hCLE1BQUQsQ0FBcEI7SUFDRDs7SUFDREgsWUFBWSxHQUFHLElBQWY7RUFDRDs7RUFDREMsT0FBTyxDQUFDQyxHQUFSLENBQ0Usa0NBREYsRUFFRUYsWUFGRixFQUdFLFNBSEYsRUFJRUcsTUFKRjtBQU1ELENBaEVBOztBQWlFREYsT0FBTyxDQUFDQyxHQUFSLENBQ0UscUNBREYsRUFFRUYsWUFGRixFQUdFLFNBSEYsRUFJRUcsTUFKRjtBQU1PLFNBQVNpQixnQ0FBVCxDQUEwQ0MsTUFBMUMsRUFBa0Q7RUFDdkRwQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0YsWUFBbkMsRUFBaUQsU0FBakQsRUFBNERHLE1BQTVEO0VBRUEsSUFBSW1CLFNBQVMsR0FBRztJQUNkRCxNQUFNLEVBQUVBLE1BQU0sQ0FBQ0UsUUFBUDtFQURNLENBQWhCLENBSHVELENBTXZEO0FBQ0Q7QUFDTSxTQUFTQywrQkFBVCxDQUF5Q0gsTUFBekMsRUFBaUQ7RUFDdERwQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsWUFBbEMsRUFBZ0QsU0FBaEQsRUFBMkRHLE1BQTNEO0VBQ0EsSUFBSW1CLFNBQVMsR0FBRztJQUNkRCxNQUFNLEVBQUVBLE1BQU0sQ0FBQ0UsUUFBUDtFQURNLENBQWhCLENBRnNELENBS3REO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9zb2NrZXQvaW5kZXhTb2NrZXQuZGV2LmpzP2EyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiOyhhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCFpc0luaXRNb2R1bGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5pdCBpc0luaXRNb2R1bGU6XCIsIGlzSW5pdE1vZHVsZSwgXCJzb2NrZXQ6XCIsIHNvY2tldClcclxuICAgIGxldCB7IGlvIH0gPSBhd2FpdCBpbXBvcnQoXCJzb2NrZXQuaW8tY2xpZW50XCIpXHJcbiAgICBzb2NrZXQgPSBpbygpXHJcbiAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIHNvY2tldDpcIiwgc29ja2V0KVxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpZW50IGNvbm5lY3RlZFwiKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNvbm5lY3RfZXJyb3JcIiwgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgcmVhc29uID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgZGlzY29ubmVjdDpcIiwgcmVhc29uKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQucHJlcGVuZEFueSgoZXZlbnROYW1lLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwic29ja2V0SWQ6XCIsXHJcbiAgICAgICAgc29ja2V0LmlkLFxyXG4gICAgICAgIFwic29ja2V0IGV2ZW50OlwiLFxyXG4gICAgICAgIFwiX19fX19ldmVudE5hbWU6XCIsXHJcbiAgICAgICAgZXZlbnROYW1lLFxyXG4gICAgICAgIFwiX19fX2FyZ3M6XCIsXHJcbiAgICAgICAgYXJnc1xyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vICBkZWZpbmUgc29ja2V0IGhhbmRsZXIgaGVyZVxyXG4gICAgbGV0IHsgY3JlYXRlVXNlclNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFwiLi91c2VyLXNvY2tldFwiKVxyXG4gICAgY3JlYXRlVXNlclNvY2tldChzb2NrZXQpXHJcbiAgICBpZiAocGFnZU5hbWUgJiYgcGFnZU5hbWUgPT09IFwiaG9tZVwiKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZUhvbWVTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcIi4vaG9tZVNvY2tldC5kZXYuanNcIilcclxuICAgICAgY3JlYXRlSG9tZVNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcbiAgICBpZiAocGFnZU5hbWUgJiYgcGFnZU5hbWUgPT09IFwicHJvZmlsZVwiKSB7XHJcbiAgICAgIGlmIChpc0xvZ2luICYmIGlzTG9naW4gPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgeyBjcmVhdGVQcm9maWxlU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4vcHJvZmlsZS1zb2NrZXQvbWFpblByb2ZpbGUuZGV2LmpzXCJcclxuICAgICAgICApXHJcbiAgICAgICAgY3JlYXRlUHJvZmlsZVNvY2tldChzb2NrZXQpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzT3duZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHsgY3JlYXRlVXBkYXRlRm9yQWxsU29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4vcHJvZmlsZS1zb2NrZXQvdXBkYXRlRm9yQWxsU29ja2V0LmRldi5qc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZVVwZGF0ZUZvckFsbFNvY2tldChzb2NrZXQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgJiYgcGFnZU5hbWUgPT09IFwiY2hhdFwiKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5DaGF0U29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2NoYXQtc29ja2V0L21haW5DaGF0U29ja2V0LmRldi5qc1wiXHJcbiAgICAgIClcclxuICAgICAgY3JlYXRlTWFpbkNoYXRTb2NrZXQoc29ja2V0KVxyXG4gICAgfVxyXG4gICAgaXNJbml0TW9kdWxlID0gdHJ1ZVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiaW5pdCBvdXRzaWRlIGJsb2NrIGlzSW5pdE1vZHVsZTpcIixcclxuICAgIGlzSW5pdE1vZHVsZSxcclxuICAgIFwic29ja2V0OlwiLFxyXG4gICAgc29ja2V0XHJcbiAgKVxyXG59KSgpXHJcbmNvbnNvbGUubG9nKFxyXG4gIFwiaW5pdCBvdXRzaWRlIGZ1bmN0aW9uIGlzSW5pdE1vZHVsZTpcIixcclxuICBpc0luaXRNb2R1bGUsXHJcbiAgXCJzb2NrZXQ6XCIsXHJcbiAgc29ja2V0XHJcbilcclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDaGF0TWVzc2FnZVN0YXJ0VHlwaW5nU29ja2V0KGNoYXRJZCkge1xyXG4gIGNvbnNvbGUubG9nKFwic3RhcnQgaXNJbml0TW9kdWxlOlwiLCBpc0luaXRNb2R1bGUsIFwic29ja2V0OlwiLCBzb2NrZXQpXHJcblxyXG4gIGxldCBldmVudERhdGEgPSB7XHJcbiAgICBjaGF0SWQ6IGNoYXRJZC50b1N0cmluZygpXHJcbiAgfVxyXG4gIC8vIHNvY2tldC5lbWl0KFwiY2hhdDptZXNzYWdlLXN0YXJ0LXR5cGluZ1wiLCBldmVudERhdGEpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQoY2hhdElkKSB7XHJcbiAgY29uc29sZS5sb2coXCJzdG9wIGlzSW5pdE1vZHVsZTpcIiwgaXNJbml0TW9kdWxlLCBcInNvY2tldDpcIiwgc29ja2V0KVxyXG4gIGxldCBldmVudERhdGEgPSB7XHJcbiAgICBjaGF0SWQ6IGNoYXRJZC50b1N0cmluZygpXHJcbiAgfVxyXG4gIC8vIHNvY2tldC5lbWl0KFwiY2hhdDptZXNzYWdlLXN0b3AtdHlwaW5nXCIsIGV2ZW50RGF0YSlcclxufVxyXG4iXSwibmFtZXMiOlsiaXNJbml0TW9kdWxlIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsImlvIiwib24iLCJlcnIiLCJyZWFzb24iLCJwcmVwZW5kQW55IiwiZXZlbnROYW1lIiwiYXJncyIsImlkIiwiY3JlYXRlVXNlclNvY2tldCIsInBhZ2VOYW1lIiwiY3JlYXRlSG9tZVNvY2tldCIsImlzTG9naW4iLCJjcmVhdGVQcm9maWxlU29ja2V0IiwiaXNPd25lciIsImNyZWF0ZVVwZGF0ZUZvckFsbFNvY2tldCIsImNyZWF0ZU1haW5DaGF0U29ja2V0Iiwic2VuZENoYXRNZXNzYWdlU3RhcnRUeXBpbmdTb2NrZXQiLCJjaGF0SWQiLCJldmVudERhdGEiLCJ0b1N0cmluZyIsInNlbmRDaGF0TWVzc2FnZVN0b3BUeXBpbmdTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/indexSocket.dev.js\n");

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
/******/ 			};
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-javascripts/socket/indexSocket.dev.js");
/******/ 	
/******/ })()
;