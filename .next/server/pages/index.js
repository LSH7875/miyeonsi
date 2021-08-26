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
})(["display:block;color:red;position:absolute;z-index:1;background-size:cover;overflow-y:hidden;width:100vw;height:100vh;object-fit:fill;"]);
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
    style: {
      width: '100vw',
      height: '100vh'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {
      src: aa({
        state
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/girl.jpg",
      style: {
        position: 'absolute',
        top: '10%',
        width: '50%',
        height: '70%',
        objectFit: 'fill',
        zIndex: '9',
        left: '100%',
        transform: 'translateX(-100%)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/girl.jpg",
      style: {
        position: 'absolute',
        top: '10%',
        width: '50%',
        height: '70%',
        objectFit: 'fill',
        zIndex: '3',
        left: '0%'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100%',
        height: '14%',
        paddingTop: '3%',
        paddingBottom: '3%',
        border: '3px solid red',
        position: 'absolute',
        transform: 'translateY(-100%)',
        textAlign: 'center',
        top: '100%',
        zIndex: '10',
        background: 'white',
        borderRadius: '1em'
      },
      children: list[state.stage][state.number]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxLQUFLLEVBQUMsTUFBUDtBQUFjQyxRQUFBQSxNQUFNLEVBQUMsS0FBckI7QUFBNEJPLFFBQUFBLFVBQVUsRUFBQyxJQUF2QztBQUE2Q0MsUUFBQUEsYUFBYSxFQUFDLElBQTNEO0FBQWdFQyxRQUFBQSxNQUFNLEVBQUMsZUFBdkU7QUFBdUZSLFFBQUFBLFFBQVEsRUFBQyxVQUFoRztBQUEyR0ssUUFBQUEsU0FBUyxFQUFDLG1CQUFySDtBQUF5SUksUUFBQUEsU0FBUyxFQUFDLFFBQW5KO0FBQTRKUixRQUFBQSxHQUFHLEVBQUMsTUFBaEs7QUFBdUtFLFFBQUFBLE1BQU0sRUFBQyxJQUE5SztBQUFtTFIsUUFBQUEsVUFBVSxFQUFDLE9BQTlMO0FBQXNNZSxRQUFBQSxZQUFZLEVBQUM7QUFBbk4sT0FBYjtBQUFBLGdCQUNDMUIsSUFBSSxDQUFDTyxLQUFLLENBQUNFLEtBQVAsQ0FBSixDQUFrQkYsS0FBSyxDQUFDQyxNQUF4QjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFXSCxDQXpDRDs7QUEyQ0EsaUVBQWVQLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFFQSxNQUFNMkIsWUFBWSxHQUFFO0FBQ2hCbkIsRUFBQUEsS0FBSyxFQUFDLENBRFU7QUFFaEJELEVBQUFBLE1BQU0sRUFBQyxDQUZTO0FBR2hCRyxFQUFBQSxVQUFVLEVBQUMsT0FISztBQUloQmtCLEVBQUFBLE9BQU8sRUFBQyxDQUpRO0FBS2hCQyxFQUFBQSxPQUFPLEVBQUMsQ0FMUTtBQU1oQkMsRUFBQUEsTUFBTSxFQUFDO0FBTlMsQ0FBcEI7QUFVQSxNQUFNbEMsS0FBSyxnQkFBRzhCLG9EQUFhLENBQUNDLFlBQUQsQ0FBM0I7QUFFQSxpRUFBZS9CLEtBQWY7Ozs7Ozs7Ozs7QUNkQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmcvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vY29kaW5nLy4vc3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vY29kaW5nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jb2RpbmcvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jb2RpbmcvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG4vLyBpbXBvcnQgRGlhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvRGlhbG9nJ1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCcgXHJcblxyXG5jb25zdCBJbWFnZSA9IFN0eWxlZC5pbWdgXHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIG9iamVjdC1maXQ6ZmlsbDtcclxuICAgIFxyXG4gICAgLyogd2lkdGg6MTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoOyAqL1xyXG5gXHJcblxyXG5cclxuY29uc3QgbGlzdCA9IFtcclxuICAgIFtcclxuICAgICAgICAnMTrsmKTripgg7KKL7JWEIScsJzI67JuU7JqU7J28IOyii+yVhCEnLCcxOuuEpOuqqOuEpOuqqCcsJzI67Iqk7Y+w7KeA67ClfiEnXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgICcxOuyKpO2PsOyngOuwpSEnLCfrrZDtlZjripTqsbDsp4A/JyxcclxuICAgIF1cclxuXVxyXG5jb25zdCBpbmRleCA9KCk9PntcclxuXHJcbiAgICBjb25zdCBhcHBDbGljaz0oKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOlwicGx1c051bWJlclwifSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBQcmVzcz0oKT0+e1xyXG4gICAgICAgIGlmKGtleUNvZGUgPT0gMTMgfHwga2V5Q29kZSA9PTMyKXtcclxuICAgICAgICAgICAgYXBwQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2Rpc3BhdGNoLHN0YXRlfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoc3RhdGUubnVtYmVyPT09MiAmJiBzdGF0ZS5zdGFnZSA9PT0wKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6XCJwbHVzU3RhZ2VcIn0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbc3RhdGUubnVtYmVyXSlcclxuXHJcbiAgICAgXHJcbiAgICBsZXQgYWE9KHN0YXRlKT0+e1xyXG4gICAgICAgIHN3aXRjaChzdGF0ZS5iYWNrZ3JvdW5kKXsgICBcclxuICAgICAgICAgICAgY2FzZSBcInJvb21cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoJ3Jvb20uanBnJykgICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGFzc1wiOlxyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuICgnY2xhc3MuanBnJykgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5jb25zb2xlLmxvZyhhYSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17YXBwQ2xpY2t9IG9uS2V5RG93bj17YXBwUHJlc3N9IHN0eWxlID17e3dpZHRoOicxMDB2dycsaGVpZ2h0OicxMDB2aCcgfX0+XHJcbiAgICAgICAgey8qIDxJbWFnZSBzcmMgPSB7YWF9Lz4gKi99XHJcbiAgICAgICAgPEltYWdlIHNyYyA9IHthYSh7c3RhdGV9KX0vPlxyXG4gICAgICAgIDxpbWcgc3JjID0gXCIvZ2lybC5qcGdcIiBzdHlsZSA9IHt7cG9zaXRpb246J2Fic29sdXRlJywgdG9wOicxMCUnLCB3aWR0aDonNTAlJyxoZWlnaHQ6JzcwJScsb2JqZWN0Rml0OidmaWxsJyx6SW5kZXg6JzknLGxlZnQ6JzEwMCUnLHRyYW5zZm9ybTondHJhbnNsYXRlWCgtMTAwJSknfX0vPlxyXG4gICAgICAgIDxpbWcgc3JjID0gXCIvZ2lybC5qcGdcIiBzdHlsZSA9IHt7cG9zaXRpb246J2Fic29sdXRlJywgdG9wOicxMCUnLCB3aWR0aDonNTAlJyxoZWlnaHQ6JzcwJScsb2JqZWN0Rml0OidmaWxsJyx6SW5kZXg6JzMnLGxlZnQ6JzAlJ319Lz5cclxuICAgICAgICA8ZGl2IHN0eWxlID17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzE0JScsIHBhZGRpbmdUb3A6JzMlJywgcGFkZGluZ0JvdHRvbTonMyUnLGJvcmRlcjonM3B4IHNvbGlkIHJlZCcscG9zaXRpb246J2Fic29sdXRlJyx0cmFuc2Zvcm06J3RyYW5zbGF0ZVkoLTEwMCUpJyx0ZXh0QWxpZ246J2NlbnRlcicsdG9wOicxMDAlJyx6SW5kZXg6JzEwJyxiYWNrZ3JvdW5kOid3aGl0ZScsYm9yZGVyUmFkaXVzOicxZW0nfX0+XHJcbiAgICAgICAge2xpc3Rbc3RhdGUuc3RhZ2VdW3N0YXRlLm51bWJlcl19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCcgXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPXtcclxuICAgIHN0YWdlOjAsXHJcbiAgICBudW1iZXI6MCxcclxuICAgIGJhY2tncm91bmQ6XCJjbGFzc1wiLFxyXG4gICAgcGVyc29uMTowLFxyXG4gICAgcGVyc29uMjowLFxyXG4gICAgb3B0aW9uOjAsXHJcblxyXG59IFxyXG5cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlN0eWxlZCIsIlN0b3JlIiwiSW1hZ2UiLCJpbWciLCJsaXN0IiwiaW5kZXgiLCJhcHBDbGljayIsImRpc3BhdGNoIiwidHlwZSIsImFwcFByZXNzIiwia2V5Q29kZSIsInN0YXRlIiwibnVtYmVyIiwic3RhZ2UiLCJhYSIsImJhY2tncm91bmQiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsIm9iamVjdEZpdCIsInpJbmRleCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlciIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJwZXJzb24xIiwicGVyc29uMiIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=