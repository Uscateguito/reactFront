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

/***/ "(app-pages-browser)/./app/ui/search.tsx":
/*!***************************!*\
  !*** ./app/ui/search.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-debounce */ \"(app-pages-browser)/./node_modules/.pnpm/use-debounce@10.0.1_react@19.0.0-rc-f38c22b244-20240704/node_modules/use-debounce/dist/index.module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Search() {\n    var _searchParams_get;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const { replace } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSearch = (0,use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebouncedCallback)((term)=>{\n        console.log(\"Searching... \".concat(term));\n        const params = new URLSearchParams(searchParams);\n        params.set('page', '1');\n        if (term) {\n            params.set('query', term);\n        } else {\n            params.delete('query');\n        }\n        replace(\"\".concat(pathname, \"?\").concat(params.toString()));\n    }, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-1 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search\",\n                className: \"sr-only\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\search.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                placeholder: 'Search',\n                onChange: (e)=>{\n                    handleSearch(e.target.value);\n                },\n                defaultValue: (_searchParams_get = searchParams.get('query')) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toString()\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\search.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\search.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\Front_final\\\\reactFront\\\\app\\\\ui\\\\search.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"vCAeG7Dxg1cijEEWRCJvC0O/qwo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebouncedCallback\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFa0U7QUFDUTtBQUN0QjtBQUVyQyxTQUFTSztRQWdDRkM7O0lBOUJwQixNQUFNQSxlQUFlSixnRUFBZUE7SUFDcEMsTUFBTUssV0FBV04sNERBQVdBO0lBQzVCLE1BQU0sRUFBRU8sT0FBTyxFQUFFLEdBQUdMLDBEQUFTQTtJQUU3QixNQUFNTSxlQUFlTCxrRUFBb0JBLENBQUMsQ0FBQ007UUFDekNDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBcUIsT0FBTEY7UUFFNUIsTUFBTUcsU0FBUyxJQUFJQyxnQkFBZ0JSO1FBQ25DTyxPQUFPRSxHQUFHLENBQUMsUUFBUTtRQUNuQixJQUFJTCxNQUFNO1lBQ1JHLE9BQU9FLEdBQUcsQ0FBQyxTQUFTTDtRQUN0QixPQUFPO1lBQ0xHLE9BQU9HLE1BQU0sQ0FBQztRQUNoQjtRQUNBUixRQUFRLEdBQWVLLE9BQVpOLFVBQVMsS0FBcUIsT0FBbEJNLE9BQU9JLFFBQVE7SUFDeEMsR0FBRztJQUlILHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1DLFNBQVE7Z0JBQVNGLFdBQVU7MEJBQVU7Ozs7OzswQkFHNUMsOERBQUNHO2dCQUNDSCxXQUFVO2dCQUNWSSxhQUFhO2dCQUNiQyxVQUFVLENBQUNDO29CQUNUaEIsYUFBYWdCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFDN0I7Z0JBQ0FDLFlBQVksR0FBRXRCLG9CQUFBQSxhQUFhdUIsR0FBRyxDQUFDLHNCQUFqQnZCLHdDQUFBQSxrQkFBMkJXLFFBQVE7Ozs7OzswQkFFbkQsOERBQUNqQiw2R0FBbUJBO2dCQUFDbUIsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JDO0dBckN3QmQ7O1FBRURILDREQUFlQTtRQUNuQkQsd0RBQVdBO1FBQ1JFLHNEQUFTQTtRQUVSQyw4REFBb0JBOzs7S0FObkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9zZWFyY2gudHN4PzFhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG4gXHJcbmltcG9ydCB7IE1hZ25pZnlpbmdHbGFzc0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gJ3VzZS1kZWJvdW5jZSc7XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIFxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCB7IHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IHVzZURlYm91bmNlZENhbGxiYWNrKCh0ZXJtKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2VhcmNoaW5nLi4uICR7dGVybX1gKTtcclxuICAgXHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XHJcbiAgICBwYXJhbXMuc2V0KCdwYWdlJywgJzEnKVxyXG4gICAgaWYgKHRlcm0pIHtcclxuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCB0ZXJtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmFtcy5kZWxldGUoJ3F1ZXJ5Jyk7XHJcbiAgICB9XHJcbiAgICByZXBsYWNlKGAke3BhdGhuYW1lfT8ke3BhcmFtcy50b1N0cmluZygpfWApO1xyXG4gIH0sIDMwMCk7XHJcblxyXG5cclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC0xIGZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgU2VhcmNoXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS1bOXB4XSBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj17J1NlYXJjaCd9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KCdxdWVyeScpPy50b1N0cmluZygpfVxyXG4gICAgICAvPlxyXG4gICAgICA8TWFnbmlmeWluZ0dsYXNzSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDAgcGVlci1mb2N1czp0ZXh0LWdyYXktOTAwXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiTWFnbmlmeWluZ0dsYXNzSWNvbiIsInVzZVBhdGhuYW1lIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwidXNlRGVib3VuY2VkQ2FsbGJhY2siLCJTZWFyY2giLCJzZWFyY2hQYXJhbXMiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJoYW5kbGVTZWFyY2giLCJ0ZXJtIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsImRlbGV0ZSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/search.tsx\n"));

/***/ })

});