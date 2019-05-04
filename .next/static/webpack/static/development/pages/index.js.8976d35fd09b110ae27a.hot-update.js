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
    className: "jsx-2584179753" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-2584179753" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2584179753" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-2584179753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2584179753" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2584179753",
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
      className: "jsx-2584179753",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2584179753",
    __self: this
  }, ".story-list.jsx-2584179753{padding:1rem 0.5rem;background:#e1e1e1;}.story.jsx-2584179753{padding:2rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;background:white;border-radius:5px;margin:0.5rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.story.jsx-2584179753:hover{background:#ffefe6;}.story-title.jsx-2584179753{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-2584179753 a.jsx-2584179753{color:#444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2584179753 a.jsx-2584179753:hover,.story-details.jsx-2584179753 a.jsx-2584179753:hover{color:#111;}.story-details.jsx-2584179753{font-size:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.story-details.jsx-2584179753 span.jsx-2584179753{color:#f70;margin-bottom:0.5rem;}.story-details.jsx-2584179753 a.jsx-2584179753{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBRytCLEFBS0YsQUFXQyxBQUlKLEFBT0osQUFNQSxBQUlJLEFBTUosQUFLUyxXQXBCQyxBQU12QixBQVV1QixJQXZCTCxBQWlCSCxHQWhDTyxDQVd0QixDQWhCcUIsQUFnREwsV0EzQkwsQ0F1QlgsRUFLdUIsS0FoRHZCLENBcUJzQixvQkFDdEIsQ0FLQSxLQXRCbUIsaUJBQ0MsQ0EyQ0gsS0FaTyxVQWF4QixFQTNDa0IsZ0JBQ0gsa0RBOEJmLHdCQTdCZ0MsbUhBQ1gsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTdG9yeUxpc3QgPSAoeyBzdG9yaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XG4gICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcbiAgICAgIDxkaXYga2V5PXtzdG9yeS5pZH0gY2xhc3NOYW1lPVwic3RvcnlcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+XG4gICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cbiAgICAgICAgICA8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50czwvc3Bhbj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XG4gICAgICAgICAgICA8YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc3RvcnktbGlzdCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeSB7XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAzcmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Rvcnk6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmVmZTY7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZjcwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGNvbG9yOiAjN2I4Nzk0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.8976d35fd09b110ae27a.hot-update.js.map