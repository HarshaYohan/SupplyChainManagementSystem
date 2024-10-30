"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/Employee/handleRescheduling";
exports.ids = ["pages/api/Employee/handleRescheduling"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FhandleRescheduling&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5ChandleRescheduling.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FhandleRescheduling&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5ChandleRescheduling.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_Employee_handleRescheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\Employee\\handleRescheduling.js */ \"(api)/./pages/api/Employee/handleRescheduling.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_handleRescheduling_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_handleRescheduling_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/Employee/handleRescheduling\",\n        pathname: \"/api/Employee/handleRescheduling\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_Employee_handleRescheduling_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRkVtcGxveWVlJTJGaGFuZGxlUmVzY2hlZHVsaW5nJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNFbXBsb3llZSU1Q2hhbmRsZVJlc2NoZWR1bGluZy5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUMwRTtBQUMxRTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsc0VBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHNFQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvPzJmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxFbXBsb3llZVxcXFxoYW5kbGVSZXNjaGVkdWxpbmcuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9FbXBsb3llZS9oYW5kbGVSZXNjaGVkdWxpbmdcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9FbXBsb3llZS9oYW5kbGVSZXNjaGVkdWxpbmdcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FhandleRescheduling&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5ChandleRescheduling.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./backend/db.js":
/*!***********************!*\
  !*** ./backend/db.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n\nlet db;\ndb = mysql2__WEBPACK_IMPORTED_MODULE_0__.createConnection({\n    host: process.env.DATABASE_HOST,\n    user: process.env.DATABASE_USER,\n    password: process.env.DATABASE_PASSWORD,\n    database: process.env.DATABASE_NAME,\n    port: process.env.DATABASE_PORT\n}); // Wrap connection in .promise() to use async/await\ndb.connect((err)=>{\n    if (err) {\n        console.error(\"Database connection failed:\", err.stack);\n        return;\n    }\n    console.log(\"Connected to the database.\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBRTNCLElBQUlDO0FBQ0pBLEtBQUtELG9EQUFzQixDQUFDO0lBQzFCRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7SUFDL0JDLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtJQUNoQ0MsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxpQkFBaUI7SUFDdkNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sYUFBYTtJQUNuQ0MsTUFBTVQsUUFBUUMsR0FBRyxDQUFDUyxhQUFhO0FBQ2pDLElBQUssbURBQW1EO0FBRXhEYixHQUFHYyxPQUFPLENBQUMsQ0FBQ0M7SUFDVixJQUFJQSxLQUFLO1FBQ1BDLFFBQVFDLEtBQUssQ0FBQywrQkFBK0JGLElBQUlHLEtBQUs7UUFDdEQ7SUFDRjtJQUNBRixRQUFRRyxHQUFHLENBQUM7QUFDZDtBQUVBLGlFQUFlbkIsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi9iYWNrZW5kL2RiLmpzP2Q3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMic7IFxyXG5cclxubGV0IGRiO1xyXG5kYiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXHJcbiAgdXNlcjogIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlRcclxufSk7ICAvLyBXcmFwIGNvbm5lY3Rpb24gaW4gLnByb21pc2UoKSB0byB1c2UgYXN5bmMvYXdhaXRcclxuXHJcbmRiLmNvbm5lY3QoKGVycikgPT4ge1xyXG4gIGlmIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZDpcIiwgZXJyLnN0YWNrKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLlwiKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjsiXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX0hPU1QiLCJ1c2VyIiwiREFUQUJBU0VfVVNFUiIsInBhc3N3b3JkIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRBVEFCQVNFX05BTUUiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsImNvbm5lY3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/Employee/handleRescheduling.js":
/*!**************************************************!*\
  !*** ./pages/api/Employee/handleRescheduling.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _backend_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../backend/db.js */ \"(api)/./backend/db.js\");\n/* harmony import */ var _utils_cors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cors.js */ \"(api)/./utils/cors.js\");\n\n\nasync function handler(req, res) {\n    try {\n        await (0,_utils_cors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n    } catch (error) {\n        console.error(\"CORS error:\", error);\n        res.status(500).json({\n            error: \"CORS failed\"\n        });\n        return;\n    }\n    console.log(req.body);\n    const updateStatusQuery = \"update orders set CurrentStatus = 'Pending' where OrderID = ?\";\n    if (req.method === \"POST\") {\n        await new Promise((resolve, reject)=>{\n            _backend_db_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(updateStatusQuery, [\n                req.body.OrderId\n            ], (err)=>{\n                if (err) reject(err);\n                resolve();\n            });\n        });\n        res.status(200).json({\n            message: \"Rescheduling successful\"\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvRW1wbG95ZWUvaGFuZGxlUmVzY2hlZHVsaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUNLO0FBRTlCLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTUgsMERBQU9BLENBQUNFLEtBQUtDO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7UUFDN0JELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUgsT0FBTztRQUFjO1FBQzVDO0lBQ0Y7SUFFQUMsUUFBUUcsR0FBRyxDQUFDTixJQUFJTyxJQUFJO0lBRXBCLE1BQU1DLG9CQUNKO0lBRUYsSUFBSVIsSUFBSVMsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVFDO1lBQ3pCZixzREFBRUEsQ0FBQ2dCLEtBQUssQ0FBQ0wsbUJBQW1CO2dCQUFDUixJQUFJTyxJQUFJLENBQUNPLE9BQU87YUFBQyxFQUFFLENBQUNDO2dCQUMvQyxJQUFJQSxLQUFLSCxPQUFPRztnQkFDaEJKO1lBQ0Y7UUFDRjtRQUVBVixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNXLFNBQVM7UUFBeUI7SUFFMUQsT0FBTztRQUNMZixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVXLFNBQVM7UUFBcUI7SUFDdkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi9wYWdlcy9hcGkvRW1wbG95ZWUvaGFuZGxlUmVzY2hlZHVsaW5nLmpzPzg3NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi9iYWNrZW5kL2RiLmpzXCI7XHJcbmltcG9ydCBydW5Db3JzIGZyb20gXCIuLi8uLi8uLi91dGlscy9jb3JzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJ1bkNvcnMocmVxLCByZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ09SUyBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJDT1JTIGZhaWxlZFwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG5cclxuICBjb25zdCB1cGRhdGVTdGF0dXNRdWVyeSA9XHJcbiAgICBcInVwZGF0ZSBvcmRlcnMgc2V0IEN1cnJlbnRTdGF0dXMgPSAnUGVuZGluZycgd2hlcmUgT3JkZXJJRCA9ID9cIjtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgZGIucXVlcnkodXBkYXRlU3RhdHVzUXVlcnksIFtyZXEuYm9keS5PcmRlcklkXSwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogXCJSZXNjaGVkdWxpbmcgc3VjY2Vzc2Z1bFwifSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInJ1bkNvcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwianNvbiIsImxvZyIsImJvZHkiLCJ1cGRhdGVTdGF0dXNRdWVyeSIsIm1ldGhvZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicXVlcnkiLCJPcmRlcklkIiwiZXJyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/Employee/handleRescheduling.js\n");

