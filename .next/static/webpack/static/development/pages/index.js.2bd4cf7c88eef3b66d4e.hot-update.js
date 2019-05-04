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
    className: "jsx-863995511" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-863995511" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-863995511" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-863995511",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-863995511" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-863995511",
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
      className: "jsx-863995511",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "863995511",
    __self: this
  }, ".story-list.jsx-863995511{padding:1rem 0.5rem;background:#e1e1e1;}.story.jsx-863995511{padding:2rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;background:white;border-radius:5px;margin:0.5rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.story.jsx-863995511:hover{background:#ffefe6;}.story-title.jsx-863995511{font-size:1.3rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-863995511 a.jsx-863995511{color:#444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-863995511 a.jsx-863995511:hover,.story-details.jsx-863995511 a.jsx-863995511:hover{color:#111;}.story-details.jsx-863995511{font-size:0.7rem;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.story-details.jsx-863995511 span.jsx-863995511{margin-right:1em;color:#f70;}.story-details.jsx-863995511 a.jsx-863995511{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBRytCLEFBS0YsQUFVQyxBQUlGLEFBT04sQUFNQSxBQUlNLEFBT0EsQUFLRyxXQXJCQyxBQU12QixNQWJrQixBQWlCQyxBQU9OLENBdENTLENBVXRCLENBZnFCLEFBZ0RMLFFBSmhCLEtBeEJXLENBaUJJLEFBWVEsS0FoRHZCLEdBb0JzQixtQkFNdEIsQ0FMQSxJQWhCbUIsaUJBQ0MsQ0EyQ0QsaUJBMUNELEFBMkNsQixPQWJ3QixTQTdCVCxxRUE4QmYsS0E3QmdDLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy9Eb2N1bWVudHMvQWxsLVByb2plY3RzL0hja3JOZXdzL2NvbXBvbmVudHMvU3RvcnlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgU3RvcnlMaXN0ID0gKHsgc3RvcmllcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxuICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PiAoXG4gICAgICA8ZGl2IGtleT17c3RvcnkuaWR9IGNsYXNzTmFtZT1cInN0b3J5XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPlxuICAgICAgICAgIDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxuICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKX1cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnN0b3J5LWxpc3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Rvcnkge1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZWZlNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LWRldGFpbHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIGNvbG9yOiAjZjcwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LWRldGFpbHMgYSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgY29sb3I6ICM3Yjg3OTQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.2bd4cf7c88eef3b66d4e.hot-update.js.map