"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/page */ \"(app-pages-browser)/./app/pages/home/page.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Link from \"next/link\";\n// import Login from \"./pages/login/page\";\n\n\n\nfunction App() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const navigateLogin = ()=>{\n        window.location.replace(\"http://localhost:3001/login\");\n    };\n    const navigateLogout = ()=>{\n        Axios({\n            method: \"GET\",\n            withCredentials: true,\n            url: \"http://localhost:3001/logout\"\n        }).then((res)=>{\n            setUser(null);\n            console.log(res);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: user == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: navigateLogin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdLogin, {}, void 0, false, {\n                                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: navigateLogout,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Logged in as: \",\n                                    user\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdLogout, {}, void 0, false, {\n                                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col\"\n            }, void 0, false, {\n                fileName: \"/home/saptarshi/Projects/upsats/client/app/page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"Iei9RGtZU29Y1RhBe1sbfh/MntA=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsZ0NBQWdDO0FBQ2hDLDBDQUEwQztBQUNUO0FBQ0k7QUFDYztBQUdwQyxTQUFTSTs7SUFFdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1PLGdCQUFnQjtRQUNwQkMsT0FBT0MsUUFBUSxDQUFDQyxPQUFPLENBQUM7SUFDMUI7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckJDLE1BQU07WUFDSkMsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLEtBQUs7UUFDUCxHQUFHQyxJQUFJLENBQUMsQ0FBQ0M7WUFDUFgsUUFBUTtZQUNSWSxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUlBLHFCQUNFOzswQkFDRSw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNEOzhCQUNBZixRQUFRLHFCQUNULDhEQUFDZTt3QkFBS0UsU0FBU2Y7OzBDQUNiLDhEQUFDTCxtREFBT0E7Ozs7OzBDQUNSLDhEQUFDcUI7MENBQUk7Ozs7Ozs7Ozs7OzZDQUdQLDhEQUFDSDt3QkFBSUUsU0FBU1g7OzBDQUNaLDhEQUFDYTs7b0NBQUc7b0NBQWVuQjs7Ozs7OzswQ0FDbkIsOERBQUNGLG9EQUFRQTs7Ozs7MENBQ1QsOERBQUNvQjswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRVCw4REFBQ0g7Z0JBQUlDLFdBQVU7Ozs7Ozs7O0FBR3JCO0dBOUN3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgTG9naW4gZnJvbSBcIi4vcGFnZXMvbG9naW4vcGFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL2hvbWUvcGFnZVwiO1xuaW1wb3J0IHsgTWRMb2dpbiwgTWRMb2dvdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgbmF2aWdhdGVMb2dpbiA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2dpblwiKVxuICB9O1xuXG4gIGNvbnN0IG5hdmlnYXRlTG9nb3V0ID0gKCkgPT4ge1xuICAgIEF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9nb3V0XCIsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KVxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAge3VzZXIgPT0gbnVsbCA/IChcbiAgICAgICAgPGRpdiAgb25DbGljaz17bmF2aWdhdGVMb2dpbn0+XG4gICAgICAgICAgPE1kTG9naW4gLz5cbiAgICAgICAgICA8aDQgPkxvZ2luPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgb25DbGljaz17bmF2aWdhdGVMb2dvdXR9PlxuICAgICAgICAgIDxwID5Mb2dnZWQgaW4gYXM6IHt1c2VyfTwvcD5cbiAgICAgICAgICA8TWRMb2dvdXQgLz5cbiAgICAgICAgICA8aDQgPkxvZ291dDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8SG9tZSAvPiAqL31cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sXCI+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiTWRMb2dpbiIsIk1kTG9nb3V0IiwiQXBwIiwidXNlciIsInNldFVzZXIiLCJuYXZpZ2F0ZUxvZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwibmF2aWdhdGVMb2dvdXQiLCJBeGlvcyIsIm1ldGhvZCIsIndpdGhDcmVkZW50aWFscyIsInVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImg0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});