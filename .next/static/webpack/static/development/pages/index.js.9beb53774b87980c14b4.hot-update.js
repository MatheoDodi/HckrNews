webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      backButton = _ref.backButton;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3101545317"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-3101545317"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3101545317"
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3101545317" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3101545317"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3101545317"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3101545317" + " " + "main-title"
  }, "Hckr News"))), backButton && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    },
    className: "jsx-3101545317" + " " + "back-button"
  }, "Go Back")), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2577155279"
  }, ".container.jsx-3101545317{border-radius:7px 7px 0 0;max-width:60%;margin:2rem auto;background:#fff;box-shadow:0 5px 15px 3px rgba(0,0,0,0.25);}nav.jsx-3101545317{border-radius:7px 7px 0 0;background:white;padding:3rem;font-size:2rem;border-bottom:5px #f60 solid;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-3101545317>*.jsx-3101545317{display:inline-block;color:white;}nav.jsx-3101545317 a.jsx-3101545317{-webkit-text-decoration:none;text-decoration:none;}nav.jsx-3101545317 .main-title.jsx-3101545317{font-weight:bold;color:#f60;}nav.jsx-3101545317 .main-title.jsx-3101545317:hover{color:#ff8800;}.back-button.jsx-3101545317{margin-left:auto;background:#f60;padding:0.5rem 1rem;border:none;border-radius:3px;font-size:1rem;box-shadow:0 0 10px 2px rgba(255,119,0,0);-webkit-transition:all 0.3s;transition:all 0.3s;}.back-button.jsx-3101545317:hover{box-shadow:0 0 10px rgba(255,119,0,0.75);cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQixBQUdtQyxBQVFBLEFBVUwsQUFLQSxBQUlKLEFBS0gsQUFJRyxBQVcyQixjQWQ5QyxHQUxhLEFBU0ssSUFsQkosS0FsQkUsQUFRRyxFQW9CbkIsS0FUQSxBQWtCc0IsT0FwQ0gsQ0E4Q0YsRUF0Q0YsT0FjZixHQWVjLEdBNUJHLEFBc0NqQixDQTlDa0IsUUFxQ0UsTUE1QlcsRUFSaUIsVUFxQy9CLGVBQzhCLEVBN0IzQixnQkFScEIsRUFTZSxzQkE2Qk8sZ0RBQ3RCLElBN0JBIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBiYWNrQnV0dG9uIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5IY2tyIE5ld3M8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtiYWNrQnV0dG9uICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uXCIgb25DbGljaz17KCkgPT4gUm91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L25hdj5cblxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICB9XG5cbiAgICAgIG5hdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggI2Y2MCBzb2xpZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBuYXYgPiAqIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIG5hdiBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBuYXYgLm1haW4tdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmNjA7XG4gICAgICB9XG5cbiAgICAgIG5hdiAubWFpbi10aXRsZTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmY4ODAwO1xuICAgICAgfVxuXG4gICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2MDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDI1NSwgMTE5LCAwLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAxMTksIDAsIDAuNzUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmNjYwMCwgI2ZmNDQwMCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3623937187"
  }, "body{background:linear-gradient(to bottom,#ff6600,#ff4400);font-family:Verdana,Geneva,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Z1QixBQUdpRSxzREFDaEIsc0NBQzFDIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvSGNrck5ld3MvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBiYWNrQnV0dG9uIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5IY2tyIE5ld3M8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtiYWNrQnV0dG9uICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uXCIgb25DbGljaz17KCkgPT4gUm91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L25hdj5cblxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICB9XG5cbiAgICAgIG5hdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggI2Y2MCBzb2xpZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBuYXYgPiAqIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIG5hdiBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBuYXYgLm1haW4tdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmNjA7XG4gICAgICB9XG5cbiAgICAgIG5hdiAubWFpbi10aXRsZTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmY4ODAwO1xuICAgICAgfVxuXG4gICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2MDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDI1NSwgMTE5LCAwLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAxMTksIDAsIDAuNzUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmNjYwMCwgI2ZmNDQwMCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/HckrNews/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.9beb53774b87980c14b4.hot-update.js.map