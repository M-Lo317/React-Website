module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/m-lo/Desktop/WebDevelopment/FinalProject/FinalP/components/Footer.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Footer = () => {\n  return __jsx(\"footer\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, \"fb-t-da-tum-insta-CopyL\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qc3g/OWRhNSJdLCJuYW1lcyI6WyJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKO0FBS0gsQ0FORDs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIGZiLXQtZGEtdHVtLWluc3RhLUNvcHlMXG4gICAgICAgIDwvZm9vdGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.jsx\n");

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/m-lo/Desktop/WebDevelopment/FinalProject/FinalP/components/Header.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //import logo from '../backup.public/images/logo.jpg';     <img src= {logo} alt=\"\"/>\n\nconst Header = () => {\n  return __jsx(\"header\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, \" Mlo Art \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0NBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixDQURKO0FBS0gsQ0FORDs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgbG9nbyBmcm9tICcuLi9iYWNrdXAucHVibGljL2ltYWdlcy9sb2dvLmpwZyc7ICAgICA8aW1nIHNyYz0ge2xvZ299IGFsdD1cIlwiLz5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+IE1sbyBBcnQgPC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/m-lo/Desktop/WebDevelopment/FinalProject/FinalP/components/Navbar.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Navbar = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarNav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav m-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item active\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 15\n    }\n  }, \"Home\")), __jsx(\"li\", {\n    className: \"nav-item active\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 15\n    }\n  }, \"Images\")), __jsx(\"li\", {\n    className: \"nav-item active\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link disabled\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  }, \"About\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qc3g/NjM0ZCJdLCJuYW1lcyI6WyJOYXZiYXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQTBDLE1BQUUsRUFBQyxXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQXdCLFFBQUksRUFBQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQXdCLFFBQUksRUFBQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FKRixFQU9FO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFpQyxRQUFJLEVBQUMsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBUEYsQ0FERixDQURGLENBREYsQ0FERjtBQW9CRCxDQXJCRDs7QUF1QmVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIiA+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbS1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj0nIyc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5JbWFnZXM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkaXNhYmxlZFwiIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8L2xpPiAgXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ }),

/***/ "./layouts/DefaultLayout.jsx":
/*!***********************************!*\
  !*** ./layouts/DefaultLayout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header.jsx */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer.jsx */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar.jsx */ \"./components/Navbar.jsx\");\nvar _jsxFileName = \"/home/m-lo/Desktop/WebDevelopment/FinalProject/FinalP/layouts/DefaultLayout.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst DefaultLayout = props => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }), __jsx(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, props.children), __jsx(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXRzL0RlZmF1bHRMYXlvdXQuanN4P2ZkYjkiXSwibmFtZXMiOlsiRGVmYXVsdExheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDN0IsU0FDSSxtRUFDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLENBQUNDLFFBRFgsQ0FISixFQU1JLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREo7QUFXSCxDQVpEOztBQWNlRiw0RUFBZiIsImZpbGUiOiIuL2xheW91dHMvRGVmYXVsdExheW91dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qc3gnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5qc3gnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci5qc3gnO1xuXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC8+XG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/DefaultLayout.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/m-lo/Desktop/WebDevelopment/FinalProject/FinalP/pages/_app.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// pages/_app.js\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 10\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxTQUFPLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_DefaultLayout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/DefaultLayout.jsx */ \"./layouts/DefaultLayout.jsx\");\n/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app.jsx */ \"./pages/_app.jsx\");\nvar _jsxFileName = \"/home/m-lo/Desktop/WebDevelopment/FinalProject/FinalP/pages/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Home = () => {\n  return __jsx(_layouts_DefaultLayout_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Welcome to Mlo Art where you can buy a unique art.\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }), \"No art piece is alike.\", __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, \"Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2YsU0FDSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJEQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSiw0QkFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFxRkFKSixDQURKLENBREo7QUFvQkgsQ0FyQkQ7O0FBdUJlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9EZWZhdWx0TGF5b3V0LmpzeCc7XG5pbXBvcnQgJy4vX2FwcC5qc3gnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gTWxvIEFydCB3aGVyZSB5b3UgY2FuIGJ1eSBhIHVuaXF1ZSBhcnQuIFxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgTm8gYXJ0IHBpZWNlIGlzIGFsaWtlLlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFNvbWUgdGV4dCB0byBlbmFibGUgc2Nyb2xsaW5nLi4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGlsbHVtIGRlZmluaXRpb25lcyBubyBxdW8sIG1hbHVpc3NldCBjb25jbHVkYXR1cnF1ZSBldCBldW0sIGFsdGVyYSBmYWJ1bGFzIHV0IHF1by4gQXRxdWkgY2F1c2FlIGdsb3JpYXR1ciBpdXMgdGUsIGlkIGFnYW0gb21uaXMgZXZlcnRpdHVyIGV1bS4gQWZmZXJ0IGxhYm9yYW11cyByZXB1ZGlhbmRhZSBuZWMgZXQuIEluY2lkZXJpbnQgZWZmaWNpYW50dXIgaGlzIGFkLiBFdW0gbm8gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cy5cbiAgICAgICAgICAgICAgICBTb21lIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZy4uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBpbGx1bSBkZWZpbml0aW9uZXMgbm8gcXVvLCBtYWx1aXNzZXQgY29uY2x1ZGF0dXJxdWUgZXQgZXVtLCBhbHRlcmEgZmFidWxhcyB1dCBxdW8uIEF0cXVpIGNhdXNhZSBnbG9yaWF0dXIgaXVzIHRlLCBpZCBhZ2FtIG9tbmlzIGV2ZXJ0aXR1ciBldW0uIEFmZmVydCBsYWJvcmFtdXMgcmVwdWRpYW5kYWUgbmVjIGV0LiBJbmNpZGVyaW50IGVmZmljaWFudHVyIGhpcyBhZC4gRXVtIG5vIG1vbGVzdGlhZSB2b2x1cHRhdGlidXMuXG4gICAgICAgICAgICAgICAgU29tZSB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcuLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgaWxsdW0gZGVmaW5pdGlvbmVzIG5vIHF1bywgbWFsdWlzc2V0IGNvbmNsdWRhdHVycXVlIGV0IGV1bSwgYWx0ZXJhIGZhYnVsYXMgdXQgcXVvLiBBdHF1aSBjYXVzYWUgZ2xvcmlhdHVyIGl1cyB0ZSwgaWQgYWdhbSBvbW5pcyBldmVydGl0dXIgZXVtLiBBZmZlcnQgbGFib3JhbXVzIHJlcHVkaWFuZGFlIG5lYyBldC4gSW5jaWRlcmludCBlZmZpY2lhbnR1ciBoaXMgYWQuIEV1bSBubyBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzLlxuICAgICAgICAgICAgICAgIFNvbWUgdGV4dCB0byBlbmFibGUgc2Nyb2xsaW5nLi4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGlsbHVtIGRlZmluaXRpb25lcyBubyBxdW8sIG1hbHVpc3NldCBjb25jbHVkYXR1cnF1ZSBldCBldW0sIGFsdGVyYSBmYWJ1bGFzIHV0IHF1by4gQXRxdWkgY2F1c2FlIGdsb3JpYXR1ciBpdXMgdGUsIGlkIGFnYW0gb21uaXMgZXZlcnRpdHVyIGV1bS4gQWZmZXJ0IGxhYm9yYW11cyByZXB1ZGlhbmRhZSBuZWMgZXQuIEluY2lkZXJpbnQgZWZmaWNpYW50dXIgaGlzIGFkLiBFdW0gbm8gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cy5cbiAgICAgICAgICAgICAgICBTb21lIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZy4uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBpbGx1bSBkZWZpbml0aW9uZXMgbm8gcXVvLCBtYWx1aXNzZXQgY29uY2x1ZGF0dXJxdWUgZXQgZXVtLCBhbHRlcmEgZmFidWxhcyB1dCBxdW8uIEF0cXVpIGNhdXNhZSBnbG9yaWF0dXIgaXVzIHRlLCBpZCBhZ2FtIG9tbmlzIGV2ZXJ0aXR1ciBldW0uIEFmZmVydCBsYWJvcmFtdXMgcmVwdWRpYW5kYWUgbmVjIGV0LiBJbmNpZGVyaW50IGVmZmljaWFudHVyIGhpcyBhZC4gRXVtIG5vIG1vbGVzdGlhZSB2b2x1cHRhdGlidXMuXG4gICAgICAgICAgICAgICAgU29tZSB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcuLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgaWxsdW0gZGVmaW5pdGlvbmVzIG5vIHF1bywgbWFsdWlzc2V0IGNvbmNsdWRhdHVycXVlIGV0IGV1bSwgYWx0ZXJhIGZhYnVsYXMgdXQgcXVvLiBBdHF1aSBjYXVzYWUgZ2xvcmlhdHVyIGl1cyB0ZSwgaWQgYWdhbSBvbW5pcyBldmVydGl0dXIgZXVtLiBBZmZlcnQgbGFib3JhbXVzIHJlcHVkaWFuZGFlIG5lYyBldC4gSW5jaWRlcmludCBlZmZpY2lhbnR1ciBoaXMgYWQuIEV1bSBubyBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzLlxuICAgICAgICAgICAgICAgIFNvbWUgdGV4dCB0byBlbmFibGUgc2Nyb2xsaW5nLi4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGlsbHVtIGRlZmluaXRpb25lcyBubyBxdW8sIG1hbHVpc3NldCBjb25jbHVkYXR1cnF1ZSBldCBldW0sIGFsdGVyYSBmYWJ1bGFzIHV0IHF1by4gQXRxdWkgY2F1c2FlIGdsb3JpYXR1ciBpdXMgdGUsIGlkIGFnYW0gb21uaXMgZXZlcnRpdHVyIGV1bS4gQWZmZXJ0IGxhYm9yYW11cyByZXB1ZGlhbmRhZSBuZWMgZXQuIEluY2lkZXJpbnQgZWZmaWNpYW50dXIgaGlzIGFkLiBFdW0gbm8gbW9sZXN0aWFlIHZvbHVwdGF0aWJ1cy5cbiAgICAgICAgICAgICAgICBTb21lIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZy4uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBpbGx1bSBkZWZpbml0aW9uZXMgbm8gcXVvLCBtYWx1aXNzZXQgY29uY2x1ZGF0dXJxdWUgZXQgZXVtLCBhbHRlcmEgZmFidWxhcyB1dCBxdW8uIEF0cXVpIGNhdXNhZSBnbG9yaWF0dXIgaXVzIHRlLCBpZCBhZ2FtIG9tbmlzIGV2ZXJ0aXR1ciBldW0uIEFmZmVydCBsYWJvcmFtdXMgcmVwdWRpYW5kYWUgbmVjIGV0LiBJbmNpZGVyaW50IGVmZmljaWFudHVyIGhpcyBhZC4gRXVtIG5vIG1vbGVzdGlhZSB2b2x1cHRhdGlidXMuXG4gICAgICAgICAgICAgICAgU29tZSB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcuLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgaWxsdW0gZGVmaW5pdGlvbmVzIG5vIHF1bywgbWFsdWlzc2V0IGNvbmNsdWRhdHVycXVlIGV0IGV1bSwgYWx0ZXJhIGZhYnVsYXMgdXQgcXVvLiBBdHF1aSBjYXVzYWUgZ2xvcmlhdHVyIGl1cyB0ZSwgaWQgYWdhbSBvbW5pcyBldmVydGl0dXIgZXVtLiBBZmZlcnQgbGFib3JhbXVzIHJlcHVkaWFuZGFlIG5lYyBldC4gSW5jaWRlcmludCBlZmZpY2lhbnR1ciBoaXMgYWQuIEV1bSBubyBtb2xlc3RpYWUgdm9sdXB0YXRpYnVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvRGVmYXVsdExheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/style.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });