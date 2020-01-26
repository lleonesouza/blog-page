webpackHotUpdate("index",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! ./components */ "./src/components/index.tsx");
// Animals
// import Turtle from "./components/lottie/animals/turtle";
function App() {
    return (React.createElement("div", null,
        React.createElement(components_1.Switcher, null),
        React.createElement(components_1.Nav, null)));
}
exports.default = App;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const react_device_detect_1 = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
const App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
// import {Loading} from "./medias/lotties/loading";
function Index() {
    return react_device_detect_1.isMobile ? (React.createElement("div", null,
        React.createElement("h1", null, "the mobile version is coming"),
        React.createElement("h2", null, "please, acess from computer browser"))) : (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.default, null)));
}
exports.default = Index;


/***/ })

})
//# sourceMappingURL=index.fe5cd10529c72ad7b873.hot-update.js.map