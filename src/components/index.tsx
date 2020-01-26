// Components
import makeAbout from "./src/about";
import makeWork from "./src/works";
import makeBlog from "./src/blog";
import makeContact from "./src/contact";
// Sub-Components
import makeBio from "./src/nav/src/bio";
import makeMenu from "./src/nav/src/menu";
import makeDropdown from "./src/nav/src/dropdown";
// Mains
import makeNav from "./src/nav";
import makeRoot from "./src/root";
import makeSwitcher from "./src/switcher";
// Dependencies
import { Transition } from "react-spring/renderprops";

const thumbmail = "";
const Arrows = {};

const About = makeAbout();
const Blog = makeBlog();
const Works = makeWork();
const Contact = makeContact();

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

const Bio = makeBio();
const Menu = makeMenu({ routes });
const Dropdown = makeDropdown({ Arrows, Transition });

const Nav = makeNav({ Bio, Menu, Dropdown, Transition });
const Switcher = makeSwitcher({ routes });
const Root = makeRoot();

const index = Object.freeze({
  Switcher,
  Nav,
  Root
});

export default index;
export { Switcher, Nav, Root };
