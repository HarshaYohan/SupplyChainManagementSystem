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
exports.id = "pages/api/Employee/updateProductStatus";
exports.ids = ["pages/api/Employee/updateProductStatus"];
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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FupdateProductStatus&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CupdateProductStatus.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FupdateProductStatus&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CupdateProductStatus.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_Employee_updateProductStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\Employee\\updateProductStatus.js */ \"(api)/./pages/api/Employee/updateProductStatus.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_updateProductStatus_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_updateProductStatus_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/Employee/updateProductStatus\",\n        pathname: \"/api/Employee/updateProductStatus\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_Employee_updateProductStatus_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRkVtcGxveWVlJTJGdXBkYXRlUHJvZHVjdFN0YXR1cyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDRW1wbG95ZWUlNUN1cGRhdGVQcm9kdWN0U3RhdHVzLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQzJFO0FBQzNFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx1RUFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsdUVBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Ntcy8/NzRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXEVtcGxveWVlXFxcXHVwZGF0ZVByb2R1Y3RTdGF0dXMuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9FbXBsb3llZS91cGRhdGVQcm9kdWN0U3RhdHVzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvRW1wbG95ZWUvdXBkYXRlUHJvZHVjdFN0YXR1c1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FupdateProductStatus&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CupdateProductStatus.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./backend/db.js":
/*!***********************!*\
  !*** ./backend/db.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n\nlet db;\ndb = mysql2__WEBPACK_IMPORTED_MODULE_0__.createConnection({\n    host: process.env.DATABASE_HOST,\n    user: process.env.DATABASE_USER,\n    password: process.env.DATABASE_PASSWORD,\n    database: process.env.DATABASE_NAME,\n    port: process.env.DATABASE_PORT\n}); // Wrap connection in .promise() to use async/await\ndb.connect((err)=>{\n    if (err) {\n        console.error(\"Database connection failed:\", err.stack);\n        return;\n    }\n    console.log(\"Connected to the database.\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBRTNCLElBQUlDO0FBQ0pBLEtBQUtELG9EQUFzQixDQUFDO0lBQzFCRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7SUFDL0JDLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtJQUNoQ0MsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxpQkFBaUI7SUFDdkNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sYUFBYTtJQUNuQ0MsTUFBTVQsUUFBUUMsR0FBRyxDQUFDUyxhQUFhO0FBQ2pDLElBQUssbURBQW1EO0FBRXhEYixHQUFHYyxPQUFPLENBQUMsQ0FBQ0M7SUFDVixJQUFJQSxLQUFLO1FBQ1BDLFFBQVFDLEtBQUssQ0FBQywrQkFBK0JGLElBQUlHLEtBQUs7UUFDdEQ7SUFDRjtJQUNBRixRQUFRRyxHQUFHLENBQUM7QUFDZDtBQUVBLGlFQUFlbkIsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi9iYWNrZW5kL2RiLmpzP2Q3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMic7IFxyXG5cclxubGV0IGRiO1xyXG5kYiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXHJcbiAgdXNlcjogIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlRcclxufSk7ICAvLyBXcmFwIGNvbm5lY3Rpb24gaW4gLnByb21pc2UoKSB0byB1c2UgYXN5bmMvYXdhaXRcclxuXHJcbmRiLmNvbm5lY3QoKGVycikgPT4ge1xyXG4gIGlmIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZDpcIiwgZXJyLnN0YWNrKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLlwiKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjsiXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX0hPU1QiLCJ1c2VyIiwiREFUQUJBU0VfVVNFUiIsInBhc3N3b3JkIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRBVEFCQVNFX05BTUUiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsImNvbm5lY3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/Employee/updateProductStatus.js":
/*!***************************************************!*\
  !*** ./pages/api/Employee/updateProductStatus.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _backend_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../backend/db.js */ \"(api)/./backend/db.js\");\n/* harmony import */ var _utils_cors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cors.js */ \"(api)/./utils/cors.js\");\n// Filename: /api/Employee/updateProductStatus.js\n\n\nasync function handler(req, res) {\n    try {\n        await (0,_utils_cors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n    } catch (error) {\n        console.error(\"CORS error:\", error);\n        return res.status(500).json({\n            error: \"CORS failed\"\n        });\n    }\n    if (req.method === \"POST\") {\n        const { orderId } = req.body;\n        const query = `\r\n      UPDATE orders \r\n      SET CurrentStatus = 'At Distribution Center'\r\n      WHERE OrderID = ?\r\n    `;\n        _backend_db_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(query, [\n            orderId\n        ], (err)=>{\n            if (err) {\n                return res.status(500).json({\n                    error: \"Failed to update product status\"\n                });\n            }\n            res.json({\n                message: \"Status updated successfully\"\n            });\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvRW1wbG95ZWUvdXBkYXRlUHJvZHVjdFN0YXR1cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpREFBaUQ7QUFDVDtBQUNLO0FBRTlCLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTUgsMERBQU9BLENBQUNFLEtBQUtDO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7UUFDN0IsT0FBT0QsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFSCxPQUFPO1FBQWM7SUFDckQ7SUFFQSxJQUFJRixJQUFJTSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCxJQUFJUSxJQUFJO1FBQzVCLE1BQU1DLFFBQVEsQ0FBQzs7OztJQUlmLENBQUM7UUFFSFosc0RBQUVBLENBQUNZLEtBQUssQ0FBQ0EsT0FBTztZQUFDRjtTQUFRLEVBQUUsQ0FBQ0c7WUFDMUIsSUFBSUEsS0FBSztnQkFDUCxPQUFPVCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFSCxPQUFPO2dCQUFrQztZQUN6RTtZQUNBRCxJQUFJSSxJQUFJLENBQUM7Z0JBQUVNLFNBQVM7WUFBOEI7UUFDcEQ7SUFFRSxPQUFPO1FBQ0xWLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRU0sU0FBUztRQUFxQjtJQUN6RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Ntcy8uL3BhZ2VzL2FwaS9FbXBsb3llZS91cGRhdGVQcm9kdWN0U3RhdHVzLmpzPzZmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZW5hbWU6IC9hcGkvRW1wbG95ZWUvdXBkYXRlUHJvZHVjdFN0YXR1cy5qc1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uL2JhY2tlbmQvZGIuanNcIjtcclxuaW1wb3J0IHJ1bkNvcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvcnMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcnVuQ29ycyhyZXEsIHJlcyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDT1JTIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJDT1JTIGZhaWxlZFwiIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IG9yZGVySWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICAgIFVQREFURSBvcmRlcnMgXHJcbiAgICAgIFNFVCBDdXJyZW50U3RhdHVzID0gJ0F0IERpc3RyaWJ1dGlvbiBDZW50ZXInXHJcbiAgICAgIFdIRVJFIE9yZGVySUQgPSA/XHJcbiAgICBgO1xyXG5cclxuICBkYi5xdWVyeShxdWVyeSwgW29yZGVySWRdLCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgcHJvZHVjdCBzdGF0dXNcIiB9KTtcclxuICAgIH1cclxuICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInJ1bkNvcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwianNvbiIsIm1ldGhvZCIsIm9yZGVySWQiLCJib2R5IiwicXVlcnkiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/Employee/updateProductStatus.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FupdateProductStatus&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CupdateProductStatus.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();