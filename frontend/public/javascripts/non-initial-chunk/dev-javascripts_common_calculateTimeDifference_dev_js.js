"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["dev-javascripts_common_calculateTimeDifference_dev_js"],{

/***/ "./dev-javascripts/common/calculateTimeDifference.dev.js":
/*!***************************************************************!*\
  !*** ./dev-javascripts/common/calculateTimeDifference.dev.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeDifferenceFromNow\": () => (/* binding */ timeDifferenceFromNow)\n/* harmony export */ });\nfunction timeDifferenceFromNow(date) {\n  let timeStandard = {\n    sec: 1000,\n    min: 60 * 1000,\n    hour: 60 * 60 * 1000,\n    day: 24 * 60 * 60 * 1000,\n    week: 7 * 24 * 60 * 60 * 1000,\n    month: 30 * 24 * 60 * 60 * 1000,\n    year: 365 * 24 * 60 * 60 * 1000\n  };\n  let dateObj = date;\n\n  if (typeof date === \"string\") {\n    dateObj = new Date(date);\n  }\n\n  let timeDiff = Date.now() - dateObj.getTime(); // in milisec\n\n  if (timeDiff >= timeStandard.year) {\n    let count = Math.round(timeDiff / timeStandard.year);\n    return count + \"year\";\n  } else if (timeDiff >= timeStandard.month) {\n    let count = Math.round(timeDiff / timeStandard.month);\n    return count + \"mo\";\n  } else if (timeDiff >= timeStandard.week) {\n    let count = Math.round(timeDiff / timeStandard.week);\n    return count + \"week\";\n  } else if (timeDiff >= timeStandard.day) {\n    let count = Math.round(timeDiff / timeStandard.day);\n    return count + \"day\";\n  } else if (timeDiff >= timeStandard.hour) {\n    let count = Math.round(timeDiff / timeStandard.hour);\n    return count + \"hour\";\n  } else if (timeDiff >= timeStandard.min) {\n    let count = Math.round(timeDiff / timeStandard.min);\n    return count + \"min\";\n  } else if (timeDiff >= timeStandard.sec) {\n    let count = Math.round(timeDiff / timeStandard.sec);\n    return count + \"sec\";\n  } else {\n    return \"1sec\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYtamF2YXNjcmlwdHMvY29tbW9uL2NhbGN1bGF0ZVRpbWVEaWZmZXJlbmNlLmRldi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EscUJBQVQsQ0FBK0JDLElBQS9CLEVBQXFDO0VBQzFDLElBQUlDLFlBQVksR0FBRztJQUNqQkMsR0FBRyxFQUFFLElBRFk7SUFFakJDLEdBQUcsRUFBRSxLQUFLLElBRk87SUFHakJDLElBQUksRUFBRSxLQUFLLEVBQUwsR0FBVSxJQUhDO0lBSWpCQyxHQUFHLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBSkg7SUFLakJDLElBQUksRUFBRSxJQUFJLEVBQUosR0FBUyxFQUFULEdBQWMsRUFBZCxHQUFtQixJQUxSO0lBTWpCQyxLQUFLLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLEVBQWYsR0FBb0IsSUFOVjtJQU9qQkMsSUFBSSxFQUFFLE1BQU0sRUFBTixHQUFXLEVBQVgsR0FBZ0IsRUFBaEIsR0FBcUI7RUFQVixDQUFuQjtFQVNBLElBQUlDLE9BQU8sR0FBR1QsSUFBZDs7RUFDQSxJQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7SUFDNUJTLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNWLElBQVQsQ0FBVjtFQUNEOztFQUNELElBQUlXLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxHQUFMLEtBQWFILE9BQU8sQ0FBQ0ksT0FBUixFQUE1QixDQWQwQyxDQWNJOztFQUM5QyxJQUFJRixRQUFRLElBQUlWLFlBQVksQ0FBQ08sSUFBN0IsRUFBbUM7SUFDakMsSUFBSU0sS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNPLElBQW5DLENBQVo7SUFDQSxPQUFPTSxLQUFLLEdBQUcsTUFBZjtFQUNELENBSEQsTUFHTyxJQUFJSCxRQUFRLElBQUlWLFlBQVksQ0FBQ00sS0FBN0IsRUFBb0M7SUFDekMsSUFBSU8sS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNNLEtBQW5DLENBQVo7SUFDQSxPQUFPTyxLQUFLLEdBQUcsSUFBZjtFQUNELENBSE0sTUFHQSxJQUFJSCxRQUFRLElBQUlWLFlBQVksQ0FBQ0ssSUFBN0IsRUFBbUM7SUFDeEMsSUFBSVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNLLElBQW5DLENBQVo7SUFDQSxPQUFPUSxLQUFLLEdBQUcsTUFBZjtFQUNELENBSE0sTUFHQSxJQUFJSCxRQUFRLElBQUlWLFlBQVksQ0FBQ0ksR0FBN0IsRUFBa0M7SUFDdkMsSUFBSVMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNJLEdBQW5DLENBQVo7SUFDQSxPQUFPUyxLQUFLLEdBQUcsS0FBZjtFQUNELENBSE0sTUFHQSxJQUFJSCxRQUFRLElBQUlWLFlBQVksQ0FBQ0csSUFBN0IsRUFBbUM7SUFDeEMsSUFBSVUsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNHLElBQW5DLENBQVo7SUFDQSxPQUFPVSxLQUFLLEdBQUcsTUFBZjtFQUNELENBSE0sTUFHQSxJQUFJSCxRQUFRLElBQUlWLFlBQVksQ0FBQ0UsR0FBN0IsRUFBa0M7SUFDdkMsSUFBSVcsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNFLEdBQW5DLENBQVo7SUFDQSxPQUFPVyxLQUFLLEdBQUcsS0FBZjtFQUNELENBSE0sTUFHQSxJQUFJSCxRQUFRLElBQUlWLFlBQVksQ0FBQ0MsR0FBN0IsRUFBa0M7SUFDdkMsSUFBSVksS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBUSxHQUFHVixZQUFZLENBQUNDLEdBQW5DLENBQVo7SUFDQSxPQUFPWSxLQUFLLEdBQUcsS0FBZjtFQUNELENBSE0sTUFHQTtJQUNMLE9BQU8sTUFBUDtFQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2Rldi1qYXZhc2NyaXB0cy9jb21tb24vY2FsY3VsYXRlVGltZURpZmZlcmVuY2UuZGV2LmpzP2RjYTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRpbWVEaWZmZXJlbmNlRnJvbU5vdyhkYXRlKSB7XHJcbiAgbGV0IHRpbWVTdGFuZGFyZCA9IHtcclxuICAgIHNlYzogMTAwMCxcclxuICAgIG1pbjogNjAgKiAxMDAwLFxyXG4gICAgaG91cjogNjAgKiA2MCAqIDEwMDAsXHJcbiAgICBkYXk6IDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgICB3ZWVrOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICAgIG1vbnRoOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgICB5ZWFyOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgfVxyXG4gIGxldCBkYXRlT2JqID0gZGF0ZVxyXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGUpXHJcbiAgfVxyXG4gIGxldCB0aW1lRGlmZiA9IERhdGUubm93KCkgLSBkYXRlT2JqLmdldFRpbWUoKSAvLyBpbiBtaWxpc2VjXHJcbiAgaWYgKHRpbWVEaWZmID49IHRpbWVTdGFuZGFyZC55ZWFyKSB7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gdGltZVN0YW5kYXJkLnllYXIpXHJcbiAgICByZXR1cm4gY291bnQgKyBcInllYXJcIlxyXG4gIH0gZWxzZSBpZiAodGltZURpZmYgPj0gdGltZVN0YW5kYXJkLm1vbnRoKSB7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gdGltZVN0YW5kYXJkLm1vbnRoKVxyXG4gICAgcmV0dXJuIGNvdW50ICsgXCJtb1wiXHJcbiAgfSBlbHNlIGlmICh0aW1lRGlmZiA+PSB0aW1lU3RhbmRhcmQud2Vlaykge1xyXG4gICAgbGV0IGNvdW50ID0gTWF0aC5yb3VuZCh0aW1lRGlmZiAvIHRpbWVTdGFuZGFyZC53ZWVrKVxyXG4gICAgcmV0dXJuIGNvdW50ICsgXCJ3ZWVrXCJcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmID49IHRpbWVTdGFuZGFyZC5kYXkpIHtcclxuICAgIGxldCBjb3VudCA9IE1hdGgucm91bmQodGltZURpZmYgLyB0aW1lU3RhbmRhcmQuZGF5KVxyXG4gICAgcmV0dXJuIGNvdW50ICsgXCJkYXlcIlxyXG4gIH0gZWxzZSBpZiAodGltZURpZmYgPj0gdGltZVN0YW5kYXJkLmhvdXIpIHtcclxuICAgIGxldCBjb3VudCA9IE1hdGgucm91bmQodGltZURpZmYgLyB0aW1lU3RhbmRhcmQuaG91cilcclxuICAgIHJldHVybiBjb3VudCArIFwiaG91clwiXHJcbiAgfSBlbHNlIGlmICh0aW1lRGlmZiA+PSB0aW1lU3RhbmRhcmQubWluKSB7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gdGltZVN0YW5kYXJkLm1pbilcclxuICAgIHJldHVybiBjb3VudCArIFwibWluXCJcclxuICB9IGVsc2UgaWYgKHRpbWVEaWZmID49IHRpbWVTdGFuZGFyZC5zZWMpIHtcclxuICAgIGxldCBjb3VudCA9IE1hdGgucm91bmQodGltZURpZmYgLyB0aW1lU3RhbmRhcmQuc2VjKVxyXG4gICAgcmV0dXJuIGNvdW50ICsgXCJzZWNcIlxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCIxc2VjXCJcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRpbWVEaWZmZXJlbmNlRnJvbU5vdyIsImRhdGUiLCJ0aW1lU3RhbmRhcmQiLCJzZWMiLCJtaW4iLCJob3VyIiwiZGF5Iiwid2VlayIsIm1vbnRoIiwieWVhciIsImRhdGVPYmoiLCJEYXRlIiwidGltZURpZmYiLCJub3ciLCJnZXRUaW1lIiwiY291bnQiLCJNYXRoIiwicm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev-javascripts/common/calculateTimeDifference.dev.js\n");

/***/ })

}]);