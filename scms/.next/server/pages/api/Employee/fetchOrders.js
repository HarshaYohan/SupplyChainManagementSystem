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
exports.id = "pages/api/Employee/fetchOrders";
exports.ids = ["pages/api/Employee/fetchOrders"];
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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FfetchOrders&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CfetchOrders.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FfetchOrders&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CfetchOrders.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_Employee_fetchOrders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\Employee\\fetchOrders.js */ \"(api)/./pages/api/Employee/fetchOrders.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_fetchOrders_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_Employee_fetchOrders_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/Employee/fetchOrders\",\n        pathname: \"/api/Employee/fetchOrders\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_Employee_fetchOrders_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRkVtcGxveWVlJTJGZmV0Y2hPcmRlcnMmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q0VtcGxveWVlJTVDZmV0Y2hPcmRlcnMuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDbUU7QUFDbkU7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLCtEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQywrREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY21zLz84YjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcRW1wbG95ZWVcXFxcZmV0Y2hPcmRlcnMuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9FbXBsb3llZS9mZXRjaE9yZGVyc1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL0VtcGxveWVlL2ZldGNoT3JkZXJzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FfetchOrders&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CfetchOrders.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./backend/db.js":
/*!***********************!*\
  !*** ./backend/db.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n\nlet db;\ndb = mysql2__WEBPACK_IMPORTED_MODULE_0__.createConnection({\n    host: process.env.DATABASE_HOST,\n    user: process.env.DATABASE_USER,\n    password: process.env.DATABASE_PASSWORD,\n    database: process.env.DATABASE_NAME,\n    port: process.env.DATABASE_PORT\n}); // Wrap connection in .promise() to use async/await\ndb.connect((err)=>{\n    if (err) {\n        console.error(\"Database connection failed:\", err.stack);\n        return;\n    }\n    console.log(\"Connected to the database.\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBRTNCLElBQUlDO0FBQ0pBLEtBQUtELG9EQUFzQixDQUFDO0lBQzFCRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7SUFDL0JDLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtJQUNoQ0MsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxpQkFBaUI7SUFDdkNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sYUFBYTtJQUNuQ0MsTUFBTVQsUUFBUUMsR0FBRyxDQUFDUyxhQUFhO0FBQ2pDLElBQUssbURBQW1EO0FBRXhEYixHQUFHYyxPQUFPLENBQUMsQ0FBQ0M7SUFDVixJQUFJQSxLQUFLO1FBQ1BDLFFBQVFDLEtBQUssQ0FBQywrQkFBK0JGLElBQUlHLEtBQUs7UUFDdEQ7SUFDRjtJQUNBRixRQUFRRyxHQUFHLENBQUM7QUFDZDtBQUVBLGlFQUFlbkIsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi9iYWNrZW5kL2RiLmpzP2Q3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMic7IFxyXG5cclxubGV0IGRiO1xyXG5kYiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXHJcbiAgdXNlcjogIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVIsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9OQU1FLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlRcclxufSk7ICAvLyBXcmFwIGNvbm5lY3Rpb24gaW4gLnByb21pc2UoKSB0byB1c2UgYXN5bmMvYXdhaXRcclxuXHJcbmRiLmNvbm5lY3QoKGVycikgPT4ge1xyXG4gIGlmIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZDpcIiwgZXJyLnN0YWNrKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLlwiKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjsiXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX0hPU1QiLCJ1c2VyIiwiREFUQUJBU0VfVVNFUiIsInBhc3N3b3JkIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRBVEFCQVNFX05BTUUiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsImNvbm5lY3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/Employee/fetchOrders.js":
/*!*******************************************!*\
  !*** ./pages/api/Employee/fetchOrders.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _backend_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../backend/db.js */ \"(api)/./backend/db.js\");\n/* harmony import */ var _utils_cors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cors.js */ \"(api)/./utils/cors.js\");\n\n\nconst mergeOrdersByOrderID = (orders)=>{\n    return orders.reduce((acc, order)=>{\n        const { OrderID, CustomerID, OrderDate, TrainCapacityConsumption, City } = order;\n        // Check if the orderID already exists in the accumulator\n        let existingOrder = acc.find((o)=>o.OrderID === OrderID);\n        if (existingOrder) {\n            // Add the product details to the existing order's products array\n            existingOrder.TrainCapacityConsumption += TrainCapacityConsumption;\n        } else {\n            const oDate = new Date(OrderDate).toLocaleDateString(\"en-CA\"); // Format: YYYY-MM-DD\n            // Create a new order entry with products as an array\n            acc.push({\n                OrderID,\n                CustomerID,\n                oDate,\n                TrainCapacityConsumption,\n                City\n            });\n        }\n        return acc;\n    }, []);\n};\nasync function handler(req, res) {\n    try {\n        await (0,_utils_cors_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n    } catch (error) {\n        console.error(\"CORS error:\", error);\n        res.status(500).json({\n            error: \"CORS failed\"\n        });\n        return;\n    }\n    const fetchOrders = \"select * from orderDetails\";\n    if (req.method === \"GET\") {\n        const results = await new Promise((resolve, reject)=>{\n            _backend_db_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(fetchOrders, (err, result)=>{\n                if (err) reject(err);\n                else resolve(result);\n            });\n        });\n        const orders = mergeOrdersByOrderID(results);\n        res.status(200).json(orders);\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvRW1wbG95ZWUvZmV0Y2hPcmRlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBQ0s7QUFFN0MsTUFBTUUsdUJBQXVCLENBQUNDO0lBQzVCLE9BQU9BLE9BQU9DLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUN6QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLHdCQUF3QixFQUFDQyxJQUFJLEVBQUUsR0FBR0w7UUFFMUUseURBQXlEO1FBQ3pELElBQUlNLGdCQUFnQlAsSUFBSVEsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVQLE9BQU8sS0FBS0E7UUFFbEQsSUFBSUssZUFBZTtZQUNqQixpRUFBaUU7WUFDakVBLGNBQWNGLHdCQUF3QixJQUFJQTtRQUM1QyxPQUFPO1lBQ0wsTUFBTUssUUFBUSxJQUFJQyxLQUFLUCxXQUFXUSxrQkFBa0IsQ0FBQyxVQUFVLHFCQUFxQjtZQUVwRixxREFBcUQ7WUFDckRaLElBQUlhLElBQUksQ0FBQztnQkFDUFg7Z0JBQ0FDO2dCQUNBTztnQkFDQUw7Z0JBQ0FDO1lBQ0Y7UUFDRjtRQUVBLE9BQU9OO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7QUFFZSxlQUFlYyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSTtRQUNGLE1BQU1wQiwwREFBT0EsQ0FBQ21CLEtBQUtDO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7UUFDN0JELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUgsT0FBTztRQUFjO1FBQzVDO0lBQ0Y7SUFFQSxNQUFNSSxjQUFjO0lBRXBCLElBQUlOLElBQUlPLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLFVBQVUsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1lBQzFDL0Isc0RBQUVBLENBQUNnQyxLQUFLLENBQUNOLGFBQWEsQ0FBQ08sS0FBS0M7Z0JBQzFCLElBQUlELEtBQUtGLE9BQU9FO3FCQUNYSCxRQUFRSTtZQUNmO1FBQ0Y7UUFDQSxNQUFNL0IsU0FBU0QscUJBQXFCMEI7UUFDcENQLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUN0QjtJQUN2QixPQUFPO1FBQ0xrQixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVVLFNBQVM7UUFBcUI7SUFDdkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NjbXMvLi9wYWdlcy9hcGkvRW1wbG95ZWUvZmV0Y2hPcmRlcnMuanM/ZDA1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uL2JhY2tlbmQvZGIuanNcIjtcclxuaW1wb3J0IHJ1bkNvcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvcnMuanNcIjtcclxuXHJcbmNvbnN0IG1lcmdlT3JkZXJzQnlPcmRlcklEID0gKG9yZGVycykgPT4ge1xyXG4gIHJldHVybiBvcmRlcnMucmVkdWNlKChhY2MsIG9yZGVyKSA9PiB7XHJcbiAgICBjb25zdCB7IE9yZGVySUQsIEN1c3RvbWVySUQsIE9yZGVyRGF0ZSwgVHJhaW5DYXBhY2l0eUNvbnN1bXB0aW9uLENpdHkgfSA9IG9yZGVyO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBvcmRlcklEIGFscmVhZHkgZXhpc3RzIGluIHRoZSBhY2N1bXVsYXRvclxyXG4gICAgbGV0IGV4aXN0aW5nT3JkZXIgPSBhY2MuZmluZCgobykgPT4gby5PcmRlcklEID09PSBPcmRlcklEKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdPcmRlcikge1xyXG4gICAgICAvLyBBZGQgdGhlIHByb2R1Y3QgZGV0YWlscyB0byB0aGUgZXhpc3Rpbmcgb3JkZXIncyBwcm9kdWN0cyBhcnJheVxyXG4gICAgICBleGlzdGluZ09yZGVyLlRyYWluQ2FwYWNpdHlDb25zdW1wdGlvbiArPSBUcmFpbkNhcGFjaXR5Q29uc3VtcHRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvRGF0ZSA9IG5ldyBEYXRlKE9yZGVyRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tQ0FcIik7IC8vIEZvcm1hdDogWVlZWS1NTS1ERFxyXG5cclxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IG9yZGVyIGVudHJ5IHdpdGggcHJvZHVjdHMgYXMgYW4gYXJyYXlcclxuICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgIE9yZGVySUQsXHJcbiAgICAgICAgQ3VzdG9tZXJJRCxcclxuICAgICAgICBvRGF0ZSxcclxuICAgICAgICBUcmFpbkNhcGFjaXR5Q29uc3VtcHRpb24sXHJcbiAgICAgICAgQ2l0eSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCBbXSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJ1bkNvcnMocmVxLCByZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ09SUyBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJDT1JTIGZhaWxlZFwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hPcmRlcnMgPSBcInNlbGVjdCAqIGZyb20gb3JkZXJEZXRhaWxzXCI7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBkYi5xdWVyeShmZXRjaE9yZGVycywgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvcmRlcnMgPSBtZXJnZU9yZGVyc0J5T3JkZXJJRChyZXN1bHRzKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVycyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwicnVuQ29ycyIsIm1lcmdlT3JkZXJzQnlPcmRlcklEIiwib3JkZXJzIiwicmVkdWNlIiwiYWNjIiwib3JkZXIiLCJPcmRlcklEIiwiQ3VzdG9tZXJJRCIsIk9yZGVyRGF0ZSIsIlRyYWluQ2FwYWNpdHlDb25zdW1wdGlvbiIsIkNpdHkiLCJleGlzdGluZ09yZGVyIiwiZmluZCIsIm8iLCJvRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwdXNoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImpzb24iLCJmZXRjaE9yZGVycyIsIm1ldGhvZCIsInJlc3VsdHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/Employee/fetchOrders.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FEmployee%2FfetchOrders&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CEmployee%5CfetchOrders.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();