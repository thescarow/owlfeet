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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchActiveChat\": () => (/* binding */ fetchActiveChat)\n/* harmony export */ });\n/* harmony import */ var _common_mainNotification_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/mainNotification.dev */ \"./dev-javascripts/common/mainNotification.dev.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar allChatSection = document.getElementById(\"allChatSection\");\nvar activeChatSection = document.getElementById(\"activeChatSection\"); // activeChatData is define in main layout as global object\n\nfunction fetchActiveChat(chatId) {\n  var activeChatId = activeChatSection.dataset.chatId;\n\n  if (activeChatId !== \"\" && activeChatId === chatId) {\n    history.pushState(activeChatData, \"\", \"/chat/#\".concat(chatId));\n    document.title = \"\".concat(activeChatData.chatName, \" chat \");\n    allChatSection.classList.add(\"all-chat-section--hide\");\n    activeChatSection.classList.remove(\"active-chat-section--hide\");\n  } else {\n    fetch(\"/chat/\".concat(chatId)).then(function (response) {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return Promise.reject(response);\n    }).then( /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {\n        var _yield$import, showActiveChatSection;\n\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!data.isSuccess) {\n                  _context.next = 11;\n                  break;\n                }\n\n                activeChatData = _objectSpread({}, data.chat);\n                history.pushState(data.chat, \"\", \"/chat/#\".concat(chatId));\n                document.title = \"\".concat(data.chat.chatName, \" chat \");\n                _context.next = 6;\n                return __webpack_require__.e(/*! import() */ \"dev-javascripts_chat_js_showActiveChatSection_dev_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./showActiveChatSection.dev */ \"./dev-javascripts/chat/js/showActiveChatSection.dev.js\"));\n\n              case 6:\n                _yield$import = _context.sent;\n                showActiveChatSection = _yield$import.showActiveChatSection;\n                showActiveChatSection(data.chat);\n                _context.next = 16;\n                break;\n\n              case 11:\n                history.replaceState({}, \"\", \"/chat\");\n                document.title = \"Chats\";\n                allChatSection.classList.remove(\"all-chat-section--hide\");\n                activeChatSection.classList.add(\"active-chat-section--hide\");\n                (0,_common_mainNotification_dev__WEBPACK_IMPORTED_MODULE_0__.createMainNotification)(data.error, \"error\");\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }())[\"catch\"](function (err) {\n      console.log(\"error in fetch Active Chat:\", err);\n      history.replaceState({}, \"\", \"/chat\");\n      document.title = \"Chats\";\n      allChatSection.classList.remove(\"all-chat-section--hide\");\n      activeChatSection.classList.add(\"active-chat-section--hide\");\n      (0,_common_mainNotification_dev__WEBPACK_IMPORTED_MODULE_0__.createMainNotification)(\"Server Error Or May be You Are Accessing Wrong Chat.\", \"info\");\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9mZXRjaEFjdGl2ZUNoYXQuZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7K0NBQ0E7Ozs7Ozs7Ozs7OztBQURBO0FBQ0EsSUFBSUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXJCO0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEIsRUFFQTs7QUFDTyxTQUFTRSxlQUFULENBQXlCQyxNQUF6QixFQUFpQztFQUN0QyxJQUFJQyxZQUFZLEdBQUdILGlCQUFpQixDQUFDSSxPQUFsQixDQUEwQkYsTUFBN0M7O0VBRUEsSUFBSUMsWUFBWSxLQUFLLEVBQWpCLElBQXVCQSxZQUFZLEtBQUtELE1BQTVDLEVBQW9EO0lBQ2xERyxPQUFPLENBQUNDLFNBQVIsQ0FBa0JDLGNBQWxCLEVBQWtDLEVBQWxDLG1CQUFnREwsTUFBaEQ7SUFDQUosUUFBUSxDQUFDVSxLQUFULGFBQW9CRCxjQUFjLENBQUNFLFFBQW5DO0lBQ0FaLGNBQWMsQ0FBQ2EsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsd0JBQTdCO0lBQ0FYLGlCQUFpQixDQUFDVSxTQUFsQixDQUE0QkUsTUFBNUIsQ0FBbUMsMkJBQW5DO0VBQ0QsQ0FMRCxNQUtPO0lBQ0xDLEtBQUssaUJBQVVYLE1BQVYsRUFBTCxDQUNHWSxJQURILENBQ1EsVUFBQUMsUUFBUSxFQUFJO01BQ2hCLElBQUlBLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtRQUNmLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO01BQ0Q7O01BQ0QsT0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFFBQWYsQ0FBUDtJQUNELENBTkgsRUFPR0QsSUFQSDtNQUFBLHNFQU9RLGlCQUFNTSxJQUFOO1FBQUE7O1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsS0FDQUEsSUFBSSxDQUFDQyxTQURMO2tCQUFBO2tCQUFBO2dCQUFBOztnQkFFRmQsY0FBYyxxQkFBUWEsSUFBSSxDQUFDRSxJQUFiLENBQWQ7Z0JBQ0FqQixPQUFPLENBQUNDLFNBQVIsQ0FBa0JjLElBQUksQ0FBQ0UsSUFBdkIsRUFBNkIsRUFBN0IsbUJBQTJDcEIsTUFBM0M7Z0JBQ0FKLFFBQVEsQ0FBQ1UsS0FBVCxhQUFvQlksSUFBSSxDQUFDRSxJQUFMLENBQVViLFFBQTlCO2dCQUpFO2dCQUFBLE9BS29DLDhPQUxwQzs7Y0FBQTtnQkFBQTtnQkFLSWMscUJBTEosaUJBS0lBLHFCQUxKO2dCQVFGQSxxQkFBcUIsQ0FBQ0gsSUFBSSxDQUFDRSxJQUFOLENBQXJCO2dCQVJFO2dCQUFBOztjQUFBO2dCQVVGakIsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixPQUE3QjtnQkFDQTFCLFFBQVEsQ0FBQ1UsS0FBVCxHQUFpQixPQUFqQjtnQkFDQVgsY0FBYyxDQUFDYSxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyx3QkFBaEM7Z0JBQ0FaLGlCQUFpQixDQUFDVSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsMkJBQWhDO2dCQUNBZixvRkFBc0IsQ0FBQ3dCLElBQUksQ0FBQ0ssS0FBTixFQUFhLE9BQWIsQ0FBdEI7O2NBZEU7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBUFI7O01BQUE7UUFBQTtNQUFBO0lBQUEsY0F3QlMsVUFBQUMsR0FBRyxFQUFJO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDRixHQUEzQztNQUNBckIsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixPQUE3QjtNQUNBMUIsUUFBUSxDQUFDVSxLQUFULEdBQWlCLE9BQWpCO01BQ0FYLGNBQWMsQ0FBQ2EsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0Msd0JBQWhDO01BQ0FaLGlCQUFpQixDQUFDVSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsMkJBQWhDO01BQ0FmLG9GQUFzQixDQUNwQixzREFEb0IsRUFFcEIsTUFGb0IsQ0FBdEI7SUFJRCxDQWxDSDtFQW1DRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvY2hhdC9qcy9mZXRjaEFjdGl2ZUNoYXQuZGV2LmpzP2ZhZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vbWFpbk5vdGlmaWNhdGlvbi5kZXZcIlxyXG5sZXQgYWxsQ2hhdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbENoYXRTZWN0aW9uXCIpXHJcbmxldCBhY3RpdmVDaGF0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlQ2hhdFNlY3Rpb25cIilcclxuXHJcbi8vIGFjdGl2ZUNoYXREYXRhIGlzIGRlZmluZSBpbiBtYWluIGxheW91dCBhcyBnbG9iYWwgb2JqZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFjdGl2ZUNoYXQoY2hhdElkKSB7XHJcbiAgbGV0IGFjdGl2ZUNoYXRJZCA9IGFjdGl2ZUNoYXRTZWN0aW9uLmRhdGFzZXQuY2hhdElkXHJcblxyXG4gIGlmIChhY3RpdmVDaGF0SWQgIT09IFwiXCIgJiYgYWN0aXZlQ2hhdElkID09PSBjaGF0SWQpIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKGFjdGl2ZUNoYXREYXRhLCBcIlwiLCBgL2NoYXQvIyR7Y2hhdElkfWApXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGAke2FjdGl2ZUNoYXREYXRhLmNoYXROYW1lfSBjaGF0IGBcclxuICAgIGFsbENoYXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhbGwtY2hhdC1zZWN0aW9uLS1oaWRlXCIpXHJcbiAgICBhY3RpdmVDaGF0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNoYXQtc2VjdGlvbi0taGlkZVwiKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmZXRjaChgL2NoYXQvJHtjaGF0SWR9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgYWN0aXZlQ2hhdERhdGEgPSB7IC4uLmRhdGEuY2hhdCB9XHJcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShkYXRhLmNoYXQsIFwiXCIsIGAvY2hhdC8jJHtjaGF0SWR9YClcclxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gYCR7ZGF0YS5jaGF0LmNoYXROYW1lfSBjaGF0IGBcclxuICAgICAgICAgIGxldCB7IHNob3dBY3RpdmVDaGF0U2VjdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICAgICBcIi4vc2hvd0FjdGl2ZUNoYXRTZWN0aW9uLmRldlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBzaG93QWN0aXZlQ2hhdFNlY3Rpb24oZGF0YS5jaGF0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgXCJcIiwgXCIvY2hhdFwiKVxyXG4gICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkNoYXRzXCJcclxuICAgICAgICAgIGFsbENoYXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhbGwtY2hhdC1zZWN0aW9uLS1oaWRlXCIpXHJcbiAgICAgICAgICBhY3RpdmVDaGF0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWNoYXQtc2VjdGlvbi0taGlkZVwiKVxyXG4gICAgICAgICAgY3JlYXRlTWFpbk5vdGlmaWNhdGlvbihkYXRhLmVycm9yLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIGZldGNoIEFjdGl2ZSBDaGF0OlwiLCBlcnIpXHJcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIFwiXCIsIFwiL2NoYXRcIilcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQ2hhdHNcIlxyXG4gICAgICAgIGFsbENoYXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhbGwtY2hhdC1zZWN0aW9uLS1oaWRlXCIpXHJcbiAgICAgICAgYWN0aXZlQ2hhdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jaGF0LXNlY3Rpb24tLWhpZGVcIilcclxuICAgICAgICBjcmVhdGVNYWluTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgXCJTZXJ2ZXIgRXJyb3IgT3IgTWF5IGJlIFlvdSBBcmUgQWNjZXNzaW5nIFdyb25nIENoYXQuXCIsXHJcbiAgICAgICAgICBcImluZm9cIlxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZU1haW5Ob3RpZmljYXRpb24iLCJhbGxDaGF0U2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhY3RpdmVDaGF0U2VjdGlvbiIsImZldGNoQWN0aXZlQ2hhdCIsImNoYXRJZCIsImFjdGl2ZUNoYXRJZCIsImRhdGFzZXQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiYWN0aXZlQ2hhdERhdGEiLCJ0aXRsZSIsImNoYXROYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZGF0YSIsImlzU3VjY2VzcyIsImNoYXQiLCJzaG93QWN0aXZlQ2hhdFNlY3Rpb24iLCJyZXBsYWNlU3RhdGUiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/chat/js/fetchActiveChat.dev.js\n");

