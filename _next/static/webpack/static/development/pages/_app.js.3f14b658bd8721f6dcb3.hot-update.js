webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Background.js":
/*!**********************************!*\
  !*** ./components/Background.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _this = undefined,
    _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project2/components/Background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BackgroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Background__BackgroundContainer",
  componentId: "sc-1d185jw-0"
})(["display:flex;padding-top:32px;width:100vw;background:#f5f6f7;"]);
var Loader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Background__Loader",
  componentId: "sc-1d185jw-1"
})(["position:fixed;width:100vw;height:100vw;background:#f5f6f7;z-index:20;"]);
var FixedGithub = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Background__FixedGithub",
  componentId: "sc-1d185jw-2"
})(["position:fixed;z-index:10;right:0;top:0;margin:6px;& > img{filter:invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(60%);cursor:pointer;}"]);

var Background = function Background(_ref) {
  var children = _ref.children;

  var showFull = function showFull() {
    document.getElementById('loader').style.display = 'none';
  }; // useEffect(() => {
  //   setTimeout(showFull, 500)
  // },[])


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Loader, {
    id: "loader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(BackgroundContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://github.com/taenykim/small-magic-project",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(FixedGithub, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./github.png",
    width: "28",
    height: "28",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }))), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ })

})
//# sourceMappingURL=_app.js.3f14b658bd8721f6dcb3.hot-update.js.map