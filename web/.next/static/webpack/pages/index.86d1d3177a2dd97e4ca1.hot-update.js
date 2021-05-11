webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ \"./src/utils/capitalize.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nicholasharvey/Desktop/programming/techChased/web/src/components/Navbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_ref);\n\n  var apolloClient = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__[\"useApolloClient\"])();\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useMeQuery\"])(),\n      data = _useMeQuery.data;\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useLogoutMutation, 2),\n      logout = _useLogoutMutation2[0],\n      logoutFetching = _useLogoutMutation2[1].loading; // const [iOpen, updateIsOpen] = useState(false);\n\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var body;\n  var sidebar;\n\n  if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this);\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], {\n        align: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n          mr: 2,\n          children: Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(data.me.username)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/create-project\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n            m: 2,\n            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n            children: \"Create Project\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n          mr: 2,\n          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"],\n          colorScheme: \"\",\n          onClick: onOpen,\n          children: \"Profile\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          onClick: /*#__PURE__*/Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n            return _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n              while (1) {\n                switch (_context.prev = _context.next) {\n                  case 0:\n                    _context.next = 2;\n                    return logout();\n\n                  case 2:\n                    _context.next = 4;\n                    return apolloClient.resetStore();\n\n                  case 4:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }\n            }, _callee);\n          })),\n          isLoading: logoutFetching,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n    sidebar = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_9__[\"Sidebar\"], {\n        me: data.me,\n        isOpen: isOpen,\n        onOpen: onOpen,\n        onClose: onClose\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [sidebar, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], {\n      boxShadow: \"sm\",\n      bgColor: \"#86a5a9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n        mr: 2,\n        mt: 2,\n        ml: 8,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Heading\"], {\n          as: \"h2\",\n          size: \"md\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/\",\n            as: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n              bg: \"none\",\n              children: \" Tech Chased\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), body]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavBar, \"b8qopj9dW86BstmidW/WAly4nnc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_11__[\"useApolloClient\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useMeQuery\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_8__[\"useLogoutMutation\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"useDisclosure\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD84MDVmIl0sIm5hbWVzIjpbIk5hdkJhciIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsb0NsaWVudCIsInVzZU1lUXVlcnkiLCJkYXRhIiwidXNlTG9nb3V0TXV0YXRpb24iLCJsb2dvdXQiLCJsb2dvdXRGZXRjaGluZyIsImxvYWRpbmciLCJ1c2VEaXNjbG9zdXJlIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImJvZHkiLCJzaWRlYmFyIiwibWUiLCJMaW5rIiwiY2FwaXRhbGl6ZSIsInVzZXJuYW1lIiwicmVzZXRTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQVE7QUFBQTs7QUFBQTs7QUFDbkQsTUFBTUMsWUFBWSxHQUFHQyx1RUFBZSxFQUFwQzs7QUFEbUQsb0JBR2xDQyxxRUFBVSxFQUh3QjtBQUFBLE1BRzNDQyxJQUgyQyxlQUczQ0EsSUFIMkM7O0FBQUEsMkJBSUxDLDRFQUFpQixFQUpaO0FBQUE7QUFBQSxNQUk1Q0MsTUFKNEM7QUFBQSxNQUl6QkMsY0FKeUIsMEJBSWxDQyxPQUprQyxFQUtuRDs7O0FBTG1ELHVCQU1mQyxzRUFBYSxFQU5FO0FBQUEsTUFNM0NDLE1BTjJDLGtCQU0zQ0EsTUFOMkM7QUFBQSxNQU1uQ0MsTUFObUMsa0JBTW5DQSxNQU5tQztBQUFBLE1BTTNCQyxPQU4yQixrQkFNM0JBLE9BTjJCOztBQVFuRCxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBSjs7QUFFQSxNQUFJLEVBQUNWLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVXLEVBQVAsQ0FBSixFQUFlO0FBQ2JGLFFBQUksZ0JBQ0YscUVBQUMsb0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFVLFlB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TTs7R0FBTWIsTTtVQUNVRSwrRCxFQUVKQyw2RCxFQUM2QkUsb0UsRUFFVkksOEQ7OztLQU56QlQsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRHJhd2VyLFxuICBEcmF3ZXJCb2R5LFxuICBEcmF3ZXJDb250ZW50LFxuICBEcmF3ZXJIZWFkZXIsXG4gIERyYXdlck92ZXJsYXksXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIExpbmssXG4gIFNwYWNlcixcbiAgVGV4dCxcbiAgdXNlRGlzY2xvc3VyZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUxvZ291dE11dGF0aW9uLCB1c2VNZVF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhclwiO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSBcIi4uL3V0aWxzL2NhcGl0YWxpemVcIjtcbmltcG9ydCB7IHVzZUFwb2xsb0NsaWVudCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbnRlcmZhY2UgTmF2YmFyUHJvcHMge31cblxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2YmFyUHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudCgpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlTWVRdWVyeSgpO1xuICBjb25zdCBbbG9nb3V0LCB7IGxvYWRpbmc6IGxvZ291dEZldGNoaW5nIH1dID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcbiAgLy8gY29uc3QgW2lPcGVuLCB1cGRhdGVJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG5cbiAgbGV0IGJvZHk7XG4gIGxldCBzaWRlYmFyO1xuXG4gIGlmICghZGF0YT8ubWUpIHtcbiAgICBib2R5ID0gKFxuICAgICAgPEJveD5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICA8QnV0dG9uIGFzPXtMaW5rfT5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxCdXR0b24gYXM9e0xpbmt9PlJlZ2lzdGVyPC9CdXR0b24+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgPSAoXG4gICAgICA8PlxuICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxCb3ggbXI9ezJ9PntjYXBpdGFsaXplKGRhdGEubWUudXNlcm5hbWUpfTwvQm94PlxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2NyZWF0ZS1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8VGV4dCBtPXsyfSBhcz17TGlua30+XG4gICAgICAgICAgICAgIENyZWF0ZSBQcm9qZWN0XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICA8VGV4dCBtcj17Mn0gYXM9e0xpbmt9IGNvbG9yU2NoZW1lPVwiXCIgb25DbGljaz17b25PcGVufT5cbiAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBhd2FpdCBsb2dvdXQoKTtcbiAgICAgICAgICAgICAgYXdhaXQgYXBvbGxvQ2xpZW50LnJlc2V0U3RvcmUoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2xvZ291dEZldGNoaW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8Lz5cbiAgICApO1xuICAgIHNpZGViYXIgPSAoXG4gICAgICA8PlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG1lPXtkYXRhLm1lfVxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgIG9uT3Blbj17b25PcGVufVxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NpZGViYXJ9XG4gICAgICA8RmxleCBib3hTaGFkb3c9XCJzbVwiIGJnQ29sb3I9XCIjODZhNWE5XCI+XG4gICAgICAgIDxCb3ggbXI9ezJ9IG10PXsyfSBtbD17OH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGJnPVwibm9uZVwiPiBUZWNoIENoYXNlZDwvTGluaz5cbiAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICB7Ym9keX1cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ })

})