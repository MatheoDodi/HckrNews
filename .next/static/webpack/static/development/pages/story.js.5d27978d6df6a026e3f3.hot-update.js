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
    className: "jsx-2543101769",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2543101769" + " " + "date-author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2543101769" + " " + "author link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2543101769" + " " + "date link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, comment.time_ago)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2543101769" + " " + "comment-content",
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
    id: "2543101769",
    __self: this
  }, ".date-author.jsx-2543101769{color:#828282;font-size:0.8em;font-weight:700;}.link.jsx-2543101769:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd1QixBQU1ZLGNBTFYsZ0JBQ0EsZ0JBQ2xCLGNBSWlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vQ29tbWVudExpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tZW50IH0pID0+IChcbiAgPGxpPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1hdXRob3JcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvciBsaW5rXCI+e2NvbW1lbnQudXNlcn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlIGxpbmtcIj57Y29tbWVudC50aW1lX2Fnb308L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29tbWVudC1jb250ZW50XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50IH19XG4gICAgLz5cbiAgICB7Y29tbWVudC5jb21tZW50cy5sZW5ndGggPiAwICYmIDxDb21tZW50TGlzdCBjb21tZW50cz17Y29tbWVudC5jb21tZW50c30gLz59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRhdGUtYXV0aG9yIHtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG5cbiAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js */"));
});

/***/ })

})
//# sourceMappingURL=story.js.5d27978d6df6a026e3f3.hot-update.js.map