/***/ }),

/***/ "(api)/./utils/cors.js":
/*!***********************!*\
  !*** ./utils/cors.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0__({\n    methods: [\n        \"GET\",\n        \"POST\",\n        \"PUT\",\n        \"DELETE\"\n    ],\n    origin: [\n        \"http://localhost:3000\",\n        \"https://your-frontend-domain.com\"\n    ]\n});\nfunction runCors(req, res) {\n    return new Promise((resolve, reject)=>{\n        cors(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runCors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCO0FBRXhCLE1BQU1DLE9BQU9ELGlDQUFJQSxDQUFDO0lBQ2hCRSxTQUFTO1FBQUM7UUFBTztRQUFRO1FBQU87S0FBUztJQUN6Q0MsUUFBUTtRQUFDO1FBQXlCO0tBQW1DO0FBQ3ZFO0FBRUEsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3ZCLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztRQUMzQlIsS0FBS0ksS0FBS0MsS0FBSyxDQUFDSTtZQUNkLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDM0IsT0FBT0YsT0FBT0M7WUFDaEI7WUFDQSxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZU4sT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi91dGlscy9jb3JzLmpzPzdiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSBcImNvcnNcIjtcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKHtcclxuICBtZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCIsIFwiUFVUXCIsIFwiREVMRVRFXCJdLFxyXG4gIG9yaWdpbjogW1wiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIFwiaHR0cHM6Ly95b3VyLWZyb250ZW5kLWRvbWFpbi5jb21cIl0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcnVuQ29ycyhyZXEsIHJlcykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb3JzKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkNvcnM7XHJcbiJdLCJuYW1lcyI6WyJDb3JzIiwiY29ycyIsIm1ldGhvZHMiLCJvcmlnaW4iLCJydW5Db3JzIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/cors.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FhandleRescheduling&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5ChandleRescheduling.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();