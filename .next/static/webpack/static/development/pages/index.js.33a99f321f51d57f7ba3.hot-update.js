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
    className: "jsx-2465659433" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-2465659433" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2465659433" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2465659433" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2465659433" + " " + "comment-icon-count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      version: "1.1",
      id: "Capa_1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 60 60",
      className: "jsx-2465659433" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01 c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5 c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4 S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z",
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2465659433",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, story.comments_count || 0, " comments")))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2465659433",
    __self: this
  }, ".story-list.jsx-2465659433{padding:0.2rem 0;background:#f70;}.story.jsx-2465659433{padding:1.8rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.story.jsx-2465659433:hover{background:#ffefe6;}.story-title.jsx-2465659433{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-2465659433 a.jsx-2465659433{color:#444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2465659433 a.jsx-2465659433:hover,.story-details.jsx-2465659433 a.jsx-2465659433:hover{color:#111;}.story-details.jsx-2465659433{font-size:0.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.story-details.jsx-2465659433 span.jsx-2465659433{color:#f70;margin-bottom:0.5rem;}.story-details.jsx-2465659433 a.jsx-2465659433{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}.icon.jsx-2465659433{height:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURPLEFBRzRCLEFBS0csQUFTRCxBQUlKLEFBT0osQUFNQSxBQUlNLEFBTU4sQUFLUyxBQU9SLFdBM0JTLEFBTXZCLEFBVXVCLENBWXZCLEdBbkNrQixFQWxCQSxBQW1DSCxFQXJCZixDQVRzQixBQXlDTixXQTNCTCxDQXVCWCxDQXpDQSxDQThDdUIsTUEzQkQsb0JBQ3RCLENBS0EsT0FwQm1CLGdCQTBDQSxDQXpDSixNQTZCUyxVQWF4QiwwREF6Q2dDLFVBNkJoQyx5R0E1QnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy9Eb2N1bWVudHMvQWxsLVByb2plY3RzL0hja3JOZXdzL2NvbXBvbmVudHMvU3RvcnlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgU3RvcnlMaXN0ID0gKHsgc3RvcmllcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxuICAgIHtzdG9yaWVzLm1hcChzdG9yeSA9PiAoXG4gICAgICA8ZGl2IGtleT17c3RvcnkuaWR9IGNsYXNzTmFtZT1cInN0b3J5XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPlxuICAgICAgICAgIDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWljb24tY291bnRcIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICBpZD1cIkNhcGFfMVwiXG4gICAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MCA2MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0zMCwxLjVjLTE2LjU0MiwwLTMwLDEyLjExMi0zMCwyN2MwLDUuMjA0LDEuNjQ2LDEwLjI0NSw0Ljc2OCwxNC42MDRjLTAuNTkxLDYuNTM3LTIuMTc1LDExLjM5LTQuNDc1LDEzLjY4OVxuXHRjLTAuMzA0LDAuMzA0LTAuMzgsMC43NjktMC4xODgsMS4xNTNDMC4yNzUsNTguMjg5LDAuNjI1LDU4LjUsMSw1OC41YzAuMDQ2LDAsMC4wOTItMC4wMDMsMC4xMzktMC4wMVxuXHRjMC40MDUtMC4wNTcsOS44MTMtMS40MTEsMTYuNjE4LTUuMzM5QzIxLjYyMSw1NC43MSwyNS43MzcsNTUuNSwzMCw1NS41YzE2LjU0MiwwLDMwLTEyLjExMiwzMC0yN1M0Ni41NDIsMS41LDMwLDEuNXogTTE2LDMyLjVcblx0Yy0yLjIwNiwwLTQtMS43OTQtNC00czEuNzk0LTQsNC00czQsMS43OTQsNCw0UzE4LjIwNiwzMi41LDE2LDMyLjV6IE0zMCwzMi41Yy0yLjIwNiwwLTQtMS43OTQtNC00czEuNzk0LTQsNC00czQsMS43OTQsNCw0XG5cdFMzMi4yMDYsMzIuNSwzMCwzMi41eiBNNDQsMzIuNWMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFM0Ni4yMDYsMzIuNSw0NCwzMi41elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc3RvcnktbGlzdCB7XG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y3MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeSB7XG4gICAgICAgICAgcGFkZGluZzogMS44cmVtIDNyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZWZlNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyLFxuICAgICAgICAuc3RvcnktZGV0YWlscyBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2Y3MDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICBjb2xvcjogIzdiODc5NDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.33a99f321f51d57f7ba3.hot-update.js.map