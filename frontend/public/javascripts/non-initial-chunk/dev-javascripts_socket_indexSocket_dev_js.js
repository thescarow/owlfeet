/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_socket_indexSocket_dev_js"],{

/***/ "./dev-javascripts/socket/indexSocket.dev.js":
/*!***************************************************!*\
  !*** ./dev-javascripts/socket/indexSocket.dev.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval(";\n\n(async function () {\n  if (!IS_INIT_SOCKET_MODULE) {\n    let {\n      io\n    } = await __webpack_require__.e(/*! import() */ \"vendors-node_modules_socket_io-client_build_esm_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\"));\n    socket = io(); // socket is define in mainLayout File\n\n    socket.on(\"connect\", () => {\n      console.log(\"client connected\");\n    });\n    socket.on(\"connect_error\", err => {\n      console.log(\"client connection error:\", err);\n    });\n    socket.on(\"disconnect\", reason => {\n      console.log(\"client disconnect:\", reason);\n    });\n    socket.prependAny(function (eventName) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      console.log(\"socketId:\", socket.id, \"socket event:\", \"_____eventName:\", eventName, \"____args:\", args);\n    }); //////////////////////////////////////////////////\n    //  define socket handler here\n\n    let {\n      createUserSocket\n    } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_user-socket_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/user-socket */ \"./dev-javascripts/socket/event-handler/user-socket/index.js\"));\n    createUserSocket(socket);\n\n    if (pageName && pageName === \"home\") {\n      let {\n        createHomeSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_homeSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/homeSocket.dev.js */ \"./dev-javascripts/socket/event-handler/homeSocket.dev.js\"));\n      createHomeSocket(socket);\n    }\n\n    if (pageName && pageName === \"profile\") {\n      if (isLogin && isLogin === true) {\n        let {\n          createProfileSocket\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_profile-socket_mainProfile_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/profile-socket/mainProfile.dev.js */ \"./dev-javascripts/socket/event-handler/profile-socket/mainProfile.dev.js\"));\n        createProfileSocket(socket);\n      }\n\n      if (isOwner === false) {\n        let {\n          createUpdateForAllSocket\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_profile-socket_updateForAllSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/profile-socket/updateForAllSocket.dev.js */ \"./dev-javascripts/socket/event-handler/profile-socket/updateForAllSocket.dev.js\"));\n        createUpdateForAllSocket(socket);\n      }\n    }\n\n    if (pageName && pageName === \"chat\") {\n      let {\n        createMainChatSocket\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_socket_event-handler_chat-socket_mainChatSocket_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./event-handler/chat-socket/mainChatSocket.dev.js */ \"./dev-javascripts/socket/event-handler/chat-socket/mainChatSocket.dev.js\"));\n      createMainChatSocket(socket);\n    }\n\n    IS_INIT_SOCKET_MODULE = true;\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2luZGV4U29ja2V0LmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFBQyxDQUFDLGtCQUFrQjtFQUNsQixJQUFJLENBQUNBLHFCQUFMLEVBQTRCO0lBQzFCLElBQUk7TUFBRUM7SUFBRixJQUFTLE1BQU0sbU9BQW5CO0lBQ0FDLE1BQU0sR0FBR0QsRUFBRSxFQUFYLENBRjBCLENBRVo7O0lBQ2RDLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLFNBQVYsRUFBcUIsTUFBTTtNQUN6QkMsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7SUFDRCxDQUZEO0lBR0FILE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLGVBQVYsRUFBMkJHLEdBQUcsSUFBSTtNQUNoQ0YsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NDLEdBQXhDO0lBQ0QsQ0FGRDtJQUdBSixNQUFNLENBQUNDLEVBQVAsQ0FBVSxZQUFWLEVBQXdCSSxNQUFNLElBQUk7TUFDaENILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRSxNQUFsQztJQUNELENBRkQ7SUFJQUwsTUFBTSxDQUFDTSxVQUFQLENBQWtCLFVBQUNDLFNBQUQsRUFBd0I7TUFBQSxrQ0FBVEMsSUFBUztRQUFUQSxJQUFTO01BQUE7O01BQ3hDTixPQUFPLENBQUNDLEdBQVIsQ0FDRSxXQURGLEVBRUVILE1BQU0sQ0FBQ1MsRUFGVCxFQUdFLGVBSEYsRUFJRSxpQkFKRixFQUtFRixTQUxGLEVBTUUsV0FORixFQU9FQyxJQVBGO0lBU0QsQ0FWRCxFQWIwQixDQXdCMUI7SUFDQTs7SUFDQSxJQUFJO01BQUVFO0lBQUYsSUFBdUIsTUFBTSx3UEFBakM7SUFDQUEsZ0JBQWdCLENBQUNWLE1BQUQsQ0FBaEI7O0lBQ0EsSUFBSVcsUUFBUSxJQUFJQSxRQUFRLEtBQUssTUFBN0IsRUFBcUM7TUFDbkMsSUFBSTtRQUFFQztNQUFGLElBQXVCLE1BQU0sd1BBQWpDO01BR0FBLGdCQUFnQixDQUFDWixNQUFELENBQWhCO0lBQ0Q7O0lBQ0QsSUFBSVcsUUFBUSxJQUFJQSxRQUFRLEtBQUssU0FBN0IsRUFBd0M7TUFDdEMsSUFBSUUsT0FBTyxJQUFJQSxPQUFPLEtBQUssSUFBM0IsRUFBaUM7UUFDL0IsSUFBSTtVQUFFQztRQUFGLElBQTBCLE1BQU0sd1NBQXBDO1FBR0FBLG1CQUFtQixDQUFDZCxNQUFELENBQW5CO01BQ0Q7O01BQ0QsSUFBSWUsT0FBTyxLQUFLLEtBQWhCLEVBQXVCO1FBQ3JCLElBQUk7VUFBRUM7UUFBRixJQUErQixNQUFNLDZUQUF6QztRQUdBQSx3QkFBd0IsQ0FBQ2hCLE1BQUQsQ0FBeEI7TUFDRDtJQUNGOztJQUVELElBQUlXLFFBQVEsSUFBSUEsUUFBUSxLQUFLLE1BQTdCLEVBQXFDO01BQ25DLElBQUk7UUFBRU07TUFBRixJQUEyQixNQUFNLHdTQUFyQztNQUdBQSxvQkFBb0IsQ0FBQ2pCLE1BQUQsQ0FBcEI7SUFDRDs7SUFDREYscUJBQXFCLEdBQUcsSUFBeEI7RUFDRDtBQUNGLENBMURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvc29ja2V0L2luZGV4U29ja2V0LmRldi5qcz9hMjE0Il0sInNvdXJjZXNDb250ZW50IjpbIjsoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGlmICghSVNfSU5JVF9TT0NLRVRfTU9EVUxFKSB7XHJcbiAgICBsZXQgeyBpbyB9ID0gYXdhaXQgaW1wb3J0KFwic29ja2V0LmlvLWNsaWVudFwiKVxyXG4gICAgc29ja2V0ID0gaW8oKSAvLyBzb2NrZXQgaXMgZGVmaW5lIGluIG1haW5MYXlvdXQgRmlsZVxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpZW50IGNvbm5lY3RlZFwiKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImNvbm5lY3RfZXJyb3JcIiwgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyKVxyXG4gICAgfSlcclxuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgcmVhc29uID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgZGlzY29ubmVjdDpcIiwgcmVhc29uKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQucHJlcGVuZEFueSgoZXZlbnROYW1lLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwic29ja2V0SWQ6XCIsXHJcbiAgICAgICAgc29ja2V0LmlkLFxyXG4gICAgICAgIFwic29ja2V0IGV2ZW50OlwiLFxyXG4gICAgICAgIFwiX19fX19ldmVudE5hbWU6XCIsXHJcbiAgICAgICAgZXZlbnROYW1lLFxyXG4gICAgICAgIFwiX19fX2FyZ3M6XCIsXHJcbiAgICAgICAgYXJnc1xyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vICBkZWZpbmUgc29ja2V0IGhhbmRsZXIgaGVyZVxyXG4gICAgbGV0IHsgY3JlYXRlVXNlclNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9ldmVudC1oYW5kbGVyL3VzZXItc29ja2V0XCIpXHJcbiAgICBjcmVhdGVVc2VyU29ja2V0KHNvY2tldClcclxuICAgIGlmIChwYWdlTmFtZSAmJiBwYWdlTmFtZSA9PT0gXCJob21lXCIpIHtcclxuICAgICAgbGV0IHsgY3JlYXRlSG9tZVNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIFwiLi9ldmVudC1oYW5kbGVyL2hvbWVTb2NrZXQuZGV2LmpzXCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVIb21lU29ja2V0KHNvY2tldClcclxuICAgIH1cclxuICAgIGlmIChwYWdlTmFtZSAmJiBwYWdlTmFtZSA9PT0gXCJwcm9maWxlXCIpIHtcclxuICAgICAgaWYgKGlzTG9naW4gJiYgaXNMb2dpbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCB7IGNyZWF0ZVByb2ZpbGVTb2NrZXQgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgIFwiLi9ldmVudC1oYW5kbGVyL3Byb2ZpbGUtc29ja2V0L21haW5Qcm9maWxlLmRldi5qc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZVByb2ZpbGVTb2NrZXQoc29ja2V0KVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc093bmVyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB7IGNyZWF0ZVVwZGF0ZUZvckFsbFNvY2tldCB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgXCIuL2V2ZW50LWhhbmRsZXIvcHJvZmlsZS1zb2NrZXQvdXBkYXRlRm9yQWxsU29ja2V0LmRldi5qc1wiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZVVwZGF0ZUZvckFsbFNvY2tldChzb2NrZXQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZU5hbWUgJiYgcGFnZU5hbWUgPT09IFwiY2hhdFwiKSB7XHJcbiAgICAgIGxldCB7IGNyZWF0ZU1haW5DaGF0U29ja2V0IH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgXCIuL2V2ZW50LWhhbmRsZXIvY2hhdC1zb2NrZXQvbWFpbkNoYXRTb2NrZXQuZGV2LmpzXCJcclxuICAgICAgKVxyXG4gICAgICBjcmVhdGVNYWluQ2hhdFNvY2tldChzb2NrZXQpXHJcbiAgICB9XHJcbiAgICBJU19JTklUX1NPQ0tFVF9NT0RVTEUgPSB0cnVlXHJcbiAgfVxyXG59KSgpXHJcbiJdLCJuYW1lcyI6WyJJU19JTklUX1NPQ0tFVF9NT0RVTEUiLCJpbyIsInNvY2tldCIsIm9uIiwiY29uc29sZSIsImxvZyIsImVyciIsInJlYXNvbiIsInByZXBlbmRBbnkiLCJldmVudE5hbWUiLCJhcmdzIiwiaWQiLCJjcmVhdGVVc2VyU29ja2V0IiwicGFnZU5hbWUiLCJjcmVhdGVIb21lU29ja2V0IiwiaXNMb2dpbiIsImNyZWF0ZVByb2ZpbGVTb2NrZXQiLCJpc093bmVyIiwiY3JlYXRlVXBkYXRlRm9yQWxsU29ja2V0IiwiY3JlYXRlTWFpbkNoYXRTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/socket/indexSocket.dev.js\n");

/***/ })

}]);