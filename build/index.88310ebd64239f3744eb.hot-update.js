webpackHotUpdate("index",{

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Components
const about_1 = __webpack_require__(/*! ./src/about */ "./src/components/src/about/index.tsx");
const works_1 = __webpack_require__(/*! ./src/works */ "./src/components/src/works/index.tsx");
const blog_1 = __webpack_require__(/*! ./src/blog */ "./src/components/src/blog/index.tsx");
const contact_1 = __webpack_require__(/*! ./src/contact */ "./src/components/src/contact/index.tsx");
// Sub-Components
const bio_1 = __webpack_require__(/*! ./src/nav/src/bio */ "./src/components/src/nav/src/bio.tsx");
const menu_1 = __webpack_require__(/*! ./src/nav/src/menu */ "./src/components/src/nav/src/menu.tsx");
const dropdown_1 = __webpack_require__(/*! ./src/nav/src/dropdown */ "./src/components/src/nav/src/dropdown.tsx");
// Mains
const nav_1 = __webpack_require__(/*! ./src/nav */ "./src/components/src/nav/index.tsx");
const root_1 = __webpack_require__(/*! ./src/root */ "./src/components/src/root/index.tsx");
const switcher_1 = __webpack_require__(/*! ./src/switcher */ "./src/components/src/switcher.tsx");
// Dependencies
const renderprops_1 = __webpack_require__(/*! react-spring/renderprops */ "./node_modules/react-spring/renderprops.js");
const thumbmail = "";
const Arrows = {};
const About = about_1.default();
const Blog = blog_1.default();
const Works = works_1.default();
const Contact = contact_1.default();
const routes = [
    Object.freeze({
        title: "blog",
        url: "/blog",
        component: Blog
    }),
    Object.freeze({
        title: "works",
        url: "/works",
        component: Works
    }),
    Object.freeze({
        title: "about",
        url: "/about",
        component: About
    }),
    Object.freeze({
        title: "contact",
        url: "/contact",
        component: Contact
    })
];
const Bio = bio_1.default();
const Menu = menu_1.default({ routes });
const Dropdown = dropdown_1.default({ Arrows, Transition: renderprops_1.Transition });
const Nav = nav_1.default({ Bio, Menu, Dropdown, Transition: renderprops_1.Transition });
exports.Nav = Nav;
const Switcher = switcher_1.default({ routes });
exports.Switcher = Switcher;
const Root = root_1.default();
exports.Root = Root;
const index = Object.freeze({
    Switcher,
    Nav,
    Root
});
exports.default = index;


/***/ })

})
//# sourceMappingURL=index.88310ebd64239f3744eb.hot-update.js.map