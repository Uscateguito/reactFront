"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pagination)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    // NOTE: Uncomment this code in Chapter 11\n    // const allPages = generatePagination(currentPage, totalPages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"left\",\n                    href: createPageURL(currentPage - 1),\n                    isDisabled: currentPage <= 1\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex -space-x-px\",\n                    children: allPages.map((page, index)=>{\n                        let position;\n                        if (index === 0) position = 'first';\n                        if (index === allPages.length - 1) position = 'last';\n                        if (allPages.length === 1) position = 'single';\n                        if (page === '...') position = 'middle';\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationNumber, {\n                            href: createPageURL(page),\n                            page: page,\n                            position: position,\n                            isActive: currentPage === page\n                        }, page, false, {\n                            fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"right\",\n                    href: createPageURL(currentPage + 1),\n                    isDisabled: currentPage >= totalPages\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('flex h-10 w-10 items-center justify-center text-sm border', {\n        'rounded-l-md': position === 'first' || position === 'single',\n        'rounded-r-md': position === 'last' || position === 'single',\n        'z-10 bg-blue-600 border-blue-600 text-white': isActive,\n        'hover:bg-gray-100': !isActive && position !== 'middle',\n        'text-gray-300': position === 'middle'\n    });\n    return isActive || position === 'middle' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('flex h-10 w-10 items-center justify-center rounded-md border', {\n        'pointer-events-none text-gray-300': isDisabled,\n        'hover:bg-gray-100': !isDisabled,\n        'mr-2 md:mr-4': direction === 'left',\n        'ml-2 md:ml-4': direction === 'right'\n    });\n    const icon = direction === 'left' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 107,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 109,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTRFO0FBQ3BEO0FBQ0s7QUFHZCxTQUFTSSxXQUFXLEtBQXNDO1FBQXRDLEVBQUVDLFVBQVUsRUFBMEIsR0FBdEM7SUFDakMsMENBQTBDO0lBRTFDLGdFQUFnRTtJQUVoRSxxQkFDRTtrQkFHRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUNDQyxXQUFVO29CQUNWQyxNQUFNQyxjQUFjQyxjQUFjO29CQUNsQ0MsWUFBWUQsZUFBZTs7Ozs7OzhCQUc3Qiw4REFBQ047b0JBQUlDLFdBQVU7OEJBQ1pPLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzt3QkFDbkIsSUFBSUM7d0JBRUosSUFBSUQsVUFBVSxHQUFHQyxXQUFXO3dCQUM1QixJQUFJRCxVQUFVSCxTQUFTSyxNQUFNLEdBQUcsR0FBR0QsV0FBVzt3QkFDOUMsSUFBSUosU0FBU0ssTUFBTSxLQUFLLEdBQUdELFdBQVc7d0JBQ3RDLElBQUlGLFNBQVMsT0FBT0UsV0FBVzt3QkFFL0IscUJBQ0UsOERBQUNFOzRCQUVDVixNQUFNQyxjQUFjSzs0QkFDcEJBLE1BQU1BOzRCQUNORSxVQUFVQTs0QkFDVkcsVUFBVVQsZ0JBQWdCSTsyQkFKckJBOzs7OztvQkFPWDs7Ozs7OzhCQUdGLDhEQUFDUjtvQkFDQ0MsV0FBVTtvQkFDVkMsTUFBTUMsY0FBY0MsY0FBYztvQkFDbENDLFlBQVlELGVBQWVQOzs7Ozs7Ozs7Ozs7O0FBS3JDO0tBN0N3QkQ7QUErQ3hCLFNBQVNnQixpQkFBaUIsS0FVekI7UUFWeUIsRUFDeEJKLElBQUksRUFDSk4sSUFBSSxFQUNKVyxRQUFRLEVBQ1JILFFBQVEsRUFNVCxHQVZ5QjtJQVd4QixNQUFNWCxZQUFZTCxnREFBSUEsQ0FDcEIsNkRBQ0E7UUFDRSxnQkFBZ0JnQixhQUFhLFdBQVdBLGFBQWE7UUFDckQsZ0JBQWdCQSxhQUFhLFVBQVVBLGFBQWE7UUFDcEQsK0NBQStDRztRQUMvQyxxQkFBcUIsQ0FBQ0EsWUFBWUgsYUFBYTtRQUMvQyxpQkFBaUJBLGFBQWE7SUFDaEM7SUFHRixPQUFPRyxZQUFZSCxhQUFhLHlCQUM5Qiw4REFBQ1o7UUFBSUMsV0FBV0E7a0JBQVlTOzs7Ozs2QkFFNUIsOERBQUNiLGlEQUFJQTtRQUFDTyxNQUFNQTtRQUFNSCxXQUFXQTtrQkFDMUJTOzs7Ozs7QUFHUDtNQTdCU0k7QUErQlQsU0FBU1osZ0JBQWdCLEtBUXhCO1FBUndCLEVBQ3ZCRSxJQUFJLEVBQ0pELFNBQVMsRUFDVEksVUFBVSxFQUtYLEdBUndCO0lBU3ZCLE1BQU1OLFlBQVlMLGdEQUFJQSxDQUNwQixnRUFDQTtRQUNFLHFDQUFxQ1c7UUFDckMscUJBQXFCLENBQUNBO1FBQ3RCLGdCQUFnQkosY0FBYztRQUM5QixnQkFBZ0JBLGNBQWM7SUFDaEM7SUFHRixNQUFNYSxPQUNKYixjQUFjLHVCQUNaLDhEQUFDVCxzSEFBYUE7UUFBQ08sV0FBVTs7Ozs7NkJBRXpCLDhEQUFDTixzSEFBY0E7UUFBQ00sV0FBVTs7Ozs7O0lBRzlCLE9BQU9NLDJCQUNMLDhEQUFDUDtRQUFJQyxXQUFXQTtrQkFBWWU7Ozs7OzZCQUU1Qiw4REFBQ25CLGlEQUFJQTtRQUFDSSxXQUFXQTtRQUFXRyxNQUFNQTtrQkFDL0JZOzs7Ozs7QUFHUDtNQWpDU2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL3BhZ2luYXRpb24udHN4PzgwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiwgQXJyb3dSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVQYWdpbmF0aW9uIH0gZnJvbSAnQC9hcHAvbGliL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyB0b3RhbFBhZ2VzIH06IHsgdG90YWxQYWdlczogbnVtYmVyIH0pIHtcclxuICAvLyBOT1RFOiBVbmNvbW1lbnQgdGhpcyBjb2RlIGluIENoYXB0ZXIgMTFcclxuXHJcbiAgLy8gY29uc3QgYWxsUGFnZXMgPSBnZW5lcmF0ZVBhZ2luYXRpb24oY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qICBOT1RFOiBVbmNvbW1lbnQgdGhpcyBjb2RlIGluIENoYXB0ZXIgMTEgKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgPFBhZ2luYXRpb25BcnJvd1xyXG4gICAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKGN1cnJlbnRQYWdlIC0gMSl9XHJcbiAgICAgICAgICBpc0Rpc2FibGVkPXtjdXJyZW50UGFnZSA8PSAxfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtc3BhY2UteC1weFwiPlxyXG4gICAgICAgICAge2FsbFBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uOiAnZmlyc3QnIHwgJ2xhc3QnIHwgJ3NpbmdsZScgfCAnbWlkZGxlJyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcG9zaXRpb24gPSAnZmlyc3QnO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGFsbFBhZ2VzLmxlbmd0aCAtIDEpIHBvc2l0aW9uID0gJ2xhc3QnO1xyXG4gICAgICAgICAgICBpZiAoYWxsUGFnZXMubGVuZ3RoID09PSAxKSBwb3NpdGlvbiA9ICdzaW5nbGUnO1xyXG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gJy4uLicpIHBvc2l0aW9uID0gJ21pZGRsZSc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKHBhZ2UpfVxyXG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyZW50UGFnZSA9PT0gcGFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dcclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwoY3VycmVudFBhZ2UgKyAxKX1cclxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2N1cnJlbnRQYWdlID49IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uTnVtYmVyKHtcclxuICBwYWdlLFxyXG4gIGhyZWYsXHJcbiAgaXNBY3RpdmUsXHJcbiAgcG9zaXRpb24sXHJcbn06IHtcclxuICBwYWdlOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHBvc2l0aW9uPzogJ2ZpcnN0JyB8ICdsYXN0JyB8ICdtaWRkbGUnIHwgJ3NpbmdsZSc7XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbn0pIHtcclxuICBjb25zdCBjbGFzc05hbWUgPSBjbHN4KFxyXG4gICAgJ2ZsZXggaC0xMCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIGJvcmRlcicsXHJcbiAgICB7XHJcbiAgICAgICdyb3VuZGVkLWwtbWQnOiBwb3NpdGlvbiA9PT0gJ2ZpcnN0JyB8fCBwb3NpdGlvbiA9PT0gJ3NpbmdsZScsXHJcbiAgICAgICdyb3VuZGVkLXItbWQnOiBwb3NpdGlvbiA9PT0gJ2xhc3QnIHx8IHBvc2l0aW9uID09PSAnc2luZ2xlJyxcclxuICAgICAgJ3otMTAgYmctYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwIHRleHQtd2hpdGUnOiBpc0FjdGl2ZSxcclxuICAgICAgJ2hvdmVyOmJnLWdyYXktMTAwJzogIWlzQWN0aXZlICYmIHBvc2l0aW9uICE9PSAnbWlkZGxlJyxcclxuICAgICAgJ3RleHQtZ3JheS0zMDAnOiBwb3NpdGlvbiA9PT0gJ21pZGRsZScsXHJcbiAgICB9LFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBpc0FjdGl2ZSB8fCBwb3NpdGlvbiA9PT0gJ21pZGRsZScgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cGFnZX08L2Rpdj5cclxuICApIDogKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICB7cGFnZX1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uQXJyb3coe1xyXG4gIGhyZWYsXHJcbiAgZGlyZWN0aW9uLFxyXG4gIGlzRGlzYWJsZWQsXHJcbn06IHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG59KSB7XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcclxuICAgICdmbGV4IGgtMTAgdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXInLFxyXG4gICAge1xyXG4gICAgICAncG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWdyYXktMzAwJzogaXNEaXNhYmxlZCxcclxuICAgICAgJ2hvdmVyOmJnLWdyYXktMTAwJzogIWlzRGlzYWJsZWQsXHJcbiAgICAgICdtci0yIG1kOm1yLTQnOiBkaXJlY3Rpb24gPT09ICdsZWZ0JyxcclxuICAgICAgJ21sLTIgbWQ6bWwtNCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyxcclxuICAgIH0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaWNvbiA9XHJcbiAgICBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IChcclxuICAgICAgPEFycm93TGVmdEljb24gY2xhc3NOYW1lPVwidy00XCIgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxBcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJ3LTRcIiAvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIGlzRGlzYWJsZWQgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aWNvbn08L2Rpdj5cclxuICApIDogKFxyXG4gICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9PlxyXG4gICAgICB7aWNvbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBcnJvd0xlZnRJY29uIiwiQXJyb3dSaWdodEljb24iLCJjbHN4IiwiTGluayIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiUGFnaW5hdGlvbkFycm93IiwiZGlyZWN0aW9uIiwiaHJlZiIsImNyZWF0ZVBhZ2VVUkwiLCJjdXJyZW50UGFnZSIsImlzRGlzYWJsZWQiLCJhbGxQYWdlcyIsIm1hcCIsInBhZ2UiLCJpbmRleCIsInBvc2l0aW9uIiwibGVuZ3RoIiwiUGFnaW5hdGlvbk51bWJlciIsImlzQWN0aXZlIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});