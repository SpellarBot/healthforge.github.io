/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	// JS Goes here - ES6 supported
	var daysSince = document.getElementById("days-since-latest");

	if (daysSince) {
	  var aDay = 1000 * 60 * 60 * 24;

	  var dateSince = new Date(daysSince.getAttribute("data-latest-incident-date"));
	  var now = new Date();

	  var timeSince = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) - new Date(dateSince.getUTCFullYear(), dateSince.getUTCMonth(), dateSince.getUTCDate());
	  var endDays = Math.floor(timeSince / aDay);

	  var count = endDays === 1 ? endDays + " day" : endDays + " days";
	  daysSince.innerHTML = count + " since last incident";
	}

/***/ })
/******/ ]);