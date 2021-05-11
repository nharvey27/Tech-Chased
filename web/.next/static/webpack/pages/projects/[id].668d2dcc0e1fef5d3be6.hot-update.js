webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ \"./src/utils/capitalize.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nicholasharvey/Desktop/programming/techChased/web/src/components/Navbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_ref);\n\n  var apolloClient = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__[\"useApolloClient\"])();\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useMeQuery\"])(),\n      data = _useMeQuery.data;\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useLogoutMutation, 2),\n      logout = _useLogoutMutation2[0],\n      logoutFetching = _useLogoutMutation2[1].loading; // const [iOpen, updateIsOpen] = useState(false);\n\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var body;\n  var sidebar;\n\n  if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this);\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], {\n        align: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n          mr: 2,\n          children: Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(data.me.username)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/create-project\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n            children: \"Create Project\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          colorScheme: \"\",\n          onClick: onOpen,\n          children: \"Profile\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          onClick: /*#__PURE__*/Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n            return _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n              while (1) {\n                switch (_context.prev = _context.next) {\n                  case 0:\n                    _context.next = 2;\n                    return logout();\n\n                  case 2:\n                    _context.next = 4;\n                    return apolloClient.resetStore();\n\n                  case 4:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }\n            }, _callee);\n          })),\n          isLoading: logoutFetching,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n    sidebar = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_9__[\"Sidebar\"], {\n        me: data.me,\n        isOpen: isOpen,\n        onOpen: onOpen,\n        onClose: onClose\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [sidebar, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], {\n      boxShadow: \"sm\",\n      bgColor: \"#86a5a9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n        mr: 2,\n        mt: 2,\n        ml: 8,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Heading\"], {\n          as: \"h2\",\n          size: \"md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/\",\n            as: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n              bg: \"none\",\n              children: \" Tech Chased\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), body]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavBar, \"b8qopj9dW86BstmidW/WAly4nnc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_11__[\"useApolloClient\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useMeQuery\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useLogoutMutation\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"useDisclosure\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD84MDVmIl0sIm5hbWVzIjpbIk5hdkJhciIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsb0NsaWVudCIsInVzZU1lUXVlcnkiLCJkYXRhIiwidXNlTG9nb3V0TXV0YXRpb24iLCJsb2dvdXQiLCJsb2dvdXRGZXRjaGluZyIsImxvYWRpbmciLCJ1c2VEaXNjbG9zdXJlIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImJvZHkiLCJzaWRlYmFyIiwibWUiLCJMaW5rIiwiY2FwaXRhbGl6ZSIsInVzZXJuYW1lIiwicmVzZXRTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQVE7QUFBQTs7QUFBQTs7QUFDbkQsTUFBTUMsWUFBWSxHQUFHQyx1RUFBZSxFQUFwQzs7QUFEbUQsb0JBR2xDQyxxRUFBVSxFQUh3QjtBQUFBLE1BRzNDQyxJQUgyQyxlQUczQ0EsSUFIMkM7O0FBQUEsMkJBSUxDLDRFQUFpQixFQUpaO0FBQUE7QUFBQSxNQUk1Q0MsTUFKNEM7QUFBQSxNQUl6QkMsY0FKeUIsMEJBSWxDQyxPQUprQyxFQUtuRDs7O0FBTG1ELHVCQU1mQyxzRUFBYSxFQU5FO0FBQUEsTUFNM0NDLE1BTjJDLGtCQU0zQ0EsTUFOMkM7QUFBQSxNQU1uQ0MsTUFObUMsa0JBTW5DQSxNQU5tQztBQUFBLE1BTTNCQyxPQU4yQixrQkFNM0JBLE9BTjJCOztBQVFuRCxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBSjs7QUFFQSxNQUFJLEVBQUNWLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVXLEVBQVAsQ0FBSixFQUFlO0FBQ2JGLFFBQUksZ0JBQ0YscUVBQUMsb0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFVLFlB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IjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIERyYXdlcixcbiAgRHJhd2VyQm9keSxcbiAgRHJhd2VyQ29udGVudCxcbiAgRHJhd2VySGVhZGVyLFxuICBEcmF3ZXJPdmVybGF5LFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBMaW5rLFxuICBTcGFjZXIsXG4gIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VMb2dvdXRNdXRhdGlvbiwgdXNlTWVRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL1NpZGViYXJcIjtcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gXCIuLi91dGlscy9jYXBpdGFsaXplXCI7XG5pbXBvcnQgeyB1c2VBcG9sbG9DbGllbnQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW50ZXJmYWNlIE5hdmJhclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdmJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG9DbGllbnQoKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHVzZU1lUXVlcnkoKTtcbiAgY29uc3QgW2xvZ291dCwgeyBsb2FkaW5nOiBsb2dvdXRGZXRjaGluZyB9XSA9IHVzZUxvZ291dE11dGF0aW9uKCk7XG4gIC8vIGNvbnN0IFtpT3BlbiwgdXBkYXRlSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIGxldCBib2R5O1xuICBsZXQgc2lkZWJhcjtcblxuICBpZiAoIWRhdGE/Lm1lKSB7XG4gICAgYm9keSA9IChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcz17TGlua30+TG9naW48L0J1dHRvbj5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGFzPXtMaW5rfT5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ID0gKFxuICAgICAgPD5cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Qm94IG1yPXsyfT57Y2FwaXRhbGl6ZShkYXRhLm1lLnVzZXJuYW1lKX08L0JveD5cbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9jcmVhdGUtcHJvamVjdFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBhcz17TGlua30+Q3JlYXRlIFByb2plY3Q8L0J1dHRvbj5cbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJcIiBvbkNsaWNrPXtvbk9wZW59PlxuICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgbG9nb3V0KCk7XG4gICAgICAgICAgICAgIGF3YWl0IGFwb2xsb0NsaWVudC5yZXNldFN0b3JlKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2dvdXRGZXRjaGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC8+XG4gICAgKTtcbiAgICBzaWRlYmFyID0gKFxuICAgICAgPD5cbiAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICBtZT17ZGF0YS5tZX1cbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICBvbk9wZW49e29uT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaWRlYmFyfVxuICAgICAgPEZsZXggYm94U2hhZG93PVwic21cIiBiZ0NvbG9yPVwiIzg2YTVhOVwiPlxuICAgICAgICA8Qm94IG1yPXsyfSBtdD17Mn0gbWw9ezh9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgICA8TGluayBiZz1cIm5vbmVcIj4gVGVjaCBDaGFzZWQ8L0xpbms+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAge2JvZHl9XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ })

})