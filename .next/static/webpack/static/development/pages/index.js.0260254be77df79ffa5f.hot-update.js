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
    className: "jsx-3656847106" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-3656847106" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3656847106" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-3656847106",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3656847106" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3656847106",
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
      className: "jsx-3656847106",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, story.comments_count || 0, " comments")))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3656847106",
    __self: this
  }, ".story-list.jsx-3656847106{padding:0;}.story.jsx-3656847106{padding:1.5rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;}.story.jsx-3656847106:hover{background:#ffefe6;}.story-title.jsx-3656847106{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3656847106 a.jsx-3656847106{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3656847106 a.jsx-3656847106:hover,.story-details.jsx-3656847106 a.jsx-3656847106:hover{color:#111;}.story-details.jsx-3656847106{font-size:0.7rem;font-weight:bold;}.story-details.jsx-3656847106 span.jsx-3656847106{margin-right:1em;color:#f70;}.story-details.jsx-3656847106 a.jsx-3656847106{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBR3FCLEFBSVUsQUFLRCxBQUlKLEFBT0osQUFNQSxBQUlNLEFBS0EsQUFLRyxVQXZDdEIsQ0FvQnVCLEFBTXZCLElBYmtCLEVBaUJDLEFBS04sRUExQmIsQ0FMc0IsQUFvQ04sUUFKaEIsR0F0QlcsR0FpQlgsQUFVdUIsTUExQkQsb0JBQ3RCLENBS0EsT0FoQkEsZ0JBcUNtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9IY2tyTmV3cy9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3N0b3J5LmlkfSBjbGFzc05hbWU9XCJzdG9yeVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50czwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5zdG9yeS1saXN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZWZlNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyLFxuICAgICAgICAuc3RvcnktZGV0YWlscyBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIGNvbG9yOiAjZjcwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LWRldGFpbHMgYSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgY29sb3I6ICM3Yjg3OTQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.0260254be77df79ffa5f.hot-update.js.map