/***/ }),

/***/ "./dev-javascripts/common/mainNotification.dev.js":
/*!********************************************************!*\
  !*** ./dev-javascripts/common/mainNotification.dev.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainNotification\": () => (/* binding */ createMainNotification)\n/* harmony export */ });\n__webpack_require__.e(/*! import() */ \"dev-javascripts_common_css_mainNotification_dev_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./css/mainNotification.dev.css */ \"./dev-javascripts/common/css/mainNotification.dev.css\"));\nfunction createMainNotification(message) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n\n  if (type != \"error\" && type != \"success\") {\n    type = \"info\";\n  }\n\n  var mainNotification = document.createElement(\"div\");\n  mainNotification.classList.add(\"main-notification\", type);\n  mainNotification.innerHTML = \"\\n     <div class=\\\"main-notification-message\\\"> \".concat(type.charAt(0).toUpperCase() + type.slice(1), \":\\n     \").concat(message, \"    \\n     </div>\\n    <div class=\\\"main-notification-timer-and-close\\\">\\n                <svg viewBox=\\\"0 0 70 70\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <g id=\\\"timerAndClose\\\">\\n                <path id=\\\"timerPath\\\" d=\\\"M35 10C39.5356 10 43.7185 11.1176 47.5488 13.3529C51.3791 15.5881 54.4119 18.6209 56.6471 22.4512C58.8824 26.2815 60 30.4644 60 35C60 39.5356 58.8824 43.7185 56.6471 47.5488C54.4119 51.3791 51.3791 54.4119 47.5488 56.6471C43.7185 58.8824 39.5356 60 35 60C30.4644 60 26.2815 58.8824 22.4512 56.6471C18.6209 54.4119 15.5881 51.3791 13.3529 47.5488C11.1176 43.7185 10 39.5356 10 35C10 30.4644 11.1176 26.2815 13.3529 22.4512C15.5881 18.6209 18.6209 15.5881 22.4512 13.3529C26.2815 11.1176 30.4644 10 35 10Z\\\" stroke=\\\"#5CEB2A\\\" stroke-width=\\\"20\\\"/>\\n                <path id=\\\"closePath\\\" d=\\\"M35 10C21.25 10 10 21.25 10 35C10 48.75 21.25 60 35 60C48.75 60 60 48.75 60 35C60 21.25 48.75 10 35 10ZM44.25 40.75C45.25 41.75 45.25 43.25 44.25 44.25C43.25 45.25 41.75 45.25 40.75 44.25L35 38.5L29.25 44.25C28.25 45.25 26.75 45.25 25.75 44.25C24.75 43.25 24.75 41.75 25.75 40.75L31.5 35L25.75 29.25C24.75 28.25 24.75 26.75 25.75 25.75C26.75 24.75 28.25 24.75 29.25 25.75L35 31.5L40.75 25.75C41.75 24.75 43.25 24.75 44.25 25.75C45.25 26.75 45.25 28.25 44.25 29.25L38.5 35L44.25 40.75Z\\\" fill=\\\"black\\\"/>\\n                </g>\\n                </svg>\\n       </div> \");\n  var mainNotificationCloseTimeout; // delete after click on close button\n\n  mainNotification.getElementsByClassName(\"main-notification-timer-and-close\")[0].addEventListener(\"click\", function () {\n    mainNotification.parentNode.removeChild(mainNotification);\n    clearTimeout(mainNotificationCloseTimeout);\n  }); // delete after 10s automatically\n\n  mainNotificationCloseTimeout = setTimeout(function () {\n    mainNotification.parentNode.removeChild(mainNotification);\n  }, 10000);\n  document.body.appendChild(mainNotification);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVPLFNBQVNBLHNCQUFULENBQWdDQyxPQUFoQyxFQUF3RDtFQUFBLElBQWZDLElBQWUsdUVBQVIsTUFBUTs7RUFDN0QsSUFBSUEsSUFBSSxJQUFJLE9BQVIsSUFBbUJBLElBQUksSUFBSSxTQUEvQixFQUEwQztJQUN4Q0EsSUFBSSxHQUFHLE1BQVA7RUFDRDs7RUFDRCxJQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXpCO0VBQ0FGLGdCQUFnQixDQUFDRyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsbUJBQS9CLEVBQW9ETCxJQUFwRDtFQUVBQyxnQkFBZ0IsQ0FBQ0ssU0FBakIsOERBRUtOLElBQUksQ0FBQ08sTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixLQUErQlIsSUFBSSxDQUFDUyxLQUFMLENBQVcsQ0FBWCxDQUZwQyxxQkFJS1YsT0FKTDtFQWVBLElBQUlXLDRCQUFKLENBdEI2RCxDQXVCN0Q7O0VBQ0FULGdCQUFnQixDQUNiVSxzQkFESCxDQUMwQixtQ0FEMUIsRUFDK0QsQ0FEL0QsRUFFR0MsZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkIsWUFBTTtJQUMvQlgsZ0JBQWdCLENBQUNZLFVBQWpCLENBQTRCQyxXQUE1QixDQUF3Q2IsZ0JBQXhDO0lBQ0FjLFlBQVksQ0FBQ0wsNEJBQUQsQ0FBWjtFQUNELENBTEgsRUF4QjZELENBK0I3RDs7RUFDQUEsNEJBQTRCLEdBQUdNLFVBQVUsQ0FBQyxZQUFNO0lBQzlDZixnQkFBZ0IsQ0FBQ1ksVUFBakIsQ0FBNEJDLFdBQTVCLENBQXdDYixnQkFBeEM7RUFDRCxDQUZ3QyxFQUV0QyxLQUZzQyxDQUF6QztFQUlBQyxRQUFRLENBQUNlLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmpCLGdCQUExQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kZXYtamF2YXNjcmlwdHMvY29tbW9uL21haW5Ob3RpZmljYXRpb24uZGV2LmpzPzU0MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KFwiLi9jc3MvbWFpbk5vdGlmaWNhdGlvbi5kZXYuY3NzXCIpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluTm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSBcImluZm9cIikge1xuICBpZiAodHlwZSAhPSBcImVycm9yXCIgJiYgdHlwZSAhPSBcInN1Y2Nlc3NcIikge1xuICAgIHR5cGUgPSBcImluZm9cIlxuICB9XG4gIGNvbnN0IG1haW5Ob3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIG1haW5Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tbm90aWZpY2F0aW9uXCIsIHR5cGUpXG5cbiAgbWFpbk5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtYWluLW5vdGlmaWNhdGlvbi1tZXNzYWdlXCI+ICR7XG4gICAgICAgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSlcbiAgICAgfTpcbiAgICAgJHttZXNzYWdlfSAgICBcbiAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4tbm90aWZpY2F0aW9uLXRpbWVyLWFuZC1jbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA3MCA3MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwidGltZXJBbmRDbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwidGltZXJQYXRoXCIgZD1cIk0zNSAxMEMzOS41MzU2IDEwIDQzLjcxODUgMTEuMTE3NiA0Ny41NDg4IDEzLjM1MjlDNTEuMzc5MSAxNS41ODgxIDU0LjQxMTkgMTguNjIwOSA1Ni42NDcxIDIyLjQ1MTJDNTguODgyNCAyNi4yODE1IDYwIDMwLjQ2NDQgNjAgMzVDNjAgMzkuNTM1NiA1OC44ODI0IDQzLjcxODUgNTYuNjQ3MSA0Ny41NDg4QzU0LjQxMTkgNTEuMzc5MSA1MS4zNzkxIDU0LjQxMTkgNDcuNTQ4OCA1Ni42NDcxQzQzLjcxODUgNTguODgyNCAzOS41MzU2IDYwIDM1IDYwQzMwLjQ2NDQgNjAgMjYuMjgxNSA1OC44ODI0IDIyLjQ1MTIgNTYuNjQ3MUMxOC42MjA5IDU0LjQxMTkgMTUuNTg4MSA1MS4zNzkxIDEzLjM1MjkgNDcuNTQ4OEMxMS4xMTc2IDQzLjcxODUgMTAgMzkuNTM1NiAxMCAzNUMxMCAzMC40NjQ0IDExLjExNzYgMjYuMjgxNSAxMy4zNTI5IDIyLjQ1MTJDMTUuNTg4MSAxOC42MjA5IDE4LjYyMDkgMTUuNTg4MSAyMi40NTEyIDEzLjM1MjlDMjYuMjgxNSAxMS4xMTc2IDMwLjQ2NDQgMTAgMzUgMTBaXCIgc3Ryb2tlPVwiIzVDRUIyQVwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiY2xvc2VQYXRoXCIgZD1cIk0zNSAxMEMyMS4yNSAxMCAxMCAyMS4yNSAxMCAzNUMxMCA0OC43NSAyMS4yNSA2MCAzNSA2MEM0OC43NSA2MCA2MCA0OC43NSA2MCAzNUM2MCAyMS4yNSA0OC43NSAxMCAzNSAxMFpNNDQuMjUgNDAuNzVDNDUuMjUgNDEuNzUgNDUuMjUgNDMuMjUgNDQuMjUgNDQuMjVDNDMuMjUgNDUuMjUgNDEuNzUgNDUuMjUgNDAuNzUgNDQuMjVMMzUgMzguNUwyOS4yNSA0NC4yNUMyOC4yNSA0NS4yNSAyNi43NSA0NS4yNSAyNS43NSA0NC4yNUMyNC43NSA0My4yNSAyNC43NSA0MS43NSAyNS43NSA0MC43NUwzMS41IDM1TDI1Ljc1IDI5LjI1QzI0Ljc1IDI4LjI1IDI0Ljc1IDI2Ljc1IDI1Ljc1IDI1Ljc1QzI2Ljc1IDI0Ljc1IDI4LjI1IDI0Ljc1IDI5LjI1IDI1Ljc1TDM1IDMxLjVMNDAuNzUgMjUuNzVDNDEuNzUgMjQuNzUgNDMuMjUgMjQuNzUgNDQuMjUgMjUuNzVDNDUuMjUgMjYuNzUgNDUuMjUgMjguMjUgNDQuMjUgMjkuMjVMMzguNSAzNUw0NC4yNSA0MC43NVpcIiBmaWxsPVwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgIDwvZGl2PiBgXG5cbiAgbGV0IG1haW5Ob3RpZmljYXRpb25DbG9zZVRpbWVvdXRcbiAgLy8gZGVsZXRlIGFmdGVyIGNsaWNrIG9uIGNsb3NlIGJ1dHRvblxuICBtYWluTm90aWZpY2F0aW9uXG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLW5vdGlmaWNhdGlvbi10aW1lci1hbmQtY2xvc2VcIilbMF1cbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1haW5Ob3RpZmljYXRpb24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYWluTm90aWZpY2F0aW9uKVxuICAgICAgY2xlYXJUaW1lb3V0KG1haW5Ob3RpZmljYXRpb25DbG9zZVRpbWVvdXQpXG4gICAgfSlcblxuICAvLyBkZWxldGUgYWZ0ZXIgMTBzIGF1dG9tYXRpY2FsbHlcbiAgbWFpbk5vdGlmaWNhdGlvbkNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1haW5Ob3RpZmljYXRpb24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYWluTm90aWZpY2F0aW9uKVxuICB9LCAxMDAwMClcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Ob3RpZmljYXRpb24pXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWFpbk5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwibWFpbk5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJtYWluTm90aWZpY2F0aW9uQ2xvc2VUaW1lb3V0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYm9keSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev-javascripts/common/mainNotification.dev.js\n");

/***/ })

}]);