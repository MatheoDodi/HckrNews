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
    className: "jsx-3248028268" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-3248028268" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3248028268" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3248028268" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.points || 0, " points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3248028268" + " " + "comment-icon-count",
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
      className: "jsx-3248028268" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01 c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5 c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4 S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z",
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      version: "1.1",
      id: "Capa_1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 55.867 55.867",
      className: "jsx-3248028268" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558 s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024 l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506 c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017 l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z",
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3248028268",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, story.comments_count || 0, " comments"))))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3248028268",
    __self: this
  }, ".story-list.jsx-3248028268{padding:0.2rem 0;background:#f70;}.story.jsx-3248028268{padding:1.8rem 3rem;-webkit-transition:all 0.3s;transition:all 0.3s;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.story.jsx-3248028268:hover{background:#ffefe6;}.story-title.jsx-3248028268{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-3248028268 a.jsx-3248028268{color:#444;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3248028268 a.jsx-3248028268:hover,.story-details.jsx-3248028268 a.jsx-3248028268:hover{color:#111;}.story-details.jsx-3248028268{font-size:0.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.story-details.jsx-3248028268 span.jsx-3248028268{color:#f70;margin-bottom:0.5rem;}.story-details.jsx-3248028268 a.jsx-3248028268{font-weight:lighter;color:#7b8794;-webkit-text-decoration:none;text-decoration:none;font-size:0.8rem;}.icon.jsx-3248028268{height:12px;fill:#f70;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZPLEFBRzRCLEFBS0csQUFTRCxBQUlKLEFBT0osQUFNQSxBQUlNLEFBTU4sQUFLUyxBQU9SLFdBM0JTLEFBTXZCLEFBVXVCLENBWVgsR0FuQ00sRUFsQkEsQUFtQ0gsRUFyQmYsQ0FUc0IsQUF5Q04sRUFRRyxTQW5DUixDQXVCWCxDQXpDQSxDQThDdUIsS0FRdkIsQ0FuQ3NCLG9CQUN0QixDQUtBLE9BcEJtQixnQkEwQ0EsQ0F6Q0osTUE2QlMsVUFheEIsMERBekNnQyxVQTZCaEMseUdBNUJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9IY2tyTmV3cy9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3N0b3J5LmlkfSBjbGFzc05hbWU9XCJzdG9yeVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxuICAgICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1pY29uLWNvdW50XCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxuICAgICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjAgNjBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMzAsMS41Yy0xNi41NDIsMC0zMCwxMi4xMTItMzAsMjdjMCw1LjIwNCwxLjY0NiwxMC4yNDUsNC43NjgsMTQuNjA0Yy0wLjU5MSw2LjUzNy0yLjE3NSwxMS4zOS00LjQ3NSwxMy42ODlcblx0Yy0wLjMwNCwwLjMwNC0wLjM4LDAuNzY5LTAuMTg4LDEuMTUzQzAuMjc1LDU4LjI4OSwwLjYyNSw1OC41LDEsNTguNWMwLjA0NiwwLDAuMDkyLTAuMDAzLDAuMTM5LTAuMDFcblx0YzAuNDA1LTAuMDU3LDkuODEzLTEuNDExLDE2LjYxOC01LjMzOUMyMS42MjEsNTQuNzEsMjUuNzM3LDU1LjUsMzAsNTUuNWMxNi41NDIsMCwzMC0xMi4xMTIsMzAtMjdTNDYuNTQyLDEuNSwzMCwxLjV6IE0xNiwzMi41XG5cdGMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFMxOC4yMDYsMzIuNSwxNiwzMi41eiBNMzAsMzIuNWMtMi4yMDYsMC00LTEuNzk0LTQtNHMxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFxuXHRTMzIuMjA2LDMyLjUsMzAsMzIuNXogTTQ0LDMyLjVjLTIuMjA2LDAtNC0xLjc5NC00LTRzMS43OTQtNCw0LTRzNCwxLjc5NCw0LDRTNDYuMjA2LDMyLjUsNDQsMzIuNXpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxuICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTUuODY3IDU1Ljg2N1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk01NS44MTgsMjEuNTc4Yy0wLjExOC0wLjM2Mi0wLjQzMS0wLjYyNi0wLjgwOC0wLjY4MUwzNi45MiwxOC4yNjhMMjguODMsMS44NzZjLTAuMTY4LTAuMzQyLTAuNTE2LTAuNTU4LTAuODk2LTAuNTU4XG5cdHMtMC43MjksMC4yMTYtMC44OTYsMC41NThsLTguMDkxLDE2LjM5M2wtMTguMDksMi42MjljLTAuMzc3LDAuMDU1LTAuNjg5LDAuMzE4LTAuODA4LDAuNjgxYy0wLjExNywwLjM2MS0wLjAyLDAuNzU5LDAuMjUzLDEuMDI0XG5cdGwxMy4wOTEsMTIuNzZsLTMuMDkxLDE4LjAxOGMtMC4wNjQsMC4zNzUsMC4wOSwwLjc1NCwwLjM5NywwLjk3OGMwLjMwOSwwLjIyNiwwLjcxOCwwLjI1NSwxLjA1MywwLjA3NmwxNi4xODItOC41MDZsMTYuMTgsOC41MDZcblx0YzAuMTQ2LDAuMDc3LDAuMzA3LDAuMTE1LDAuNDY2LDAuMTE1YzAuMjA3LDAsMC40MTMtMC4wNjQsMC41ODgtMC4xOTFjMC4zMDgtMC4yMjQsMC40NjItMC42MDMsMC4zOTctMC45NzhsLTMuMDktMTguMDE3XG5cdGwxMy4wOTEtMTIuNzYxQzU1LjgzOCwyMi4zMzYsNTUuOTM2LDIxLjkzOSw1NS44MTgsMjEuNTc4elwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgICAgPGcgLz5cbiAgICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgICAgPGcgLz5cbiAgICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgICAgPGcgLz5cbiAgICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgICAgPGcgLz5cbiAgICAgICAgICAgICAgICA8ZyAvPlxuICAgICAgICAgICAgICAgIDxnIC8+XG4gICAgICAgICAgICAgICAgPGcgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPntzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50czwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5zdG9yeS1saXN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjcwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjhyZW0gM3JlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5OmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZlZmU2O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvcnktdGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b3J5LWRldGFpbHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZjcwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGNvbG9yOiAjN2I4Nzk0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgZmlsbDogI2Y3MDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.827c1dd9621d4fc47b5a.hot-update.js.map