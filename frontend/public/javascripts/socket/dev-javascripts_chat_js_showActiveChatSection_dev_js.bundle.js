"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_chat_js_showActiveChatSection_dev_js"],{

/***/ "./dev-javascripts/chat/js/showActiveChatSection.dev.js":
/*!**************************************************************!*\
  !*** ./dev-javascripts/chat/js/showActiveChatSection.dev.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearActiveChatMessageContainer\": () => (/* binding */ clearActiveChatMessageContainer),\n/* harmony export */   \"createMessageSeenByModal\": () => (/* binding */ createMessageSeenByModal),\n/* harmony export */   \"onOffActiveChatInputContainer\": () => (/* binding */ onOffActiveChatInputContainer),\n/* harmony export */   \"showActiveChatSection\": () => (/* binding */ showActiveChatSection),\n/* harmony export */   \"updateActiveChatSection\": () => (/* binding */ updateActiveChatSection)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar allChatSection = document.getElementById(\"allChatSection\");\nvar activeChatSection = document.getElementById(\"activeChatSection\");\nfunction showActiveChatSection(_x) {\n  return _showActiveChatSection.apply(this, arguments);\n}\n\nfunction _showActiveChatSection() {\n  _showActiveChatSection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chat) {\n    var activeChatMessageContainer, activeChatInputTextContent, _yield$import, openActiveChatInputBox, _yield$import2, checkTimeAndCreateOldMessage;\n\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n            activeChatInputTextContent = document.getElementById(\"activeChatInputTextContent\");\n            activeChatInputTextContent.value = \"\";\n            activeChatMessageContainer.innerHTML = \"\";\n            _context.next = 6;\n            return __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_chat_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../chat.dev.js */ \"./dev-javascripts/chat/chat.dev.js\"));\n\n          case 6:\n            _yield$import = _context.sent;\n            openActiveChatInputBox = _yield$import.openActiveChatInputBox;\n            openActiveChatInputBox();\n            updateActiveChatSection(chat); /////////////////////\n\n            _context.next = 12;\n            return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_plyr_dist_plyr_min_js\"), __webpack_require__.e(\"dev-javascripts_chat_js_message_dev_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./message.dev */ \"./dev-javascripts/chat/js/message.dev.js\"));\n\n          case 12:\n            _yield$import2 = _context.sent;\n            checkTimeAndCreateOldMessage = _yield$import2.checkTimeAndCreateOldMessage;\n            fetch(\"/message/fetch-messages/\".concat(chat._id)).then(function (response) {\n              if (response.ok) {\n                return response.json();\n              }\n\n              return Promise.reject(response);\n            }).then(function (data) {\n              if (data.isSuccess) {\n                console.log(data.allMessages);\n                checkTimeAndCreateOldMessage(data.allMessages, activeChatMessageContainer);\n              } else {\n                createMainNotification(data.error, \"error\");\n              }\n            })[\"catch\"](function (err) {\n              console.log(err);\n              createMainNotification(\"Server Error In Accessing Messages, Please Refresh Your Page\", \"error\");\n            });\n            allChatSection.classList.add(\"all-chat-section--hide\");\n            activeChatSection.classList.remove(\"active-chat-section--hide\");\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _showActiveChatSection.apply(this, arguments);\n}\n\nfunction updateActiveChatSection(_x2) {\n  return _updateActiveChatSection.apply(this, arguments);\n}\n\nfunction _updateActiveChatSection() {\n  _updateActiveChatSection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(chat) {\n    var activeChatHeader, activeChatHeaderPic, activeChatImg, activeChatHeaderName, activeChatHeaderStatus, activeChatInputContainer;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            activeChatSection.dataset.chatId = chat._id;\n            activeChatHeader = document.getElementById(\"activeChatHeader\");\n            activeChatHeaderPic = document.getElementById(\"activeChatHeaderPic\");\n            activeChatImg = document.getElementById(\"activeChatImg\");\n            activeChatHeaderName = document.getElementById(\"activeChatHeaderName\");\n            activeChatHeaderStatus = document.getElementById(\"activeChatHeaderStatus\");\n            activeChatInputContainer = document.getElementById(\"activeChatInputContainer\");\n            activeChatHeader.dataset.chatId = chat._id;\n\n            if (chat.hasOwnProperty(\"chatPic\") && chat.chatPic !== \"\") {\n              activeChatImg.src = chat.chatPic;\n              activeChatHeaderPic.classList.add(\"active-chat-header__pic--hide-svg\");\n              activeChatHeaderPic.classList.remove(\"active-chat-header__pic--hide-img\");\n            } else {\n              activeChatHeaderPic.classList.add(\"active-chat-header__pic--hide-img\");\n              activeChatHeaderPic.classList.remove(\"active-chat-header__pic--hide-svg\");\n            }\n\n            activeChatHeaderName.textContent = chat.chatName;\n            activeChatHeaderStatus.textContent = \"Active Hai\";\n            onOffActiveChatInputContainer(chat);\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _updateActiveChatSection.apply(this, arguments);\n}\n\nfunction clearActiveChatMessageContainer() {\n  return _clearActiveChatMessageContainer.apply(this, arguments);\n}\n\nfunction _clearActiveChatMessageContainer() {\n  _clearActiveChatMessageContainer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n    var activeChatMessageContainer;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            activeChatMessageContainer = document.getElementById(\"activeChatMessageContainer\");\n            activeChatMessageContainer.innerHTML = \"\";\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _clearActiveChatMessageContainer.apply(this, arguments);\n}\n\nfunction createMessageSeenByModal() {\n  return _createMessageSeenByModal.apply(this, arguments);\n}\n\nfunction _createMessageSeenByModal() {\n  _createMessageSeenByModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {\n    var chatMainContainer, messageSeenByModal;\n    return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            chatMainContainer = document.getElementById(\"chatMainContainer\");\n\n            if (chatMainContainer) {\n              messageSeenByModal = document.createElement(\"div\");\n              messageSeenByModal.classList.add(\"inner-modal\", \"inner-modal--hide\", \"inner-modal--message-seen-by\");\n              messageSeenByModal.innerHTML = \"\\n    <div class=\\\"inner-modal-content inner-modal-content--message-seen-by\\\">\\n    \\n    <div class=\\\"inner-modal-header\\\">\\n    <div class=\\\"inner-modal-header__title\\\">\\n  Message seen by\\n    </div>\\n    <div class=\\\"inner-modal-header__message-count\\\">\\n  20\\n    </div>\\n    </div>\\n    <div class=\\\"inner-modal-main\\\">\\n    <div class=\\\"message-seen-user-container\\\">\\n    <div class=\\\"message-seen-user\\\">\\n    <div class=\\\"message-seen-user__pic\\\">\\n    <img src=\\\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\\\">\\n    </div>\\n    <div class=\\\"message-seen-user__fullname\\\">Rithik Pathak</div>\\n    </div>\\n    <div class=\\\"message-seen-user\\\">\\n    <div class=\\\"message-seen-user__pic\\\">\\n    <img src=\\\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\\\">\\n    </div>\\n    <div class=\\\"message-seen-user__fullname\\\">Rithik Pathak</div>\\n    </div>\\n    <div class=\\\"message-seen-user\\\">\\n    <div class=\\\"message-seen-user__pic\\\">\\n    <img src=\\\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\\\">\\n    </div>\\n    <div class=\\\"message-seen-user__fullname\\\">Rithik Pathak</div>\\n    </div>\\n    <div class=\\\"message-seen-user\\\">\\n    <div class=\\\"message-seen-user__pic\\\">\\n    <img src=\\\"https://wallpapers.com/images/file/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf-u9y9ydo971k9mdcf.jpg\\\">\\n    </div>\\n    <div class=\\\"message-seen-user__fullname\\\">Rithik Pathak</div>\\n    </div>\\n    </div>\\n    </div>\\n  \\n    \";\n              chatMainContainer.insertAdjacentElement(\"afterbegin\", messageSeenByModal);\n            }\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _createMessageSeenByModal.apply(this, arguments);\n}\n\nfunction onOffActiveChatInputContainer(_x3) {\n  return _onOffActiveChatInputContainer.apply(this, arguments);\n}\n\nfunction _onOffActiveChatInputContainer() {\n  _onOffActiveChatInputContainer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(chat) {\n    var activeChatInputContainer;\n    return _regeneratorRuntime().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            activeChatInputContainer = document.getElementById(\"activeChatInputContainer\");\n\n            if (chat.hasOwnProperty(\"canSendMessageToThisChat\") && chat.canSendMessageToThisChat === false) {\n              activeChatInputContainer.classList.add(\"active-chat-input-container--disable\");\n              activeChatInputContainer.classList.remove(\"active-chat-input-container--enable\");\n            } else {\n              activeChatInputContainer.classList.add(\"active-chat-input-container--enable\");\n              activeChatInputContainer.classList.remove(\"active-chat-input-container--disable\");\n            }\n\n          case 2:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _onOffActiveChatInputContainer.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBLElBQUlBLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFyQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQXhCO0FBRU8sU0FBZUUscUJBQXRCO0VBQUE7QUFBQTs7O3NGQUFPLGlCQUFxQ0MsSUFBckM7SUFBQTs7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUNDQywwQkFERCxHQUM4QkwsUUFBUSxDQUFDQyxjQUFULENBQ2pDLDRCQURpQyxDQUQ5QjtZQUtESywwQkFMQyxHQUs0Qk4sUUFBUSxDQUFDQyxjQUFULENBQy9CLDRCQUQrQixDQUw1QjtZQVNMSywwQkFBMEIsQ0FBQ0MsS0FBM0IsR0FBbUMsRUFBbkM7WUFDQUYsMEJBQTBCLENBQUNHLFNBQTNCLEdBQXVDLEVBQXZDO1lBVks7WUFBQSxPQVdrQyx5TEFYbEM7O1VBQUE7WUFBQTtZQVdDQyxzQkFYRCxpQkFXQ0Esc0JBWEQ7WUFZTEEsc0JBQXNCO1lBQ3RCQyx1QkFBdUIsQ0FBQ04sSUFBRCxDQUF2QixDQWJLLENBZUw7O1lBZks7WUFBQSxPQWdCMEMsdVJBaEIxQzs7VUFBQTtZQUFBO1lBZ0JHTyw0QkFoQkgsa0JBZ0JHQSw0QkFoQkg7WUFrQkxDLEtBQUssbUNBQTRCUixJQUFJLENBQUNTLEdBQWpDLEVBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLFFBQVEsRUFBSTtjQUNoQixJQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7Z0JBQ2YsT0FBT0QsUUFBUSxDQUFDRSxJQUFULEVBQVA7Y0FDRDs7Y0FDRCxPQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUosUUFBZixDQUFQO1lBQ0QsQ0FOSCxFQU9HRCxJQVBILENBT1EsVUFBQU0sSUFBSSxFQUFJO2NB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QUNtQi9DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FEbkI7O1lBRUwsSUFBSThDLGlCQUFKLEVBQXVCO2NBQ2pCQyxrQkFEaUIsR0FDSWhELFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsS0FBdkIsQ0FESjtjQUVyQkQsa0JBQWtCLENBQUNwQixTQUFuQixDQUE2QkMsR0FBN0IsQ0FDRSxhQURGLEVBRUUsbUJBRkYsRUFHRSw4QkFIRjtjQUtBbUIsa0JBQWtCLENBQUN4QyxTQUFuQjtjQTBDQXVDLGlCQUFpQixDQUFDRyxxQkFBbEIsQ0FBd0MsWUFBeEMsRUFBc0RGLGtCQUF0RDtZQUNEOztVQXBESTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQXVEQSxTQUFlSiw2QkFBdEI7RUFBQTtBQUFBOzs7OEZBQU8sa0JBQTZDeEMsSUFBN0M7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1lBQ0NrQyx3QkFERCxHQUM0QnRDLFFBQVEsQ0FBQ0MsY0FBVCxDQUMvQiwwQkFEK0IsQ0FENUI7O1lBSUwsSUFDRUcsSUFBSSxDQUFDbUMsY0FBTCxDQUFvQiwwQkFBcEIsS0FDQW5DLElBQUksQ0FBQytDLHdCQUFMLEtBQWtDLEtBRnBDLEVBR0U7Y0FDQWIsd0JBQXdCLENBQUNWLFNBQXpCLENBQW1DQyxHQUFuQyxDQUNFLHNDQURGO2NBR0FTLHdCQUF3QixDQUFDVixTQUF6QixDQUFtQ0UsTUFBbkMsQ0FDRSxxQ0FERjtZQUdELENBVkQsTUFVTztjQUNMUSx3QkFBd0IsQ0FBQ1YsU0FBekIsQ0FBbUNDLEdBQW5DLENBQ0UscUNBREY7Y0FHQVMsd0JBQXdCLENBQUNWLFNBQXpCLENBQW1DRSxNQUFuQyxDQUNFLHNDQURGO1lBR0Q7O1VBckJJO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9zaG93QWN0aXZlQ2hhdFNlY3Rpb24uZGV2LmpzP2JiNzEiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGFsbENoYXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxDaGF0U2VjdGlvblwiKVxyXG5sZXQgYWN0aXZlQ2hhdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRTZWN0aW9uXCIpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvd0FjdGl2ZUNoYXRTZWN0aW9uKGNoYXQpIHtcclxuICBjb25zdCBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lclwiXHJcbiAgKVxyXG5cclxuICBsZXQgYWN0aXZlQ2hhdElucHV0VGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWN0aXZlQ2hhdElucHV0VGV4dENvbnRlbnRcIlxyXG4gIClcclxuXHJcbiAgYWN0aXZlQ2hhdElucHV0VGV4dENvbnRlbnQudmFsdWUgPSBcIlwiXHJcbiAgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG4gIGxldCB7IG9wZW5BY3RpdmVDaGF0SW5wdXRCb3ggfSA9IGF3YWl0IGltcG9ydChcIi4uL2NoYXQuZGV2LmpzXCIpXHJcbiAgb3BlbkFjdGl2ZUNoYXRJbnB1dEJveCgpXHJcbiAgdXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24oY2hhdClcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgeyBjaGVja1RpbWVBbmRDcmVhdGVPbGRNZXNzYWdlIH0gPSBhd2FpdCBpbXBvcnQoXCIuL21lc3NhZ2UuZGV2XCIpXHJcblxyXG4gIGZldGNoKGAvbWVzc2FnZS9mZXRjaC1tZXNzYWdlcy8ke2NoYXQuX2lkfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmlzU3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuYWxsTWVzc2FnZXMpXHJcbiAgICAgICAgY2hlY2tUaW1lQW5kQ3JlYXRlT2xkTWVzc2FnZShcclxuICAgICAgICAgIGRhdGEuYWxsTWVzc2FnZXMsXHJcbiAgICAgICAgICBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lclxyXG4gICAgICAgIClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKGRhdGEuZXJyb3IsIFwiZXJyb3JcIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIGNyZWF0ZU1haW5Ob3RpZmljYXRpb24oXHJcbiAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgSW4gQWNjZXNzaW5nIE1lc3NhZ2VzLCBQbGVhc2UgUmVmcmVzaCBZb3VyIFBhZ2VcIixcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgYWxsQ2hhdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFsbC1jaGF0LXNlY3Rpb24tLWhpZGVcIilcclxuICBhY3RpdmVDaGF0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtc2VjdGlvbi0taGlkZVwiKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWN0aXZlQ2hhdFNlY3Rpb24oY2hhdCkge1xyXG4gIGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkID0gY2hhdC5faWRcclxuICBjb25zdCBhY3RpdmVDaGF0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVDaGF0SGVhZGVyXCIpXHJcbiAgY29uc3QgYWN0aXZlQ2hhdEhlYWRlclBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdEhlYWRlclBpY1wiKVxyXG4gIGNvbnN0IGFjdGl2ZUNoYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZUNoYXRJbWdcIilcclxuICBjb25zdCBhY3RpdmVDaGF0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdEhlYWRlck5hbWVcIilcclxuICBjb25zdCBhY3RpdmVDaGF0SGVhZGVyU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjdGl2ZUNoYXRIZWFkZXJTdGF0dXNcIlxyXG4gIClcclxuICBjb25zdCBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyXCJcclxuICApXHJcblxyXG4gIGFjdGl2ZUNoYXRIZWFkZXIuZGF0YXNldC5jaGF0SWQgPSBjaGF0Ll9pZFxyXG5cclxuICBpZiAoY2hhdC5oYXNPd25Qcm9wZXJ0eShcImNoYXRQaWNcIikgJiYgY2hhdC5jaGF0UGljICE9PSBcIlwiKSB7XHJcbiAgICBhY3RpdmVDaGF0SW1nLnNyYyA9IGNoYXQuY2hhdFBpY1xyXG5cclxuICAgIGFjdGl2ZUNoYXRIZWFkZXJQaWMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LWhlYWRlcl9fcGljLS1oaWRlLXN2Z1wiKVxyXG4gICAgYWN0aXZlQ2hhdEhlYWRlclBpYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtaGVhZGVyX19waWMtLWhpZGUtaW1nXCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIGFjdGl2ZUNoYXRIZWFkZXJQaWMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LWhlYWRlcl9fcGljLS1oaWRlLWltZ1wiKVxyXG4gICAgYWN0aXZlQ2hhdEhlYWRlclBpYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtaGVhZGVyX19waWMtLWhpZGUtc3ZnXCIpXHJcbiAgfVxyXG4gIGFjdGl2ZUNoYXRIZWFkZXJOYW1lLnRleHRDb250ZW50ID0gY2hhdC5jaGF0TmFtZVxyXG4gIGFjdGl2ZUNoYXRIZWFkZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIkFjdGl2ZSBIYWlcIlxyXG5cclxuICBvbk9mZkFjdGl2ZUNoYXRJbnB1dENvbnRhaW5lcihjaGF0KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lcigpIHtcclxuICBsZXQgYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXJcIlxyXG4gIClcclxuICBhY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlU2VlbkJ5TW9kYWwoKSB7XHJcbiAgbGV0IGNoYXRNYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0TWFpbkNvbnRhaW5lclwiKVxyXG4gIGlmIChjaGF0TWFpbkNvbnRhaW5lcikge1xyXG4gICAgbGV0IG1lc3NhZ2VTZWVuQnlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG1lc3NhZ2VTZWVuQnlNb2RhbC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBcImlubmVyLW1vZGFsXCIsXHJcbiAgICAgIFwiaW5uZXItbW9kYWwtLWhpZGVcIixcclxuICAgICAgXCJpbm5lci1tb2RhbC0tbWVzc2FnZS1zZWVuLWJ5XCJcclxuICAgIClcclxuICAgIG1lc3NhZ2VTZWVuQnlNb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWwtY29udGVudCBpbm5lci1tb2RhbC1jb250ZW50LS1tZXNzYWdlLXNlZW4tYnlcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImlubmVyLW1vZGFsLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImlubmVyLW1vZGFsLWhlYWRlcl9fdGl0bGVcIj5cclxuICBNZXNzYWdlIHNlZW4gYnlcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImlubmVyLW1vZGFsLWhlYWRlcl9fbWVzc2FnZS1jb3VudFwiPlxyXG4gIDIwXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImlubmVyLW1vZGFsLW1haW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlci1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyX19waWNcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvZmlsZS9jb29sLW5lb24tYmx1ZS1wcm9maWxlLXBpY3R1cmUtdTl5OXlkbzk3MWs5bWRjZi11OXk5eWRvOTcxazltZGNmLmpwZ1wiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJfX2Z1bGxuYW1lXCI+Uml0aGlrIFBhdGhhazwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlcl9fcGljXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2ZpbGUvY29vbC1uZW9uLWJsdWUtcHJvZmlsZS1waWN0dXJlLXU5eTl5ZG85NzFrOW1kY2YtdTl5OXlkbzk3MWs5bWRjZi5qcGdcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyX19mdWxsbmFtZVwiPlJpdGhpayBQYXRoYWs8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJfX3BpY1wiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9maWxlL2Nvb2wtbmVvbi1ibHVlLXByb2ZpbGUtcGljdHVyZS11OXk5eWRvOTcxazltZGNmLXU5eTl5ZG85NzFrOW1kY2YuanBnXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlcl9fZnVsbG5hbWVcIj5SaXRoaWsgUGF0aGFrPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXNlZW4tdXNlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2Vlbi11c2VyX19waWNcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvZmlsZS9jb29sLW5lb24tYmx1ZS1wcm9maWxlLXBpY3R1cmUtdTl5OXlkbzk3MWs5bWRjZi11OXk5eWRvOTcxazltZGNmLmpwZ1wiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZWVuLXVzZXJfX2Z1bGxuYW1lXCI+Uml0aGlrIFBhdGhhazwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgYFxyXG5cclxuICAgIGNoYXRNYWluQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbWVzc2FnZVNlZW5CeU1vZGFsKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9uT2ZmQWN0aXZlQ2hhdElucHV0Q29udGFpbmVyKGNoYXQpIHtcclxuICBjb25zdCBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyXCJcclxuICApXHJcbiAgaWYgKFxyXG4gICAgY2hhdC5oYXNPd25Qcm9wZXJ0eShcImNhblNlbmRNZXNzYWdlVG9UaGlzQ2hhdFwiKSAmJlxyXG4gICAgY2hhdC5jYW5TZW5kTWVzc2FnZVRvVGhpc0NoYXQgPT09IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICAgXCJhY3RpdmUtY2hhdC1pbnB1dC1jb250YWluZXItLWRpc2FibGVcIlxyXG4gICAgKVxyXG4gICAgYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgIFwiYWN0aXZlLWNoYXQtaW5wdXQtY29udGFpbmVyLS1lbmFibGVcIlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICAgXCJhY3RpdmUtY2hhdC1pbnB1dC1jb250YWluZXItLWVuYWJsZVwiXHJcbiAgICApXHJcbiAgICBhY3RpdmVDaGF0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgXCJhY3RpdmUtY2hhdC1pbnB1dC1jb250YWluZXItLWRpc2FibGVcIlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYWxsQ2hhdFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlQ2hhdFNlY3Rpb24iLCJzaG93QWN0aXZlQ2hhdFNlY3Rpb24iLCJjaGF0IiwiYWN0aXZlQ2hhdE1lc3NhZ2VDb250YWluZXIiLCJhY3RpdmVDaGF0SW5wdXRUZXh0Q29udGVudCIsInZhbHVlIiwiaW5uZXJIVE1MIiwib3BlbkFjdGl2ZUNoYXRJbnB1dEJveCIsInVwZGF0ZUFjdGl2ZUNoYXRTZWN0aW9uIiwiY2hlY2tUaW1lQW5kQ3JlYXRlT2xkTWVzc2FnZSIsImZldGNoIiwiX2lkIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImRhdGEiLCJpc1N1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYWxsTWVzc2FnZXMiLCJjcmVhdGVNYWluTm90aWZpY2F0aW9uIiwiZXJyb3IiLCJlcnIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkYXRhc2V0IiwiY2hhdElkIiwiYWN0aXZlQ2hhdEhlYWRlciIsImFjdGl2ZUNoYXRIZWFkZXJQaWMiLCJhY3RpdmVDaGF0SW1nIiwiYWN0aXZlQ2hhdEhlYWRlck5hbWUiLCJhY3RpdmVDaGF0SGVhZGVyU3RhdHVzIiwiYWN0aXZlQ2hhdElucHV0Q29udGFpbmVyIiwiaGFzT3duUHJvcGVydHkiLCJjaGF0UGljIiwic3JjIiwidGV4dENvbnRlbnQiLCJjaGF0TmFtZSIsIm9uT2ZmQWN0aXZlQ2hhdElucHV0Q29udGFpbmVyIiwiY2xlYXJBY3RpdmVDaGF0TWVzc2FnZUNvbnRhaW5lciIsImNyZWF0ZU1lc3NhZ2VTZWVuQnlNb2RhbCIsImNoYXRNYWluQ29udGFpbmVyIiwibWVzc2FnZVNlZW5CeU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNhblNlbmRNZXNzYWdlVG9UaGlzQ2hhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/showActiveChatSection.dev.js\n");

/***/ })

}]);