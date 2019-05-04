webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentList */ "./components/CommentList.js");
var _jsxFileName = "/Users/matthew/Documents/All-Projects/HckrNews/components/Comment.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date-autor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, comment.user, " ", comment.time_ago), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment-content",
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), comment.comments.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommentList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    comments: comment.comments,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=story.js.b0b6b89d7d92cf59da95.hot-update.js.map