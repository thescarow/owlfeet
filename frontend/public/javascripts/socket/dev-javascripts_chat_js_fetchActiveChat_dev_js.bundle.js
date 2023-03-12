"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_chat_js_fetchActiveChat_dev_js"],{

/***/ "./dev-javascripts/chat/js/fetchActiveChat.dev.js":
/*!********************************************************!*\
  !*** ./dev-javascripts/chat/js/fetchActiveChat.dev.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchActiveChat\": () => (/* binding */ fetchActiveChat)\n/* harmony export */ });\n// activeChatData is define in main layout as global object\nasync function fetchActiveChat(chatId) {\n  let allChatSection = document.getElementById(\"allChatSection\");\n  let activeChatSection = document.getElementById(\"activeChatSection\");\n  let activeChatId = activeChatSection.dataset.chatId;\n\n  if (activeChatId !== \"\" && activeChatId === chatId) {\n    history.pushState(activeChatData, \"\", `/chat/#${chatId}`);\n    document.title = `${activeChatData.chatName} chat `;\n    allChatSection.classList.add(\"all-chat-section--hide\");\n    activeChatSection.classList.remove(\"active-chat-section--hide\");\n  } else {\n    fetch(`/chat/data/chat/${chatId}`).then(response => {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return Promise.reject(response);\n    }).then(async data => {\n      if (data.isSuccess) {\n        activeChatData = { ...data.chat\n        };\n        history.pushState(data.chat, \"\", `/chat/#${chatId}`);\n        document.title = `${data.chat.chatName} chat `;\n        let {\n          showActiveChatSection\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n        showActiveChatSection(data.chat);\n      } else {\n        history.replaceState({}, \"\", \"/chat\");\n        document.title = \"Chats\";\n        allChatSection.classList.remove(\"all-chat-section--hide\");\n        activeChatSection.classList.add(\"active-chat-section--hide\");\n        let {\n          createMainNotification\n        } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n        createMainNotification(data.error, \"error\");\n      }\n    }).catch(async err => {\n      console.log(\"error in fetch Active Chat:\", err);\n      history.replaceState({}, \"\", \"/chat\");\n      document.title = \"Chats\";\n      allChatSection.classList.remove(\"all-chat-section--hide\");\n      activeChatSection.classList.add(\"active-chat-section--hide\");\n      let {\n        createMainNotification\n      } = await __webpack_require__.e(/*! import() */ \"dev-javascripts_common_mainNotification_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\"));\n      createMainNotification(\"Server Error Or May be You Are Accessing Wrong Chat.\", \"info\");\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9mZXRjaEFjdGl2ZUNoYXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNPLGVBQWVBLGVBQWYsQ0FBK0JDLE1BQS9CLEVBQXVDO0VBQzVDLElBQUlDLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFyQjtFQUNBLElBQUlDLGlCQUFpQixHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQXhCO0VBRUEsSUFBSUUsWUFBWSxHQUFHRCxpQkFBaUIsQ0FBQ0UsT0FBbEIsQ0FBMEJOLE1BQTdDOztFQUVBLElBQUlLLFlBQVksS0FBSyxFQUFqQixJQUF1QkEsWUFBWSxLQUFLTCxNQUE1QyxFQUFvRDtJQUNsRE8sT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxjQUFsQixFQUFrQyxFQUFsQyxFQUF1QyxVQUFTVCxNQUFPLEVBQXZEO0lBQ0FFLFFBQVEsQ0FBQ1EsS0FBVCxHQUFrQixHQUFFRCxjQUFjLENBQUNFLFFBQVMsUUFBNUM7SUFDQVYsY0FBYyxDQUFDVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2Qix3QkFBN0I7SUFDQVQsaUJBQWlCLENBQUNRLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQywyQkFBbkM7RUFDRCxDQUxELE1BS087SUFDTEMsS0FBSyxDQUFFLG1CQUFrQmYsTUFBTyxFQUEzQixDQUFMLENBQ0dnQixJQURILENBQ1FDLFFBQVEsSUFBSTtNQUNoQixJQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7UUFDZixPQUFPRCxRQUFRLENBQUNFLElBQVQsRUFBUDtNQUNEOztNQUNELE9BQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixRQUFmLENBQVA7SUFDRCxDQU5ILEVBT0dELElBUEgsQ0FPUSxNQUFNTSxJQUFOLElBQWM7TUFDbEIsSUFBSUEsSUFBSSxDQUFDQyxTQUFULEVBQW9CO1FBQ2xCZCxjQUFjLEdBQUcsRUFBRSxHQUFHYSxJQUFJLENBQUNFO1FBQVYsQ0FBakI7UUFDQWpCLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQmMsSUFBSSxDQUFDRSxJQUF2QixFQUE2QixFQUE3QixFQUFrQyxVQUFTeEIsTUFBTyxFQUFsRDtRQUNBRSxRQUFRLENBQUNRLEtBQVQsR0FBa0IsR0FBRVksSUFBSSxDQUFDRSxJQUFMLENBQVViLFFBQVMsUUFBdkM7UUFDQSxJQUFJO1VBQUVjO1FBQUYsSUFBNEIsTUFBTSw4T0FBdEM7UUFHQUEscUJBQXFCLENBQUNILElBQUksQ0FBQ0UsSUFBTixDQUFyQjtNQUNELENBUkQsTUFRTztRQUNMakIsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixPQUE3QjtRQUNBeEIsUUFBUSxDQUFDUSxLQUFULEdBQWlCLE9BQWpCO1FBQ0FULGNBQWMsQ0FBQ1csU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0Msd0JBQWhDO1FBQ0FWLGlCQUFpQixDQUFDUSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsMkJBQWhDO1FBQ0EsSUFBSTtVQUFFYztRQUFGLElBQTZCLE1BQU0sd09BQXZDO1FBR0FBLHNCQUFzQixDQUFDTCxJQUFJLENBQUNNLEtBQU4sRUFBYSxPQUFiLENBQXRCO01BQ0Q7SUFDRixDQTFCSCxFQTJCR0MsS0EzQkgsQ0EyQlMsTUFBTUMsR0FBTixJQUFhO01BQ2xCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0YsR0FBM0M7TUFDQXZCLE9BQU8sQ0FBQ21CLFlBQVIsQ0FBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsT0FBN0I7TUFDQXhCLFFBQVEsQ0FBQ1EsS0FBVCxHQUFpQixPQUFqQjtNQUNBVCxjQUFjLENBQUNXLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLHdCQUFoQztNQUNBVixpQkFBaUIsQ0FBQ1EsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLDJCQUFoQztNQUNBLElBQUk7UUFBRWM7TUFBRixJQUE2QixNQUFNLHdPQUF2QztNQUdBQSxzQkFBc0IsQ0FDcEIsc0RBRG9CLEVBRXBCLE1BRm9CLENBQXRCO0lBSUQsQ0F4Q0g7RUF5Q0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZGV2LWphdmFzY3JpcHRzL2NoYXQvanMvZmV0Y2hBY3RpdmVDaGF0LmRldi5qcz9mYWVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFjdGl2ZUNoYXREYXRhIGlzIGRlZmluZSBpbiBtYWluIGxheW91dCBhcyBnbG9iYWwgb2JqZWN0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFjdGl2ZUNoYXQoY2hhdElkKSB7XHJcbiAgbGV0IGFsbENoYXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxDaGF0U2VjdGlvblwiKVxyXG4gIGxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuXHJcbiAgbGV0IGFjdGl2ZUNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcblxyXG4gIGlmIChhY3RpdmVDaGF0SWQgIT09IFwiXCIgJiYgYWN0aXZlQ2hhdElkID09PSBjaGF0SWQpIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKGFjdGl2ZUNoYXREYXRhLCBcIlwiLCBgL2NoYXQvIyR7Y2hhdElkfWApXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGAke2FjdGl2ZUNoYXREYXRhLmNoYXROYW1lfSBjaGF0IGBcclxuICAgIGFsbENoYXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhbGwtY2hhdC1zZWN0aW9uLS1oaWRlXCIpXHJcbiAgICBhY3RpdmVDaGF0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtc2VjdGlvbi0taGlkZVwiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmZXRjaChgL2NoYXQvZGF0YS9jaGF0LyR7Y2hhdElkfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyBkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5pc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgIGFjdGl2ZUNoYXREYXRhID0geyAuLi5kYXRhLmNoYXQgfVxyXG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoZGF0YS5jaGF0LCBcIlwiLCBgL2NoYXQvIyR7Y2hhdElkfWApXHJcbiAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGAke2RhdGEuY2hhdC5jaGF0TmFtZX0gY2hhdCBgXHJcbiAgICAgICAgICBsZXQgeyBzaG93QWN0aXZlQ2hhdFNlY3Rpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgICAgXCIuL3Nob3dBY3RpdmVDaGF0U2VjdGlvbi5kZXZcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgc2hvd0FjdGl2ZUNoYXRTZWN0aW9uKGRhdGEuY2hhdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIFwiXCIsIFwiL2NoYXRcIilcclxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJDaGF0c1wiXHJcbiAgICAgICAgICBhbGxDaGF0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWxsLWNoYXQtc2VjdGlvbi0taGlkZVwiKVxyXG4gICAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LXNlY3Rpb24tLWhpZGVcIilcclxuICAgICAgICAgIGxldCB7IGNyZWF0ZU1haW5Ob3RpZmljYXRpb24gfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgICAgXCIuLi8uLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihkYXRhLmVycm9yLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIGZldGNoIEFjdGl2ZSBDaGF0OlwiLCBlcnIpXHJcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIFwiXCIsIFwiL2NoYXRcIilcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQ2hhdHNcIlxyXG4gICAgICAgIGFsbENoYXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhbGwtY2hhdC1zZWN0aW9uLS1oaWRlXCIpXHJcbiAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LXNlY3Rpb24tLWhpZGVcIilcclxuICAgICAgICBsZXQgeyBjcmVhdGVNYWluTm90aWZpY2F0aW9uIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICBcIi4uLy4uL2NvbW1vbi9tYWluTm90aWZpY2F0aW9uLmRldlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgICBcIlNlcnZlciBFcnJvciBPciBNYXkgYmUgWW91IEFyZSBBY2Nlc3NpbmcgV3JvbmcgQ2hhdC5cIixcclxuICAgICAgICAgIFwiaW5mb1wiXHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZmV0Y2hBY3RpdmVDaGF0IiwiY2hhdElkIiwiYWxsQ2hhdFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlQ2hhdFNlY3Rpb24iLCJhY3RpdmVDaGF0SWQiLCJkYXRhc2V0IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImFjdGl2ZUNoYXREYXRhIiwidGl0bGUiLCJjaGF0TmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImRhdGEiLCJpc1N1Y2Nlc3MiLCJjaGF0Iiwic2hvd0FjdGl2ZUNoYXRTZWN0aW9uIiwicmVwbGFjZVN0YXRlIiwiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsImVycm9yIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/fetchActiveChat.dev.js\n");

/***/ })

}]);