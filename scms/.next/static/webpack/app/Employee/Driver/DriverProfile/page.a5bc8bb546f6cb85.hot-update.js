"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Employee/Driver/DriverProfile/page",{

/***/ "(app-pages-browser)/./app/Employee/Driver/DriverProfile/page.jsx":
/*!****************************************************!*\
  !*** ./app/Employee/Driver/DriverProfile/page.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _styles_employee_DriverProfile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/employee/DriverProfile.css */ \"(app-pages-browser)/./styles/employee/DriverProfile.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Fetch driver profile from the backend\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProfile = async ()=>{\n            const { email } = JSON.parse(localStorage.getItem(\"userData\"));\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/Employee/fetchDriverProfile1\", {\n                    email\n                });\n                const data = response.data;\n                setUser(data);\n            } catch (error) {\n                console.error(\"Error fetching profile data:\", error);\n            }\n        };\n        fetchProfile();\n    }, []);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading profile...\"\n        }, void 0, false, {\n            fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"profile-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"profile-name\",\n                    children: user.Name\n                }, void 0, false, {\n                    fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"profile-email\",\n                    children: user.Email\n                }, void 0, false, {\n                    fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"profile-address\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Address:\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 40\n                        }, undefined),\n                        \" \",\n                        user.Address\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"profile-phone\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Phone Number:\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 38\n                        }, undefined),\n                        \" \",\n                        user.PhoneNumber\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\SupplyChainManagementSystem\\\\scms\\\\app\\\\Employee\\\\Driver\\\\DriverProfile\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9FbXBsb3llZS9Ecml2ZXIvRHJpdmVyUHJvZmlsZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNsQjtBQUM2QjtBQUV2RCxNQUFNRyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQyx3Q0FBd0M7SUFDeENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sZUFBZTtZQUNuQixNQUFNLEVBQUNDLEtBQUssRUFBQyxHQUFHQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQztZQUNoRCxJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLElBQUksQ0FBQyxxQ0FBcUM7b0JBQUVOO2dCQUFLO2dCQUM5RSxNQUFNTyxPQUFPRixTQUFTRSxJQUFJO2dCQUMxQlQsUUFBUVM7WUFDVixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQ2hEO1FBQ0Y7UUFFQVQ7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNGLE1BQU07UUFDVCxxQkFBTyw4REFBQ2E7c0JBQUU7Ozs7OztJQUNaO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZ0JmLEtBQUtpQixJQUFJOzs7Ozs7OEJBQ3ZDLDhEQUFDSjtvQkFBRUUsV0FBVTs4QkFBaUJmLEtBQUtrQixLQUFLOzs7Ozs7OEJBQ3hDLDhEQUFDTDtvQkFBRUUsV0FBVTs7c0NBQWtCLDhEQUFDSTtzQ0FBTzs7Ozs7O3dCQUFpQjt3QkFBRW5CLEtBQUtvQixPQUFPOzs7Ozs7OzhCQUN0RSw4REFBQ1A7b0JBQUVFLFdBQVU7O3NDQUFnQiw4REFBQ0k7c0NBQU87Ozs7Ozt3QkFBc0I7d0JBQUVuQixLQUFLcUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJGO0dBakNNdEI7S0FBQUE7QUFtQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0VtcGxveWVlL0RyaXZlci9Ecml2ZXJQcm9maWxlL3BhZ2UuanN4P2Q1ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2VtcGxveWVlL0RyaXZlclByb2ZpbGUuY3NzXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBGZXRjaCBkcml2ZXIgcHJvZmlsZSBmcm9tIHRoZSBiYWNrZW5kXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUHJvZmlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3Qge2VtYWlsfSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRGF0YVwiKSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9FbXBsb3llZS9mZXRjaERyaXZlclByb2ZpbGUxXCIsIHsgZW1haWx9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9maWxlIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2ZpbGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcgcHJvZmlsZS4uLjwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZmlsZS1uYW1lXCI+e3VzZXIuTmFtZX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtZW1haWxcIj57dXNlci5FbWFpbH08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS1hZGRyZXNzXCI+PHN0cm9uZz5BZGRyZXNzOjwvc3Ryb25nPiB7dXNlci5BZGRyZXNzfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXBob25lXCI+PHN0cm9uZz5QaG9uZSBOdW1iZXI6PC9zdHJvbmc+IHt1c2VyLlBob25lTnVtYmVyfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwiZmV0Y2hQcm9maWxlIiwiZW1haWwiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJwb3N0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIk5hbWUiLCJFbWFpbCIsInN0cm9uZyIsIkFkZHJlc3MiLCJQaG9uZU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Employee/Driver/DriverProfile/page.jsx\n"));

/***/ })

});