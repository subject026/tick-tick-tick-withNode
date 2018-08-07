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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(58);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_adminOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _modules_mobNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var bling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var bling__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bling__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);






// Document ready
document.addEventListener('DOMContentLoaded', function(){
  
  const buttons = document.querySelectorAll('[rel="js-userOptions"]');
  const mobNavButton = document.querySelector('[rel="js-mob-nav-toggle"]');
  const lists = bling__WEBPACK_IMPORTED_MODULE_2___default()('.list');
  const listContainer = document.querySelector('[rel="js-list-container"]');
  
  // If on lists home page
  _modules_list__WEBPACK_IMPORTED_MODULE_3__["List"].init();
  
  // If on User Admin page
  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', _modules_adminOptions__WEBPACK_IMPORTED_MODULE_0__["toggleUserOptions"])
    });
  } 
  
  // Don't need this on the login/register pages
  if (mobNavButton) {
    mobNavButton.addEventListener('click', _modules_mobNav__WEBPACK_IMPORTED_MODULE_1__["toggleMobNav"]);
  }

})

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleUserOptions", function() { return toggleUserOptions; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);




function createOptionsElement(event) {
  const userId = event.target.parentElement.parentElement.dataset.id;
  const optionsDiv = document.createElement('div');
  optionsDiv.classList = "user-options user-options--hidden";
  optionsDiv.setAttribute('rel', "js-openOptions"); 
  optionsDiv.innerHTML = `<p><button class="button delete-user" data-id="${userId}">Delete User!</button></p>`;
  const deleteButton = optionsDiv.querySelector('.delete-user');
  deleteButton.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_1__["renderModal"]);
  return optionsDiv;
}


function toggleUserOptions(event) {
  const container = event.target.parentElement.parentElement;
  const title = container.querySelector('[rel="js-userTitle"]'); 
  const existingElement = document.querySelector('[rel="js-openOptions"]');
  if (existingElement) {
    const existingTitle = existingElement.parentElement.querySelector('[rel="js-userTitle"]');
    if (container == existingElement.parentElement) {
      existingTitle.classList.toggle('user-title--open');
      existingTitle.classList.toggle('user__title--hover');
      Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["slideUp"])(existingElement);
      return; 
    } else {
      existingTitle.classList.toggle('user-title--open');
      existingTitle.classList.toggle('user__title--hover');
      Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["slideUp"])(existingElement);
    }
  }
  const optionsElement = createOptionsElement(event);
  container.appendChild(optionsElement);
  Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["slideDown"])(optionsElement);
  title.classList.toggle('user-title--open');
  title.classList.toggle('user__title--hover');
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUp", function() { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDown", function() { return slideDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return hideModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return renderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLists", function() { return renderLists; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);





//
// user admin consatina

function slideDown(el){
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(el, 0.4, {
    css: {
      className: "user-options"
    },
    ease: Power4.easeOut
  });
}

function slideUp(el) {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(el, 0.4, {
    css: {
      className: "user-options user-options--hidden"
    },
    ease: Power4.easeOut,
    onComplete: function(){
      el.parentElement.removeChild(el);
    }
  });
}

//
// Modal Stuff

function showModal(el){
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(el, 0.4, {
    css: {
      className: "modal-container"
    },
    ease: Power4.easeOut
  });
}

function hideModal(){
  const modal = document.querySelector('.modal-container');
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(modal, 0.4, {
    css: {
      className: "modal-container modal-container--hidden"
    },
    ease: Power4.easeOut,
    onComplete: function(){
      modal.parentElement.removeChild(modal);
    }
  });
}

//
// Render Lists

function renderList(title){
  const listEl = Object(_templates__WEBPACK_IMPORTED_MODULE_1__["buildList"])({title: title});
  console.log(listEl);
}

function renderLists(lists) {
  const container = document.querySelector('[rel="js-list-container"]');
  for (let key in lists) {
    const data = {
      _id: key,
      title: lists[key].title,
      parent: lists[key].parent
    }
    const list = Object(_templates__WEBPACK_IMPORTED_MODULE_1__["buildList"])(data);
    list.querySelector('.list__open').addEventListener('click', toggleListOpen);
    container.appendChild(list);
  };
}

async function toggleListOpen(){
  const list = event.target.parentElement.parentElement;
  // if closed, open it...
  if (list.classList.contains('list--closed')) {  
    list.classList.toggle('list--closed');
    const listId = list.dataset.id;
    const items = Object(_localStorage__WEBPACK_IMPORTED_MODULE_3__["getItemsLocal"])(listId);
    list.appendChild(Object(_templates__WEBPACK_IMPORTED_MODULE_1__["buildListContent"])(items));   
    const options = list.querySelector('.list__options');
    // bind save item event
    list.querySelector('[rel="js-add-item"]').addEventListener('click', _ajax__WEBPACK_IMPORTED_MODULE_2__["saveItem"]);
  } else {
    list.classList.toggle('list--closed');
    // remove list content element
    closeList(list);
  }
}


function closeList(list){
  const listContent = list.querySelector('[rel="js-list-content"]');
  listContent.parentElement.removeChild(listContent);
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]; });

/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TimelineMax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _TimelineMax_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TweenMax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TweenMax_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return _TweenMax_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _EasePack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
















/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _gsScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimeline", function() { return SimpleTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return TweenPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

/* ES6 changes:
	- declare and export _gsScope at top.
	- set const TweenLite = the result of the main function
	- export default TweenLite at the bottom
	- return TweenLite at the bottom of the main function
	- pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
	- remove the "export to multiple environments" in Definition().
 */
const _gsScope = (typeof(window) !== "undefined") ? window : (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : undefined || {};

const TweenLite = (function(window, moduleName) {

		"use strict";
		var _exports = {},
			_doc = window.document,
			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							/*
							if (typeof(module) !== "undefined" && module.exports) { //node
								if (ns === moduleName) {
									module.exports = _exports[moduleName] = cl;
									for (i in _exports) {
										cl[i] = _exports[i];
									}
								} else if (_exports[moduleName]) {
									_exports[moduleName][n] = cl;
								}
							} else if (typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							}
							*/
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				if (i > 1) {
					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
				}
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
					return (_lagThreshold < 1 / _tinyNum);
				}
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function(seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
					_ticker.wake();
				}
				var t = setTimeout(_checkTimeout, 2000);
				if (t.unref) {
					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
					t.unref();
				}
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars,
				callback = v[type],
				params = v[type + "Params"],
				scope = v[type + "Scope"] || v.callbackScope || this,
				l = params ? params.length : 0;
			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
				case 0: callback.call(scope); break;
				case 1: callback.call(scope, params[0]); break;
				case 2: callback.call(scope, params[0], params[1]); break;
				default: callback.apply(scope, params);
			}
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			var pauseTime, t;
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				pauseTime = this._pauseTime;
				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			t = this.timeline;
			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
				t._dirty = true;
				t.totalDuration();
				t = t.timeline;
			}
			return this;
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "2.0.1";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
				_doc = window.document;
			}
			return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_relExp = /[\+-]=-?[\.\d]/,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
					if (pt.m) {
						val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				a.end = end;
				start = a[0] = start + ""; //ensure values are strings
				end = a[1] = end + "";
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
					a.end = null;
				}
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
				if (typeof(end) === "function") {
					end = end(index || 0, target);
				}
				var type = typeof(target[prop]),
					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob;

				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else {
						pt.s = parseFloat(s);
						if (!isRelative) {
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars, l;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.data = "isStart";
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				startVars.onUpdate = v.onUpdate;
				startVars.onUpdateParams = v.onUpdateParams;
				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
				this._startAt = TweenLite.to(this.target || {}, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				l = this._targets.length;
				for (i = 0; i < l; i++) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					//m - mod           [function | 0]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted || (this._startAt && this._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative.
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else if (target._gsTweenID) {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a || [];
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.19.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._mod = p._roundProps = function(lookup) {
			var pt = this._firstPT,
				val;
			while (pt) {
				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					if (pt.f === 2) {
						pt.t._applyPT.m = val;
					} else {
						pt.m = val;
					}
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: " + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

		return TweenLite;

})(_gsScope, "TweenLite");

const gs = _gsScope.com.greensock;

const SimpleTimeline = gs.core.SimpleTimeline;
const Animation = gs.core.Animation;
const Ease = _gsScope.Ease;
const Linear = _gsScope.Linear;
const Power0 = Linear;
const Power1 = _gsScope.Power1;
const Power2 = _gsScope.Power2;
const Power3 = _gsScope.Power3;
const Power4 = _gsScope.Power4;
const TweenPlugin = _gsScope.TweenPlugin;
const EventDispatcher = gs.events.EventDispatcher;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module), __webpack_require__(7)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return TimelineLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineLite; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {

		var TimelineLite = function(vars) {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
					val, p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_internals = TimelineLite._internals = {},
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
				}
				delete vars.cycle;
			},
			_pauseCallback = _internals.pauseCallback = function() {},
			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			p = TimelineLite.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]();

		TimelineLite.version = "2.0.1";
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]).from(target, duration, vars), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				cycle = vars.cycle,
				copy, i;
			if (typeof(targets) === "string") {
				targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice(targets);
			}
			stagger = stagger || 0;
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (copy.startAt) {
					copy.startAt = _copy(copy.startAt);
					if (copy.startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				tl.to(targets[i], duration, copy, i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = (vars.immediateRender != false);
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = (position === this._time && !this._paused);
			}
			return this.add( new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"](target, 0, vars), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				hasNegativeStart, time,	tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"] && tween.target === tween.vars.onComplete)) {
					time = tween._startTime - tween._delay;
					if (time < 0) {
						hasNegativeStart = 1;
					}
					tl.add(tween, time);
				}
				tween = next;
			}
			root.add(tl, 0);
			if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
				tl.totalDuration();
			}
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"])) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						this.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof(value) === "string") {
					return this.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype.add.call(this, value, position);

			if (value._time) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
				value.render((this.rawTime() - value._startTime) * value._timeScale, false, false);
			}

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function(value) {
			if (value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > this.duration()) {
				this._time = this._duration;
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			var t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var clippedDuration, i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			clippedDuration = (typeof(timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : clippedDuration;
			} else if (timeOrLabel == null) {
				timeOrLabel = clippedDuration;
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var prevTime = this._time,
				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevPaused = this._paused,
				tween, isComplete, next, callback, internalForce, pauseTween, curTime;
			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
				time += this._time - prevTime;
			}
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					if (time >= prevTime) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var disabled = this._gc,
				a = [],
				cnt = 0,
				tweens, i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function() {
			return this._recent;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.invalidate.call(this);;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						tween = this._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
							this.add(tween, tween._startTime - tween._delay);
							this._calculatingDuration = 0;
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
								this._time -= tween._startTime;
								this._totalTime -= tween._startTime;
								this._rawPrevTime -= tween._startTime;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
		};

		p.paused = function(value) {
			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first,
					time = this._time;
				while (tween) {
					if (tween._startTime === time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline);
		};

		p.rawTime = function(wrapRepeats) {
			return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);

const TimelineLite = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].TimelineLite;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return TimelineMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */




_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function() {
		
		var TimelineMax = function(vars) {
				_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, vars);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true);
				this._dirty = true;
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_easeNone = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](null, null, 1, 0),
			p = TimelineMax.prototype = new _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
			
		p.constructor = TimelineMax;
		p.kill()._gc = false;
		TimelineMax.version = "2.0.1";
		
		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
		};
		
		p.addCallback = function(callback, position, params, scope) {
			return this.add( _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
		};
		
		p.removeCallback = function(callback, position) {
			if (callback) {
				if (position == null) {
					this._kill(null, callback);
				} else {
					var a = this.getTweensOf(callback, false),
						i = a.length,
						time = this._parseTimeOrLabel(position);
					while (--i > -1) {
						if (a[i]._startTime === time) {
							a[i]._enabled(false, false);
						}
					}
				}
			}
			return this;
		};

		p.removePause = function(position) {
			return this.removeCallback(_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]._internals.pauseCallback, position);
		};

		p.tweenTo = function(position, vars) {
			vars = vars || {};
			var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false, lazy:false},
				Engine = (vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"],
				duration, p, t;
			for (p in vars) {
				copy[p] = vars[p];
			}
			copy.time = this._parseTimeOrLabel(position);
			duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
			t = new Engine(this, duration, copy);
			copy.onStart = function() {
				t.target.paused(true);
				if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
					t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale ).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
				}
				if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
					vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
				}
			};
			return t;
		};

		p.tweenFromTo = function(fromPosition, toPosition, vars) {
			vars = vars || {};
			fromPosition = this._parseTimeOrLabel(fromPosition);
			vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], callbackScope:this};
			vars.immediateRender = (vars.immediateRender !== false);
			var t = this.tweenTo(toPosition, vars);
			t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
			return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
		};
		
		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var prevTime = this._time,
				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				dur = this._duration,
				prevTotalTime = this._totalTime,
				prevStart = this._startTime, 
				prevTimeScale = this._timeScale, 
				prevRawPrevTime = this._rawPrevTime,
				prevPaused = this._paused, 
				prevCycle = this._cycle, 
				tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime;
			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
				time += this._time - prevTime;
			}
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				if (!this._locked) {
					this._totalTime = totalDur;
					this._cycle = this._repeat;
				}
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
						internalForce = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = time = 0;
				} else {
					this._time = dur;
					time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
				}
				
			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				if (!this._locked) {
					this._totalTime = this._cycle = 0;
				}
				this._time = 0;
				if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) {
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (prevRawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}
				
			} else {
				if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
					internalForce = true;
				}
				this._time = this._rawPrevTime = time;
				if (!this._locked) {
					this._totalTime = time;
					if (this._repeat !== 0) {
						cycleDuration = dur + this._repeatDelay;
						this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						this._time = this._totalTime - (this._cycle * cycleDuration);
						if (this._yoyo) if ((this._cycle & 1) !== 0) {
							this._time = dur - this._time;
						}
						if (this._time > dur) {
							this._time = dur;
							time = dur + 0.0001; //to avoid occasional floating point rounding error
						} else if (this._time < 0) {
							this._time = time = 0;
						} else {
							time = this._time;
						}
					}
				}

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					time = this._time;
					if (time >= prevTime || (this._repeat && prevCycle !== this._cycle)) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween && pauseTween._startTime < dur) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

			}
			
			if (this._cycle !== prevCycle) if (!this._locked) {
				/*
				make sure children at the end/beginning of the timeline are rendered properly. If, for example, 
				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
				would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So 
				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work. 
				*/
				var backwards = (this._yoyo && (prevCycle & 1) !== 0),
					wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
					recTotalTime = this._totalTime,
					recCycle = this._cycle,
					recRawPrevTime = this._rawPrevTime,
					recTime = this._time;
				
				this._totalTime = prevCycle * dur;
				if (this._cycle < prevCycle) {
					backwards = !backwards;
				} else {
					this._totalTime += dur;
				}
				this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.
				
				this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
				this._cycle = prevCycle;
				this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
				prevTime = (backwards) ? 0 : dur;
				this.render(prevTime, suppressEvents, (dur === 0));
				if (!suppressEvents) if (!this._gc) {
					if (this.vars.onRepeat) {
						this._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
						this._locked = false;
						this._callback("onRepeat");
					}
				}
				if (prevTime !== this._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
					return;
				}
				if (wrap) {
					this._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
					this._locked = true;
					prevTime = (backwards) ? dur + 0.0001 : -0.0001;
					this.render(prevTime, true, false);
				}
				this._locked = false;
				if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
					return;
				}
				this._time = recTime;
				this._totalTime = recTotalTime;
				this._cycle = recCycle;
				this._rawPrevTime = recRawPrevTime;
			}

			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._callback("onUpdate");
				}
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}
			
			if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}
			
			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}
			if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};
		
		p.getActive = function(nested, tweens, timelines) {
			if (nested == null) {
				nested = true;
			}
			if (tweens == null) {
				tweens = true;
			}
			if (timelines == null) {
				timelines = false;
			}
			var a = [], 
				all = this.getChildren(nested, tweens, timelines), 
				cnt = 0, 
				l = all.length,
				i, tween;
			for (i = 0; i < l; i++) {
				tween = all[i];
				if (tween.isActive()) {
					a[cnt++] = tween;
				}
			}
			return a;
		};
		
		
		p.getLabelAfter = function(time) {
			if (!time) if (time !== 0) { //faster than isNan()
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				l = labels.length,
				i;
			for (i = 0; i < l; i++) {
				if (labels[i].time > time) {
					return labels[i].name;
				}
			}
			return null;
		};
		
		p.getLabelBefore = function(time) {
			if (time == null) {
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				i = labels.length;
			while (--i > -1) {
				if (labels[i].time < time) {
					return labels[i].name;
				}
			}
			return null;
		};
		
		p.getLabelsArray = function() {
			var a = [],
				cnt = 0,
				p;
			for (p in this._labels) {
				a[cnt++] = {time:this._labels[p], name:p};
			}
			a.sort(function(a,b) {
				return a.time - b.time;
			});
			return a;
		};

		p.invalidate = function() {
			this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
			return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
		};

		
//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------
		
		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? (this._time / this.duration()) || 0 : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};
		
		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? (this._totalTime / this.totalDuration()) || 0 : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.totalDuration.call(this); //just forces refresh
					//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
				}
				return this._totalDuration;
			}
			return (this._repeat === -1 || !value) ? this : this.timeScale( this.totalDuration() / value );
		};
		
		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};
		
		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};
		
		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};
		
		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};
		
		p.currentLabel = function(value) {
			if (!arguments.length) {
				return this.getLabelBefore(this._time + 0.00000001);
			}
			return this.seek(value, true);
		};
		
		return TimelineMax;
		
	}, true);

const TimelineMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].TimelineMax;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony import */ var _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _EasePack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/












//the following two lines are designed to prevent tree shaking of the classes that were historically included with TweenMax (otherwise, folks would have to reference CSSPlugin, for example, to ensure their CSS-related animations worked)
const TweenMax = _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__["default"];
TweenMax._autoActivated = [_TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__["default"], _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__["default"], _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__["default"], _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__["default"], _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"], _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"], _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]];





/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMaxBase", function() { return TweenMaxBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/




_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {

		var _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
				}
				delete vars.cycle;
			},
			TweenMax = function(target, duration, vars) {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, target, duration, vars);
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				if (this._repeat) {
					this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
				}
				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			p = TweenMax.prototype = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to({}, 0.1, {}),
			_blankArray = [];

		TweenMax.version = "2.0.1";
		p.constructor = TweenMax;
		p.kill()._gc = false;
		TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf;
		TweenMax.getTweensOf = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf;
		TweenMax.lagSmoothing = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].lagSmoothing;
		TweenMax.ticker = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker;
		TweenMax.render = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].render;

		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._yoyoEase = null;
			this._uncache(true);
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.invalidate.call(this);
		};

		p.updateTo = function(vars, resetDuration) {
			var curRatio = this.ratio,
				immediate = this.vars.immediateRender || vars.immediateRender,
				p;
			if (resetDuration && this._startTime < this._timeline._time) {
				this._startTime = this._timeline._time;
				this._uncache(false);
				if (this._gc) {
					this._enabled(true, false);
				} else {
					this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			for (p in vars) {
				this.vars[p] = vars[p];
			}
			if (this._initted || immediate) {
				if (resetDuration) {
					this._initted = false;
					if (immediate) {
						this.render(0, true, true);
					}
				} else {
					if (this._gc) {
						this._enabled(true, false);
					}
					if (this._notifyPluginsOfEnabled && this._firstPT) {
						_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
					}
					if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
						var prevTime = this._totalTime;
						this.render(0, true, false);
						this._initted = false;
						this.render(prevTime, true, false);
					} else {
						this._initted = false;
						this._init();
						if (this._time > 0 || immediate) {
							var inv = 1 / (1 - curRatio),
								pt = this._firstPT, endValue;
							while (pt) {
								endValue = pt.s + pt.c;
								pt.c *= inv;
								pt.s = endValue - pt.c;
								pt = pt._next;
							}
						}
					}
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
				this.invalidate();
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevTotalTime = this._totalTime,
				prevCycle = this._cycle,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, yoyoEase;
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = totalDur;
				this._cycle = this._repeat;
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				} else {
					this._time = duration;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				}
				if (!this._reversed) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = this._cycle = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;
				if (this._repeat !== 0) {
					cycleDuration = duration + this._repeatDelay;
					this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
					if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
						this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
					}
					this._time = this._totalTime - (this._cycle * cycleDuration);
					if (this._yoyo) if ((this._cycle & 1) !== 0) {
						this._time = duration - this._time;
						yoyoEase = this._yoyoEase || this.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.
						if (yoyoEase) {
							if (!this._yoyoEase) {
								if (yoyoEase === true && !this._initted) { //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
									yoyoEase = this.vars.ease;
									this._yoyoEase = yoyoEase = !yoyoEase ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase : (yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? yoyoEase : (typeof(yoyoEase) === "function") ? new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](yoyoEase, this.vars.easeParams) : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase] || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase;
								} else {
									this._yoyoEase = yoyoEase = (yoyoEase === true) ? this._ease : (yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? yoyoEase : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase];
								}
							}
							this.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - this._time) / duration) : 0;
						}
					}
					if (this._time > duration) {
						this._time = duration;
					} else if (this._time < 0) {
						this._time = 0;
					}
				}
				if (this._easeType && !yoyoEase) {
					r = this._time / duration;
					type = this._easeType;
					pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (this._time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else if (!yoyoEase) {
					this.ratio = this._ease.getRatio(this._time / duration);
				}

			}

			if (prevTime === this._time && !force && prevCycle === this._cycle) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._callback("onUpdate");
				}
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
					this._time = prevTime;
					this._totalTime = prevTotalTime;
					this._rawPrevTime = prevRawPrevTime;
					this._cycle = prevCycle;
					TweenLiteInternals.lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete && !yoyoEase) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd && !yoyoEase) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) {
				this._lazy = false;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTotalTime === 0) {
				if (this._initted === 2 && time > 0) {
					//this.invalidate();
					this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
				}
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}

			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
					this._callback("onUpdate");
				}
			}
			if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
				this._callback("onRepeat");
			}
			if (callback) if (!this._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------

		TweenMax.to = function(target, duration, vars) {
			return new TweenMax(target, duration, vars);
		};

		TweenMax.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenMax(target, duration, vars);
		};

		TweenMax.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenMax(target, duration, toVars);
		};

		TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			stagger = stagger || 0;
			var delay = 0,
				a = [],
				finalComplete = function() {
					if (vars.onComplete) {
						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
					}
					onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
				},
				cycle = vars.cycle,
				fromCycle = (vars.startAt && vars.startAt.cycle),
				l, copy, i, p;
			if (!_isArray(targets)) {
				if (typeof(targets) === "string") {
					targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
				}
				if (_isSelector(targets)) {
					targets = _slice(targets);
				}
			}
			targets = targets || [];
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			l = targets.length - 1;
			for (i = 0; i <= l; i++) {
				copy = {};
				for (p in vars) {
					copy[p] = vars[p];
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				if (fromCycle) {
					fromCycle = copy.startAt = {};
					for (p in vars.startAt) {
						fromCycle[p] = vars.startAt[p];
					}
					_applyCycle(copy.startAt, targets, i);
				}
				copy.delay = delay + (copy.delay || 0);
				if (i === l && onCompleteAll) {
					copy.onComplete = finalComplete;
				}
				a[i] = new TweenMax(targets[i], duration, copy);
				delay += stagger;
			}
			return a;
		};

		TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, useFrames:useFrames, overwrite:0});
		};

		TweenMax.set = function(target, vars) {
			return new TweenMax(target, 0, vars);
		};

		TweenMax.isTweening = function(target) {
			return (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target, true).length > 0);
		};

		var _getChildrenOf = function(timeline, includeTimelines) {
				var a = [],
					cnt = 0,
					tween = timeline._first;
				while (tween) {
					if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
						a[cnt++] = tween;
					} else {
						if (includeTimelines) {
							a[cnt++] = tween;
						}
						a = a.concat(_getChildrenOf(tween, includeTimelines));
						cnt = a.length;
					}
					tween = tween._next;
				}
				return a;
			},
			getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
				return _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline, includeTimelines).concat( _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline, includeTimelines) );
			};

		TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
			if (tweens == null) {
				tweens = true;
			}
			if (delayedCalls == null) {
				delayedCalls = true;
			}
			var a = getAllTweens((timelines != false)),
				l = a.length,
				allTrue = (tweens && delayedCalls && timelines),
				isDC, tween, i;
			for (i = 0; i < l; i++) {
				tween = a[i];
				if (allTrue || (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					if (complete) {
						tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
					} else {
						tween._enabled(false, false);
					}
				}
			}
		};

		TweenMax.killChildTweensOf = function(parent, complete) {
			if (parent == null) {
				return;
			}
			var tl = TweenLiteInternals.tweenLookup,
				a, curParent, p, i, l;
			if (typeof(parent) === "string") {
				parent = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(parent) || parent;
			}
			if (_isSelector(parent)) {
				parent = _slice(parent);
			}
			if (_isArray(parent)) {
				i = parent.length;
				while (--i > -1) {
					TweenMax.killChildTweensOf(parent[i], complete);
				}
				return;
			}
			a = [];
			for (p in tl) {
				curParent = tl[p].target.parentNode;
				while (curParent) {
					if (curParent === parent) {
						a = a.concat(tl[p].tweens);
					}
					curParent = curParent.parentNode;
				}
			}
			l = a.length;
			for (i = 0; i < l; i++) {
				if (complete) {
					a[i].totalTime(a[i].totalDuration());
				}
				a[i]._enabled(false, false);
			}
		};

		var _changePause = function(pause, tweens, delayedCalls, timelines) {
			tweens = (tweens !== false);
			delayedCalls = (delayedCalls !== false);
			timelines = (timelines !== false);
			var a = getAllTweens(timelines),
				allTrue = (tweens && delayedCalls && timelines),
				i = a.length,
				isDC, tween;
			while (--i > -1) {
				tween = a[i];
				if (allTrue || (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					tween.paused(pause);
				}
			}
		};

		TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
			_changePause(true, tweens, delayedCalls, timelines);
		};

		TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
			_changePause(false, tweens, delayedCalls, timelines);
		};

		TweenMax.globalTimeScale = function(value) {
			var tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline,
				t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.time;
			if (!arguments.length) {
				return tl._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline;
			t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl._timeScale = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline._timeScale = value;
			return value;
		};


//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------

		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};

		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};

		p.duration = function(value) {
			if (!arguments.length) {
				return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.duration.call(this, value);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					//instead of Infinity, we use 999999999999 so that we can accommodate reverses
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
		};

		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};

		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};

		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};


		return TweenMax;

	}, true);

const TweenMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].TweenMax;
const TweenMaxBase = TweenMax;




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return CSSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


	_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function() {

		/** @constructor **/
		var CSSPlugin = function() {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.20.5";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_dummyElement = {style:{}},
			_doc = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document || {createElement: function() {return _dummyElement;}},
			_createElement = function(type, ns) {
				return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator || {}).userAgent || "",
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].console) {
					console.log(s);
				}
			},
			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}).getComputedStyle,

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || (!sfx && p !== "lineHeight")) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					precise = (v === 1),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (precise) {
					v *= 100;
				}
				if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
					cache = _getComputedStyle(t).lineHeight;
					t.style.lineHeight = v;
					pix = parseFloat(_getComputedStyle(t).lineHeight);
					t.style.lineHeight = cache;
				} else if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
							style.position = "absolute";
						}
						cache = node._gsCache;
						time = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				if (precise) {
					pix /= 100;
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
					return (cs || _getComputedStyle(t))[p] || 0;
				} else if (t.getCTM && _isSVG(t)) {
					return t.getBBox()[p] || 0;
				}
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					return v + " ";
				}
				if (v == null || v === "") {
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
					i;
				if (a.length > 3 && !recObj) { //multiple positions
					a = v.split(", ").join(",").split(",");
					v = [];
					for (i = 0; i < a.length; i++) {
						v.push(_parsePosition(a[i]));
					}
					return v.join(",");
				}
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(a[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = "",
					i, color, temp;
				if (!colors.length) {
					return s;
				}
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed + s.substr(charIndex);
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + " " + a[1],
				toHSL;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
			_colorExp.lastIndex = 0;
		};

		if (!_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter) {
			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str, p;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = mpt.r(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
				if (v === 1 || v === 0) {
					mpt = d.firstMPT;
					p = (v === 1) ? "e" : "b";
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt[p] = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt[p] = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = !r ? r : (typeof(r) === "function") ? r : Math.round; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
					e = [b, e];
					CSSPlugin.colorStringFilter(e);
					b = e[0];
					e = e[1];
				}
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					} else {
						ba = ba.join(" ").split(",").join(", ").split(" ");
						ea = ea.join(" ").split(",").join(", ").split(" ");
					}
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i] + "";
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1) ? Math.round : false, true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.indexOf(")") + 1;
						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						temp = ev; //original string value so we can look for any prefix later.
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), Math.round);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px") ? Math.round : false, (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = _internals._registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement || {},
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].chrome),
					svg, rect, width;
				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
					}
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
						xOrigin = decoratee.xOrigin = v[0] = x;
						yOrigin = decoratee.yOrigin = v[1] = y;
					}
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (skipRecord) {
						decoratee.xOffset = tm.xOffset;
						decoratee.yOffset = tm.yOffset;
						tm = decoratee;
					}
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				if (!skipRecord) {
					e.setAttribute("data-svg-origin", v.join(" "));
				}
			},
			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
				var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
					oldParent = this.parentNode,
					oldSibling = this.nextSibling,
					oldCSS = this.style.cssText,
					bbox;
				_docElement.appendChild(svg);
				svg.appendChild(this);
				this.style.display = "block";
				if (swapIfPossible) {
					try {
						bbox = this.getBBox();
						this._originalGetBBox = this.getBBox;
						this.getBBox = _getBBoxHack;
					} catch (e) { }
				} else if (this._originalGetBBox) {
					bbox = this._originalGetBBox();
				}
				if (oldSibling) {
					oldParent.insertBefore(this, oldSibling);
				} else {
					oldParent.appendChild(this);
				}
				_docElement.removeChild(svg);
				this.style.cssText = oldCSS;
				return bbox;
			},
			_getBBox = function(e) {
				try {
					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
				} catch (error) {
					return _getBBoxHack.call(e, true);
				}
			},
			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
				return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					style = e.style,
					isDefault, s, m, n, dec, none;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (_transformProp && ((none = (!_getComputedStyle(e) || _getComputedStyle(e).display === "none")) || !e.parentNode)) { //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
					if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
						n = style.display;
						style.display = "block";
					}
					if (!e.parentNode) {
						dec = 1; //flag
						_docElement.appendChild(e);
					}
					s = _getStyle(e, _transformPropCSS, null, true);
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					if (n) {
						style.display = n;
					} else if (none) {
						_removeProp(style, "display");
					}
					if (dec) {
						_docElement.removeChild(e);
					}
				}
				if (tm.svg || (e.getCTM && _isSVG(e))) {
					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
						s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
						isDefault = 0;
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(_numExp) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getCTM && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;
						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(-a31, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(angle);
							sin = Math.sin(angle);
							t1 = a11*cos+a21*sin;
							t2 = a12*cos+a22*sin;
							t3 = a13*cos+a23*sin;
							a21 = a21*cos-a11*sin;
							a22 = a22*cos-a12*sin;
							a23 = a23*cos-a13*sin;
							a11 = t1;
							a12 = t2;
							a13 = t3;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY = 180 - tm.rotationY;
						}

						//skewX
						angle = Math.atan2(a12, a22);

						//scales
						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						a11 /= tm.scaleX;
						a12 /= tm.scaleY;
						a21 /= tm.scaleX;
						a22 /= tm.scaleY;
						if (Math.abs(angle) > min) {
							tm.skewX = angle * _RAD2DEG;
							a12 = 0; //unskews
							if (tm.skewType !== "simple") {
								tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
							}

						} else {
							tm.skewX = 0;
						}

						/* //for testing purposes
						var transform = "matrix3d(",
							comma = ",",
							zero = "0";
						a13 /= tm.scaleZ;
						a23 /= tm.scaleZ;
						a31 /= tm.scaleX;
						a32 /= tm.scaleY;
						a33 /= tm.scaleZ;
						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
						console.log(transform);
						document.querySelector(".test").style[_transformProp] = transform;
						*/

						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
						if (invX) {
							tm.scaleX *= -1;
							tm.skewX += (tm.rotation <= 0) ? 180 : -180;
							tm.rotation += (tm.rotation <= 0) ? 180 : -180;
						} else {
							tm.scaleY *= -1;
							tm.skewX += (tm.skewX <= 0) ? 180 : -180;
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					skewY = t.skewY,
					skewX = t.skewX,
					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
					skewX += skewY;
					angle += skewY;
				}

				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew - skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (skewX) {
						angle -= skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS a[row][column]
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0, //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
				swapFunc;
			if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
				swapFunc = vars[parsingProp];
				vars[parsingProp] = e;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc(_index, t);
			}
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1 = _getTransform(t, _cs, true, v.parseTransform),
				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
			cssp._transform = m1;
			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = orig;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				if (orig.indexOf("%") !== -1) { //%-based translations will fail unless we set the width/height to match the original target...
					copy.width = _getStyle(t, "width");
					copy.height = _getStyle(t, "height");
				}
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
				}
				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
					x = m1.xOrigin;
					y = m1.yOrigin;
					m2.x -= m1.xOffset;
					m2.y -= m1.yOffset;
					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
						orig = {};
						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
						x = orig.xOrigin;
						y = orig.yOrigin;
						m2.x -= orig.xOffset - m1.xOffset;
						m2.y -= orig.yOffset - m1.yOffset;
					}
					if (x || y) {
						matrix = _getMatrix(_tempDiv, true);
						m2.x -= x - (x * matrix[0] + y * matrix[2]);
						m2.y -= y - (x * matrix[1] + y * matrix[3]);
					}
				}
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = _parseAngle(v.skewX, m1.skewX);
				m2.skewY = _parseAngle(v.skewY, m1.skewY);
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			if (swapFunc) {
				vars[parsingProp] = swapFunc;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc;
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
			v += ""; //ensure it's a string
			return (v.substr(0,2) === "co") ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
		}});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
				end = this.format(e).split(" "),
				esfx = end[0].replace(_suffixExp, "");
			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
			}
			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
							this.t.removeAttribute("transform");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween, index) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = _target = target;
			this._tween = tween;
			this._vars = vars;
			_index = index;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				if (typeof(es) === "function") {
					es = es(_index, _target);
				}
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);
				} else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
					this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
					continue;
				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && _complexExp.test(es)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = pt.r(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = pt.r(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		p._mod = function(lookup) {
			var pt = this._firstPT;
			while (pt) {
				if (typeof(lookup[pt.p]) === "function") { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
					pt.r = lookup[pt.p];
				}
				pt = pt._next;
			}
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
					pt.plugin._kill(lookup);
					p = pt.plugin;
				}
				pt = pt._next;
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].activate([CSSPlugin]);
		return CSSPlugin;

	}, true);

const CSSPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].CSSPlugin;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return AttrPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttrPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * VERSION: 0.6.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */



const AttrPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
	propName: "attr",
	API: 2,
	version: "0.6.1",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function(target, value, tween, index) {
		var p, end;
		if (typeof(target.setAttribute) !== "function") {
			return false;
		}
		for (p in value) {
			end = value[p];
			if (typeof(end) === "function") {
				end = end(index, target);
			}
			this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
			this._overwriteProps.push(p);
		}
		return true;
	}

});







/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return RoundPropsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getRoundFunc", function() { return _getRoundFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_roundLinkedList", function() { return _roundLinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundPropsPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * VERSION: 1.6.0
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


const RoundPropsPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
				propName: "roundProps",
				version: "1.7.0",
				priority: -1,
				API: 2,

				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function(target, value, tween) {
					this._tween = tween;
					return true;
				}

			}),
			_getRoundFunc = function(v) { //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
				var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
				return function(n) {
					return ((Math.round(n / v) * v * p) | 0) / p;
				};
			},
			_roundLinkedList = function(node, mod) {
				while (node) {
					if (!node.f && !node.blob) {
						node.m = mod || Math.round;
					}
					node = node._next;
				}
			},
			p = RoundPropsPlugin.prototype;

		p._onInitAllProps = function() {
			var tween = this._tween,
				rp = tween.vars.roundProps,
				lookup = {},
				rpt = tween._propLookup.roundProps,
				pt, next, i, p;
			if (typeof(rp) === "object" && !rp.push) {
				for (p in rp) {
					lookup[p] = _getRoundFunc(rp[p]);
				}
			} else {
				if (typeof(rp) === "string") {
					rp = rp.split(",");
				}
				i = rp.length;
				while (--i > -1) {
					lookup[rp[i]] = Math.round;
				}
			}

			for (p in lookup) {
				pt = tween._firstPT;
				while (pt) {
					next = pt._next; //record here, because it may get removed
					if (pt.pg) {
						pt.t._mod(lookup);
					} else if (pt.n === p) {
						if (pt.f === 2 && pt.t) { //a blob (text containing multiple numeric values)
							_roundLinkedList(pt.t._firstPT, lookup[p]);
						} else {
							this._add(pt.t, p, pt.s, pt.c, lookup[p]);
							//remove from linked list
							if (next) {
								next._prev = pt._prev;
							}
							if (pt._prev) {
								pt._prev._next = next;
							} else if (tween._firstPT === pt) {
								tween._firstPT = next;
							}
							pt._next = pt._prev = null;
							tween._propLookup[p] = rpt;
						}
					}
					pt = next;
				}
			}
			return false;
		};

		p._add = function(target, p, s, c, mod) {
			this._addTween(target, p, s, s + c, p, mod || Math.round);
			this._overwriteProps.push(p);
		};




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return DirectionalRotationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectionalRotationPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * VERSION: 0.3.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/



const DirectionalRotationPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
		propName: "directionalRotation",
		version: "0.3.1",
		API: 2,

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween, index) {
			if (typeof(value) !== "object") {
				value = {rotation:value};
			}
			this.finals = {};
			var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
				min = 0.000001,
				p, v, start, end, dif, split;
			for (p in value) {
				if (p !== "useRadians") {
					end = value[p];
					if (typeof(end) === "function") {
						end = end(index, target);
					}
					split = (end + "").split("_");
					v = split[0];
					start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
					end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
					dif = end - start;
					if (split.length) {
						v = split.join("_");
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					if (dif > min || dif < -min) {
						this._addTween(target, p, start, start + dif, p);
						this._overwriteProps.push(p);
					}
				}
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			var pt;
			if (ratio !== 1) {
				this._super.setRatio.call(this, ratio);
			} else {
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](this.finals[pt.p]);
					} else {
						pt.t[pt.p] = this.finals[pt.p];
					}
					pt = pt._next;
				}
			}
		}

	});

DirectionalRotationPlugin._autoCSS = true;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return BezierPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BezierPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


		var _RAD2DEG = 180 / Math.PI,
			_r1 = [],
			_r2 = [],
			_r3 = [],
			_corProps = {},
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			Segment = function(a, b, c, d) {
				if (c === d) { //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
					c = d - (d - b) / 1000000;
				}
				if (a === b) { //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
					b = a + (c - a) / 1000000;
				}
				this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
				this.da = d - a;
				this.ca = c - a;
				this.ba = b - a;
			},
			_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			cubicToQuadratic = function(a, b, c, d) {
				var q1 = {a:a},
					q2 = {},
					q3 = {},
					q4 = {c:d},
					mab = (a + b) / 2,
					mbc = (b + c) / 2,
					mcd = (c + d) / 2,
					mabc = (mab + mbc) / 2,
					mbcd = (mbc + mcd) / 2,
					m8 = (mbcd - mabc) / 8;
				q1.b = mab + (a - mab) / 4;
				q2.b = mabc + m8;
				q1.c = q2.a = (q1.b + q2.b) / 2;
				q2.c = q3.a = (mabc + mbcd) / 2;
				q3.b = mbcd - m8;
				q4.b = mcd + (d - mcd) / 4;
				q3.c = q4.a = (q3.b + q4.b) / 2;
				return [q1, q2, q3, q4];
			},
			_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
				var l = a.length - 1,
					ii = 0,
					cp1 = a[0].a,
					i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
				for (i = 0; i < l; i++) {
					seg = a[ii];
					p1 = seg.a;
					p2 = seg.d;
					p3 = a[ii+1].d;

					if (correlate) {
						r1 = _r1[i];
						r2 = _r2[i];
						tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
						mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
					} else {
						m1 = p2 - (p2 - p1) * curviness * 0.5;
						m2 = p2 + (p3 - p2) * curviness * 0.5;
						mm = p2 - (m1 + m2) / 2;
					}
					m1 += mm;
					m2 += mm;

					seg.c = cp2 = m1;
					if (i !== 0) {
						seg.b = cp1;
					} else {
						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
					}

					seg.da = p2 - p1;
					seg.ca = cp2 - p1;
					seg.ba = cp1 - p1;

					if (quad) {
						qb = cubicToQuadratic(p1, cp1, cp2, p2);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
						ii += 4;
					} else {
						ii++;
					}

					cp1 = m2;
				}
				seg = a[ii];
				seg.b = cp1;
				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
				seg.da = seg.d - seg.a;
				seg.ca = seg.c - seg.a;
				seg.ba = cp1 - seg.a;
				if (quad) {
					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
				}
			},
			_parseAnchors = function(values, p, correlate, prepend) {
				var a = [],
					l, i, p1, p2, p3, tmp;
				if (prepend) {
					values = [prepend].concat(values);
					i = values.length;
					while (--i > -1) {
						if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
						}
					}
				}
				l = values.length - 2;
				if (l < 0) {
					a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
					return a;
				}
				for (i = 0; i < l; i++) {
					p1 = values[i][p];
					p2 = values[i+1][p];
					a[i] = new Segment(p1, 0, 0, p2);
					if (correlate) {
						p3 = values[i+2][p];
						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
					}
				}
				a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
				return a;
			},
			bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
				var obj = {},
					props = [],
					first = prepend || values[0],
					i, p, a, j, r, l, seamless, last;
				correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
				if (curviness == null) {
					curviness = 1;
				}
				for (p in values[0]) {
					props.push(p);
				}
				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
				if (values.length > 1) {
					last = values[values.length - 1];
					seamless = true;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors.
							seamless = false;
							break;
						}
					}
					if (seamless) {
						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
						if (prepend) {
							values.unshift(prepend);
						}
						values.push(values[1]);
						prepend = values[values.length - 3];
					}
				}
				_r1.length = _r2.length = _r3.length = 0;
				i = props.length;
				while (--i > -1) {
					p = props[i];
					_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
				}
				i = _r1.length;
				while (--i > -1) {
					_r1[i] = Math.sqrt(_r1[i]);
					_r2[i] = Math.sqrt(_r2[i]);
				}
				if (!basic) {
					i = props.length;
					while (--i > -1) {
						if (_corProps[p]) {
							a = obj[props[i]];
							l = a.length - 1;
							for (j = 0; j < l; j++) {
								r = (a[j+1].da / _r2[j] + a[j].da / _r1[j]) || 0;
								_r3[j] = (_r3[j] || 0) + r * r;
							}
						}
					}
					i = _r3.length;
					while (--i > -1) {
						_r3[i] = Math.sqrt(_r3[i]);
					}
				}
				i = props.length;
				j = quadratic ? 4 : 1;
				while (--i > -1) {
					p = props[i];
					a = obj[p];
					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
					if (seamless) {
						a.splice(0, j);
						a.splice(a.length - j, j);
					}
				}
				return obj;
			},
			_parseBezierData = function(values, type, prepend) {
				type = type || "soft";
				var obj = {},
					inc = (type === "cubic") ? 3 : 2,
					soft = (type === "soft"),
					props = [],
					a, b, c, d, cur, i, j, l, p, cnt, tmp;
				if (soft && prepend) {
					values = [prepend].concat(values);
				}
				if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
				for (p in values[0]) {
					props.push(p);
				}
				i = props.length;
				while (--i > -1) {
					p = props[i];
					obj[p] = cur = [];
					cnt = 0;
					l = values.length;
					for (j = 0; j < l; j++) {
						a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
						if (soft) if (j > 1) if (j < l - 1) {
							cur[cnt++] = (a + cur[cnt-2]) / 2;
						}
						cur[cnt++] = a;
					}
					l = cnt - inc + 1;
					cnt = 0;
					for (j = 0; j < l; j += inc) {
						a = cur[j];
						b = cur[j+1];
						c = cur[j+2];
						d = (inc === 2) ? 0 : cur[j+3];
						cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
					}
					cur.length = cnt;
				}
				return obj;
			},
			_addCubicLengths = function(a, steps, resolution) {
				var inc = 1 / resolution,
					j = a.length,
					d, d1, s, da, ca, ba, p, i, inv, bez, index;
				while (--j > -1) {
					bez = a[j];
					s = bez.a;
					da = bez.d - s;
					ca = bez.c - s;
					ba = bez.b - s;
					d = d1 = 0;
					for (i = 1; i <= resolution; i++) {
						p = inc * i;
						inv = 1 - p;
						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
						index = j * resolution + i - 1;
						steps[index] = (steps[index] || 0) + d * d;
					}
				}
			},
			_parseLengthData = function(obj, resolution) {
				resolution = resolution >> 0 || 6;
				var a = [],
					lengths = [],
					d = 0,
					total = 0,
					threshold = resolution - 1,
					segments = [],
					curLS = [], //current length segments array
					p, i, l, index;
				for (p in obj) {
					_addCubicLengths(obj[p], a, resolution);
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					d += Math.sqrt(a[i]);
					index = i % resolution;
					curLS[index] = d;
					if (index === threshold) {
						total += d;
						index = (i / resolution) >> 0;
						segments[index] = curLS;
						lengths[index] = total;
						d = 0;
						curLS = [];
					}
				}
				return {length:total, lengths:lengths, segments:segments};
			},



			BezierPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.8",
					API: 2,
					global:true,

					//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
					init: function(target, vars, tween) {
						this._target = target;
						if (vars instanceof Array) {
							vars = {values:vars};
						}
						this._func = {};
						this._mod = {};
						this._props = [];
						this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
						var values = vars.values || [],
							first = {},
							second = values[0],
							autoRotate = vars.autoRotate || tween.vars.orientToBezier,
							p, isFunc, i, j, prepend;

						this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
						for (p in second) {
							this._props.push(p);
						}

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];

							this._overwriteProps.push(p);
							isFunc = this._func[p] = (typeof(target[p]) === "function");
							first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
							if (!prepend) if (first[p] !== values[0][p]) {
								prepend = first;
							}
						}
						this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
						this._segCount = this._beziers[p].length;

						if (this._timeRes) {
							var ld = _parseLengthData(this._beziers, this._timeRes);
							this._length = ld.length;
							this._lengths = ld.lengths;
							this._segments = ld.segments;
							this._l1 = this._li = this._s1 = this._si = 0;
							this._l2 = this._lengths[0];
							this._curSeg = this._segments[0];
							this._s2 = this._curSeg[0];
							this._prec = 1 / this._curSeg.length;
						}

						if ((autoRotate = this._autoRotate)) {
							this._initialRotations = [];
							if (!(autoRotate[0] instanceof Array)) {
								this._autoRotate = autoRotate = [autoRotate];
							}
							i = autoRotate.length;
							while (--i > -1) {
								for (j = 0; j < 3; j++) {
									p = autoRotate[i][j];
									this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
								}
								p = autoRotate[i][2];
								this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
								this._overwriteProps.push(p);
							}
						}
						this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
						return true;
					},

					//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
					set: function(v) {
						var segments = this._segCount,
							func = this._func,
							target = this._target,
							notStart = (v !== this._startRatio),
							curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
						if (!this._timeRes) {
							curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
							t = (v - (curIndex * (1 / segments))) * segments;
						} else {
							lengths = this._lengths;
							curSeg = this._curSeg;
							v *= this._length;
							i = this._li;
							//find the appropriate segment (if the currently cached one isn't correct)
							if (v > this._l2 && i < segments - 1) {
								l = segments - 1;
								while (i < l && (this._l2 = lengths[++i]) <= v) {	}
								this._l1 = lengths[i-1];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s2 = curSeg[(this._s1 = this._si = 0)];
							} else if (v < this._l1 && i > 0) {
								while (i > 0 && (this._l1 = lengths[--i]) >= v) { }
								if (i === 0 && v < this._l1) {
									this._l1 = 0;
								} else {
									i++;
								}
								this._l2 = lengths[i];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
								this._s2 = curSeg[this._si];
							}
							curIndex = i;
							//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
							v -= this._l1;
							i = this._si;
							if (v > this._s2 && i < curSeg.length - 1) {
								l = curSeg.length - 1;
								while (i < l && (this._s2 = curSeg[++i]) <= v) {	}
								this._s1 = curSeg[i-1];
								this._si = i;
							} else if (v < this._s1 && i > 0) {
								while (i > 0 && (this._s1 = curSeg[--i]) >= v) {	}
								if (i === 0 && v < this._s1) {
									this._s1 = 0;
								} else {
									i++;
								}
								this._s2 = curSeg[i];
								this._si = i;
							}
							t = ((i + (v - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
						}
						inv = 1 - t;

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];
							b = this._beziers[p][curIndex];
							val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
							if (this._mod[p]) {
								val = this._mod[p](val, target);
							}
							if (func[p]) {
								target[p](val);
							} else {
								target[p] = val;
							}
						}

						if (this._autoRotate) {
							var ar = this._autoRotate,
								b2, x1, y1, x2, y2, add, conv;
							i = ar.length;
							while (--i > -1) {
								p = ar[i][2];
								add = ar[i][3] || 0;
								conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
								b = this._beziers[ar[i][0]];
								b2 = this._beziers[ar[i][1]];

								if (b && b2) { //in case one of the properties got overwritten.
									b = b[curIndex];
									b2 = b2[curIndex];

									x1 = b.a + (b.b - b.a) * t;
									x2 = b.b + (b.c - b.b) * t;
									x1 += (x2 - x1) * t;
									x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

									y1 = b2.a + (b2.b - b2.a) * t;
									y2 = b2.b + (b2.c - b2.b) * t;
									y1 += (y2 - y1) * t;
									y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

									val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

									if (this._mod[p]) {
										val = this._mod[p](val, target); //for modProps
									}

									if (func[p]) {
										target[p](val);
									} else {
										target[p] = val;
									}
								}
							}
						}
					}
			}),
			p = BezierPlugin.prototype;


		BezierPlugin.bezierThrough = bezierThrough;
		BezierPlugin.cubicToQuadratic = cubicToQuadratic;
		BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
		BezierPlugin.quadraticToCubic = function(a, b, c) {
			return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
		};

		BezierPlugin._cssRegister = function() {
			var CSSPlugin = _globals.CSSPlugin;
			if (!CSSPlugin) {
				return;
			}
			var _internals = CSSPlugin._internals,
				_parseToProxy = _internals._parseToProxy,
				_setPluginRatio = _internals._setPluginRatio,
				CSSPropTween = _internals.CSSPropTween;
			_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
				if (e instanceof Array) {
					e = {values:e};
				}
				plugin = new BezierPlugin();
				var values = e.values,
					l = values.length - 1,
					pluginValues = [],
					v = {},
					i, p, data;
				if (l < 0) {
					return pt;
				}
				for (i = 0; i <= l; i++) {
					data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
					pluginValues[i] = data.end;
				}
				for (p in e) {
					v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
				}
				v.values = pluginValues;
				pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
				pt.data = data;
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				if (v.autoRotate === 0) {
					v.autoRotate = true;
				}
				if (v.autoRotate && !(v.autoRotate instanceof Array)) {
					i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
					v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
				}
				if (v.autoRotate) {
					if (!cssp._transform) {
						cssp._enableTransforms(false);
					}
					data.autoRotate = cssp._target._gsTransform;
					data.proxy.rotation = data.autoRotate.rotation || 0;
					cssp._overwriteProps.push("rotation");
				}
				plugin._onInitTween(data.proxy, v, cssp._tween);
				return pt;
			}});
		};

		p._mod = function(lookup) {
			var op = this._overwriteProps,
				i = op.length,
				val;
			while (--i > -1) {
				val = lookup[op[i]];
				if (val && typeof(val) === "function") {
					this._mod[op[i]] = val;
				}
			}
		};

		p._kill = function(lookup) {
			var a = this._props,
				p, i;
			for (p in this._beziers) {
				if (p in lookup) {
					delete this._beziers[p];
					delete this._func[p];
					i = a.length;
					while (--i > -1) {
						if (a[i] === p) {
							a.splice(i, 1);
						}
					}
				}
			}
			a = this._autoRotate;
			if (a) {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i][2]]) {
						a.splice(i, 1);
					}
				}
			}
			return this._super._kill.call(this, lookup);
		};



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return Elastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return RoughEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return SlowMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return SteppedEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return Circ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return Expo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return Sine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return ExpoScaleEase; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/*!
 * VERSION: 1.16.0
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("easing.Back", ["easing.Ease"], function() {
		
		var w = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].GreenSockGlobals || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](),
			SteppedEase, ExpoScaleEase, RoughEase, _createElastic;
			
		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? (p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p) : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p); //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);
		
		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + (immediateStart ? 0 : 1);
				this._p3 = immediateStart ? 1 : 0;
			}, true);
		p = SteppedEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();	
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return (((this._p2 * p) | 0) + this._p3) * this._p1;
		};
		p.config = SteppedEase.config = function(steps, immediateStart) {
			return new SteppedEase(steps, immediateStart);
		};


		//ExpoScaleEase
		ExpoScaleEase = _class("easing.ExpoScaleEase", function(start, end, ease) {
			this._p1 = Math.log(end / start);
			this._p2 = end - start;
			this._p3 = start;
			this._ease = ease;
		}, true);
		p = ExpoScaleEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
		p.constructor = ExpoScaleEase;
		p.getRatio = function(p) {
			if (this._ease) {
				p = this._ease.getRatio(p);
			}
			return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
		};
		p.config = ExpoScaleEase.config = function(start, end, ease) {
			return new ExpoScaleEase(start, end, ease);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");
		
		return Back;
		
	}, true);

const Back = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Back;
const Elastic = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Elastic;
const Bounce = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Bounce;
const RoughEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].RoughEase;
const SlowMo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SlowMo;
const SteppedEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SteppedEase;
const Circ = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Circ;
const Expo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Expo;
const Sine = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Sine;
const ExpoScaleEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].ExpoScaleEase;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildList", function() { return buildList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildListContent", function() { return buildListContent; });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


/*

  All functions in this file return a HTML element ready to be appended
  to the DOM by another function somewhere else

  ++ Each one should accept full JSON object i.e:

  {
    _id: "diva786sc7ds6cd76cd9",
    title: "Important item",
    parent: "sdfdsac987c98ds7c9sa"
  }

*/

function buildList(data) {
  const list = document.createElement('div');
  list.classList = "list list--closed";
  list.dataset.id = data._id;
  const title = data.title;
  list.innerHTML = `
    <div class="list__header">
      <h3 class="list__title">${title}</h3>
      <i class="fas fa-cog list__open" rel="js-list-open"></i>
    </div>`;
  return list;
}


function buildListContent(items){
  const el = document.createElement('div');
  el.classList = "list__content"; 
  el.setAttribute('rel', 'js-list-content');
  el.innerHTML = `    
    <div class="list__options">
      <form>
        <input name="item-title" type="text" rel="js-add-item-input">
        <button class="button" rel="js-add-item">Add Item</button>
      </form>
    </div>`;
  // build and append list items based on ajax data
  // data from ajax call
  if (items.length > 0) {
    const optionsEl = el.querySelector('.list__options');
    items.forEach(item => {
      el.insertBefore(buildListItem(item), optionsEl);
    })  
  }
  return el;
}

function buildListItem(item){
  const title = item.title;
  const el = document.createElement('div');
  el.innerHTML = `
    <span>${title}</span>`;
  return el;
}

 

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserDB", function() { return deleteUserDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveItemDB", function() { return saveItemDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveListDB", function() { return saveListDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListsDB", function() { return getListsDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsDB", function() { return getItemsDB; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _flashes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);





function deleteUserDB(event) {
  const id = event.target.dataset.id;
  const parent = document.querySelector(`div[data-id="${id}"]`)
  const url = "/users";
  axios__WEBPACK_IMPORTED_MODULE_0___default()({ method: 'delete', url: `${url}`, data: { id: id } })
    .then(response => {
      if (response.data.complete) {
        Object(_flashes__WEBPACK_IMPORTED_MODULE_2__["renderFlash"])("success");
        parent.parentElement.removeChild(parent);
        Object(_DOM__WEBPACK_IMPORTED_MODULE_1__["hideModal"])();
      } else {
        console.log(response.data.error.message);
      }
    });
}

function saveItemDB(){
  const parent = event.target.parentElement.parentElement.parentElement;
  const parentId = parent.dataset.id;
  const title = parent.querySelector('input').value;
  const url = "/API/items";
  const data = {
    parent: parentId,
    title: title
  }
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data)
    .then(response => console.log("saveItem() response: ", response))
    .catch(console.log(error));
}

async function saveListDB(event) {
  const title = event.target.parentElement.querySelector('input').value;
  event.preventDefault();
  const data = {
    title: title
  }
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.action, data);
}

async function getListsDB(){
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/API/lists');  
  return response.data;
}

