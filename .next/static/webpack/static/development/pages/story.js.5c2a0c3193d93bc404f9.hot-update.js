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
        className: "jsx-2629745646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2629745646" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-2629745646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2629745646" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2629745646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, story.points, " points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2629745646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, story.comments_count, " comments"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2629745646",
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
        id: "2629745646",
        __self: this
      }, "main.jsx-2629745646{padding:1em;}.story-title.jsx-2629745646{font-size:1.2em;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-2629745646 a.jsx-2629745646{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2629745646 a.jsx-2629745646:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-2629745646{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.15);margin-bottom:1em;}.story-details.jsx-2629745646 strong.jsx-2629745646{margin-right:1em;}.story-details.jsx-2629745646 a.jsx-2629745646{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvcGFnZXMvc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUd5QixBQUlJLEFBT0wsQUFLZSxBQUlULEFBT0EsQUFJTixXQW5CVSxBQW9CdkIsQ0EvQkEsSUFJVyxDQWdCVSxBQU9yQixRQXRCa0IsV0FnQjRCLEtBZnZCLG1CQVV2QixDQUpBLENBTEEsZUFlb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvcGFnZXMvc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0JztcblxuY2xhc3MgU3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCB7IGlkOiBzdG9yeUlkIH0gPSBxdWVyeTtcbiAgICBsZXQgc3Rvcnk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gXG4gICAgICApO1xuICAgICAgc3RvcnkgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHN0b3J5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhzdG9yeSk7XG5cbiAgICByZXR1cm4geyBzdG9yeSB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFzdG9yeSkge1xuICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT17c3RvcnkudGl0bGV9PlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxuICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkucG9pbnRzfSBwb2ludHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LmNvbW1lbnRzX2NvdW50fSBjb21tZW50czwvc3Ryb25nPlxuICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkudGltZV9hZ299PC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENvbW1lbnRMaXN0IGNvbW1lbnRzPXtzdG9yeS5jb21tZW50c30gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0b3J5LXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHN0cm9uZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RvcnktZGV0YWlscyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/pages/story.js */"));
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
//# sourceMappingURL=story.js.5c2a0c3193d93bc404f9.hot-update.js.map