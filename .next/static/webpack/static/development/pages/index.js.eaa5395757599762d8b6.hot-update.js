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
    className: "jsx-112791722" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-112791722" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-112791722" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.title,
      className: "jsx-112791722",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-112791722" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-112791722",
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
      className: "jsx-112791722",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, story.comments_count || 0, " comments")))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "112791722",
    __self: this
  }, ".story-list.jsx-112791722{padding:0;}.story.jsx-112791722{padding:1.5rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;}.story.jsx-112791722:hover{box-shadow:0 0 10px 2px rgba(0,0,0,0.15);}.story-title.jsx-112791722{font-size:0.8rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-112791722 a.jsx-112791722{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-112791722 a.jsx-112791722:hover,.story-details.jsx-112791722 a.jsx-112791722:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-112791722{font-size:0.8rem;font-weight:bold;}.story-details.jsx-112791722 span.jsx-112791722{margin-right:1em;}.story-details.jsx-112791722 a.jsx-112791722{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBR3FCLEFBSVUsQUFNd0IsQUFJM0IsQUFPTixBQU1lLEFBSVQsQUFLQSxBQUlILFVBdkNoQixDQXFCdUIsR0FtQkEsR0ExQkwsQUFpQkMsQUFLbkIsR0FoQ3NCLGFBV1gsQ0FpQlgsT0F0QkEsQ0FNc0Isa0JBV3RCLENBTEEsQ0FMQSxFQXdCQSxJQXBDb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTdG9yeUxpc3QgPSAoeyBzdG9yaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XG4gICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcbiAgICAgIDxkaXYga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPVwic3RvcnlcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+XG4gICAgICAgICAgPGEgaHJlZj17c3RvcnkudGl0bGV9PntzdG9yeS50aXRsZX08L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50czwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5zdG9yeS1saXN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Rvcnk6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjYwMGZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.eaa5395757599762d8b6.hot-update.js.map