/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fullscreen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fscreen/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fscreen/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar key = {\n  fullscreenEnabled: 0,\n  fullscreenElement: 1,\n  requestFullscreen: 2,\n  exitFullscreen: 3,\n  fullscreenchange: 4,\n  fullscreenerror: 5\n};\n\nvar webkit = ['webkitFullscreenEnabled', 'webkitFullscreenElement', 'webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitfullscreenchange', 'webkitfullscreenerror'];\n\nvar moz = ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror'];\n\nvar ms = ['msFullscreenEnabled', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError'];\n\n// so it doesn't throw if no window or document\nvar document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};\n\nvar vendor = 'fullscreenEnabled' in document && Object.keys(key) || webkit[0] in document && webkit || moz[0] in document && moz || ms[0] in document && ms || [];\n\nexports.default = {\n  requestFullscreen: function requestFullscreen(element) {\n    return element[vendor[key.requestFullscreen]]();\n  },\n  requestFullscreenFunction: function requestFullscreenFunction(element) {\n    return element[vendor[key.requestFullscreen]];\n  },\n  get exitFullscreen() {\n    return document[vendor[key.exitFullscreen]].bind(document);\n  },\n  addEventListener: function addEventListener(type, handler, options) {\n    return document.addEventListener(vendor[key[type]], handler, options);\n  },\n  removeEventListener: function removeEventListener(type, handler, options) {\n    return document.removeEventListener(vendor[key[type]], handler, options);\n  },\n  get fullscreenEnabled() {\n    return Boolean(document[vendor[key.fullscreenEnabled]]);\n  },\n  set fullscreenEnabled(val) {},\n  get fullscreenElement() {\n    return document[vendor[key.fullscreenElement]];\n  },\n  set fullscreenElement(val) {},\n  get onfullscreenchange() {\n    return document[('on' + vendor[key.fullscreenchange]).toLowerCase()];\n  },\n  set onfullscreenchange(handler) {\n    return document[('on' + vendor[key.fullscreenchange]).toLowerCase()] = handler;\n  },\n  get onfullscreenerror() {\n    return document[('on' + vendor[key.fullscreenerror]).toLowerCase()];\n  },\n  set onfullscreenerror(handler) {\n    return document[('on' + vendor[key.fullscreenerror]).toLowerCase()] = handler;\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/fscreen/lib/index.js?");

/***/ }),

/***/ "./src/fullscreen.js":
/*!***************************!*\
  !*** ./src/fullscreen.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! fscreen */ \"./node_modules/fscreen/lib/index.js\");\r\n__webpack_require__(/*! ./main */ \"./src/main.js\")\n\n//# sourceURL=webpack:///./src/fullscreen.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fscreen */ \"./node_modules/fscreen/lib/index.js\");\n/* harmony import */ var fscreen__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fscreen__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// setup for mobile\r\nif(AFRAME.utils.device.isMobile()) {\r\n\r\n    // show white fullscreen element to prevent portrait mode, because the ui does not support it.\r\n    if(window.orientation == 0) {\r\n        document.querySelector('#landscapeWarningpanel').style.display = 'flex'\r\n    } else {\r\n        document.querySelector('#landscapeWarningpanel').style.display = 'none'\r\n    }\r\n\r\n    // check if the device was rotated correctly to remove the portrait warning\r\n    window.addEventListener('orientationchange', function(event) {\r\n        if(window.orientation == 0) {\r\n            document.querySelector('#landscapeWarningpanel').style.display = 'flex'\r\n        } else {\r\n            document.querySelector('#landscapeWarningpanel').style.display = 'none'\r\n        }\r\n    })\r\n\r\n    // deactivate vr ui on startup\r\n    var vruiElements = document.querySelectorAll('.vrui');\r\n    vruiElements.forEach(element => element.classList.remove('link'));\r\n    var DesktopuiElements = document.querySelectorAll('.desktopui');\r\n    DesktopuiElements.forEach(element => element.classList.add('link'));\r\n    \r\n    // check if the app was put on the homescreen, to move the ui in place for a different aspect ratio (this kinda sucks though)\r\n    if( window.navigator.standalone) {\r\n        var desktopUI = document.querySelector('#DesktopUI');\r\n        desktopUI.setAttribute(\"position\", \"-0.3 -1 -1.55\");\r\n    }\r\n\r\n    // callback when entering vr mode\r\n    document.querySelector('a-scene').addEventListener('enter-vr', function() {\r\n        document.querySelector('#DesktopUI').setAttribute('visible', 'false');\r\n        document.querySelector('#uiRotator').setAttribute('visible', 'true');\r\n        document.querySelector('#welcomeMessageVR').setAttribute('visible', 'true');\r\n        document.querySelector('#helpMessageVR').setAttribute('visible', 'true');\r\n        document.querySelector('#cursor').setAttribute('visible', 'true');\r\n        document.querySelector('#cursor').setAttribute('fuse', 'true');\r\n        var scene = document.querySelector('a-scene');\r\n        scene.removeAttribute('cursor');\r\n        scene.setAttribute('vrmodeon', 'true');\r\n        // activate vr ui on startup\r\n        \r\n        var vruiElements = document.querySelectorAll('.vrui');\r\n        vruiElements.forEach(element => element.classList.add('link'));\r\n        var DesktopuiElements = document.querySelectorAll('.desktopui');\r\n        DesktopuiElements.forEach(element => element.classList.remove('link'));\r\n    });\r\n\r\n    document.querySelector('a-scene').addEventListener('exit-vr', function() {\r\n        document.querySelector('#DesktopUI').setAttribute('visible', 'true');\r\n        document.querySelector('#uiRotator').setAttribute('visible', 'false');\r\n        document.querySelector('#welcomeMessageVR').setAttribute('visible', 'false');\r\n        document.querySelector('#helpMessageVR').setAttribute('visible', 'false');\r\n        document.querySelector('#cursor').setAttribute('visible', 'false');\r\n        document.querySelector('#cursor').setAttribute('fuse', 'false');\r\n        var scene = document.querySelector('a-scene');\r\n        scene.setAttribute('cursor', 'rayOrigin:mouse');\r\n        \r\n        scene.setAttribute('vrmodeon', 'false');\r\n        // activate vr ui on startup\r\n        \r\n        var vruiElements = document.querySelectorAll('.vrui');\r\n        vruiElements.forEach(element => element.classList.remove('link'));\r\n        var DesktopuiElements = document.querySelectorAll('.desktopui');\r\n        DesktopuiElements.forEach(element => element.classList.add('link'));\r\n    });\r\n\r\n    document.querySelector('#DesktopUI').setAttribute('visible', 'true');\r\n    document.querySelector('#uiRotator').setAttribute('visible', 'false');\r\n    document.querySelector('#welcomeMessageVR').setAttribute('visible', 'false');\r\n    document.querySelector('#helpMessageVR').setAttribute('visible', 'false');\r\n    document.querySelector('#cursor').setAttribute('visible', 'false');\r\n    scene.setAttribute('mobile', 'true');\r\n    \r\n}\r\n\r\n// setup for desktop\r\nif(!AFRAME.utils.device.checkHeadsetConnected())\r\n{\r\n    document.querySelector('#welcomeMessageVR').setAttribute('visible', 'false');\r\n    document.querySelector('#helpMessageVR').setAttribute('visible', 'false');\r\n    document.querySelector('a-scene').setAttribute('desktop', 'true');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });