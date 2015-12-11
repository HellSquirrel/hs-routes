(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("lodash"), require("events"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "lodash", "events"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("lodash"), require("events")) : factory(root["React"], root["lodash"], root["events"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsLink = __webpack_require__(2);

	var _componentsLink2 = _interopRequireDefault(_componentsLink);

	var _componentsRouteMixin = __webpack_require__(7);

	var _componentsRouteMixin2 = _interopRequireDefault(_componentsRouteMixin);

	var _storagesRouterModelDebugger = __webpack_require__(9);

	var _storagesRouterModelDebugger2 = _interopRequireDefault(_storagesRouterModelDebugger);

	var _helpersUtils = __webpack_require__(3);

	var utils = _interopRequireWildcard(_helpersUtils);

	var _storagesRouterModel = __webpack_require__(10);

	var _storagesRouterModel2 = _interopRequireDefault(_storagesRouterModel);

	exports.Link = _componentsLink2['default'];
	exports.ReactRouterComponent = _componentsRouteMixin2['default'];
	exports.createDebuggerFor = _storagesRouterModelDebugger2['default'];
	exports.utils = utils;
	exports['default'] = _storagesRouterModel2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helpersUtils = __webpack_require__(3);

	var _helpersRouteParser = __webpack_require__(4);

	var _helpersRouteParser2 = _interopRequireDefault(_helpersRouteParser);

	var React = __webpack_require__(5);

	var cn = __webpack_require__(6);

	var Link = React.createClass({
	    displayName: 'Link',

	    isActive: function isActive() {

	        return window.location.hash.slice(-1) === this.props.to;
	    },

	    render: function render() {

	        console.log('reeeaccccctttt', React);
	        var classes = cn({
	            'route-link': true,
	            'route-link--active': this.isActive()
	        }, this.props.className);

	        return React.createElement(
	            'div',
	            { className: classes, onClick: _helpersUtils.goTo.bind(this, this.props.to, this.props.query) },
	            this.props.children
	        );
	    }
	});

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.createRoute = createRoute;
	exports.goTo = goTo;

	function createRoute(obj) {

	    var path = obj.path.join('/');
	    var query = [];

	    if (obj.query) {

	        for (var key in obj.query) {
	            query.push(key + '=' + obj.query[key]);
	        }
	    }

	    return '/' + path + '?' + query.join('&');
	}

	;

	function goTo(path, query) {
	    var route = createRoute({ path: path.split('/'), query: query });
	    if (path[0] === '/') {
	        window.location.hash = route.replace(/[^:]?\/\//, '/');
	    } else {
	        window.location.hash = (window.location.hash + route).replace(/[^:]\/\//, '/');
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	//wildcards doesnt work with query

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Parser = (function () {
	    function Parser() {
	        _classCallCheck(this, Parser);
	    }

	    _createClass(Parser, null, [{
	        key: 'parse',
	        value: function parse(route) {
	            var query = null;
	            var path = [];

	            var routeString = route.match(/^\/?([^?]*)/);

	            if (routeString.length) {

	                path = routeString[1].split('/');

	                var queryString = (route.match(/\?(.*)$/) || [, ''])[1];
	                if (queryString.length) {
	                    query = Parser.parseQuery(queryString);
	                }
	            }

	            return {
	                path: path, query: query
	            };
	        }
	    }, {
	        key: 'parseQuery',
	        value: function parseQuery(queryString) {

	            return queryString.split('&').reduce(function (result, el) {
	                var _el$split = el.split('=');

	                var _el$split2 = _slicedToArray(_el$split, 2);

	                var key = _el$split2[0];
	                var value = _el$split2[1];

	                result[key] = value;
	                return result;
	            }, {});
	        }
	    }, {
	        key: 'match',
	        value: function match(route, pattern) {

	            var parsedPatternPath = Parser.parse(pattern).path;

	            var parsedPattern = Parser.parse(route);
	            var parsedRoutePath = Parser.parse(route).path;
	            var params = {};
	            var matcher = _extends({}, parsedPattern);

	            var parsedRouteLength = parsedRoutePath.length;
	            var parsedPatternLength = parsedPatternPath.length;

	            if (parsedRouteLength === parsedPatternLength) {

	                for (var i = 0; i < parsedRouteLength; i++) {

	                    if (parsedPatternPath[i][0] == ':') {
	                        params[parsedPatternPath[i].slice(1)] = parsedRoutePath[i];
	                    } else {
	                        if (parsedPatternPath[i] !== parsedRoutePath[i]) {
	                            return null;
	                        }
	                    }
	                }

	                matcher.params = params;
	                return matcher;
	            } else {

	                if (parsedPatternPath.slice(-1)[0] === '*') {

	                    var newPattern = parsedPatternPath.slice(0, -1);
	                    var newRoute = parsedRoutePath.slice(0, newPattern.length);

	                    return Parser.match(newRoute.join('/'), newPattern.join('/'));
	                };

	                return null;
	            }
	        }
	    }]);

	    return Parser;
	})();

	exports['default'] = Parser;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _ = __webpack_require__(8);

	var ReactRouterComponent = {

	    getInitialState: function getInitialState() {
	        var patterns = this.props.patterns.reduce(function (result, patt) {
	            result[patt] = false;
	            return result;
	        }, {});

	        return { patterns: patterns };
	    },

	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        this.props.patterns.forEach(function (pattern) {
	            _this.props.router.addPattern(pattern, {
	                close: function close(match) {

	                    var newState = _.clone(_this.state);
	                    newState.patterns[pattern] = false;
	                    _this.setState(newState);
	                },

	                open: function open(match) {
	                    var newState = _.clone(_this.state);
	                    newState.patterns[pattern] = match;
	                    _this.setState(newState);
	                }
	            });
	        });
	    },

	    //matchObject or false
	    getRouteState: function getRouteState() {
	        var patterns = this.state.patterns;
	        for (var pattern in patterns) {
	            if (patterns[pattern]) {
	                return patterns[pattern];
	            }
	        }
	    },

	    render: function render() {
	        return this.getRouteState() ? this.renderRouteContent() : null;
	    }
	};

	exports['default'] = ReactRouterComponent;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = createDebuggerFor;

	function createDebuggerFor(router) {

	    var events = ['pattern.add', 'pattern.remove', 'route.match', 'route.not.match'];

	    events.forEach(function (event) {
	        router.on(event, function (payload) {
	            console.debug('event ' + event + ' fired');
	            console.debug(payload);
	        });
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _events = __webpack_require__(11);

	var _helpersRouteParser = __webpack_require__(4);

	var _helpersRouteParser2 = _interopRequireDefault(_helpersRouteParser);

	var Model = (function (_EventEmitter) {
	    _inherits(Model, _EventEmitter);

	    function Model() {
	        _classCallCheck(this, Model);

	        _get(Object.getPrototypeOf(Model.prototype), 'constructor', this).call(this);
	        this.patterns = {};
	        this.totalOpenedRoutes = 0;
	        this.state = {
	            patterns: {},
	            activeRoutes: []
	        };
	        window.addEventListener('hashchange', this.processRoute.bind(this), false);
	    }

	    //process all callbacks that match route

	    _createClass(Model, [{
	        key: 'processRoute',
	        value: function processRoute() {

	            var route = window.location.hash.slice(1);
	            var activeRoutes = [];

	            for (var pattern in this.patterns) {
	                var match = _helpersRouteParser2['default'].match(route, pattern);
	                if (match) {
	                    this.totalOpenedRoutes++;
	                    match.totalOpenendRoutes = this.totalOpenedRoutes;
	                    this.onRouteMatch(pattern, match);
	                    activeRoutes.push[route];
	                } else {
	                    this.onRouteNotMatch(pattern);
	                }

	                this.state.patterns[pattern] = match;
	                this.state.activeRoutes = activeRoutes;
	            }
	        }
	    }, {
	        key: 'onRouteMatch',
	        value: function onRouteMatch(pattern, match) {
	            //call cb
	            this.patterns[pattern].open(match);
	            this.emit('route.match', match);
	        }
	    }, {
	        key: 'onRouteNotMatch',
	        value: function onRouteNotMatch(pattern) {

	            this.patterns[pattern].close(pattern);
	            this.emit('route.not.match', pattern);
	        }
	    }, {
	        key: 'addPattern',
	        value: function addPattern(key, cb) {

	            if (!this.isMatcherValid(cb)) throw new Error('invalid matcher, it should looks like {open: fn(), close: fh()}');

	            key = this.normalize(key);
	            if (this.patterns[key]) throw new Error('pattern exists');
	            this.patterns[key] = cb;
	            this.emit('pattern.add', key);

	            this.processRoute();
	        }
	    }, {
	        key: 'isMatcherValid',
	        value: function isMatcherValid(cb) {

	            return cb.open && cb.close && typeof cb.open === 'function' && typeof cb.close === 'function';
	        }
	    }, {
	        key: 'removePattern',
	        value: function removePattern(key) {

	            key = this.normalize(key);
	            delete this.patterns[key];
	            this.emit('pattern.remove');
	        }
	    }, {
	        key: 'normalize',
	        value: function normalize(route) {

	            if (route[0] !== '/') {
	                return '/' + route;
	            } else {
	                return route;
	            }
	        }
	    }]);

	    return Model;
	})(_events.EventEmitter);

	exports['default'] = Model;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }
/******/ ])
});
;