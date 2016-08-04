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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _class = __webpack_require__(2);

	var _class2 = _interopRequireDefault(_class);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var a = 5;

	var es6func = function es6func(arg) {
	    return 'arg is: ' + arg;
	};

	console.log(es6func(10));

	var obj = {
	    key1: 'value1',
	    key2: 'value2',
	    subobj: {
	        subkey1: 'subvalue1',
	        subkey2: 'subvalue2'
	    }
	};

	var key1 = obj.key1;
	var key2 = obj.key2;
	var _obj$subobj = obj.subobj;
	var subkey1 = _obj$subobj.subkey1;
	var subkey2 = _obj$subobj.subkey2;


	console.log(key1);
	console.log(key2);
	console.log(subkey1);
	console.log(subkey2);

	function es6() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

	    return x * y;
	}

	console.log(es6());

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MovingObject = function () {
	    function MovingObject(id, x, y) {
	        _classCallCheck(this, MovingObject);

	        this.id = id;
	        this.move(x, y);
	    }

	    _createClass(MovingObject, [{
	        key: "move",
	        value: function move(x, y) {
	            this.x = x;
	            this.y = y;
	        }
	    }]);

	    return MovingObject;
	}();

	exports.default = MovingObject;

/***/ }
/******/ ]);