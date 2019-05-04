webpackHotUpdate("static/development/pages/story.js",{

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CommentList */ "./components/CommentList.js");







var _jsxFileName = "/Users/matthew/Documents/All-Projects/HckrNews/pages/story.js";







var Story =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Story, _React$Component);

  function Story() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Story);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Story).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Story, [{
    key: "render",
    value: function render() {
      var story = this.props.story;

      if (!story) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: story.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-3604105120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3604105120" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-3604105120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3604105120" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-3604105120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, story.points, " points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-3604105120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, story.comments_count, " comments"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-3604105120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, story.time_ago)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CommentList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        comments: story.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3604105120",
        __self: this
      }, "main.jsx-3604105120{padding:1em;}.story-title.jsx-3604105120{font-size:1rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-3604105120 a.jsx-3604105120{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-3604105120 a.jsx-3604105120:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-3604105120{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.15);margin-bottom:1em;}.story-details.jsx-3604105120 strong.jsx-3604105120{margin-right:1em;}.story-details.jsx-3604105120 a.jsx-3604105120{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvcGFnZXMvc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUd5QixBQUlHLEFBT0osQUFLZSxBQUlULEFBT0EsQUFJTixXQW5CVSxBQW9CdkIsQ0EvQkEsR0FJVyxFQWdCVSxBQU9yQixPQXRCa0IsWUFnQjRCLElBZnZCLG9CQVV2QixDQVRBLEFBS0EsZ0JBVW9CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy9Eb2N1bWVudHMvQWxsLVByb2plY3RzL0hja3JOZXdzL3BhZ2VzL3N0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tZW50TGlzdCc7XG5cbmNsYXNzIFN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7XG4gICAgY29uc3QgeyBpZDogc3RvcnlJZCB9ID0gcXVlcnk7XG4gICAgbGV0IHN0b3J5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke3N0b3J5SWR9YFxuICAgICAgKTtcbiAgICAgIHN0b3J5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBzdG9yeSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc3RvcnkpO1xuXG4gICAgcmV0dXJuIHsgc3RvcnkgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghc3RvcnkpIHtcbiAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGU9e3N0b3J5LnRpdGxlfT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LnBvaW50c30gcG9pbnRzPC9zdHJvbmc+XG4gICAgICAgICAgICA8c3Ryb25nPntzdG9yeS5jb21tZW50c19jb3VudH0gY29tbWVudHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LnRpbWVfYWdvfTwvc3Ryb25nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb21tZW50TGlzdCBjb21tZW50cz17c3RvcnkuY29tbWVudHN9IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHN0cm9uZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/pages/story.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, storyId, story, _res;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                storyId = query.id;
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 5:
                _res = _context.sent;
                _context.next = 8;
                return _res.json();

              case 8:
                story = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                story = null;

              case 15:
                console.log(story);
                return _context.abrupt("return", {
                  story: story
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ })

})
//# sourceMappingURL=story.js.441dcecd252c7511e938.hot-update.js.map