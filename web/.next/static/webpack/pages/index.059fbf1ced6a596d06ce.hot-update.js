webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/withApollo */ \"./src/utils/withApollo.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/nicholasharvey/Desktop/programming/techChased/web/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var _data$me, _data$me2, _data$me2$projects;\n\n  Object(_Users_nicholasharvey_Desktop_programming_techChased_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"])(),\n      data = _useMeQuery.data,\n      error = _useMeQuery.error,\n      loading = _useMeQuery.loading;\n\n  if (!loading && !data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"your query failed for some reason\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [error === null || error === void 0 ? void 0 : error.message, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    children: !(data !== null && data !== void 0 && (_data$me = data.me) !== null && _data$me !== void 0 && _data$me.projects) && !loading ? null : !data && loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_app__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        ml: 4,\n        mb: 10,\n        mt: -2,\n        bg: \"yellow.400\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          as: \"h3\",\n          ml: 2,\n          size: \"lg\",\n          mb: 3,\n          mt: 3,\n          children: \"Your Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n        orientation: \"horizontal\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        ml: 4,\n        templateColumns: \"25% 50% 25%\",\n        rowGap: 2,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          size: \"md\",\n          children: \"Title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          size: \"md\",\n          children: \"Description\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          size: \"md\",\n          children: \"Misc.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this), data === null || data === void 0 ? void 0 : (_data$me2 = data.me) === null || _data$me2 === void 0 ? void 0 : (_data$me2$projects = _data$me2.projects) === null || _data$me2$projects === void 0 ? void 0 : _data$me2$projects.map(function (p) {\n          return !p ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n              children: \"You have no prjects currently.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              h: \"100%\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n                orientation: \"horizontal\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                href: \"/projects/[id]\",\n                as: \"/projects/\".concat(p.id),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                    mb: 5,\n                    mt: 5,\n                    children: p.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              h: \"100%\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n                orientation: \"horizontal\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                mb: 5,\n                mt: 5,\n                children: p.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              h: \"100%\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n                orientation: \"horizontal\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n                mb: 5,\n                mt: 5,\n                children: p.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"CSoOlCipAVUQitHD8eqrjGLQ6Pg=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useMeQuery\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_8__[\"withApollo\"])({\n  ssr: true\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlTWVRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwibWUiLCJwcm9qZWN0cyIsIm1hcCIsInAiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixPQUFRO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsb0JBQ0dDLHFFQUFVLEVBRGI7QUFBQSxNQUN0QkMsSUFEc0IsZUFDdEJBLElBRHNCO0FBQUEsTUFDaEJDLEtBRGdCLGVBQ2hCQSxLQURnQjtBQUFBLE1BQ1RDLE9BRFMsZUFDVEEsT0FEUzs7QUFHOUIsTUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0YsSUFBakIsRUFBdUI7QUFDckIsd0JBQ0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxtQkFBTUMsS0FBTixhQUFNQSxLQUFOLHVCQUFNQSxLQUFLLENBQUVFLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFNRDs7QUFFRCxzQkFDRSxxRUFBQyx5REFBRDtBQUFBLGNBQ0csRUFBQ0gsSUFBRCxhQUFDQSxJQUFELDJCQUFDQSxJQUFJLENBQUVJLEVBQVAscUNBQUMsU0FBVUMsUUFBWCxLQUF1QixDQUFDSCxPQUF4QixHQUFrQyxJQUFsQyxHQUF5QyxDQUFDRixJQUFELElBQVNFLE9BQVQsZ0JBQ3hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHdDLGdCQUd4QyxxRUFBQyxrREFBRDtBQUFBLDhCQUNFLHFF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QUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQSwwQkFOcUI7QUFBQSxTQUF4QixDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQWxFRDs7R0FBTVosSztVQUM2QkMsNkQ7OztLQUQ3QkQsSztBQW9FU2EsbUlBQVUsQ0FBQztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFELENBQVYsQ0FBMEJkLEtBQTFCLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgSGVhZGluZyxcbiAgTGluayxcbiAgU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlTWVRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vdXRpbHMvd2l0aEFwb2xsb1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoe30pID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlTWVRdWVyeSgpO1xuXG4gIGlmICghbG9hZGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PnlvdXIgcXVlcnkgZmFpbGVkIGZvciBzb21lIHJlYXNvbjwvZGl2PlxuICAgICAgICA8ZGl2PntlcnJvcj8ubWVzc2FnZX0gPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFkYXRhPy5tZT8ucHJvamVjdHMgJiYgIWxvYWRpbmcgPyBudWxsIDogIWRhdGEgJiYgbG9hZGluZyA/IChcbiAgICAgICAgPGRpdj5sb2FkaW5nPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTdGFjayBtbD17NH0gbWI9ezEwfSBtdD17LTJ9IGJnPVwieWVsbG93LjQwMFwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIG1sPXsyfSBzaXplPVwibGdcIiBtYj17M30gbXQ9ezN9PlxuICAgICAgICAgICAgICBZb3VyIFByb2plY3RzXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAvPlxuICAgICAgICAgIDxHcmlkIG1sPXs0fSB0ZW1wbGF0ZUNvbHVtbnM9e1wiMjUlIDUwJSAyNSVcIn0gcm93R2FwPXsyfT5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9e1wibWRcIn0+VGl0bGU8L0hlYWRpbmc+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPXtcIm1kXCJ9PkRlc2NyaXB0aW9uPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT17XCJtZFwifT5NaXNjLjwvSGVhZGluZz5cblxuICAgICAgICAgICAge2RhdGE/Lm1lPy5wcm9qZWN0cz8ubWFwKChwKSA9PlxuICAgICAgICAgICAgICAhcCA/IChcbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmc+WW91IGhhdmUgbm8gcHJqZWN0cyBjdXJyZW50bHkuPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8Qm94IGg9e1wiMTAwJVwifT5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcHJvamVjdHMvW2lkXVwiIGFzPXtgL3Byb2plY3RzLyR7cC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtYj17NX0gbXQ9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8Qm94IGg9e1wiMTAwJVwifT5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1iPXs1fSBtdD17NX0+XG4gICAgICAgICAgICAgICAgICAgICAge3AuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCb3ggaD17XCIxMDAlXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWI9ezV9IG10PXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICB7cC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})