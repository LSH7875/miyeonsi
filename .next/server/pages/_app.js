(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.jsx");
/* harmony import */ var _public_aaa_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/aaa.css */ "./public/aaa.css");
/* harmony import */ var _public_aaa_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_aaa_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\SH\\Desktop\\blockchain\\coding\\miyeonsi\\coding\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_1__.default);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_3__.default, globalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_1__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  stage: 0,
  number: 0,
  background: "class",
  person1: 0,
  person2: 0,
  option: 0
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "./store/reducer.jsx":
/*!***************************!*\
  !*** ./store/reducer.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "plusNumber":
      let number = ++state.number;
      return _objectSpread(_objectSpread({}, state), {}, {
        number: number
      });

    case "plusStage":
      let stage = ++state.stage;
      return _objectSpread(_objectSpread({}, state), {}, {
        stage: stage,
        number: 0
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./public/aaa.css":
/*!************************!*\
  !*** ./public/aaa.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1JLEdBQUcsR0FBRyxDQUFDO0FBQUNDLEVBQUFBLFNBQUQ7QUFBV0MsRUFBQUE7QUFBWCxDQUFELEtBQXlCO0FBQ2pDLFFBQU1DLGFBQWEsR0FBR0wsaURBQVUsQ0FBQ0YsbURBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBbUJSLGlEQUFVLENBQUVFLG1EQUFGLEVBQVVJLGFBQVYsQ0FBbkM7QUFHQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLDREQUFEO0FBQWdCLFdBQUssRUFBSTtBQUFDQyxRQUFBQSxLQUFEO0FBQU9DLFFBQUFBO0FBQVAsT0FBekI7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFPSCxDQVpEOztBQWNBLGlFQUFlRixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUVBLE1BQU1PLFlBQVksR0FBRTtBQUNoQkMsRUFBQUEsS0FBSyxFQUFDLENBRFU7QUFFaEJDLEVBQUFBLE1BQU0sRUFBQyxDQUZTO0FBR2hCQyxFQUFBQSxVQUFVLEVBQUMsT0FISztBQUloQkMsRUFBQUEsT0FBTyxFQUFDLENBSlE7QUFLaEJDLEVBQUFBLE9BQU8sRUFBQyxDQUxRO0FBTWhCQyxFQUFBQSxNQUFNLEVBQUM7QUFOUyxDQUFwQjtBQVVBLE1BQU1qQixLQUFLLGdCQUFHVSxvREFBYSxDQUFDQyxZQUFELENBQTNCO0FBRUEsaUVBQWVYLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQU1HLE9BQU8sR0FBRSxDQUFDSyxLQUFELEVBQU9VLE1BQVAsS0FBZ0I7QUFDM0IsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxZQUFMO0FBQ1EsVUFBSU4sTUFBTSxHQUFHLEVBQUVMLEtBQUssQ0FBQ0ssTUFBckI7QUFDSiw2Q0FBV0wsS0FBWDtBQUFpQkssUUFBQUEsTUFBTSxFQUFDQTtBQUF4Qjs7QUFDSixTQUFLLFdBQUw7QUFDUSxVQUFJRCxLQUFLLEdBQUcsRUFBRUosS0FBSyxDQUFDSSxLQUFwQjtBQUNKLDZDQUFXSixLQUFYO0FBQWlCSSxRQUFBQSxLQUFLLEVBQUNBLEtBQXZCO0FBQTZCQyxRQUFBQSxNQUFNLEVBQUM7QUFBcEM7O0FBQ0o7QUFDSSxhQUFPTCxLQUFQO0FBUlI7QUFVSCxDQVhEOztBQWFBLGlFQUFlTCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGluZy8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2NvZGluZy8uL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2NvZGluZy8uL3N0b3JlL3JlZHVjZXIuanN4Iiwid2VicGFjazovL2NvZGluZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29kaW5nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7IHVzZVJlZHVjZXIsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3N0b3JlL3JlZHVjZXInXHJcbmltcG9ydCAnLi4vcHVibGljL2FhYS5jc3MnXHJcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50LHBhZ2VQcm9wc30pPT57XHJcbiAgICBjb25zdCBnbG9iYWxDb250ZXh0ID0gdXNlQ29udGV4dChTdG9yZSk7XHJcbiAgICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdID0gdXNlUmVkdWNlciAocmVkdWNlcixnbG9iYWxDb250ZXh0KVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWUgPSB7e3N0YXRlLGRpc3BhdGNofX0gPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgIDwvU3RvcmUuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnIFxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBzdGFnZTowLFxyXG4gICAgbnVtYmVyOjAsXHJcbiAgICBiYWNrZ3JvdW5kOlwiY2xhc3NcIixcclxuICAgIHBlcnNvbjE6MCxcclxuICAgIHBlcnNvbjI6MCxcclxuICAgIG9wdGlvbjowLFxyXG5cclxufSBcclxuXHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiLCJjb25zdCByZWR1Y2VyID0oc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwicGx1c051bWJlclwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9ICsrc3RhdGUubnVtYmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLG51bWJlcjpudW1iZXJ9XHJcbiAgICAgICAgY2FzZSBcInBsdXNTdGFnZVwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YWdlID0gKytzdGF0ZS5zdGFnZTtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxzdGFnZTpzdGFnZSxudW1iZXI6MH1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJTdG9yZSIsInVzZVJlZHVjZXIiLCJ1c2VDb250ZXh0IiwicmVkdWNlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbENvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInN0YWdlIiwibnVtYmVyIiwiYmFja2dyb3VuZCIsInBlcnNvbjEiLCJwZXJzb24yIiwib3B0aW9uIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=