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
    className: "jsx-17914061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-17914061" + " " + "date-author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-17914061" + " " + "author link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-17914061" + " " + "date link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, comment.time_ago)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-17914061" + " " + "comment-content",
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
    id: "17914061",
    __self: this
  }, ".date-author.jsx-17914061{color:#828282;font-size:0.8em;}.author.jsx-17914061{font-size:0.9em;}.link.jsx-17914061:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd1QixBQUtFLEFBSVUsY0FSVixFQUtsQixjQUpBLDhCQVFpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy9Eb2N1bWVudHMvQWxsLVByb2plY3RzL0hja3JOZXdzL2NvbXBvbmVudHMvQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuL0NvbW1lbnRMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY29tbWVudCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtYXV0aG9yXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3IgbGlua1wiPntjb21tZW50LnVzZXJ9PC9zcGFuPnsnICd9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlIGxpbmtcIj57Y29tbWVudC50aW1lX2Fnb308L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29tbWVudC1jb250ZW50XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50IH19XG4gICAgLz5cbiAgICB7Y29tbWVudC5jb21tZW50cy5sZW5ndGggPiAwICYmIDxDb21tZW50TGlzdCBjb21tZW50cz17Y29tbWVudC5jb21tZW50c30gLz59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRhdGUtYXV0aG9yIHtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICB9XG5cbiAgICAgIC5hdXRob3Ige1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgfVxuXG4gICAgICAubGluazpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js */"));
});

/***/ })

})
//# sourceMappingURL=story.js.c31e98b780c86cdeb9cc.hot-update.js.map