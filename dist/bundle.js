webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _storagesRouterModel = __webpack_require__(2);

	var _storagesRouterModel2 = _interopRequireDefault(_storagesRouterModel);

	var _componentsLink = __webpack_require__(5);

	var _componentsLink2 = _interopRequireDefault(_componentsLink);

	var _componentsRouteMixin = __webpack_require__(164);

	var _componentsRouteMixin2 = _interopRequireDefault(_componentsRouteMixin);

	exports['default'] = _storagesRouterModel2['default'];
	exports.Link = _componentsLink2['default'];
	exports.ReactRouterComponent = _componentsRouteMixin2['default'];

/***/ },

/***/ 2:
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

	var _events = __webpack_require__(3);

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

/***/ 3:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 4:
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

/***/ 5:
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

	var _helpersUtils = __webpack_require__(6);

	var _helpersRouteParser = __webpack_require__(4);

	var _helpersRouteParser2 = _interopRequireDefault(_helpersRouteParser);

	var React = __webpack_require__(7);

	var cn = __webpack_require__(163);

	var Link = (function (_React$Component) {
	    _inherits(Link, _React$Component);

	    function Link() {
	        _classCallCheck(this, Link);

	        _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Link, [{
	        key: 'isActive',
	        value: function isActive() {

	            return window.location.hash.slice(-1) === this.props.to;
	        }
	    }, {
	        key: 'render',
	        value: function render() {

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
	    }]);

	    return Link;
	})(React.Component);

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },

/***/ 6:
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

/***/ 163:
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

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _ = __webpack_require__(165);

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

/***/ }

});