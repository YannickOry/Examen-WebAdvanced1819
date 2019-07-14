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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Course = __webpack_require__(/*! ./school/Course */ \"./src/js/school/Course.js\");\n\nvar _Course2 = _interopRequireDefault(_Course);\n\nvar _Student = __webpack_require__(/*! ./school/Student */ \"./src/js/school/Student.js\");\n\nvar _Student2 = _interopRequireDefault(_Student);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener(\"load\", function () {\n\tvar student = new _Student2.default(1);\n\tvar course = new _Course2.default(101);\n\tcourse.completed = true;\n\tcourse.grade = 12;\n\tstudent.addCourse(course);\n\tvar course2 = new _Course2.default(111);\n\tcourse2.completed = true;\n\tcourse2.grade = 13;\n\tstudent.addCourse(course2);\n\tvar course3 = new _Course2.default(121);\n\tstudent.addCourse(course3);\n\tvar grade = student.calculateGrade();\n\tdocument.getElementById(\"output\").appendChild(document.createTextNode(grade));\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/school/Course.js":
/*!*********************************!*\
  !*** ./src/js/school/Course.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// naam: Yannick Ory\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Course = function () {\n    function Course(_id) {\n        _classCallCheck(this, Course);\n\n        this.grade = 0;\n        this.id = _id;\n        this.completed = false;\n    }\n\n    _createClass(Course, [{\n        key: \"grade\",\n        get: function get() {\n            return this._grade;\n        },\n        set: function set(value) {\n            if (value > 0 && value < 20) {\n                this._grade = value;\n            }\n        }\n    }, {\n        key: \"completed\",\n        get: function get() {\n            return this._completed;\n        },\n        set: function set(value) {\n            this._completed = value;\n        }\n    }, {\n        key: \"id\",\n        get: function get() {\n            return this._id;\n        },\n        set: function set(value) {\n            this._id = value;\n        }\n    }]);\n\n    return Course;\n}();\n\nexports.default = Course;\n\n//# sourceURL=webpack:///./src/js/school/Course.js?");

/***/ }),

/***/ "./src/js/school/Student.js":
/*!**********************************!*\
  !*** ./src/js/school/Student.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Course = __webpack_require__(/*! ./Course */ \"./src/js/school/Course.js\");\n\nvar _Course2 = _interopRequireDefault(_Course);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// naam: Yannick Ory\nvar Student = function () {\n    function Student(id) {\n        _classCallCheck(this, Student);\n\n        this._id = id;\n        this._courses = [];\n    }\n\n    _createClass(Student, [{\n        key: \"addCourse\",\n        value: function addCourse(course) {\n            if (course instanceof _Course2.default) {\n\n                this._courses.push(course);\n            } else {\n                throw new Error(\"Geen Course Element\");\n            }\n        }\n    }, {\n        key: \"calculateGrade\",\n        value: function calculateGrade() {\n\n            if (this._courses.length == 0) {\n                throw new Error(\"0 completed courses\");\n            } else {\n                var aantal = 0;\n                var som = 0;\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = this.courses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var course = _step.value;\n\n                        if (course._completed == true) {\n                            som = som + course._grade;\n                            console.log(som);\n                            aantal++;\n                        }\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n\n                return som / aantal;\n            }\n        }\n    }, {\n        key: \"id\",\n        get: function get() {\n            return this._id;\n        },\n        set: function set(value) {\n            this._id = value;\n        }\n    }, {\n        key: \"courses\",\n        get: function get() {\n            return this._courses;\n        },\n        set: function set(value) {\n            this._courses = value;\n        }\n    }]);\n\n    return Student;\n}();\n\nexports.default = Student;\n\n//# sourceURL=webpack:///./src/js/school/Student.js?");

/***/ })

/******/ });