"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");

var _jsxFileName = "C:\\Users\\SH\\Desktop\\blockchain\\coding\\miyeonsi\\coding\\pages\\index.jsx";

 // import Dialog from '../components/Dialog'


const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "pages__Image",
  componentId: "sc-1jh9rvi-0"
})(["display:block;color:red;position:absolute;z-index:1;background-size:contain;@media(max-width:700px){min-height:100vh;}@media(min-width:701px){width:100vw;min-height:100vh;}"]);
const list = [['1:오늘 좋아!', '2:월요일 좋아!', '1:네모네모', '2:스폰지밥~!'], ['1:스폰지밥!', '뭐하는거지?']];

const index = () => {
  const appClick = () => {
    dispatch({
      type: "plusNumber"
    });
  };

  const appPress = () => {
    if (keyCode == 13 || keyCode == 32) {
      appClick();
    }
  };

  const {
    dispatch,
    state
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (state.number === 2 && state.stage === 0) {
      dispatch({
        type: "plusStage"
      });
    }
  }, [state.number]);

  let aa = state => {
    switch (state.background) {
      case "room":
        return 'room.jpg';

      case "class":
      default:
        return 'class.jpg';
    }
  };

  console.log(aa);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: appClick,
    onKeyDown: appPress,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {
      src: aa({
        state
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/girl.jpg",
      style: {
        position: 'absolute',
        zIndex: '2',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%',
        height: '200px',
        border: '3px solid red',
        position: 'absolute',
        transform: 'translateY(-50%)',
        textAlign: 'center',
        top: '100%',
        zIndex: '5',
        background: 'white',
        borderRadius: '1em'
      },
      children: list[state.stage][state.number]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxNQUFNd0IsWUFBWSxHQUFFO0FBQ2hCaEIsRUFBQUEsS0FBSyxFQUFDLENBRFU7QUFFaEJELEVBQUFBLE1BQU0sRUFBQyxDQUZTO0FBR2hCRyxFQUFBQSxVQUFVLEVBQUMsT0FISztBQUloQmUsRUFBQUEsT0FBTyxFQUFDLENBSlE7QUFLaEJDLEVBQUFBLE9BQU8sRUFBQyxDQUxRO0FBTWhCQyxFQUFBQSxNQUFNLEVBQUM7QUFOUyxDQUFwQjtBQVVBLE1BQU0vQixLQUFLLGdCQUFHMkIsb0RBQWEsQ0FBQ0MsWUFBRCxDQUEzQjtBQUVBLGlFQUFlNUIsS0FBZjs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGluZy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9jb2RpbmcvLi9zdG9yZS9jb250ZXh0LmpzeCIsIndlYnBhY2s6Ly9jb2RpbmcvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NvZGluZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NvZGluZy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbi8vIGltcG9ydCBEaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2cnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9zdG9yZS9jb250ZXh0JyBcclxuXHJcbmNvbnN0IEltYWdlID0gU3R5bGVkLmltZ2BcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xyXG4gICAgXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOjcwMHB4KXtcclxuICAgICAgICAgLyogd2lkdGg6b2JqZWN0LWZpdDsgKi9cclxuICAgICAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDo3MDFweCl7XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IGxpc3QgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgJzE67Jik64qYIOyii+yVhCEnLCcyOuyblOyalOydvCDsoovslYQhJywnMTrrhKTrqqjrhKTrqqgnLCcyOuyKpO2PsOyngOuwpX4hJ1xyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICAnMTrsiqTtj7Dsp4DrsKUhJywn662Q7ZWY64qU6rGw7KeAPycsXHJcbiAgICBdXHJcbl1cclxuY29uc3QgaW5kZXggPSgpPT57XHJcblxyXG4gICAgY29uc3QgYXBwQ2xpY2s9KCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpcInBsdXNOdW1iZXJcIn0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwUHJlc3M9KCk9PntcclxuICAgICAgICBpZihrZXlDb2RlID09IDEzIHx8IGtleUNvZGUgPT0zMil7XHJcbiAgICAgICAgICAgIGFwcENsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtkaXNwYXRjaCxzdGF0ZX0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHN0YXRlLm51bWJlcj09PTIgJiYgc3RhdGUuc3RhZ2UgPT09MCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlwicGx1c1N0YWdlXCJ9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW3N0YXRlLm51bWJlcl0pXHJcblxyXG4gICAgIFxyXG4gICAgbGV0IGFhPShzdGF0ZSk9PntcclxuICAgICAgICBzd2l0Y2goc3RhdGUuYmFja2dyb3VuZCl7ICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJyb29tXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCdyb29tLmpwZycpICAgIFxyXG4gICAgICAgICAgICBjYXNlIFwiY2xhc3NcIjpcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiAoJ2NsYXNzLmpwZycpIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuY29uc29sZS5sb2coYWEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FwcENsaWNrfSBvbktleURvd249e2FwcFByZXNzfT5cclxuICAgICAgICB7LyogPEltYWdlIHNyYyA9IHthYX0vPiAqL31cclxuICAgICAgICA8SW1hZ2Ugc3JjID0ge2FhKHtzdGF0ZX0pfS8+XHJcbiAgICAgICAgPGltZyBzcmMgPSBcIi9naXJsLmpwZ1wiIHN0eWxlID0ge3twb3NpdGlvbjonYWJzb2x1dGUnLCB6SW5kZXg6JzInLGxlZnQ6JzUwJScsdHJhbnNmb3JtOid0cmFuc2xhdGVYKC01MCUpJ319Lz5cclxuICAgICAgICA8ZGl2IHN0eWxlID17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzIwMHB4Jyxib3JkZXI6JzNweCBzb2xpZCByZWQnLHBvc2l0aW9uOidhYnNvbHV0ZScsdHJhbnNmb3JtOid0cmFuc2xhdGVZKC01MCUpJyx0ZXh0QWxpZ246J2NlbnRlcicsdG9wOicxMDAlJyx6SW5kZXg6JzUnLGJhY2tncm91bmQ6J3doaXRlJyxib3JkZXJSYWRpdXM6JzFlbSd9fT5cclxuICAgICAgICB7bGlzdFtzdGF0ZS5zdGFnZV1bc3RhdGUubnVtYmVyXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JyBcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG4gICAgc3RhZ2U6MCxcclxuICAgIG51bWJlcjowLFxyXG4gICAgYmFja2dyb3VuZDpcImNsYXNzXCIsXHJcbiAgICBwZXJzb24xOjAsXHJcbiAgICBwZXJzb24yOjAsXHJcbiAgICBvcHRpb246MCxcclxuXHJcbn0gXHJcblxyXG5jb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU3R5bGVkIiwiU3RvcmUiLCJJbWFnZSIsImltZyIsImxpc3QiLCJpbmRleCIsImFwcENsaWNrIiwiZGlzcGF0Y2giLCJ0eXBlIiwiYXBwUHJlc3MiLCJrZXlDb2RlIiwic3RhdGUiLCJudW1iZXIiLCJzdGFnZSIsImFhIiwiYmFja2dyb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsInpJbmRleCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsInRleHRBbGlnbiIsInRvcCIsImJvcmRlclJhZGl1cyIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJwZXJzb24xIiwicGVyc29uMiIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=