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

eval("/////////////\n;\n\n(async function () {\n  // await import(\"./socket.dev\") // define socket here\n  let {\n    createMainNotification\n  } = await Promise.all(/*! import() */[__webpack_require__.e(\"dev-javascripts_common_mainNotification_dev_js\"), __webpack_require__.e(\"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sourceMaps_j-d9b4de1\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../common/mainNotification.dev.js */ \"./dev-javascripts/common/mainNotification.dev.js\")); //creating user notification\n\n  const userNotificationContainer = document.getElementById(\"userNotificationContainer\");\n  const userNotificationOpenBtn = document.getElementById(\"userNotificationOpenBtn\");\n  const userNotificationModal = document.getElementById(\"userNotificationModal\");\n  const userNotificationModalCloseBtn = document.getElementById(\"userNotificationModalCloseBtn\");\n  userNotificationOpenBtn.addEventListener(\"click\", async () => {\n    if (userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.remove(\"hide\");\n    fetch(\"/user-notification/data?totalReceivedNotificationCount=0\").then(response => {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return Promise.reject(response);\n    }).then(async data => {\n      if (data.isSuccess) {\n        if (data.userNotifications.length > 0) {\n          let {\n            createUserNotification\n          } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_index_js_createUserNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./js/createUserNotification.dev.js */ \"./dev-javascripts/index/js/createUserNotification.dev.js\"));\n          data.userNotifications.forEach(userNotification => {\n            createUserNotification(userNotificationContainer, userNotification);\n          });\n        } else {\n          let userNotificationStatus = document.getElementById(\"userNotificationStatus\");\n          if (userNotificationStatus.classList.contains(\"hide\")) userNotificationStatus.classList.remove(\"hide\");\n        }\n      } else {\n        createMainNotification(data.error, \"error\");\n      }\n    }).catch(err => {\n      createMainNotification(\"Server Error, Please Try Again\", \"error\");\n    });\n  });\n  userNotificationModalCloseBtn.addEventListener(\"click\", () => {\n    if (!userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.add(\"hide\");\n  }); // When the user clicks anywhere outside of the modal, close it\n\n  window.onclick = function (event) {\n    if (event.target === userNotificationModal) {\n      if (!userNotificationModal.classList.contains(\"hide\")) userNotificationModal.classList.add(\"hide\");\n    }\n  };\n})();\n\nconst allFeaturesBox = document.getElementById(\"allFeaturesBox\");\nallFeaturesBox.addEventListener(\"click\", e => {\n  const featureTitle = e.target.closest(`.feature__title`);\n\n  if (featureTitle && allFeaturesBox.contains(featureTitle)) {\n    const feature = e.target.closest(`.feature`);\n    feature.classList.toggle(\"feature--expand\");\n  } else {\n    const featureTopicTitle = e.target.closest(`.feature-topic__title`);\n\n    if (featureTopicTitle && allFeaturesBox.contains(featureTopicTitle)) {\n      const featureTopic = e.target.closest(`.feature-topic`);\n      featureTopic.classList.toggle(\"feature-topic--expand\");\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsQ0FMRDtBQU1ELENBbEVBOztBQW9FRCxNQUFNSyxjQUFjLEdBQUdoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCO0FBRUErQixjQUFjLENBQUMzQixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QzRCLENBQUMsSUFBSTtFQUM1QyxNQUFNQyxZQUFZLEdBQUdELENBQUMsQ0FBQ0YsTUFBRixDQUFTSSxPQUFULENBQWtCLGlCQUFsQixDQUFyQjs7RUFDQSxJQUFJRCxZQUFZLElBQUlGLGNBQWMsQ0FBQ3pCLFFBQWYsQ0FBd0IyQixZQUF4QixDQUFwQixFQUEyRDtJQUN6RCxNQUFNRSxPQUFPLEdBQUdILENBQUMsQ0FBQ0YsTUFBRixDQUFTSSxPQUFULENBQWtCLFVBQWxCLENBQWhCO0lBQ0FDLE9BQU8sQ0FBQzlCLFNBQVIsQ0FBa0IrQixNQUFsQixDQUF5QixpQkFBekI7RUFDRCxDQUhELE1BR087SUFDTCxNQUFNQyxpQkFBaUIsR0FBR0wsQ0FBQyxDQUFDRixNQUFGLENBQVNJLE9BQVQsQ0FBa0IsdUJBQWxCLENBQTFCOztJQUVBLElBQUlHLGlCQUFpQixJQUFJTixjQUFjLENBQUN6QixRQUFmLENBQXdCK0IsaUJBQXhCLENBQXpCLEVBQXFFO01BQ25FLE1BQU1DLFlBQVksR0FBR04sQ0FBQyxDQUFDRixNQUFGLENBQVNJLE9BQVQsQ0FBa0IsZ0JBQWxCLENBQXJCO01BQ0FJLFlBQVksQ0FBQ2pDLFNBQWIsQ0FBdUIrQixNQUF2QixDQUE4Qix1QkFBOUI7SUFDRDtFQUNGO0FBQ0YsQ0FiRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2luZGV4L2hvbWUuZGV2LmpzPzJmMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vL1xyXG47KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAvLyBhd2FpdCBpbXBvcnQoXCIuL3NvY2tldC5kZXZcIikgLy8gZGVmaW5lIHNvY2tldCBoZXJlXHJcbiAgbGV0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgXCIuLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXYuanNcIlxyXG4gIClcclxuICAvL2NyZWF0aW5nIHVzZXIgbm90aWZpY2F0aW9uXHJcbiAgY29uc3QgdXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJ1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyXCJcclxuICApXHJcbiAgY29uc3QgdXNlck5vdGlmaWNhdGlvbk9wZW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwidXNlck5vdGlmaWNhdGlvbk9wZW5CdG5cIlxyXG4gIClcclxuICBjb25zdCB1c2VyTm90aWZpY2F0aW9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJOb3RpZmljYXRpb25Nb2RhbFwiKVxyXG4gIGNvbnN0IHVzZXJOb3RpZmljYXRpb25Nb2RhbENsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInVzZXJOb3RpZmljYXRpb25Nb2RhbENsb3NlQnRuXCJcclxuICApXHJcbiAgdXNlck5vdGlmaWNhdGlvbk9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgIGlmICh1c2VyTm90aWZpY2F0aW9uTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSlcclxuICAgICAgdXNlck5vdGlmaWNhdGlvbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcblxyXG4gICAgZmV0Y2goXCIvdXNlci1ub3RpZmljYXRpb24vZGF0YT90b3RhbFJlY2VpdmVkTm90aWZpY2F0aW9uQ291bnQ9MFwiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YS51c2VyTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGNyZWF0ZVVzZXJOb3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgICAgICBcIi4vanMvY3JlYXRlVXNlck5vdGlmaWNhdGlvbi5kZXYuanNcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGRhdGEudXNlck5vdGlmaWNhdGlvbnMuZm9yRWFjaCh1c2VyTm90aWZpY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICBjcmVhdGVVc2VyTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgdXNlck5vdGlmaWNhdGlvbkNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHVzZXJOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdXNlck5vdGlmaWNhdGlvblN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgIFwidXNlck5vdGlmaWNhdGlvblN0YXR1c1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKHVzZXJOb3RpZmljYXRpb25TdGF0dXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSlcclxuICAgICAgICAgICAgICB1c2VyTm90aWZpY2F0aW9uU3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oZGF0YS5lcnJvciwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihcIlNlcnZlciBFcnJvciwgUGxlYXNlIFRyeSBBZ2FpblwiLCBcImVycm9yXCIpXHJcbiAgICAgIH0pXHJcbiAgfSlcclxuICB1c2VyTm90aWZpY2F0aW9uTW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCF1c2VyTm90aWZpY2F0aW9uTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSlcclxuICAgICAgdXNlck5vdGlmaWNhdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXHJcbiAgfSlcclxuXHJcbiAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT09IHVzZXJOb3RpZmljYXRpb25Nb2RhbCkge1xyXG4gICAgICBpZiAoIXVzZXJOb3RpZmljYXRpb25Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKVxyXG4gICAgICAgIHVzZXJOb3RpZmljYXRpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG4gICAgfVxyXG4gIH1cclxufSkoKVxyXG5cclxuY29uc3QgYWxsRmVhdHVyZXNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbEZlYXR1cmVzQm94XCIpXHJcblxyXG5hbGxGZWF0dXJlc0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgY29uc3QgZmVhdHVyZVRpdGxlID0gZS50YXJnZXQuY2xvc2VzdChgLmZlYXR1cmVfX3RpdGxlYClcclxuICBpZiAoZmVhdHVyZVRpdGxlICYmIGFsbEZlYXR1cmVzQm94LmNvbnRhaW5zKGZlYXR1cmVUaXRsZSkpIHtcclxuICAgIGNvbnN0IGZlYXR1cmUgPSBlLnRhcmdldC5jbG9zZXN0KGAuZmVhdHVyZWApXHJcbiAgICBmZWF0dXJlLmNsYXNzTGlzdC50b2dnbGUoXCJmZWF0dXJlLS1leHBhbmRcIilcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZmVhdHVyZVRvcGljVGl0bGUgPSBlLnRhcmdldC5jbG9zZXN0KGAuZmVhdHVyZS10b3BpY19fdGl0bGVgKVxyXG5cclxuICAgIGlmIChmZWF0dXJlVG9waWNUaXRsZSAmJiBhbGxGZWF0dXJlc0JveC5jb250YWlucyhmZWF0dXJlVG9waWNUaXRsZSkpIHtcclxuICAgICAgY29uc3QgZmVhdHVyZVRvcGljID0gZS50YXJnZXQuY2xvc2VzdChgLmZlYXR1cmUtdG9waWNgKVxyXG4gICAgICBmZWF0dXJlVG9waWMuY2xhc3NMaXN0LnRvZ2dsZShcImZlYXR1cmUtdG9waWMtLWV4cGFuZFwiKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sIm5hbWVzIjpbImNyZWF0ZU1haW5Ob3RpZmljYXRpb24iLCJ1c2VyTm90aWZpY2F0aW9uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJOb3RpZmljYXRpb25PcGVuQnRuIiwidXNlck5vdGlmaWNhdGlvbk1vZGFsIiwidXNlck5vdGlmaWNhdGlvbk1vZGFsQ2xvc2VCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJkYXRhIiwiaXNTdWNjZXNzIiwidXNlck5vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJjcmVhdGVVc2VyTm90aWZpY2F0aW9uIiwiZm9yRWFjaCIsInVzZXJOb3RpZmljYXRpb24iLCJ1c2VyTm90aWZpY2F0aW9uU3RhdHVzIiwiZXJyb3IiLCJjYXRjaCIsImVyciIsImFkZCIsIndpbmRvdyIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsImFsbEZlYXR1cmVzQm94IiwiZSIsImZlYXR1cmVUaXRsZSIsImNsb3Nlc3QiLCJmZWF0dXJlIiwidG9nZ2xlIiwiZmVhdHVyZVRvcGljVGl0bGUiLCJmZWF0dXJlVG9waWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/index/home.dev.js\n");

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