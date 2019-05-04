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
    className: "jsx-1249212326" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-1249212326" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1249212326" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-1249212326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1249212326" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1249212326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1249212326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1249212326",
    __self: this
  }, ".story-list.jsx-1249212326{padding:1rem 0.5rem;background:#e1e1e1;}.story.jsx-1249212326{padding:2rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;background:white;border-radius:5px;margin:0.5rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.story.jsx-1249212326:hover{background:#ffefe6;}.story-title.jsx-1249212326{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-1249212326 a.jsx-1249212326{color:#444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-1249212326 a.jsx-1249212326:hover,.story-details.jsx-1249212326 a.jsx-1249212326:hover{color:#111;}.story-details.jsx-1249212326{font-size:0.7rem;font-weight:bold;}.story-details.jsx-1249212326 span.jsx-1249212326{margin-right:1em;color:#f70;}.story-details.jsx-1249212326 a.jsx-1249212326{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBRytCLEFBS0YsQUFTQyxBQUlKLEFBT0osQUFNQSxBQUlNLEFBS0EsQUFLRyxXQW5CQyxBQU12QixJQWJrQixFQWlCQyxBQUtOLENBbkNTLENBU3RCLENBZHFCLEFBNkNMLFFBSmhCLEdBdEJXLEdBaUJYLEFBVXVCLEtBN0N2QixDQW1Cc0Isb0JBQ3RCLENBS0EsS0FwQm1CLGlCQUNDLENBd0NELGlCQXZDRCxBQXdDbEIsZ0JBdkNlLDBFQUNmIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTdG9yeUxpc3QgPSAoeyBzdG9yaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XG4gICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcbiAgICAgIDxkaXYga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPVwic3RvcnlcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+XG4gICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cbiAgICAgICAgICA8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50czwvc3Bhbj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XG4gICAgICAgICAgICA8YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc3RvcnktbGlzdCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeSB7XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAzcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Rvcnk6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmVmZTY7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICBjb2xvcjogI2Y3MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGNvbG9yOiAjN2I4Nzk0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.db3178b4a48f65aa438e.hot-update.js.map