async function getItemsDB(id){
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/API/items`);
  return response.data;
}



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);
var bind = __webpack_require__(23);
var Axios = __webpack_require__(25);
var defaults = __webpack_require__(26);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(44);
axios.CancelToken = __webpack_require__(45);
axios.isCancel = __webpack_require__(41);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(46);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(23);
var isBuffer = __webpack_require__(24);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(26);
var utils = __webpack_require__(22);
var InterceptorManager = __webpack_require__(38);
var dispatchRequest = __webpack_require__(39);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(22);
var normalizeHeaderName = __webpack_require__(28);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(29);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(29);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);
var settle = __webpack_require__(30);
var buildURL = __webpack_require__(33);
var parseHeaders = __webpack_require__(34);
var isURLSameOrigin = __webpack_require__(35);
var createError = __webpack_require__(31);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(36);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("none" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(37);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(31);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(32);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);
var transformData = __webpack_require__(40);
var isCancel = __webpack_require__(41);
var defaults = __webpack_require__(26);
var isAbsoluteURL = __webpack_require__(42);
var combineURLs = __webpack_require__(43);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(22);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(44);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFlash", function() { return renderFlash; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


const box = document.querySelector('[rel="js-flashBox"]');

function removeFlash(){
  box.querySelector('div').classList.toggle('flash--hidden');
}

function renderFlash(type) {
  document.querySelector('[rel="js-flashBox"]').innerHTML = `
  <div class="flash-content flash__${type} flash--hidden">
  <span class="flash__text">BOOOOM</span>
  </div>`;
  box.querySelector('.flash--hidden').classList.toggle('flash--hidden');
  setTimeout(removeFlash, 1500);
}



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderModal", function() { return renderModal; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);



function renderModal(event){
  const id = event.target.dataset.id;
  const modalContainer = document.createElement('div');
  modalContainer.classList = 'modal-container modal-container--hidden';
  modalContainer.innerHTML = `
    <section class="modal">
      <h3>Are you sure??</h3>
      <button class="button delete-user--sure" rel="js-modal-delete" data-id="${id}" value="Delete user">Delete Userrrr</button>
      <button class="button" rel="js-modal-close">Close</button>
    </section>`;
    document.querySelector('body').appendChild(modalContainer);
    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["showModal"])(modalContainer);
    modalContainer.querySelector('[rel="js-modal-delete"]').addEventListener('click', _ajax__WEBPACK_IMPORTED_MODULE_1__["deleteUser"]);
    modalContainer.querySelector('[rel="js-modal-close"]').addEventListener('click', removeModal);
}

function removeModal(){
  const modalContainer = document.querySelector('.modal-container');
  Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["hideModal"])(modalContainer);
}



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadItems", function() { return loadItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLists", function() { return loadLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListsLocal", function() { return getListsLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsLocal", function() { return getItemsLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveListLocal", function() { return saveListLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveItemLocal", function() { return saveItemLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocal", function() { return getUserLocal; });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


//
// Load into local from DB

async function loadLists(){
  // Get from DB
  const data = await Object(_ajax__WEBPACK_IMPORTED_MODULE_0__["getListsDB"])();
  console.log(data.lists)
  // Load into local storage
  const listObj = data.lists.reduce((total, list) => {
    total[list._id] = {
      title: list.title,
      owner: list.owner,
      created: list.created
    }
    return total;
  }, {});
  localStorage.setItem("lists", JSON.stringify(listObj));
  localStorage.setItem("user", JSON.stringify(data.user));
}

async function loadItems(){
  // Items loaded into local storage 
  const items = await Object(_ajax__WEBPACK_IMPORTED_MODULE_0__["getItemsDB"])();
  const itemsObj = items.reduce((total, item) => {
    total[item._id] = {
      title: item.title,
      parent: item.parent,
      owner: item.owner
    }
    return total;
  }, {});
  localStorage.setItem("items", JSON.stringify(itemsObj));
}


function getListsLocal(){
  const lists = JSON.parse(localStorage.getItem("lists"));
  return lists;
}

function getItemsLocal(listId){
  const items = JSON.parse(localStorage.getItem("items"));
  const itemsArray = [];
  for (let item in items) {
    if (items[item].parent == listId) {
      const obj = {
        _id: items[item]._id,
        title: items[item].title
      }
      itemsArray.push(obj);
    }
  }
  return itemsArray;
}

function saveListLocal(data){
  console.log(data)
}

function saveItemLocal(data){
  console.log(data)
}

function getUserLocal(){
  return JSON.parse(localStorage.getItem("user"));
}




/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMobNav", function() { return toggleMobNav; });
const sideBar = document.querySelector('.sidebar');

function toggleMobNav(){
  sideBar.classList.toggle('sidebar--show');    
}



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module, Buffer) {// Generated by CoffeeScript 1.12.6
(function() {
  var $, Bling, extend,
    slice = [].slice,
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Object.keys || (Object.keys = (function(_this) {
    return function(o) {
      var k, results;
      results = [];
      for (k in o) {
        results.push(k);
      }
      return results;
    };
  })(this));

  Object.values || (Object.values = (function(_this) {
    return function(o) {
      var k, results;
      results = [];
      for (k in o) {
        results.push(o[k]);
      }
      return results;
    };
  })(this));

  extend = (function(_this) {
    return function() {
      var a, b, i1, k, len1, obj, v;
      a = arguments[0], b = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (i1 = 0, len1 = b.length; i1 < len1; i1++) {
        obj = b[i1];
        if (obj) {
          for (k in obj) {
            v = obj[k];
            a[k] = v;
          }
        }
      }
      return a;
    };
  })(this);

  Bling = function() {
    var args, b, i;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    "Bling:nomunge";
    if (args.length === 1) {
      args = $.type.lookup(args[0]).array(args[0]);
    }
    b = $.inherit(Bling, args);
    if (args.length === 0 && args[0] !== void 0) {
      i = 0;
      while (args[i] !== void 0) {
        i++;
      }
      b.length = i;
    }
    if ('init' in Bling) {
      return Bling.init(b);
    }
    return b;
  };

  $ = Bling;

  $.global = (function() {
    return this;
  })();

  $.plugin = function(opts, constructor) {
    var _t, error, fn, key, plugin, ref, ref1;
    if (!constructor) {
      constructor = opts;
      opts = {};
    }
    _t = this;
    if ("depends" in opts) {
      return _t.depends(opts.depends, function() {
        return _t.plugin({
          provides: opts.provides
        }, constructor);
      });
    }
    try {
      if (typeof (plugin = constructor != null ? constructor.call(_t, _t) : void 0) === "object") {
        extend(this, plugin.$);
        delete plugin.$;
        extend(_t.prototype, plugin);
        fn = function(key) {
          return _t[key] || (_t[key] = function() {
            var a;
            a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return _t.prototype[key].apply($(a[0]), a.slice(1));
          });
        };
        for (key in plugin) {
          fn(key);
        }
        if (opts.provides != null) {
          _t.provide(opts.provides);
        }
      }
    } catch (error1) {
      error = error1;
      console.error("plugin failed '" + _t.name + "':", ((ref = (ref1 = $.debugStack) != null ? ref1 : $.identity) != null ? ref : function(x) {
        return x;
      })(error.stack));
    }
    return this;
  };

  extend($, (function() {
    var commasep, complete, incomplete, not_complete, waiting;
    waiting = [];
    complete = {};
    commasep = /, */;
    not_complete = function(x) {
      return !(x in complete);
    };
    incomplete = function(n) {
      return ((typeof n) === "string" ? n.split(commasep) : n).filter(not_complete);
    };
    return {
      depends: function(needs, func) {
        if ((needs = incomplete(needs)).length === 0) {
          func();
        } else {
          waiting.push(function(need) {
            var i;
            if ((i = needs.indexOf(need)) > -1) {
              needs.splice(i, 1);
            }
            return needs.length === 0 && func;
          });
        }
        return func;
      },
      provide: function(needs, data) {
        var caught, err, f, i, i1, len1, need, ref, ref1, ref2;
        caught = [];
        ref = incomplete(needs);
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          need = ref[i1];
          complete[need] = i = -1;
          while (++i < waiting.length) {
            if ((f = waiting[i](need))) {
              waiting.splice(i, 1);
              try {
                f(data);
              } catch (error1) {
                err = error1;
                caught.push(err);
              }
              i = -1;
            }
          }
        }
        if (caught.length > 0) {
          f = (ref1 = (ref2 = $.debugStack) != null ? ref2 : $.identity) != null ? ref1 : function(x) {
            return x.stack;
          };
          caught.map(f).forEach(console.error.bind(console));
        }
        return data;
      }
    };
  })());

  $.plugin({
    depends: "core",
    provides: "async,series,parallel"
  }, function() {
    return {
      series: function(fin) {
        var done, finish_one, next, ret, todo;
        if (fin == null) {
          fin = $.identity;
        }
        ret = $();
        todo = this.length;
        if (!(todo > 0)) {
          fin.apply(ret, ret);
        } else {
          done = 0;
          finish_one = function(index) {
            return function() {
              ret[index] = arguments;
              if (++done >= todo) {
                fin.apply(ret, ret);
              } else {
                next(done);
              }
              return null;
            };
          };
          (next = (function(_this) {
            return function(i) {
              return $.immediate(function() {
                return _this[i](finish_one(i));
              });
            };
          })(this))(0);
        }
        return this;
      },
      parallel: function(fin) {
        var done, finish_one, i, i1, ref, ret, todo;
        if (fin == null) {
          fin = $.identity;
        }
        ret = $();
        todo = this.length;
        if (!(todo > 0)) {
          fin.apply(ret, ret);
        } else {
          done = 0;
          finish_one = function(index) {
            return function() {
              ret[index] = arguments;
              if (++done >= todo) {
                fin.apply(ret, ret);
              }
              return null;
            };
          };
          for (i = i1 = 0, ref = todo; i1 < ref; i = i1 += 1) {
            this[i](finish_one(i));
          }
        }
        return this;
      }
    };
  });

  $.plugin({
    provides: "cache, Cache",
    depends: "core, sortBy, logger"
  }, function() {
    var EffCache;
    EffCache = (function() {
      var log;

      log = $.logger("[LRU]");

      function EffCache(capacity, defaultTtl) {
        var autoEvict, eff, index, noValue, order, reIndex, rePosition;
        this.capacity = capacity != null ? capacity : 1000;
        this.defaultTtl = defaultTtl != null ? defaultTtl : 2e308;
        this.capacity = Math.max(0, this.capacity);
        this.evictCount = Math.max(3, Math.floor(this.capacity * .1));
        index = Object.create(null);
        order = [];
        eff = function(o) {
          return -o.r / o.w;
        };
        autoEvict = (function(_this) {
          return function() {
            var k;
            if (!(_this.capacity > 0)) {
              return;
            }
            if (order.length >= _this.capacity) {
              while (order.length + _this.evictCount - 1 >= _this.capacity) {
                delete index[k = order.pop().k];
              }
            }
            return null;
          };
        })(this);
        reIndex = function(i, j) {
          var i1, ref, ref1, x;
          for (x = i1 = ref = i, ref1 = j; ref <= ref1 ? i1 <= ref1 : i1 >= ref1; x = ref <= ref1 ? ++i1 : --i1) {
            if ((0 <= x && x < order.length)) {
              index[order[x].k] = x;
            }
          }
          return null;
        };
        rePosition = function(i) {
          var j, obj;
          obj = order[i];
          j = $.sortedIndex(order, obj, eff);
          if (j !== i) {
            order.splice(i, 1);
            order.splice(j, 0, obj);
            reIndex(i, j);
          }
          return null;
        };
        noValue = {
          v: void 0
        };
        $.extend(this, {
          has: function(k) {
            return k in index;
          },
          del: function(k) {
            var i;
            if (k in index) {
              i = index[k];
              order.splice(i, 1);
              delete index[k];
              return reIndex(i, order.length - 1);
            }
          },
          set: (function(_this) {
            return function(k, v, ttl) {
              var d, i, item;
              if (ttl == null) {
                ttl = _this.defaultTtl;
              }
              if (!(_this.capacity > 0)) {
                return v;
              }
              if (k in index) {
                d = order[i = index[k]];
                d.v = v;
                d.w += 1;
                rePosition(i);
              } else {
                autoEvict();
                item = {
                  k: k,
                  v: v,
                  r: 0,
                  w: 1
                };
                i = $.sortedIndex(order, item, eff);
                order.splice(i, 0, item);
                reIndex(i, order.length - 1);
              }
              if (ttl < 2e308) {
                $.delay(ttl, function() {
                  return _this.del(k);
                });
              }
              return v;
            };
          })(this),
          get: function(k) {
            var i, ret;
            ret = noValue;
            if (k in index) {
              i = index[k];
              ret = order[i];
              ret.r += 1;
              rePosition(i);
            }
            return ret.v;
          },
          clear: function() {
            var k;
            for (k in index) {
              order[index[k]] = null;
            }
            index = Object.create(null);
            return order = [];
          }
        });
      }

      return EffCache;

    })();
    return {
      $: {
        Cache: $.extend(EffCache, new EffCache(10000))
      }
    };
  });

  $.plugin({
    provides: "cartesian"
  }, function() {
    return {
      $: {
        cartesian: function() {
          var helper, n, ret, sets;
          sets = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          n = sets.length;
          ret = [];
          helper = function(cur, i) {
            var i1, len1, ref, x;
            if (++i >= n) {
              return ret.push(cur);
            }
            ref = sets[i];
            for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
              x = ref[i1];
              helper(cur.concat(x), i);
            }
            return null;
          };
          helper([], -1);
          return $(ret);
        }
      }
    };
  });

  $.plugin({
    provides: "clone",
    depends: "type"
  }, function() {
    $.type.extend({
      unknown: {
        clone: function(s) {
          return null;
        }
      },
      string: {
        clone: function(s) {
          return s + "";
        }
      },
      number: {
        clone: function(n) {
          return n + 0.0;
        }
      },
      array: {
        clone: function(a) {
          return a.concat([]);
        }
      },
      bling: {
        clone: function(b) {
          return b.concat([]);
        }
      },
      object: {
        clone: function(o) {
          var k, ret, v;
          ret = Object.create(o.__proto__);
          for (k in o) {
            if (!hasProp.call(o, k)) continue;
            v = o[k];
            ret[k] = $.type.lookup(v).clone(v);
          }
          return ret;
        }
      }
    });
    return {
      $: {
        clone: function(o) {
          return $.type.lookup(o).clone(o);
        }
      }
    };
  });

  $.plugin({
    provides: "compat,trimLeft,split,lastIndexOf,join,preventAll,matchesSelector,isBuffer,Map"
  }, function() {
    var Map, base1, base2, base3, base4, base5, base6, signs;
    (base1 = $.global).Buffer || (base1.Buffer = {
      isBuffer: function() {
        return false;
      }
    });
    (base2 = $.global).Map || (base2.Map = Map = (function() {
      function Map(iterable) {
        var data, i1, item, len1, ref;
        data = Object.create(null);
        $.extend(this, {
          size: 0,
          keys: function() {
            return Object.keys(data);
          },
          values: function() {
            var k, results, v;
            results = [];
            for (k in data) {
              v = data[k];
              results.push(v);
            }
            return results;
          },
          entries: function() {
            var k, results, v;
            results = [];
            for (k in data) {
              v = data[k];
              results.push([k, v]);
            }
            return results;
          },
          has: function(k) {
            return k in data;
          },
          get: function(k) {
            return data[k];
          },
          set: function(k, v) {
            if (!(k in data)) {
              this.size += 1;
            }
            data[k] = v;
            return this;
          },
          "delete": function(k) {
            if (k in data) {
              this.size -= 1;
            }
            delete data[k];
            return this;
          },
          clear: function() {
            data = Object.create(null);
            this.size = 0;
            return this;
          },
          forEach: function(cb, c) {
            var k, v;
            for (k in data) {
              v = data[k];
              cb.call(c, k, v);
            }
            return this;
          }
        });
        ref = iterable != null ? iterable : [];
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          item = ref[i1];
          this.set.apply(this, item);
        }
      }

      return Map;

    })());
    signs = [-1, 1];
    Math.sign = function(n) {
      return signs[0 + (n >= 0)];
    };
    (base3 = String.prototype).trimLeft || (base3.trimLeft = function() {
      return this.replace(/^\s+/, "");
    });
    (base4 = String.prototype).split || (base4.split = function(sep) {
      var a, i, j;
      a = [];
      i = 0;
      while ((j = this.indexOf(sep, i)) > -1) {
        a.push(this.substring(i, j));
        i = j + 1;
      }
      return a;
    });
    (base5 = String.prototype).lastIndexOf || (base5.lastIndexOf = function(s, c, i) {
      var j;
      if (i == null) {
        i = -1;
      }
      j = -1;
      while ((i = s.indexOf(c, i + 1)) > -1) {
        j = i;
      }
      return j;
    });
    (base6 = Array.prototype).join || (base6.join = function(sep) {
      var n, s;
      if (sep == null) {
        sep = '';
      }
      n = this.length;
      if (n === 0) {
        return "";
      }
      s = this[n - 1];
      while (--n > 0) {
        s = this[n - 1] + sep + s;
      }
      return s;
    });
    if (typeof Event !== "undefined" && Event !== null) {
      Event.prototype.preventAll = function() {
        this.preventDefault();
        this.stopPropagation();
        return this.cancelBubble = true;
      };
    }
    if (typeof Element !== "undefined" && Element !== null) {
      Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.matchesSelector;
    }
    return {};
  });

  $.plugin({
    provides: "compress, decompress"
  }, function() {
    var _compress, _decompress, chr, f, pow;
    f = String.fromCharCode;
    chr = function(i) {
      return f(i + 32);
    };
    pow = Math.pow;
    _compress = function(input) {
      var c, data, data_pos, data_val, dict, dictSize, dictToCreate, doBitsAndOne, doSomeBits, enlargeIn, i1, len1, numBits, value, w, wc;
      if (input === null || input === (void 0) || input === "") {
        return input;
      }
      dict = {};
      dictToCreate = {};
      c = "";
      wc = "";
      w = "";
      enlargeIn = 2;
      dictSize = 3;
      numBits = 2;
      data = [];
      data_val = 0;
      data_pos = 0;
      doSomeBits = function(how_many_bits, value) {
        var i, i1, ref;
        if (value == null) {
          value = 0;
        }
        for (i = i1 = 0, ref = numBits; i1 < ref; i = i1 += 1) {
          data_val = (data_val << 1) | value;
          if (data_pos === 14) {
            data_pos = 0;
            data.push(chr(data_val));
            data_val = 0;
          } else {
            data_pos++;
          }
          value = 0;
        }
        value = w.charCodeAt(0);
        return doBitsAndOne(how_many_bits, value);
      };
      doBitsAndOne = function(how_many_bits, value) {
        var i, i1, ref, results;
        if (value == null) {
          value = 0;
        }
        results = [];
        for (i = i1 = 0, ref = how_many_bits; i1 < ref; i = i1 += 1) {
          data_val = (data_val << 1) | (value & 1);
          if (data_pos === 14) {
            data_pos = 0;
            data.push(chr(data_val));
            data_val = 0;
          } else {
            data_pos++;
          }
          results.push(value = value >> 1);
        }
        return results;
      };
      for (i1 = 0, len1 = input.length; i1 < len1; i1++) {
        c = input[i1];
        if (!(c in dict)) {
          dict[c] = dictSize++;
          dictToCreate[c] = true;
        }
        wc = w + c;
        if (wc in dict) {
          w = wc;
        } else {
          if (w in dictToCreate) {
            if (w.charCodeAt(0) < 256) {
              doSomeBits(8);
            } else {
              doSomeBits(16, 1);
            }
            enlargeIn--;
            if (enlargeIn === 0) {
              enlargeIn = pow(2, numBits);
              numBits++;
            }
            delete dictToCreate[w];
          } else {
            value = dict[w];
            doBitsAndOne(numBits, value);
          }
          enlargeIn--;
          if (enlargeIn === 0) {
            enlargeIn = pow(2, numBits);
            numBits++;
          }
          dict[wc] = dictSize++;
          w = String(c);
        }
      }
      if (w !== "") {
        if (w in dictToCreate) {
          if (w.charCodeAt(0) < 256) {
            doSomeBits(8);
          } else {
            doSomeBits(16, 1);
          }
          enlargeIn--;
          if (enlargeIn === 0) {
            enlargeIn = pow(2, numBits);
            numBits++;
          }
          delete dictToCreate[w];
        } else {
          value = dict[w];
          doBitsAndOne(numBits, value);
        }
        enlargeIn--;
        if (enlargeIn === 0) {
          enlargeIn = pow(2, numBits);
          numBits++;
        }
      }
      doBitsAndOne(numBits, 2);
      while (true) {
        data_val = data_val << 1;
        if (data_pos === 14) {
          data.push(chr(data_val));
          break;
        } else {
          data_pos++;
        }
      }
      return data.join('');
    };
    _decompress = function(length, resetValue, getNextValue) {
      var bits, c, data, dict, dictSize, doBits, enlargeIn, entry, i, next, numBits, resb, result, w;
      if (length === 0) {
        return "";
      }
      dict = [];
      enlargeIn = 4;
      dictSize = 4;
      numBits = 3;
      entry = "";
      result = [];
      next = i = w = resb = c = null;
      data = {
        val: getNextValue(0),
        position: resetValue,
        index: 1
      };
      if (isNaN(data.val) || !isFinite(data.val) || (data.val == null)) {
        return "";
      }
      dict[0] = 0;
      dict[1] = 1;
      dict[2] = 2;
      doBits = function(bits, maxpower, power) {
        var r;
        if (power == null) {
          power = 1;
        }
        while (power !== maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;
          if (data.position === 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          r = resb > 0 ? 1 : 0;
          bits |= r * power;
          power <<= 1;
        }
        return bits;
      };
      bits = doBits(0, 4, 1);
      switch (next = bits) {
        case 0:
        case 1:
          c = f(doBits(0, pow(2, 8 * (c + 1)), 1));
          break;
        case 2:
          return "";
      }
      dict[3] = c;
      w = c;
      result.push(c);
      while (true) {
        if (data.index > length) {
          return "";
        }
        switch (c = doBits(0, pow(2, numBits), 1)) {
          case 0:
          case 1:
            dict[dictSize++] = f(doBits(0, pow(2, 8 * (c + 1)), 1));
            c = dictSize - 1;
            enlargeIn--;
            break;
          case 2:
            return result.join('');
        }
        if (enlargeIn === 0) {
          enlargeIn = pow(2, numBits);
          numBits++;
        }
        if (dict[c]) {
          entry = dict[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            return "";
          }
        }
        result.push(entry);
        dict[dictSize++] = w + entry.charAt(0);
        enlargeIn--;
        w = entry;
        if (enlargeIn === 0) {
          enlargeIn = pow(2, numBits);
          numBits++;
        }
      }
    };
    return {
      $: {
        compress: function(input) {
          if (input) {
            return _compress(input, 15) + " ";
          } else {
            return "";
          }
        },
        decompress: function(input) {
          if (input) {
            return _decompress(input.length, 16384, function(i) {
              return input.charCodeAt(i) - 32;
            });
          } else {
            return "";
          }
        }
      }
    };
  });

  $.plugin({
    provides: 'config',
    depends: 'core'
  }, function() {
    var float, get, int, parse, set, watch;
    get = function(name, def) {
      var ref;
      switch (arguments.length) {
        case 0:
          return $.extend({}, process.env);
        default:
          return (ref = process.env[name]) != null ? ref : def;
      }
    };
    set = function(name, val) {
      switch (arguments.length) {
        case 1:
          return $.extend(process.env, name);
        case 2:
          return process.env[name] = val;
      }
    };
    parse = function(data) {
      var ret;
      ret = {};
      $(data.toString("utf8").split("\n")).filter($.isEmpty, false).filter(/^#/, false).map(function() {
        return this.replace(/^\s+/, '').split('=');
      }).each(function(kv) {
        var ref;
        if ((ref = kv[0]) != null ? ref.length : void 0) {
          return ret[kv[0]] = kv[1].replace(/^["']/, '').replace(/['"]$/, '');
        }
      });
      return ret;
    };
    watch = function(name, func) {
      var prev;
      prev = process.env[name];
      return $.interval(1003, function() {
        var cur;
        if ((cur = process.env[name]) !== prev) {
          func(prev, cur);
          return prev = cur;
        }
      });
    };
    int = function(name, def) {
      var ref;
      return parseInt((ref = process.env[name]) != null ? ref : def, 10);
    };
    float = function(name, def) {
      var ref;
      return parseFloat((ref = process.env[name]) != null ? ref : def);
    };
    return {
      $: {
        config: $.extend(get, {
          get: get,
          set: set,
          parse: parse,
          watch: watch,
          int: int,
          float: float
        })
      }
    };
  });

  $.plugin({
    provides: "core,eq,each,map,filterMap,tap,replaceWith,reduce,union,intersect,distinct," + "contains,count,coalesce,swap,shuffle,select,or,zap,clean,take,skip,first,last,slice," + "push,filter,matches,weave,fold,flatten,call,apply,log,toArray,clear,indexWhere",
    depends: "string,type"
  }, function() {
    var index;
    $.defineProperty($, "now", {
      get: function() {
        return +(new Date);
      }
    });
    index = function(i, o) {
      while (i < 0) {
        i += o.length;
      }
      return Math.min(i, o.length);
    };
    return {
      $: {
        assert: function(c, m) {
          if (m == null) {
            m = "";
          }
          if (!c) {
            throw new Error("assertion failed: " + m);
          }
        },
        coalesce: function() {
          var a;
          a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return $(a).coalesce();
        },
        keysOf: function(o, own) {
          var k;
          if (own == null) {
            own = false;
          }
          if (own) {
            return $((function() {
              var results;
              results = [];
              for (k in o) {
                if (!hasProp.call(o, k)) continue;
                results.push(k);
              }
              return results;
            })());
          } else {
            return $((function() {
              var results;
              results = [];
              for (k in o) {
                results.push(k);
              }
              return results;
            })());
          }
        },
        valuesOf: function(o, own) {
          var k, v;
          if (own == null) {
            own = false;
          }
          if (own) {
            return $((function() {
              var results;
              results = [];
              for (k in o) {
                if (!hasProp.call(o, k)) continue;
                v = o[k];
                results.push(v);
              }
              return results;
            })());
          } else {
            return $((function() {
              var results;
              results = [];
              for (k in o) {
                v = o[k];
                results.push(v);
              }
              return results;
            })());
          }
        }
      },
      eq: function(i) {
        return $([this[index(i, this)]]);
      },
      each: function(f) {
        var i1, len1, ref, t;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          t = ref[i1];
          f.call(t, t);
        }
        return this;
      },
      map: function(f) {
        var b, i, i1, len1, ref, t;
        b = $();
        i = 0;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          t = ref[i1];
          b[i++] = f.call(t, t);
        }
        return b;
      },
      every: function(f) {
        var i1, len1, ref, x;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          x = ref[i1];
          if (!f.call(x, x)) {
            return false;
          }
        }
        return true;
      },
      some: function(f) {
        var i1, len1, ref, x;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          x = ref[i1];
          if (f.call(x, x)) {
            return true;
          }
        }
        return false;
      },
      filterMap: function(f) {
        var b, i1, len1, ref, t, v;
        b = $();
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          t = ref[i1];
          v = f.call(t, t);
          if (v != null) {
            b.push(v);
          }
        }
        return b;
      },
      tap: function(f) {
        return f.call(this, this);
      },
      replaceWith: function(array) {
        var i1, len1, x;
        this.clear();
        for (i1 = 0, len1 = array.length; i1 < len1; i1++) {
          x = array[i1];
          this.push(x);
        }
        return this;
      },
      reduce: function(f, a) {
        var i, i1, n, ref, ref1, ref2, x;
        if ((typeof a) === 'function') {
          ref = [a, f], f = ref[0], a = ref[1];
        }
        i = 0;
        n = this.length;
        if (a == null) {
          a = this[i++];
        }
        for (x = i1 = ref1 = i, ref2 = n; i1 < ref2; x = i1 += 1) {
          a = f.call(this[x], a, this[x]);
        }
        return a;
      },
      union: function(other, strict) {
        var i1, j1, len1, len2, ref, ret, x;
        if (strict == null) {
          strict = true;
        }
        ret = $();
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          x = ref[i1];
          if (!ret.contains(x, strict)) {
            ret.push(x);
          }
        }
        for (j1 = 0, len2 = other.length; j1 < len2; j1++) {
          x = other[j1];
          if (!ret.contains(x, strict)) {
            ret.push(x);
          }
        }
        return ret;
      },
      distinct: function(strict) {
        if (strict == null) {
          strict = true;
        }
        return this.union(this, strict);
      },
      intersect: function(other) {
        var x;
        return $((function() {
          var i1, len1, ref, results;
          ref = this;
          results = [];
          for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
            x = ref[i1];
            if (indexOf.call(other, x) >= 0) {
              results.push(x);
            }
          }
          return results;
        }).call(this));
      },
      contains: function(item, strict) {
        var i1, len1, ref, t;
        if (strict == null) {
          strict = true;
        }
        if (strict) {
          return this.indexOf(item) > -1;
        } else {
          ref = this;
          for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
            t = ref[i1];
            if (t == item) {
              return true;
            }
          }
        }
        return false;
      },
      count: function(item, strict) {
        var i1, len1, n, ref, t;
        if (strict == null) {
          strict = true;
        }
        n = 0;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          t = ref[i1];
          if ((item === void 0) || (strict && t === item) || (!strict && t == item)) {
            ++n;
          }
        }
        return n;
      },
      coalesce: function() {
        var i, i1, len1, ref;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          i = ref[i1];
          if ($.type["in"]('array', 'bling', i)) {
            i = $(i).coalesce();
          }
          if (i != null) {
            return i;
          }
        }
        return null;
      },
      swap: function(i, j) {
        var ref;
        i = index(i, this);
        j = index(j, this);
        if (i !== j) {
          ref = [this[j], this[i]], this[i] = ref[0], this[j] = ref[1];
        }
        return this;
      },
      shuffle: function() {
        var i;
        i = this.length - 1;
        while (i >= 0) {
          this.swap(--i, Math.floor(Math.random() * i));
        }
        return this;
      },
      select: (function() {
        var getter, selectMany, selectOne;
        getter = function(prop) {
          return function() {
            var v;
            if ($.is("function", v = this[prop]) && prop !== "constructor") {
              return $.bound(this, v);
            } else {
              return v;
            }
          };
        };
        selectOne = function(p) {
          var i, type;
          switch (type = $.type(p)) {
            case 'regexp':
              return selectMany.call(this, p);
            case 'string':
            case 'number':
              p = String(p);
              if (p === "*") {
                return this.flatten();
              } else if ((i = p.indexOf('.')) > -1) {
                return this.select(p.substr(0, i)).select(p.substr(i + 1));
              } else {
                return this.map(getter(p));
              }
              break;
            default:
              return $();
          }
        };
        selectMany = function() {
          var a, i, i1, j1, len1, len2, lists, match, n, p, ref;
          a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          n = this.length;
          lists = Object.create(null);
          for (i1 = 0, len1 = a.length; i1 < len1; i1++) {
            p = a[i1];
            if ($.is('regexp', p)) {
              ref = $.keysOf(this[0]).filter(p);
              for (j1 = 0, len2 = ref.length; j1 < len2; j1++) {
                match = ref[j1];
                lists[match] = this.select(match);
              }
            } else {
              lists[p] = this.select(p);
            }
          }
          i = 0;
          return this.map(function() {
            var key, obj, val;
            obj = Object.create(null);
            for (p in lists) {
              key = p.split('.').pop();
              val = lists[p][i];
              if (val !== void 0) {
                obj[key] = val;
              }
            }
            i++;
            return obj;
          });
        };
        return function() {
          switch (arguments.length) {
            case 0:
              return this;
            case 1:
              return selectOne.apply(this, arguments);
            default:
              return selectMany.apply(this, arguments);
          }
        };
      })(),
      or: function(x) {
        var i, i1, ref;
        for (i = i1 = 0, ref = this.length; 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
          this[i] || (this[i] = x);
        }
        return this;
      },
      zap: function(p, v) {
        var head, i, k, tail;
        if ($.is('object', p)) {
          for (k in p) {
            v = p[k];
            this.zap(k, v);
          }
          return this;
        }
        i = p.lastIndexOf(".");
        if (i > 0) {
          head = p.substr(0, i);
          tail = p.substr(i + 1);
          this.select(head).zap(tail, v);
          return this;
        }
        switch ($.type(v)) {
          case "array":
          case "bling":
            this.each(function() {
              return this[p] = v[++i % v.length];
            });
            break;
          case "function":
            this.zap(p, this.select(p).map(v));
            break;
          default:
            this.each(function() {
              return this[p] = v;
            });
        }
        return this;
      },
      clean: function() {
        var props;
        props = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return this.each(function() {
          var i1, j1, key, len1, len2, prop, ref;
          for (i1 = 0, len1 = props.length; i1 < len1; i1++) {
            prop = props[i1];
            switch ($.type(prop)) {
              case 'string':
              case 'number':
                delete this[prop];
                break;
              case 'regexp':
                ref = Object.keys(this);
                for (j1 = 0, len2 = ref.length; j1 < len2; j1++) {
                  key = ref[j1];
                  if (prop.test(key)) {
                    delete this[key];
                  }
                }
            }
          }
          return null;
        });
      },
      take: function(n) {
        var end, i;
        if (n == null) {
          n = 1;
        }
        end = Math.min(n, this.length);
        return $((function() {
          var i1, ref, results;
          results = [];
          for (i = i1 = 0, ref = end; i1 < ref; i = i1 += 1) {
            results.push(this[i]);
          }
          return results;
        }).call(this));
      },
      skip: function(n) {
        var i, start;
        if (n == null) {
          n = 0;
        }
        start = Math.max(0, n | 0);
        return $((function() {
          var i1, ref, ref1, results;
          results = [];
          for (i = i1 = ref = start, ref1 = this.length; i1 < ref1; i = i1 += 1) {
            results.push(this[i]);
          }
          return results;
        }).call(this));
      },
      first: function(n) {
        if (n == null) {
          n = 1;
        }
        if (n === 1) {
          return this[0];
        } else {
          return this.take(n);
        }
      },
      last: function(n) {
        if (n == null) {
          n = 1;
        }
        if (n === 1) {
          return this[this.length - 1];
        } else {
          return this.skip(this.length - n);
        }
      },
      slice: function(start, end) {
        var i;
        if (start == null) {
          start = 0;
        }
        if (end == null) {
          end = this.length;
        }
        start = index(start, this);
        end = index(end, this);
        return $((function() {
          var i1, ref, ref1, results;
          results = [];
          for (i = i1 = ref = start, ref1 = end; ref <= ref1 ? i1 < ref1 : i1 > ref1; i = ref <= ref1 ? ++i1 : --i1) {
            results.push(this[i]);
          }
          return results;
        }).call(this));
      },
      extend: function(b) {
        var i, i1, len1;
        for (i1 = 0, len1 = b.length; i1 < len1; i1++) {
          i = b[i1];
          this.push(i);
        }
        return this;
      },
      push: function(b) {
        Array.prototype.push.call(this, b);
        return this;
      },
      unshift: function(b) {
        Array.prototype.unshift.call(this, b);
        return this;
      },
      filter: function(f, limit, positive) {
        var a, g, i1, it, len1, ref, ref1, ref2;
        if ($.is("bool", limit)) {
          ref = [limit, positive], positive = ref[0], limit = ref[1];
        }
        if ($.is("number", positive)) {
          ref1 = [positive, limit], limit = ref1[0], positive = ref1[1];
        }
        if (limit == null) {
          limit = this.length;
        }
        if (positive == null) {
          positive = true;
        }
        g = (function() {
          switch (false) {
            case !$.is("object", f):
              return function(x) {
                return $.matches(f, x);
              };
            case !$.is("string", f):
              return function(x) {
                var ref2;
                return (ref2 = x != null ? typeof x.matchesSelector === "function" ? x.matchesSelector(f) : void 0 : void 0) != null ? ref2 : false;
              };
            case !$.is("regexp", f):
              return function(x) {
                return f.test(x);
              };
            case !$.is("function", f):
              return f;
            case !$.type["in"]("bool", "number", "null", "undefined", f):
              return function(x) {
                return f === x;
              };
            default:
              throw new Error("unsupported argument to filter: " + ($.type(f)));
          }
        })();
        a = $();
        ref2 = this;
        for (i1 = 0, len1 = ref2.length; i1 < len1; i1++) {
          it = ref2[i1];
          if ((!!g.call(it, it)) === positive) {
            if (--limit < 0) {
              break;
            }
            a.push(it);
          }
        }
        return a;
      },
      matches: function(expr) {
        switch (false) {
          case !$.is("string", expr):
            return this.select('matchesSelector').call(expr);
          case !$.is("regexp", expr):
            return this.map(function(x) {
              return expr.test(x);
            });
          default:
            throw new Error("unsupported argument to matches: " + ($.type(expr)));
        }
      },
      weave: function(b) {
        var c, i, i1, j1, ref, ref1;
        c = $();
        for (i = i1 = ref = this.length - 1; i1 >= 0; i = i1 += -1) {
          c[(i * 2) + 1] = this[i];
        }
        for (i = j1 = 0, ref1 = b.length; j1 < ref1; i = j1 += 1) {
          c[i * 2] = b[i];
        }
        return c;
      },
      fold: function(f) {
        var b, i, n;
        n = this.length;
        b = $((function() {
          var i1, ref, results;
          results = [];
          for (i = i1 = 0, ref = n - 1; i1 < ref; i = i1 += 2) {
            results.push(f.call(this, this[i], this[i + 1]));
          }
          return results;
        }).call(this));
        if ((n % 2) === 1) {
          b.push(f.call(this, this[n - 1], void 0));
        }
        return b;
      },
      flatten: function() {
        var b, i, i1, item, j, j1, len1, len2, ref;
        b = $();
        ref = this;
        for (i = i1 = 0, len1 = ref.length; i1 < len1; i = ++i1) {
          item = ref[i];
          if ($.type["in"]('array', 'bling', 'arguments', 'nodelist', item)) {
            for (j1 = 0, len2 = item.length; j1 < len2; j1++) {
              j = item[j1];
              b.push(j);
            }
          } else {
            b.push(item);
          }
        }
        return b;
      },
      call: function() {
        return this.apply(null, arguments);
      },
      apply: function(context, args) {
        return this.filterMap(function() {
          if ($.is("function", this)) {
            return this.apply(context, args);
          } else {
            return null;
          }
        });
      },
      log: function(label) {
        if (label) {
          $.log(label, this.toString(), this.length + " items");
        } else {
          $.log(this.toString(), this.length + " items");
        }
        return this;
      },
      toArray: function() {
        this.__proto__ = Array.prototype;
        return this;
      },
      clear: function() {
        return this.splice(0, this.length);
      },
      indexWhere: function(f) {
        var i, i1, len1, ref, x;
        ref = this;
        for (i = i1 = 0, len1 = ref.length; i1 < len1; i = ++i1) {
          x = ref[i];
          if (f.call(x, x)) {
            return i;
          }
        }
        return -1;
      }
    };
  });

  $.plugin({
    provides: "css,CSS",
    depends: "type"
  }, function() {
    var compact, flatten, parse, specialOps, stripComments, trim;
    flatten = function(o, prefix, into) {
      var k, nk, v;
      if (!(prefix in into)) {
        into[prefix] = [];
      }
      for (k in o) {
        v = o[k];
        switch (typeof v) {
          case "string":
          case "number":
            nk = k.replace(/([a-z]+)([A-Z]+)/g, "$1-$2").toLowerCase();
            into[prefix].push(nk + ": " + v + ";");
            break;
          case "object":
            nk = prefix ? prefix + k : k;
            flatten(v, nk, into);
            break;
          default:
            throw new Error("unexpected type in css: " + (typeof v));
        }
      }
      return into;
    };
    trim = function(str) {
      return str.replace(/^\s+/, '').replace(/\s+$/, '');
    };
    stripComments = function(str) {
      var i, j;
      while ((i = str.indexOf("/*")) > -1) {
        if ((j = str.indexOf("*/", i)) === -1) {
          break;
        }
        str = str.substring(0, i) + str.substring(j + 2);
      }
      return str;
    };
    parse = function(str, into) {
      var body, colon, i1, key, len1, m, rest, rule, selector, value;
      if (m = str.match(/([^{]+){/)) {
        selector = trim(m[1]);
        rest = str.substring(m[0].length);
        into[selector] || (into[selector] = {});
        if (m = rest.match(/([^}]+)}/)) {
          body = m[1].split(';');
          rest = rest.substring(m[0].length);
          for (i1 = 0, len1 = body.length; i1 < len1; i1++) {
            rule = body[i1];
            colon = rule.indexOf(':');
            if (!(key = rule.substring(0, colon))) {
              continue;
            }
            key = trim(key);
            value = trim(rule.substring(colon + 1));
            into[selector][key] = value;
          }
        }
        if (rest.length > 0) {
          return parse(rest, into);
        }
      }
      return into;
    };
    specialOps = '>+~';
    compact = function(obj) {
      var cur, first, i1, j1, len1, len2, op, part, parts, phaseTwo, ret, rules, selector;
      ret = {};
      for (selector in obj) {
        rules = obj[selector];
        for (i1 = 0, len1 = specialOps.length; i1 < len1; i1++) {
          op = specialOps[i1];
          selector = selector.replace(op, " " + op + " ");
        }
        parts = selector.split(/\s+/);
        switch (parts.length) {
          case 0:
            continue;
          case 1:
            $.extend((ret[selector] || (ret[selector] = {})), rules);
            break;
          default:
            cur = ret;
            first = true;
            for (j1 = 0, len2 = parts.length; j1 < len2; j1++) {
              part = parts[j1];
              if (!first) {
                part = " " + part;
              }
              cur = cur[part] || (cur[part] = {});
              first = false;
            }
            $.extend(cur, rules);
        }
      }
      phaseTwo = function(cur) {
        var key, modified, subkeys, val;
        modified = false;
        for (key in cur) {
          val = cur[key];
          if ($.is('object', val)) {
            subkeys = Object.keys(val);
            switch (subkeys.length) {
              case 0:
                delete cur[key];
                break;
              default:
                if (subkeys.length === 1 && $.is('object', val[subkeys[0]])) {
                  cur[key + subkeys[0]] = val[subkeys[0]];
                  delete cur[key];
                  phaseTwo(cur);
                }
            }
            phaseTwo(val);
          }
        }
        return cur;
      };
      return phaseTwo(ret);
    };
    return {
      $: {
        CSS: {
          parse: function(str, packed) {
            var ret;
            if (packed == null) {
              packed = false;
            }
            ret = parse(stripComments(str), {});
            if (packed) {
              return compact(ret);
            } else {
              return ret;
            }
          },
          stringify: function(obj) {
            var x, y;
            return ((function() {
              var ref, results;
              ref = flatten(obj, "", {});
              results = [];
              for (x in ref) {
                y = ref[x];
                if (y.length > 0) {
                  results.push(x + " { " + (y.join(' ')) + " }");
                }
              }
              return results;
            })()).join(' ');
          }
        }
      }
    };
  });

  $.plugin({
    provides: 'date,midnight,stamp,unstamp,dateFormat,dateParse',
    depends: 'type'
  }, function() {
    var adder, d, fYY, floor, format_keys, formats, h, longDays, m, ms, pYY, pYYYY, parser_keys, parsers, ref, s, shortDays, units;
    ref = [1, 1000, 1000 * 60, 1000 * 60 * 60, 1000 * 60 * 60 * 24], ms = ref[0], s = ref[1], m = ref[2], h = ref[3], d = ref[4];
    units = {
      ms: ms,
      s: s,
      m: m,
      h: h,
      d: d,
      sec: s,
      second: s,
      seconds: s,
      min: m,
      minute: m,
      minutes: m,
      hr: h,
      hour: h,
      hours: h,
      day: d,
      days: d
    };
    shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    longDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    formats = {
      yyyy: Date.prototype.getUTCFullYear,
      YY: fYY = function() {
        return String(this.getUTCFullYear()).substr(2);
      },
      yy: fYY,
      mm: function() {
        return this.getUTCMonth() + 1;
      },
      dd: Date.prototype.getUTCDate,
      dw: Date.prototype.getUTCDay,
      dW: function() {
        return shortDays[parseInt(this.getUTCDay(), 10) - 1];
      },
      DW: function() {
        return longDays[parseInt(this.getUTCDay(), 10) - 1];
      },
      HH: Date.prototype.getUTCHours,
      MM: Date.prototype.getUTCMinutes,
      SS: Date.prototype.getUTCSeconds,
      MS: Date.prototype.getUTCMilliseconds,
      _MS: function() {
        return $.padLeft(Date.prototype.getUTCMilliseconds.apply(this), 3, "0");
      }
    };
    format_keys = Object.keys(formats).sort().reverse();
    parsers = {
      YYYY: pYYYY = Date.prototype.setUTCFullYear,
      yyyy: pYYYY,
      YY: pYY = function(x) {
        return this.setUTCFullYear((x > 50 ? 1900 : 2000) + x);
      },
      yy: pYY,
      mm: function(x) {
        return this.setUTCMonth(x - 1);
      },
      dd: Date.prototype.setUTCDate,
      HH: Date.prototype.setUTCHours,
      MM: Date.prototype.setUTCMinutes,
      SS: Date.prototype.setUTCSeconds,
      _MS: function(s) {
        return this.setUTCMilliseconds(parseInt(s, 10));
      },
      MS: Date.prototype.setUTCMilliseconds
    };
    parser_keys = Object.keys(parsers).sort().reverse();
    floor = Math.floor;
    $.type.register("date", {
      is: function(o) {
        return $.isType(Date, o);
      },
      array: function(o) {
        return [o];
      },
      string: function(o, fmt, unit) {
        return $.date.format(o, fmt, unit);
      },
      number: function(o, unit) {
        return $.date.stamp(o, unit);
      }
    });
    $.type.extend('string', {
      date: function(s, fmt) {
        if (fmt == null) {
          fmt = $.date.defaultFormat;
        }
        return new Date($.date.parse(s, fmt, "ms"));
      }
    });
    $.type.extend('number', {
      date: function(n, unit) {
        if (unit == null) {
          unit = $.date.defaultUnit;
        }
        return $.date.unstamp(n, unit);
      }
    });
    adder = function(key) {
      return function(stamp, delta, stamp_unit) {
        var date;
        if (stamp_unit == null) {
          stamp_unit = $.date.defaultUnit;
        }
        date = $.date.unstamp(stamp, stamp_unit);
        parsers[key].call(date, (formats[key].call(date)) + delta);
        return $.date.stamp(date, stamp_unit);
      };
    };
    return {
      $: {
        date: {
          defaultUnit: "s",
          defaultFormat: "yyyy-mm-dd HH:MM:SS",
          stamp: function(date, unit) {
            if (date == null) {
              date = new Date;
            }
            if (unit == null) {
              unit = $.date.defaultUnit;
            }
            return floor(date / units[unit]);
          },
          unstamp: function(stamp, unit) {
            if (unit == null) {
              unit = $.date.defaultUnit;
            }
            return new Date(floor(stamp * units[unit]));
          },
          convert: function(stamp, from, to) {
            if (from == null) {
              from = $.date.defaultUnit;
            }
            if (to == null) {
              to = $.date.defaultUnit;
            }
            if ($.is("date", stamp)) {
              stamp = $.date.stamp(stamp, from);
            }
            return floor(stamp * units[from] / units[to]);
          },
          midnight: function(stamp, unit) {
            if (unit == null) {
              unit = $.date.defaultUnit;
            }
            return $.date.convert($.date.convert(stamp, unit, "d"), "d", unit);
          },
          format: function(stamp, fmt, unit) {
            var date, i1, k, len1;
            if (fmt == null) {
              fmt = $.date.defaultFormat;
            }
            if (unit == null) {
              unit = $.date.defaultUnit;
            }
            if ($.is("date", stamp)) {
              stamp = $.date.stamp(stamp, unit);
            }
            date = $.date.unstamp(stamp, unit);
            for (i1 = 0, len1 = format_keys.length; i1 < len1; i1++) {
              k = format_keys[i1];
              fmt = fmt.replace(k, $.padLeft("" + formats[k].call(date), k.length, "0"));
            }
            return fmt;
          },
          parse: function(dateString, fmt, to) {
            var date, err, i, i1, k, len1;
            if (fmt == null) {
              fmt = $.date.defaultFormat;
            }
            if (to == null) {
              to = $.date.defaultUnit;
            }
            date = new Date(0);
            i = 0;
            while (i < fmt.length) {
              for (i1 = 0, len1 = parser_keys.length; i1 < len1; i1++) {
                k = parser_keys[i1];
                if (fmt.indexOf(k, i) === i) {
                  try {
                    parsers[k].call(date, parseInt(dateString.slice(i, i + k.length), 10));
                  } catch (error1) {
                    err = error1;
                    throw new Error("Invalid date ('" + dateString + "') given format mask: " + fmt + " (failed at position " + i + ")");
                  }
                  i += k.length - 1;
                  break;
                }
              }
              i += 1;
            }
            return $.date.stamp(date, to);
          },
          addMilliseconds: adder("MS"),
          addSeconds: adder("SS"),
          addMinutes: adder("MM"),
          addHours: adder("HH"),
          addDays: adder("dd"),
          addMonths: adder("mm"),
          addYears: adder("yyyy"),
          range: function(from, to, interval, interval_unit, stamp_unit) {
            var add, cur, ret;
            if (interval == null) {
              interval = 1;
            }
            if (interval_unit == null) {
              interval_unit = "dd";
            }
            if (stamp_unit == null) {
              stamp_unit = $.date.defaultUnit;
            }
            add = adder(interval_unit);
            ret = [from];
            while ((cur = ret[ret.length - 1]) < to) {
              ret.push(add(cur, interval, stamp_unit));
            }
            return ret;
          }
        }
      },
      midnight: function(unit) {
        if (unit == null) {
          unit = $.date.defaultUnit;
        }
        return this.map(function() {
          return $.date.midnight(this, unit);
        });
      },
      unstamp: function(unit) {
        if (unit == null) {
          unit = $.date.defaultUnit;
        }
        return this.map(function() {
          return $.date.unstamp(this, unit);
        });
      },
      stamp: function(unit) {
        if (unit == null) {
          unit = $.date.defaultUnit;
        }
        return this.map(function() {
          return $.date.stamp(this, unit);
        });
      },
      dateFormat: function(fmt, unit) {
        if (fmt == null) {
          fmt = $.date.defaultFormat;
        }
        if (unit == null) {
          unit = $.date.defaultUnit;
        }
        return this.map(function() {
          return $.date.format(this, fmt, unit);
        });
      },
      dateParse: function(fmt, unit) {
        if (fmt == null) {
          fmt = $.date.defaultFormat;
        }
        if (unit == null) {
          unit = $.date.defaultUnit;
        }
        return this.map(function() {
          return $.date.parse(this, fmt, unit);
        });
      }
    };
  });

  $.plugin({
    provides: "debug, debugStack",
    depends: "core"
  }, function() {
    var explodeStack, protoChain;
    explodeStack = function(stack, node_modules) {
      var err, files, fs, lines, lines_cache, message, nl;
      nl = /(?:\r\n|\r|\n)/;
      fs = null;
      try {
        fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      } catch (error1) {
        err = error1;
        return stack;
      }
      lines = $(String(stack).split(nl)).filter(/^$/, false);
      if (!node_modules) {
        lines = lines.filter(/node_modules/, false);
      }
      message = lines.first();
      lines = lines.skip(1);
      lines_cache = Object.create(null);
      files = lines.map(function(s) {
        var before, col, f, f_lines, line, ln_num, ref, spacer, tabs;
        if (s == null) {
          return null;
        }
        f = s.replace(/^\s*at\s+/g, '').replace(/.*\(([^:]+:\d+:\d+)\)$/, "$1");
        try {
          ref = f.split(/:/), f = ref[0], ln_num = ref[1], col = ref[2];
          f_lines = lines_cache[f] != null ? lines_cache[f] : lines_cache[f] = String(fs.readFileSync(f)).split(nl);
          if (f_lines == null) {
            return null;
          }
          before = "";
          if (ln_num > 1) {
            before = f_lines[ln_num - 2];
            if (before.length > 80) {
              before = "..8<.. " + before.substr(col - 25, 50) + " ..>8..";
            }
          }
          if (ln_num >= f_lines.length) {
            return null;
          }
          line = f_lines[ln_num - 1];
          if (line == null) {
            return null;
          }
          if (line.length > 80) {
            line = "..8<.." + line.substr(col - 25, 50) + "..>8..";
            col = 31;
          }
          tabs = line.replace(/[^\t]/g, '').length;
          spacer = $.repeat('\t', tabs) + $.repeat(' ', (col - 1) - tabs);
          return "  " + (ln_num - 1) + " " + before + "\n  " + ln_num + " " + line + "\n  " + ln_num + " " + spacer + "^";
        } catch (error1) {
          err = error1;
          return null;
        }
      });
      return message + "\n" + $.weave(files, lines).filter(null, false).join("\n");
    };
    protoChain = function(obj, arr) {
      if (!(obj && obj.constructor)) {
        return arr;
      }
      return protoChain(obj.__proto__, arr.push(obj.constructor));
    };
    return {
      $: {
        debugStack: function(error, node_modules) {
          var stack;
          if (node_modules == null) {
            node_modules = false;
          }
          stack = (function() {
            switch (false) {
              case !$.is('error', error):
                return String(error.stack);
              case !$.is('string', error):
                return error;
              default:
                return String(error);
            }
          })();
          return explodeStack(stack, node_modules);
        },
        protoChain: function(o) {
          return protoChain(o.__proto__, $());
        }
      }
    };
  });

  $.plugin({
    provides: "delay,immediate,interval",
    depends: "is,select,extend,bound,core"
  }, function() {
    return {
      $: {
        delay: (function() {
          var timeoutQueue;
          timeoutQueue = $.extend([], (function() {
            var next;
            next = function(a) {
              return function() {
                if (a.length) {
                  a.shift()();
                }
                return null;
              };
            };
            return {
              add: function(f, n) {
                var i, i1, ref;
                $.extend(f, {
                  order: n + $.now,
                  timeout: setTimeout(next(this), n)
                });
                for (i = i1 = 0, ref = this.length; i1 <= ref; i = i1 += 1) {
                  if (i === this.length || this[i].order > f.order) {
                    this.splice(i, 0, f);
                    break;
                  }
                }
                return this;
              },
              cancel: function(f) {
                var i;
                if ((i = this.indexOf(f)) > -1) {
                  this.splice(i, 1);
                  clearTimeout(f.timeout);
                }
                return this;
              }
            };
          })());
          return function(n, f) {
            var b, k, v;
            switch (false) {
              case !$.is('object', n):
                b = $((function() {
                  var results;
                  results = [];
                  for (k in n) {
                    v = n[k];
                    results.push($.delay(k, v));
                  }
                  return results;
                })());
                return {
                  cancel: function() {
                    return b.select('cancel').call();
                  },
                  unref: function() {
                    return b.select('unref').call();
                  },
                  ref: function() {
                    return b.select('ref').call();
                  }
                };
              case !$.is("function", f):
                timeoutQueue.add(f, parseInt(n, 10));
                return {
                  cancel: function() {
                    return timeoutQueue.cancel(f);
                  },
                  unref: function(f) {
                    var ref;
                    return (ref = f.timeout) != null ? ref.unref() : void 0;
                  },
                  ref: function(f) {
                    var ref;
                    return (ref = f.timeout) != null ? ref.ref() : void 0;
                  }
                };
              default:
                throw new Error("Bad arguments to $.delay (expected: int,function given: " + ($.type(n)) + "," + ($.type(f)) + ")");
            }
          };
        })(),
        immediate: (function() {
          switch (false) {
            case !('setImmediate' in $.global):
              return $.global.setImmediate;
            case (typeof process !== "undefined" && process !== null ? process.nextTick : void 0) == null:
              return process.nextTick;
            default:
              return function(f) {
                return setTimeout(f, 0);
              };
          }
        })(),
        interval: function(n, f) {
          var g, paused, ret;
          paused = false;
          ret = $.delay(n, g = function() {
            if (!paused) {
              f();
            }
            return $.delay(n, g);
          });
          return $.extend(ret, {
            pause: function(p) {
              if (p == null) {
                p = true;
              }
              return paused = p;
            },
            resume: function(p) {
              if (p == null) {
                p = true;
              }
              return paused = !p;
            }
          });
        }
      },
      delay: function(n, f) {
        $.delay(n, $.bound(this, f));
        return this;
      }
    };
  });

  $.plugin({
    depends: "inherit,reduce",
    provides: "diff,stringDistance,stringDiff"
  }, function() {
    var collapse, del, diff, diff_memo, ins, lev, lev_memo, min, sub;
    lev_memo = Object.create(null);
    min = Math.min;
    lev = function(s, i, n, t, j, m, dw, iw, sw) {
      var name1, name2;
      return lev_memo[name1 = [s, i, n, t, j, m, dw, iw, sw]] != null ? lev_memo[name1] : lev_memo[name1] = lev_memo[name2 = [t, j, m, s, i, n, dw, iw, sw]] != null ? lev_memo[name2] : lev_memo[name2] = (function() {
        switch (false) {
          case !(m <= 0):
            return n;
          case !(n <= 0):
            return m;
          default:
            return min(dw + lev(s, i + 1, n - 1, t, j, m, dw, iw, sw), iw + lev(s, i, n, t, j + 1, m - 1, dw, iw, sw), (sw * (s[i] !== t[j])) + lev(s, i + 1, n - 1, t, j + 1, m - 1, dw, iw, sw));
        }
      })();
    };
    collapse = function(ops) {
      return $.inherit({
        toHTML: function() {
          return this.reduce((function(a, x) {
            return a += (function() {
              switch (x.op) {
                case 'ins':
                  return "<ins>" + x.v + "</ins>";
                case 'del':
                  return "<del>" + x.v + "</del>";
                case 'sub':
                  return "<del>" + x.v + "</del><ins>" + x.w + "</ins>";
                case 'sav':
                  return x.v;
              }
            })();
          }), "");
        }
      }, ops.reduce((function(a, x) {
        var last;
        if (x.op === 'sub' && x.v === x.w) {
          x.op = 'sav';
          delete x.w;
        }
        if (!a.length) {
          a.push(x);
        } else {
          if ((last = a.last()).op === x.op) {
            last.v += x.v;
            if (last.op === 'sub') {
              last.w += x.w;
            }
          } else {
            a.push(x);
          }
        }
        return a;
      }), $()));
    };
    diff_memo = Object.create(null);
    del = function(c) {
      return {
        op: 'del',
        v: c
      };
    };
    ins = function(c) {
      return {
        op: 'ins',
        v: c
      };
    };
    sub = function(c, d) {
      return {
        op: 'sub',
        v: c,
        w: d
      };
    };
    diff = function(s, i, n, t, j, m, dw, iw, sw) {
      var name1;
      return diff_memo[name1 = [s, i, n, t, j, m, dw, iw, sw]] != null ? diff_memo[name1] : diff_memo[name1] = collapse((function() {
        var args, c, costs, i1, j1, len1, len2, ref, ref1, results, results1;
        switch (false) {
          case !(m <= 0):
            ref = s.substr(i, n);
            results = [];
            for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
              c = ref[i1];
              results.push(del(c));
            }
            return results;
            break;
          case !(n <= 0):
            ref1 = t.substr(j, m);
            results1 = [];
            for (j1 = 0, len2 = ref1.length; j1 < len2; j1++) {
              c = ref1[j1];
              results1.push(ins(c));
            }
            return results1;
            break;
          default:
            sw *= s[i] !== t[j];
            args = {
              del: [s + 0, i + 1, n - 1, t + 0, j + 0, m + 0, 1.00, 1.50, 1.50],
              ins: [s + 0, i + 0, n + 0, t + 0, j + 1, m - 1, 1.50, 1.00, 1.50],
              sub: [s + 0, i + 1, n - 1, t + 0, j + 1, m - 1, 1.00, 1.00, 1.00]
            };
            costs = {
              del: dw + lev.apply(null, args.del),
              ins: iw + lev.apply(null, args.ins),
              sub: sw + lev.apply(null, args.sub)
            };
            switch (min(costs.del, costs.ins, costs.sub)) {
              case costs.del:
                return $(del(s[i])).concat(diff.apply(null, args.del));
              case costs.ins:
                return $(ins(t[j])).concat(diff.apply(null, args.ins));
              case costs.sub:
                return $(sub(s[i], t[j])).concat(diff.apply(null, args.sub));
            }
        }
      })());
    };
    return {
      $: {
        stringDistance: function(s, t) {
          return lev(s, 0, s.length, t, 0, t.length, 1, 1, 1);
        },
        stringDiff: function(s, t) {
          return diff(s, 0, s.length, t, 0, t.length, 1, 1, 1.5);
        }
      }
    };
  });

  if ($.global.document != null) {
    $.plugin({
      provides: "dom,HTML,html,append,appendText,appendTo,prepend,prependTo," + "before,after,wrap,unwrap,replace,attr,data,addClass,removeClass,toggleClass," + "hasClass,text,val,css,defaultCss,rect,width,height,top,left,bottom,right," + "position,scrollToCenter,child,parents,next,prev,remove,find,querySelectorAll," + "clone,toFragment",
      depends: "function,type,string"
    }, function() {
      var after, bNodelistsAreSpecial, before, escaper, getOrSetRect, parser, selectChain, toFrag, toNode;
      bNodelistsAreSpecial = false;
      $.type.register("nodelist", {
        is: function(o) {
          return (o != null) && $.isType("NodeList", o);
        },
        hash: function(o) {
          var i;
          return $((function() {
            var i1, len1, results;
            results = [];
            for (i1 = 0, len1 = o.length; i1 < len1; i1++) {
              i = o[i1];
              results.push($.hash(i));
            }
            return results;
          })()).sum();
        },
        array: (function() {
          var err;
          try {
            document.querySelectorAll("xxx").__proto__ = {};
            return $.identity;
          } catch (error1) {
            err = error1;
            bNodelistsAreSpecial = true;
            return function(o) {
              var i1, len1, node, results;
              results = [];
              for (i1 = 0, len1 = o.length; i1 < len1; i1++) {
                node = o[i1];
                results.push(node);
              }
              return results;
            };
          }
        })(),
        string: function(o) {
          return "{Nodelist:[" + $(o).select('nodeName').join(",") + "]}";
        },
        node: function(o) {
          return $(o).toFragment();
        }
      });
      $.type.register("node", {
        is: function(o) {
          return (o != null ? o.nodeType : void 0) > 0;
        },
        hash: function(o) {
          return $.checksum(o.nodeName) + $.hash(o.attributes) + $.checksum(o.innerHTML);
        },
        string: function(o) {
          return o.toString();
        },
        node: $.identity
      });
      $.type.register("fragment", {
        is: function(o) {
          return (o != null ? o.nodeType : void 0) === 11;
        },
        hash: function(o) {
          var x;
          return $((function() {
            var i1, len1, ref, results;
            ref = o.childNodes;
            results = [];
            for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
              x = ref[i1];
              results.push($.hash(x));
            }
            return results;
          })()).sum();
        },
        string: function(o) {
          return o.toString();
        },
        node: $.identity
      });
      $.type.register("html", {
        is: function(o) {
          var s;
          return typeof o === "string" && (s = o.trimLeft())[0] === "<" && s[s.length - 1] === ">";
        },
        node: function(h) {
          var childNodes, df, i, i1, n, node, ref;
          (node = document.createElement('div')).innerHTML = h;
          if ((n = (childNodes = node.childNodes).length) === 1) {
            return node.removeChild(childNodes[0]);
          }
          df = document.createDocumentFragment();
          for (i = i1 = 0, ref = n; i1 < ref; i = i1 += 1) {
            df.appendChild(node.removeChild(childNodes[0]));
          }
          return df;
        },
        array: function(o) {
          var h;
          return $.type.lookup(h = $.HTML.parse(o)).array(h);
        },
        string: function(o) {
          return "'" + o + "'";
        },
        repr: function(o) {
          return '"' + o + '"';
        }
      });
      $.type.extend({
        unknown: {
          node: function() {
            return null;
          }
        },
        bling: {
          node: function(o) {
            return o.toFragment();
          }
        },
        node: {
          html: function(n) {
            var d, ret;
            d = document.createElement("div");
            d.appendChild((n = n.cloneNode(true)));
            ret = d.innerHTML;
            d.removeChild(n);
            return ret;
          }
        },
        string: {
          node: function(o) {
            return $(o).toFragment();
          },
          array: (function() {
            if (bNodelistsAreSpecial) {
              return function(o) {
                var nl;
                return $.type.lookup(nl = document.querySelectorAll(o)).array(nl);
              };
            } else {
              return function(o) {
                return document.querySelectorAll(o);
              };
            }
          })()
        },
        "function": {
          node: function(o) {
            return $(o.toString()).toFragment();
          }
        }
      });
      toFrag = function(a) {
        if (!a.parentNode) {
          document.createDocumentFragment().appendChild(a);
        }
        return a;
      };
      before = function(a, b) {
        return toFrag(a).parentNode.insertBefore(b, a);
      };
      after = function(a, b) {
        return toFrag(a).parentNode.insertBefore(b, a.nextSibling);
      };
      toNode = function(x) {
        return $.type.lookup(x).node(x);
      };
      escaper = false;
      parser = false;
      $.computeCSSProperty = function(k) {
        return function() {
          return $.global.getComputedStyle(this, null).getPropertyValue(k);
        };
      };
      getOrSetRect = function(p) {
        return function(x) {
          if (x != null) {
            return this.css(p, x);
          } else {
            return this.rect().select(p);
          }
        };
      };
      selectChain = function(prop) {
        return function() {
          return this.map(function(p) {
            return $((function() {
              var results;
              results = [];
              while (p = p[prop]) {
                results.push(p);
              }
              return results;
            })());
          });
        };
      };
      return {
        $: {
          HTML: {
            parse: function(h) {
              return $.type.lookup(h).node(h);
            },
            stringify: function(n) {
              return $.type.lookup(n).html(n);
            },
            escape: function(h) {
              var ret;
              escaper || (escaper = $("<div>&nbsp;</div>").child(0));
              ret = escaper.zap('data', h).select("parentNode.innerHTML").first();
              escaper.zap('data', '');
              return ret;
            }
          }
        },
        html: function(h) {
          switch ($.type(h)) {
            case "undefined":
            case "null":
              return this.select('innerHTML');
            case "string":
            case "html":
              return this.zap('innerHTML', h);
            case "bling":
              return this.html(h.toFragment());
            case "node":
              return this.each(function() {
                var results;
                this.replaceChild(this.childNodes[0], h);
                results = [];
                while (this.childNodes.length > 1) {
                  results.push(this.removeChild(this.childNodes[1]));
                }
                return results;
              });
          }
        },
        append: function(x) {
          x = toNode(x);
          if (x == null) {
            return;
          }
          return this.each(function(n) {
            return n != null ? typeof n.appendChild === "function" ? n.appendChild(x.cloneNode(true)) : void 0 : void 0;
          });
        },
        appendText: function(text) {
          var x;
          x = document.createTextNode(text);
          if (x == null) {
            return;
          }
          return this.each(function(n) {
            return n != null ? typeof n.appendChild === "function" ? n.appendChild(x.cloneNode(true)) : void 0 : void 0;
          });
        },
        appendTo: function(x) {
          var clones, i;
          clones = this.map(function() {
            return this.cloneNode(true);
          });
          i = 0;
          $(x).each(function() {
            return this.appendChild(clones[i++]);
          });
          return clones;
        },
        prepend: function(x) {
          if (x != null) {
            x = toNode(x);
            this.take(1).each(function() {
              switch (false) {
                case !(this.childNodes.length > 0):
                  return before(this.childNodes[0], x);
                default:
                  return this.appendChild(x);
              }
            });
            this.skip(1).each(function() {
              switch (false) {
                case !this.childNodes.length:
                  return before(this.childNodes[0], x.cloneNode(true));
                default:
                  return this.appendChild(x.cloneNode(true));
              }
            });
          }
          return this;
        },
        prependTo: function(x) {
          if (x != null) {
            $(x).prepend(this);
          }
          return this;
        },
        before: function(x) {
          if (x != null) {
            x = toNode(x);
            this.take(1).each(function() {
              return before(this, x);
            });
            this.skip(1).each(function() {
              return before(this, x.cloneNode(true));
            });
          }
          return this;
        },
        after: function(x) {
          if (x != null) {
            x = toNode(x);
            this.take(1).each(function() {
              return after(this, x);
            });
            this.skip(1).each(function() {
              return after(this, x.cloneNode(true));
            });
          }
          return this;
        },
        wrap: function(parent) {
          parent = toNode(parent);
          if ($.is("fragment", parent)) {
            throw new Error("cannot call .wrap() with a fragment as the parent");
          }
          return this.each(function(child) {
            var grandpa, marker;
            if (($.is("fragment", child)) || !child.parentNode) {
              return parent.appendChild(child);
            }
            grandpa = child.parentNode;
            marker = document.createElement("dummy");
            parent.appendChild(grandpa.replaceChild(marker, child));
            return grandpa.replaceChild(parent, marker);
          });
        },
        unwrap: function() {
          return this.each(function() {
            if (this.parentNode && this.parentNode.parentNode) {
              return this.parentNode.parentNode.replaceChild(this, this.parentNode);
            } else if (this.parentNode) {
              return this.parentNode.removeChild(this);
            }
          });
        },
        replace: function(n) {
          var clones, i, i1, r, ref, ref1;
          if ($.is('regexp', n)) {
            r = arguments[1];
            return this.map(function(s) {
              return s.replace(n, r);
            });
          }
          n = toNode(n);
          clones = this.map(function() {
            return n.cloneNode(true);
          });
          for (i = i1 = 0, ref = clones.length; i1 < ref; i = i1 += 1) {
            if ((ref1 = this[i].parentNode) != null) {
              ref1.replaceChild(clones[i], this[i]);
            }
          }
          return clones;
        },
        attr: function(a, v) {
          var k;
          if ($.is('object', a)) {
            for (k in a) {
              v = a[k];
              this.attr(k, v);
            }
          } else {
            switch (v) {
              case void 0:
                return this.select("getAttribute").call(a, v);
              case null:
                this.select("removeAttribute").call(a, v);
                break;
              default:
                this.select("setAttribute").call(a, v);
            }
          }
          return this;
        },
        data: function(k, v) {
          return this.attr("data-" + ($.dashize(k)), v);
        },
        addClass: function(x) {
          var notempty;
          notempty = function(y) {
            return y !== "";
          };
          return this.removeClass(x).each(function() {
            var c;
            c = this.className.split(" ").filter(notempty);
            c.push(x);
            return this.className = c.join(" ");
          });
        },
        removeClass: function(x) {
          var notx;
          notx = function(y) {
            return y !== x;
          };
          return this.each(function() {
            this.className = this.className.split(" ").filter(notx).join(" ");
            if (this.className.length === 0) {
              return this.removeAttribute('class');
            }
          });
        },
        toggleClass: function(x) {
          var notx;
          notx = function(y) {
            return y !== x;
          };
          return this.each(function() {
            var cls, filter;
            cls = this.className.split(" ");
            filter = $.not($.isEmpty);
            if ((cls.indexOf(x)) > -1) {
              filter = $.and(notx, filter);
            } else {
              cls.push(x);
            }
            this.className = cls.filter(filter).join(" ");
            if (this.className.length === 0) {
              return this.removeAttribute('class');
            }
          });
        },
        hasClass: function(x) {
          return this.select('className.split').call(" ").select('indexOf').call(x).map(function(x) {
            return x > -1;
          });
        },
        text: function(t) {
          if (t != null) {
            return this.zap('textContent', t);
          }
          return this.select('textContent');
        },
        val: function(v) {
          if (v != null) {
            return this.zap('value', v);
          }
          return this.select('value');
        },
        css: function(key, v) {
          var i, i1, k, n, nn, ref, setters, values;
          if ((v != null) || $.is('object', key)) {
            setters = this.select('style.setProperty');
            if ($.is("object", key)) {
              for (k in key) {
                v = key[k];
                setters.call(k, v, "");
              }
            } else if ($.is("array", v)) {
              for (i = i1 = 0, ref = n = Math.max(v.length, nn = setters.length); i1 < ref; i = i1 += 1) {
                setters[i % nn](key, v[i % n], "");
              }
            } else if ($.is("function", v)) {
              values = this.select("style." + key).weave(this.map($.computeCSSProperty(key))).fold($.coalesce).weave(setters).fold(function(setter, value) {
                return setter(key, v.call(value, value));
              });
            } else {
              setters.call(key, v, "");
            }
            return this;
          } else {
            return this.select("style." + key).weave(this.map($.computeCSSProperty(key))).fold($.coalesce);
          }
        },
        defaultCss: function(k, v) {
          var i, sel, style;
          sel = this.selector;
          style = "";
          if ($.is("string", k)) {
            if ($.is("string", v)) {
              style += sel + " { " + k + ": " + v + " } ";
            } else {
              throw Error("defaultCss requires a value with a string key");
            }
          } else if ($.is("object", k)) {
            for (i in k + "} ") {
              style += (sel + " { ") + (i + ": " + k[i] + "; ");
            }
          }
          $("<style></style>").text(style).appendTo("head");
          return this;
        },
        rect: function() {
          return this.map(function(item) {
            switch (item) {
              case window:
                return {
                  width: window.innerWidth,
                  height: window.innerHeight,
                  top: 0,
                  left: 0,
                  right: window.innerWidth,
                  bottom: window.innerHeight
                };
              default:
                return item.getBoundingClientRect();
            }
          });
        },
        width: getOrSetRect("width"),
        height: getOrSetRect("height"),
        top: getOrSetRect("top"),
        left: getOrSetRect("left"),
        bottom: getOrSetRect("bottom"),
        right: getOrSetRect("right"),
        position: function(left, top) {
          switch (false) {
            case !(left == null):
              return this.rect();
            case !(top == null):
              return this.css("left", $.px(left));
            default:
              return this.css({
                top: $.px(top),
                left: $.px(left)
              });
          }
        },
        scrollToCenter: function() {
          document.body.scrollTop = this[0].offsetTop - ($.global.innerHeight / 2);
          return this;
        },
        child: function(n) {
          return this.select('childNodes').map(function() {
            return this[n < 0 ? n + this.length : n];
          });
        },
        parents: selectChain('parentNode'),
        prev: selectChain('previousSibling'),
        next: selectChain('nextSibling'),
        remove: function() {
          return this.each(function() {
            var ref;
            return (ref = this.parentNode) != null ? ref.removeChild(this) : void 0;
          });
        },
        find: function(css, limit) {
          if (limit == null) {
            limit = 0;
          }
          return this.filter("*").map((function() {
            switch (limit) {
              case 0:
                return function() {
                  return this.querySelectorAll(css);
                };
              case 1:
                return function() {
                  return $(this.querySelector(css));
                };
              default:
                return function() {
                  return $(this.querySelectorAll(css)).take(limit);
                };
            }
          })()).flatten();
        },
        querySelectorAll: function(expr) {
          return this.filter("*").reduce(function(a, i) {
            return a.extend(i.querySelectorAll(expr));
          }, $());
        },
        clone: function(deep, count) {
          var c;
          if (deep == null) {
            deep = true;
          }
          if (count == null) {
            count = 1;
          }
          c = function(n) {
            if ($.is("node", n)) {
              return n.cloneNode(deep);
            }
          };
          return this.map(function() {
            var _, i1, ref, results;
            switch (count) {
              case 1:
                return c(this);
              default:
                results = [];
                for (_ = i1 = 0, ref = count; i1 < ref; _ = i1 += 1) {
                  results.push(c(this));
                }
                return results;
            }
          });
        },
        toFragment: function() {
          var df;
          if (this.length > 1) {
            df = document.createDocumentFragment();
            (this.map(toNode)).map(function(node) {
              return df.appendChild(node);
            });
            return df;
          }
          return toNode(this[0]);
        }
      };
    });
  }

  $.plugin({
    provides: "EventEmitter",
    depends: "type,hook"
  }, function() {
    return {
      $: {
        EventEmitter: $.init.append(function(obj) {
          var add, list, listeners;
          if (obj === $.global || obj === null || obj === (void 0)) {
            if (this === $.global || this === $) {
              obj = {};
            } else {
              obj = this;
            }
          }
          listeners = Object.create(null);
          list = function(e) {
            return listeners[e] || (listeners[e] = []);
          };
          return $.inherit({
            emit: function() {
              var a, e, f, i1, len1, ref;
              e = arguments[0], a = 2 <= arguments.length ? slice.call(arguments, 1) : [];
              ref = list(e);
              for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
                f = ref[i1];
                f.apply(this, a);
              }
              return this;
            },
            on: add = function(e, f) {
              var k, v;
              ('string' === typeof e) && list(e).push(f);
              for (k in e) {
                v = e[k];
                ('object' === typeof e) && this.addListener(k, v);
              }
              return this;
            },
            addListener: add,
            removeListener: function(e, f) {
              var i, l;
              if ((i = (l = list(e)).indexOf(f)) > -1) {
                return l.splice(i, 1);
              }
            },
            removeAllListeners: function(e) {
              return listeners[e] = [];
            },
            setMaxListeners: function() {},
            listeners: function(e) {
              return list(e).slice(0);
            }
          }, obj);
        })
      }
    };
  });

  $.plugin({
    depends: "dom,function,core",
    provides: "event,bind,unbind,trigger,delegate,undelegate,click,ready"
  }, function() {
    var EVENTSEP_RE, _b, _get, base1, binder, events, ret, triggerReady;
    EVENTSEP_RE = /,* +/;
    events = ['mousemove', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'blur', 'focus', 'load', 'unload', 'reset', 'submit', 'keyup', 'keydown', 'keypress', 'change', 'abort', 'cut', 'copy', 'paste', 'selection', 'drag', 'drop', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'gesturestart', 'gestureend', 'gesturecancel', 'hashchange'];
    binder = function(e) {
      return function(f) {
        if ($.is("function", f)) {
          return this.bind(e, f);
        } else {
          return this.trigger(e, f);
        }
      };
    };
    _get = function() {
      var keys, name1, self;
      self = arguments[0], keys = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (keys.length === 0) {
        return self;
      } else {
        return _get.apply(null, [(self[name1 = keys[0]] || (self[name1] = Object.create(null)))].concat(slice.call(keys.slice(1))));
      }
    };
    triggerReady = $.once(function() {
      var base1;
      $(document).trigger("ready").unbind("ready");
      if (typeof document.removeEventListener === "function") {
        document.removeEventListener("DOMContentLoaded", triggerReady, false);
      }
      return typeof (base1 = $.global).removeEventListener === "function" ? base1.removeEventListener("load", triggerReady, false) : void 0;
    });
    if (typeof document.addEventListener === "function") {
      document.addEventListener("DOMContentLoaded", triggerReady, false);
    }
    if (typeof (base1 = $.global).addEventListener === "function") {
      base1.addEventListener("load", triggerReady, false);
    }
    _b = function(funcName) {
      return function(e, f) {
        var c;
        c = (e || "").split(EVENTSEP_RE);
        return this.each(function() {
          var i, i1, len1, results;
          results = [];
          for (i1 = 0, len1 = c.length; i1 < len1; i1++) {
            i = c[i1];
            results.push(this[funcName](i, f, true));
          }
          return results;
        });
      };
    };
    ret = {
      bind: _b("addEventListener"),
      unbind: _b("removeEventListener"),
      trigger: function(evt, args) {
        var e, evt_i, i1, len1, ref;
        if (args == null) {
          args = {};
        }
        args = $.extend({
          bubbles: true,
          cancelable: true
        }, args);
        ref = (evt || "").split(EVENTSEP_RE);
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          evt_i = ref[i1];
          switch (evt_i) {
            case "click":
            case "mousemove":
            case "mousedown":
            case "mouseup":
            case "mouseover":
            case "mouseout":
              e = document.createEvent("MouseEvents");
              args = $.extend({
                detail: 1,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                button: 0,
                relatedTarget: null
              }, args);
              e.initMouseEvent(evt_i, args.bubbles, args.cancelable, $.global, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.button, args.relatedTarget);
              break;
            case "blur":
            case "focus":
            case "reset":
            case "submit":
            case "abort":
            case "change":
            case "load":
            case "unload":
              e = document.createEvent("UIEvents");
              e.initUIEvent(evt_i, args.bubbles, args.cancelable, $.global, 1);
              break;
            case "touchstart":
            case "touchmove":
            case "touchend":
            case "touchcancel":
              e = document.createEvent("TouchEvents");
              args = $.extend({
                detail: 1,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                touches: [],
                targetTouches: [],
                changedTouches: [],
                scale: 1.0,
                rotation: 0.0
              }, args);
              e.initTouchEvent(evt_i, args.bubbles, args.cancelable, $.global, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.touches, args.targetTouches, args.changedTouches, args.scale, args.rotation);
              break;
            case "gesturestart":
            case "gestureend":
            case "gesturecancel":
              e = document.createEvent("GestureEvents");
              args = $.extend({
                detail: 1,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                target: null,
                scale: 1.0,
                rotation: 0.0
              }, args);
              e.initGestureEvent(evt_i, args.bubbles, args.cancelable, $.global, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.target, args.scale, args.rotation);
              break;
            case "keydown":
            case "keypress":
            case "keyup":
              e = document.createEvent("KeyboardEvents");
              args = $.extend({
                view: null,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                keyCode: 0,
                charCode: 0
              }, args);
              e.initKeyboardEvent(evt_i, args.bubbles, args.cancelable, $.global, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.keyCode, args.charCode);
              break;
            default:
              e = document.createEvent("Events");
              e.initEvent(evt_i, args.bubbles, args.cancelable);
              e = $.extend(e, args);
          }
          if (!e) {
            continue;
          }
          this.each(function() {
            var err;
            try {
              return this.dispatchEvent(e);
            } catch (error1) {
              err = error1;
              return $.log("dispatchEvent error:", err);
            }
          });
        }
        return this;
      },
      delegate: function(selector, e, f) {
        var h, i1, len1, node, ref;
        h = function(evt) {
          var ref, t;
          if (t = (ref = $(evt.target).parents()[0]) != null ? ref.unshift(evt.target).filter(selector)[0] : void 0) {
            return f.call((evt.target = t), evt);
          }
        };
        ref = this.bind(e, h);
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          node = ref[i1];
          _get(node, '__delegates__', selector, e)[f] = h;
        }
        return this;
      },
      undelegate: function(selector, e, f) {
        var h, i1, len1, node, ref, results;
        ref = this;
        results = [];
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          node = ref[i1];
          h = _get(node, '__delegates__', selector, e);
          if (h && h[f]) {
            this.unbind(e, h[f]);
            results.push(delete h[f]);
          } else {
            results.push(void 0);
          }
        }
        return results;
      },
      click: function(f) {
        var ref;
        if (f == null) {
          f = {};
        }
        if ((ref = this.css("cursor")) === "auto" || ref === "") {
          this.css("cursor", "pointer");
        }
        if ($.is("function", f)) {
          this.bind('click', f);
        } else {
          this.trigger('click', f);
        }
        return this;
      },
      ready: function(f) {
        if (triggerReady.exhausted) {
          return f.call(this);
        }
        return this.bind("ready", f);
      }
    };
    events.forEach(function(x) {
      return ret[x] = binder(x);
    });
    return ret;
  });

  $.plugin({
    provides: "function,identity,compose,once,cycle,bound,partial",
    depends: "extend,is,defineProperty,map"
  }, function() {
    return {
      $: {
        identity: function(o) {
          return o;
        },
        not: function(f) {
          return function() {
            return !f.apply(this, arguments);
          };
        },
        compose: function(f, g) {
          return function(x) {
            var y;
            return f.call(y, (y = g.call(x, x)));
          };
        },
        and: function(f, g) {
          return function(x) {
            return g.call(this, x) && f.call(this, x);
          };
        },
        once: function(f, n) {
          if (n == null) {
            n = 1;
          }
          return $.defineProperty((function() {
            if (n-- > 0) {
              return f.apply(this, arguments);
            }
          }), "exhausted", {
            get: function() {
              return n <= 0;
            }
          });
        },
        cycle: function() {
          var f, i;
          f = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          i = -1;
          return function() {
            return f[i = ++i % f.length].apply(this, arguments);
          };
        },
        bound: function(t, f, args) {
          var r;
          if (args == null) {
            args = [];
          }
          if (f == null) {
            return $.identity;
          }
          if ($.is("function", f.bind)) {
            args.splice(0, 0, t);
            r = f.bind.apply(f, args);
          } else {
            r = function() {
              var a;
              a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
              return f.apply(t, (args.length ? args : a));
            };
          }
          return $.extend(r, {
            toString: function() {
              return "bound-method of " + t + "." + f.name;
            }
          });
        },
        partial: function() {
          var a, f;
          f = arguments[0], a = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          return function() {
            var b;
            b = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return f.apply(null, slice.call(a).concat(slice.call(b)));
          };
        }
      },
      partial: function() {
        var a;
        a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return this.map(function(f) {
          return $.partial.apply($, [f].concat(slice.call(a)));
        });
      }
    };
  });

  $.plugin(function() {
    var select;
    Object.assign(((function*() {
      return (yield);
    })()).constructor.prototype, {
      toArray: function() {
        var a, ref, x;
        a = [];
        ref = this;
        for (x of ref) {
          a.push(x);
        }
        return a;
      },
      skip: function(n) {
        while (n-- > 0) {
          this.next();
        }
        return this;
      },
      limit: function*(n) {
        var next;
        while (n-- > 0) {
          if ((next = this.next()).done) {
            return;
          }
          yield next.value;
        }
        return null;
      },
      map: function*(f) {
        var ref, x;
        ref = this;
        for (x of ref) {
          yield f(x);
        }
        return null;
      },
      filter: function*(f, v) {
        var ref, x;
        if (v == null) {
          v = true;
        }
        ref = this;
        for (x of ref) {
          if (f(x) === v) {
            yield x;
          }
        }
        return null;
      },
      select: function*(key) {
        var ref, x;
        key = key.split('.');
        ref = this;
        for (x of ref) {
          yield select(x, key);
        }
        return null;
      }
    });
    select = function(o, k) {
      var i1, len1, x;
      for (i1 = 0, len1 = k.length; i1 < len1; i1++) {
        x = k[i1];
        o = o != null ? o[x] : void 0;
      }
      return o;
    };
    return {};
  });

  $.plugin({
    provides: "hash",
    depends: "type"
  }, function() {
    var array_hash, maxHash;
    maxHash = 0xFFFFFFFF;
    array_hash = function(d) {
      return function(o) {
        var x;
        return d + $((function() {
          var i1, len1, results;
          results = [];
          for (i1 = 0, len1 = o.length; i1 < len1; i1++) {
            x = o[i1];
            results.push($.hash(x));
          }
          return results;
        })()).reduce((function(a, x) {
          return ((a * a) + (x | 0)) % maxHash;
        }), 1);
      };
    };
    $.type.extend({
      unknown: {
        hash: function(o) {
          return $.checksum($.toString(o));
        }
      },
      object: {
        hash: function(o) {
          var k, v;
          return 1970931729 + $((function() {
            var results;
            results = [];
            for (k in o) {
              v = o[k];
              results.push($.hash(k) + $.hash(v));
            }
            return results;
          })()).sum();
        }
      },
      array: {
        hash: array_hash(1816922041)
      },
      "arguments": {
        hash: array_hash(298517431)
      },
      bling: {
        hash: array_hash(92078573)
      },
      bool: {
        hash: function(o) {
          return parseInt(o ? 1 : void 0);
        }
      },
      regexp: {
        hash: function(o) {
          return 148243084 + $.checksum($.toString(o));
        }
      }
    });
    return {
      $: {
        hash: function(x) {
          return $.type.lookup(x).hash(x);
        }
      },
      hash: function() {
        return $.hash(this);
      }
    };
  });

  $.plugin(function() {
    return {
      $: {
        histogram: function(data, bucket_width, output_width) {
          var buckets, end, i, i1, j1, len, len1, m, max, mean, min, n, pct, pct_sum, ref, ret, sum, total, x;
          if (bucket_width == null) {
            bucket_width = 1;
          }
          if (output_width == null) {
            output_width = 60;
          }
          buckets = $();
          len = 0;
          min = 2e308;
          mean = 0;
          max = 0;
          total = 0;
          for (i1 = 0, len1 = data.length; i1 < len1; i1++) {
            x = data[i1];
            min = Math.min(x, min);
            max = Math.max(x, max);
            total += x;
            i = Math.floor(x / bucket_width);
            if (i in buckets) {
              buckets[i] += 1;
            } else {
              buckets[i] = 1;
            }
            len = Math.max(len, i + 1);
          }
          buckets.length = len;
          mean = total / data.length;
          m = buckets.max();
          buckets = buckets.or(0).scale(1 / m).scale(output_width);
          sum = buckets.sum();
          ret = "";
          pct_sum = 0;
          for (n = j1 = 0, ref = len; j1 < ref; n = j1 += 1) {
            end = (n + 1) * bucket_width;
            pct = buckets[n] * 100 / sum;
            pct_sum += pct;
            if (pct_sum > 0) {
              ret += $.padLeft(pct_sum.toFixed(2) + "%", 7) + $.padRight(" < " + (end.toFixed(2)), 10) + ": " + $.repeat("#", buckets[n]) + "\n";
            }
          }
          return ret + ("N: " + data.length + " Min: " + (min.toFixed(2)) + " Max: " + (max.toFixed(2)) + " Mean: " + (mean.toFixed(2)));
        }
      },
      histogram: function() {
        return $.histogram(this);
      }
    };
  });

  $.plugin({
    provides: "hook",
    depends: "type"
  }, function() {
    var hook;
    hook = function() {
      var chain;
      chain = [];
      return $.extend((function(args) {
        var func, i1, len1;
        for (i1 = 0, len1 = chain.length; i1 < len1; i1++) {
          func = chain[i1];
          args = func.call(this, args);
        }
        return args;
      }), {
        prepend: function(o) {
          chain.unshift(o);
          return o;
        },
        append: function(o) {
          chain.push(o);
          return o;
        }
      });
    };
    $.init = hook();
    return {
      $: {
        hook: hook
      }
    };
  });

  $.plugin({
    depends: "dom",
    provides: "http"
  }, function() {
    var formencode;
    formencode = function(obj) {
      var i, o;
      if ($.is('object', obj)) {
        o = JSON.parse(JSON.stringify(obj));
        return ((function() {
          var results;
          results = [];
          for (i in o) {
            results.push(i + "=" + (escape(o[i])));
          }
          return results;
        })()).join("&");
      } else {
        return obj;
      }
    };
    $.type.register("http", {
      is: function(o) {
        return $.isType('XMLHttpRequest', o);
      },
      array: function(o) {
        return [o];
      }
    });
    return {
      $: {
        http: function(url, opts) {
          var _error, _success, k, ref, result, v, xhr;
          if (opts == null) {
            opts = {};
          }
          xhr = new XMLHttpRequest();
          result = $.Promise();
          if ($.is("function", opts)) {
            opts = {
              success: $.bound(xhr, opts)
            };
          }
          opts = $.extend({
            method: "GET",
            data: null,
            state: $.identity,
            success: $.identity,
            error: $.identity,
            async: true,
            asBlob: false,
            timeout: 0,
            followRedirects: false,
            withCredentials: false,
            headers: {}
          }, opts);
          opts.state = $.bound(xhr, opts.state);
          _success = $.bound(xhr, opts.success);
          _error = $.bound(xhr, opts.error);
          opts.success = function(text) {
            result.resolve(text);
            return _success(text);
          };
          opts.error = function(err) {
            result.reject(err);
            return _error(err);
          };
          if (opts.data && opts.method === "GET") {
            url += "?" + formencode(opts.data);
          } else if (opts.data && opts.method === "POST") {
            opts.data = formencode(opts.data);
          }
          xhr.open(opts.method, url, opts.async);
          xhr = $.extend(xhr, {
            asBlob: opts.asBlob,
            timeout: opts.timeout,
            followRedirects: opts.followRedirects,
            withCredentials: opts.withCredentials,
            onreadystatechange: function() {
              if (typeof opts.state === "function") {
                opts.state();
              }
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  return opts.success(xhr.responseText);
                } else {
                  return opts.error(xhr.status, xhr.statusText);
                }
              }
            }
          });
          ref = opts.headers;
          for (k in ref) {
            v = ref[k];
            xhr.setRequestHeader(k, v);
          }
          try {
            xhr.addEventListener("progress", (function(_this) {
              return function(evt) {
                $.log("xhr progress event", evt.loaded, evt.total);
                return result.emit('progress', evt.loaded, evt.total);
              };
            })(this));
          } catch (error1) {}
          xhr.send(opts.data);
          return $.extend(result, {
            cancel: function() {
              return xhr.cancel();
            }
          });
        },
        post: function(url, opts) {
          if (opts == null) {
            opts = {};
          }
          if ($.is("function", opts)) {
            opts = {
              success: opts
            };
          }
          opts.method = "POST";
          return $.http(url, opts);
        },
        get: function(url, opts) {
          if (opts == null) {
            opts = {};
          }
          if ($.is("function", opts)) {
            opts = {
              success: opts
            };
          }
          opts.method = "GET";
          return $.http(url, opts);
        }
      }
    };
  });

  $.depends('hook', function() {
    return $.init.append(function(obj) {
      var keyMakers, map;
      map = new Map();
      keyMakers = [];
      return $.inherit({
        index: function(keyMaker) {
          var _map, i1, key, len1, ref, x;
          if (keyMakers.indexOf(keyMaker) === -1) {
            keyMakers.push(keyMaker);
            map.set(keyMaker, new Map());
          }
          ref = this;
          for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
            x = ref[i1];
            key = keyMaker(x);
            _map = map.get(keyMaker);
            if (!_map.has(key)) {
              _map.set(key, $());
            }
            _map.get(key).push(x);
          }
          return this;
        },
        query: function*(criteria) {
          var _map, i1, item, j1, key, keyMaker, len1, len2, ref;
          for (i1 = 0, len1 = keyMakers.length; i1 < len1; i1++) {
            keyMaker = keyMakers[i1];
            _map = map.get(keyMaker);
            if (_map.has(key = keyMaker(criteria))) {
              ref = _map.get(key);
              for (j1 = 0, len2 = ref.length; j1 < len2; j1++) {
                item = ref[j1];
                if (((yield item)) === false) {
                  return;
                }
              }
            }
          }
          return null;
        },
        queryOne: function(criteria) {
          return this.query(criteria).next().value;
        }
      }, obj);
    });
  });

  $.plugin({
    provides: "toHTML",
    depends: "type,synth,once"
  }, function() {
    var dumpScript, dumpStyles, table, tableRow;
    dumpStyles = $.once(function() {
      try {
        return $("head").append($.synth("style#dump").text("table.dump                { border: 1px solid black; }\ntable.dump tr.h           { background-color: blue; color: white; cursor: pointer; }\ntable.dump tr.h th        { padding: 0px 4px; }\ntable.dump tr.h.array     { background-color: purple; }\ntable.dump tr.h.bling     { background-color: gold; }\ntable.dump td             { padding: 2px; }\ntable.dump td.k           { background-color: lightblue; }\ntable.dump td.v.string    { background-color: #cfc; }\ntable.dump td.v.number    { background-color: #ffc; }\ntable.dump td.v.bool      { background-color: #fcf; }"));
      } catch (error1) {}
    });
    dumpScript = $.once(function() {
      try {
        return $("head").append($.synth("script#dump").text("$(document.body).delegate('table.dump tr.h', 'click', function() {\n	$(this.parentNode).find(\"tr.kv\").toggle()\n})"));
      } catch (error1) {}
    });
    table = function(t, rows) {
      var i1, len1, row, tab;
      tab = $.synth("table.dump tr.h." + t + " th[colspan=2] '" + t + "'");
      if (t === "array" || t === "bling" || t === "nodelist") {
        tab.find("th").appendText(" [" + rows.length + "]");
      }
      for (i1 = 0, len1 = rows.length; i1 < len1; i1++) {
        row = rows[i1];
        tab.append(row);
      }
      return tab[0];
    };
    tableRow = function(k, v, open) {
      var _t, row, td;
      row = $.synth("tr.kv td.k[align=right][valign=top] '" + k + "' + td.v");
      td = row.find("td.v");
      switch (_t = $.type(v = $.toHTML(v, open))) {
        case "string":
        case "number":
        case "bool":
        case "html":
        case "null":
        case "undefined":
          td.appendText(String(v));
          break;
        default:
          td.append(v);
      }
      td.addClass(_t);
      if (!open) {
        row.toggle();
      }
      return row;
    };
    return {
      $: {
        toHTML: function(obj, open) {
          var k, s, t, v;
          if (open == null) {
            open = true;
          }
          dumpStyles();
          dumpScript();
          switch (t = $.type(obj)) {
            case "string":
            case "number":
            case "bool":
            case "null":
            case "undefined":
            case "html":
              return obj;
            case "bling":
            case "array":
            case "nodelist":
              return table(t, (function() {
                var i1, len1, results;
                results = [];
                for (k = i1 = 0, len1 = obj.length; i1 < len1; k = ++i1) {
                  v = obj[k];
                  results.push(tableRow(k, v, open));
                }
                return results;
              })());
            case "object":
            case "array":
              return table(t, (function() {
                var results;
                results = [];
                for (k in obj) {
                  v = obj[k];
                  results.push(tableRow(k, v, open));
                }
                return results;
              })());
            case "node":
              s = $.HTML.stringify(obj);
              return s.substr(0, s.indexOf('>') + 1) + '...';
            default:
              return String(obj);
          }
        }
      }
    };
  });

  $.plugin({
    provides: 'keyName,keyNames',
    depends: "math"
  }, function() {
    var a, code, i1, j1, keyCode, keyName, len1, len2, name, ref, ref1;
    keyCode = {
      "Backspace": 8,
      "BS": 8,
      "Tab": 9,
      '\t': 9,
      "Enter": 13,
      '\n': 12,
      "Shift": 16,
      "Ctrl": 17,
      "Alt": 18,
      "Pause": 19,
      "Break": 19,
      "Caps": 20,
      "Caps Lock": 20,
      "Esc": 27,
      "Escape": 27,
      "Space": 32,
      " ": 32,
      "PgUp": 33,
      "Page Up": 33,
      "PgDn": 34,
      "End": 35,
      "Home": 36,
      "Left": 37,
      "Up": 38,
      "Right": 39,
      "Down": 40,
      "Insert": 45,
      "Del": 46,
      "Delete": 46,
      "Times": 106,
      "*": 106,
      "Plus": 107,
      "+": 107,
      "Minus": 109,
      "-": 109,
      "Div": 111,
      "Divide": 111,
      "/": 111,
      "Semi-Colon": 186,
      ";": 187,
      "Equal": 187,
      "=": 187,
      "Comma": 188,
      ",": 188,
      "Dash": 189,
      "-": 189,
      "Dot": 190,
      "Period": 190,
      ".": 190,
      "Forward Slash": 191,
      "/": 191,
      "Back Slash": 220,
      "\\": 220,
      "Single Quote": 222,
      "'": 222
    };
    ref = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
      a = ref[i1];
      keyCode[a] = keyCode[a.toLowerCase()] = a.charCodeAt(0);
    }
    ref1 = $.range(1, 13);
    for (j1 = 0, len2 = ref1.length; j1 < len2; j1++) {
      a = ref1[j1];
      keyCode["F" + a] = keyCode["f" + a] = 111 + a;
    }
    keyName = {};
    for (name in keyCode) {
      code = keyCode[name];
      keyName[code] || (keyName[code] = name);
    }
    return {
      $: {
        keyCode: function(name) {
          var ref2;
          return (ref2 = keyCode[name]) != null ? ref2 : name;
        },
        keyName: function(code) {
          var ref2;
          return (ref2 = keyName[code]) != null ? ref2 : code;
        }
      }
    };
  });

  $.plugin({
    depends: "dom,promise",
    provides: "lazy"
  }, function() {
    var lazy_load;
    lazy_load = function(elementName, props) {
      var elem, ret;
      ret = $.Promise();
      document.head.appendChild(elem = $.extend(document.createElement(elementName), props, {
        onload: function() {
          return ret.resolve(elem);
        },
        onerror: function() {
          return ret.reject.apply(ret, arguments);
        }
      }));
      return ret;
    };
    return {
      $: {
        script: function(src) {
          return lazy_load("script", {
            src: src
          });
        },
        style: function(src) {
          return lazy_load("link", {
            href: src,
            rel: "stylesheet"
          });
        }
      }
    };
  });

  $.plugin({
    provides: "log, logger",
    depends: "bound"
  }, function() {
    var _t, get_date_prefix, log, prior_date;
    _t = {
      _MS: "",
      SS: "",
      MM: "",
      HH: "",
      dd: "",
      mm: "",
      yyyy: ""
    };
    prior_date = 0;
    get_date_prefix = (function(_this) {
      return function() {
        var d, day, delta, hr, min, mon, ms, sec;
        d = new Date();
        delta = d - prior_date;
        prior_date = d;
        if ((_t._MS !== (ms = $.padLeft(d.getUTCMilliseconds(), 3, "0"))) || (delta % 1000) === 0) {
          _t._MS = ms;
          if (_t.SS !== (sec = $.padLeft(d.getUTCSeconds(), 2, "0" || (delta % 60000) === 0))) {
            _t.SS = sec;
            if (_t.MM !== (min = $.padLeft(d.getUTCMinutes(), 2, "0" || (delta % 3600000) === 0))) {
              _t.MM = min;
              if (_t.HH !== (hr = $.padLeft(String(d.getUTCHours()), 2, "0" || (delta % 86400000) === 0))) {
                _t.HH = hr;
                if (_t.dd !== (day = $.padLeft(String(d.getUTCDate()), 2, "0" || (delta > 86400000)))) {
                  _t.dd = day;
                  if (_t.mm !== (mon = $.padLeft(String(d.getUTCMonth() + 1), 2, "0"))) {
                    _t.mm = mon;
                    _t.yyyy = String(d.getUTCFullYear());
                  }
                }
              }
            }
          }
        }
        return _t.yyyy + "-" + _t.mm + "-" + _t.dd + " " + _t.HH + ":" + _t.MM + ":" + _t.SS + "." + _t._MS;
      };
    })(this);
    log = function() {
      var a, p;
      a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (a.length) {
        if (p = typeof log.pre === "function" ? log.pre() : void 0) {
          a.unshift(p);
        }
        log.out.apply(log, a);
        return a[a.length - 1];
      }
    };
    log.out = console.log.bind(console);
    log.pre = null;
    log.enableTimestamps = function(level) {
      if (level == null) {
        level = 2;
      }
      return log.pre = [
        null, function() {
          return String(+new Date());
        }, get_date_prefix
      ][level];
    };
    log.disableTimestamps = function() {
      return log.enableTimestamps(0);
    };
    return {
      $: {
        log: log,
        logger: function(prefix) {
          return function() {
            var a;
            a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            a.unshift(prefix);
            return log.apply(null, a);
          };
        }
      }
    };
  });

  $.plugin({
    provides: "matches",
    depends: "function,core,string"
  }, function() {
    var ArrayMatch, Contains, ContainsValue, IsEqual, ObjMatch, RegExpMatch, behaviors, f, i1, j1, len1, len2, list, matches, obj_type, pt, specialPatterns, v;
    IsEqual = function(p, o, t) {
      return o === p;
    };
    Contains = function(p, a, t) {
      var i1, len1, v;
      for (i1 = 0, len1 = a.length; i1 < len1; i1++) {
        v = a[i1];
        if (matches(p, v, t)) {
          return true;
        }
      }
      return false;
    };
    ContainsValue = function(p, o, t) {
      var k, v;
      for (k in o) {
        v = o[k];
        if (matches(p, v, t)) {
          return true;
        }
      }
      return false;
    };
    ObjMatch = function(p, o, t) {
      var k, v;
      for (k in p) {
        v = p[k];
        if (!(matches(v, o[k]))) {
          return false;
        }
      }
      return true;
    };
    ArrayMatch = function(p, o, t) {
      var i, i1, len1, v;
      for (i = i1 = 0, len1 = p.length; i1 < len1; i = ++i1) {
        v = p[i];
        if (!(matches(v, o[i]))) {
          return false;
        }
      }
      return true;
    };
    RegExpMatch = function(p, s, t) {
      return p.test(String(s));
    };
    behaviors = {
      "function": [['array', 'bling', Contains], ['object', ContainsValue]],
      regexp: [['string', 'number', RegExpMatch], ['array', 'bling', Contains], ['object', ContainsValue]],
      object: [['array', 'bling', Contains], ['object', ObjMatch]],
      array: [['array', 'bling', ArrayMatch]],
      number: [['number', IsEqual], ['array', 'bling', Contains]],
      string: [['string', IsEqual], ['array', 'bling', Contains]]
    };
    for (pt in behaviors) {
      v = behaviors[pt];
      matches = {};
      for (i1 = 0, len1 = v.length; i1 < len1; i1++) {
        list = v[i1];
        f = list.pop();
        for (j1 = 0, len2 = list.length; j1 < len2; j1++) {
          obj_type = list[j1];
          matches[obj_type] = f;
        }
      }
      $.type.extend(pt, {
        matches: matches
      });
    }
    specialPatterns = {
      $any: function() {
        return true;
      },
      $type: function(p, o, t) {
        return $.is(p.$type, o);
      },
      $class: function(p, o, t) {
        return $.isType(p.$class, o);
      },
      $lt: function(p, o, t) {
        return o < p.$lt;
      },
      $gt: function(p, o, t) {
        return o > p.$gt;
      },
      $lte: function(p, o, t) {
        return o <= p.$lte;
      },
      $gte: function(p, o, t) {
        return o >= p.$gte;
      },
      $ne: function(p, o, t) {
        return o !== p.$ne;
      }
    };
    matches = function(pattern, obj, pt) {
      var k, ref, ref1, ref2, type;
      if (pt == null) {
        pt = $.type.lookup(pattern);
      }
      if (pt.name === 'object') {
        for (k in specialPatterns) {
          f = specialPatterns[k];
          if (k in pattern) {
            return f(pattern, obj, pt);
          }
        }
      }
      ref = pt.matches;
      for (type in ref) {
        f = ref[type];
        if (type === 'else') {
          continue;
        }
        if ($.is(type, obj)) {
          return f(pattern, obj, pt);
        }
      }
      return (ref1 = (ref2 = pt.matches) != null ? typeof ref2["else"] === "function" ? ref2["else"](pattern, obj, pt) : void 0 : void 0) != null ? ref1 : IsEqual(pattern, obj, pt);
    };
    matches.Any = {
      $any: true
    };
    matches.Type = function(type) {
      return {
        $type: type
      };
    };
    matches.Class = function(klass) {
      return {
        $class: klass
      };
    };
    return {
      $: {
        matches: matches
      }
    };
  });

  $.plugin({
    provides: "math",
    depends: "core"
  }, function() {
    var _By, add, mean, sub;
    $.type.extend({
      bool: {
        number: function(o) {
          if (o) {
            return 1;
          } else {
            return 0;
          }
        }
      },
      number: {
        bool: function(o) {
          return !!o;
        }
      }
    });
    _By = function(cmp) {
      return function(field) {
        var valueOf, x;
        valueOf = (function() {
          switch (false) {
            case !$.is("string", field):
              return function(o) {
                return o[field];
              };
            case !$.is("function", field):
              return field;
            default:
              throw new Error(".maxBy first argument should be a string or function");
          }
        })();
        x = this.first();
        this.skip(1).each(function(n) {
          if (cmp(valueOf(n), valueOf(x))) {
            return x = n;
          }
        });
        return x;
      };
    };
    return {
      $: {
        range: function(start, end, step) {
          var i;
          if (step == null) {
            step = 1;
          }
          if (end == null) {
            end = start;
            start = 0;
          }
          if (end < start && step > 0) {
            step *= -1;
          }
          return $((function() {
            var i1, ref, results;
            results = [];
            for (i = i1 = 0, ref = Math.ceil((end - start) / step); 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
              results.push(start + (i * step));
            }
            return results;
          })());
        },
        zeros: function(n, z) {
          var i;
          if (z == null) {
            z = 0;
          }
          return $((function() {
            var i1, ref, results;
            results = [];
            for (i = i1 = 0, ref = n; 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
              results.push(z);
            }
            return results;
          })());
        },
        ones: function(n) {
          var i;
          return $((function() {
            var i1, ref, results;
            results = [];
            for (i = i1 = 0, ref = n; 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
              results.push(1);
            }
            return results;
          })());
        },
        deg2rad: function(n) {
          return n * Math.PI / 180;
        },
        rad2deg: function(n) {
          return n * 180 / Math.PI;
        }
      },
      floats: function() {
        return this.map(parseFloat);
      },
      ints: function() {
        return this.map(function() {
          return parseInt(this, 10);
        });
      },
      px: function(delta) {
        return this.ints().map(function() {
          return $.px(this, delta);
        });
      },
      min: function() {
        return this.filter(isFinite).reduce(Math.min);
      },
      max: function() {
        return this.filter(isFinite).reduce(Math.max);
      },
      maxBy: _By(function(a, b) {
        return a > b;
      }),
      minBy: _By(function(a, b) {
        return a < b;
      }),
      mean: mean = function() {
        if (!this.length) {
          return 0;
        } else {
          return this.sum() / this.length;
        }
      },
      avg: mean,
      sum: function() {
        var i1, len1, n, ref, x;
        n = 0;
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          x = ref[i1];
          if ((x != null) && isFinite(x)) {
            n += x;
          }
        }
        return n;
      },
      product: function() {
        return this.filter(isFinite).reduce(function(a) {
          return a * this;
        });
      },
      squares: function() {
        return this.pow(2);
      },
      pow: function(n) {
        return this.map(function() {
          return Math.pow(this, n);
        });
      },
      magnitude: function() {
        return Math.sqrt(this.floats().squares().sum());
      },
      scale: function(r) {
        return this.map(function() {
          return r * this;
        });
      },
      add: add = function(d) {
        var i;
        switch ($.type(d)) {
          case "number":
            return this.map(function() {
              return d + this;
            });
          case "bling":
          case "array":
            return $((function() {
              var i1, ref, results;
              results = [];
              for (i = i1 = 0, ref = Math.min(this.length, d.length); 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
                results.push(this[i] + d[i]);
              }
              return results;
            }).call(this));
        }
      },
      plus: add,
      sub: sub = function(d) {
        var i;
        switch ($.type(d)) {
          case "number":
            return this.map(function() {
              return this - d;
            });
          case "bling":
          case "array":
            return $((function() {
              var i1, ref, results;
              results = [];
              for (i = i1 = 0, ref = Math.min(this.length, d.length); 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
                results.push(this[i] - d[i]);
              }
              return results;
            }).call(this));
        }
      },
      minus: sub,
      dot: function(b) {
        var i;
        return $.sum((function() {
          var i1, ref, results;
          results = [];
          for (i = i1 = 0, ref = Math.min(this.length, b.length); 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
            results.push(this[i] * b[i]);
          }
          return results;
        }).call(this));
      },
      angle: function(b) {
        return Math.acos(this.dot(b) / (this.magnitude() * b.magnitude()));
      },
      cross: function(b) {
        return $(this[1] * b[2] - this[2] * b[1], this[2] * b[0] - this[0] * b[2], this[0] * b[1] - this[1] * b[0]);
      },
      normalize: function() {
        return this.scale(1 / this.magnitude());
      },
      deg2rad: function() {
        return this.filter(isFinite).map(function() {
          return this * Math.PI / 180;
        });
      },
      rad2deg: function() {
        return this.filter(isFinite).map(function() {
          return this * 180 / Math.PI;
        });
      }
    };
  });

  $.plugin({
    depends: "function,hash",
    provides: 'memoize'
  }, function() {
    var plainCache;
    plainCache = function() {
      var data;
      data = {};
      return {
        has: function(k) {
          return k in data;
        },
        get: function(k) {
          return data[k];
        },
        set: function(k, v) {
          return data[k] = v;
        }
      };
    };
    return {
      $: {
        memoize: function(opts) {
          if ($.is("function", opts)) {
            opts = {
              f: opts
            };
          }
          if (!$.is('object', opts)) {
            throw new Error("Argument Error: memoize requires either a function or object as first argument");
          }
          opts.cache || (opts.cache = plainCache());
          opts.hash || (opts.hash = $.hash);
          return function() {
            var key;
            key = opts.hash(arguments);
            if (opts.cache.has(key)) {
              return opts.cache.get(key);
            } else {
              return opts.cache.set(key, opts.f.apply(this, arguments));
            }
          };
        }
      }
    };
  });

  $.plugin({
    provides: 'middleware',
    depends: 'type'
  }, function() {
    return {
      $: {
        middleware: function(s) {
          var e;
          if (s == null) {
            s = [];
          }
          e = $();
          return {
            "catch": function(f) {
              e.push(f);
              return this;
            },
            use: function(f) {
              s.push(f);
              return this;
            },
            unuse: function(f) {
              var i;
              while ((i = s.indexOf(f)) > -1) {
                s.splice(i, 1);
              }
              return this;
            },
            invoke: function() {
              var a, i, next;
              a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
              i = -1;
              (next = ((function(_this) {
                return function() {
                  var _e;
                  try {
                    return s[++i].apply(s, slice.call(a).concat([next]));
                  } catch (error1) {
                    _e = error1;
                    return e.call(_e);
                  }
                };
              })(this)))();
              return this;
            }
          };
        }
      }
    };
  });

  $.plugin({
    depends: "core,function",
    provides: "promise"
  }, function() {
    var NoValue, Progress, Promise;
    NoValue = (function() {
      function NoValue() {}

      return NoValue;

    })();
    Promise = function(obj) {
      var consume_all, consume_one, end, err, getState, isFailed, isFinished, result, ret, waiting;
      if (obj === $.global || obj === null || obj === (void 0)) {
        if (this === $) {
          obj = {};
        } else {
          obj = this;
        }
      }
      waiting = [];
      err = result = NoValue;
      consume_all = function(e, v) {
        var w;
        while (w = waiting.shift()) {
          consume_one(w, e, v);
        }
        return null;
      };
      consume_one = function(cb, e, v) {
        var __e, __stack, _e, _stack, ref;
        if ((ref = cb.timeout) != null) {
          ref.cancel();
        }
        try {
          cb(e, v);
        } catch (error1) {
          _e = error1;
          _stack = $.debugStack(_e);
          $.log("Promise(" + ret.promiseId + ") first-chance exception:", _stack);
          try {
            cb(_e, null);
          } catch (error1) {
            __e = error1;
            __stack = $.debugStack(__e);
            $.log("Promise(" + ret.promiseId + ") last-chance exception:", __stack);
          }
        }
        return null;
      };
      end = (function(_this) {
        return function(error, value) {
          if ((err === result && result === NoValue)) {
            if (error !== NoValue) {
              err = error;
              if (!(error != null ? error.stack : void 0)) {
                err = new Error(error);
              }
            } else if (value !== NoValue) {
              result = value;
            }
            switch (true) {
              case value === _this:
                return end(new TypeError("cant resolve a promise with itself"));
              case (value != null) && value.then && value["catch"]:
                value.then(function(x) {
                  return end(null, x);
                });
                value["catch"](function(e) {
                  return end(e, null);
                });
                break;
              case $.is('promise', value):
                value.wait(end);
                break;
              case error !== NoValue:
                consume_all(err, null);
                break;
              case value !== NoValue:
                consume_all(null, result);
            }
          }
          return _this;
        };
      })(this);
      ret = $.inherit({
        promiseId: $.random.string(6),
        wait: function(timeout, cb) {
          var ref;
          if ($.is("function", timeout)) {
            ref = [timeout, 2e308], cb = ref[0], timeout = ref[1];
          }
          if (err !== NoValue) {
            consume_one(cb, err, null);
          } else if (result !== NoValue) {
            consume_one(cb, null, result);
          } else {
            waiting.push(cb);
            if (isFinite(parseFloat(timeout))) {
              cb.timeout = $.delay(timeout, (function(_this) {
                return function() {
                  var i;
                  if ((i = waiting.indexOf(cb)) > -1) {
                    waiting.splice(i, 1);
                    return consume_one(cb, (err = new Error('timeout')), void 0);
                  }
                };
              })(this));
            }
          }
          return this;
        },
        then: function(f, e) {
          return this.wait(function(err, x) {
            if (err) {
              return typeof e === "function" ? e(err) : void 0;
            } else {
              return f(x);
            }
          });
        },
        finish: function(value) {
          end(NoValue, value);
          return this;
        },
        resolve: function(value) {
          end(NoValue, value);
          return this;
        },
        fail: function(error) {
          end(error, NoValue);
          return this;
        },
        reject: function(error) {
          end(error, NoValue);
          return this;
        },
        reset: function() {
          err = result = NoValue;
          return this;
        },
        handler: function(err, data) {
          if (err) {
            return ret.reject(err);
          } else {
            return ret.resolve(data);
          }
        },
        inspect: function() {
          return "{Promise[" + this.promiseId + "] " + (getState()) + "}";
        },
        toString: function() {
          return "{Promise[" + this.promiseId + "] " + (getState()) + "}";
        }
      }, $.EventEmitter(obj));
      getState = function() {
        switch (false) {
          case result === NoValue:
            return "resolved";
          case err === NoValue:
            return "rejected";
          default:
            return "pending";
        }
      };
      isFinished = function() {
        return result !== NoValue;
      };
      $.defineProperty(ret, 'finished', {
        get: isFinished
      });
      $.defineProperty(ret, 'resolved', {
        get: isFinished
      });
      isFailed = function() {
        return err !== NoValue;
      };
      $.defineProperty(ret, 'failed', {
        get: isFailed
      });
      $.defineProperty(ret, 'rejected', {
        get: isFailed
      });
      return ret;
    };
    Promise.compose = Promise.parallel = function() {
      var p, promises;
      promises = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      promises = $(promises).flatten();
      p = $.Progress(1 + promises.length);
      $(promises).select('wait').call(function(err) {
        if (err) {
          return p.reject(err);
        } else {
          return p.resolve(1);
        }
      });
      return p.resolve(1);
    };
    Promise.collect = function(promises) {
      var fn, i, i1, len1, p, promise, q, ret;
      ret = [];
      p = $.Promise();
      if (promises == null) {
        return p.resolve(ret);
      }
      q = $.Progress(1 + promises.length);
      fn = function(i) {
        return promise.wait(function(err, result) {
          if (err) {
            return q.reject(err);
          } else {
            return q.resolve(1, ret[i] = result);
          }
        });
      };
      for (i = i1 = 0, len1 = promises.length; i1 < len1; i = ++i1) {
        promise = promises[i];
        fn(i);
      }
      q.then((function() {
        return p.resolve(ret);
      }), p.reject);
      q.resolve(1);
      return p;
    };
    Promise.wrapCall = function() {
      var args, f, p;
      f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      p = $.Promise();
      f.apply(null, slice.call(args).concat([function(e, r) {
        if (e) {
          return p.reject(e);
        } else {
          return p.resolve(r);
        }
      }]));
      return p;
    };
    Progress = function(max) {
      var cur, ret;
      if (max == null) {
        max = 1.0;
      }
      cur = 0.0;
      return ret = $.inherit({
        progress: function() {
          var args, item, ref, ref1;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (!args.length) {
            return cur;
          }
          cur = (ref = args[0]) != null ? ref : cur;
          if (args.length > 1) {
            max = (ref1 = args[1]) != null ? ref1 : max;
          }
          item = args.length > 2 ? args[2] : cur;
          if (cur >= max) {
            ret.__proto__.__proto__.resolve(item);
          }
          ret.emit('progress', cur, max, item);
          return this;
        },
        resolve: function(delta, item) {
          if (item == null) {
            item = delta;
          }
          if (!isFinite(delta)) {
            delta = 1;
          }
          return ret.progress(cur + delta, max, item);
        },
        finish: function(delta, item) {
          return ret.resolve(delta, item);
        },
        include: function(promise) {
          if ($.is('promise', promise)) {
            ret.progress(cur, max + 1);
            promise.wait(function(err, data) {
              if (err) {
                return ret.reject(err);
              } else {
                return ret.resolve(data);
              }
            });
          }
          return this;
        },
        inspect: function() {
          return "{Progress[" + ret.promiseId + "] " + cur + "/" + max + "}";
        }
      }, Promise());
    };
    Promise.xhr = function(xhr) {
      var p;
      p = $.Promise();
      xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            return p.resolve(xhr.responseText);
          } else {
            return p.resolve(this.status + " " + this.statusText);
          }
        }
      };
      return p;
    };
    Promise.series = function() {
      var p, run, series;
      series = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      series = $(series).flatten();
      run = function(i) {
        return function() {
          if (i >= series.length) {
            return;
          }
          return series[i] = series[i]().wait(function(err, result) {
            p.resolve(series[i] = [err, result]);
            return $.immediate(run(i + 1));
          });
        };
      };
      p = $.Progress(series.length);
      $.immediate(run(0));
      return p;
    };
    $.depends('dom', function() {
      return Promise.image = function(src) {
        var image, p;
        p = $.Promise();
        $.extend(image = new Image(), {
          onerror: function(e) {
            return p.reject(e);
          },
          onload: function() {
            return p.resolve(image);
          },
          src: src
        });
        return p;
      };
    });
    $.depends('type', function() {
      return $.type.register('promise', {
        is: function(o) {
          return (o != null) && ('object' === typeof o) && 'then' in o && 'function' === typeof o.then && o.then.length === 2;
        }
      });
    });
    return {
      $: {
        Promise: Promise,
        Progress: Progress
      }
    };
  });

  $.plugin({
    provides: 'prompt,confirm',
    depends: 'synth,keyName'
  }, function() {
    var _confirm, _prompt, _prompt_css;
    _prompt_css = function() {
      if (!$("head .prompt").length) {
        return $("head").append("<style class='prompt'>" + $.CSS.stringify({
          ".prompt": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "999999",
            background: "rgba(0,0,0,.4)",
            fontSize: "12px",
            " input": {
              padding: "2px",
              margin: "0px 0px 4px -4px",
              width: "100%"
            },
            " button": {
              fontSize: "13px",
              ".done": {
                fontSize: "14px"
              }
            },
            " > center": {
              width: "200px",
              height: "44px",
              margin: "20px auto",
              padding: "16px",
              background: "#ffc",
              borderRadius: "5px"
            }
          }
        }) + "</style>");
      }
    };
    _prompt = function(label, type, cb) {
      var cancelButton, dialog, done, doneButton, input;
      _prompt_css();
      dialog = $.synth("div.prompt center\n	input[type=" + type + "][placeholder=" + label + "] + br +\n	button.cancel 'Cancel' +\n	button.done 'Done'").appendTo("body").first();
      input = dialog.querySelector("input");
      input.onkeydown = function(evt) {
        switch ($.keyName(evt.keyCode)) {
          case "Enter":
            return done(input.value);
          case "Esc":
            return done(null);
        }
      };
      doneButton = dialog.querySelector("button.done");
      cancelButton = dialog.querySelector("button.cancel");
      done = function(value) {
        delete doneButton.onclick;
        delete cancelButton.onclick;
        dialog.parentNode.removeChild(dialog);
        return cb(value);
      };
      doneButton.onclick = function() {
        return done(input.value);
      };
      cancelButton.onclick = function() {
        return done(null);
      };
      return null;
    };
    _confirm = function() {
      var args, buttons, cb, center, dialog, i1, label, len1, value;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      cb = args.pop();
      label = args.shift();
      if (args.length > 0) {
        buttons = args;
      } else {
        buttons = {
          Yes: true,
          No: false
        };
      }
      _prompt_css();
      dialog = $.synth("div.prompt center\n	span '" + label + "' + br").appendTo("body");
      center = dialog.find('center');
      switch ($.type(buttons)) {
        case 'array':
        case 'bling':
          for (i1 = 0, len1 = buttons.length; i1 < len1; i1++) {
            label = buttons[i1];
            $.synth("button[value=" + label + "] '" + label + "'").appendTo(center);
          }
          break;
        case 'object':
          for (label in buttons) {
            value = buttons[label];
            $.synth("button[value=" + value + "] '" + label + "'").appendTo(center);
          }
      }
      dialog.find("button").bind("click", function(evt) {
        dialog.remove();
        return cb(evt.target.getAttribute('value'));
      });
      return null;
    };
    return {
      $: {
        prompt: _prompt,
        confirm: _confirm
      }
    };
  });

  $.plugin({
    depends: "core",
    provides: "pubsub"
  }, function() {
    var Hub, name, prop, ref, ret, rootHub;
    Hub = (function() {
      function Hub() {
        this.listeners = {};
      }

      Hub.prototype.publish = function() {
        var args, base1, caught, channel, err, i1, len1, listener, ref;
        channel = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        caught = null;
        ref = (base1 = this.listeners)[channel] || (base1[channel] = []);
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          listener = ref[i1];
          if (this.filter.apply(this, [listener].concat(slice.call(args)))) {
            try {
              listener.apply(null, args);
            } catch (error1) {
              err = error1;
              if (caught == null) {
                caught = err;
              }
            }
          }
        }
        if (caught) {
          throw caught;
        }
        switch (args.length) {
          case 0:
            return null;
          case 1:
            return args[0];
          default:
            return args;
        }
      };

      Hub.prototype.filter = function(listener, message) {
        if ('patternObject' in listener) {
          return $.matches(listener.patternObject, message);
        }
        return true;
      };

      Hub.prototype.publisher = function(channel, func) {
        var t;
        t = this;
        return function() {
          return t.publish(channel, func.apply(this, arguments));
        };
      };

      Hub.prototype.subscribe = function() {
        var args, base1, channel, func;
        channel = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        func = args.pop();
        if (args.length > 0) {
          func.patternObject = args.pop();
        }
        ((base1 = this.listeners)[channel] || (base1[channel] = [])).push(func);
        return func;
      };

      Hub.prototype.unsubscribe = function(channel, func) {
        var a, base1, i;
        if (func == null) {
          this.listeners[channel] = [];
        } else {
          a = ((base1 = this.listeners)[channel] || (base1[channel] = []));
          if ((i = a.indexOf(func)) > -1) {
            a.splice(i, 1);
          }
        }
        return func;
      };

      return Hub;

    })();
    ret = {
      $: {
        Hub: Hub
      }
    };
    rootHub = new Hub();
    ref = Object.getOwnPropertyDescriptors(Hub.prototype);
    for (name in ref) {
      prop = ref[name];
      if (name === 'constructor') {
        continue;
      }
      if ("function" === typeof prop.value) {
        ret.$[name] = prop.value.bind(rootHub);
      }
    }
    return ret;
  });

  $.plugin({
    provides: 'random',
    depends: 'type'
  }, function() {
    var abs, die, element, englishAlphabet, floor, integer, log, max_int, next, random, real, s, string, uuidAlphabet;
    englishAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    uuidAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    floor = Math.floor, abs = Math.abs, log = Math.log;
    max_int = 0xFFFFFFFF;
    s = new Uint32Array(2);
    next = function() {
      var result, s0, s1;
      s0 = s[0];
      s1 = s[1];
      result = (s0 + s1) % max_int;
      s1 ^= s0;
      s[0] = (s0 << 27) | (s0 >>> 5) ^ s1 ^ (s1 << 7);
      s[1] = (s1 << 18) | (s1 >>> 14);
      return result;
    };
    random = function() {
      return next() / max_int;
    };
    $.defineProperty(random, 'seed', {
      set: function(n) {
        s[0] = n;
        s[1] = 1;
        next();
        next();
        next();
        return n;
      }
    });
    random.seed = +new Date();
    return {
      $: {
        random: $.extend(random, {
          real: real = function(min, max) {
            var ref, ref1;
            if (min == null) {
              ref = [0, 1.0], min = ref[0], max = ref[1];
            }
            if (max == null) {
              ref1 = [0, min], min = ref1[0], max = ref1[1];
            }
            return (random() * (max - min)) + min;
          },
          integer: integer = function(min, max) {
            return floor(real(min, max));
          },
          string: string = function(len, prefix, alphabet) {
            if (prefix == null) {
              prefix = "";
            }
            if (alphabet == null) {
              alphabet = englishAlphabet;
            }
            while (prefix.length < len) {
              prefix += element(alphabet);
            }
            return prefix;
          },
          coin: function(balance) {
            if (balance == null) {
              balance = .5;
            }
            return random() <= balance;
          },
          element: element = function(arr, weights) {
            var i, i1, item, len1, r, sorted, sum, w;
            if (weights != null) {
              w = $(weights);
              w = w.scale(1.0 / w.sum());
              i = 0;
              sorted = $(arr).map(function(x) {
                return {
                  v: x,
                  w: w[i++]
                };
              }).sortBy(function(x) {
                return -x.w;
              });
              r = random();
              sum = 0;
              for (i1 = 0, len1 = sorted.length; i1 < len1; i1++) {
                item = sorted[i1];
                if ((sum += item.w) >= r) {
                  return item.v;
                }
              }
            }
            return arr[integer(0, arr.length)];
          },
          gaussian: function(mean, ssig) {
            var q, u, v, x, y;
            if (mean == null) {
              mean = 0.5;
            }
            if (ssig == null) {
              ssig = 0.12;
            }
            while (true) {
              u = random();
              v = 1.7156 * (random() - 0.5);
              x = u - 0.449871;
              y = abs(v) + 0.386595;
              q = (x * x) + y * (0.19600 * y - 0.25472 * x);
              if (!(q > 0.27597 && (q > 0.27846 || (v * v) > (-4 * log(u) * u * u)))) {
                break;
              }
            }
            return mean + ssig * v / u;
          },
          die: die = function(faces) {
            return integer(1, faces + 1);
          },
          dice: function(n, faces) {
            return $((function() {
              var i1, ref, results;
              results = [];
              for (i1 = 0, ref = n; i1 < ref; i1 += 1) {
                results.push(die(faces));
              }
              return results;
            })());
          },
          uuid: function() {
            return $(8, 4, 4, 4, 12).map(function() {
              return string(this, '', uuidAlphabet);
            }).join('-');
          }
        })
      }
    };
  });

  $.plugin({
    provides: "render",
    depends: "promise, type, logger"
  }, function() {
    var aka, array_finalize, array_reduce, consume_forever, finalize, log, object_handlers, reduce, register, render;
    log = $.logger("[render]");
    consume_forever = function(promise, opts, p) {
      if (p == null) {
        p = $.Promise();
      }
      if (!$.is("promise", promise)) {
        return $.Promise().resolve(reduce(promise, opts));
      }
      promise.wait(function(err, result) {
        var r;
        if (err) {
          return p.reject(err);
        }
        r = reduce(result, opts);
        if ($.is('promise', r)) {
          return consume_forever(r, opts, p);
        } else {
          return p.resolve(r);
        }
      });
      return p;
    };
    render = function(o, opts) {
      var r;
      if (opts == null) {
        opts = {};
      }
      return consume_forever(r = reduce([o], opts), opts);
    };
    object_handlers = {
      text: function(o, opts) {
        var ref;
        return reduce(o[(ref = opts.lang) != null ? ref : "EN"], opts);
      }
    };
    render.register = register = function(t, f) {
      return object_handlers[t] = f;
    };
    render.reduce = reduce = function(o, opts) {
      var t;
      return (t = $.type.lookup(o)).reduce(o, t, opts);
    };
    $.type.extend({
      unknown: {
        reduce: function(o, t, opts) {
          return "[ cant reduce type: " + t + " ]";
        }
      },
      string: {
        reduce: $.identity
      },
      html: {
        reduce: $.identity
      },
      "null": {
        reduce: function(o, t, opts) {
          return t;
        }
      },
      undefined: {
        reduce: function(o, t, opts) {
          return t;
        }
      },
      number: {
        reduce: function(o, t, opts) {
          return String(o);
        }
      },
      "function": {
        reduce: function(o, t, opts) {
          switch (f.length) {
            case 0:
            case 1:
              return reduce(f(opts));
            default:
              return $.Promise.wrap(f, opts);
          }
        }
      },
      object: {
        reduce: function(o, t, opts) {
          var ref;
          if ((t = (ref = o.t) != null ? ref : o.type) in object_handlers) {
            return object_handlers[t].call(o, o, opts);
          } else {
            return "[ no handler for object type: '" + t + "' " + (JSON.stringify(o).substr(0, 20)) + "... ]";
          }
        }
      },
      promise: {
        reduce: function(o, t, opts) {
          var finish_q, q;
          q = $.Promise();
          o.wait(finish_q = function(err, result) {
            var r;
            if (err) {
              return q.reject(err);
            }
            if ($.is('promise', r = reduce(result, opts))) {
              return r.wait(finish_q);
            } else {
              return q.resolve(r);
            }
          });
          return q;
        }
      },
      array: {
        reduce: array_reduce = function(o, t, opts) {
          var fn, has_promises, i, i1, len1, m, n, p, q, x;
          p = $.Progress(m = 1);
          q = $.Promise();
          n = [];
          p.wait(function(err) {
            if (err) {
              return q.reject(err);
            } else {
              return q.resolve(finalize(n, opts));
            }
          });
          has_promises = false;
          fn = function(x, i) {
            var finish_p, y;
            n[i] = y = reduce(x, opts);
            if ($.is('promise', y)) {
              has_promises = true;
              p.progress(null, ++m);
              return y.wait(finish_p = function(err, result) {
                var rp;
                if (err) {
                  return p.reject(err);
                }
                rp = reduce(result, opts);
                if ($.is('promise', rp)) {
                  return rp.wait(finish_p);
                } else {
                  return p.resolve(n[i] = rp);
                }
              });
            }
          };
          for (i = i1 = 0, len1 = o.length; i1 < len1; i = ++i1) {
            x = o[i];
            fn(x, i);
          }
          p.resolve(1);
          if (has_promises) {
            return q;
          } else {
            return finalize(n);
          }
        }
      },
      bling: {
        reduce: array_reduce
      }
    });
    finalize = function(o, opts) {
      var t;
      return (t = $.type.lookup(o)).finalize(o, t, opts);
    };
    $.type.extend({
      unknown: {
        finalize: function(o, t, opts) {
          return "[ cant finalize type: " + t + " ]";
        }
      },
      string: {
        finalize: $.identity
      },
      html: {
        finalize: $.identity
      },
      number: {
        finalize: function(o, t, opts) {
          return String(o);
        }
      },
      array: {
        finalize: array_finalize = function(o, t, opts) {
          var x;
          return ((function() {
            var i1, len1, results;
            results = [];
            for (i1 = 0, len1 = o.length; i1 < len1; i1++) {
              x = o[i1];
              results.push(finalize(x, opts));
            }
            return results;
          })()).join('');
        }
      },
      bling: {
        finalize: array_finalize
      },
      "null": {
        finalize: function() {
          return "null";
        }
      },
      undefined: {
        finalize: function() {
          return "undefined";
        }
      }
    });
    aka = function(name) {
      return object_handlers[name];
    };
    register('link', function(o, opts) {
      var k;
      return [
        "<a", (function() {
          var i1, len1, ref, results;
          ref = ["href", "name", "target"];
          results = [];
          for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
            k = ref[i1];
            if (k in o) {
              results.push([" " + k + "='", o[k], "'"]);
            }
          }
          return results;
        })(), ">", reduce(o.content, opts), "</a>"
      ];
    });
    register('a', aka('link'));
    register('let', function(o, opts) {
      var ret, save;
      save = opts[o.name];
      opts[o.name] = o.value;
      ret = reduce(o.content, opts);
      if (save === void 0) {
        delete opts[o.name];
      } else {
        opts[o.name] = save;
      }
      return ret;
    });
    register('set', aka('let'));
    register('get', function(o, opts) {
      return reduce(opts[o.name], opts);
    });
    return {
      $: {
        render: render
      }
    };
  });

  $.plugin({
    provides: "sortBy,sortedIndex,sortedInsert,groupBy"
  }, function() {
    return {
      $: {
        sortedIndex: function(array, item, sorter, lo, hi) {
          var cmp, mid;
          if (lo == null) {
            lo = 0;
          }
          if (hi == null) {
            hi = array.length;
          }
          cmp = (function() {
            switch (true) {
              case $.is("string", sorter):
                return function(a, b) {
                  return a[sorter] < b[sorter];
                };
              case $.is("function", sorter):
                return function(a, b) {
                  return sorter(a) < sorter(b);
                };
              default:
                return function(a, b) {
                  return a < b;
                };
            }
          })();
          while (lo < hi) {
            mid = (hi + lo) >>> 1;
            if (cmp(array[mid], item)) {
              lo = mid + 1;
            } else {
              hi = mid;
            }
          }
          return lo;
        }
      },
      sortBy: function(sorter) {
        var a, i1, item, len1, ref;
        a = $();
        ref = this;
        for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
          item = ref[i1];
          a.sortedInsert(item, sorter);
        }
        return a;
      },
      sortedInsert: function(item, sorter) {
        if (this.length === 0) {
          this.push(item);
        } else {
          this.splice($.sortedIndex(this, item, sorter), 0, item);
        }
        return this;
      },
      groupBy: function(sorter) {
        var c, groups, i1, j1, k, k1, len1, len2, len3, name1, name2, ref, ref1, ref2, x;
        groups = {};
        switch ($.type(sorter)) {
          case 'array':
          case 'bling':
            ref = this;
            for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
              x = ref[i1];
              c = ((function() {
                var j1, len2, results;
                results = [];
                for (j1 = 0, len2 = sorter.length; j1 < len2; j1++) {
                  k = sorter[j1];
                  results.push(x[k]);
                }
                return results;
              })()).join(",");
              (groups[c] || (groups[c] = $())).push(x);
            }
            break;
          case 'string':
            ref1 = this;
            for (j1 = 0, len2 = ref1.length; j1 < len2; j1++) {
              x = ref1[j1];
              (groups[name1 = x[sorter]] || (groups[name1] = $())).push(x);
            }
            break;
          case 'function':
            ref2 = this;
            for (k1 = 0, len3 = ref2.length; k1 < len3; k1++) {
              x = ref2[k1];
              (groups[name2 = sorter(x)] || (groups[name2] = $())).push(x);
            }
        }
        return $.valuesOf(groups);
      }
    };
  });

  $.plugin({
    provides: "StateMachine",
    depends: "type, logger"
  }, function() {
    var StateMachine, _callAll, escapeAsKey, keyEscapes, log;
    _callAll = function(f, c, arg) {
      while ((typeof f) === "function") {
        f = f.call(c, arg);
      }
      return c.state = f;
    };
    keyEscapes = {
      "\n": "n",
      "\r": "r",
      "\t": "t",
      "\\": "\\",
      "'": "'",
      '"': '"'
    };
    escapeAsKey = function(c) {
      return c in keyEscapes && "\\" + keyEscapes[c] || c;
    };
    log = $.logger("[StateMachine]");
    return {
      $: {
        StateMachine: StateMachine = (function() {
          StateMachine.extractCode = function(f, priorText) {
            var ref, s;
            if (priorText == null) {
              priorText = '';
            }
            if (f == null) {
              return "";
            }
            s = f.toString().replace(/^\s+/, "").replace(/\r/g, "##R##").replace(/\n/g, "##N##").replace(/\/\*(.*)\*\//g, "").replace(/\/\/(.*)(##N##|##R##)*/g, "");
            if (s.indexOf("function") === 0) {
              s = s.replace(/function[^{]*{\s*/, priorText);
            } else if (/\([^{]+ *=>\s*{/.test(s)) {
              s = s.replace(/\([^{]+ *{\s*/, priorText);
            }
            return (ref = s.replace(/return ([^;]+),(\d+)/g, '$1;s=$2').replace(/return /g, 's=').replace(/\s*}$/, '').replace(/([{}\[\],\\\/+*-]*)(##N##|##R##)\s*/g, '$1').replace(/;*(##N##|##R##)\s*/g, ';').replace(/##R##/g, "\r").replace(/##N##/g, "\n").replace(/^\s+/, "").replace(/\s+$/, "").replace(/\r|\n/g, '')) != null ? ref : "";
          };

          function StateMachine(table, debug) {
            var _c, _code, err, hasRules, onEnter, parse, priorText, ret, rules, state, trace;
            if (debug == null) {
              debug = false;
            }
            parse = null;
            trace = debug && "$.log('state:',s,'i:',i,'c:',c);" || "";
            ret = "s=s|0;for(i=i|0;i<=d.length;i++){c=d[i]||'eof';" + trace + "switch(s){";
            for (state in table) {
              rules = table[state];
              if ('enter' in rules) {
                priorText = 'p=s;';
                onEnter = StateMachine.extractCode(rules.enter, priorText);
                onEnter = "if(s!==p){" + onEnter + ";if(s!==p){i--;break}}";
              } else {
                onEnter = "";
              }
              hasRules = Object.keys(rules).length > ('enter' in rules ? 1 : 0);
              ret += ("case " + state + ":" + onEnter) + (hasRules && "switch(c){" || "break;\n");
              for (_c in rules) {
                _code = rules[_c];
                if (_c === 'enter') {
                  continue;
                }
                ret += _c === 'def' && "default:" || ("case '" + (escapeAsKey(_c)) + "':");
                ret += StateMachine.extractCode(_code, priorText) + ";break;";
              }
              ret += hasRules && "}break;" || "";
            }
            ret += "}}return this;";
            ret = ret.replace(/\s+&&\s+/g, '&&').replace(/\s+\|\|\s+/g, '||').replace(/\s+([+*\/=-]*=)\s+/g, '$1');
            try {
              this.run = new Function("d", "s", "i", "p", "c", ret);
            } catch (error1) {
              err = error1;
              $.log("Failed to parse compiled machine: ", ret);
              throw err;
            }
          }

          return StateMachine;

        })()
      }
    };
  });

  $.plugin({
    provides: "string",
    depends: "type"
  }, function() {
    var escape_single_quotes, safer, slugize, strip_ansi_codes;
    safer = function(f) {
      return function() {
        var a, err;
        a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        try {
          return f.apply(null, a);
        } catch (error1) {
          err = error1;
          return "[toString Error: " + err.message + "]";
        }
      };
    };
    escape_single_quotes = function(s) {
      return s.replace(/([^\\]{1})'/g, "$1\\'");
    };
    strip_ansi_codes = function(s) {
      return String(s).replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
    };
    $.type.extend({
      unknown: {
        string: safer(function(o) {
          var ref;
          return (ref = typeof o.toString === "function" ? o.toString() : void 0) != null ? ref : String(o);
        }),
        repr: safer(function(o) {
          return $.type.lookup(o).string(o);
        }),
        number: safer(function(o) {
          return parseFloat(String(o));
        })
      },
      "null": {
        string: function() {
          return "null";
        }
      },
      undefined: {
        string: function() {
          return "undefined";
        }
      },
      buffer: {
        string: safer(function(o) {
          return String(o);
        }),
        repr: safer(function(o) {
          return "Buffer(" + (JSON.stringify(o.toJSON())) + ")";
        })
      },
      string: {
        number: safer(parseFloat),
        repr: function(s) {
          return "'" + (escape_single_quotes(s)) + "'";
        }
      },
      array: {
        string: safer(function(a) {
          return "[" + (a.map($.toString).join(', ')) + "]";
        }),
        repr: safer(function(a) {
          return "[" + (a.map($.toRepr).join(', ')) + "]";
        })
      },
      "arguments": {
        string: safer(function(a) {
          var x;
          return "[" + (((function() {
            var i1, len1, results;
            results = [];
            for (i1 = 0, len1 = a.length; i1 < len1; i1++) {
              x = a[i1];
              results.push($.toString(x));
            }
            return results;
          })()).join(', ')) + "]";
        }),
        repr: safer(function(a) {
          var x;
          return "[" + (((function() {
            var i1, len1, results;
            results = [];
            for (i1 = 0, len1 = a.length; i1 < len1; i1++) {
              x = a[i1];
              results.push($.toRepr(x));
            }
            return results;
          })()).join(', ')) + "]";
        })
      },
      object: {
        string: safer(function(o) {
          var err, k, ret, v;
          ret = [];
          for (k in o) {
            try {
              v = o[k];
            } catch (error1) {
              err = error1;
              v = "[Error: " + err.message + "]";
            }
            ret.push(k + ":" + ($.toString(v)));
          }
          return "{" + ret.join(', ') + "}";
        }),
        repr: safer(function(o) {
          var err, k, ret, v;
          ret = [];
          for (k in o) {
            try {
              v = o[k];
            } catch (error1) {
              err = error1;
              v = "[Error: " + err.message + "]";
            }
            ret.push("\"" + k + "\": " + ($.toRepr(v)));
          }
          return "{" + ret.join(', ') + "}";
        })
      },
      "function": {
        repr: function(f) {
          return f.toString();
        },
        string: function(f) {
          return f.toString().replace(/^([^{]*){(?:.|\n|\r)*}$/, '$1{ ... }');
        }
      },
      number: {
        repr: function(n) {
          return String(n);
        },
        string: safer(function(n) {
          switch (false) {
            case n.precision == null:
              return n.toPrecision(n.precision);
            case n.fixed == null:
              return n.toFixed(n.fixed);
            default:
              return String(n);
          }
        })
      }
    });
    return {
      $: {
        toString: function(x) {
          var err;
          if (arguments.length === 0) {
            return "function Bling() { [ ... ] }";
          } else {
            try {
              return $.type.lookup(x).string(x);
            } catch (error1) {
              err = error1;
              return "[$.toString Error: " + err.message + "]";
            }
          }
        },
        toRepr: function(x) {
          return $.type.lookup(x).repr(x);
        },
        px: function(x, delta) {
          if (delta == null) {
            delta = 0;
          }
          return (x != null) && (parseInt(x, 10) + (parseInt(delta) | 0)) + "px";
        },
        capitalize: function(name) {
          return (name.split(" ").map(function(x) {
            return x[0].toUpperCase() + x.substring(1).toLowerCase();
          })).join(" ");
        },
        slugize: slugize = function(phrase, slug) {
          var k, v;
          if (slug == null) {
            slug = "-";
          }
          phrase = (function() {
            switch ($.type(phrase)) {
              case 'null':
              case 'undefined':
                return "";
              case 'object':
                return ((function() {
                  var results;
                  results = [];
                  for (k in phrase) {
                    v = phrase[k];
                    results.push($.slugize(k, slug) + slug + $.slugize(v, slug));
                  }
                  return results;
                })()).join(slug);
              case 'array':
              case 'bling':
                return phrase.map(function(item) {
                  return $.slugize(item, slug);
                }).join(slug);
              default:
                return String(phrase);
            }
          })();
          return phrase.toLowerCase().replace(/^\s+/, '').replace(/\s+$/, '').replace(/\t/g, ' ').replace(/[^A-Za-z0-9. -]/g, '').replace(/\s+/g, '-');
        },
        stubize: slugize,
        dashize: function(name) {
          var c, i, i1, ref, ret;
          ret = "";
          for (i = i1 = 0, ref = (name != null ? name.length : void 0) | 0; 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
            c = name.charCodeAt(i);
            if ((91 > c && c > 64)) {
              c += 32;
              ret += '-';
            }
            ret += String.fromCharCode(c);
          }
          return ret;
        },
        camelize: function(name) {
          var i;
          name = $.slugize(name);
          name.split('-');
          while ((i = name != null ? name.indexOf('-') : void 0) > -1) {
            name = $.stringSplice(name, i, i + 2, name[i + 1].toUpperCase());
          }
          return name;
        },
        commaize: function(num, comma, dot, currency) {
          var a, b, ref, s, sign;
          if (comma == null) {
            comma = ',';
          }
          if (dot == null) {
            dot = '.';
          }
          if (currency == null) {
            currency = '';
          }
          if ($.is('number', num) && isFinite(num)) {
            s = String(num);
            sign = num < 0 ? "-" : "";
            ref = s.split('.'), a = ref[0], b = ref[1];
            if (a.length > 3) {
              a = $.stringReverse($.stringReverse(a).match(/\d{1,3}/g).join(comma));
            }
            return sign + currency + a + (b != null ? dot + b : "");
          } else if ((typeof num === 'number' && isNaN(num)) || (num === 2e308 || num === (-2e308))) {
            return String(num);
          } else {
            return void 0;
          }
        },
        padLeft: function(s, n, c) {
          var dn;
          if (c == null) {
            c = " ";
          }
          dn = n - strip_ansi_codes(s).length;
          if (dn > 0) {
            return $.zeros(dn, c).join('') + s;
          } else {
            return s;
          }
        },
        padRight: function(s, n, c) {
          var dn;
          if (c == null) {
            c = " ";
          }
          dn = n - strip_ansi_codes(s).length;
          if (dn > 0) {
            return s + $.zeros(dn, c).join('');
          } else {
            return s;
          }
        },
        stringTruncate: function(s, n, c, sep) {
          var r, x;
          if (c == null) {
            c = '...';
          }
          if (sep == null) {
            sep = ' ';
          }
          if (s.length <= n) {
            return s;
          }
          if (c.length >= n) {
            return c;
          }
          s = s.split(sep);
          r = [];
          while (n > 0 && s.length > 0) {
            x = s.shift();
            n -= x.length;
            if (n >= 0) {
              r.push(x);
            }
          }
          return r.join(sep) + c;
        },
        stringCount: function(s, x, i, n) {
          var j;
          if (i == null) {
            i = 0;
          }
          if (n == null) {
            n = 0;
          }
          if ((j = s.indexOf(x, i)) > i - 1) {
            return $.stringCount(s, x, j + 1, n + 1);
          } else {
            return n;
          }
        },
        stringSplice: function(s, i, j, n) {
          var end, nn, start;
          nn = s.length;
          end = j;
          if (end < 0) {
            end += nn;
          }
          start = i;
          if (start < 0) {
            start += nn;
          }
          return s.substring(0, start) + n + s.substring(end);
        },
        stringReverse: function(s) {
          return s.split('').reverse().join('');
        },
        checksum: function(s) {
          var a, b, i, i1, ref;
          a = 1;
          b = 0;
          for (i = i1 = 0, ref = s.length; 0 <= ref ? i1 < ref : i1 > ref; i = 0 <= ref ? ++i1 : --i1) {
            a = (a + s.charCodeAt(i)) % 65521;
            b = (b + a) % 65521;
          }
          return (b << 16) | a;
        },
        repeat: function(x, n) {
          if (n == null) {
            n = 2;
          }
          switch (false) {
            case n !== 1:
              return x;
            case !(n < 1):
              return "";
            case !$.is("string", x):
              return $.zeros(n, x).join('');
            default:
              return $.zeros(n, x);
          }
        },
        stringBuilder: (function() {
          var len;
          len = function(s) {
            return (s != null ? s.toString().length : void 0) | 0;
          };
          return function() {
            var items;
            if ($.is("global", this)) {
              return new $.stringBuilder();
            }
            items = [];
            return $.extend(this, {
              length: 0,
              append: (function(_this) {
                return function(s) {
                  items.push(s);
                  return _this.length += len(s);
                };
              })(this),
              prepend: (function(_this) {
                return function(s) {
                  items.splice(0, 0, s);
                  return _this.length += len(s);
                };
              })(this),
              clear: (function(_this) {
                return function() {
                  var ret;
                  ret = _this.toString();
                  items = [];
                  _this.length = 0;
                  return ret;
                };
              })(this),
              toString: function() {
                return items.join("");
              }
            });
          };
        })()
      },
      toString: function() {
        return $.toString(this);
      },
      toRepr: function() {
        return $.toRepr(this);
      },
      replace: function(patt, repl) {
        return this.map(function(s) {
          return s.replace(patt, repl);
        });
      },
      indexOf: function(target, offset) {
        var i, i1, ref, ref1;
        if (offset == null) {
          offset = 0;
        }
        if ($.is('regexp', target)) {
          for (i = i1 = ref = offset, ref1 = this.length; i1 < ref1; i = i1 += 1) {
            if (target.test(this[i])) {
              return i;
            }
          }
          return -1;
        } else {
          return Array.prototype.indexOf.apply(this, arguments);
        }
      }
    };
  });

  $.plugin({
    provides: "symbol",
    depends: "type"
  }, function() {
    var cache, g, symbol;
    symbol = null;
    cache = {};
    g = $.global;
    g['Bling'] = $;
    if (typeof module !== "undefined" && module !== null) {
      module.exports = $;
    }
    $.defineProperty($, "symbol", {
      set: function(v) {
        g[symbol] = cache[symbol];
        cache[symbol = v] = g[v];
        return g[v] = Bling;
      },
      get: function() {
        return symbol;
      }
    });
    return {
      $: {
        symbol: "$",
        noConflict: function() {
          $.symbol = "Bling";
          return Bling;
        }
      }
    };
  });

  $.plugin({
    provides: "synth",
    depends: "StateMachine, type, dom"
  }, function() {
    var SynthMachine, machine;
    SynthMachine = (function(superClass) {
      var common, htmlType, no_eof, rule;

      extend1(SynthMachine, superClass);

      common = {
        "#": function() {
          return 2;
        },
        ".": function() {
          return 3;
        },
        "[": function() {
          return 4;
        },
        '"': function() {
          return 6;
        },
        "'": function() {
          return 7;
        },
        " ": function() {
          return this.emitText();
        },
        "\t": function() {
          return this.emitText();
        },
        "\n": function() {
          return this.emitText();
        },
        "\r": function() {
          return this.emitText();
        },
        ",": function() {
          return this.emitNodeAndReparent(this.fragment);
        },
        "+": function() {
          var ref;
          return this.emitNodeAndReparent((ref = this.cursor.parentNode) != null ? ref : this.fragment);
        },
        eof: function() {
          return this.emitText();
        }
      };

      no_eof = {
        eof: function() {
          return this.emitError("Unexpected end of input");
        }
      };

      rule = function() {
        var a;
        a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return $.extend.apply($, a);
      };

      function SynthMachine(debug) {
        if (debug == null) {
          debug = false;
        }
        SynthMachine.__super__.constructor.call(this, [
          {
            enter: function() {
              this.tag = this.id = this.cls = this.attr = this.val = this.text = "";
              this.attrs = {};
              return 1;
            }
          }, rule({
            def: function(c) {
              this.tag += c;
              return 1;
            }
          }, common), rule({
            def: function(c) {
              this.id += c;
              return 2;
            }
          }, common), rule({
            def: function(c) {
              this.cls += c;
              return 3;
            }
          }, common, {
            enter: function() {
              this.cls += this.cls.length && " " || "";
              return 3;
            },
            ".": function() {
              this.cls += " ";
              return 3;
            }
          }), rule({
            def: function(c) {
              this.attr += c;
              return 4;
            }
          }, no_eof, {
            "=": function() {
              return 5;
            },
            "]": function() {
              this.attrs[this.attr] = this.val;
              this.attr = this.val = "";
              return 1;
            }
          }), rule({
            def: function(c) {
              this.val += c;
              return 5;
            }
          }, no_eof, {
            "]": function() {
              this.attrs[this.attr] = this.val;
              this.attr = this.val = "";
              return 1;
            }
          }), rule({
            def: function(c) {
              this.text += c;
              return 6;
            }
          }, no_eof, {
            '\\': function() {
              return 8;
            },
            '"': function() {
              return this.emitText();
            }
          }), rule({
            def: function(c) {
              this.text += c;
              return 7;
            }
          }, no_eof, {
            '\\': function() {
              return 9;
            },
            "'": function() {
              return this.emitText();
            }
          }), rule({
            def: function(c) {
              this.text += c;
              return 6;
            }
          }, no_eof), rule({
            def: function(c) {
              this.text += c;
              return 7;
            }
          }, no_eof)
        ], debug);
        this.reset();
      }

      SynthMachine.prototype.reset = function() {
        this.fragment = this.cursor = document.createDocumentFragment();
        this.tag = this.id = this.cls = this.attr = this.val = this.text = "";
        this.attrs = {};
        return this;
      };

      SynthMachine.prototype.emitError = function(msg) {
        throw new Error(msg + ": " + this.input);
      };

      SynthMachine.prototype.emitNodeAndReparent = function(nextCursor) {
        var k, node, ref, ref1, ref2, ref3, v;
        if (((ref = this.tag) != null ? ref.length : void 0) > 0) {
          node = document.createElement(this.tag);
          ((ref1 = this.id) != null ? ref1.length : void 0) > 0 && (node.id = this.id);
          ((ref2 = this.cls) != null ? ref2.length : void 0) > 0 && (node.className = this.cls);
          this.cursor.appendChild(node);
          ref3 = this.attrs;
          for (k in ref3) {
            v = ref3[k];
            node.setAttribute(k, v);
          }
        }
        this.cursor = node && (nextCursor || node) || (nextCursor || this.cursor);
        return 0;
      };

      htmlType = $.type.lookup("<html>");

      SynthMachine.prototype.emitText = function() {
        var ref;
        this.emitNodeAndReparent();
        ((ref = this.text) != null ? ref.length : void 0) && this.cursor.appendChild(htmlType.node(this.text) || (this.text = ""));
        return 0;
      };

      return SynthMachine;

    })($.StateMachine);
    machine = new SynthMachine();
    return {
      $: {
        synth: function(expr) {
          var f;
          f = machine.reset().run(expr, 0).fragment;
          return $(f.childNodes.length === 1 ? f.childNodes[0] : f);
        }
      }
    };
  });

  $.plugin({
    depends: "StateMachine, function",
    provides: "template"
  }, function() {
    var current_engine, engines, match_forward, template;
    current_engine = null;
    engines = {};
    template = {
      register_engine: function(name, render_func) {
        engines[name] = render_func;
        if (current_engine == null) {
          return current_engine = name;
        }
      },
      render: function(text, args) {
        if (current_engine in engines) {
          return engines[current_engine](text, args);
        }
      }
    };
    template.__defineSetter__('engine', function(v) {
      if (!v in engines) {
        throw new Error("invalid template engine: " + v + " not one of " + (Object.Keys(engines)));
      } else {
        return current_engine = v;
      }
    });
    template.__defineGetter__('engine', function() {
      return current_engine;
    });
    template.__defineGetter__('engines', function() {
      return $.keysOf(engines);
    });
    template.register_engine('null', (function() {
      return $.identity;
    })());
    match_forward = function(text, find, against, start, stop) {
      var count, i, i1, ref, ref1, t;
      if (stop == null) {
        stop = -1;
      }
      count = 1;
      if (stop < 0) {
        stop = text.length + 1 + stop;
      }
      for (i = i1 = ref = start, ref1 = stop; i1 < ref1; i = i1 += 1) {
        t = text[i];
        if (t === against) {
          count += 1;
        } else if (t === find) {
          count -= 1;
        }
        if (count === 0) {
          return i;
        }
      }
      return -1;
    };
    template.register_engine('pythonic', (function() {
      var chunk_re, compile, render, type_re;
      type_re = /([0-9#0+-]*)\.*([0-9#+-]*)([diouxXeEfFgGcrsqm])((?:.|\n)*)/;
      chunk_re = /%[\(\/]/;
      compile = function(text) {
        var chunks, end, i, i1, j, key, match, n, ref, rest, ret;
        chunks = text.split(chunk_re);
        n = chunks.length;
        ret = [chunks[0]];
        j = 1;
        for (i = i1 = 1, ref = n; i1 < ref; i = i1 += 1) {
          end = match_forward(chunks[i], ')', '(', 0, -1);
          if (end === -1) {
            return "Template syntax error: unmatched '%(' starting at: " + (chunks[i].substring(0, 15));
          }
          key = chunks[i].substring(0, end);
          rest = chunks[i].substring(end);
          match = type_re.exec(rest);
          if (match === null) {
            return "Template syntax error: invalid type specifier starting at '" + rest + "'";
          }
          rest = match[4];
          ret[j++] = key;
          ret[j++] = match[1] | 0;
          ret[j++] = match[2] | 0;
          ret[j++] = match[3];
          ret[j++] = rest;
        }
        return ret;
      };
      compile.cache = {};
      return render = function(text, values) {
        var cache, fixed, i, i1, j, key, n, output, pad, ref, ref1, rest, type, value;
        cache = compile.cache[text];
        if (cache == null) {
          cache = compile.cache[text] = compile(text);
        }
        output = [cache[0]];
        j = 1;
        n = cache.length;
        for (i = i1 = 1, ref = n - 5; i1 <= ref; i = i1 += 5) {
          ref1 = cache.slice(i, +(i + 4) + 1 || 9e9), key = ref1[0], pad = ref1[1], fixed = ref1[2], type = ref1[3], rest = ref1[4];
          value = values[key];
          if (value == null) {
            value = "missing value: " + key;
          }
          output[j++] = (function() {
            switch (type) {
              case 'd':
                return "" + parseInt(value, 10);
              case 'f':
                return parseFloat(value).toFixed(fixed);
              case 's':
                return "" + value;
              default:
                return "" + value;
            }
          })();
          if (pad > 0) {
            output[j] = $.padLeft(output[j], pad);
          }
          output[j++] = rest;
        }
        return output.join("");
      };
    })());
    return {
      $: {
        template: template
      }
    };
  });

  $.plugin({
    provides: "throttle",
    depends: "core"
  }, function() {
    var defer, throttle;
    defer = function(f, ctx, args, ms, to) {
      clearTimeout(to);
      to = setTimeout(((function(_this) {
        return function() {
          return f.apply(ctx, args);
        };
      })(this)), ms);
      return to;
    };
    throttle = function(f, ctx, args, ms, last) {
      var dt;
      if ((dt = $.now - last) > ms) {
        last += dt;
        f.apply(ctx, args);
      }
      return last;
    };
    return {
      $: {
        throttle: function(ms, f) {
          var last;
          last = 0;
          return function() {
            last = throttle(f, this, arguments, ms, last);
            return null;
          };
        },
        debounce: function(ms, f) {
          var timeout;
          timeout = null;
          return function() {
            var a;
            a = arguments;
            timeout = defer(f, this, arguments, ms, timeout);
            return null;
          };
        },
        rate_limit: function(ms, f) {
          "rate_limit is a combination of throttle and debounce.\n what we want from a stream throttle is to fire at most every _ms_ and\n then fire one last time after a gap of _ms_ at the end.";
          var last, timeout;
          last = 0;
          timeout = null;
          return function() {
            var a;
            a = arguments;
            timeout = defer(f, this, arguments, ms, timeout);
            last = throttle(f, this, arguments, ms, last);
            return null;
          };
        }
      }
    };
  });

  $.plugin({
    provides: 'TNET',
    depends: "type, string, function"
  }, function() {
    var Types, class_index, classes, makeFunction, packOne, packingStack, register, reverseLookup, unpackOne, unpackingStack;
    Types = {
      "number": {
        symbol: "#",
        pack: String,
        unpack: Number
      },
      "string": {
        symbol: "'",
        pack: $.identity,
        unpack: $.identity
      },
      "bool": {
        symbol: "!",
        pack: function(b) {
          return String(!!b);
        },
        unpack: function(s) {
          return s === "true";
        }
      },
      "null": {
        symbol: "~",
        pack: function() {
          return "";
        },
        unpack: function() {
          return null;
        }
      },
      "undefined": {
        symbol: "_",
        pack: function() {
          return "";
        },
        unpack: function() {
          return void 0;
        }
      },
      "array": {
        symbol: "]",
        pack: function(a) {
          var y;
          return ((function() {
            var i1, len1, results;
            results = [];
            for (i1 = 0, len1 = a.length; i1 < len1; i1++) {
              y = a[i1];
              results.push(packOne(y));
            }
            return results;
          })()).join('');
        },
        unpack: function(s) {
          var data, one, ref;
          data = [];
          unpackingStack.push(data);
          while (s.length > 0) {
            ref = unpackOne(s), one = ref[0], s = ref[1];
            data.push(one);
          }
          unpackingStack.pop();
          return data;
        }
      },
      "map": {
        symbol: "M",
        pack: function(m) {
          var ret;
          ret = '';
          m.forEach(function(v, k) {
            return ret += packOne(k) + packOne(v);
          });
          return ret;
        },
        unpack: function(s) {
          var k, m, ref, ref1, v;
          m = new Map();
          unpackingStack.push(m);
          while (s.length > 0) {
            ref = unpackOne(s), k = ref[0], s = ref[1];
            ref1 = unpackOne(s), v = ref1[0], s = ref1[1];
            m.set(k, v);
          }
          unpackingStack.pop();
          return m;
        }
      },
      "bling": {
        symbol: "$",
        pack: function(a) {
          var y;
          return ((function() {
            var i1, len1, results;
            results = [];
            for (i1 = 0, len1 = a.length; i1 < len1; i1++) {
              y = a[i1];
              results.push(packOne(y));
            }
            return results;
          })()).join('');
        },
        unpack: function(s) {
          var data, one, ref;
          data = $();
          unpackingStack.push(data);
          while (s.length > 0) {
            ref = unpackOne(s), one = ref[0], s = ref[1];
            data.push(one);
          }
          unpackingStack.pop();
          return data;
        }
      },
      "object": {
        symbol: "}",
        pack: function(o) {
          var k, v;
          return ((function() {
            var results;
            results = [];
            for (k in o) {
              v = o[k];
              if (k !== "constructor" && o.hasOwnProperty(k)) {
                results.push(packOne(k) + packOne(v));
              }
            }
            return results;
          })()).join('');
        },
        unpack: function(s) {
          var data, key, ref, ref1, value;
          data = {};
          unpackingStack.push(data);
          while (s.length > 0) {
            ref = unpackOne(s), key = ref[0], s = ref[1];
            ref1 = unpackOne(s), value = ref1[0], s = ref1[1];
            data[key] = value;
          }
          unpackingStack.pop();
          return data;
        }
      },
      "function": {
        symbol: ")",
        pack: function(f) {
          var args, body, name, name_re, parts, s;
          s = f.toString().replace(/(?:\n|\r)+\s*/g, ' ');
          name = "";
          name_re = /function\s*(\w+)\(.*/g;
          if (name_re.test(s)) {
            name = s.replace(name_re, "$1");
          }
          parts = s.replace(/function\s*\w*\(/, '').replace(/\/\*.*\*\//g, '').replace(/}$/, '').split(/\) {/);
          args = parts[0].split(/, */);
          body = parts.slice(1).join(') {').replace(/^\s+/, '').replace(/\s*$/, '');
          return $(name, args, body).map(packOne).join('');
        },
        unpack: function(s) {
          var args, body, err, name, ref, ref1, ref2, rest;
          ref = unpackOne(s), name = ref[0], rest = ref[1];
          ref1 = unpackOne(rest), args = ref1[0], rest = ref1[1];
          ref2 = unpackOne(rest), body = ref2[0], rest = ref2[1];
          try {
            return makeFunction(name, args.join(), body);
          } catch (error1) {
            err = error1;
            $.log("Failed to makeFunction.");
            $.log("Arguments:", args.join());
            return $.log("Body:", body);
          }
        }
      },
      "regexp": {
        symbol: "/",
        pack: function(r) {
          return String(r).slice(1, -1);
        },
        unpack: function(s) {
          return RegExp(s);
        }
      },
      "class": {
        symbol: "{",
        pack: function(o) {
          return [Types["function"].pack(o), packOne(o.prototype, "object")].join('');
        },
        unpack: function(s) {
          var f, ref, ref1, rest;
          ref = unpackOne(s), s = ref[0], rest = ref[1];
          f = eval(s);
          ref1 = unpackOne(rest), f.prototype = ref1[0], rest = ref1[1];
          return f;
        }
      },
      "class instance": {
        symbol: "C",
        pack: function(o) {
          var ret;
          if (!('constructor' in o)) {
            throw new Error("TNET: cant pack non-class as class");
          }
          if (!(o.constructor in class_index)) {
            throw new Error("TNET: cant pack unregistered class (name: " + o.constructor.name + ")");
          }
          ret = packOne(class_index[o.constructor]);
          packingStack.pop();
          return ret + packOne(o, "object");
        },
        unpack: function(s) {
          var i, obj, ref, ref1, rest;
          ref = unpackOne(s), i = ref[0], rest = ref[1];
          ref1 = unpackOne(rest), obj = ref1[0], rest = ref1[1];
          if (i <= classes.length) {
            obj.__proto__ = classes[i - 1].prototype;
          } else {
            unpackingStack.splice(0, unpackingStack.length);
            throw new Error("TNET: attempt to unpack unregistered class index: " + i);
          }
          return obj;
        }
      },
      "circular reference": {
        symbol: "@",
        pack: function(i) {
          return String(i);
        },
        unpack: function(s) {
          return unpackingStack[parseInt(s, 10)];
        }
      }
    };
    makeFunction = function(name, args, body) {
      eval("var f = function " + name + "(" + args + "){" + body + "}");
      return f;
    };
    classes = [];
    class_index = {};
    register = function(klass) {
      return class_index[klass] || (class_index[klass] = classes.push(klass));
    };
    reverseLookup = {};
    (function() {
      var results, t, v;
      results = [];
      for (t in Types) {
        v = Types[t];
        results.push(reverseLookup[v.symbol] = v);
      }
      return results;
    })();
    unpackingStack = [];
    unpackOne = function(data) {
      var di, i, ref, sym, x;
      if (data && (i = data.indexOf(":")) > 0) {
        di = parseInt(data.slice(0, i), 10);
        if (isFinite(di) && $.is('number', di)) {
          if ((i < (ref = (x = i + 1 + di)) && ref < data.length)) {
            if (sym = reverseLookup[data[x]]) {
              return [sym.unpack(data.slice(i + 1, x)), data.slice(x + 1)];
            }
          }
        }
      }
      return [void 0, data];
    };
    packingStack = [];
    packOne = function(x, forceType) {
      var data, err, i, ref, ref1, ref2, t, tx;
      tx = forceType != null ? forceType : $.type(x);
      if (tx === "unknown" && !((ref = (ref1 = x.constructor) != null ? ref1.name : void 0) === (void 0) || ref === "Object")) {
        tx = "class instance";
      }
      if ((t = Types[tx]) == null) {
        packingStack.splice(0, packingStack.length);
        throw new Error("TNET: I don't know how to pack type '" + tx + "' (" + ((ref2 = x.constructor) != null ? ref2.name : void 0) + ")");
      }
      if ((i = packingStack.indexOf(x)) > -1) {
        t = Types["circular reference"];
        x = i;
      }
      packingStack.push(x);
      try {
        data = t.pack(x);
      } catch (error1) {
        err = error1;
        packingStack.splice(0, packingStack.length);
        throw err;
      }
      packingStack.pop();
      return data.length + ":" + data + t.symbol;
    };
    return {
      $: {
        TNET: {
          Types: Types,
          registerClass: register,
          stringify: packOne,
          parse: function(x) {
            var ref;
            return (ref = Bling.TNET.parseOne(x)) != null ? ref[0] : void 0;
          },
          parseOne: function(x) {
            if (Buffer.isBuffer(x)) {
              x = x.toString();
            }
            return unpackOne(x);
          }
        }
      }
    };
  });

  $.plugin({
    provides: "trace",
    depends: "function,type,logger"
  }, function() {
    var time;
    $.type.extend({
      unknown: {
        trace: $.identity
      },
      object: {
        trace: function(label, o, tracer) {
          var i1, k, len1, ref;
          ref = Object.keys(o);
          for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
            k = ref[i1];
            o[k] = $.trace(o[k], label + "." + k, tracer);
          }
          return o;
        }
      },
      array: {
        trace: function(label, o, tracer) {
          var i, i1, ref;
          for (i = i1 = 0, ref = o.length; i1 < ref; i = i1 += 1) {
            o[i] = $.trace(o[i], label + "[" + i + "]", tracer);
          }
          return o;
        }
      },
      bling: {
        trace: function(label, o, tracer) {
          var i, i1, ref;
          for (i = i1 = 0, ref = o.length; i1 < ref; i = i1 += 1) {
            o[i] = $.trace(o[i], label + "[" + i + "]", tracer);
          }
          return o;
        }
      },
      "function": {
        trace: function(label, f, tracer) {
          var r;
          label || (label = f.name);
          r = function() {
            var a, args, elapsed, start;
            a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            start = +(new Date);
            f.apply(this, a);
            label = (this.name || $.type(this)) + "." + label;
            args = $(a).map($.toRepr).join(',');
            elapsed = (+(new Date) - start).toFixed(0);
            return tracer(label + "(" + args + "): " + elapsed + "ms");
          };
          r.toString = function() {
            return "{Trace '" + label + "' of " + (f.toString());
          };
          return r;
        }
      }
    });
    time = function(label, f, logger) {
      var ref, ret, start;
      if (!$.is("string", label)) {
        ref = [label, f, "trace"], f = ref[0], logger = ref[1], label = ref[2];
      }
      if (!$.is("function", logger)) {
        logger = $.log;
      }
      start = +(new Date);
      ret = f();
      logger("[" + label + "] " + ((+(new Date) - start).toFixed(0)) + "ms");
      return ret;
    };
    return {
      $: {
        time: time,
        trace: function(label, o, tracer) {
          var ref;
          if (!$.is("string", label)) {
            ref = [o, label], tracer = ref[0], o = ref[1];
          }
          tracer || (tracer = $.log);
          label || (label = "");
          return $.type.lookup(o).trace(label, o, tracer);
        }
      }
    };
  });

  $.plugin({
    depends: "dom"
  }, function() {
    var COMMASEP, accel_props_re, speeds, testStyle, transformProperty, transitionDuration, transitionProperty, transitionTiming, updateDelay;
    COMMASEP = ", ";
    speeds = {
      "slow": 700,
      "medium": 500,
      "normal": 300,
      "fast": 100,
      "instant": 0,
      "now": 0
    };
    accel_props_re = /(?:scale(?:3d)*|translate(?:[XYZ]|3d)*|rotate(?:[XYZ]|3d)*)/;
    updateDelay = 30;
    testStyle = document.createElement("div").style;
    transformProperty = "transform";
    transitionProperty = "transition-property";
    transitionDuration = "transition-duration";
    transitionTiming = "transition-timing-function";
    if ("WebkitTransform" in testStyle) {
      transformProperty = "-webkit-transform";
      transitionProperty = "-webkit-transition-property";
      transitionDuration = "-webkit-transition-duration";
      transitionTiming = "-webkit-transition-timing-function";
    } else if ("MozTransform" in testStyle) {
      transformProperty = "-moz-transform";
      transitionProperty = "-moz-transition-property";
      transitionDuration = "-moz-transition-duration";
      transitionTiming = "-moz-transition-timing-function";
    } else if ("OTransform" in testStyle) {
      transformProperty = "-o-transform";
      transitionProperty = "-o-transition-property";
      transitionDuration = "-o-transition-duration";
      transitionTiming = "-o-transition-timing-function";
    }
    return {
      $: {
        duration: function(speed) {
          var d;
          d = speeds[speed];
          if (d != null) {
            return d;
          }
          return parseFloat(speed);
        }
      },
      transform: function(end_css, speed, easing, callback) {
        var css, duration, i, ii, props, trans;
        if ($.is("function", speed)) {
          callback = speed;
          speed = easing = null;
        } else if ($.is("function", easing)) {
          callback = easing;
          easing = null;
        }
        if (speed == null) {
          speed = "normal";
        }
        easing || (easing = "ease");
        duration = $.duration(speed) + "ms";
        props = [];
        trans = "";
        css = {};
        for (i in end_css) {
          if (accel_props_re.test(i)) {
            ii = end_css[i];
            if (ii.join) {
              ii = $(ii).px().join(COMMASEP);
            } else if (ii.toString) {
              ii = ii.toString();
            }
            trans += " " + i + "(" + ii + ")";
          } else {
            css[i] = end_css[i];
          }
        }
        for (i in css) {
          props.push(i);
        }
        if (trans) {
          props.push(transformProperty);
        }
        css[transitionProperty] = props.join(COMMASEP);
        css[transitionDuration] = props.map(function() {
          return duration;
        }).join(COMMASEP);
        css[transitionTiming] = props.map(function() {
          return easing;
        }).join(COMMASEP);
        if (trans) {
          css[transformProperty] = trans;
        }
        this.css(css);
        if (callback) {
          return this.delay(duration, $.bound(this, callback));
        }
      },
      hide: function(callback) {
        this.each(function() {
          if (this.style) {
            this._display = "";
            if (this.style.display === !"none") {
              this._display = this.syle.display;
            }
            return this.style.display = "none";
          }
        }).trigger("hide");
        if (callback) {
          this.delay(updateDelay, $.bound(this, callback));
        }
        return this;
      },
      show: function(callback) {
        this.each(function() {
          if (this.style) {
            this.style.display = this._display;
            return delete this._display;
          }
        }).trigger("show");
        if (callback) {
          this.delay(updateDelay, $.bound(this, callback));
        }
        return this;
      },
      toggle: function(callback) {
        return this.weave(this.css("display")).fold(function(display, node) {
          if (display === "none") {
            node.style.display = node._display || "";
            delete node._display;
            $(node).trigger("show");
          } else {
            node._display = display;
            node.style.display = "none";
            $(node).trigger("hide");
          }
          return node;
        }).delay(updateDelay, $.bound(this, callback));
      },
      fadeIn: function(speed, callback) {
        return this.css('opacity', '0.0').show(function() {
          return this.transform({
            opacity: "1.0",
            translate3d: [0, 0, 0]
          }, speed, callback);
        });
      },
      fadeOut: function(speed, callback, x, y) {
        if (x == null) {
          x = 0.0;
        }
        if (y == null) {
          y = 0.0;
        }
        return this.transform({
          opacity: "0.0",
          translate3d: [x, y, 0.0]
        }, speed, function() {
          return this.hide($.bound(this, callback));
        });
      },
      fadeLeft: function(speed, callback) {
        return this.fadeOut(speed, callback, "-" + this.width().first(), 0.0);
      },
      fadeRight: function(speed, callback) {
        return this.fadeOut(speed, callback, this.width().first(), 0.0);
      },
      fadeUp: function(speed, callback) {
        return this.fadeOut(speed, callback, 0.0, "-" + this.height().first());
      },
      fadeDown: function(speed, callback) {
        return this.fadeOut(speed, callback, 0.0, this.height().first());
      }
    };
  });

  $.plugin({
    provides: 'Trie'
  }, function() {
    var Trie;
    Trie = (function() {
      var find, insert;

      function Trie() {
        this.length = 0;
      }

      Trie.prototype.insert = function(item, key) {
        if (key == null) {
          key = String(item);
        }
        return insert(this, item, key.toLowerCase(), 0);
      };

      insert = function(t, item, key, n) {
        var name1, o;
        t.length++;
        if (n < key.length) {
          o = t.children || (t.children = {});
          insert((o[name1 = key[n]] || (o[name1] = new Trie)), item, key, n + 1);
        } else {
          (t.values || (t.values = [])).push(item);
        }
        return t;
      };

      Trie.prototype.find = function(prefix) {
        return find(this, prefix.toLowerCase(), 0);
      };

      find = function*(t, k, n) {
        var c, child, end, i1, len1, ref, ref1, v;
        end = n >= k.length;
        if (end && t.values) {
          ref = t.values;
          for (i1 = 0, len1 = ref.length; i1 < len1; i1++) {
            v = ref[i1];
            if (((yield v)) === false) {
              break;
            }
          }
        } else {
          ref1 = t.children;
          for (c in ref1) {
            child = ref1[c];
            if (end || c === k[n]) {
              yield* find(child,k,n+1);
            }
          }
        }
        return null;
      };

      return Trie;

    })();
    return {
      $: {
        Trie: Trie
      }
    };
  });

  $.plugin({
    provides: "type,is,inherit,extend,defineProperty,isType,are,as,isSimple,isDefined,isEmpty",
    depends: "compat"
  }, function() {
    var __toString, _type, inherit, isType, maxHash;
    __toString = Object.prototype.toString;
    isType = function(T, o) {
      if (o == null) {
        return T === o || T === "null" || T === "undefined";
      } else {
        return ((o.constructor != null) && (o.constructor === T || o.constructor.name === T)) || __toString.apply(o) === ("[object " + T + "]") || isType(T, o.__proto__);
      }
    };
    inherit = function() {
      var obj, objs, parent, ref;
      parent = arguments[0], objs = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (!(objs.length > 0)) {
        return;
      }
      obj = objs.shift();
      if (typeof parent === "function") {
        parent = parent.prototype;
      }
      if ((ref = parent.__proto__) === Object.prototype || ref === null || ref === (void 0)) {
        parent.__proto__ = obj.__proto__;
      }
      obj.__proto__ = parent;
      if (objs.length > 0) {
        return inherit.apply(null, [obj].concat(slice.call(objs)));
      } else {
        return obj;
      }
    };
    _type = (function() {
      var _extend, _with_cache, _with_insert, base, cache, lookup, order, register;
      cache = {};
      base = {
        name: 'unknown',
        is: function() {
          return true;
        }
      };
      order = [];
      _with_cache = {};
      _with_insert = function(method, type) {
        var a, i;
        a = (_with_cache[method] || (_with_cache[method] = []));
        if ((i = a.indexOf(type)) === -1) {
          return a.push(type);
        }
      };
      register = function(name, data) {
        var key;
        data.is || (data.is = function() {
          return false;
        });
        if (name in cache) {
          return _extend(name, data);
        }
        if (!(name in cache)) {
          order.unshift(name);
        }
        cache[data.name = name] = base !== data ? inherit(base, data) : data;
        cache[name][name] = function(o) {
          return o;
        };
        for (key in cache[name]) {
          _with_insert(key, cache[name]);
        }
        return cache[name];
      };
      _extend = function(name, data) {
        var k, method;
        if (typeof name === "string") {
          cache[name] || (cache[name] = register(name, {}));
          cache[name] = extend(cache[name], data);
          for (method in data) {
            _with_insert(method, cache[name]);
          }
        } else if (typeof name === "object") {
          for (k in name) {
            _extend(k, name[k]);
          }
        }
        return null;
      };
      lookup = function(obj) {
        var i1, len1, name;
        for (i1 = 0, len1 = order.length; i1 < len1; i1++) {
          name = order[i1];
          if (cache[name].is.call(obj, obj)) {
            return cache[name];
          }
        }
        return null;
      };
      register("unknown", base);
      register("object", {
        is: function(o) {
          var ref, ref1;
          return (o != null) && (typeof o === "object") && ((ref = (ref1 = o.constructor) != null ? ref1.name : void 0) === (void 0) || ref === "Object");
        }
      });
      register("array", {
        is: Array.isArray || function(o) {
          return isType(Array, o);
        }
      });
      register("map", {
        is: function(o) {
          return o && (o instanceof Map);
        }
      });
      register("buffer", {
        is: $.global.Buffer.isBuffer || function() {
          return false;
        }
      });
      register("error", {
        is: function(o) {
          return isType('Error', o);
        }
      });
      register("regexp", {
        is: function(o) {
          return isType('RegExp', o);
        }
      });
      register("string", {
        is: function(o) {
          return typeof o === "string";
        }
      });
      register("number", {
        is: function(o) {
          return typeof o === "number" && !isNaN(o);
        }
      });
      register("bool", {
        is: function(o) {
          return typeof o === "boolean";
        }
      });
      register("function", {
        is: function(o) {
          return typeof o === "function";
        }
      });
      register("class", {
        is: function(o) {
          var props;
          return typeof o === "function" && ('prototype' in (props = Object.getOwnPropertyDescriptors(o))) && !('arguments' in props);
        }
      });
      register("global", {
        is: function(o) {
          return typeof o === "object" && 'setInterval' in o;
        }
      });
      register("arguments", {
        is: function(o) {
          return typeof o === "object" && 'callee' in o && 'length' in o;
        }
      });
      register("undefined", {
        is: function(x) {
          return x === void 0;
        }
      });
      register("null", {
        is: function(x) {
          return x === null;
        }
      });
      return extend((function(o) {
        return lookup(o).name;
      }), {
        register: register,
        lookup: lookup,
        extend: _extend,
        get: function(t) {
          return cache[t];
        },
        is: function(t, o) {
          var ref, ref1;
          return (ref = (ref1 = cache[t]) != null ? ref1.is.call(o, o) : void 0) != null ? ref : false;
        },
        as: function() {
          var base1, o, rest, t;
          t = arguments[0], o = arguments[1], rest = 3 <= arguments.length ? slice.call(arguments, 2) : [];
          return typeof (base1 = lookup(o))[t] === "function" ? base1[t].apply(base1, [o].concat(slice.call(rest))) : void 0;
        },
        "with": function(f) {
          var ref;
          return (ref = _with_cache[f]) != null ? ref : [];
        }
      });
    })();
    _type.extend({
      unknown: {
        array: function(o) {
          return [o];
        }
      },
      "null": {
        array: function() {
          return [];
        }
      },
      undefined: {
        array: function() {
          return [];
        }
      },
      array: {
        array: function(o) {
          return o;
        }
      },
      number: {
        array: function(o) {
          return $.extend(new Array(o), {
            length: 0
          });
        }
      },
      "arguments": {
        array: function(o) {
          return Array.prototype.slice.apply(o);
        }
      }
    });
    maxHash = 0xFFFFFFFF;
    _type.register("bling", {
      is: function(o) {
        return o && isType($, o);
      },
      array: function(o) {
        return (o && o.toArray()) || [];
      },
      hash: function(o) {
        return o.map($.hash).reduce(function(a, x) {
          return ((a * a) + x) % maxHash;
        });
      },
      string: function(o) {
        return $.symbol + "([" + o.map(function(x) {
          return $.type.lookup(x).string(x);
        }).join(", ") + "])";
      },
      repr: function(o) {
        return $.symbol + "([" + o.map(function(x) {
          return $.type.lookup(x).repr(x);
        }).join(", ") + "])";
      }
    });
    _type["in"] = function() {
      var i1, j1, len1, obj, type, types;
      types = 2 <= arguments.length ? slice.call(arguments, 0, i1 = arguments.length - 1) : (i1 = 0, []), obj = arguments[i1++];
      for (j1 = 0, len1 = types.length; j1 < len1; j1++) {
        type = types[j1];
        if ($.is(type, obj)) {
          return true;
        }
      }
      return false;
    };
    return {
      $: {
        inherit: inherit,
        extend: extend,
        defineProperty: function(o, name, opts) {
          Object.defineProperty(o, name, extend({
            configurable: true,
            enumerable: true
          }, opts));
          return o;
        },
        isType: isType,
        type: _type,
        is: _type.is,
        are: function() {
          var a, args, i1, len1, type;
          type = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          for (i1 = 0, len1 = args.length; i1 < len1; i1++) {
            a = args[i1];
            if (!$.is(type, a)) {
              return false;
            }
          }
          return true;
        },
        as: _type.as,
        isDefined: function(o) {
          return o != null;
        },
        isSimple: function(o) {
          return _type["in"]("string", "number", "bool", o);
        },
        isEmpty: function(o) {
          return (o === "" || o === null || o === (void 0)) || o.length === 0 || (typeof o === "object" && Object.keys(o).length === 0);
        }
      },
      defineProperty: function(name, opts) {
        return this.each(function() {
          return $.defineProperty(this, name, opts);
        });
      }
    };
  });

  $.plugin({
    depends: 'math',
    provides: 'units'
  }, function() {
    var UNIT_RE, conv, convert, fill, init, locker, makeUnitRegex, parseUnits, set, units;
    units = $(["px", "pt", "pc", "em", "%", "in", "cm", "mm", "ex", "lb", "kg", "yd", "ft", "m", ""]);
    UNIT_RE = null;
    (makeUnitRegex = function() {
      var joined;
      joined = units.filter(/.+/).join('|');
      return UNIT_RE = new RegExp("(\\d+\\.*\\d*)((?:" + joined + ")/*(?:" + joined + ")*)$");
    })();
    parseUnits = function(s) {
      if (UNIT_RE.test(s)) {
        return UNIT_RE.exec(s)[2];
      }
      return "";
    };
    conv = function(a, b) {
      var denom_a, denom_b, numer_a, numer_b, ref, ref1;
      ref = a.split('/'), numer_a = ref[0], denom_a = ref[1];
      ref1 = b.split('/'), numer_b = ref1[0], denom_b = ref1[1];
      if ((denom_a != null) && (denom_b != null)) {
        return conv(denom_b, denom_a) * conv(numer_a, numer_b);
      }
      if (a in conv && (b in conv[a])) {
        return conv[a][b]();
      }
      return 0;
    };
    locker = function(x) {
      return function() {
        return x;
      };
    };
    fill = function() {};
    set = function(from, to, f) {
      conv[from] || (conv[from] = {});
      conv[from][to] = f;
      if (units.indexOf(from) === -1) {
        units.push(from);
      }
      if (units.indexOf(to) === -1) {
        units.push(to);
      }
      makeUnitRegex();
      return fill();
    };
    init = function() {
      $.type.register("units", {
        is: function(x) {
          return typeof x === "string" && UNIT_RE.test(x);
        },
        number: function(x) {
          return parseFloat(x);
        },
        string: function(x) {
          return "'" + x + "'";
        }
      });
      set('pc', 'pt', function() {
        return 12;
      });
      set('in', 'pt', function() {
        return 72;
      });
      set('in', 'px', function() {
        return 96;
      });
      set('in', 'cm', function() {
        return 2.54;
      });
      set('m', 'ft', function() {
        return 3.281;
      });
      set('yd', 'ft', function() {
        return 3;
      });
      set('cm', 'mm', function() {
        return 10;
      });
      set('m', 'cm', function() {
        return 100;
      });
      set('m', 'meter', function() {
        return 1;
      });
      set('m', 'meters', function() {
        return 1;
      });
      set('ft', 'feet', function() {
        return 1;
      });
      set('km', 'm', function() {
        return 1000;
      });
      set('em', 'px', function() {
        var w, x;
        w = 0;
        try {
          x = $("<span style='font-size:1em;visibility:hidden'>x</span>").appendTo("body");
          w = x.width().first();
          x.remove();
        } catch (error1) {}
        return w;
      });
      set('ex', 'px', function() {
        var w, x;
        w = 0;
        try {
          x = $("<span style='font-size:1ex;visibility:hidden'>x</span>").appendTo("body");
          w = x.width().first();
          x.remove();
        } catch (error1) {}
        return w;
      });
      set('ex', 'em', function() {
        return 2;
      });
      set('rad', 'deg', function() {
        return 57.3;
      });
      set('s', 'sec', function() {
        return 1;
      });
      set('s', 'ms', function() {
        return 1000;
      });
      set('ms', 'ns', function() {
        return 1000000;
      });
      set('min', 'sec', function() {
        return 60;
      });
      set('hr', 'min', function() {
        return 60;
      });
      set('hr', 'hour', function() {
        return 1;
      });
      set('hr', 'hours', function() {
        return 1;
      });
      set('day', 'hr', function() {
        return 24;
      });
      set('day', 'days', function() {
        return 1;
      });
      set('y', 'year', function() {
        return 1;
      });
      set('y', 'years', function() {
        return 1;
      });
      set('y', 'd', function() {
        return 365.25;
      });
      set('g', 'gram', function() {
        return 1;
      });
      set('g', 'grams', function() {
        return 1;
      });
      set('kg', 'g', function() {
        return 1000;
      });
      set('lb', 'g', function() {
        return 453.6;
      });
      set('lb', 'oz', function() {
        return 16;
      });
      set('f', 'frame', function() {
        return 1;
      });
      set('f', 'frames', function() {
        return 1;
      });
      set('sec', 'f', function() {
        return 60;
      });
      (fill = function() {
        var a, b, c, i1, infered, j1, k1, l1, len1, len2, len3, len4, one;
        conv[''] = {};
        one = locker(1.0);
        for (i1 = 0, len1 = units.length; i1 < len1; i1++) {
          a = units[i1];
          conv[a] || (conv[a] = {});
          conv[a][a] = conv[a][''] = conv[''][a] = one;
        }
        infered = 1;
        while (infered > 0) {
          infered = 0;
          for (j1 = 0, len2 = units.length; j1 < len2; j1++) {
            a = units[j1];
            if (!(a !== '')) {
              continue;
            }
            conv[a] || (conv[a] = {});
            for (k1 = 0, len3 = units.length; k1 < len3; k1++) {
              b = units[k1];
              if (!(b !== '')) {
                continue;
              }
              if ((!conv(a, b)) && (conv(b, a))) {
                conv[a][b] = locker(1.0 / conv(b, a));
                infered += 1;
              }
              for (l1 = 0, len4 = units.length; l1 < len4; l1++) {
                c = units[l1];
                if (c !== '') {
                  if ((conv(a, b)) && (conv(b, c)) && (!conv(a, c))) {
                    conv[a][c] = locker(conv(a, b) * conv(b, c));
                    infered += 1;
                  }
                }
              }
            }
          }
        }
        return null;
      })();
      return $.units.enable = function() {};
    };
    convert = function(unit, number) {
      var c, f, u;
      f = parseFloat(number);
      u = parseUnits(number);
      c = conv(u, unit);
      if (!(isFinite(c) && isFinite(f))) {
        return number;
      }
      return "" + (f * c) + unit;
    };
    return {
      $: {
        units: {
          enable: init,
          set: set,
          get: conv,
          convertTo: convert
        }
      },
      convertTo: function(unit) {
        return this.map(function(x) {
          return convert(unit, x);
        });
      },
      unitMap: function(f) {
        return this.map(function(x) {
          var n;
          return f.call((n = parseFloat(x)), n) + parseUnits(x);
        });
      }
    };
  });

  $.plugin({
    depends: "type",
    provides: "url,URL"
  }, function() {
    var clean, host_port_re, parse, parse_host, stringify, url_re, user_pass_re, username_re;
    url_re = /\b(?:([a-z+]+):)(?:\/{1,2}([^?\/#]*?))(\/[^?]*)*(?:\?([^#]+))*(?:#([^\s]+))*$/i;
    user_pass_re = /^([^:]+):([^@]+)@/;
    username_re = /^([^:@]+)@/;
    host_port_re = /^([^:]+):(\d+)/;
    parse_host = function(host) {
      var m, ret;
      if (!((host != null) && host.length > 0)) {
        return {};
      }
      ret = {
        host: host
      };
      if (ret.host.indexOf(",") > -1) {
        $.extend(ret, {
          hosts: ret.host.split(",").map(parse_host),
          host: void 0
        });
      } else {
        if ((m = ret.host.match(user_pass_re))) {
          $.extend(ret, {
            username: m[1],
            password: m[2],
            host: ret.host.replace(user_pass_re, '')
          });
        } else if ((m = ret.host.match(username_re))) {
          $.extend(ret, {
            username: m[1],
            host: ret.host.replace(username_re, '')
          });
        }
        if ((m = ret.host.match(host_port_re))) {
          $.extend(ret, {
            host: m[1],
            port: m[2]
          });
        }
      }
      return ret;
    };
    parse = function(str, parseQuery) {
      var i, i1, len1, m, pair, query, ref, ref1, ref2, ref3, ret;
      if (parseQuery == null) {
        parseQuery = false;
      }
      ret = (m = str != null ? str.match(url_re) : void 0) ? {
        protocol: m[1],
        host: m[2],
        path: m[3],
        query: (ref = m[4]) != null ? ref.replace(/^\?/, '') : void 0,
        hash: (ref1 = m[5]) != null ? ref1.replace(/^#/, '') : void 0
      } : null;
      if (ret != null) {
        if (parseQuery) {
          query = (ref2 = ret.query) != null ? ref2 : "";
          ret.query = Object.create(null);
          ref3 = query.split('&');
          for (i1 = 0, len1 = ref3.length; i1 < len1; i1++) {
            pair = ref3[i1];
            if ((i = pair.indexOf('=')) > -1) {
              ret.query[pair.substring(0, i)] = unescape(pair.substring(i + 1));
            } else if (pair.length > 0) {
              ret.query[pair] = null;
            }
          }
          delete ret.query[""];
        }
        $.extend(ret, parse_host(ret.host));
        $.keysOf(ret).each(function(key) {
          switch ($.type(ret[key])) {
            case "null":
            case "undefined":
              delete ret[key];
              break;
            case "string":
              if (ret[key].length === 0) {
                delete ret[key];
              }
          }
          return null;
        });
      }
      return ret;
    };
    clean = function(val, re, prefix, suffix) {
      var x;
      if (prefix == null) {
        prefix = '';
      }
      if (suffix == null) {
        suffix = '';
      }
      x = val != null ? val : "";
      if (x && !re.test(x)) {
        return prefix + x + suffix;
      } else {
        return x;
      }
    };
    stringify = function(url) {
      var k, v;
      if ($.is('object', url.query)) {
        url.query = ((function() {
          var ref, results;
          ref = url.query;
          results = [];
          for (k in ref) {
            v = ref[k];
            results.push(k + "=" + v);
          }
          return results;
        })()).join("&");
      }
      return [clean(url.protocol, /:$/, '', ':'), clean(url.host, /^\//, '//'), clean(url.port, /^:/, ':'), clean(url.path, /^\//, '/'), clean(url.query, /^\?/, '?'), clean(url.hash, /^#/, '#')].join('');
    };
    return {
      $: {
        URL: {
          parse: parse,
          stringify: stringify
        }
      }
    };
  });

  $.plugin({
    provides: "watchProperty",
    depends: "type"
  }, function() {
    var OP_CHANGE, OP_DELETE, OP_INSERT, watchArray, watchProperty;
    OP_CHANGE = 'change';
    OP_INSERT = 'insert';
    OP_DELETE = 'delete';
    watchProperty = function(obj, key, cb, prefix) {
      var first, get, i, prop, ref;
      if (prefix == null) {
        prefix = "";
      }
      if (typeof key === 'string' && (i = key.indexOf(".")) > -1) {
        first = key.substr(0, i);
        return watchProperty(obj[first], key.substr(i + 1), cb, ((prefix != null ? prefix.length : void 0) && prefix + '.' + first) || first);
      }
      if ($.is('array', obj[key])) {
        watchArray(obj[key], cb, ((prefix != null ? prefix.length : void 0) && prefix + '.' + key) || key);
      }
      prop = Object.getOwnPropertyDescriptor(obj, key);
      return $.defineProperty(obj, key, {
        get: get = (ref = prop.get) != null ? ref : function() {
          return prop.value;
        },
        set: $.compose($.partial(cb, OP_CHANGE, ((prefix != null ? prefix.length : void 0) && prefix + '.' + key) || key), prop.set || (prop.writable && function(v) {
          return prop.value = v;
        }) || get)
      });
    };
    watchArray = function(arr, cb, prefix) {
      var _watch, pcb, rebindAll;
      if (prefix == null) {
        prefix = "";
      }
      pcb = function(op, key, value) {
        return cb(op, ((prefix != null ? prefix.length : void 0) && prefix + '.' + key) || key, value);
      };
      _watch = function(method, _cb) {
        var supr;
        supr = arr[method];
        return arr[method] = function() {
          var a;
          a = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          try {
            return supr.apply(arr, a);
          } finally {
            _cb.apply(arr, a);
          }
        };
      };
      (rebindAll = function() {
        var i, i1, ref;
        for (i = i1 = 0, ref = arr.length; i1 < ref; i = i1 += 1) {
          watchProperty(arr, i, pcb);
        }
        return null;
      })();
      _watch('push', function(item) {
        var i;
        i = this.length - 1;
        watchProperty(this, i, pcb);
        return pcb(OP_INSERT, i, item);
      });
      _watch('unshift', function(item) {
        rebindAll();
        return pcb(OP_INSERT, 0, item);
      });
      _watch('pop', function() {
        return pcb(OP_DELETE, this.length, 1);
      });
      _watch('shift', function() {
        rebindAll();
        return pcb(OP_DELETE, this.length, 1);
      });
      _watch('splice', function(i, n, v) {
        if (v !== void 0) {
          i += 1;
          n -= 1;
        } else if (n > 0) {
          i = this.length;
        }
        if (n > 0) {
          return pcb(OP_DELETE, i, n);
        }
      });
      return arr;
    };
    return {
      $: {
        watchProperty: watchProperty
      }
    };
  });

}).call(this);

//# sourceMappingURL=bling.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27), __webpack_require__(52)(module), __webpack_require__(53).Buffer))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(54)
var ieee754 = __webpack_require__(55)
var isArray = __webpack_require__(56)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





const newListForm = $('[rel="js-add-list-form"]')[0];
const newTextInput = $('[rel="js-list-save-input"]')[0];
const listContainer = $('.lists__container')[0];


// When form is submitted to add a new list we can't use DB id so generate a temporary one...

function saveList(event){
  event.preventDefault();
  // console.log("saveList THIS: ", this)   this here is the form DOM element
  const input = this.querySelector('[rel="js-list-save-input"]');
  const tempId = "temp-" + Math.floor(Math.random(0, 1) * 10000000000);
  console.log(Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getUserLocal"])())
  const data = {
    _id: tempId,
    title: input.value,
    owner: Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getUserLocal"])()
  }
  console.log(data)
  // Save to local
  // Save to DB
  // Render list to DOM
}


function init(){
  // 1. load lists into local storage
  Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["loadLists"])();
  // 2. get lists out of local storage and render to page
  Object(_DOM__WEBPACK_IMPORTED_MODULE_2__["renderLists"])(Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getListsLocal"])())
  // 3. load items into local storage
  Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["loadItems"])();
  // add list form event
  newListForm.addEventListener('submit', saveList);
}

const List = {
  init: init 
}



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);