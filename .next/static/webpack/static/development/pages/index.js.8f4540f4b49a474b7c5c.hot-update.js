webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js";




var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2267565473" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-2267565473" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2267565473" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.title,
      className: "jsx-2267565473",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2267565473" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2267565473",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2267565473",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, story.comments_count || 0, " comments")))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2267565473",
    __self: this
  }, ".story-list.jsx-2267565473{padding:0;}.story.jsx-2267565473{padding:1.5rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;}.story.jsx-2267565473:hover{background:#ffefe6;cursor:pointer;}.story-title.jsx-2267565473{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-2267565473 a.jsx-2267565473{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2267565473 a.jsx-2267565473:hover,.story-details.jsx-2267565473 a.jsx-2267565473:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-2267565473{font-size:0.7rem;font-weight:bold;}.story-details.jsx-2267565473 span.jsx-2267565473{margin-right:1em;font-color:#f70;}.story-details.jsx-2267565473 a.jsx-2267565473{font-weight:lighter;color:#9aa5b1;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBR3FCLEFBSVUsQUFLRCxBQUtKLEFBT0osQUFNZSxBQUlULEFBS0EsQUFLRyxVQXhDdEIsQ0FxQnVCLElBUEwsRUFpQkMsQUFLRCxFQTNCRCxDQUxLLEFBcUNOLFdBMUJMLEVBc0JYLENBM0JBLEFBc0JBLEFBVXVCLE1BMUJELG9CQUN0QixBQVVBLENBTEEsT0FqQkEsZ0JBc0NtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9IY2tyTmV3cy9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3N0b3J5LmlkfSBjbGFzc05hbWU9XCJzdG9yeVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgICAgICA8YSBocmVmPXtzdG9yeS50aXRsZX0+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzPC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxuICAgICAgICAgICAgICA8YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApKX1cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnN0b3J5LWxpc3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Rvcnkge1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5OmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZlZmU2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyLFxuICAgICAgICAuc3RvcnktZGV0YWlscyBhOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIGZvbnQtY29sb3I6ICNmNzA7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICBjb2xvcjogIzlhYTViMTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.8f4540f4b49a474b7c5c.hot-update.js.map