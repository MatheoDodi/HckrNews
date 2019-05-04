webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentList */ "./components/CommentList.js");
var _jsxFileName = "/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3374491492" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3374491492" + " " + "date-author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3374491492" + " " + "author link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3374491492" + " " + "date link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, comment.time_ago)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-3374491492" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), comment.comments.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CommentList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    comments: comment.comments,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3374491492",
    __self: this
  }, ".date-author.jsx-3374491492{color:#828282;font-size:0.8em;}.author.jsx-3374491492{color:#f60;font-size:0.9em;font-weight:bold;}.link.jsx-3374491492:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd1QixBQUtILEFBTWUsV0FMVixHQUxBLGFBTUMsR0FMbkIsY0FNQSxnQkFJaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9IY2tyTmV3cy9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi9Db21tZW50TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1lbnQgfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1hdXRob3JcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvciBsaW5rXCI+e2NvbW1lbnQudXNlcn08L3NwYW4+eycgJ31cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGUgbGlua1wiPntjb21tZW50LnRpbWVfYWdvfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LmNvbnRlbnQgfX1cbiAgICAvPlxuICAgIHtjb21tZW50LmNvbW1lbnRzLmxlbmd0aCA+IDAgJiYgPENvbW1lbnRMaXN0IGNvbW1lbnRzPXtjb21tZW50LmNvbW1lbnRzfSAvPn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZGF0ZS1hdXRob3Ige1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIH1cblxuICAgICAgLmF1dGhvciB7XG4gICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js */"));
});

/***/ })

})
//# sourceMappingURL=story.js.d77249b05e1db2e82682.hot-update.js.map