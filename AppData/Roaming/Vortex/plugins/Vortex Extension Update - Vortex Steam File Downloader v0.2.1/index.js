module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "e:\\WorkC\\extensions\\extension-steamkit\\src\\index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\debug\\src\\browser.js":
/*!********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/debug/src/browser.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\debug\\src\\debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\debug\\src\\debug.js":
/*!******************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/debug/src/debug.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\ms\\index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\follow-redirects\\debug.js":
/*!*************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/follow-redirects/debug.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __webpack_require__(/*! debug */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\debug\\src\\browser.js")("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\follow-redirects\\index.js":
/*!*************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/follow-redirects/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(/*! url */ "url");
var URL = url.URL;
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var Writable = __webpack_require__(/*! stream */ "stream").Writable;
var assert = __webpack_require__(/*! assert */ "assert");
var debug = __webpack_require__(/*! ./debug */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\follow-redirects\\debug.js");

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request.on(events[e], eventHandlers[events[e]]);
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  abortRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError(cause));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (typeof this._options.beforeRedirect === "function") {
    var responseDetails = { headers: response.headers };
    try {
      this._options.beforeRedirect.call(null, this._options, responseDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError(cause));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, defaultMessage) {
  function CustomError(cause) {
    Error.captureStackTrace(this, this.constructor);
    if (!cause) {
      this.message = defaultMessage;
    }
    else {
      this.message = defaultMessage + ": " + cause.message;
      this.cause = cause;
    }
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

function abortRequest(request) {
  for (var e = 0; e < events.length; e++) {
    request.removeListener(events[e], eventHandlers[events[e]]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomain(subdomain, domain) {
  const dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\ms\\index.js":
/*!***********************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/ms/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\lib\\node-rest-client.js":
/*!****************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/node-rest-client/lib/node-rest-client.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(/*! follow-redirects */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\follow-redirects\\index.js").http,
https = __webpack_require__(/*! follow-redirects */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\follow-redirects\\index.js").https,
urlParser = __webpack_require__(/*! url */ "url"),
util = __webpack_require__(/*! util */ "util"),
events = __webpack_require__(/*! events */ "events"),
zlib = __webpack_require__(/*! zlib */ "zlib"),
node_debug = __webpack_require__(/*! debug */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\node_modules\\debug\\src\\browser.js")("NRC");

exports.Client = function (options){
    var self = this,
     // parser response manager
     parserManager = __webpack_require__(/*! ./nrc-parser-manager */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\lib\\nrc-parser-manager.js")(),
     serializerManager = __webpack_require__(/*! ./nrc-serializer-manager */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\lib\\nrc-serializer-manager.js")(),
    // connection manager
    connectManager = new ConnectManager(this, parserManager),
    // io facade to parsers and serailiazers
    ioFacade = function(parserManager, serializerManager){
        // error execution context
        var  errorContext = function(logic){
            return function(){
                try{
                    return logic.apply(this, arguments);
                }catch(err){
                    self.emit('error',err);
                }
              };
        },
        result={"parsers":{}, "serializers":{}};

    // parsers facade
    result.parsers.add = errorContext(parserManager.add);
    result.parsers.remove = errorContext(parserManager.remove);
    result.parsers.find = errorContext(parserManager.find);
    result.parsers.getAll = errorContext(parserManager.getAll);
    result.parsers.getDefault = errorContext(parserManager.getDefault);
    result.parsers.clean = errorContext(parserManager.clean);
    
    // serializers facade
    result.serializers.add = errorContext(serializerManager.add);
    result.serializers.remove = errorContext(serializerManager.remove);
    result.serializers.find = errorContext(serializerManager.find);
    result.serializers.getAll = errorContext(serializerManager.getAll);
    result.serializers.getDefault = errorContext(serializerManager.getDefault);
    result.serializers.clean = errorContext(serializerManager.clean);

    return result;
    
    }(parserManager,serializerManager),
    // declare util constants
    CONSTANTS={
        HEADER_CONTENT_LENGTH:"Content-Length"
    };


    self.options = options || {},
    self.useProxy = (self.options.proxy || false)?true:false,
    self.useProxyTunnel = (!self.useProxy || self.options.proxy.tunnel===undefined)?false:self.options.proxy.tunnel,
    self.proxy = self.options.proxy,
    self.connection = self.options.connection || {},
    self.mimetypes = self.options.mimetypes || {},
    self.requestConfig = self.options.requestConfig || {},
    self.responseConfig = self.options.responseConfig || {};

    // namespaces for methods, parsers y serializers
    this.methods={};
    this.parsers={};
    this.serializers={};

    // Client Request to be passed to ConnectManager and returned
    // for each REST method invocation
    var ClientRequest =function(){
        events.EventEmitter.call(this);
    };


    util.inherits(ClientRequest, events.EventEmitter);
    

    ClientRequest.prototype.end = function(){
        if(this._httpRequest) {
            this._httpRequest.end();
        }
    };

    ClientRequest.prototype.setHttpRequest=function(req){
        this._httpRequest = req;
    };



    var Util = {
       createProxyPath:function(url){
        var result = url.host;
         // check url protocol to set path in request options
         if (url.protocol === "https:"){
            // port is set, leave it, otherwise use default https 443
            result = (url.host.indexOf(":") == -1?url.hostname + ":443":url.host);
        }

        return result;
    },
    createProxyHeaders:function(url){
        var result ={};
        // if proxy requires authentication, create Proxy-Authorization headers
        if (self.proxy.user && self.proxy.password){
            result["Proxy-Authorization"] = "Basic " + new Buffer([self.proxy.user,self.proxy.password].join(":")).toString("base64");
        }
        // no tunnel proxy connection, we add the host to the headers
        if(!self.useProxyTunnel)
            result["host"] = url.host;

        return result;
    },
    createConnectOptions:function(connectURL, connectMethod){
        debug("connect URL = ", connectURL);
        var url = urlParser.parse(connectURL),
        path,
        result={},
        protocol = url.protocol.indexOf(":") == -1?url.protocol:url.protocol.substring(0,url.protocol.indexOf(":")),
        defaultPort = protocol === 'http'?80:443;

        result ={
            host: url.host.indexOf(":") == -1?url.host:url.host.substring(0,url.host.indexOf(":")),
            port: url.port === undefined?defaultPort:url.port,
            path: url.path,
            protocol:protocol,
            href:url.href
        };

             if (self.useProxy) result.agent = false; // cannot use default
														// agent in proxy mode

             if (self.options.user && self.options.password){
                result.auth = [self.options.user,self.options.password].join(":");

            } else if (self.options.user && !self.options.password){
                 // some sites only needs user with no password to
					// authenticate
                 result.auth = self.options.user + ":";
             }

            // configure proxy connection to establish a tunnel
            if (self.useProxy){

                result.proxy ={
                    host: self.proxy.host,
                    port: self.proxy.port,
                    method: self.useProxyTunnel?'CONNECT':connectMethod,// if
																		// proxy
																		// tunnel
																		// use
																		// 'CONNECT'
																		// method,
																		// else
																		// get
																		// method
																		// from
																		// request,
                    path: self.useProxyTunnel?this.createProxyPath(url):connectURL, // if
																					// proxy
																					// tunnel
																					// set
																					// proxy
																					// path
																					// else
																					// get
																					// request
																					// path,
                    headers: this.createProxyHeaders(url) // createProxyHeaders
															// add correct
															// headers depending
															// of proxy
															// connection type
                };
            }

            if(self.connection && typeof self.connection === 'object'){
                for(var option in self.connection){
                    result[option] = self.connection[option];
                }
            }

            // don't use tunnel to connect to proxy, direct request
            // and delete proxy options
            if (!self.useProxyTunnel){
                for (var proxyOption in result.proxy){
                    result[proxyOption] = result.proxy[proxyOption];
                }

                delete result.proxy;
            }

            // add general request and response config to connect options

            result.requestConfig = self.requestConfig;
            result.responseConfig = self.responseConfig;


            return result;
        },
        decodeQueryFromURL: function(connectURL){
            var url = urlParser.parse(connectURL),
            query = url.query.substring(1).split("&"),
            keyValue,
            result={};

            // create decoded args from key value elements in query+
            for (var i=0;i<query.length;i++){
                keyValue = query[i].split("=");
                result[keyValue[0]] = decodeURIComponent(keyValue[1]);
            }

            return result;

        },
        serializeEncodeQueryFromArgs:function(args){

            function serialize(obj, parent) {
              var tokens = [], propertyName;
              // iterate over all properties
              for(propertyName in obj) {
                  // if object has property (it's not an array iteration)
                  if (obj.hasOwnProperty(propertyName)) {
                  // if property has parent, add nested reference
                  var parsedProperty = parent ? parent + "[" + propertyName + "]" : propertyName, propertyValue = obj[propertyName];

                  // if property has value and is object (we must iterate
					// again, not final leaf)
                  // iterate over object property passing current parsed
					// property as parent
                  // else add encoded parsed property and value to result
					// array
                  tokens.push((propertyValue !== null && typeof propertyValue === "object") ?
                    serialize(propertyValue, parsedProperty) :
                    encodeURIComponent(parsedProperty) + "=" + encodeURIComponent(propertyValue));
                    }
                }
                    return tokens.join("&");
            }

          debug("args is", args);
                // check args consistency
                if (args && typeof args !== 'object' )
                    self.emit('error','cannot serialize parameters: invalid type ' + (typeof  args) + ' should be an object type');

                return serialize(args);
        },
        parsePathParameters:function(args,url){
            var result = url;
            if (!args || !args.path) return url;

            for (var placeholder in args.path){
                var regex = new RegExp("\\$\\{" + placeholder + "\\}","i");
                result = result.replace(regex,args.path[placeholder]);
                
            }
            
            return result;

        },
        overrideClientConfig:function(connectOptions,methodOptions){
            function validateReqResOptions(reqResOption){
                return (reqResOption && typeof reqResOption === 'object');
            }
            // check if we have particular request or response config set on
			// this method invocation
            // and override general request/response config
            if (validateReqResOptions(methodOptions.requestConfig)){
                util._extend(connectOptions.requestConfig,methodOptions.requestConfig);
            }

            if (validateReqResOptions(methodOptions.responseConfig)){
                util._extend(connectOptions.responseConfig,methodOptions.responseConfig);
            }


        },
        connect : function(method, url, args, callback, clientRequest){
            //wrapper for emit function on client
            var clientEmitterWrapper = function (client){
                    var client = client;
                    return function(type, event){client.emit(type, event);};
                };

            // check args type if we use it
            if (callback && args && typeof args !== 'object')self.emit('error','args should be and object');

            // configure connect options based on url parameter parse
            var options = this.createConnectOptions(this.parsePathParameters(args,url), method);
            debug("options pre connect",options);
            options.method = method,
            clientRequest.href=options.href,
            options.clientRequest = clientRequest,
            options.headers= options.headers || {};
            
            debug("args = ", args);
            debug("args.data = ", args !== undefined?args.data:undefined);
            // no args passed
            if (typeof args === 'function'){
                callback = args;
                // add Content-length to POST/PUT/DELETE/PATCH methods
                if (method === 'POST' || method === 'PUT' || method === 'DELETE' || method === 'PATCH'){
                    options.headers[CONSTANTS.HEADER_CONTENT_LENGTH] = 0;
                }
            } else if (typeof args === 'object') {
                // add headers and POST/PUT/DELETE/PATCH data to connect options
				// to be passed
                // with request, but without deleting other headers like
				// non-tunnel proxy headers
                if (args.headers){
                    for (var headerName in args.headers){
                        if (args.headers.hasOwnProperty(headerName)) {
                            options.headers[headerName] = args.headers[headerName];
                        }
                    }
                    
                }
                
 
                // we have args, go and check if we have parameters
                if (args.parameters && Object.keys(args.parameters).length > 0){
                  // validate URL consistency, and fix it adding query
					// parameter separation char

                  // check if URL already has '?' path parameter separator
					// char in any position that is not final
                  // if true throw error
                  var pathLength = options.path.length,
                  pathParameterSepCharPos = options.path.indexOf("?");

                  if (pathParameterSepCharPos >= 0 && pathParameterSepCharPos!== pathLength -1 )
                   self.emit('error','parameters argument cannot be used if parameters are already defined in URL ' + options.path);

               options.path +=(options.path.charAt(pathLength-1) === '?'?"":"?");
                  // check if we have serializable parameter container, that
					// must be serialized and encoded
                  // directly, as javascript object
                  options.path = options.path.concat(Util.serializeEncodeQueryFromArgs(args.parameters));
                  debug("options.path after request parameters = ", options.path);
              }

                // override client config, by the moment just for request
				// response config
                this.overrideClientConfig(options,args);

               // always set Content-length header if not set previously
                // set Content lentgh for some servers to work (nginx, apache)
                if (args.data !== undefined && !options.headers.hasOwnProperty(CONSTANTS.HEADER_CONTENT_LENGTH)){                    
                    serializerManager.get(options).serialize(args.data, clientEmitterWrapper(self), function(serializedData){
                        options.data = serializedData;
                        options.headers[CONSTANTS.HEADER_CONTENT_LENGTH] = Buffer.byteLength(options.data, 'utf8');
                    });                    
                }else{
                    options.headers[CONSTANTS.HEADER_CONTENT_LENGTH] = 0;
                }


            }
            

            debug("options post connect",options);
            debug("FINAL SELF object  ====>", self);

            if (self.useProxy && self.useProxyTunnel){
                connectManager.proxy(options,callback);
            }else{
                // normal connection and direct proxy connections (no tunneling)
                connectManager.normal(options,callback);
            }
        },
        mergeMimeTypes:function(mimetypes){
        	// this function is left for backward compatibility, but will be
        	// deleted in future releases
        	var parser = null;
            // merge mime-types passed as options to parsers
            if (mimetypes && typeof mimetypes === "object"){
	            try{
	            	if (mimetypes.json && mimetypes.json instanceof Array && mimetypes.json.length > 0){                	
                		parser = parserManager.find("JSON");
                		parser.contentTypes = mimetypes.json;                    
	                }else if (mimetypes.xml && mimetypes.xml instanceof Array && mimetypes.xml.length > 0){
	                	parser = parserManager.find("XML");
	            		parser.contentTypes = mimetypes.xml;                    
	                }
	        	}catch(err){
	        		self.emit('error', 'cannot assign custom content types to parser, cause: ' + err);
	        	}
            }
        },
        createHttpMethod:function(methodName){
            return function(url, args, callback){
                var clientRequest = new ClientRequest();
                Util.connect(methodName.toUpperCase(), url, args, callback, clientRequest);
                return clientRequest;
            };
        }
    },
    Method = function(url, method){
        var httpMethod = self[method.toLowerCase()];
        
        return  function(args,callback){
            var completeURL = url;
                    // no args
                    if (typeof args === 'function'){
                        callback = args;
                        args = {};
                    }

                    return httpMethod(completeURL, args , callback);
                };
            };




            this.get = Util.createHttpMethod("get");

            this.post = Util.createHttpMethod("post");
            
            this.put = Util.createHttpMethod("put");

            this.delete = Util.createHttpMethod("delete");

            this.patch = Util.createHttpMethod("patch");


            this.registerMethod = function(name, url, method){
        // create method in method registry with preconfigured REST invocation
        // method
        this.methods[name] = new Method(url,method);
    };

    this.unregisterMethod = function(name){
        delete this.methods[name];
    };

    this.addCustomHttpMethod=function(methodName){
        self[methodName.toLowerCase()] = Util.createHttpMethod(methodName);
    };

    this.parsers = ioFacade.parsers;

    this.serializers = ioFacade.serializers;
   
    // merge mime types with connect manager
    Util.mergeMimeTypes(self.mimetypes);
    debug("ConnectManager", connectManager);

};


var ConnectManager = function(client, parserManager) {
   
    var client = client,
    clientEmitterWrapper = function (client){
                    var client = client;
                    return function(type, event){client.emit(type, event);};
                };
    
  

    this.configureRequest = function(req, config, clientRequest){

        if (config.timeout){
            req.setTimeout(config.timeout, function(){
                clientRequest.emit('requestTimeout',req);
            });
        }
        

        if(config.noDelay)
            req.setNoDelay(config.noDelay);

        if(config.keepAlive)
            req.setSocketKeepAlive(config.noDelay,config.keepAliveDelay || 0);
        
    };

    this.configureResponse = function(res,config, clientRequest){
        if (config.timeout){
            res.setTimeout(config.timeout, function(){
                clientRequest.emit('responseTimeout',res);
                res.close();
            });
        }
    };

    this.configureOptions = function(options){
        var followRedirectsProps =["followRedirects", "maxRedirects"];
        function configureProps(propsArray, optionsElement){
            for (var index in propsArray){
                if (optionsElement.hasOwnProperty(propsArray[index]))
                    options[propsArray[index]] = optionsElement[propsArray[index]];        
            }    
        }
        
        //add follows-redirects config
        configureProps(followRedirectsProps, options.requestConfig);
        

        // remove "protocol" and "clientRequest" option from options,
        // cos is not allowed by http/hppts node objects
        delete options.protocol;
        delete options.clientRequest;
        delete options.requestConfig;
        delete options.responseConfig;
        debug("options pre connect", options);
    };

    this.handleEnd = function(res,buffer,callback){

        var self = this,
        content = res.headers["content-type"],
        encoding = res.headers["content-encoding"];
        
        debug("content-type: ", content);
        debug("content-encoding: ",encoding);

        if(encoding !== undefined && encoding.indexOf("gzip") >= 0){
            debug("gunzip");
            zlib.gunzip(Buffer.concat(buffer),function(er,gunzipped){
                self.handleResponse(res,gunzipped,callback);
            });
        }else if(encoding !== undefined && encoding.indexOf("deflate") >= 0){
            debug("inflate");
            zlib.inflate(Buffer.concat(buffer),function(er,inflated){
                self.handleResponse(res,inflated,callback);
            });
        }else {
            debug("not compressed");
            self.handleResponse(res,Buffer.concat(buffer),callback);
        }
    };

    this.handleResponse = function(res,data,callback){
        // find valid parser to be used with response content type, first one
		// found
        parserManager.get(res).parse(data, clientEmitterWrapper(client), function(parsedData){
            callback(parsedData,res);
        });
    };

    this.prepareData = function(data){
        var result;
        if ((data instanceof Buffer) || (typeof data !== 'object')){
            result = data;
        }else{
            result = JSON.stringify(data);
        }
        return result;
    };

    this.proxy = function(options, callback){

        debug("proxy options",options.proxy);

            // creare a new proxy tunnel, and use to connect to API URL
            var proxyTunnel = http.request(options.proxy),
            self = this;
            
            
            proxyTunnel.on('connect',function(res, socket, head){
                debug("proxy connected",socket);

                // set tunnel socket in request options, that's the tunnel
				// itself
                options.socket = socket;

                var buffer=[],
                protocol = (options.protocol =="http")?http:https,
                clientRequest = options.clientRequest,
                requestConfig = options.requestConfig,
                responseConfig = options.responseConfig;
                
                self.configureOptions(options);

                // add request options to request returned to calling method
                clientRequest.options = options;

                var request = protocol.request(options, function(res){
                        // configure response
                        self.configureResponse(res,responseConfig, clientRequest);

                        // concurrent data chunk handler
                        res.on('data',function(chunk){
                            buffer.push(Buffer.from(chunk));
                        });

                        res.on('end',function(){
                            self.handleEnd(res,buffer,callback);
                        });


                        // handler response errors
                        res.on('error',function(err){
                            if (clientRequest !== undefined && typeof clientRequest === 'object'){
                                // add request as property of error
                                err.request = clientRequest;
                                err.response =  res;
                                // request error handler
                                clientRequest.emit('error',err);
                            }else{
                                // general error handler
                                client.emit('error',err);
                            }
                        });
                    });



                // configure request and add it to clientRequest
                // and add it to request returned
                self.configureRequest(request,requestConfig, clientRequest);
                clientRequest.setHttpRequest(request);


                // write POST/PUT data to request body;
                // find valid serializer to be used to serialize request data,
				// first one found
                // is the one to be used.if none found for match condition,
				// default serializer is used

               if(options.data)request.write(options.data);

                request.end();
                
               
               // handle request errors and handle them by request or general
				// error handler
               request.on('error',function(err){
                   if (clientRequest !== undefined && typeof clientRequest === 'object'){
                       // add request as property of error
                       err.request = clientRequest;
                       
                       // request error handler
                       clientRequest.emit('error',err);
                   }else{
                       // general error handler
                       client.emit('error',err);
                   }
               });
            });

            // proxy tunnel error are only handled by general error handler
            proxyTunnel.on('error',function(e){
                client.emit('error',e);
            });

            proxyTunnel.end();
            
        };

        this.normal = function(options, callback){

            var buffer = [],
            protocol = (options.protocol === "http")?http:https,
            clientRequest = options.clientRequest,
            requestConfig = options.requestConfig,
            responseConfig = options.responseConfig,
            self = this;
            
                self.configureOptions(options);

                // add request options to request returned to calling method
                clientRequest.options = options;

                var request = protocol.request(options, function(res){
                        // configure response
                        self.configureResponse(res,responseConfig, clientRequest);

                        // concurrent data chunk handler
                        res.on('data',function(chunk){
                            buffer.push(Buffer.from(chunk));
                        });

                        res.on('end',function(){

                            self.handleEnd(res,buffer,callback);

                        });

                        // handler response errors
                        res.on('error',function(err){
                            if (clientRequest !== undefined && typeof clientRequest === 'object'){
                            	// add request as property of error
                                err.request = clientRequest;
                                err.response = res;
                                // request error handler
                                clientRequest.emit('error',err);
                            }else{
                                // general error handler
                                client.emit('error',err);
                            }
                        });
                    });

                // configure request and add it to clientRequest
                // and add it to request returned
                self.configureRequest(request,requestConfig, clientRequest);
                debug("clientRequest",clientRequest);

                clientRequest.setHttpRequest(request);

                debug("options data", options.data);
                // write POST/PUT data to request body;
                // find valid serializer to be used to serialize request data,
				// first one found
                // is the one to be used.if none found for match condition,
				// default serializer is used
                if(options.data)request.write(options.data);
                request.end(); // end request when data is written

                // handle request errors and handle them by request or general
				// error handler
                request.on('error',function(err){
                    if (clientRequest !== undefined && typeof clientRequest === 'object'){
                        // add request as property of error
                        err.request = clientRequest;
                        
                        // request error handler
                        clientRequest.emit('error',err);
                    }else{
                        // general error handler
                        client.emit('error',err);
                    }
                });            
        };
    };


    // event handlers for client and ConnectManager
    util.inherits(exports.Client, events.EventEmitter);   


    var debug = function(){
        if (!process.env.DEBUG) return;

        var now = new Date(),
        header =now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() +  " [NRC CLIENT]" + arguments.callee.caller.name + " -> ",
        args = Array.prototype.slice.call(arguments);
        args.splice(0,0,header);
        node_debug.apply(console,args);


    };


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\lib\\nrc-parser-manager.js":
/*!******************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/node-rest-client/lib/nrc-parser-manager.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ParserManager = function(){
	var registry={}, defaultParser = null;

	var _private={
		"validate":function(parser){

			function validateProperties(parser, props){
				var result = true;
				for (var propIndex in props){
					var propType  = props[propIndex].split(":");
					if (!parser.hasOwnProperty([propType[0]]) || typeof parser[propType[0]] !== propType[1]){
						result = false;
						break;
					}
				}

				return result;
			}


			result = validateProperties(parser,["name:string","parse:function","isDefault:boolean"]);

			// valid  parser, check if its not default response parser, to validate non
			// default parser props
			if (result && !parser.isDefault)
				result = validateProperties(parser,["match:function"]);
			

			return result;
		}
	};

	this.add = function(parser){
		if (!_private.validate(parser))
			throw "parser cannot be added: invalid parser definition";

		if (parser.isDefault){
			defaultParser = parser;
		}else{
			registry[parser.name] = parser;
		}
	};

	this.remove = function(parserName){
		var result = registry[parserName];
		if (!result)
			throw "cannot remove parser: " + parserName +" doesn't exists";

		delete registry[parserName];
	};

	this.clean = function(){
		registry={};
	};

	this.find = function(parserName){
		var result = registry[parserName];
		if (!result)
			throw "cannot find parser: " + parserName + " doesn't exists ";

		return result;
	};

	this.getDefault = function(){
		return defaultParser;
	};
	
	this.get = function(response){
		var result = null;
		for (var parserName in registry){
			if (registry[parserName].match(response)){
				result = registry[parserName];
				break;
			}
		}
		// if parser not found return default parser, else parser found
		return (result === null)?defaultParser:result;
	};

	this.getAll=function(){
		var result=[];		
		for (var parserName in registry){
			result.push(registry[parserName]);
		}
		return result;
	}
};


module.exports = function(){

var parserManager = new ParserManager();

var BaseParser = {
	"isDefault":false,	
	"match":function(response){
		var result = false,
		contentType = response.headers["content-type"] && response.headers["content-type"].replace(/ /g, '');

		if (!contentType) return result;

		for (var i=0; i<this.contentTypes.length;i++){
			result = this.contentTypes[i].trim().toLowerCase() === contentType.trim().toLowerCase();
			if (result) break;
		}

		return result;
	}
};

//add default parser managers: JSON,XML and unknown content/type
parserManager.add(Object.assign({
	"name":"XML",
	"options":{"explicitArray":false},	
	"contentTypes":["application/xml","application/xml;charset=utf-8","text/xml","text/xml;charset=utf-8"],
	"parseString":__webpack_require__(/*! xml2js */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\xml2js.js").parseString,
	"parse":function(byteBuffer,nrcEventEmitter,parsedCallback){
		this.parseString(byteBuffer.toString(),this.options, function (err, result) {
			parsedCallback(result);
		});
	}
}, BaseParser));

parserManager.add(Object.assign({
	"name":"JSON",	
	"contentTypes":["application/json","application/json;charset=utf-8"],
	"isValidData":function(data){
		return data !== undefined && (data.length !== undefined && data.length > 0);
	},	
	"parse":function(byteBuffer,nrcEventEmitter,parsedCallback){
		var jsonData,
		data = byteBuffer.toString();

		try {
			jsonData = this.isValidData(data)?JSON.parse(data):data;
		} catch (err) {
                // Something went wrong when parsing json. This can happen
                // for many reasons, including a bad implementation on the
                // server.
                nrcEventEmitter('error','Error parsing response. response: [' +data + '], error: [' + err + ']');
            }
            parsedCallback(jsonData);
        }
    },BaseParser));


parserManager.add({
	"name":"DEFAULT",
	"isDefault":true,
	"parse":function(byteBuffer,nrcEventEmitter,parsedCallback){
		parsedCallback(byteBuffer);
	}
});

return parserManager;
}


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\lib\\nrc-serializer-manager.js":
/*!**********************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/node-rest-client/lib/nrc-serializer-manager.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var xmlserializer = __webpack_require__(/*! xml2js */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\xml2js.js");

var SerializerManager = function(){
	var registry={}, defaultSerializer = null;

	var _private={
		"validate":function(serializer){

			function validateProperties(serializer, props){
				var result = true;
				for (var propIndex in props){
					var propType  = props[propIndex].split(":");
					if (!serializer.hasOwnProperty([propType[0]]) || typeof serializer[propType[0]] !== propType[1]){
						result = false;
						break;
					}
				}

				return result;
			}


			result = validateProperties(serializer,["name:string","serialize:function","isDefault:boolean"]);

			// valid  serializer, check if its not default request serializer, to validate non
			// default serializer props
			if (result && !serializer.isDefault)
				result = validateProperties(serializer,["match:function"]);
			

			return result;
		}
	};

	this.add = function(serializer){
		if (!_private.validate(serializer))
			throw "serializer cannot be added: invalid serializer definition";

		if (serializer.isDefault){
			defaultSerializer = serializer;
		}else{
			registry[serializer.name] = serializer;
		}
	};

	this.remove = function(serializerName){
		var result = registry[serializerName];
		if (!result)
			throw "cannot remove serializer: " + serializerName +" doesn't exists";

		delete registry[serializerName];
	};

	this.find = function(serializerName){
		var result = registry[serializerName];
		if (!result)
			throw "cannot find serializer: " + serializerName +" doesn't exists";

		return result;
	};
	
	
	this.clean = function(){
		registry={};
	};

	this.get = function(request){
		var result = null;
		for (var serializerName in registry){
			if (registry[serializerName].match(request)){
				result = registry[serializerName];
				break;
			}
		}
		// if serializer not found return default serializer, else serializer found
		return (result === null)?defaultSerializer:result;
	};

	this.getAll=function(){
		var result = [];		
		for (var serializerName in registry){
			result.push(registry[serializerName]);
		}
		return result;
	};

	this.getDefault = function(){
		return defaultSerializer;
	};
};




module.exports = function(){

var serializerManager = new SerializerManager();

var BaseSerializer ={
	"isDefault":false,		
	"match":function(request){
		var result = false,
		contentType = request.headers["Content-Type"] && request.headers["Content-Type"].replace(/ /g, '');

		if (!contentType) return result;

		for (var i=0; i<this.contentTypes.length;i++){
			result = this.contentTypes[i].trim().toLowerCase() === contentType.trim().toLowerCase();
			if (result) break;
		}

		return result;
	}
};


//add default serializer managers: JSON,XML and unknown content/type
serializerManager.add(Object.assign({
	"name":"XML",
	"options":{},	
	"contentTypes":["application/xml","application/xml;charset=utf-8","text/xml","text/xml;charset=utf-8"],
	"xmlSerializer":new xmlserializer.Builder(this.options),	
	"serialize":function(data,nrcEventEmitter,serializedCallback){
		if (typeof data === 'object')
			data = xmlSerializer.buildObject(data);

		serializedCallback(data);
	
	}
},BaseSerializer));

serializerManager.add(Object.assign({
	"name":"JSON",	
	"contentTypes":["application/json","application/json;charset=utf-8"],	
	"serialize":function(data,nrcEventEmitter,serializedCallback){
		if(typeof data === 'object')
			data = JSON.stringify(data);
		serializedCallback(data);
    }
},BaseSerializer));


serializerManager.add(Object.assign({
	"name":"FORM-ENCODED",
	"contentTypes":["application/x-www-form-urlencoded","multipart/form-data","text/plain"],
	"encode":function (obj, parent) {
              var tokens = [], propertyName;
              //iterate over all properties
              for(propertyName in obj) {
                  //if object has property (it's not an array iteration)
                  if (obj.hasOwnProperty(propertyName)) {
                  //if property has parent, add nested reference  
                  var parsedProperty = parent ? parent + "[" + propertyName + "]" : propertyName, propertyValue = obj[propertyName];

                  // if property has value and is object (we must iterate again, not final leaf)
                  // iterate over object property passing current parsed property as parent
                  // else add encoded parsed property and value to result array
                  tokens.push((propertyValue !== null && typeof propertyValue === "object") ?
                    serialize(propertyValue, parsedProperty) :
                    encodeURIComponent(parsedProperty) + "=" + encodeURIComponent(propertyValue));
                    }
                }
                    return tokens.join("&");
    },	
	"serialize":function(data,nrcEventEmitter,serializedCallback){
		if(typeof data === 'object')
			data = this.encode(data);

		serializedCallback(data);
    	}
	},BaseSerializer));


serializerManager.add({
	"name":"DEFAULT",
	"isDefault":true,
	"serialize":function(data,nrcEventEmitter,serializedCallback){
		
		serializedCallback(data.toString());
	}
});

return serializerManager;

};

/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\node_modules\\debug\\src\\browser.js":
/*!**************************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/node-rest-client/node_modules/debug/src/browser.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\node_modules\\debug\\src\\common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\node_modules\\debug\\src\\common.js":
/*!*************************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/node-rest-client/node_modules/debug/src/common.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\node_modules\\ms\\index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\node_modules\\ms\\index.js":
/*!*****************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/node-rest-client/node_modules/ms/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\sax\\lib\\sax.js":
/*!**************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/sax/lib/sax.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (sax) { // wrapper for non-node envs
  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
  sax.SAXParser = SAXParser
  sax.SAXStream = SAXStream
  sax.createStream = createStream

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024

  var buffers = [
    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
    'procInstName', 'procInstBody', 'entity', 'attribName',
    'attribValue', 'cdata', 'script'
  ]

  sax.EVENTS = [
    'text',
    'processinginstruction',
    'sgmldeclaration',
    'doctype',
    'comment',
    'opentagstart',
    'attribute',
    'opentag',
    'closetag',
    'opencdata',
    'cdata',
    'closecdata',
    'error',
    'end',
    'ready',
    'script',
    'opennamespace',
    'closenamespace'
  ]

  function SAXParser (strict, opt) {
    if (!(this instanceof SAXParser)) {
      return new SAXParser(strict, opt)
    }

    var parser = this
    clearBuffers(parser)
    parser.q = parser.c = ''
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
    parser.opt = opt || {}
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
    parser.tags = []
    parser.closed = parser.closedRoot = parser.sawRoot = false
    parser.tag = parser.error = null
    parser.strict = !!strict
    parser.noscript = !!(strict || parser.opt.noscript)
    parser.state = S.BEGIN
    parser.strictEntities = parser.opt.strictEntities
    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
    parser.attribList = []

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) {
      parser.ns = Object.create(rootNS)
    }

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0
    }
    emit(parser, 'onready')
  }

  if (!Object.create) {
    Object.create = function (o) {
      function F () {}
      F.prototype = o
      var newf = new F()
      return newf
    }
  }

  if (!Object.keys) {
    Object.keys = function (o) {
      var a = []
      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
      return a
    }
  }

  function checkBufferLength (parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    var maxActual = 0
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case 'textNode':
            closeText(parser)
            break

          case 'cdata':
            emitNode(parser, 'oncdata', parser.cdata)
            parser.cdata = ''
            break

          case 'script':
            emitNode(parser, 'onscript', parser.script)
            parser.script = ''
            break

          default:
            error(parser, 'Max buffer length exceeded: ' + buffers[i])
        }
      }
      maxActual = Math.max(maxActual, len)
    }
    // schedule the next check for the earliest possible buffer overrun.
    var m = sax.MAX_BUFFER_LENGTH - maxActual
    parser.bufferCheckPosition = m + parser.position
  }

  function clearBuffers (parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = ''
    }
  }

  function flushBuffers (parser) {
    closeText(parser)
    if (parser.cdata !== '') {
      emitNode(parser, 'oncdata', parser.cdata)
      parser.cdata = ''
    }
    if (parser.script !== '') {
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }
  }

  SAXParser.prototype = {
    end: function () { end(this) },
    write: write,
    resume: function () { this.error = null; return this },
    close: function () { return this.write(null) },
    flush: function () { flushBuffers(this) }
  }

  var Stream
  try {
    Stream = __webpack_require__(/*! stream */ "stream").Stream
  } catch (ex) {
    Stream = function () {}
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== 'error' && ev !== 'end'
  })

  function createStream (strict, opt) {
    return new SAXStream(strict, opt)
  }

  function SAXStream (strict, opt) {
    if (!(this instanceof SAXStream)) {
      return new SAXStream(strict, opt)
    }

    Stream.apply(this)

    this._parser = new SAXParser(strict, opt)
    this.writable = true
    this.readable = true

    var me = this

    this._parser.onend = function () {
      me.emit('end')
    }

    this._parser.onerror = function (er) {
      me.emit('error', er)

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null
    }

    this._decoder = null

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, 'on' + ev, {
        get: function () {
          return me._parser['on' + ev]
        },
        set: function (h) {
          if (!h) {
            me.removeAllListeners(ev)
            me._parser['on' + ev] = h
            return h
          }
          me.on(ev, h)
        },
        enumerable: true,
        configurable: false
      })
    })
  }

  SAXStream.prototype = Object.create(Stream.prototype, {
    constructor: {
      value: SAXStream
    }
  })

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = __webpack_require__(/*! string_decoder */ "string_decoder").StringDecoder
        this._decoder = new SD('utf8')
      }
      data = this._decoder.write(data)
    }

    this._parser.write(data.toString())
    this.emit('data', data)
    return true
  }

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) {
      this.write(chunk)
    }
    this._parser.end()
    return true
  }

  SAXStream.prototype.on = function (ev, handler) {
    var me = this
    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser['on' + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
        args.splice(0, 0, ev)
        me.emit.apply(me, args)
      }
    }

    return Stream.prototype.on.call(me, ev, handler)
  }

  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  var CDATA = '[CDATA['
  var DOCTYPE = 'DOCTYPE'
  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  function isWhitespace (c) {
    return c === ' ' || c === '\n' || c === '\r' || c === '\t'
  }

  function isQuote (c) {
    return c === '"' || c === '\''
  }

  function isAttribEnd (c) {
    return c === '>' || isWhitespace(c)
  }

  function isMatch (regex, c) {
    return regex.test(c)
  }

  function notMatch (regex, c) {
    return !isMatch(regex, c)
  }

  var S = 0
  sax.STATE = {
    BEGIN: S++, // leading byte order mark or whitespace
    BEGIN_WHITESPACE: S++, // leading whitespace
    TEXT: S++, // general stuff
    TEXT_ENTITY: S++, // &amp and such.
    OPEN_WAKA: S++, // <
    SGML_DECL: S++, // <!BLARG
    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
    DOCTYPE: S++, // <!DOCTYPE
    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
    COMMENT_STARTING: S++, // <!-
    COMMENT: S++, // <!--
    COMMENT_ENDING: S++, // <!-- blah -
    COMMENT_ENDED: S++, // <!-- blah --
    CDATA: S++, // <![CDATA[ something
    CDATA_ENDING: S++, // ]
    CDATA_ENDING_2: S++, // ]]
    PROC_INST: S++, // <?hi
    PROC_INST_BODY: S++, // <?hi there
    PROC_INST_ENDING: S++, // <?hi "there" ?
    OPEN_TAG: S++, // <strong
    OPEN_TAG_SLASH: S++, // <strong /
    ATTRIB: S++, // <a
    ATTRIB_NAME: S++, // <a foo
    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
    ATTRIB_VALUE: S++, // <a foo=
    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
    CLOSE_TAG: S++, // </a
    CLOSE_TAG_SAW_WHITE: S++, // </a   >
    SCRIPT: S++, // <script> ...
    SCRIPT_ENDING: S++ // <script> ... <
  }

  sax.XML_ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'"
  }

  sax.ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'",
    'AElig': 198,
    'Aacute': 193,
    'Acirc': 194,
    'Agrave': 192,
    'Aring': 197,
    'Atilde': 195,
    'Auml': 196,
    'Ccedil': 199,
    'ETH': 208,
    'Eacute': 201,
    'Ecirc': 202,
    'Egrave': 200,
    'Euml': 203,
    'Iacute': 205,
    'Icirc': 206,
    'Igrave': 204,
    'Iuml': 207,
    'Ntilde': 209,
    'Oacute': 211,
    'Ocirc': 212,
    'Ograve': 210,
    'Oslash': 216,
    'Otilde': 213,
    'Ouml': 214,
    'THORN': 222,
    'Uacute': 218,
    'Ucirc': 219,
    'Ugrave': 217,
    'Uuml': 220,
    'Yacute': 221,
    'aacute': 225,
    'acirc': 226,
    'aelig': 230,
    'agrave': 224,
    'aring': 229,
    'atilde': 227,
    'auml': 228,
    'ccedil': 231,
    'eacute': 233,
    'ecirc': 234,
    'egrave': 232,
    'eth': 240,
    'euml': 235,
    'iacute': 237,
    'icirc': 238,
    'igrave': 236,
    'iuml': 239,
    'ntilde': 241,
    'oacute': 243,
    'ocirc': 244,
    'ograve': 242,
    'oslash': 248,
    'otilde': 245,
    'ouml': 246,
    'szlig': 223,
    'thorn': 254,
    'uacute': 250,
    'ucirc': 251,
    'ugrave': 249,
    'uuml': 252,
    'yacute': 253,
    'yuml': 255,
    'copy': 169,
    'reg': 174,
    'nbsp': 160,
    'iexcl': 161,
    'cent': 162,
    'pound': 163,
    'curren': 164,
    'yen': 165,
    'brvbar': 166,
    'sect': 167,
    'uml': 168,
    'ordf': 170,
    'laquo': 171,
    'not': 172,
    'shy': 173,
    'macr': 175,
    'deg': 176,
    'plusmn': 177,
    'sup1': 185,
    'sup2': 178,
    'sup3': 179,
    'acute': 180,
    'micro': 181,
    'para': 182,
    'middot': 183,
    'cedil': 184,
    'ordm': 186,
    'raquo': 187,
    'frac14': 188,
    'frac12': 189,
    'frac34': 190,
    'iquest': 191,
    'times': 215,
    'divide': 247,
    'OElig': 338,
    'oelig': 339,
    'Scaron': 352,
    'scaron': 353,
    'Yuml': 376,
    'fnof': 402,
    'circ': 710,
    'tilde': 732,
    'Alpha': 913,
    'Beta': 914,
    'Gamma': 915,
    'Delta': 916,
    'Epsilon': 917,
    'Zeta': 918,
    'Eta': 919,
    'Theta': 920,
    'Iota': 921,
    'Kappa': 922,
    'Lambda': 923,
    'Mu': 924,
    'Nu': 925,
    'Xi': 926,
    'Omicron': 927,
    'Pi': 928,
    'Rho': 929,
    'Sigma': 931,
    'Tau': 932,
    'Upsilon': 933,
    'Phi': 934,
    'Chi': 935,
    'Psi': 936,
    'Omega': 937,
    'alpha': 945,
    'beta': 946,
    'gamma': 947,
    'delta': 948,
    'epsilon': 949,
    'zeta': 950,
    'eta': 951,
    'theta': 952,
    'iota': 953,
    'kappa': 954,
    'lambda': 955,
    'mu': 956,
    'nu': 957,
    'xi': 958,
    'omicron': 959,
    'pi': 960,
    'rho': 961,
    'sigmaf': 962,
    'sigma': 963,
    'tau': 964,
    'upsilon': 965,
    'phi': 966,
    'chi': 967,
    'psi': 968,
    'omega': 969,
    'thetasym': 977,
    'upsih': 978,
    'piv': 982,
    'ensp': 8194,
    'emsp': 8195,
    'thinsp': 8201,
    'zwnj': 8204,
    'zwj': 8205,
    'lrm': 8206,
    'rlm': 8207,
    'ndash': 8211,
    'mdash': 8212,
    'lsquo': 8216,
    'rsquo': 8217,
    'sbquo': 8218,
    'ldquo': 8220,
    'rdquo': 8221,
    'bdquo': 8222,
    'dagger': 8224,
    'Dagger': 8225,
    'bull': 8226,
    'hellip': 8230,
    'permil': 8240,
    'prime': 8242,
    'Prime': 8243,
    'lsaquo': 8249,
    'rsaquo': 8250,
    'oline': 8254,
    'frasl': 8260,
    'euro': 8364,
    'image': 8465,
    'weierp': 8472,
    'real': 8476,
    'trade': 8482,
    'alefsym': 8501,
    'larr': 8592,
    'uarr': 8593,
    'rarr': 8594,
    'darr': 8595,
    'harr': 8596,
    'crarr': 8629,
    'lArr': 8656,
    'uArr': 8657,
    'rArr': 8658,
    'dArr': 8659,
    'hArr': 8660,
    'forall': 8704,
    'part': 8706,
    'exist': 8707,
    'empty': 8709,
    'nabla': 8711,
    'isin': 8712,
    'notin': 8713,
    'ni': 8715,
    'prod': 8719,
    'sum': 8721,
    'minus': 8722,
    'lowast': 8727,
    'radic': 8730,
    'prop': 8733,
    'infin': 8734,
    'ang': 8736,
    'and': 8743,
    'or': 8744,
    'cap': 8745,
    'cup': 8746,
    'int': 8747,
    'there4': 8756,
    'sim': 8764,
    'cong': 8773,
    'asymp': 8776,
    'ne': 8800,
    'equiv': 8801,
    'le': 8804,
    'ge': 8805,
    'sub': 8834,
    'sup': 8835,
    'nsub': 8836,
    'sube': 8838,
    'supe': 8839,
    'oplus': 8853,
    'otimes': 8855,
    'perp': 8869,
    'sdot': 8901,
    'lceil': 8968,
    'rceil': 8969,
    'lfloor': 8970,
    'rfloor': 8971,
    'lang': 9001,
    'rang': 9002,
    'loz': 9674,
    'spades': 9824,
    'clubs': 9827,
    'hearts': 9829,
    'diams': 9830
  }

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
  })

  for (var s in sax.STATE) {
    sax.STATE[sax.STATE[s]] = s
  }

  // shorthand
  S = sax.STATE

  function emit (parser, event, data) {
    parser[event] && parser[event](data)
  }

  function emitNode (parser, nodeType, data) {
    if (parser.textNode) closeText(parser)
    emit(parser, nodeType, data)
  }

  function closeText (parser) {
    parser.textNode = textopts(parser.opt, parser.textNode)
    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
    parser.textNode = ''
  }

  function textopts (opt, text) {
    if (opt.trim) text = text.trim()
    if (opt.normalize) text = text.replace(/\s+/g, ' ')
    return text
  }

  function error (parser, er) {
    closeText(parser)
    if (parser.trackPosition) {
      er += '\nLine: ' + parser.line +
        '\nColumn: ' + parser.column +
        '\nChar: ' + parser.c
    }
    er = new Error(er)
    parser.error = er
    emit(parser, 'onerror', er)
    return parser
  }

  function end (parser) {
    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
    if ((parser.state !== S.BEGIN) &&
      (parser.state !== S.BEGIN_WHITESPACE) &&
      (parser.state !== S.TEXT)) {
      error(parser, 'Unexpected end')
    }
    closeText(parser)
    parser.c = ''
    parser.closed = true
    emit(parser, 'onend')
    SAXParser.call(parser, parser.strict, parser.opt)
    return parser
  }

  function strictFail (parser, message) {
    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
      throw new Error('bad call to strictFail')
    }
    if (parser.strict) {
      error(parser, message)
    }
  }

  function newTag (parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
    var parent = parser.tags[parser.tags.length - 1] || parser
    var tag = parser.tag = { name: parser.tagName, attributes: {} }

    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    if (parser.opt.xmlns) {
      tag.ns = parent.ns
    }
    parser.attribList.length = 0
    emitNode(parser, 'onopentagstart', tag)
  }

  function qname (name, attribute) {
    var i = name.indexOf(':')
    var qualName = i < 0 ? [ '', name ] : name.split(':')
    var prefix = qualName[0]
    var local = qualName[1]

    // <x "xmlns"="http://foo">
    if (attribute && name === 'xmlns') {
      prefix = 'xmlns'
      local = ''
    }

    return { prefix: prefix, local: local }
  }

  function attrib (parser) {
    if (!parser.strict) {
      parser.attribName = parser.attribName[parser.looseCase]()
    }

    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      parser.attribName = parser.attribValue = ''
      return
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true)
      var prefix = qn.prefix
      var local = qn.local

      if (prefix === 'xmlns') {
        // namespace binding attribute. push the binding into scope
        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser,
            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser,
            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else {
          var tag = parser.tag
          var parent = parser.tags[parser.tags.length - 1] || parser
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns)
          }
          tag.ns[local] = parser.attribValue
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect. preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue])
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue
      emitNode(parser, 'onattribute', {
        name: parser.attribName,
        value: parser.attribValue
      })
    }

    parser.attribName = parser.attribValue = ''
  }

  function openTag (parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag

      // add namespace info to tag
      var qn = qname(parser.tagName)
      tag.prefix = qn.prefix
      tag.local = qn.local
      tag.uri = tag.ns[qn.prefix] || ''

      if (tag.prefix && !tag.uri) {
        strictFail(parser, 'Unbound namespace prefix: ' +
          JSON.stringify(parser.tagName))
        tag.uri = qn.prefix
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, 'onopennamespace', {
            prefix: p,
            uri: tag.ns[p]
          })
        })
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i]
        var name = nv[0]
        var value = nv[1]
        var qualName = qname(name, true)
        var prefix = qualName.prefix
        var local = qualName.local
        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
        var a = {
          name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri
        }

        // if there's any attributes with an undefined namespace,
        // then fail on them now.
        if (prefix && prefix !== 'xmlns' && !uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(prefix))
          a.uri = prefix
        }
        parser.tag.attributes[name] = a
        emitNode(parser, 'onattribute', a)
      }
      parser.attribList.length = 0
    }

    parser.tag.isSelfClosing = !!selfClosing

    // process the tag
    parser.sawRoot = true
    parser.tags.push(parser.tag)
    emitNode(parser, 'onopentag', parser.tag)
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
        parser.state = S.SCRIPT
      } else {
        parser.state = S.TEXT
      }
      parser.tag = null
      parser.tagName = ''
    }
    parser.attribName = parser.attribValue = ''
    parser.attribList.length = 0
  }

  function closeTag (parser) {
    if (!parser.tagName) {
      strictFail(parser, 'Weird empty close tag.')
      parser.textNode += '</>'
      parser.state = S.TEXT
      return
    }

    if (parser.script) {
      if (parser.tagName !== 'script') {
        parser.script += '</' + parser.tagName + '>'
        parser.tagName = ''
        parser.state = S.SCRIPT
        return
      }
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length
    var tagName = parser.tagName
    if (!parser.strict) {
      tagName = tagName[parser.looseCase]()
    }
    var closeTo = tagName
    while (t--) {
      var close = parser.tags[t]
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, 'Unexpected close tag')
      } else {
        break
      }
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
      parser.textNode += '</' + parser.tagName + '>'
      parser.state = S.TEXT
      return
    }
    parser.tagName = tagName
    var s = parser.tags.length
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop()
      parser.tagName = parser.tag.name
      emitNode(parser, 'onclosetag', parser.tagName)

      var x = {}
      for (var i in tag.ns) {
        x[i] = tag.ns[i]
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p]
          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
        })
      }
    }
    if (t === 0) parser.closedRoot = true
    parser.tagName = parser.attribValue = parser.attribName = ''
    parser.attribList.length = 0
    parser.state = S.TEXT
  }

  function parseEntity (parser) {
    var entity = parser.entity
    var entityLC = entity.toLowerCase()
    var num
    var numStr = ''

    if (parser.ENTITIES[entity]) {
      return parser.ENTITIES[entity]
    }
    if (parser.ENTITIES[entityLC]) {
      return parser.ENTITIES[entityLC]
    }
    entity = entityLC
    if (entity.charAt(0) === '#') {
      if (entity.charAt(1) === 'x') {
        entity = entity.slice(2)
        num = parseInt(entity, 16)
        numStr = num.toString(16)
      } else {
        entity = entity.slice(1)
        num = parseInt(entity, 10)
        numStr = num.toString(10)
      }
    }
    entity = entity.replace(/^0+/, '')
    if (isNaN(num) || numStr.toLowerCase() !== entity) {
      strictFail(parser, 'Invalid character entity')
      return '&' + parser.entity + ';'
    }

    return String.fromCodePoint(num)
  }

  function beginWhiteSpace (parser, c) {
    if (c === '<') {
      parser.state = S.OPEN_WAKA
      parser.startTagPosition = parser.position
    } else if (!isWhitespace(c)) {
      // have to process this as a text node.
      // weird, but happens.
      strictFail(parser, 'Non-whitespace before first tag.')
      parser.textNode = c
      parser.state = S.TEXT
    }
  }

  function charAt (chunk, i) {
    var result = ''
    if (i < chunk.length) {
      result = chunk.charAt(i)
    }
    return result
  }

  function write (chunk) {
    var parser = this
    if (this.error) {
      throw this.error
    }
    if (parser.closed) {
      return error(parser,
        'Cannot write after close. Assign an onready handler.')
    }
    if (chunk === null) {
      return end(parser)
    }
    if (typeof chunk === 'object') {
      chunk = chunk.toString()
    }
    var i = 0
    var c = ''
    while (true) {
      c = charAt(chunk, i++)
      parser.c = c

      if (!c) {
        break
      }

      if (parser.trackPosition) {
        parser.position++
        if (c === '\n') {
          parser.line++
          parser.column = 0
        } else {
          parser.column++
        }
      }

      switch (parser.state) {
        case S.BEGIN:
          parser.state = S.BEGIN_WHITESPACE
          if (c === '\uFEFF') {
            continue
          }
          beginWhiteSpace(parser, c)
          continue

        case S.BEGIN_WHITESPACE:
          beginWhiteSpace(parser, c)
          continue

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1
            while (c && c !== '<' && c !== '&') {
              c = charAt(chunk, i++)
              if (c && parser.trackPosition) {
                parser.position++
                if (c === '\n') {
                  parser.line++
                  parser.column = 0
                } else {
                  parser.column++
                }
              }
            }
            parser.textNode += chunk.substring(starti, i - 1)
          }
          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
            parser.state = S.OPEN_WAKA
            parser.startTagPosition = parser.position
          } else {
            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
              strictFail(parser, 'Text data outside of root node.')
            }
            if (c === '&') {
              parser.state = S.TEXT_ENTITY
            } else {
              parser.textNode += c
            }
          }
          continue

        case S.SCRIPT:
          // only non-strict
          if (c === '<') {
            parser.state = S.SCRIPT_ENDING
          } else {
            parser.script += c
          }
          continue

        case S.SCRIPT_ENDING:
          if (c === '/') {
            parser.state = S.CLOSE_TAG
          } else {
            parser.script += '<' + c
            parser.state = S.SCRIPT
          }
          continue

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === '!') {
            parser.state = S.SGML_DECL
            parser.sgmlDecl = ''
          } else if (isWhitespace(c)) {
            // wait for it...
          } else if (isMatch(nameStart, c)) {
            parser.state = S.OPEN_TAG
            parser.tagName = c
          } else if (c === '/') {
            parser.state = S.CLOSE_TAG
            parser.tagName = ''
          } else if (c === '?') {
            parser.state = S.PROC_INST
            parser.procInstName = parser.procInstBody = ''
          } else {
            strictFail(parser, 'Unencoded <')
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition
              c = new Array(pad).join(' ') + c
            }
            parser.textNode += '<' + c
            parser.state = S.TEXT
          }
          continue

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, 'onopencdata')
            parser.state = S.CDATA
            parser.sgmlDecl = ''
            parser.cdata = ''
          } else if (parser.sgmlDecl + c === '--') {
            parser.state = S.COMMENT
            parser.comment = ''
            parser.sgmlDecl = ''
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE
            if (parser.doctype || parser.sawRoot) {
              strictFail(parser,
                'Inappropriately located doctype declaration')
            }
            parser.doctype = ''
            parser.sgmlDecl = ''
          } else if (c === '>') {
            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
            parser.sgmlDecl = ''
            parser.state = S.TEXT
          } else if (isQuote(c)) {
            parser.state = S.SGML_DECL_QUOTED
            parser.sgmlDecl += c
          } else {
            parser.sgmlDecl += c
          }
          continue

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL
            parser.q = ''
          }
          parser.sgmlDecl += c
          continue

        case S.DOCTYPE:
          if (c === '>') {
            parser.state = S.TEXT
            emitNode(parser, 'ondoctype', parser.doctype)
            parser.doctype = true // just remember that we saw it.
          } else {
            parser.doctype += c
            if (c === '[') {
              parser.state = S.DOCTYPE_DTD
            } else if (isQuote(c)) {
              parser.state = S.DOCTYPE_QUOTED
              parser.q = c
            }
          }
          continue

        case S.DOCTYPE_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.q = ''
            parser.state = S.DOCTYPE
          }
          continue

        case S.DOCTYPE_DTD:
          parser.doctype += c
          if (c === ']') {
            parser.state = S.DOCTYPE
          } else if (isQuote(c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED
            parser.q = c
          }
          continue

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD
            parser.q = ''
          }
          continue

        case S.COMMENT:
          if (c === '-') {
            parser.state = S.COMMENT_ENDING
          } else {
            parser.comment += c
          }
          continue

        case S.COMMENT_ENDING:
          if (c === '-') {
            parser.state = S.COMMENT_ENDED
            parser.comment = textopts(parser.opt, parser.comment)
            if (parser.comment) {
              emitNode(parser, 'oncomment', parser.comment)
            }
            parser.comment = ''
          } else {
            parser.comment += '-' + c
            parser.state = S.COMMENT
          }
          continue

        case S.COMMENT_ENDED:
          if (c !== '>') {
            strictFail(parser, 'Malformed comment')
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += '--' + c
            parser.state = S.COMMENT
          } else {
            parser.state = S.TEXT
          }
          continue

        case S.CDATA:
          if (c === ']') {
            parser.state = S.CDATA_ENDING
          } else {
            parser.cdata += c
          }
          continue

        case S.CDATA_ENDING:
          if (c === ']') {
            parser.state = S.CDATA_ENDING_2
          } else {
            parser.cdata += ']' + c
            parser.state = S.CDATA
          }
          continue

        case S.CDATA_ENDING_2:
          if (c === '>') {
            if (parser.cdata) {
              emitNode(parser, 'oncdata', parser.cdata)
            }
            emitNode(parser, 'onclosecdata')
            parser.cdata = ''
            parser.state = S.TEXT
          } else if (c === ']') {
            parser.cdata += ']'
          } else {
            parser.cdata += ']]' + c
            parser.state = S.CDATA
          }
          continue

        case S.PROC_INST:
          if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else if (isWhitespace(c)) {
            parser.state = S.PROC_INST_BODY
          } else {
            parser.procInstName += c
          }
          continue

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && isWhitespace(c)) {
            continue
          } else if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else {
            parser.procInstBody += c
          }
          continue

        case S.PROC_INST_ENDING:
          if (c === '>') {
            emitNode(parser, 'onprocessinginstruction', {
              name: parser.procInstName,
              body: parser.procInstBody
            })
            parser.procInstName = parser.procInstBody = ''
            parser.state = S.TEXT
          } else {
            parser.procInstBody += '?' + c
            parser.state = S.PROC_INST_BODY
          }
          continue

        case S.OPEN_TAG:
          if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else {
            newTag(parser)
            if (c === '>') {
              openTag(parser)
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, 'Invalid character in tag name')
              }
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.OPEN_TAG_SLASH:
          if (c === '>') {
            openTag(parser, true)
            closeTag(parser)
          } else {
            strictFail(parser, 'Forward-slash in opening tag not followed by >')
            parser.state = S.ATTRIB
          }
          continue

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (isWhitespace(c)) {
            continue
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (c === '>') {
            strictFail(parser, 'Attribute without value')
            parser.attribValue = parser.attribName
            attrib(parser)
            openTag(parser)
          } else if (isWhitespace(c)) {
            parser.state = S.ATTRIB_NAME_SAW_WHITE
          } else if (isMatch(nameBody, c)) {
            parser.attribName += c
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (isWhitespace(c)) {
            continue
          } else {
            strictFail(parser, 'Attribute without value')
            parser.tag.attributes[parser.attribName] = ''
            parser.attribValue = ''
            emitNode(parser, 'onattribute', {
              name: parser.attribName,
              value: ''
            })
            parser.attribName = ''
            if (c === '>') {
              openTag(parser)
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c
              parser.state = S.ATTRIB_NAME
            } else {
              strictFail(parser, 'Invalid attribute name')
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.ATTRIB_VALUE:
          if (isWhitespace(c)) {
            continue
          } else if (isQuote(c)) {
            parser.q = c
            parser.state = S.ATTRIB_VALUE_QUOTED
          } else {
            strictFail(parser, 'Unquoted attribute value')
            parser.state = S.ATTRIB_VALUE_UNQUOTED
            parser.attribValue = c
          }
          continue

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_Q
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          parser.q = ''
          parser.state = S.ATTRIB_VALUE_CLOSED
          continue

        case S.ATTRIB_VALUE_CLOSED:
          if (isWhitespace(c)) {
            parser.state = S.ATTRIB
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            strictFail(parser, 'No whitespace between attributes')
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_VALUE_UNQUOTED:
          if (!isAttribEnd(c)) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_U
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          if (c === '>') {
            openTag(parser)
          } else {
            parser.state = S.ATTRIB
          }
          continue

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (isWhitespace(c)) {
              continue
            } else if (notMatch(nameStart, c)) {
              if (parser.script) {
                parser.script += '</' + c
                parser.state = S.SCRIPT
              } else {
                strictFail(parser, 'Invalid tagname in closing tag.')
              }
            } else {
              parser.tagName = c
            }
          } else if (c === '>') {
            closeTag(parser)
          } else if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else if (parser.script) {
            parser.script += '</' + parser.tagName
            parser.tagName = ''
            parser.state = S.SCRIPT
          } else {
            if (!isWhitespace(c)) {
              strictFail(parser, 'Invalid tagname in closing tag')
            }
            parser.state = S.CLOSE_TAG_SAW_WHITE
          }
          continue

        case S.CLOSE_TAG_SAW_WHITE:
          if (isWhitespace(c)) {
            continue
          }
          if (c === '>') {
            closeTag(parser)
          } else {
            strictFail(parser, 'Invalid characters in closing tag')
          }
          continue

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          var returnState
          var buffer
          switch (parser.state) {
            case S.TEXT_ENTITY:
              returnState = S.TEXT
              buffer = 'textNode'
              break

            case S.ATTRIB_VALUE_ENTITY_Q:
              returnState = S.ATTRIB_VALUE_QUOTED
              buffer = 'attribValue'
              break

            case S.ATTRIB_VALUE_ENTITY_U:
              returnState = S.ATTRIB_VALUE_UNQUOTED
              buffer = 'attribValue'
              break
          }

          if (c === ';') {
            parser[buffer] += parseEntity(parser)
            parser.entity = ''
            parser.state = returnState
          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
            parser.entity += c
          } else {
            strictFail(parser, 'Invalid character in entity name')
            parser[buffer] += '&' + parser.entity + c
            parser.entity = ''
            parser.state = returnState
          }

          continue

        default:
          throw new Error(parser, 'Unknown state: ' + parser.state)
      }
    } // while

    if (parser.position >= parser.bufferCheckPosition) {
      checkBufferLength(parser)
    }
    return parser
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  /* istanbul ignore next */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode
      var floor = Math.floor
      var fromCodePoint = function () {
        var MAX_SIZE = 0x4000
        var codeUnits = []
        var highSurrogate
        var lowSurrogate
        var index = -1
        var length = arguments.length
        if (!length) {
          return ''
        }
        var result = ''
        while (++index < length) {
          var codePoint = Number(arguments[index])
          if (
            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
            codePoint < 0 || // not a valid Unicode code point
            codePoint > 0x10FFFF || // not a valid Unicode code point
            floor(codePoint) !== codePoint // not an integer
          ) {
            throw RangeError('Invalid code point: ' + codePoint)
          }
          if (codePoint <= 0xFFFF) { // BMP code point
            codeUnits.push(codePoint)
          } else { // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000
            highSurrogate = (codePoint >> 10) + 0xD800
            lowSurrogate = (codePoint % 0x400) + 0xDC00
            codeUnits.push(highSurrogate, lowSurrogate)
          }
          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits)
            codeUnits.length = 0
          }
        }
        return result
      }
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          value: fromCodePoint,
          configurable: true,
          writable: true
        })
      } else {
        String.fromCodePoint = fromCodePoint
      }
    }())
  }
})( false ? undefined : exports)


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\index.js":
/*!****************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\index.js");


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\alphabet.js":
/*!***********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/alphabet.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\random\\random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\build.js":
/*!********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/build.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(/*! ./encode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\encode.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\decode.js":
/*!*********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/decode.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\alphabet.js");

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\encode.js":
/*!*********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/encode.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(/*! ./random/random-byte */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\random\\random-byte-browser.js");

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\index.js":
/*!********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\alphabet.js");
var encode = __webpack_require__(/*! ./encode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\encode.js");
var decode = __webpack_require__(/*! ./decode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\decode.js");
var build = __webpack_require__(/*! ./build */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\util\\cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\is-valid.js":
/*!***********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/is-valid.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\random\\random-byte-browser.js":
/*!*****************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/random/random-byte-browser.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\random\\random-from-seed.js":
/*!**************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/random/random-from-seed.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\lib\\util\\cluster-worker-id-browser.js":
/*!*********************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\bom.js":
/*!*****************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xml2js/lib/bom.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  exports.stripBOM = function(str) {
    if (str[0] === '\uFEFF') {
      return str.substring(1);
    } else {
      return str;
    }
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\builder.js":
/*!*********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xml2js/lib/builder.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA,
    hasProp = {}.hasOwnProperty;

  builder = __webpack_require__(/*! xmlbuilder */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\index.js");

  defaults = __webpack_require__(/*! ./defaults */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\defaults.js").defaults;

  requiresCDATA = function(entry) {
    return typeof entry === "string" && (entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0);
  };

  wrapCDATA = function(entry) {
    return "<![CDATA[" + (escapeCDATA(entry)) + "]]>";
  };

  escapeCDATA = function(entry) {
    return entry.replace(']]>', ']]]]><![CDATA[>');
  };

  exports.Builder = (function() {
    function Builder(opts) {
      var key, ref, value;
      this.options = {};
      ref = defaults["0.2"];
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
    }

    Builder.prototype.buildObject = function(rootObj) {
      var attrkey, charkey, render, rootElement, rootName;
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      if ((Object.keys(rootObj).length === 1) && (this.options.rootName === defaults['0.2'].rootName)) {
        rootName = Object.keys(rootObj)[0];
        rootObj = rootObj[rootName];
      } else {
        rootName = this.options.rootName;
      }
      render = (function(_this) {
        return function(element, obj) {
          var attr, child, entry, index, key, value;
          if (typeof obj !== 'object') {
            if (_this.options.cdata && requiresCDATA(obj)) {
              element.raw(wrapCDATA(obj));
            } else {
              element.txt(obj);
            }
          } else if (Array.isArray(obj)) {
            for (index in obj) {
              if (!hasProp.call(obj, index)) continue;
              child = obj[index];
              for (key in child) {
                entry = child[key];
                element = render(element.ele(key), entry).up();
              }
            }
          } else {
            for (key in obj) {
              if (!hasProp.call(obj, key)) continue;
              child = obj[key];
              if (key === attrkey) {
                if (typeof child === "object") {
                  for (attr in child) {
                    value = child[attr];
                    element = element.att(attr, value);
                  }
                }
              } else if (key === charkey) {
                if (_this.options.cdata && requiresCDATA(child)) {
                  element = element.raw(wrapCDATA(child));
                } else {
                  element = element.txt(child);
                }
              } else if (Array.isArray(child)) {
                for (index in child) {
                  if (!hasProp.call(child, index)) continue;
                  entry = child[index];
                  if (typeof entry === 'string') {
                    if (_this.options.cdata && requiresCDATA(entry)) {
                      element = element.ele(key).raw(wrapCDATA(entry)).up();
                    } else {
                      element = element.ele(key, entry).up();
                    }
                  } else {
                    element = render(element.ele(key), entry).up();
                  }
                }
              } else if (typeof child === "object") {
                element = render(element.ele(key), child).up();
              } else {
                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
                  element = element.ele(key).raw(wrapCDATA(child)).up();
                } else {
                  if (child == null) {
                    child = '';
                  }
                  element = element.ele(key, child.toString()).up();
                }
              }
            }
          }
          return element;
        };
      })(this);
      rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
        headless: this.options.headless,
        allowSurrogateChars: this.options.allowSurrogateChars
      });
      return render(rootElement, rootObj).end(this.options.renderOpts);
    };

    return Builder;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\defaults.js":
/*!**********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xml2js/lib/defaults.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  exports.defaults = {
    "0.1": {
      explicitCharkey: false,
      trim: true,
      normalize: true,
      normalizeTags: false,
      attrkey: "@",
      charkey: "#",
      explicitArray: false,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: false,
      validator: null,
      xmlns: false,
      explicitChildren: false,
      childkey: '@@',
      charsAsChildren: false,
      includeWhiteChars: false,
      async: false,
      strict: true,
      attrNameProcessors: null,
      attrValueProcessors: null,
      tagNameProcessors: null,
      valueProcessors: null,
      emptyTag: ''
    },
    "0.2": {
      explicitCharkey: false,
      trim: false,
      normalize: false,
      normalizeTags: false,
      attrkey: "$",
      charkey: "_",
      explicitArray: true,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: true,
      validator: null,
      xmlns: false,
      explicitChildren: false,
      preserveChildrenOrder: false,
      childkey: '$$',
      charsAsChildren: false,
      includeWhiteChars: false,
      async: false,
      strict: true,
      attrNameProcessors: null,
      attrValueProcessors: null,
      tagNameProcessors: null,
      valueProcessors: null,
      rootName: 'root',
      xmldec: {
        'version': '1.0',
        'encoding': 'UTF-8',
        'standalone': true
      },
      doctype: null,
      renderOpts: {
        'pretty': true,
        'indent': '  ',
        'newline': '\n'
      },
      headless: false,
      chunkSize: 10000,
      emptyTag: '',
      cdata: false
    }
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\parser.js":
/*!********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xml2js/lib/parser.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  sax = __webpack_require__(/*! sax */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\sax\\lib\\sax.js");

  events = __webpack_require__(/*! events */ "events");

  bom = __webpack_require__(/*! ./bom */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\bom.js");

  processors = __webpack_require__(/*! ./processors */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\processors.js");

  setImmediate = __webpack_require__(/*! timers */ "timers").setImmediate;

  defaults = __webpack_require__(/*! ./defaults */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\defaults.js").defaults;

  isEmpty = function(thing) {
    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
  };

  processItem = function(processors, item, key) {
    var i, len, process;
    for (i = 0, len = processors.length; i < len; i++) {
      process = processors[i];
      item = process(item, key);
    }
    return item;
  };

  exports.Parser = (function(superClass) {
    extend(Parser, superClass);

    function Parser(opts) {
      this.parseStringPromise = bind(this.parseStringPromise, this);
      this.parseString = bind(this.parseString, this);
      this.reset = bind(this.reset, this);
      this.assignOrPush = bind(this.assignOrPush, this);
      this.processAsync = bind(this.processAsync, this);
      var key, ref, value;
      if (!(this instanceof exports.Parser)) {
        return new exports.Parser(opts);
      }
      this.options = {};
      ref = defaults["0.2"];
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
      if (this.options.xmlns) {
        this.options.xmlnskey = this.options.attrkey + "ns";
      }
      if (this.options.normalizeTags) {
        if (!this.options.tagNameProcessors) {
          this.options.tagNameProcessors = [];
        }
        this.options.tagNameProcessors.unshift(processors.normalize);
      }
      this.reset();
    }

    Parser.prototype.processAsync = function() {
      var chunk, err;
      try {
        if (this.remaining.length <= this.options.chunkSize) {
          chunk = this.remaining;
          this.remaining = '';
          this.saxParser = this.saxParser.write(chunk);
          return this.saxParser.close();
        } else {
          chunk = this.remaining.substr(0, this.options.chunkSize);
          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
          this.saxParser = this.saxParser.write(chunk);
          return setImmediate(this.processAsync);
        }
      } catch (error1) {
        err = error1;
        if (!this.saxParser.errThrown) {
          this.saxParser.errThrown = true;
          return this.emit(err);
        }
      }
    };

    Parser.prototype.assignOrPush = function(obj, key, newValue) {
      if (!(key in obj)) {
        if (!this.options.explicitArray) {
          return obj[key] = newValue;
        } else {
          return obj[key] = [newValue];
        }
      } else {
        if (!(obj[key] instanceof Array)) {
          obj[key] = [obj[key]];
        }
        return obj[key].push(newValue);
      }
    };

    Parser.prototype.reset = function() {
      var attrkey, charkey, ontext, stack;
      this.removeAllListeners();
      this.saxParser = sax.parser(this.options.strict, {
        trim: false,
        normalize: false,
        xmlns: this.options.xmlns
      });
      this.saxParser.errThrown = false;
      this.saxParser.onerror = (function(_this) {
        return function(error) {
          _this.saxParser.resume();
          if (!_this.saxParser.errThrown) {
            _this.saxParser.errThrown = true;
            return _this.emit("error", error);
          }
        };
      })(this);
      this.saxParser.onend = (function(_this) {
        return function() {
          if (!_this.saxParser.ended) {
            _this.saxParser.ended = true;
            return _this.emit("end", _this.resultObject);
          }
        };
      })(this);
      this.saxParser.ended = false;
      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
      this.resultObject = null;
      stack = [];
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      this.saxParser.onopentag = (function(_this) {
        return function(node) {
          var key, newValue, obj, processedKey, ref;
          obj = {};
          obj[charkey] = "";
          if (!_this.options.ignoreAttrs) {
            ref = node.attributes;
            for (key in ref) {
              if (!hasProp.call(ref, key)) continue;
              if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                obj[attrkey] = {};
              }
              newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
              processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
              if (_this.options.mergeAttrs) {
                _this.assignOrPush(obj, processedKey, newValue);
              } else {
                obj[attrkey][processedKey] = newValue;
              }
            }
          }
          obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
          if (_this.options.xmlns) {
            obj[_this.options.xmlnskey] = {
              uri: node.uri,
              local: node.local
            };
          }
          return stack.push(obj);
        };
      })(this);
      this.saxParser.onclosetag = (function(_this) {
        return function() {
          var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
          obj = stack.pop();
          nodeName = obj["#name"];
          if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
            delete obj["#name"];
          }
          if (obj.cdata === true) {
            cdata = obj.cdata;
            delete obj.cdata;
          }
          s = stack[stack.length - 1];
          if (obj[charkey].match(/^\s*$/) && !cdata) {
            emptyStr = obj[charkey];
            delete obj[charkey];
          } else {
            if (_this.options.trim) {
              obj[charkey] = obj[charkey].trim();
            }
            if (_this.options.normalize) {
              obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
            }
            obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
              obj = obj[charkey];
            }
          }
          if (isEmpty(obj)) {
            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
          }
          if (_this.options.validator != null) {
            xpath = "/" + ((function() {
              var i, len, results;
              results = [];
              for (i = 0, len = stack.length; i < len; i++) {
                node = stack[i];
                results.push(node["#name"]);
              }
              return results;
            })()).concat(nodeName).join("/");
            (function() {
              var err;
              try {
                return obj = _this.options.validator(xpath, s && s[nodeName], obj);
              } catch (error1) {
                err = error1;
                return _this.emit("error", err);
              }
            })();
          }
          if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
            if (!_this.options.preserveChildrenOrder) {
              node = {};
              if (_this.options.attrkey in obj) {
                node[_this.options.attrkey] = obj[_this.options.attrkey];
                delete obj[_this.options.attrkey];
              }
              if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                node[_this.options.charkey] = obj[_this.options.charkey];
                delete obj[_this.options.charkey];
              }
              if (Object.getOwnPropertyNames(obj).length > 0) {
                node[_this.options.childkey] = obj;
              }
              obj = node;
            } else if (s) {
              s[_this.options.childkey] = s[_this.options.childkey] || [];
              objClone = {};
              for (key in obj) {
                if (!hasProp.call(obj, key)) continue;
                objClone[key] = obj[key];
              }
              s[_this.options.childkey].push(objClone);
              delete obj["#name"];
              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                obj = obj[charkey];
              }
            }
          }
          if (stack.length > 0) {
            return _this.assignOrPush(s, nodeName, obj);
          } else {
            if (_this.options.explicitRoot) {
              old = obj;
              obj = {};
              obj[nodeName] = old;
            }
            _this.resultObject = obj;
            _this.saxParser.ended = true;
            return _this.emit("end", _this.resultObject);
          }
        };
      })(this);
      ontext = (function(_this) {
        return function(text) {
          var charChild, s;
          s = stack[stack.length - 1];
          if (s) {
            s[charkey] += text;
            if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
              s[_this.options.childkey] = s[_this.options.childkey] || [];
              charChild = {
                '#name': '__text__'
              };
              charChild[charkey] = text;
              if (_this.options.normalize) {
                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
              }
              s[_this.options.childkey].push(charChild);
            }
            return s;
          }
        };
      })(this);
      this.saxParser.ontext = ontext;
      return this.saxParser.oncdata = (function(_this) {
        return function(text) {
          var s;
          s = ontext(text);
          if (s) {
            return s.cdata = true;
          }
        };
      })(this);
    };

    Parser.prototype.parseString = function(str, cb) {
      var err;
      if ((cb != null) && typeof cb === "function") {
        this.on("end", function(result) {
          this.reset();
          return cb(null, result);
        });
        this.on("error", function(err) {
          this.reset();
          return cb(err);
        });
      }
      try {
        str = str.toString();
        if (str.trim() === '') {
          this.emit("end", null);
          return true;
        }
        str = bom.stripBOM(str);
        if (this.options.async) {
          this.remaining = str;
          setImmediate(this.processAsync);
          return this.saxParser;
        }
        return this.saxParser.write(str).close();
      } catch (error1) {
        err = error1;
        if (!(this.saxParser.errThrown || this.saxParser.ended)) {
          this.emit('error', err);
          return this.saxParser.errThrown = true;
        } else if (this.saxParser.ended) {
          throw err;
        }
      }
    };

    Parser.prototype.parseStringPromise = function(str) {
      return new Promise((function(_this) {
        return function(resolve, reject) {
          return _this.parseString(str, function(err, value) {
            if (err) {
              return reject(err);
            } else {
              return resolve(value);
            }
          });
        };
      })(this));
    };

    return Parser;

  })(events);

  exports.parseString = function(str, a, b) {
    var cb, options, parser;
    if (b != null) {
      if (typeof b === 'function') {
        cb = b;
      }
      if (typeof a === 'object') {
        options = a;
      }
    } else {
      if (typeof a === 'function') {
        cb = a;
      }
      options = {};
    }
    parser = new exports.Parser(options);
    return parser.parseString(str, cb);
  };

  exports.parseStringPromise = function(str, a) {
    var options, parser;
    if (typeof a === 'object') {
      options = a;
    }
    parser = new exports.Parser(options);
    return parser.parseStringPromise(str);
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\processors.js":
/*!************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xml2js/lib/processors.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var prefixMatch;

  prefixMatch = new RegExp(/(?!xmlns)^.*:/);

  exports.normalize = function(str) {
    return str.toLowerCase();
  };

  exports.firstCharLowerCase = function(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  exports.stripPrefix = function(str) {
    return str.replace(prefixMatch, '');
  };

  exports.parseNumbers = function(str) {
    if (!isNaN(str)) {
      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
    }
    return str;
  };

  exports.parseBooleans = function(str) {
    if (/^(?:true|false)$/i.test(str)) {
      str = str.toLowerCase() === 'true';
    }
    return str;
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\xml2js.js":
/*!********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xml2js/lib/xml2js.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  "use strict";
  var builder, defaults, parser, processors,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  defaults = __webpack_require__(/*! ./defaults */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\defaults.js");

  builder = __webpack_require__(/*! ./builder */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\builder.js");

  parser = __webpack_require__(/*! ./parser */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\parser.js");

  processors = __webpack_require__(/*! ./processors */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xml2js\\lib\\processors.js");

  exports.defaults = defaults.defaults;

  exports.processors = processors;

  exports.ValidationError = (function(superClass) {
    extend(ValidationError, superClass);

    function ValidationError(message) {
      this.message = message;
    }

    return ValidationError;

  })(Error);

  exports.Builder = builder.Builder;

  exports.Parser = parser.Parser;

  exports.parseString = parser.parseString;

  exports.parseStringPromise = parser.parseStringPromise;

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\DocumentPosition.js":
/*!**********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/DocumentPosition.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  module.exports = {
    Disconnected: 1,
    Preceding: 2,
    Following: 4,
    Contains: 8,
    ContainedBy: 16,
    ImplementationSpecific: 32
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js":
/*!**************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/NodeType.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  module.exports = {
    Element: 1,
    Attribute: 2,
    Text: 3,
    CData: 4,
    EntityReference: 5,
    EntityDeclaration: 6,
    ProcessingInstruction: 7,
    Comment: 8,
    Document: 9,
    DocType: 10,
    DocumentFragment: 11,
    NotationDeclaration: 12,
    Declaration: 201,
    Raw: 202,
    AttributeDeclaration: 203,
    ElementDeclaration: 204,
    Dummy: 205
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js":
/*!*************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/Utility.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  assign = function() {
    var i, key, len, source, sources, target;
    target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (isFunction(Object.assign)) {
      Object.assign.apply(null, arguments);
    } else {
      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        if (source != null) {
          for (key in source) {
            if (!hasProp.call(source, key)) continue;
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };

  isFunction = function(val) {
    return !!val && Object.prototype.toString.call(val) === '[object Function]';
  };

  isObject = function(val) {
    var ref;
    return !!val && ((ref = typeof val) === 'function' || ref === 'object');
  };

  isArray = function(val) {
    if (isFunction(Array.isArray)) {
      return Array.isArray(val);
    } else {
      return Object.prototype.toString.call(val) === '[object Array]';
    }
  };

  isEmpty = function(val) {
    var key;
    if (isArray(val)) {
      return !val.length;
    } else {
      for (key in val) {
        if (!hasProp.call(val, key)) continue;
        return false;
      }
      return true;
    }
  };

  isPlainObject = function(val) {
    var ctor, proto;
    return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && (typeof ctor === 'function') && (ctor instanceof ctor) && (Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object));
  };

  getValue = function(obj) {
    if (isFunction(obj.valueOf)) {
      return obj.valueOf();
    } else {
      return obj;
    }
  };

  module.exports.assign = assign;

  module.exports.isFunction = isFunction;

  module.exports.isObject = isObject;

  module.exports.isArray = isArray;

  module.exports.isEmpty = isEmpty;

  module.exports.isPlainObject = isPlainObject;

  module.exports.getValue = getValue;

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\WriterState.js":
/*!*****************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/WriterState.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  module.exports = {
    None: 0,
    OpenTag: 1,
    InsideTag: 2,
    CloseTag: 3
  };

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLAttribute.js":
/*!******************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLAttribute.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLAttribute, XMLNode;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  module.exports = XMLAttribute = (function() {
    function XMLAttribute(parent, name, value) {
      this.parent = parent;
      if (this.parent) {
        this.options = this.parent.options;
        this.stringify = this.parent.stringify;
      }
      if (name == null) {
        throw new Error("Missing attribute name. " + this.debugInfo(name));
      }
      this.name = this.stringify.name(name);
      this.value = this.stringify.attValue(value);
      this.type = NodeType.Attribute;
      this.isId = false;
      this.schemaTypeInfo = null;
    }

    Object.defineProperty(XMLAttribute.prototype, 'nodeType', {
      get: function() {
        return this.type;
      }
    });

    Object.defineProperty(XMLAttribute.prototype, 'ownerElement', {
      get: function() {
        return this.parent;
      }
    });

    Object.defineProperty(XMLAttribute.prototype, 'textContent', {
      get: function() {
        return this.value;
      },
      set: function(value) {
        return this.value = value || '';
      }
    });

    Object.defineProperty(XMLAttribute.prototype, 'namespaceURI', {
      get: function() {
        return '';
      }
    });

    Object.defineProperty(XMLAttribute.prototype, 'prefix', {
      get: function() {
        return '';
      }
    });

    Object.defineProperty(XMLAttribute.prototype, 'localName', {
      get: function() {
        return this.name;
      }
    });

    Object.defineProperty(XMLAttribute.prototype, 'specified', {
      get: function() {
        return true;
      }
    });

    XMLAttribute.prototype.clone = function() {
      return Object.create(this);
    };

    XMLAttribute.prototype.toString = function(options) {
      return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
    };

    XMLAttribute.prototype.debugInfo = function(name) {
      name = name || this.name;
      if (name == null) {
        return "parent: <" + this.parent.name + ">";
      } else {
        return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
      }
    };

    XMLAttribute.prototype.isEqualNode = function(node) {
      if (node.namespaceURI !== this.namespaceURI) {
        return false;
      }
      if (node.prefix !== this.prefix) {
        return false;
      }
      if (node.localName !== this.localName) {
        return false;
      }
      if (node.value !== this.value) {
        return false;
      }
      return true;
    };

    return XMLAttribute;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCData.js":
/*!**************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLCData.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLCData, XMLCharacterData,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCharacterData.js");

  module.exports = XMLCData = (function(superClass) {
    extend(XMLCData, superClass);

    function XMLCData(parent, text) {
      XMLCData.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing CDATA text. " + this.debugInfo());
      }
      this.name = "#cdata-section";
      this.type = NodeType.CData;
      this.value = this.stringify.cdata(text);
    }

    XMLCData.prototype.clone = function() {
      return Object.create(this);
    };

    XMLCData.prototype.toString = function(options) {
      return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
    };

    return XMLCData;

  })(XMLCharacterData);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCharacterData.js":
/*!**********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLCharacterData.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLCharacterData, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  module.exports = XMLCharacterData = (function(superClass) {
    extend(XMLCharacterData, superClass);

    function XMLCharacterData(parent) {
      XMLCharacterData.__super__.constructor.call(this, parent);
      this.value = '';
    }

    Object.defineProperty(XMLCharacterData.prototype, 'data', {
      get: function() {
        return this.value;
      },
      set: function(value) {
        return this.value = value || '';
      }
    });

    Object.defineProperty(XMLCharacterData.prototype, 'length', {
      get: function() {
        return this.value.length;
      }
    });

    Object.defineProperty(XMLCharacterData.prototype, 'textContent', {
      get: function() {
        return this.value;
      },
      set: function(value) {
        return this.value = value || '';
      }
    });

    XMLCharacterData.prototype.clone = function() {
      return Object.create(this);
    };

    XMLCharacterData.prototype.substringData = function(offset, count) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLCharacterData.prototype.appendData = function(arg) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLCharacterData.prototype.insertData = function(offset, arg) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLCharacterData.prototype.deleteData = function(offset, count) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLCharacterData.prototype.replaceData = function(offset, count, arg) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLCharacterData.prototype.isEqualNode = function(node) {
      if (!XMLCharacterData.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
        return false;
      }
      if (node.data !== this.data) {
        return false;
      }
      return true;
    };

    return XMLCharacterData;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLComment.js":
/*!****************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLComment.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLCharacterData, XMLComment,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCharacterData.js");

  module.exports = XMLComment = (function(superClass) {
    extend(XMLComment, superClass);

    function XMLComment(parent, text) {
      XMLComment.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing comment text. " + this.debugInfo());
      }
      this.name = "#comment";
      this.type = NodeType.Comment;
      this.value = this.stringify.comment(text);
    }

    XMLComment.prototype.clone = function() {
      return Object.create(this);
    };

    XMLComment.prototype.toString = function(options) {
      return this.options.writer.comment(this, this.options.writer.filterOptions(options));
    };

    return XMLComment;

  })(XMLCharacterData);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMConfiguration.js":
/*!*************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;

  XMLDOMErrorHandler = __webpack_require__(/*! ./XMLDOMErrorHandler */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMErrorHandler.js");

  XMLDOMStringList = __webpack_require__(/*! ./XMLDOMStringList */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMStringList.js");

  module.exports = XMLDOMConfiguration = (function() {
    function XMLDOMConfiguration() {
      var clonedSelf;
      this.defaultParams = {
        "canonical-form": false,
        "cdata-sections": false,
        "comments": false,
        "datatype-normalization": false,
        "element-content-whitespace": true,
        "entities": true,
        "error-handler": new XMLDOMErrorHandler(),
        "infoset": true,
        "validate-if-schema": false,
        "namespaces": true,
        "namespace-declarations": true,
        "normalize-characters": false,
        "schema-location": '',
        "schema-type": '',
        "split-cdata-sections": true,
        "validate": false,
        "well-formed": true
      };
      this.params = clonedSelf = Object.create(this.defaultParams);
    }

    Object.defineProperty(XMLDOMConfiguration.prototype, 'parameterNames', {
      get: function() {
        return new XMLDOMStringList(Object.keys(this.defaultParams));
      }
    });

    XMLDOMConfiguration.prototype.getParameter = function(name) {
      if (this.params.hasOwnProperty(name)) {
        return this.params[name];
      } else {
        return null;
      }
    };

    XMLDOMConfiguration.prototype.canSetParameter = function(name, value) {
      return true;
    };

    XMLDOMConfiguration.prototype.setParameter = function(name, value) {
      if (value != null) {
        return this.params[name] = value;
      } else {
        return delete this.params[name];
      }
    };

    return XMLDOMConfiguration;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMErrorHandler.js":
/*!************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDOMErrorHandler;

  module.exports = XMLDOMErrorHandler = (function() {
    function XMLDOMErrorHandler() {}

    XMLDOMErrorHandler.prototype.handleError = function(error) {
      throw new Error(error);
    };

    return XMLDOMErrorHandler;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMImplementation.js":
/*!**************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDOMImplementation.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDOMImplementation;

  module.exports = XMLDOMImplementation = (function() {
    function XMLDOMImplementation() {}

    XMLDOMImplementation.prototype.hasFeature = function(feature, version) {
      return true;
    };

    XMLDOMImplementation.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
      throw new Error("This DOM method is not implemented.");
    };

    XMLDOMImplementation.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
      throw new Error("This DOM method is not implemented.");
    };

    XMLDOMImplementation.prototype.createHTMLDocument = function(title) {
      throw new Error("This DOM method is not implemented.");
    };

    XMLDOMImplementation.prototype.getFeature = function(feature, version) {
      throw new Error("This DOM method is not implemented.");
    };

    return XMLDOMImplementation;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMStringList.js":
/*!**********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDOMStringList.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLDOMStringList;

  module.exports = XMLDOMStringList = (function() {
    function XMLDOMStringList(arr) {
      this.arr = arr || [];
    }

    Object.defineProperty(XMLDOMStringList.prototype, 'length', {
      get: function() {
        return this.arr.length;
      }
    });

    XMLDOMStringList.prototype.item = function(index) {
      return this.arr[index] || null;
    };

    XMLDOMStringList.prototype.contains = function(str) {
      return this.arr.indexOf(str) !== -1;
    };

    return XMLDOMStringList;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDAttList.js":
/*!*******************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDTDAttList.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDTDAttList, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  module.exports = XMLDTDAttList = (function(superClass) {
    extend(XMLDTDAttList, superClass);

    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      XMLDTDAttList.__super__.constructor.call(this, parent);
      if (elementName == null) {
        throw new Error("Missing DTD element name. " + this.debugInfo());
      }
      if (attributeName == null) {
        throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
      }
      if (!attributeType) {
        throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
      }
      if (!defaultValueType) {
        throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
      }
      if (defaultValueType.indexOf('#') !== 0) {
        defaultValueType = '#' + defaultValueType;
      }
      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
      }
      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
        throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
      }
      this.elementName = this.stringify.name(elementName);
      this.type = NodeType.AttributeDeclaration;
      this.attributeName = this.stringify.name(attributeName);
      this.attributeType = this.stringify.dtdAttType(attributeType);
      if (defaultValue) {
        this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
      }
      this.defaultValueType = defaultValueType;
    }

    XMLDTDAttList.prototype.toString = function(options) {
      return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
    };

    return XMLDTDAttList;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDElement.js":
/*!*******************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDTDElement.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDTDElement, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  module.exports = XMLDTDElement = (function(superClass) {
    extend(XMLDTDElement, superClass);

    function XMLDTDElement(parent, name, value) {
      XMLDTDElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing DTD element name. " + this.debugInfo());
      }
      if (!value) {
        value = '(#PCDATA)';
      }
      if (Array.isArray(value)) {
        value = '(' + value.join(',') + ')';
      }
      this.name = this.stringify.name(name);
      this.type = NodeType.ElementDeclaration;
      this.value = this.stringify.dtdElementValue(value);
    }

    XMLDTDElement.prototype.toString = function(options) {
      return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
    };

    return XMLDTDElement;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDEntity.js":
/*!******************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDTDEntity.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDTDEntity, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js").isObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  module.exports = XMLDTDEntity = (function(superClass) {
    extend(XMLDTDEntity, superClass);

    function XMLDTDEntity(parent, pe, name, value) {
      XMLDTDEntity.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing DTD entity name. " + this.debugInfo(name));
      }
      if (value == null) {
        throw new Error("Missing DTD entity value. " + this.debugInfo(name));
      }
      this.pe = !!pe;
      this.name = this.stringify.name(name);
      this.type = NodeType.EntityDeclaration;
      if (!isObject(value)) {
        this.value = this.stringify.dtdEntityValue(value);
        this.internal = true;
      } else {
        if (!value.pubID && !value.sysID) {
          throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
        }
        if (value.pubID && !value.sysID) {
          throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
        }
        this.internal = false;
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
        if (value.nData != null) {
          this.nData = this.stringify.dtdNData(value.nData);
        }
        if (this.pe && this.nData) {
          throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
        }
      }
    }

    Object.defineProperty(XMLDTDEntity.prototype, 'publicId', {
      get: function() {
        return this.pubID;
      }
    });

    Object.defineProperty(XMLDTDEntity.prototype, 'systemId', {
      get: function() {
        return this.sysID;
      }
    });

    Object.defineProperty(XMLDTDEntity.prototype, 'notationName', {
      get: function() {
        return this.nData || null;
      }
    });

    Object.defineProperty(XMLDTDEntity.prototype, 'inputEncoding', {
      get: function() {
        return null;
      }
    });

    Object.defineProperty(XMLDTDEntity.prototype, 'xmlEncoding', {
      get: function() {
        return null;
      }
    });

    Object.defineProperty(XMLDTDEntity.prototype, 'xmlVersion', {
      get: function() {
        return null;
      }
    });

    XMLDTDEntity.prototype.toString = function(options) {
      return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
    };

    return XMLDTDEntity;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDNotation.js":
/*!********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDTDNotation.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDTDNotation, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  module.exports = XMLDTDNotation = (function(superClass) {
    extend(XMLDTDNotation, superClass);

    function XMLDTDNotation(parent, name, value) {
      XMLDTDNotation.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing DTD notation name. " + this.debugInfo(name));
      }
      if (!value.pubID && !value.sysID) {
        throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
      }
      this.name = this.stringify.name(name);
      this.type = NodeType.NotationDeclaration;
      if (value.pubID != null) {
        this.pubID = this.stringify.dtdPubID(value.pubID);
      }
      if (value.sysID != null) {
        this.sysID = this.stringify.dtdSysID(value.sysID);
      }
    }

    Object.defineProperty(XMLDTDNotation.prototype, 'publicId', {
      get: function() {
        return this.pubID;
      }
    });

    Object.defineProperty(XMLDTDNotation.prototype, 'systemId', {
      get: function() {
        return this.sysID;
      }
    });

    XMLDTDNotation.prototype.toString = function(options) {
      return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
    };

    return XMLDTDNotation;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDeclaration.js":
/*!********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDeclaration.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDeclaration, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js").isObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  module.exports = XMLDeclaration = (function(superClass) {
    extend(XMLDeclaration, superClass);

    function XMLDeclaration(parent, version, encoding, standalone) {
      var ref;
      XMLDeclaration.__super__.constructor.call(this, parent);
      if (isObject(version)) {
        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
      }
      if (!version) {
        version = '1.0';
      }
      this.type = NodeType.Declaration;
      this.version = this.stringify.xmlVersion(version);
      if (encoding != null) {
        this.encoding = this.stringify.xmlEncoding(encoding);
      }
      if (standalone != null) {
        this.standalone = this.stringify.xmlStandalone(standalone);
      }
    }

    XMLDeclaration.prototype.toString = function(options) {
      return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
    };

    return XMLDeclaration;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocType.js":
/*!****************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDocType.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js").isObject;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDAttList.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDEntity.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDElement.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDNotation.js");

  XMLNamedNodeMap = __webpack_require__(/*! ./XMLNamedNodeMap */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNamedNodeMap.js");

  module.exports = XMLDocType = (function(superClass) {
    extend(XMLDocType, superClass);

    function XMLDocType(parent, pubID, sysID) {
      var child, i, len, ref, ref1, ref2;
      XMLDocType.__super__.constructor.call(this, parent);
      this.type = NodeType.DocType;
      if (parent.children) {
        ref = parent.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          if (child.type === NodeType.Element) {
            this.name = child.name;
            break;
          }
        }
      }
      this.documentObject = parent;
      if (isObject(pubID)) {
        ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
      }
      if (sysID == null) {
        ref2 = [pubID, sysID], sysID = ref2[0], pubID = ref2[1];
      }
      if (pubID != null) {
        this.pubID = this.stringify.dtdPubID(pubID);
      }
      if (sysID != null) {
        this.sysID = this.stringify.dtdSysID(sysID);
      }
    }

    Object.defineProperty(XMLDocType.prototype, 'entities', {
      get: function() {
        var child, i, len, nodes, ref;
        nodes = {};
        ref = this.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          if ((child.type === NodeType.EntityDeclaration) && !child.pe) {
            nodes[child.name] = child;
          }
        }
        return new XMLNamedNodeMap(nodes);
      }
    });

    Object.defineProperty(XMLDocType.prototype, 'notations', {
      get: function() {
        var child, i, len, nodes, ref;
        nodes = {};
        ref = this.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          if (child.type === NodeType.NotationDeclaration) {
            nodes[child.name] = child;
          }
        }
        return new XMLNamedNodeMap(nodes);
      }
    });

    Object.defineProperty(XMLDocType.prototype, 'publicId', {
      get: function() {
        return this.pubID;
      }
    });

    Object.defineProperty(XMLDocType.prototype, 'systemId', {
      get: function() {
        return this.sysID;
      }
    });

    Object.defineProperty(XMLDocType.prototype, 'internalSubset', {
      get: function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });

    XMLDocType.prototype.element = function(name, value) {
      var child;
      child = new XMLDTDElement(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var child;
      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.entity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, false, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.pEntity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, true, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.notation = function(name, value) {
      var child;
      child = new XMLDTDNotation(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.toString = function(options) {
      return this.options.writer.docType(this, this.options.writer.filterOptions(options));
    };

    XMLDocType.prototype.ele = function(name, value) {
      return this.element(name, value);
    };

    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
    };

    XMLDocType.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocType.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocType.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    XMLDocType.prototype.up = function() {
      return this.root() || this.documentObject;
    };

    XMLDocType.prototype.isEqualNode = function(node) {
      if (!XMLDocType.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
        return false;
      }
      if (node.name !== this.name) {
        return false;
      }
      if (node.publicId !== this.publicId) {
        return false;
      }
      if (node.systemId !== this.systemId) {
        return false;
      }
      return true;
    };

    return XMLDocType;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocument.js":
/*!*****************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDocument.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  isPlainObject = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js").isPlainObject;

  XMLDOMImplementation = __webpack_require__(/*! ./XMLDOMImplementation */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMImplementation.js");

  XMLDOMConfiguration = __webpack_require__(/*! ./XMLDOMConfiguration */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMConfiguration.js");

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLStringifier = __webpack_require__(/*! ./XMLStringifier */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringifier.js");

  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringWriter.js");

  module.exports = XMLDocument = (function(superClass) {
    extend(XMLDocument, superClass);

    function XMLDocument(options) {
      XMLDocument.__super__.constructor.call(this, null);
      this.name = "#document";
      this.type = NodeType.Document;
      this.documentURI = null;
      this.domConfig = new XMLDOMConfiguration();
      options || (options = {});
      if (!options.writer) {
        options.writer = new XMLStringWriter();
      }
      this.options = options;
      this.stringify = new XMLStringifier(options);
    }

    Object.defineProperty(XMLDocument.prototype, 'implementation', {
      value: new XMLDOMImplementation()
    });

    Object.defineProperty(XMLDocument.prototype, 'doctype', {
      get: function() {
        var child, i, len, ref;
        ref = this.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          if (child.type === NodeType.DocType) {
            return child;
          }
        }
        return null;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'documentElement', {
      get: function() {
        return this.rootObject || null;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'inputEncoding', {
      get: function() {
        return null;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'strictErrorChecking', {
      get: function() {
        return false;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'xmlEncoding', {
      get: function() {
        if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
          return this.children[0].encoding;
        } else {
          return null;
        }
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'xmlStandalone', {
      get: function() {
        if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
          return this.children[0].standalone === 'yes';
        } else {
          return false;
        }
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'xmlVersion', {
      get: function() {
        if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
          return this.children[0].version;
        } else {
          return "1.0";
        }
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'URL', {
      get: function() {
        return this.documentURI;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'origin', {
      get: function() {
        return null;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'compatMode', {
      get: function() {
        return null;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'characterSet', {
      get: function() {
        return null;
      }
    });

    Object.defineProperty(XMLDocument.prototype, 'contentType', {
      get: function() {
        return null;
      }
    });

    XMLDocument.prototype.end = function(writer) {
      var writerOptions;
      writerOptions = {};
      if (!writer) {
        writer = this.options.writer;
      } else if (isPlainObject(writer)) {
        writerOptions = writer;
        writer = this.options.writer;
      }
      return writer.document(this, writer.filterOptions(writerOptions));
    };

    XMLDocument.prototype.toString = function(options) {
      return this.options.writer.document(this, this.options.writer.filterOptions(options));
    };

    XMLDocument.prototype.createElement = function(tagName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createDocumentFragment = function() {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createTextNode = function(data) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createComment = function(data) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createCDATASection = function(data) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createProcessingInstruction = function(target, data) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createAttribute = function(name) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createEntityReference = function(name) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.getElementsByTagName = function(tagname) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.importNode = function(importedNode, deep) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createElementNS = function(namespaceURI, qualifiedName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.getElementById = function(elementId) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.adoptNode = function(source) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.normalizeDocument = function() {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.getElementsByClassName = function(classNames) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createEvent = function(eventInterface) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createRange = function() {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createNodeIterator = function(root, whatToShow, filter) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLDocument.prototype.createTreeWalker = function(root, whatToShow, filter) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    return XMLDocument;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocumentCB.js":
/*!*******************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDocumentCB.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref,
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js"), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLDocument = __webpack_require__(/*! ./XMLDocument */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocument.js");

  XMLElement = __webpack_require__(/*! ./XMLElement */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLElement.js");

  XMLCData = __webpack_require__(/*! ./XMLCData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCData.js");

  XMLComment = __webpack_require__(/*! ./XMLComment */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLComment.js");

  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLRaw.js");

  XMLText = __webpack_require__(/*! ./XMLText */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLText.js");

  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLProcessingInstruction.js");

  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDeclaration.js");

  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocType.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDAttList.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDEntity.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDElement.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDNotation.js");

  XMLAttribute = __webpack_require__(/*! ./XMLAttribute */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLAttribute.js");

  XMLStringifier = __webpack_require__(/*! ./XMLStringifier */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringifier.js");

  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringWriter.js");

  WriterState = __webpack_require__(/*! ./WriterState */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\WriterState.js");

  module.exports = XMLDocumentCB = (function() {
    function XMLDocumentCB(options, onData, onEnd) {
      var writerOptions;
      this.name = "?xml";
      this.type = NodeType.Document;
      options || (options = {});
      writerOptions = {};
      if (!options.writer) {
        options.writer = new XMLStringWriter();
      } else if (isPlainObject(options.writer)) {
        writerOptions = options.writer;
        options.writer = new XMLStringWriter();
      }
      this.options = options;
      this.writer = options.writer;
      this.writerOptions = this.writer.filterOptions(writerOptions);
      this.stringify = new XMLStringifier(options);
      this.onDataCallback = onData || function() {};
      this.onEndCallback = onEnd || function() {};
      this.currentNode = null;
      this.currentLevel = -1;
      this.openTags = {};
      this.documentStarted = false;
      this.documentCompleted = false;
      this.root = null;
    }

    XMLDocumentCB.prototype.createChildNode = function(node) {
      var att, attName, attributes, child, i, len, ref1, ref2;
      switch (node.type) {
        case NodeType.CData:
          this.cdata(node.value);
          break;
        case NodeType.Comment:
          this.comment(node.value);
          break;
        case NodeType.Element:
          attributes = {};
          ref1 = node.attribs;
          for (attName in ref1) {
            if (!hasProp.call(ref1, attName)) continue;
            att = ref1[attName];
            attributes[attName] = att.value;
          }
          this.node(node.name, attributes);
          break;
        case NodeType.Dummy:
          this.dummy();
          break;
        case NodeType.Raw:
          this.raw(node.value);
          break;
        case NodeType.Text:
          this.text(node.value);
          break;
        case NodeType.ProcessingInstruction:
          this.instruction(node.target, node.value);
          break;
        default:
          throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
      }
      ref2 = node.children;
      for (i = 0, len = ref2.length; i < len; i++) {
        child = ref2[i];
        this.createChildNode(child);
        if (child.type === NodeType.Element) {
          this.up();
        }
      }
      return this;
    };

    XMLDocumentCB.prototype.dummy = function() {
      return this;
    };

    XMLDocumentCB.prototype.node = function(name, attributes, text) {
      var ref1;
      if (name == null) {
        throw new Error("Missing node name.");
      }
      if (this.root && this.currentLevel === -1) {
        throw new Error("Document can only have one root node. " + this.debugInfo(name));
      }
      this.openCurrent();
      name = getValue(name);
      if (attributes == null) {
        attributes = {};
      }
      attributes = getValue(attributes);
      if (!isObject(attributes)) {
        ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
      }
      this.currentNode = new XMLElement(this, name, attributes);
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      if (text != null) {
        this.text(text);
      }
      return this;
    };

    XMLDocumentCB.prototype.element = function(name, attributes, text) {
      var child, i, len, oldValidationFlag, ref1, root;
      if (this.currentNode && this.currentNode.type === NodeType.DocType) {
        this.dtdElement.apply(this, arguments);
      } else {
        if (Array.isArray(name) || isObject(name) || isFunction(name)) {
          oldValidationFlag = this.options.noValidation;
          this.options.noValidation = true;
          root = new XMLDocument(this.options).element('TEMP_ROOT');
          root.element(name);
          this.options.noValidation = oldValidationFlag;
          ref1 = root.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            this.createChildNode(child);
            if (child.type === NodeType.Element) {
              this.up();
            }
          }
        } else {
          this.node(name, attributes, text);
        }
      }
      return this;
    };

    XMLDocumentCB.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (!this.currentNode || this.currentNode.children) {
        throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
      }
      if (name != null) {
        name = getValue(name);
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (this.options.keepNullAttributes && (value == null)) {
          this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
        } else if (value != null) {
          this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLDocumentCB.prototype.text = function(value) {
      var node;
      this.openCurrent();
      node = new XMLText(this, value);
      this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.cdata = function(value) {
      var node;
      this.openCurrent();
      node = new XMLCData(this, value);
      this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.comment = function(value) {
      var node;
      this.openCurrent();
      node = new XMLComment(this, value);
      this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.raw = function(value) {
      var node;
      this.openCurrent();
      node = new XMLRaw(this, value);
      this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.instruction = function(target, value) {
      var i, insTarget, insValue, len, node;
      this.openCurrent();
      if (target != null) {
        target = getValue(target);
      }
      if (value != null) {
        value = getValue(value);
      }
      if (Array.isArray(target)) {
        for (i = 0, len = target.length; i < len; i++) {
          insTarget = target[i];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        node = new XMLProcessingInstruction(this, target, value);
        this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      }
      return this;
    };

    XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
      var node;
      this.openCurrent();
      if (this.documentStarted) {
        throw new Error("declaration() must be the first node.");
      }
      node = new XMLDeclaration(this, version, encoding, standalone);
      this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
      this.openCurrent();
      if (root == null) {
        throw new Error("Missing root node name.");
      }
      if (this.root) {
        throw new Error("dtd() must come before the root node.");
      }
      this.currentNode = new XMLDocType(this, pubID, sysID);
      this.currentNode.rootNodeName = root;
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      return this;
    };

    XMLDocumentCB.prototype.dtdElement = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDElement(this, name, value);
      this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var node;
      this.openCurrent();
      node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.entity = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDEntity(this, false, name, value);
      this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.pEntity = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDEntity(this, true, name, value);
      this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.notation = function(name, value) {
      var node;
      this.openCurrent();
      node = new XMLDTDNotation(this, name, value);
      this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };

    XMLDocumentCB.prototype.up = function() {
      if (this.currentLevel < 0) {
        throw new Error("The document node has no parent.");
      }
      if (this.currentNode) {
        if (this.currentNode.children) {
          this.closeNode(this.currentNode);
        } else {
          this.openNode(this.currentNode);
        }
        this.currentNode = null;
      } else {
        this.closeNode(this.openTags[this.currentLevel]);
      }
      delete this.openTags[this.currentLevel];
      this.currentLevel--;
      return this;
    };

    XMLDocumentCB.prototype.end = function() {
      while (this.currentLevel >= 0) {
        this.up();
      }
      return this.onEnd();
    };

    XMLDocumentCB.prototype.openCurrent = function() {
      if (this.currentNode) {
        this.currentNode.children = true;
        return this.openNode(this.currentNode);
      }
    };

    XMLDocumentCB.prototype.openNode = function(node) {
      var att, chunk, name, ref1;
      if (!node.isOpen) {
        if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
          this.root = node;
        }
        chunk = '';
        if (node.type === NodeType.Element) {
          this.writerOptions.state = WriterState.OpenTag;
          chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<' + node.name;
          ref1 = node.attribs;
          for (name in ref1) {
            if (!hasProp.call(ref1, name)) continue;
            att = ref1[name];
            chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
          }
          chunk += (node.children ? '>' : '/>') + this.writer.endline(node, this.writerOptions, this.currentLevel);
          this.writerOptions.state = WriterState.InsideTag;
        } else {
          this.writerOptions.state = WriterState.OpenTag;
          chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<!DOCTYPE ' + node.rootNodeName;
          if (node.pubID && node.sysID) {
            chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            chunk += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.children) {
            chunk += ' [';
            this.writerOptions.state = WriterState.InsideTag;
          } else {
            this.writerOptions.state = WriterState.CloseTag;
            chunk += '>';
          }
          chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
        }
        this.onData(chunk, this.currentLevel);
        return node.isOpen = true;
      }
    };

    XMLDocumentCB.prototype.closeNode = function(node) {
      var chunk;
      if (!node.isClosed) {
        chunk = '';
        this.writerOptions.state = WriterState.CloseTag;
        if (node.type === NodeType.Element) {
          chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '</' + node.name + '>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
        } else {
          chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + ']>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
        }
        this.writerOptions.state = WriterState.None;
        this.onData(chunk, this.currentLevel);
        return node.isClosed = true;
      }
    };

    XMLDocumentCB.prototype.onData = function(chunk, level) {
      this.documentStarted = true;
      return this.onDataCallback(chunk, level + 1);
    };

    XMLDocumentCB.prototype.onEnd = function() {
      this.documentCompleted = true;
      return this.onEndCallback();
    };

    XMLDocumentCB.prototype.debugInfo = function(name) {
      if (name == null) {
        return "";
      } else {
        return "node: <" + name + ">";
      }
    };

    XMLDocumentCB.prototype.ele = function() {
      return this.element.apply(this, arguments);
    };

    XMLDocumentCB.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLDocumentCB.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLDocumentCB.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLDocumentCB.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLDocumentCB.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
      return this.doctype(root, pubID, sysID);
    };

    XMLDocumentCB.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLDocumentCB.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLDocumentCB.prototype.t = function(value) {
      return this.text(value);
    };

    XMLDocumentCB.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLDocumentCB.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLDocumentCB.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLDocumentCB.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocumentCB.prototype.att = function() {
      if (this.currentNode && this.currentNode.type === NodeType.DocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };

    XMLDocumentCB.prototype.a = function() {
      if (this.currentNode && this.currentNode.type === NodeType.DocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };

    XMLDocumentCB.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocumentCB.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocumentCB.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    return XMLDocumentCB;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDummy.js":
/*!**************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLDummy.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLDummy, XMLNode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  module.exports = XMLDummy = (function(superClass) {
    extend(XMLDummy, superClass);

    function XMLDummy(parent) {
      XMLDummy.__super__.constructor.call(this, parent);
      this.type = NodeType.Dummy;
    }

    XMLDummy.prototype.clone = function() {
      return Object.create(this);
    };

    XMLDummy.prototype.toString = function(options) {
      return '';
    };

    return XMLDummy;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLElement.js":
/*!****************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLElement.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js"), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLAttribute = __webpack_require__(/*! ./XMLAttribute */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLAttribute.js");

  XMLNamedNodeMap = __webpack_require__(/*! ./XMLNamedNodeMap */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNamedNodeMap.js");

  module.exports = XMLElement = (function(superClass) {
    extend(XMLElement, superClass);

    function XMLElement(parent, name, attributes) {
      var child, j, len, ref1;
      XMLElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing element name. " + this.debugInfo());
      }
      this.name = this.stringify.name(name);
      this.type = NodeType.Element;
      this.attribs = {};
      this.schemaTypeInfo = null;
      if (attributes != null) {
        this.attribute(attributes);
      }
      if (parent.type === NodeType.Document) {
        this.isRoot = true;
        this.documentObject = parent;
        parent.rootObject = this;
        if (parent.children) {
          ref1 = parent.children;
          for (j = 0, len = ref1.length; j < len; j++) {
            child = ref1[j];
            if (child.type === NodeType.DocType) {
              child.name = this.name;
              break;
            }
          }
        }
      }
    }

    Object.defineProperty(XMLElement.prototype, 'tagName', {
      get: function() {
        return this.name;
      }
    });

    Object.defineProperty(XMLElement.prototype, 'namespaceURI', {
      get: function() {
        return '';
      }
    });

    Object.defineProperty(XMLElement.prototype, 'prefix', {
      get: function() {
        return '';
      }
    });

    Object.defineProperty(XMLElement.prototype, 'localName', {
      get: function() {
        return this.name;
      }
    });

    Object.defineProperty(XMLElement.prototype, 'id', {
      get: function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });

    Object.defineProperty(XMLElement.prototype, 'className', {
      get: function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });

    Object.defineProperty(XMLElement.prototype, 'classList', {
      get: function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });

    Object.defineProperty(XMLElement.prototype, 'attributes', {
      get: function() {
        if (!this.attributeMap || !this.attributeMap.nodes) {
          this.attributeMap = new XMLNamedNodeMap(this.attribs);
        }
        return this.attributeMap;
      }
    });

    XMLElement.prototype.clone = function() {
      var att, attName, clonedSelf, ref1;
      clonedSelf = Object.create(this);
      if (clonedSelf.isRoot) {
        clonedSelf.documentObject = null;
      }
      clonedSelf.attribs = {};
      ref1 = this.attribs;
      for (attName in ref1) {
        if (!hasProp.call(ref1, attName)) continue;
        att = ref1[attName];
        clonedSelf.attribs[attName] = att.clone();
      }
      clonedSelf.children = [];
      this.children.forEach(function(child) {
        var clonedChild;
        clonedChild = child.clone();
        clonedChild.parent = clonedSelf;
        return clonedSelf.children.push(clonedChild);
      });
      return clonedSelf;
    };

    XMLElement.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (name != null) {
        name = getValue(name);
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (this.options.keepNullAttributes && (value == null)) {
          this.attribs[name] = new XMLAttribute(this, name, "");
        } else if (value != null) {
          this.attribs[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLElement.prototype.removeAttribute = function(name) {
      var attName, j, len;
      if (name == null) {
        throw new Error("Missing attribute name. " + this.debugInfo());
      }
      name = getValue(name);
      if (Array.isArray(name)) {
        for (j = 0, len = name.length; j < len; j++) {
          attName = name[j];
          delete this.attribs[attName];
        }
      } else {
        delete this.attribs[name];
      }
      return this;
    };

    XMLElement.prototype.toString = function(options) {
      return this.options.writer.element(this, this.options.writer.filterOptions(options));
    };

    XMLElement.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.getAttribute = function(name) {
      if (this.attribs.hasOwnProperty(name)) {
        return this.attribs[name].value;
      } else {
        return null;
      }
    };

    XMLElement.prototype.setAttribute = function(name, value) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getAttributeNode = function(name) {
      if (this.attribs.hasOwnProperty(name)) {
        return this.attribs[name];
      } else {
        return null;
      }
    };

    XMLElement.prototype.setAttributeNode = function(newAttr) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.removeAttributeNode = function(oldAttr) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getElementsByTagName = function(name) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getAttributeNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.removeAttributeNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.setAttributeNodeNS = function(newAttr) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.hasAttribute = function(name) {
      return this.attribs.hasOwnProperty(name);
    };

    XMLElement.prototype.hasAttributeNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.setIdAttribute = function(name, isId) {
      if (this.attribs.hasOwnProperty(name)) {
        return this.attribs[name].isId;
      } else {
        return isId;
      }
    };

    XMLElement.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.setIdAttributeNode = function(idAttr, isId) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getElementsByTagName = function(tagname) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.getElementsByClassName = function(classNames) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLElement.prototype.isEqualNode = function(node) {
      var i, j, ref1;
      if (!XMLElement.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
        return false;
      }
      if (node.namespaceURI !== this.namespaceURI) {
        return false;
      }
      if (node.prefix !== this.prefix) {
        return false;
      }
      if (node.localName !== this.localName) {
        return false;
      }
      if (node.attribs.length !== this.attribs.length) {
        return false;
      }
      for (i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
        if (!this.attribs[i].isEqualNode(node.attribs[i])) {
          return false;
        }
      }
      return true;
    };

    return XMLElement;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNamedNodeMap.js":
/*!*********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLNamedNodeMap;

  module.exports = XMLNamedNodeMap = (function() {
    function XMLNamedNodeMap(nodes) {
      this.nodes = nodes;
    }

    Object.defineProperty(XMLNamedNodeMap.prototype, 'length', {
      get: function() {
        return Object.keys(this.nodes).length || 0;
      }
    });

    XMLNamedNodeMap.prototype.clone = function() {
      return this.nodes = null;
    };

    XMLNamedNodeMap.prototype.getNamedItem = function(name) {
      return this.nodes[name];
    };

    XMLNamedNodeMap.prototype.setNamedItem = function(node) {
      var oldNode;
      oldNode = this.nodes[node.nodeName];
      this.nodes[node.nodeName] = node;
      return oldNode || null;
    };

    XMLNamedNodeMap.prototype.removeNamedItem = function(name) {
      var oldNode;
      oldNode = this.nodes[name];
      delete this.nodes[name];
      return oldNode || null;
    };

    XMLNamedNodeMap.prototype.item = function(index) {
      return this.nodes[Object.keys(this.nodes)[index]] || null;
    };

    XMLNamedNodeMap.prototype.getNamedItemNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented.");
    };

    XMLNamedNodeMap.prototype.setNamedItemNS = function(node) {
      throw new Error("This DOM method is not implemented.");
    };

    XMLNamedNodeMap.prototype.removeNamedItemNS = function(namespaceURI, localName) {
      throw new Error("This DOM method is not implemented.");
    };

    return XMLNamedNodeMap;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js":
/*!*************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLNode.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1,
    hasProp = {}.hasOwnProperty;

  ref1 = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js"), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;

  XMLElement = null;

  XMLCData = null;

  XMLComment = null;

  XMLDeclaration = null;

  XMLDocType = null;

  XMLRaw = null;

  XMLText = null;

  XMLProcessingInstruction = null;

  XMLDummy = null;

  NodeType = null;

  XMLNodeList = null;

  XMLNamedNodeMap = null;

  DocumentPosition = null;

  module.exports = XMLNode = (function() {
    function XMLNode(parent1) {
      this.parent = parent1;
      if (this.parent) {
        this.options = this.parent.options;
        this.stringify = this.parent.stringify;
      }
      this.value = null;
      this.children = [];
      this.baseURI = null;
      if (!XMLElement) {
        XMLElement = __webpack_require__(/*! ./XMLElement */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLElement.js");
        XMLCData = __webpack_require__(/*! ./XMLCData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCData.js");
        XMLComment = __webpack_require__(/*! ./XMLComment */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLComment.js");
        XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDeclaration.js");
        XMLDocType = __webpack_require__(/*! ./XMLDocType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocType.js");
        XMLRaw = __webpack_require__(/*! ./XMLRaw */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLRaw.js");
        XMLText = __webpack_require__(/*! ./XMLText */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLText.js");
        XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLProcessingInstruction.js");
        XMLDummy = __webpack_require__(/*! ./XMLDummy */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDummy.js");
        NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");
        XMLNodeList = __webpack_require__(/*! ./XMLNodeList */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNodeList.js");
        XMLNamedNodeMap = __webpack_require__(/*! ./XMLNamedNodeMap */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNamedNodeMap.js");
        DocumentPosition = __webpack_require__(/*! ./DocumentPosition */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\DocumentPosition.js");
      }
    }

    Object.defineProperty(XMLNode.prototype, 'nodeName', {
      get: function() {
        return this.name;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'nodeType', {
      get: function() {
        return this.type;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'nodeValue', {
      get: function() {
        return this.value;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'parentNode', {
      get: function() {
        return this.parent;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'childNodes', {
      get: function() {
        if (!this.childNodeList || !this.childNodeList.nodes) {
          this.childNodeList = new XMLNodeList(this.children);
        }
        return this.childNodeList;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'firstChild', {
      get: function() {
        return this.children[0] || null;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'lastChild', {
      get: function() {
        return this.children[this.children.length - 1] || null;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'previousSibling', {
      get: function() {
        var i;
        i = this.parent.children.indexOf(this);
        return this.parent.children[i - 1] || null;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'nextSibling', {
      get: function() {
        var i;
        i = this.parent.children.indexOf(this);
        return this.parent.children[i + 1] || null;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'ownerDocument', {
      get: function() {
        return this.document() || null;
      }
    });

    Object.defineProperty(XMLNode.prototype, 'textContent', {
      get: function() {
        var child, j, len, ref2, str;
        if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
          str = '';
          ref2 = this.children;
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            if (child.textContent) {
              str += child.textContent;
            }
          }
          return str;
        } else {
          return null;
        }
      },
      set: function(value) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });

    XMLNode.prototype.setParent = function(parent) {
      var child, j, len, ref2, results;
      this.parent = parent;
      if (parent) {
        this.options = parent.options;
        this.stringify = parent.stringify;
      }
      ref2 = this.children;
      results = [];
      for (j = 0, len = ref2.length; j < len; j++) {
        child = ref2[j];
        results.push(child.setParent(this));
      }
      return results;
    };

    XMLNode.prototype.element = function(name, attributes, text) {
      var childNode, item, j, k, key, lastChild, len, len1, ref2, ref3, val;
      lastChild = null;
      if (attributes === null && (text == null)) {
        ref2 = [{}, null], attributes = ref2[0], text = ref2[1];
      }
      if (attributes == null) {
        attributes = {};
      }
      attributes = getValue(attributes);
      if (!isObject(attributes)) {
        ref3 = [attributes, text], text = ref3[0], attributes = ref3[1];
      }
      if (name != null) {
        name = getValue(name);
      }
      if (Array.isArray(name)) {
        for (j = 0, len = name.length; j < len; j++) {
          item = name[j];
          lastChild = this.element(item);
        }
      } else if (isFunction(name)) {
        lastChild = this.element(name.apply());
      } else if (isObject(name)) {
        for (key in name) {
          if (!hasProp.call(name, key)) continue;
          val = name[key];
          if (isFunction(val)) {
            val = val.apply();
          }
          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
          } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
            lastChild = this.dummy();
          } else if (isObject(val) && isEmpty(val)) {
            lastChild = this.element(key);
          } else if (!this.options.keepNullNodes && (val == null)) {
            lastChild = this.dummy();
          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
            for (k = 0, len1 = val.length; k < len1; k++) {
              item = val[k];
              childNode = {};
              childNode[key] = item;
              lastChild = this.element(childNode);
            }
          } else if (isObject(val)) {
            if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
              lastChild = this.element(val);
            } else {
              lastChild = this.element(key);
              lastChild.element(val);
            }
          } else {
            lastChild = this.element(key, val);
          }
        }
      } else if (!this.options.keepNullNodes && text === null) {
        lastChild = this.dummy();
      } else {
        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
          lastChild = this.text(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
          lastChild = this.cdata(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
          lastChild = this.comment(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
          lastChild = this.raw(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
          lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
        } else {
          lastChild = this.node(name, attributes, text);
        }
      }
      if (lastChild == null) {
        throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
      }
      return lastChild;
    };

    XMLNode.prototype.insertBefore = function(name, attributes, text) {
      var child, i, newChild, refChild, removed;
      if (name != null ? name.type : void 0) {
        newChild = name;
        refChild = attributes;
        newChild.setParent(this);
        if (refChild) {
          i = children.indexOf(refChild);
          removed = children.splice(i);
          children.push(newChild);
          Array.prototype.push.apply(children, removed);
        } else {
          children.push(newChild);
        }
        return newChild;
      } else {
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      }
    };

    XMLNode.prototype.insertAfter = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.remove = function() {
      var i, ref2;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element. " + this.debugInfo());
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref2 = [])), ref2;
      return this.parent;
    };

    XMLNode.prototype.node = function(name, attributes, text) {
      var child, ref2;
      if (name != null) {
        name = getValue(name);
      }
      attributes || (attributes = {});
      attributes = getValue(attributes);
      if (!isObject(attributes)) {
        ref2 = [attributes, text], text = ref2[0], attributes = ref2[1];
      }
      child = new XMLElement(this, name, attributes);
      if (text != null) {
        child.text(text);
      }
      this.children.push(child);
      return child;
    };

    XMLNode.prototype.text = function(value) {
      var child;
      if (isObject(value)) {
        this.element(value);
      }
      child = new XMLText(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.commentBefore = function(value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.comment(value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.commentAfter = function(value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.comment(value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.raw = function(value) {
      var child;
      child = new XMLRaw(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.dummy = function() {
      var child;
      child = new XMLDummy(this);
      return child;
    };

    XMLNode.prototype.instruction = function(target, value) {
      var insTarget, insValue, instruction, j, len;
      if (target != null) {
        target = getValue(target);
      }
      if (value != null) {
        value = getValue(value);
      }
      if (Array.isArray(target)) {
        for (j = 0, len = target.length; j < len; j++) {
          insTarget = target[j];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        instruction = new XMLProcessingInstruction(this, target, value);
        this.children.push(instruction);
      }
      return this;
    };

    XMLNode.prototype.instructionBefore = function(target, value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.instruction(target, value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.instructionAfter = function(target, value) {
      var child, i, removed;
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.instruction(target, value);
      Array.prototype.push.apply(this.parent.children, removed);
      return this;
    };

    XMLNode.prototype.declaration = function(version, encoding, standalone) {
      var doc, xmldec;
      doc = this.document();
      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
      if (doc.children.length === 0) {
        doc.children.unshift(xmldec);
      } else if (doc.children[0].type === NodeType.Declaration) {
        doc.children[0] = xmldec;
      } else {
        doc.children.unshift(xmldec);
      }
      return doc.root() || doc;
    };

    XMLNode.prototype.dtd = function(pubID, sysID) {
      var child, doc, doctype, i, j, k, len, len1, ref2, ref3;
      doc = this.document();
      doctype = new XMLDocType(doc, pubID, sysID);
      ref2 = doc.children;
      for (i = j = 0, len = ref2.length; j < len; i = ++j) {
        child = ref2[i];
        if (child.type === NodeType.DocType) {
          doc.children[i] = doctype;
          return doctype;
        }
      }
      ref3 = doc.children;
      for (i = k = 0, len1 = ref3.length; k < len1; i = ++k) {
        child = ref3[i];
        if (child.isRoot) {
          doc.children.splice(i, 0, doctype);
          return doctype;
        }
      }
      doc.children.push(doctype);
      return doctype;
    };

    XMLNode.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLNode.prototype.root = function() {
      var node;
      node = this;
      while (node) {
        if (node.type === NodeType.Document) {
          return node.rootObject;
        } else if (node.isRoot) {
          return node;
        } else {
          node = node.parent;
        }
      }
    };

    XMLNode.prototype.document = function() {
      var node;
      node = this;
      while (node) {
        if (node.type === NodeType.Document) {
          return node;
        } else {
          node = node.parent;
        }
      }
    };

    XMLNode.prototype.end = function(options) {
      return this.document().end(options);
    };

    XMLNode.prototype.prev = function() {
      var i;
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node. " + this.debugInfo());
      }
      return this.parent.children[i - 1];
    };

    XMLNode.prototype.next = function() {
      var i;
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node. " + this.debugInfo());
      }
      return this.parent.children[i + 1];
    };

    XMLNode.prototype.importDocument = function(doc) {
      var clonedRoot;
      clonedRoot = doc.root().clone();
      clonedRoot.parent = this;
      clonedRoot.isRoot = false;
      this.children.push(clonedRoot);
      return this;
    };

    XMLNode.prototype.debugInfo = function(name) {
      var ref2, ref3;
      name = name || this.name;
      if ((name == null) && !((ref2 = this.parent) != null ? ref2.name : void 0)) {
        return "";
      } else if (name == null) {
        return "parent: <" + this.parent.name + ">";
      } else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) {
        return "node: <" + name + ">";
      } else {
        return "node: <" + name + ">, parent: <" + this.parent.name + ">";
      }
    };

    XMLNode.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLNode.prototype.doc = function() {
      return this.document();
    };

    XMLNode.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLNode.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.t = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLNode.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    XMLNode.prototype.u = function() {
      return this.up();
    };

    XMLNode.prototype.importXMLBuilder = function(doc) {
      return this.importDocument(doc);
    };

    XMLNode.prototype.replaceChild = function(newChild, oldChild) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.removeChild = function(oldChild) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.appendChild = function(newChild) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.hasChildNodes = function() {
      return this.children.length !== 0;
    };

    XMLNode.prototype.cloneNode = function(deep) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.normalize = function() {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.isSupported = function(feature, version) {
      return true;
    };

    XMLNode.prototype.hasAttributes = function() {
      return this.attribs.length !== 0;
    };

    XMLNode.prototype.compareDocumentPosition = function(other) {
      var ref, res;
      ref = this;
      if (ref === other) {
        return 0;
      } else if (this.document() !== other.document()) {
        res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
        if (Math.random() < 0.5) {
          res |= DocumentPosition.Preceding;
        } else {
          res |= DocumentPosition.Following;
        }
        return res;
      } else if (ref.isAncestor(other)) {
        return DocumentPosition.Contains | DocumentPosition.Preceding;
      } else if (ref.isDescendant(other)) {
        return DocumentPosition.Contains | DocumentPosition.Following;
      } else if (ref.isPreceding(other)) {
        return DocumentPosition.Preceding;
      } else {
        return DocumentPosition.Following;
      }
    };

    XMLNode.prototype.isSameNode = function(other) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.lookupPrefix = function(namespaceURI) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.isDefaultNamespace = function(namespaceURI) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.lookupNamespaceURI = function(prefix) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.isEqualNode = function(node) {
      var i, j, ref2;
      if (node.nodeType !== this.nodeType) {
        return false;
      }
      if (node.children.length !== this.children.length) {
        return false;
      }
      for (i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) {
        if (!this.children[i].isEqualNode(node.children[i])) {
          return false;
        }
      }
      return true;
    };

    XMLNode.prototype.getFeature = function(feature, version) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.setUserData = function(key, data, handler) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.getUserData = function(key) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLNode.prototype.contains = function(other) {
      if (!other) {
        return false;
      }
      return other === this || this.isDescendant(other);
    };

    XMLNode.prototype.isDescendant = function(node) {
      var child, isDescendantChild, j, len, ref2;
      ref2 = this.children;
      for (j = 0, len = ref2.length; j < len; j++) {
        child = ref2[j];
        if (node === child) {
          return true;
        }
        isDescendantChild = child.isDescendant(node);
        if (isDescendantChild) {
          return true;
        }
      }
      return false;
    };

    XMLNode.prototype.isAncestor = function(node) {
      return node.isDescendant(this);
    };

    XMLNode.prototype.isPreceding = function(node) {
      var nodePos, thisPos;
      nodePos = this.treePosition(node);
      thisPos = this.treePosition(this);
      if (nodePos === -1 || thisPos === -1) {
        return false;
      } else {
        return nodePos < thisPos;
      }
    };

    XMLNode.prototype.isFollowing = function(node) {
      var nodePos, thisPos;
      nodePos = this.treePosition(node);
      thisPos = this.treePosition(this);
      if (nodePos === -1 || thisPos === -1) {
        return false;
      } else {
        return nodePos > thisPos;
      }
    };

    XMLNode.prototype.treePosition = function(node) {
      var found, pos;
      pos = 0;
      found = false;
      this.foreachTreeNode(this.document(), function(childNode) {
        pos++;
        if (!found && childNode === node) {
          return found = true;
        }
      });
      if (found) {
        return pos;
      } else {
        return -1;
      }
    };

    XMLNode.prototype.foreachTreeNode = function(node, func) {
      var child, j, len, ref2, res;
      node || (node = this.document());
      ref2 = node.children;
      for (j = 0, len = ref2.length; j < len; j++) {
        child = ref2[j];
        if (res = func(child)) {
          return res;
        } else {
          res = this.foreachTreeNode(child, func);
          if (res) {
            return res;
          }
        }
      }
    };

    return XMLNode;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNodeList.js":
/*!*****************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLNodeList.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLNodeList;

  module.exports = XMLNodeList = (function() {
    function XMLNodeList(nodes) {
      this.nodes = nodes;
    }

    Object.defineProperty(XMLNodeList.prototype, 'length', {
      get: function() {
        return this.nodes.length || 0;
      }
    });

    XMLNodeList.prototype.clone = function() {
      return this.nodes = null;
    };

    XMLNodeList.prototype.item = function(index) {
      return this.nodes[index] || null;
    };

    return XMLNodeList;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLProcessingInstruction.js":
/*!******************************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLCharacterData, XMLProcessingInstruction,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCharacterData.js");

  module.exports = XMLProcessingInstruction = (function(superClass) {
    extend(XMLProcessingInstruction, superClass);

    function XMLProcessingInstruction(parent, target, value) {
      XMLProcessingInstruction.__super__.constructor.call(this, parent);
      if (target == null) {
        throw new Error("Missing instruction target. " + this.debugInfo());
      }
      this.type = NodeType.ProcessingInstruction;
      this.target = this.stringify.insTarget(target);
      this.name = this.target;
      if (value) {
        this.value = this.stringify.insValue(value);
      }
    }

    XMLProcessingInstruction.prototype.clone = function() {
      return Object.create(this);
    };

    XMLProcessingInstruction.prototype.toString = function(options) {
      return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
    };

    XMLProcessingInstruction.prototype.isEqualNode = function(node) {
      if (!XMLProcessingInstruction.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
        return false;
      }
      if (node.target !== this.target) {
        return false;
      }
      return true;
    };

    return XMLProcessingInstruction;

  })(XMLCharacterData);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLRaw.js":
/*!************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLRaw.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLNode, XMLRaw,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLNode = __webpack_require__(/*! ./XMLNode */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLNode.js");

  module.exports = XMLRaw = (function(superClass) {
    extend(XMLRaw, superClass);

    function XMLRaw(parent, text) {
      XMLRaw.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing raw text. " + this.debugInfo());
      }
      this.type = NodeType.Raw;
      this.value = this.stringify.raw(text);
    }

    XMLRaw.prototype.clone = function() {
      return Object.create(this);
    };

    XMLRaw.prototype.toString = function(options) {
      return this.options.writer.raw(this, this.options.writer.filterOptions(options));
    };

    return XMLRaw;

  })(XMLNode);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStreamWriter.js":
/*!*********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLStreamWriter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, WriterState, XMLStreamWriter, XMLWriterBase,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLWriterBase = __webpack_require__(/*! ./XMLWriterBase */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLWriterBase.js");

  WriterState = __webpack_require__(/*! ./WriterState */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\WriterState.js");

  module.exports = XMLStreamWriter = (function(superClass) {
    extend(XMLStreamWriter, superClass);

    function XMLStreamWriter(stream, options) {
      this.stream = stream;
      XMLStreamWriter.__super__.constructor.call(this, options);
    }

    XMLStreamWriter.prototype.endline = function(node, options, level) {
      if (node.isLastRootNode && options.state === WriterState.CloseTag) {
        return '';
      } else {
        return XMLStreamWriter.__super__.endline.call(this, node, options, level);
      }
    };

    XMLStreamWriter.prototype.document = function(doc, options) {
      var child, i, j, k, len, len1, ref, ref1, results;
      ref = doc.children;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        child = ref[i];
        child.isLastRootNode = i === doc.children.length - 1;
      }
      options = this.filterOptions(options);
      ref1 = doc.children;
      results = [];
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        child = ref1[k];
        results.push(this.writeChildNode(child, options, 0));
      }
      return results;
    };

    XMLStreamWriter.prototype.attribute = function(att, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.attribute.call(this, att, options, level));
    };

    XMLStreamWriter.prototype.cdata = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.cdata.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.comment = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.comment.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.declaration = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.declaration.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.docType = function(node, options, level) {
      var child, j, len, ref;
      level || (level = 0);
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      this.stream.write(this.indent(node, options, level));
      this.stream.write('<!DOCTYPE ' + node.root().name);
      if (node.pubID && node.sysID) {
        this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
      } else if (node.sysID) {
        this.stream.write(' SYSTEM "' + node.sysID + '"');
      }
      if (node.children.length > 0) {
        this.stream.write(' [');
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.InsideTag;
        ref = node.children;
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          this.writeChildNode(child, options, level + 1);
        }
        options.state = WriterState.CloseTag;
        this.stream.write(']');
      }
      options.state = WriterState.CloseTag;
      this.stream.write(options.spaceBeforeSlash + '>');
      this.stream.write(this.endline(node, options, level));
      options.state = WriterState.None;
      return this.closeNode(node, options, level);
    };

    XMLStreamWriter.prototype.element = function(node, options, level) {
      var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
      level || (level = 0);
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      this.stream.write(this.indent(node, options, level) + '<' + node.name);
      ref = node.attribs;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        att = ref[name];
        this.attribute(att, options, level);
      }
      childNodeCount = node.children.length;
      firstChildNode = childNodeCount === 0 ? null : node.children[0];
      if (childNodeCount === 0 || node.children.every(function(e) {
        return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
      })) {
        if (options.allowEmpty) {
          this.stream.write('>');
          options.state = WriterState.CloseTag;
          this.stream.write('</' + node.name + '>');
        } else {
          options.state = WriterState.CloseTag;
          this.stream.write(options.spaceBeforeSlash + '/>');
        }
      } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && (firstChildNode.value != null)) {
        this.stream.write('>');
        options.state = WriterState.InsideTag;
        options.suppressPrettyCount++;
        prettySuppressed = true;
        this.writeChildNode(firstChildNode, options, level + 1);
        options.suppressPrettyCount--;
        prettySuppressed = false;
        options.state = WriterState.CloseTag;
        this.stream.write('</' + node.name + '>');
      } else {
        this.stream.write('>' + this.endline(node, options, level));
        options.state = WriterState.InsideTag;
        ref1 = node.children;
        for (j = 0, len = ref1.length; j < len; j++) {
          child = ref1[j];
          this.writeChildNode(child, options, level + 1);
        }
        options.state = WriterState.CloseTag;
        this.stream.write(this.indent(node, options, level) + '</' + node.name + '>');
      }
      this.stream.write(this.endline(node, options, level));
      options.state = WriterState.None;
      return this.closeNode(node, options, level);
    };

    XMLStreamWriter.prototype.processingInstruction = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.processingInstruction.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.raw = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.raw.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.text = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.text.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.dtdAttList = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.dtdAttList.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.dtdElement = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.dtdElement.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.dtdEntity = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.dtdEntity.call(this, node, options, level));
    };

    XMLStreamWriter.prototype.dtdNotation = function(node, options, level) {
      return this.stream.write(XMLStreamWriter.__super__.dtdNotation.call(this, node, options, level));
    };

    return XMLStreamWriter;

  })(XMLWriterBase);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringWriter.js":
/*!*********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLStringWriter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLStringWriter, XMLWriterBase,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLWriterBase = __webpack_require__(/*! ./XMLWriterBase */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLWriterBase.js");

  module.exports = XMLStringWriter = (function(superClass) {
    extend(XMLStringWriter, superClass);

    function XMLStringWriter(options) {
      XMLStringWriter.__super__.constructor.call(this, options);
    }

    XMLStringWriter.prototype.document = function(doc, options) {
      var child, i, len, r, ref;
      options = this.filterOptions(options);
      r = '';
      ref = doc.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        r += this.writeChildNode(child, options, 0);
      }
      if (options.pretty && r.slice(-options.newline.length) === options.newline) {
        r = r.slice(0, -options.newline.length);
      }
      return r;
    };

    return XMLStringWriter;

  })(XMLWriterBase);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringifier.js":
/*!********************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLStringifier.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.7
(function() {
  var XMLStringifier,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    hasProp = {}.hasOwnProperty;

  module.exports = XMLStringifier = (function() {
    function XMLStringifier(options) {
      this.assertLegalName = bind(this.assertLegalName, this);
      this.assertLegalChar = bind(this.assertLegalChar, this);
      var key, ref, value;
      options || (options = {});
      this.options = options;
      if (!this.options.version) {
        this.options.version = '1.0';
      }
      ref = options.stringify || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this[key] = value;
      }
    }

    XMLStringifier.prototype.name = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalName('' + val || '');
    };

    XMLStringifier.prototype.text = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar(this.textEscape('' + val || ''));
    };

    XMLStringifier.prototype.cdata = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      val = '' + val || '';
      val = val.replace(']]>', ']]]]><![CDATA[>');
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.comment = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      val = '' + val || '';
      if (val.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.raw = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return '' + val || '';
    };

    XMLStringifier.prototype.attValue = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar(this.attEscape(val = '' + val || ''));
    };

    XMLStringifier.prototype.insTarget = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.insValue = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      val = '' + val || '';
      if (val.match(/\?>/)) {
        throw new Error("Invalid processing instruction value: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.xmlVersion = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      val = '' + val || '';
      if (!val.match(/1\.[0-9]+/)) {
        throw new Error("Invalid version number: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlEncoding = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      val = '' + val || '';
      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
        throw new Error("Invalid encoding: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.xmlStandalone = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      if (val) {
        return "yes";
      } else {
        return "no";
      }
    };

    XMLStringifier.prototype.dtdPubID = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.dtdSysID = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.dtdElementValue = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.dtdAttType = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.dtdAttDefault = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.dtdEntityValue = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.dtdNData = function(val) {
      if (this.options.noValidation) {
        return val;
      }
      return this.assertLegalChar('' + val || '');
    };

    XMLStringifier.prototype.convertAttKey = '@';

    XMLStringifier.prototype.convertPIKey = '?';

    XMLStringifier.prototype.convertTextKey = '#text';

    XMLStringifier.prototype.convertCDataKey = '#cdata';

    XMLStringifier.prototype.convertCommentKey = '#comment';

    XMLStringifier.prototype.convertRawKey = '#raw';

    XMLStringifier.prototype.assertLegalChar = function(str) {
      var regex, res;
      if (this.options.noValidation) {
        return str;
      }
      regex = '';
      if (this.options.version === '1.0') {
        regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
        if (res = str.match(regex)) {
          throw new Error("Invalid character in string: " + str + " at index " + res.index);
        }
      } else if (this.options.version === '1.1') {
        regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
        if (res = str.match(regex)) {
          throw new Error("Invalid character in string: " + str + " at index " + res.index);
        }
      }
      return str;
    };

    XMLStringifier.prototype.assertLegalName = function(str) {
      var regex;
      if (this.options.noValidation) {
        return str;
      }
      this.assertLegalChar(str);
      regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
      if (!str.match(regex)) {
        throw new Error("Invalid character in name");
      }
      return str;
    };

    XMLStringifier.prototype.textEscape = function(str) {
      var ampregex;
      if (this.options.noValidation) {
        return str;
      }
      ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
    };

    XMLStringifier.prototype.attEscape = function(str) {
      var ampregex;
      if (this.options.noValidation) {
        return str;
      }
      ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
    };

    return XMLStringifier;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLText.js":
/*!*************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLText.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, XMLCharacterData, XMLText,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLCharacterData = __webpack_require__(/*! ./XMLCharacterData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCharacterData.js");

  module.exports = XMLText = (function(superClass) {
    extend(XMLText, superClass);

    function XMLText(parent, text) {
      XMLText.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing element text. " + this.debugInfo());
      }
      this.name = "#text";
      this.type = NodeType.Text;
      this.value = this.stringify.text(text);
    }

    Object.defineProperty(XMLText.prototype, 'isElementContentWhitespace', {
      get: function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });

    Object.defineProperty(XMLText.prototype, 'wholeText', {
      get: function() {
        var next, prev, str;
        str = '';
        prev = this.previousSibling;
        while (prev) {
          str = prev.data + str;
          prev = prev.previousSibling;
        }
        str += this.data;
        next = this.nextSibling;
        while (next) {
          str = str + next.data;
          next = next.nextSibling;
        }
        return str;
      }
    });

    XMLText.prototype.clone = function() {
      return Object.create(this);
    };

    XMLText.prototype.toString = function(options) {
      return this.options.writer.text(this, this.options.writer.filterOptions(options));
    };

    XMLText.prototype.splitText = function(offset) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    XMLText.prototype.replaceWholeText = function(content) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };

    return XMLText;

  })(XMLCharacterData);

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLWriterBase.js":
/*!*******************************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/XMLWriterBase.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign,
    hasProp = {}.hasOwnProperty;

  assign = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js").assign;

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  XMLDeclaration = __webpack_require__(/*! ./XMLDeclaration */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDeclaration.js");

  XMLDocType = __webpack_require__(/*! ./XMLDocType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocType.js");

  XMLCData = __webpack_require__(/*! ./XMLCData */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLCData.js");

  XMLComment = __webpack_require__(/*! ./XMLComment */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLComment.js");

  XMLElement = __webpack_require__(/*! ./XMLElement */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLElement.js");

  XMLRaw = __webpack_require__(/*! ./XMLRaw */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLRaw.js");

  XMLText = __webpack_require__(/*! ./XMLText */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLText.js");

  XMLProcessingInstruction = __webpack_require__(/*! ./XMLProcessingInstruction */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLProcessingInstruction.js");

  XMLDummy = __webpack_require__(/*! ./XMLDummy */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDummy.js");

  XMLDTDAttList = __webpack_require__(/*! ./XMLDTDAttList */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDAttList.js");

  XMLDTDElement = __webpack_require__(/*! ./XMLDTDElement */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDElement.js");

  XMLDTDEntity = __webpack_require__(/*! ./XMLDTDEntity */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDEntity.js");

  XMLDTDNotation = __webpack_require__(/*! ./XMLDTDNotation */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDTDNotation.js");

  WriterState = __webpack_require__(/*! ./WriterState */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\WriterState.js");

  module.exports = XMLWriterBase = (function() {
    function XMLWriterBase(options) {
      var key, ref, value;
      options || (options = {});
      this.options = options;
      ref = options.writer || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this["_" + key] = this[key];
        this[key] = value;
      }
    }

    XMLWriterBase.prototype.filterOptions = function(options) {
      var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
      options || (options = {});
      options = assign({}, this.options, options);
      filteredOptions = {
        writer: this
      };
      filteredOptions.pretty = options.pretty || false;
      filteredOptions.allowEmpty = options.allowEmpty || false;
      filteredOptions.indent = (ref = options.indent) != null ? ref : '  ';
      filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : '\n';
      filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
      filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
      filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : '';
      if (filteredOptions.spaceBeforeSlash === true) {
        filteredOptions.spaceBeforeSlash = ' ';
      }
      filteredOptions.suppressPrettyCount = 0;
      filteredOptions.user = {};
      filteredOptions.state = WriterState.None;
      return filteredOptions;
    };

    XMLWriterBase.prototype.indent = function(node, options, level) {
      var indentLevel;
      if (!options.pretty || options.suppressPrettyCount) {
        return '';
      } else if (options.pretty) {
        indentLevel = (level || 0) + options.offset + 1;
        if (indentLevel > 0) {
          return new Array(indentLevel).join(options.indent);
        }
      }
      return '';
    };

    XMLWriterBase.prototype.endline = function(node, options, level) {
      if (!options.pretty || options.suppressPrettyCount) {
        return '';
      } else {
        return options.newline;
      }
    };

    XMLWriterBase.prototype.attribute = function(att, options, level) {
      var r;
      this.openAttribute(att, options, level);
      r = ' ' + att.name + '="' + att.value + '"';
      this.closeAttribute(att, options, level);
      return r;
    };

    XMLWriterBase.prototype.cdata = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<![CDATA[';
      options.state = WriterState.InsideTag;
      r += node.value;
      options.state = WriterState.CloseTag;
      r += ']]>' + this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.comment = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<!-- ';
      options.state = WriterState.InsideTag;
      r += node.value;
      options.state = WriterState.CloseTag;
      r += ' -->' + this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.declaration = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<?xml';
      options.state = WriterState.InsideTag;
      r += ' version="' + node.version + '"';
      if (node.encoding != null) {
        r += ' encoding="' + node.encoding + '"';
      }
      if (node.standalone != null) {
        r += ' standalone="' + node.standalone + '"';
      }
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '?>';
      r += this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.docType = function(node, options, level) {
      var child, i, len, r, ref;
      level || (level = 0);
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level);
      r += '<!DOCTYPE ' + node.root().name;
      if (node.pubID && node.sysID) {
        r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
      } else if (node.sysID) {
        r += ' SYSTEM "' + node.sysID + '"';
      }
      if (node.children.length > 0) {
        r += ' [';
        r += this.endline(node, options, level);
        options.state = WriterState.InsideTag;
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += this.writeChildNode(child, options, level + 1);
        }
        options.state = WriterState.CloseTag;
        r += ']';
      }
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '>';
      r += this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.element = function(node, options, level) {
      var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
      level || (level = 0);
      prettySuppressed = false;
      r = '';
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r += this.indent(node, options, level) + '<' + node.name;
      ref = node.attribs;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        att = ref[name];
        r += this.attribute(att, options, level);
      }
      childNodeCount = node.children.length;
      firstChildNode = childNodeCount === 0 ? null : node.children[0];
      if (childNodeCount === 0 || node.children.every(function(e) {
        return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
      })) {
        if (options.allowEmpty) {
          r += '>';
          options.state = WriterState.CloseTag;
          r += '</' + node.name + '>' + this.endline(node, options, level);
        } else {
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + '/>' + this.endline(node, options, level);
        }
      } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && (firstChildNode.value != null)) {
        r += '>';
        options.state = WriterState.InsideTag;
        options.suppressPrettyCount++;
        prettySuppressed = true;
        r += this.writeChildNode(firstChildNode, options, level + 1);
        options.suppressPrettyCount--;
        prettySuppressed = false;
        options.state = WriterState.CloseTag;
        r += '</' + node.name + '>' + this.endline(node, options, level);
      } else {
        if (options.dontPrettyTextNodes) {
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            if ((child.type === NodeType.Text || child.type === NodeType.Raw) && (child.value != null)) {
              options.suppressPrettyCount++;
              prettySuppressed = true;
              break;
            }
          }
        }
        r += '>' + this.endline(node, options, level);
        options.state = WriterState.InsideTag;
        ref2 = node.children;
        for (j = 0, len1 = ref2.length; j < len1; j++) {
          child = ref2[j];
          r += this.writeChildNode(child, options, level + 1);
        }
        options.state = WriterState.CloseTag;
        r += this.indent(node, options, level) + '</' + node.name + '>';
        if (prettySuppressed) {
          options.suppressPrettyCount--;
        }
        r += this.endline(node, options, level);
        options.state = WriterState.None;
      }
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.writeChildNode = function(node, options, level) {
      switch (node.type) {
        case NodeType.CData:
          return this.cdata(node, options, level);
        case NodeType.Comment:
          return this.comment(node, options, level);
        case NodeType.Element:
          return this.element(node, options, level);
        case NodeType.Raw:
          return this.raw(node, options, level);
        case NodeType.Text:
          return this.text(node, options, level);
        case NodeType.ProcessingInstruction:
          return this.processingInstruction(node, options, level);
        case NodeType.Dummy:
          return '';
        case NodeType.Declaration:
          return this.declaration(node, options, level);
        case NodeType.DocType:
          return this.docType(node, options, level);
        case NodeType.AttributeDeclaration:
          return this.dtdAttList(node, options, level);
        case NodeType.ElementDeclaration:
          return this.dtdElement(node, options, level);
        case NodeType.EntityDeclaration:
          return this.dtdEntity(node, options, level);
        case NodeType.NotationDeclaration:
          return this.dtdNotation(node, options, level);
        default:
          throw new Error("Unknown XML node type: " + node.constructor.name);
      }
    };

    XMLWriterBase.prototype.processingInstruction = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<?';
      options.state = WriterState.InsideTag;
      r += node.target;
      if (node.value) {
        r += ' ' + node.value;
      }
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '?>';
      r += this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.raw = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level);
      options.state = WriterState.InsideTag;
      r += node.value;
      options.state = WriterState.CloseTag;
      r += this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.text = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level);
      options.state = WriterState.InsideTag;
      r += node.value;
      options.state = WriterState.CloseTag;
      r += this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.dtdAttList = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<!ATTLIST';
      options.state = WriterState.InsideTag;
      r += ' ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
      if (node.defaultValueType !== '#DEFAULT') {
        r += ' ' + node.defaultValueType;
      }
      if (node.defaultValue) {
        r += ' "' + node.defaultValue + '"';
      }
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.dtdElement = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<!ELEMENT';
      options.state = WriterState.InsideTag;
      r += ' ' + node.name + ' ' + node.value;
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.dtdEntity = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<!ENTITY';
      options.state = WriterState.InsideTag;
      if (node.pe) {
        r += ' %';
      }
      r += ' ' + node.name;
      if (node.value) {
        r += ' "' + node.value + '"';
      } else {
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.nData) {
          r += ' NDATA ' + node.nData;
        }
      }
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.dtdNotation = function(node, options, level) {
      var r;
      this.openNode(node, options, level);
      options.state = WriterState.OpenTag;
      r = this.indent(node, options, level) + '<!NOTATION';
      options.state = WriterState.InsideTag;
      r += ' ' + node.name;
      if (node.pubID && node.sysID) {
        r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
      } else if (node.pubID) {
        r += ' PUBLIC "' + node.pubID + '"';
      } else if (node.sysID) {
        r += ' SYSTEM "' + node.sysID + '"';
      }
      options.state = WriterState.CloseTag;
      r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
      options.state = WriterState.None;
      this.closeNode(node, options, level);
      return r;
    };

    XMLWriterBase.prototype.openNode = function(node, options, level) {};

    XMLWriterBase.prototype.closeNode = function(node, options, level) {};

    XMLWriterBase.prototype.openAttribute = function(att, options, level) {};

    XMLWriterBase.prototype.closeAttribute = function(att, options, level) {};

    return XMLWriterBase;

  })();

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\index.js":
/*!***********************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/node_modules/xmlbuilder/lib/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.7
(function() {
  var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;

  ref = __webpack_require__(/*! ./Utility */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\Utility.js"), assign = ref.assign, isFunction = ref.isFunction;

  XMLDOMImplementation = __webpack_require__(/*! ./XMLDOMImplementation */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDOMImplementation.js");

  XMLDocument = __webpack_require__(/*! ./XMLDocument */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocument.js");

  XMLDocumentCB = __webpack_require__(/*! ./XMLDocumentCB */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLDocumentCB.js");

  XMLStringWriter = __webpack_require__(/*! ./XMLStringWriter */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStringWriter.js");

  XMLStreamWriter = __webpack_require__(/*! ./XMLStreamWriter */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\XMLStreamWriter.js");

  NodeType = __webpack_require__(/*! ./NodeType */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\NodeType.js");

  WriterState = __webpack_require__(/*! ./WriterState */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\xmlbuilder\\lib\\WriterState.js");

  module.exports.create = function(name, xmldec, doctype, options) {
    var doc, root;
    if (name == null) {
      throw new Error("Root element needs a name.");
    }
    options = assign({}, xmldec, doctype, options);
    doc = new XMLDocument(options);
    root = doc.element(name);
    if (!options.headless) {
      doc.declaration(options);
      if ((options.pubID != null) || (options.sysID != null)) {
        doc.dtd(options);
      }
    }
    return root;
  };

  module.exports.begin = function(options, onData, onEnd) {
    var ref1;
    if (isFunction(options)) {
      ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
      options = {};
    }
    if (onData) {
      return new XMLDocumentCB(options, onData, onEnd);
    } else {
      return new XMLDocument(options);
    }
  };

  module.exports.stringWriter = function(options) {
    return new XMLStringWriter(options);
  };

  module.exports.streamWriter = function(stream, options) {
    return new XMLStreamWriter(stream, options);
  };

  module.exports.implementation = new XMLDOMImplementation();

  module.exports.nodeType = NodeType;

  module.exports.writerState = WriterState;

}).call(this);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\actions\\session.ts":
/*!*********************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/actions/session.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setWorkshopModFilter = exports.setMismatchState = exports.endMismatchDialog = exports.setCacheCounter = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.setCacheCounter = redux_act_1.createAction('SET_CACHE_COUNTER', (gameMode, totalMods) => ({ gameMode, totalMods }));
exports.endMismatchDialog = redux_act_1.createAction('END_MISMATCH_DIALOG');
exports.setMismatchState = redux_act_1.createAction('SET_MISMATCH_DIALOG_STATE', (state) => state);
exports.setWorkshopModFilter = redux_act_1.createAction('SET_WORKSHOP_MOD_FILTER', (filter) => filter);


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\constants.ts":
/*!***************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/constants.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NS = exports.STEAM_WEB_API_URL = exports.MODS_PER_PAGE = void 0;
exports.MODS_PER_PAGE = 50;
exports.STEAM_WEB_API_URL = 'https://steamcommunity.com/dev/apikey';
exports.NS = 'STEAMKIT';


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\createIPC.ts":
/*!***************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/createIPC.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIPC = void 0;
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
async function createIPC(usePipe, id, cb) {
    const exeName = 'DepotDownloaderIPC.exe';
    return new Promise((resolve, reject) => {
        const args = [id];
        if (usePipe) {
            args.push('--pipe');
        }
        const proc = child_process_1.spawn(path_1.default.join(__dirname, 'dist', exeName), args)
            .on('error', err => {
            reject === null || reject === void 0 ? void 0 : reject(err);
            resolve = reject = undefined;
        })
            .on('exit', (code, signal) => {
            if (code === 0x80131700) {
                reject === null || reject === void 0 ? void 0 : reject(new Error('No compatible .Net Framework, you need .Net framework 6.0 or newer'));
            }
            else if (code !== null) {
                reject === null || reject === void 0 ? void 0 : reject(new Error(`Failed to run depot downloader. Errorcode ${code.toString(16)}`));
            }
            else {
                reject === null || reject === void 0 ? void 0 : reject(new Error(`The depot downloader was terminated. Signal: ${signal}`));
            }
            resolve = reject = undefined;
        });
        cb(proc);
        setTimeout(() => {
            if ((proc.exitCode !== null) && (proc.exitCode !== 0)) {
                reject === null || reject === void 0 ? void 0 : reject(new Error('Failed to spawn depot downloader'));
            }
            else {
                resolve === null || resolve === void 0 ? void 0 : resolve(proc);
            }
            resolve = reject = undefined;
        }, 100);
    });
}
exports.createIPC = createIPC;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\Context.ts":
/*!***********************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/delegates/Context.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const DelegateBase_1 = __importDefault(__webpack_require__(/*! ./DelegateBase */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\DelegateBase.ts"));
const minimatch_1 = __importDefault(__webpack_require__(/*! minimatch */ "minimatch"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const turbowalk_1 = __importDefault(__webpack_require__(/*! turbowalk */ "turbowalk"));
class Context extends DelegateBase_1.default {
    constructor(api, gameId) {
        super(api);
        this.getSteamId = (callback) => {
            var _a, _b, _c, _d, _e, _f;
            vortex_api_1.log('debug', 'getSteamId called');
            return (((_b = (_a = this.gameInfo) === null || _a === void 0 ? void 0 : _a.environment) === null || _b === void 0 ? void 0 : _b.SteamAPPId) || ((_d = (_c = this.gameInfo) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.SteamAPPId)) !== undefined
                ? callback(null, (_f = (_e = this.gameInfo) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.SteamAPPId)
                : callback(new Error('SteamAppId is unavailable'), null);
        };
        this.getExistingDataFile = (fileName, callback) => {
            vortex_api_1.log('debug', 'getExistingDataFile called', fileName);
            const fullPath = this.resolveFilePath(fileName);
            vortex_api_1.fs.readFileAsync(fullPath)
                .then(data => callback(null, data))
                .catch(err => callback(err, null));
        };
        this.getGameFileList = (callback) => {
            vortex_api_1.log('debug', 'getGameFileList called');
            const fullPath = this.gameDiscovery.path;
            const modPath = this.gameInfo.queryModPath(this.gameDiscovery.path);
            const filterFunc = (input) => ((modPath !== '.') && (modPath !== fullPath))
                ? input.filePath.indexOf(modPath) === -1
                : true;
            this.readDir(fullPath, true, filterFunc)
                .then((fileList) => callback(null, fileList))
                .catch(err => callback(err, null));
        };
        this.getExistingDataFileList = (basePath, pattern, recursive, callback) => {
            vortex_api_1.log('debug', 'getExistingDataFileList called', basePath);
            const fullPath = this.resolveFilePath(basePath);
            const filterFunc = (input) => minimatch_1.default(path.basename(input.filePath), pattern);
            this.readDir(fullPath, recursive, filterFunc)
                .then((fileList) => callback(null, fileList))
                .catch(err => callback(err, null));
        };
        this.getDepotIds = (args, callback) => {
            var _a, _b;
            vortex_api_1.log('debug', 'getDepotIds called');
            const appId = (((_a = this.gameInfo) === null || _a === void 0 ? void 0 : _a.details) !== undefined)
                ? Object.keys(this.gameInfo.details).find(key => key.toLowerCase() === 'steamappid')
                : undefined;
            if (!appId || ((_b = this.gameInfo.details) === null || _b === void 0 ? void 0 : _b[appId]) === undefined) {
                callback(new vortex_api_1.util.DataInvalid('Could not find app id'), null);
            }
            else {
                vortex_api_1.util.GameStoreHelper.findByAppId([this.gameInfo.details[appId].toString()], 'steam')
                    .then(gameEntry => {
                    var _a, _b;
                    const installedDepots = (_b = (_a = gameEntry === null || gameEntry === void 0 ? void 0 : gameEntry['manifestData']) === null || _a === void 0 ? void 0 : _a['AppState']) === null || _b === void 0 ? void 0 : _b['InstalledDepots'];
                    if (installedDepots !== undefined) {
                        callback(null, Object.keys(installedDepots));
                    }
                    else {
                        callback(new vortex_api_1.util.DataInvalid('Could not find app id'), null);
                    }
                })
                    .catch(err => callback(new vortex_api_1.util.DataInvalid('Could not find gameEntry'), null));
            }
        };
        this.getGameExecutable = (args, callback) => {
            vortex_api_1.log('debug', 'getGameExecutable called');
            const executable = path.join(this.gameDiscovery.path, this.gameInfo.executable(this.gameDiscovery.path));
            callback(null, executable);
        };
        this.readDir = (rootPath, recurse, filterFunc) => {
            let fileList = [];
            return turbowalk_1.default(rootPath, entries => {
                fileList = fileList.concat(entries
                    .filter(iter => !iter.isDirectory)
                    .filter(filterFunc)
                    .map(iter => iter.filePath));
            }, { recurse })
                .then(() => fileList);
        };
        this.gameId = gameId;
        this.gameDiscovery =
            vortex_api_1.util.getSafe(api.store.getState(), ['settings', 'gameMode', 'discovered', gameId], undefined);
        this.gameInfo = vortex_api_1.util.getGame(this.gameId);
        if ((this.gameDiscovery === undefined) || (this.gameDiscovery.path === undefined)) {
            throw new vortex_api_1.util.ProcessCanceled('Game not installed');
        }
    }
    resolveFilePath(filePath) {
        let modPath = this.gameInfo.queryModPath(this.gameDiscovery.path);
        if (!path.isAbsolute(modPath)) {
            modPath = path.join(this.gameDiscovery.path, modPath);
        }
        return path.join(modPath, filePath);
    }
}
exports.Context = Context;
exports.default = Context;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\Core.ts":
/*!********************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/delegates/Core.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const Context_1 = __importDefault(__webpack_require__(/*! ./Context */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\Context.ts"));
const UI_1 = __importDefault(__webpack_require__(/*! ./UI */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\UI.ts"));
class Core {
    constructor(api, gameId) {
        this.ui = new UI_1.default(api, gameId);
        this.context = new Context_1.default(api, gameId);
    }
    detach() {
        this.ui.detach();
        this.context.detach();
    }
}
exports.Core = Core;
exports.default = Core;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\DelegateBase.ts":
/*!****************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/delegates/DelegateBase.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DelegateBase {
    constructor(api) {
        this.mApi = api;
    }
    detach() {
    }
    get api() {
        return this.mApi;
    }
}
exports.default = DelegateBase;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\UI.ts":
/*!******************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/delegates/UI.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const session_1 = __webpack_require__(/*! ../actions/session */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\actions\\session.ts");
const DelegateBase_1 = __importDefault(__webpack_require__(/*! ./DelegateBase */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\DelegateBase.ts"));
const util_1 = __webpack_require__(/*! util */ "util");
const shortid_1 = __webpack_require__(/*! shortid */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\index.js");
class UI extends DelegateBase_1.default {
    constructor(api, gameId) {
        super(api);
        this.isVerifyingFiles = (dummy, callback) => {
            this.api.sendNotification({
                title: 'Verifying game files...',
                type: 'activity',
                id: 'steamkit_verifying_files',
                noDismiss: true,
                allowSuppress: false,
                message: 'User logged in - File verification is running',
            });
            callback(null, '');
        };
        this.ratelimitExceeded = (dummy, callback) => {
            this.closeDialogs();
            this.api.emitAndAwait('steamkit-timedout-event')
                .then(() => {
                this.api.showDialog('info', 'Steam rate limit exceeded', {
                    text: 'You have exceeded Steam\'s rate limit - please wait 5 minutes and try again',
                }, [
                    { label: 'Close' },
                ], 'steam-rate-limit');
            });
            callback(null, '');
        };
        this.timedOut = (opType, callback) => {
            this.closeDialogs();
            this.api.emitAndAwait('steamkit-timedout-event')
                .then(() => {
                this.api.showDialog('info', 'Steam connection expired due to inactivity', {
                    text: 'Your connection to the Steam servers has expired due to inactivity. Please try again.',
                }, [
                    { label: 'Cancel' },
                    { label: 'Try Again', action: () => {
                            const operation = opType === 0 ? 'file_verification' : 'mod_download';
                            this.api.events.emit('steamkit-restart', operation);
                        } },
                ]);
            });
            callback(null, '');
        };
        this.requestCredentials = (retry, callback) => {
            const t = this.api.translate;
            const retryText = `[br][/br][br][/br][color="red"]${t('The account name or password that you have entered is incorrect')}[/color]`;
            this.api.showDialog('question', 'Verify Integrity of Steam Game Files', {
                bbcode: t('If you are missing textures or other content in game, or experiencing '
                    + 'crashing while playing a game, you can have Steam verify that the game\'s '
                    + 'files are installed correctly on your computer. Steam will restore any '
                    + 'original files that have been altered or are missing{{bl}}'
                    + 'Note: this check is only available with Steam games and can not fix '
                    + 'issues with mod conflicts.{{bl}}'
                    + 'To continue, please enter your Steam credentials. If you are using Steam guard, '
                    + 'you will have 30 seconds to enter your code on the next screen. Vortex will NOT '
                    + 'store any of your credentials. {{retry}}', {
                    replace: {
                        bl: '[br][/br][br][/br]',
                        retry: (retry === true) ? retryText : '',
                    },
                }),
                input: [
                    { id: 'Username', type: 'text', label: 'Username' },
                    { id: 'Password', type: 'password', label: 'Password' },
                ],
            }, [
                { label: 'Cancel' },
                { label: 'Continue', default: true },
            ], 'steamkit-login-screen').then(res => {
                if (res.action === 'Cancel') {
                    callback(new vortex_api_1.util.UserCanceled(), null);
                }
                else {
                    if (!!res.input['Username'] && !!res.input['Password']) {
                        const inputResult = [res.input['Username'], res.input['Password']];
                        callback(null, inputResult);
                    }
                    else {
                        vortex_api_1.util.showError(this.api.store.dispatch, 'Unable to complete Steam operation', 'Please provide valid credentials', { allowReport: false });
                        callback(new vortex_api_1.util.UserCanceled(), null);
                    }
                }
            });
        };
        this.requestSteamGuard = (data, callback) => {
            this.api.showDialog('question', 'Steam Guard Code Required', {
                text: 'Steam has sent you a Steam Guard Code, this will be to either your email address or your Steam mobile app.\n'
                    + 'Please enter the code below:\n\n'
                    + 'Note: if you have not received your code, please check your spam folder or contact Steam support.',
                input: [
                    { id: 'SteamGuard', type: 'text', label: 'Steam guard code', placeholder: 'Not case sensitive' },
                ],
            }, [
                { label: 'Cancel' },
                { label: 'Continue', default: true },
            ], 'steam-guard-dialog').then(res => {
                if (res.action === 'Cancel') {
                    vortex_api_1.util.showError(this.api.store.dispatch, 'Unable to complete Steam operation', 'User Canceled Login', { allowReport: false });
                    callback(new vortex_api_1.util.UserCanceled(), null);
                }
                else {
                    const value = res.input['SteamGuard'];
                    if (!!value) {
                        callback(null, value.toUpperCase());
                    }
                    else {
                        callback(new vortex_api_1.util.UserCanceled(), null);
                    }
                }
            });
        };
        this.request2FA = (data, callback) => {
            this.api.showDialog('question', 'Two Factor Authentication Required', {
                text: 'Please authenticate using your 2FA application',
                input: [
                    { id: '2FA', type: 'text', label: 'Two Factor Auth Key' },
                ],
            }, [
                { label: 'Cancel' },
                { label: 'Continue', default: true },
            ], 'steam-2fa-dialog').then(res => {
                if (res.action === 'Cancel') {
                    vortex_api_1.util.showError(this.api.store.dispatch, 'Unable to complete Steam operation', 'User Canceled Login', { allowReport: false });
                    callback(new vortex_api_1.util.UserCanceled(), null);
                }
                else {
                    callback(null, res.input['2FA']);
                }
            });
        };
        this.reportMismatch = (res, callback) => {
            vortex_api_1.log('debug', 'reportMismatch', util_1.inspect(res, null));
            this.startDialog({
                mismatches: res,
                select: (selectedMismatches) => {
                    callback(null, selectedMismatches);
                    this.endMismatchDialog();
                },
                cancel: () => {
                    callback(new vortex_api_1.util.UserCanceled(), null);
                    this.endMismatchDialog();
                },
            });
        };
        this.reportError = (parameters, callback) => {
            var _a;
            vortex_api_1.log('debug', 'reportError', util_1.inspect(parameters, null));
            try {
                let msg = parameters.message;
                if (!!(parameters.details)) {
                    msg += '\n' + parameters.details;
                }
                this.api.showErrorNotification(parameters.title, (_a = parameters.details) !== null && _a !== void 0 ? _a : undefined, { isHTML: true, allowReport: false, message: parameters.message });
                callback(null);
            }
            catch (err) {
                vortex_api_1.util.showError(this.api.store.dispatch, 'Failed to display error message from installer', err);
                callback(err);
            }
        };
        this.closeDialogs = () => {
            this.api.closeDialog('steam-guard-dialog');
            this.api.closeDialog('steam-2fa-dialog');
            this.api.closeDialog('steamkit-login-screen');
        };
        this.startDialog = (info) => {
            const mismatches = info.mismatches.map(m => ({
                id: shortid_1.generate(),
                enabled: true,
                filePath: m,
            }));
            this.api.store.dispatch(session_1.setMismatchState({ mismatches }));
            this.mStateCB = info.select;
            this.mCancelCB = info.cancel;
        };
        this.endMismatchDialog = () => {
            this.mStateCB = this.mCancelCB = undefined;
        };
        this.onMismatchSelect = (mismatches) => {
            if (this.mStateCB !== undefined) {
                this.mStateCB(mismatches
                    .filter(m => m.enabled)
                    .map(m => m.filePath));
            }
        };
        this.onMismatchCancel = () => {
            if (this.mCancelCB !== undefined) {
                this.mCancelCB();
            }
        };
        api.events
            .on('steamkit-mismatch-select', this.onMismatchSelect)
            .on('steamkit-mismatch-cancel', this.onMismatchCancel);
    }
    detach() {
        this.api.events
            .removeListener('steamkit-mismatch-select', this.onMismatchSelect)
            .removeListener('steamkit-mismatch-cancel', this.onMismatchCancel);
    }
}
exports.default = UI;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\index.ts":
/*!***********************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonSteamGame = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const Core_1 = __importDefault(__webpack_require__(/*! ./delegates/Core */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\delegates\\Core.ts"));
const createIPC_1 = __webpack_require__(/*! ./createIPC */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\createIPC.ts");
const net = __importStar(__webpack_require__(/*! net */ "net"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const shortid_1 = __webpack_require__(/*! shortid */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\shortid\\index.js");
const Settings_1 = __importDefault(__webpack_require__(/*! ./views/Settings */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\Settings.tsx"));
const WorkshopPage_1 = __importDefault(__webpack_require__(/*! ./views/WorkshopPage */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\WorkshopPage.tsx"));
const Scrubber_1 = __webpack_require__(/*! ./util/Scrubber */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\util\\Scrubber.ts");
const MismatchDialog_1 = __importDefault(__webpack_require__(/*! ./views/MismatchDialog */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\MismatchDialog.tsx"));
const util_1 = __webpack_require__(/*! ./util/util */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\util\\util.ts");
const session_1 = __webpack_require__(/*! ./actions/session */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\actions\\session.ts");
const session_2 = __webpack_require__(/*! ./reducers/session */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\reducers\\session.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\constants.ts");
const SENSITIVE_DATA = ['requestCredentials', 'requestSteamGuard', 'request2FA'];
function transformError(err) {
    var _a, _b;
    let result;
    if (err === undefined) {
        result = new Error('unknown error');
    }
    else if (err.name === 'DepotDownloader.InvalidCredentialsException') {
        result = new vortex_api_1.util.ProcessCanceled('Invalid Steam Credentials');
    }
    if (result === undefined) {
        result = new Error((_b = (_a = err.name) !== null && _a !== void 0 ? _a : err.Message) !== null && _b !== void 0 ? _b : 'unknown error');
    }
    [
        { in: 'StackTrace', out: 'stack' },
        { in: 'stack', out: 'stack' },
        { in: 'FileName', out: 'path' },
        { in: 'message', out: 'message' },
        { in: 'HResult', out: 'code' },
        { in: 'name', out: 'Name' },
        { in: 'Source', out: 'Module' },
        { in: 'data', out: 'data' },
    ].forEach(transform => {
        if (err[transform.in] !== undefined) {
            result[transform.out] = err[transform.in];
        }
    });
    return result;
}
function jsonReplace(key, value) {
    return (typeof (value) === 'object' && (value === null || value === void 0 ? void 0 : value.type) === 'Buffer')
        ? { type: 'Buffer', data: Buffer.from(value.data).toString('base64') }
        : value;
}
function makeJsonRevive(invoke, getId) {
    return (key, value) => {
        if (!!(value) && (typeof (value) === 'object')) {
            if (value.type === 'Buffer') {
                return Buffer.from(value.data, 'base64');
            }
            Object.keys(value).forEach(subKey => {
                if (!!(value[subKey])
                    && (typeof (value[subKey]) === 'object')
                    && (value[subKey].__callback !== undefined)) {
                    const callbackId = value[subKey].__callback;
                    value[subKey] = (...args) => {
                        invoke({ requestId: getId(), callbackId, args })
                            .catch(err => {
                            vortex_api_1.log('info', 'process data', err.message);
                        });
                    };
                }
            });
        }
        return value;
    };
}
function createSocket(options) {
    return new Promise((resolve, reject) => {
        try {
            const server = new net.Server();
            server.on('error', err => {
                reject(err);
            });
            if (options.pipe && !options.debug) {
                const ipcId = options.debug ? 'debug' : shortid_1.generate();
                server.listen(`\\\\?\\pipe\\${ipcId}`, () => {
                    resolve({ ipcId, server });
                });
            }
            else {
                const port = options.debug ? 12346 : 0;
                server.listen(port, 'localhost', () => {
                    const ipcId = server.address().port.toString();
                    resolve({ ipcId, server });
                });
            }
        }
        catch (err) {
            reject(err);
        }
    });
}
function createConnection(ipcPath, tries = 5) {
    return new Promise((resolve, reject) => {
        const errCB = err => {
            if ((err['code'] === 'ENOENT') && (tries > 0)) {
                vortex_api_1.util.delay(1000)
                    .then(() => createConnection(ipcPath, tries - 1))
                    .then(resolve)
                    .catch(reject);
            }
            else {
                err.message = err.message.replace(ipcPath, '<ipc path>');
                reject(err);
            }
        };
        const sock = net.createConnection(ipcPath, () => {
            sock.off('error', errCB);
            resolve(sock);
        });
        sock.on('error', errCB);
    });
}
class ConnectionIPC {
    constructor(socket, proc) {
        this.mAwaitedReplies = {};
        this.mDelegates = {};
        this.mOnDrained = [];
        this.mSocket = socket;
        this.mProcess = proc;
        this.mActionLog = [];
        if (this.mProcess !== null) {
            this.mProcess.on('exit', async (code, signal) => {
                vortex_api_1.log(code === 0 ? 'info' : 'error', 'remote process exited', { code, signal });
                try {
                    await vortex_api_1.util.toPromise(cb => socket.out.end(cb));
                    this.interrupt(new Error(`Process quit unexpectedly (Code ${code})`));
                }
                catch (err) {
                    vortex_api_1.log('warn', 'failed to close connection to depot downloader process', err.message);
                }
            });
        }
        this.mSocket.out.on('drain', (hadError) => {
            this.mOnDrained.forEach(cb => cb());
            this.mOnDrained = [];
        });
        this.mSocket.in.on('close', async () => {
            vortex_api_1.log('info', 'remote was disconnected');
            Object.keys(this.mAwaitedReplies).forEach(replyId => {
                this.mAwaitedReplies[replyId].reject(new vortex_api_1.util.ProcessCanceled('remote was disconnected'));
                delete this.mAwaitedReplies[replyId];
            });
            this.mSocket.out.destroy();
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                this.mSocket.in.destroy();
                this.mSocket = undefined;
                this.interrupt(new Error(`Process disconnected unexpectedly`));
            }
            catch (err) {
            }
        });
    }
    static async bind(retry = false) {
        let proc = null;
        let onResolve;
        let onReject;
        const connectedPromise = new Promise((resolve, reject) => {
            onResolve = resolve;
            onReject = reject;
        });
        let wasConnected = false;
        let servSocket;
        let cliSocket;
        const pipe = (process.platform === 'win32') && !retry;
        const debug = false;
        if ((ConnectionIPC.sListen === undefined) || retry) {
            ConnectionIPC.sListen = await createSocket({
                pipe,
                debug,
            });
        }
        else {
            ConnectionIPC.sListen.server.removeAllListeners('connection');
        }
        const { server, ipcId } = ConnectionIPC.sListen;
        vortex_api_1.log('debug', '[steamkit] waiting for peer process to connect', { pipe, ipcId });
        server.on('connection', sock => {
            vortex_api_1.log('debug', '[steamkit] peer connected');
            sock.setEncoding('utf8');
            if (!wasConnected) {
                wasConnected = true;
                servSocket = sock;
                if (pipe && !debug) {
                    vortex_api_1.log('debug', '[steamkit] connecting to reply pipe');
                    createConnection(`\\\\?\\pipe\\${ipcId}_reply`)
                        .then(sockIn => {
                        vortex_api_1.log('debug', '[steamkit] reply pipe connected');
                        sockIn.setEncoding('utf-8');
                        sockIn.on('error', err => {
                            vortex_api_1.log('error', '[steamkit] socket error', err.message);
                        });
                        cliSocket = sockIn;
                        onResolve();
                    })
                        .catch(err => {
                        onReject(err);
                    });
                }
                else {
                    cliSocket = servSocket;
                    onResolve();
                }
            }
        });
        let res;
        let connectOutcome;
        let setConnectOutcome = (error) => {
            if (connectOutcome === undefined) {
                connectOutcome = error;
            }
        };
        const awaitConnected = async () => {
            if (connectOutcome !== undefined) {
                return connectOutcome === null ? Promise.resolve() : Promise.reject(connectOutcome);
            }
            else {
                setConnectOutcome = (error) => {
                    if (error === null) {
                        onResolve === null || onResolve === void 0 ? void 0 : onResolve();
                    }
                    else {
                        onReject === null || onReject === void 0 ? void 0 : onReject(error);
                    }
                    onResolve = onReject = undefined;
                };
                return connectedPromise;
            }
        };
        if (!debug) {
            try {
                proc = await createIPC_1.createIPC(pipe, ipcId, procCB => {
                    procCB.stdout.on('data', (dat) => {
                        vortex_api_1.log('debug', 'from depot downloader:', dat.toString().trim());
                    });
                    procCB.stderr.on('data', async (dat) => {
                        const errorMessage = dat.toString().trim();
                        if (!retry && errorMessage.includes('The operation has timed out')) {
                            try {
                                res = await ConnectionIPC.bind(true);
                                setConnectOutcome(null);
                            }
                            catch (err) {
                                setConnectOutcome(err);
                            }
                        }
                        else if (errorMessage.length > 0) {
                            vortex_api_1.log('error', 'from depot downloader:', errorMessage);
                            if (!wasConnected) {
                                const err = new Error(errorMessage);
                                err['attachLogOnReport'] = true;
                                setConnectOutcome(err);
                                wasConnected = true;
                            }
                        }
                    });
                });
            }
            catch (err) {
                setConnectOutcome(err);
            }
        }
        await awaitConnected();
        if (res === undefined) {
            return new ConnectionIPC({ in: cliSocket, out: servSocket }, proc);
        }
        return res;
    }
    handleMessages() {
        this.mSocket.in.on('data', (data) => {
            this.logAction(`receiving ${data.length} bytes`);
            if (data.length > 0) {
                this.mReceivedBuffer = (this.mReceivedBuffer === undefined)
                    ? data
                    : this.mReceivedBuffer + data;
                if (this.mReceivedBuffer.endsWith('\uffff')) {
                    this.logAction(`processing ${this.mReceivedBuffer.length} bytes`);
                    try {
                        this.processData(this.mReceivedBuffer);
                        this.mReceivedBuffer = undefined;
                    }
                    catch (err) {
                        vortex_api_1.log('error', 'failed to parse data from remote process', err.message);
                        this.mReceivedBuffer = undefined;
                    }
                }
            }
        })
            .on('error', (err) => {
            vortex_api_1.log('error', 'ipc socket error', err.message);
        });
    }
    closeAllAwaitedReplies() {
        Object.keys(this.mAwaitedReplies).forEach(replyId => {
            this.mAwaitedReplies[replyId].reject(new vortex_api_1.util.ProcessCanceled('timed out'));
            delete this.mAwaitedReplies[replyId];
        });
    }
    isActive() {
        var _a, _b;
        return (this.mProcess !== null) || ((_b = (_a = this.mProcess) === null || _a === void 0 ? void 0 : _a.kill) === null || _b === void 0 ? void 0 : _b(0));
    }
    async sendMessage(command, data, delegate) {
        this.mActionLog = [];
        return Promise.race([
            this.interruptible(),
            this.sendMessageInner(command, data, delegate),
        ]);
    }
    logAction(message) {
        this.mActionLog.push(message);
    }
    async interruptible() {
        return new Promise((resolve, reject) => {
            this.mOnInterrupted = reject;
        });
    }
    async sendMessageInner(command, data, delegate) {
        const id = shortid_1.generate();
        const res = new Promise((resolve, reject) => {
            this.mAwaitedReplies[id] = { resolve, reject };
            if (delegate !== undefined) {
                this.mDelegates[id] = delegate;
            }
        });
        if (SENSITIVE_DATA.includes(data === null || data === void 0 ? void 0 : data.name)) {
            this.logAction(`sending cmd ${command}`);
        }
        else {
            this.logAction(`sending cmd ${command}: ${JSON.stringify(data)}`);
        }
        const outData = JSON.stringify({
            id,
            payload: {
                ...data,
                command,
            },
        }, jsonReplace);
        const written = this.mSocket.out.write(outData + '\uFFFF');
        if (!written) {
            await new Promise(resolve => {
                this.mOnDrained.push(resolve);
            });
        }
        return res;
    }
    copyErr(input) {
        if (input === null) {
            return null;
        }
        return {
            message: input.message,
            name: input.name,
            code: input['code'],
        };
    }
    processData(data) {
        const messages = data.split('\uFFFF');
        messages.forEach(msg => {
            if (msg.length > 0) {
                try {
                    this.logAction(`processing message "${this.mReceivedBuffer}"`);
                    this.processDataImpl(msg);
                }
                catch (err) {
                    vortex_api_1.log('error', 'failed to parse', { input: msg, error: err.message });
                }
            }
        });
    }
    processDataImpl(msg) {
        const data = JSON.parse(msg, makeJsonRevive((payload) => this.sendMessageInner('Invoke', payload), () => data.id));
        if (data.id === 'parseerror') {
            const err = new Error(data.error.message);
            err.stack = data.error.stack;
            if (!!(data.error.name)) {
                err.name = data.error.name;
            }
            Object.keys(this.mAwaitedReplies).forEach(replyId => {
                this.mAwaitedReplies[replyId].reject(err);
                delete this.mAwaitedReplies[replyId];
            });
        }
        else if ((data.callback !== null)
            && (this.mDelegates[data.callback.id] !== undefined)) {
            const func = this.mDelegates[data.callback.id][data.callback.type][data.data.name];
            func(...data.data.args, (err, response) => {
                this.sendMessageInner(`Reply`, { request: data, data: response, error: this.copyErr(err) })
                    .catch(e => {
                    vortex_api_1.log('info', 'process data', e.message);
                });
            });
        }
        else if (this.mAwaitedReplies[data.id] !== undefined) {
            if (data.error !== null) {
                const err = new Error(data.error.message);
                err.stack = data.error.stack;
                if (!!(data.error.name)) {
                    err.name = data.error.name;
                }
                if (!!(data.error.data)) {
                    err['data'] = data.error.data;
                }
                this.mAwaitedReplies[data.id].reject(err);
            }
            else {
                this.mAwaitedReplies[data.id].resolve(data.data);
            }
            delete this.mAwaitedReplies[data.id];
        }
    }
    interrupt(err) {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = this.mSocket) === null || _a === void 0 ? void 0 : _a.out) !== ((_b = this.mSocket) === null || _b === void 0 ? void 0 : _b.in)) {
            (_d = (_c = this.mSocket) === null || _c === void 0 ? void 0 : _c.out) === null || _d === void 0 ? void 0 : _d.end();
        }
        (_f = (_e = this.mSocket) === null || _e === void 0 ? void 0 : _e.in) === null || _f === void 0 ? void 0 : _f.end();
        vortex_api_1.log('warn', 'interrupted, recent actions', JSON.stringify(this.mActionLog, undefined, 2));
        if (this.mOnInterrupted !== undefined) {
            this.mOnInterrupted(err);
            this.mOnInterrupted = undefined;
        }
    }
}
const ensureConnected = (() => {
    let conn;
    return async () => {
        if ((conn === undefined) || !conn.isActive()) {
            conn = await ConnectionIPC.bind();
            vortex_api_1.log('debug', '[steamkit] connection bound');
            conn.handleMessages();
        }
        return Promise.resolve(conn);
    };
})();
async function VerifyFiles(parameters, progressDelegate, coreDelegates) {
    const connection = await ensureConnected();
    return connection.sendMessage('VerifyFiles', { ...parameters, progressDelegate }, coreDelegates)
        .catch(err => Promise.reject(transformError(err)));
}
async function downloadMod(parameters, progressDelegate, coreDelegates) {
    const connection = await ensureConnected();
    return connection.sendMessage('DownloadMod', { ...parameters, progressDelegate }, coreDelegates)
        .catch(err => Promise.reject(transformError(err)));
}
const normalizePath = (filePath) => {
    return path.normalize(filePath.toLowerCase())
        .replace(/[(\/)(\\)]/g, '/')
        .replace(/(\/)+$/g, '');
};
function purge(api) {
    return new Promise((resolve, reject) => api.events.emit('purge-mods', true, (err) => err ? reject(err) : resolve()));
}
function showSteamWebApiDialog(api) {
    const t = api.translate;
    return api.showDialog('question', 'Steam Web API Key required', {
        bbcode: t('To browse Steam Workshop mods within Vortex, a Steam Web API key is required. '
            + 'The API key can be generated at the below link (use any domain name); once generated, paste it into the '
            + 'input box.[br][/br][br][/br]'
            + '[url]'
            + `${constants_1.STEAM_WEB_API_URL}`
            + '[/url][br][/br][br][/br]'
            + 'Please note: the API Key is stored confidentially in your application state to avoid '
            + 'having to re-type it. You can reset the API key at any point in the '
            + 'Settings page.'),
        input: [
            { id: 'apikey', label: 'Steam Web API Key' },
        ],
    }, [
        { label: 'Cancel' },
        { label: 'Confirm' },
    ]);
}
function raiseNotASteamGameNotif(api) {
    api.sendNotification({
        type: 'warning',
        message: 'Must be a Steam game to verify file integrity',
        actions: [
            {
                title: 'More',
                action: () => api.showDialog('error', 'Must be a Steam Game', {
                    text: 'Steam file integrity verification is a service provided by Steam '
                        + 'that detects and replaces files that have either been altered or '
                        + 'are missing from the original installation. For this reason this '
                        + 'feature will only work for games installed via Steam.',
                }, [
                    { label: 'Close' },
                ]),
            },
        ],
    });
}
class NonSteamGame extends Error {
    constructor() {
        super('Not a steam game');
        this.name = this.constructor.name;
    }
}
exports.NonSteamGame = NonSteamGame;
function init(context) {
    context.registerReducer(['session', 'steamkit'], session_2.sessionReducer);
    let downloadQueue;
    let modScrubber;
    let _mismatches = [];
    const verifyIsSteamGame = async (parameters, discovery) => {
        let gameEntry;
        try {
            gameEntry = await vortex_api_1.util.GameStoreHelper.findByAppId([parameters.AppId.toString()], 'steam');
        }
        catch (err) {
            return Promise.reject(new NonSteamGame());
        }
        return (normalizePath(gameEntry.gamePath) === normalizePath(discovery.path))
            ? Promise.resolve()
            : Promise.reject(new NonSteamGame());
    };
    const verifyFilesWrap = async (parameters, gameId, cb) => {
        _mismatches = [];
        const state = context.api.getState();
        const discovery = vortex_api_1.selectors.discoveryByGame(state, gameId);
        try {
            await verifyIsSteamGame(parameters, discovery);
        }
        catch (err) {
            raiseNotASteamGameNotif(context.api);
            cb === null || cb === void 0 ? void 0 : cb(err);
            return;
        }
        try {
            await purge(context.api);
        }
        catch (err) {
            context.api.showErrorNotification('Failed to purge mods', err);
            cb === null || cb === void 0 ? void 0 : cb(err);
            return;
        }
        const coreDelegates = new Core_1.default(context.api, gameId);
        const progress = (perc) => {
            context.api.sendNotification({
                title: 'Verifying game files...',
                type: 'activity',
                id: 'steamkit_verifying_files',
                message: 'Patience is a virtue...',
                noDismiss: true,
                allowSuppress: false,
                progress: perc,
            });
        };
        let hadError = false;
        try {
            context.api.sendNotification({
                title: 'Verifying game files...',
                type: 'activity',
                id: 'steamkit_verifying_files',
                noDismiss: true,
                allowSuppress: false,
                message: 'Connecting to Steam servers',
            });
            await VerifyFiles(parameters, progress, coreDelegates);
            cb === null || cb === void 0 ? void 0 : cb(null);
            return Promise.resolve();
        }
        catch (err) {
            hadError = true;
            context.api.showErrorNotification('File integrity checks failed', err);
            cb === null || cb === void 0 ? void 0 : cb(err);
            return Promise.resolve();
        }
        finally {
            context.api.dismissNotification('steamkit_verifying_files');
            if (!hadError) {
                if (_mismatches.length > 0) {
                    const game = vortex_api_1.util.getGame(gameId);
                    context.api.sendNotification({
                        title: 'Steam game files successfully restored',
                        message: game.name,
                        type: 'success',
                        actions: [
                            {
                                title: 'View',
                                action: () => context.api.showDialog('info', 'Steam game files successfully restored', {
                                    text: 'Steam file integrity service has restored the following original games files:',
                                    message: _mismatches.filter(m => m.enabled).map(m => m.filePath).join('\n'),
                                }, [{ label: 'Close' }])
                            },
                        ],
                    });
                }
                else {
                    context.api.sendNotification({
                        title: 'Steam file integrity verification successful',
                        message: 'Original game files are installed correctly',
                        type: 'success',
                        displayMS: 3000,
                    });
                }
            }
            context.api.store.dispatch(vortex_api_1.actions.setDeploymentNecessary(gameId, true));
            coreDelegates.detach();
        }
    };
    const downloadWorkshopMod = async (parameters, gameId) => {
        const coreDelegates = new Core_1.default(context.api, gameId);
        let hadError = false;
        try {
            context.api.sendNotification({
                title: `Downloading ${parameters.PubFile}`,
                type: 'activity',
                id: 'steamkit_downloading_mod',
                message: 'Connecting to SteamAPI servers',
            });
            await downloadMod(parameters, null, coreDelegates);
        }
        catch (err) {
            context.api.showErrorNotification('Failed to download mod', err);
            hadError = true;
            return Promise.reject(err);
        }
        finally {
            context.api.dismissNotification('steamkit_downloading_mod');
            context.api.sendNotification({
                message: (hadError)
                    ? 'Failed to download mod'
                    : 'Mod downloaded',
                type: hadError ? 'warning' : 'success',
                displayMS: 3000,
            });
            coreDelegates.detach();
        }
    };
    context.registerMainPage('steam', 'Steam Workshop', WorkshopPage_1.default, {
        hotkeyRaw: 'F1',
        group: 'global',
        visible: () => {
            var _a;
            const state = context.api.getState();
            const gameMode = vortex_api_1.selectors.activeGameId(state);
            if (!gameMode) {
                return false;
            }
            const game = vortex_api_1.util.getGame(gameMode);
            return (((_a = game === null || game === void 0 ? void 0 : game.details) === null || _a === void 0 ? void 0 : _a.steamAppId) !== undefined);
        },
        props: () => ({
            t: context.api.translate,
            onGameModeActivated: async (gameId) => {
                var _a;
                try {
                    const state = context.api.getState();
                    const game = vortex_api_1.selectors.gameById(state, gameId);
                    const discovery = vortex_api_1.selectors.discoveryByGame(state, gameId);
                    await verifyIsSteamGame({ AppId: (_a = game === null || game === void 0 ? void 0 : game.details) === null || _a === void 0 ? void 0 : _a.steamAppId }, discovery);
                    let webApiKey = await util_1.getApiKey();
                    if (!webApiKey) {
                        await showSteamWebApiDialog(context.api)
                            .then(async (result) => {
                            if (result.action === 'Confirm' && !!result.input['apikey']) {
                                webApiKey = result.input['apikey'];
                                await util_1.ensureWebAPIFile(context.api, result.input['apikey']);
                            }
                            else {
                                context.api.sendNotification({
                                    message: 'Unable to query Steam web API servers',
                                    type: 'warning',
                                    displayMS: 3000,
                                });
                                return Promise.resolve(undefined);
                            }
                        });
                    }
                    modScrubber.init(game.details.steamAppId, gameId, webApiKey);
                    return modScrubber;
                }
                catch (err) {
                    if (err instanceof NonSteamGame) {
                        return undefined;
                    }
                    else {
                        throw err;
                    }
                }
            },
            onModClick: async (mod) => {
                const state = context.api.getState();
                const gameMode = vortex_api_1.selectors.activeGameId(state);
                const tempPath = vortex_api_1.util.getVortexPath('temp');
                const addToQueue = (queued) => {
                    downloadQueue(async () => {
                        const modPath = queued['title'] !== undefined
                            ? path.join(tempPath, gameMode, queued['title'].replace(/[^a-zA-Z0-9.]/gm, ''))
                            : path.join(tempPath, gameMode, queued.publishedfileid);
                        await vortex_api_1.fs.ensureDirWritableAsync(modPath);
                        const params = {
                            AppId: queued.creator_appid,
                            InstallDirectory: modPath,
                            PubFile: queued.publishedfileid,
                        };
                        try {
                            await downloadWorkshopMod(params, gameMode);
                        }
                        catch (err) {
                            return Promise.resolve();
                        }
                        const files = await util_1.getFiles(modPath);
                        await util_1.packFiles(modPath, files, `${modPath}.7z`);
                        await new Promise((resolve) => context.api.events.emit('import-downloads', [`${modPath}.7z`], async (dlIds) => {
                            if (dlIds.length === 0) {
                                context.api.showErrorNotification('Failed to import archive', `${modPath}.zip`);
                                return resolve();
                            }
                            for (const dlId of dlIds) {
                                util_1.addDownloadMetaData(context.api, queued, dlId, gameMode);
                            }
                            return resolve();
                        }));
                    });
                };
                addToQueue(mod);
            },
        }),
    });
    context.registerAction('mod-icons', 300, 'steam', {}, 'Verify Files', () => {
        var _a, _b;
        const state = context.api.getState();
        const gameMode = vortex_api_1.selectors.activeGameId(state);
        const discovery = vortex_api_1.selectors.discoveryByGame(state, gameMode);
        const game = vortex_api_1.util.getGame(gameMode);
        const parameters = {
            AppId: (((_a = game === null || game === void 0 ? void 0 : game.details) === null || _a === void 0 ? void 0 : _a.steamAppId) || ((_b = game === null || game === void 0 ? void 0 : game.environment) === null || _b === void 0 ? void 0 : _b.steamAppId)),
            VerifyAll: true,
            ManifestOnly: true,
            InstallDirectory: discovery.path,
        };
        if (!parameters.AppId) {
            context.api.showErrorNotification('Failed to verify file integrity', 'Cannot resolve SteamAppId', { allowReport: game.contributed ? false : true });
            return;
        }
        verifyFilesWrap(parameters, gameMode);
    }, () => {
        var _a, _b, _c;
        const state = context.api.store.getState();
        const gameMode = vortex_api_1.selectors.activeGameId(state);
        const game = vortex_api_1.util.getGame(gameMode);
        if (((_a = game === null || game === void 0 ? void 0 : game.details) === null || _a === void 0 ? void 0 : _a.hideSteamKit) === true) {
            return false;
        }
        return (!!((_b = game === null || game === void 0 ? void 0 : game.details) === null || _b === void 0 ? void 0 : _b.steamAppId) || !!((_c = game === null || game === void 0 ? void 0 : game.environment) === null || _c === void 0 ? void 0 : _c.SteamAppId));
    });
    context.registerAPI('steamkitVerifyFileIntegrity', (parameters, gameId, callback) => {
        verifyFilesWrap(parameters, gameId, callback);
    }, { minArguments: 2 });
    context.registerSettings('Interface', Settings_1.default, () => ({
        t: context.api.translate,
        getSteamWebApiKey: async () => {
            return await util_1.getApiKey();
        },
        onSetSteamWebAPIKey: (reset) => {
            return !reset ? showSteamWebApiDialog(context.api)
                .then(async (result) => {
                if (result.action === 'Confirm' && !!result.input['apikey']) {
                    return util_1.ensureWebAPIFile(context.api, result.input['apikey']);
                }
            })
                : util_1.ensureWebAPIFile(context.api, '');
        }
    }), () => true, 51);
    context.registerDialog('mismatched-files-dialog', MismatchDialog_1.default, () => ({
        onSelect: (mismatches) => {
            _mismatches = mismatches;
            context.api.store.dispatch(session_1.endMismatchDialog());
            if ((mismatches === null || mismatches === void 0 ? void 0 : mismatches.length) > 0) {
                context.api.sendNotification({
                    title: 'Restoring Steam game files...',
                    type: 'activity',
                    noDismiss: true,
                    allowSuppress: false,
                    id: 'steamkit_verifying_files',
                    message: 'Downloading files from Steam servers',
                });
            }
            context.api.events.emit('steamkit-mismatch-select', mismatches);
        },
        onCancel: () => {
            context.api.store.dispatch(session_1.endMismatchDialog());
            context.api.events.emit('steamkit-mismatch-cancel');
        },
    }));
    context.once(() => {
        modScrubber = new Scrubber_1.ModScrubber(context.api, (gameMode, totalMods) => {
            context.api.store.dispatch(session_1.setCacheCounter(gameMode, totalMods));
        });
        context.api.onAsync('steamkit-timedout-event', async () => {
            try {
                const connection = await ensureConnected();
                connection.closeAllAwaitedReplies();
                return Promise.resolve();
            }
            catch (err) {
                vortex_api_1.log('error', 'failed to close all replies', err);
                return Promise.resolve();
            }
        });
        downloadQueue = vortex_api_1.util.makeQueue();
        context.api.events.on('steamkit-restart', (op) => {
            var _a, _b;
            if (op === 'file_verification') {
                const state = context.api.getState();
                const gameMode = vortex_api_1.selectors.activeGameId(state);
                const discovery = vortex_api_1.selectors.discoveryByGame(state, gameMode);
                const game = vortex_api_1.util.getGame(gameMode);
                const parameters = {
                    AppId: (((_a = game === null || game === void 0 ? void 0 : game.details) === null || _a === void 0 ? void 0 : _a.steamAppId) || ((_b = game === null || game === void 0 ? void 0 : game.environment) === null || _b === void 0 ? void 0 : _b.steamAppId)),
                    VerifyAll: true,
                    ManifestOnly: true,
                    InstallDirectory: discovery.path,
                };
                if (!parameters.AppId) {
                    context.api.showErrorNotification('Failed to verify file integrity', 'Cannot resolve SteamAppId', { allowReport: game.contributed ? false : true });
                    return;
                }
                verifyFilesWrap(parameters, gameMode);
            }
        });
        context.api.events.on('did-install-mod', (gameId, archiveId, modId) => {
            var _a, _b, _c, _d;
            const state = context.api.getState();
            const download = (_b = (_a = state.persistent.downloads) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[archiveId];
            const steamkitMod = ((_c = download === null || download === void 0 ? void 0 : download.modInfo) === null || _c === void 0 ? void 0 : _c.steamkit) !== undefined
                ? JSON.parse((_d = download.modInfo) === null || _d === void 0 ? void 0 : _d.steamkit)
                : undefined;
            if (steamkitMod) {
                util_1.addModMetaData(context.api, steamkitMod, modId, gameId);
            }
        });
        context.api.setStylesheet('workshoppagestyle', path.join(__dirname, 'workshop.scss'));
        return vortex_api_1.util.installIconSet('steam', path.join(__dirname, 'icons.svg'));
    });
    return true;
}
exports.default = init;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\reducers\\session.ts":
/*!**********************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/reducers/session.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionReducer = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const session_1 = __webpack_require__(/*! ../actions/session */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\actions\\session.ts");
exports.sessionReducer = {
    reducers: {
        [session_1.setCacheCounter]: (state, payload) => {
            const { totalMods, gameMode } = payload;
            return (vortex_api_1.util.setSafe(state, ['cache', gameMode, 'totalMods'], totalMods));
        },
        [session_1.endMismatchDialog]: (state, payload) => vortex_api_1.util.setSafe(state, ['mismatches'], []),
        [session_1.setMismatchState]: (state, payload) => {
            const { mismatches } = payload;
            return vortex_api_1.util.setSafe(state, ['mismatches'], mismatches);
        },
        [session_1.setWorkshopModFilter]: (state, payload) => {
            const { filter } = payload;
            return vortex_api_1.util.setSafe(state, ['workshopModFilter'], filter);
        }
    },
    defaults: {},
};


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\types\\errors.ts":
/*!******************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/types/errors.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSteamDataException = void 0;
class NoSteamDataException extends Error {
    constructor() {
        super('Workshop mods are not available for this game');
    }
}
exports.NoSteamDataException = NoSteamDataException;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\util\\Scrubber.ts":
/*!*******************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/util/Scrubber.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModScrubber = exports.QueryType = void 0;
const node_rest_client_1 = __importDefault(__webpack_require__(/*! node-rest-client */ "e:\\WorkC\\extensions\\extension-steamkit\\node_modules\\node-rest-client\\lib\\node-rest-client.js"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const errors_1 = __webpack_require__(/*! ../types/errors */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\types\\errors.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\constants.ts");
var QueryType;
(function (QueryType) {
    QueryType[QueryType["ByVote"] = 0] = "ByVote";
    QueryType[QueryType["ByDate"] = 1] = "ByDate";
    QueryType[QueryType["ByTrend"] = 3] = "ByTrend";
})(QueryType = exports.QueryType || (exports.QueryType = {}));
const MODS_PER_PAGE_PARAM = `&numperpage=${constants_1.MODS_PER_PAGE}`;
const QUERY_LINK_TEMPLATE = `https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?key={{key}}&appid={{appId}}&query_type={{type}}&page={{page}}&creator_appid={{appId}}&return_children=true&return_vote_data=true&return_short_description=true${MODS_PER_PAGE_PARAM}{{fileid}}{{title}}`;
class ModScrubber {
    constructor(api, onChangeCallback) {
        this.mApi = api;
        this.mClient = new node_rest_client_1.default.Client();
        this.onChangeCallback = onChangeCallback;
    }
    init(appId, gameId, webApiKey) {
        this.reset();
        this.mApiKey = webApiKey;
        this.mAppId = appId;
        this.mGameMode = gameId;
        this.mDataArray = {};
    }
    async reset() {
        this.mDataArray = {};
        this.mCurrentAvailableTotal = 0;
        this.mAppId = undefined;
        this.mGameMode = undefined;
        this.mApiKey = undefined;
    }
    findFileIdInPage(fileId, page) {
        var _a;
        return (_a = this.mDataArray[page]) === null || _a === void 0 ? void 0 : _a.find(entry => entry.publishedfileid === fileId);
    }
    isInCache(publishedfileId) {
        const reversed = Object.keys(this.mDataArray).reverse();
        for (const page of reversed) {
            const entry = this.findFileIdInPage(publishedfileId, page);
            if (entry !== undefined) {
                return true;
            }
        }
        return false;
    }
    async scrub(qLink) {
        if (!qLink) {
            return Promise.resolve([]);
        }
        return new Promise((resolve, reject) => {
            try {
                this.mClient.get(qLink, async (data, response) => {
                    if (response.statusCode !== 200) {
                        return reject(new Error('Failed to query link'));
                    }
                    if (this.mCurrentAvailableTotal === 0 && data.response.total === 0) {
                        return reject(new errors_1.NoSteamDataException());
                    }
                    if (!this.mCurrentAvailableTotal) {
                        this.mCurrentAvailableTotal = data.response.total;
                    }
                    const details = [];
                    if (data.response.publishedfiledetails) {
                        for (const fileDetails of data.response.publishedfiledetails) {
                            if (fileDetails && !this.isInCache(fileDetails.publishedfileid)) {
                                details.push(fileDetails);
                            }
                        }
                    }
                    return resolve(details);
                });
            }
            catch (err) {
                vortex_api_1.log('error', 'Failed to query link', err);
                return reject(err);
            }
        });
    }
    stringValOrDefault(val, defaultVal) {
        return (val) ? val.toString() : defaultVal;
    }
    generateLink(parameters) {
        const { appid, key, page, publishedfileid } = parameters;
        const apiKey = this.stringValOrDefault(key, this.mApiKey);
        const appId = this.stringValOrDefault(appid, this.mAppId);
        const currPage = this.stringValOrDefault(page, '1');
        let fileId = this.stringValOrDefault(publishedfileid, '');
        if (fileId) {
            fileId = `&child_publishedfileid=${fileId}`;
        }
        let filter = this.mCurrentFilter;
        if (filter) {
            filter = `&search_text=${filter}`;
        }
        if (!appId) {
            return null;
        }
        const link = QUERY_LINK_TEMPLATE.replace(/{{appId}}/g, appId)
            .replace(/{{type}}/, parameters.sorting.toFixed())
            .replace('{{key}}', apiKey)
            .replace('{{page}}', currPage)
            .replace('{{fileid}}', fileId)
            .replace('{{title}}', filter);
        return link;
    }
    async startQuery(link) {
        return this.scrub(link);
    }
    availableTotal() {
        var _a;
        return (_a = this.mCurrentAvailableTotal) !== null && _a !== void 0 ? _a : 0;
    }
    async queryFileId(publishedfileid) {
        const pages = Object.keys(this.mDataArray);
        for (const page of pages) {
            if (this.findFileIdInPage(publishedfileid, page)) {
                return this.findFileIdInPage(publishedfileid, page);
            }
        }
        const queryLink = this.generateLink({ publishedfileid, appid: this.mAppId });
        const data = await this.startQuery(queryLink);
        return (data.length > 0) ? data[0] : undefined;
    }
    resetDataArray() {
        this.mDataArray = {};
    }
    async scrubPage(query) {
        if (this.mDataArray[query.page] !== undefined) {
            return this.mDataArray[query.page];
        }
        if ((query === null || query === void 0 ? void 0 : query.filter) !== this.mCurrentFilter) {
            this.mCurrentFilter = query.filter;
        }
        const queryLink = this.generateLink(query);
        try {
            const res = await this.startQuery(queryLink);
            this.mDataArray[query.page] = res;
            return res;
        }
        catch (err) {
            if (!(err instanceof errors_1.NoSteamDataException)) {
                this.mApi.showErrorNotification('Failed to query Steam Workshop', err);
            }
            return Promise.resolve([]);
        }
    }
}
exports.ModScrubber = ModScrubber;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\util\\util.ts":
/*!***************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/util/util.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiKey = exports.ensureWebAPIFile = exports.steamWebAPIKeyPath = exports.packFiles = exports.getFiles = exports.addModMetaData = exports.addDownloadMetaData = void 0;
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const turbowalk_1 = __importDefault(__webpack_require__(/*! turbowalk */ "turbowalk"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
function addDownloadMetaData(api, mod, dlId, gameId) {
    if (mod['title'] === undefined) {
        return;
    }
    const batchedActions = [
        vortex_api_1.actions.setDownloadModInfo(dlId, 'name', mod['title']),
        vortex_api_1.actions.setDownloadModInfo(dlId, 'source', 'website'),
        vortex_api_1.actions.setDownloadModInfo(dlId, 'url', `https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.publishedfileid}`),
        vortex_api_1.actions.setDownloadModInfo(dlId, 'game', gameId),
        vortex_api_1.actions.setDownloadModInfo(dlId, 'steamkit', JSON.stringify(mod)),
    ];
    vortex_api_1.util.batchDispatch(api.store, batchedActions);
}
exports.addDownloadMetaData = addDownloadMetaData;
function addModMetaData(api, mod, modId, gameId) {
    const batchedActions = [
        vortex_api_1.actions.setModAttribute(gameId, modId, 'name', mod.title),
        vortex_api_1.actions.setModAttribute(gameId, modId, 'description', mod.short_description),
        vortex_api_1.actions.setModAttribute(gameId, modId, 'pictureUrl', mod.preview_url),
        vortex_api_1.actions.setModAttribute(gameId, modId, 'publishedfileid', mod.publishedfileid),
    ];
    vortex_api_1.util.batchDispatch(api.store, batchedActions);
}
exports.addModMetaData = addModMetaData;
async function getFiles(basePath) {
    let filePaths = [];
    return turbowalk_1.default(basePath, files => {
        const filtered = files.filter(entry => !entry.isDirectory && !entry.filePath.split(path_1.default.sep).includes('.DepotDownloader'));
        filePaths = filePaths.concat(filtered.map(entry => entry.filePath));
    }, { recurse: true, skipLinks: true })
        .catch(err => ['ENOENT', 'ENOTFOUND'].includes(err.code)
        ? Promise.resolve() : Promise.reject(err))
        .then(() => Promise.resolve(filePaths));
}
exports.getFiles = getFiles;
async function packFiles(modPath, files, destination) {
    const baseSegments = modPath.split(path_1.default.sep);
    const baseSeg = baseSegments.slice(baseSegments.length - 1)[0];
    const arcMap = files.reduce((accum, iter) => {
        const segments = iter.split(path_1.default.sep);
        const idx = segments.findIndex(seg => seg === baseSeg);
        if (idx === -1) {
            return accum;
        }
        const modKey = segments.slice(idx - 1, idx + 1).join('_');
        if (accum[modKey] === undefined) {
            accum[modKey] = [];
        }
        const basePath = segments.slice(0, idx + 1).join(path_1.default.sep);
        const relPath = path_1.default.relative(basePath, iter);
        const pathExists = (accum[modKey].find(file => file.relPath.split(path_1.default.sep)[0] === relPath.split(path_1.default.sep)[0]) !== undefined);
        if (!pathExists) {
            accum[modKey].push({ relPath, basePath });
        }
        return accum;
    }, {});
    const szip = new vortex_api_1.util.SevenZip();
    for (const modKey of Object.keys(arcMap)) {
        await szip.add(destination, arcMap[modKey]
            .map(file => path_1.default.join(file.basePath, file.relPath.split(path_1.default.sep)[0])), { raw: ['-r'] });
    }
}
exports.packFiles = packFiles;
function steamWebAPIKeyPath() {
    return path_1.default.join(vortex_api_1.util.getVortexPath('temp'), 'steamWebAPIKey.json');
}
exports.steamWebAPIKeyPath = steamWebAPIKeyPath;
async function ensureWebAPIFile(api, key) {
    try {
        await vortex_api_1.fs.writeFileAsync(steamWebAPIKeyPath(), JSON.stringify({ key }));
    }
    catch (err) {
        api.showErrorNotification('Failed to write Steam Web API key', err);
        return Promise.resolve();
    }
}
exports.ensureWebAPIFile = ensureWebAPIFile;
exports.getApiKey = lodash_1.memoize(readWebApiKey);
async function readWebApiKey() {
    try {
        const key = await vortex_api_1.fs.readFileAsync(steamWebAPIKeyPath());
        return JSON.parse(key).key;
    }
    catch (err) {
        return Promise.resolve('');
    }
}


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\MismatchDialog.tsx":
/*!***************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/views/MismatchDialog.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const session_1 = __webpack_require__(/*! ../actions/session */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\actions\\session.ts");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
class MismatchDialog extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.select = () => {
            const { mismatches, onSelect } = this.props;
            onSelect(mismatches.filter(m => m.enabled));
        };
        this.renderCheckbox = (mismatch) => {
            return (React.createElement(react_bootstrap_1.Checkbox, { className: 'mismatch-checkbox', id: mismatch.id, key: mismatch.id, checked: mismatch.enabled, onChange: this.toggleCheckbox }, mismatch.filePath));
        };
        this.toggleCheckbox = (evt) => {
            const { mismatches, onSetMismatchState } = this.props;
            const idx = mismatches.findIndex((m) => {
                return m.id === evt.currentTarget.id;
            });
            const newMismatches = mismatches.reduce((accum, iter, i) => {
                if (idx === i) {
                    accum.push(({
                        ...iter,
                        enabled: !iter.enabled,
                    }));
                }
                else {
                    accum.push(iter);
                }
                return accum;
            }, []);
            onSetMismatchState(newMismatches);
        };
        this.onSelectAll = () => {
            const { mismatches, onSetMismatchState } = this.props;
            const { selectAll } = this.state;
            const value = !selectAll;
            this.nextState.selectAll = value;
            const newMismatches = mismatches.reduce((accum, iter) => {
                accum.push(({
                    ...iter,
                    enabled: value,
                }));
                return accum;
            }, []);
            onSetMismatchState(newMismatches);
        };
        this.initState({
            selectAll: true,
        });
    }
    render() {
        const { mismatches, onCancel, t } = this.props;
        const { selectAll } = this.state;
        return (React.createElement(vortex_api_1.Modal, { className: 'common-dialog-info', show: (mismatches === null || mismatches === void 0 ? void 0 : mismatches.length) > 0, onHide: onCancel },
            React.createElement(vortex_api_1.Modal.Header, null,
                React.createElement(vortex_api_1.Modal.Title, null, t('Steam detected mismatched files'))),
            React.createElement(vortex_api_1.Modal.Body, null,
                this.renderContent(),
                React.createElement(react_bootstrap_1.Checkbox, { className: 'mismatch-checkbox', id: 'mismatch-select-all', checked: selectAll, onChange: this.onSelectAll }, t('Select All'))),
            React.createElement(vortex_api_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { onClick: onCancel }, t('Cancel')),
                React.createElement(react_bootstrap_1.Button, { onClick: this.select }, t('Download and Replace Game Files')))));
    }
    renderContent() {
        const { mismatches, t } = this.props;
        return (React.createElement("div", { className: 'mismatch-dialog-container' },
            React.createElement("div", { key: 'dialog-content-text', className: 'dialog-content-text' }, t('Steam file integrity verification has detected that the following original '
                + 'games files have either been altered or are missing. Please select the '
                + 'files you would like to restore:')),
            React.createElement("div", { key: 'mismatch-dialog-content-checkboxes', className: 'mismatch-dialog-content-choices' },
                React.createElement("div", null, mismatches.map(this.renderCheckbox)))));
    }
}
function mapStateToProps(state) {
    return {
        gameMode: vortex_api_1.selectors.activeGameId(state),
        mismatches: vortex_api_1.util.getSafe(state, ['session', 'steamkit', 'mismatches'], []),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetMismatchState: (mismatches) => dispatch(session_1.setMismatchState({ mismatches })),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_i18next_1.withTranslation(['steamkit'])(MismatchDialog));


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\ModThumbnail.tsx":
/*!*************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/views/ModThumbnail.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const FILE_DETAILS_URL = 'https://steamcommunity.com/sharedfiles/filedetails/?id=';
function getWindowBounds() {
    const res = {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        height: window.innerHeight,
        width: window.innerWidth,
        bottom: window.innerHeight,
        right: window.innerWidth,
    };
    return {
        ...res,
        toJSON: () => JSON.stringify(res),
    };
}
function MenuIcon(props) {
    const { t, mod } = props;
    const gameInfoPopover = (React.createElement(react_bootstrap_1.Popover, { className: 'popover-workshop-info' }, vortex_api_1.util.bbcodeToReact(mod.short_description)));
    return (React.createElement(vortex_api_1.OverlayTrigger, { key: 'info-overlay', overlay: gameInfoPopover, getBounds: getWindowBounds, orientation: 'horizontal', shouldUpdatePosition: true, trigger: 'click', rootClose: true },
        React.createElement(vortex_api_1.tooltip.IconButton, { icon: 'game-menu', className: 'game-thumbnail-info btn-embed', tooltip: t('Show Details') })));
}
function ModThumbnail(props) {
    const { t, mod, fallbackImg, onModClick } = props;
    const imgUrl = !!mod.preview_url ? mod.preview_url : fallbackImg;
    const onClick = React.useCallback(() => {
        onModClick(mod);
    }, [onModClick, mod]);
    const openDetails = React.useCallback(() => {
        vortex_api_1.util.opn(FILE_DETAILS_URL + mod.publishedfileid).catch(() => null);
    }, [mod]);
    const totalVotes = mod.vote_data.votes_up + mod.vote_data.votes_down;
    return (React.createElement(react_bootstrap_1.Panel, { className: 'mod-thumbnail' },
        React.createElement(react_bootstrap_1.Panel.Body, { className: 'mod-thumbnail-body' },
            React.createElement("img", { onClick: onClick, className: 'thumbnail-img', style: { backgroundImage: `url(${imgUrl})` } }),
            React.createElement("div", { className: 'bottom' },
                React.createElement("div", { className: 'name' }, mod.title)),
            totalVotes > 10 ? (React.createElement("div", { className: 'workshop-rating' },
                React.createElement(vortex_api_1.Icon, { name: 'endorse-yes' }),
                Math.round(mod.vote_data.score * 100),
                "%")) : null,
            React.createElement("div", { className: 'hover-menu' },
                React.createElement("div", { className: 'hover-content' },
                    React.createElement(MenuIcon, { t: t, mod: mod }),
                    React.createElement("div", { className: 'flex-center-both' },
                        React.createElement(react_bootstrap_1.Button, { onClick: onClick }, t('Install')),
                        React.createElement(react_bootstrap_1.Button, { onClick: openDetails }, t('Open Page'))))))));
}
exports.default = ModThumbnail;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\Settings.tsx":
/*!*********************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/views/Settings.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const constants_1 = __webpack_require__(/*! ../constants */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\constants.ts");
function renderMore(props) {
    const { t } = react_i18next_1.useTranslation(constants_1.NS);
    return (React.createElement(vortex_api_1.More, { id: 'steamkit-reset-api', name: t('Reset Steam Web API Key') }, t('Vortex requires a Steam Web API key In order for Vortex to pull '
        + 'Steam Workshop mods information; this is generated via Steam\'s developer '
        + 'portal.')));
}
function resetButton(props) {
    const { t, onSetSteamWebAPIKey } = props;
    const onResetSteamWebAPIKey = React.useCallback(() => {
        onSetSteamWebAPIKey(true);
    }, [onSetSteamWebAPIKey]);
    return (React.createElement("div", null,
        React.createElement(vortex_api_1.tooltip.Button, { tooltip: t('Resets the Steam Web API Key'), onClick: onResetSteamWebAPIKey }, t('Reset Steam Web API Key')),
        renderMore(props)));
}
function setButton(props) {
    const { t, onSetSteamWebAPIKey } = props;
    const onSetKey = React.useCallback(() => {
        onSetSteamWebAPIKey();
    }, [onSetSteamWebAPIKey]);
    return (React.createElement("div", null,
        React.createElement(vortex_api_1.tooltip.Button, { tooltip: t('Sets the Steam Web API Key'), onClick: onSetKey }, t('Set Steam Web API Key')),
        renderMore(props)));
}
function Settings(props) {
    const { getSteamWebApiKey } = props;
    const [webAPIKey, setWebApiKey] = React.useState('');
    React.useEffect(() => {
        const fetch = async () => {
            const key = await getSteamWebApiKey();
            setWebApiKey(key);
        };
        fetch();
        return () => {
            setWebApiKey('');
        };
    }, []);
    return (React.createElement("div", null, webAPIKey !== undefined ? resetButton(props) : setButton(props)));
}
exports.default = Settings;


/***/ }),

/***/ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\WorkshopPage.tsx":
/*!*************************************************************************!*\
  !*** e:/WorkC/extensions/extension-steamkit/src/views/WorkshopPage.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const react_select_1 = __importDefault(__webpack_require__(/*! react-select */ "react-select"));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const ModThumbnail_1 = __importDefault(__webpack_require__(/*! ./ModThumbnail */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\views\\ModThumbnail.tsx"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const session_1 = __webpack_require__(/*! ../actions/session */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\actions\\session.ts");
const Scrubber_1 = __webpack_require__(/*! ../util/Scrubber */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\util\\Scrubber.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "e:\\WorkC\\extensions\\extension-steamkit\\src\\constants.ts");
function WorkshopPage(props) {
    const { onGameModeActivated, onModClick } = props;
    const [t] = react_i18next_1.useTranslation();
    const [availableMods, setAvailableMods] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [modScrubber, setModScrubber] = React.useState(undefined);
    const [counter, setCounter] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [sorting, setSorting] = React.useState(Scrubber_1.QueryType.ByDate);
    const [currentFilterValue, setCurrentFilterValue] = React.useState('');
    const { gameMode, fallbackImg } = react_redux_1.useSelector(mapStateToProps);
    const context = React.useContext(vortex_api_1.MainContext);
    const { onSetWorkshopModFilter } = mapDispatchToProps(context.api.store.dispatch);
    const onSetPage = React.useCallback((updatePage) => {
        if (!modScrubber) {
            return;
        }
        const newPage = updatePage(page);
        if ((newPage !== page) && (newPage > 0) && (newPage <= Math.ceil(modScrubber.availableTotal() / constants_1.MODS_PER_PAGE))) {
            setAvailableMods([]);
            setPage(newPage);
        }
    }, [page, setPage, setAvailableMods, modScrubber]);
    const incrementCounter = React.useCallback(() => {
        setAvailableMods([]);
        setCounter(oldValue => oldValue + 1);
    }, [setCounter, setAvailableMods]);
    const buttons = React.useMemo(() => {
        return [
            { action: () => onSetPage(old => old - 1), title: 'Previous Page', icon: 'nav-back' },
            { action: () => onSetPage(old => old + 1), title: 'Next Page', icon: 'nav-forward' },
        ];
    }, [onSetPage]);
    const applyFilter = React.useCallback((value) => {
        var _a;
        setCurrentFilterValue(value);
        onSetWorkshopModFilter(value);
        (_a = modScrubber === null || modScrubber === void 0 ? void 0 : modScrubber.resetDataArray) === null || _a === void 0 ? void 0 : _a.call(modScrubber);
        incrementCounter();
        onSetPage(() => 1);
    }, [
        onSetPage, setCurrentFilterValue,
        onSetWorkshopModFilter, modScrubber,
    ]);
    const onSetSorting = React.useCallback((selection) => {
        var _a;
        setSorting(selection.value);
        (_a = modScrubber === null || modScrubber === void 0 ? void 0 : modScrubber.resetDataArray) === null || _a === void 0 ? void 0 : _a.call(modScrubber);
        incrementCounter();
        onSetPage(() => 1);
    }, [setSorting, incrementCounter, onSetPage]);
    React.useEffect(() => {
        const fetchModScrubber = async () => {
            if (gameMode) {
                try {
                    const scrubber = await onGameModeActivated(gameMode);
                    setModScrubber(scrubber);
                    incrementCounter();
                }
                catch (err) {
                    context.api.showErrorNotification('Failed to load mod scrubber', err);
                }
            }
        };
        fetchModScrubber();
    }, [gameMode]);
    React.useEffect(() => {
        if (!modScrubber) {
            return;
        }
        const updatePage = async () => {
            setLoading(true);
            const mods = await modScrubber.scrubPage({
                page,
                filter: currentFilterValue,
                sorting,
            });
            setLoading(false);
            if ((mods === null || mods === void 0 ? void 0 : mods.length) > 0) {
                setAvailableMods(mods);
                setPage(page);
            }
        };
        updatePage();
    }, [page, counter, sorting]);
    return (React.createElement(vortex_api_1.MainPage, null,
        React.createElement(vortex_api_1.MainPage.Header, null,
            React.createElement(vortex_api_1.IconBar, { group: 'workshop-icons', staticElements: buttons, className: 'menubar', t: t }),
            React.createElement(react_bootstrap_1.InputGroup, null,
                React.createElement(vortex_api_1.FormInput, { className: 'mod-filter-input', value: currentFilterValue, placeholder: t('Search for a mod (title or description)...'), onChange: applyFilter, debounceTimer: 1000, clearable: true })),
            React.createElement(react_select_1.default, { options: [
                    { value: Scrubber_1.QueryType.ByDate, label: t('Newest') },
                    { value: Scrubber_1.QueryType.ByVote, label: t('Highest Rated') },
                    { value: Scrubber_1.QueryType.ByTrend, label: t('Trending') },
                ], value: sorting, onChange: onSetSorting, clearable: false, searchable: false })),
        React.createElement(vortex_api_1.MainPage.Body, null,
            React.createElement(vortex_api_1.FlexLayout, { type: 'column', className: 'mod-page' },
                React.createElement(vortex_api_1.FlexLayout.Fixed, null,
                    React.createElement(react_bootstrap_1.Panel, { className: 'mod-filter-container' },
                        React.createElement(react_bootstrap_1.Panel.Body, null))),
                React.createElement(vortex_api_1.FlexLayout.Flex, null,
                    React.createElement(react_bootstrap_1.Panel, { className: 'modpicker-body' },
                        React.createElement(react_bootstrap_1.Panel.Body, null,
                            React.createElement(WorkshopModsMods, { t: t, loading: loading, fallbackImg: fallbackImg, mods: availableMods, onModClick: onModClick }))))))));
}
exports.default = WorkshopPage;
function WorkshopModsMods(props) {
    const { t, loading, mods, onModClick, fallbackImg } = props;
    if (loading) {
        return (React.createElement(RenderWait, null));
    }
    return mods.length > 0
        ? (React.createElement("div", { className: 'mods-group' }, mods.map(mod => React.createElement(ModThumbnail_1.default, { t: t, key: mod.publishedfileid, mod: mod, onModClick: onModClick, fallbackImg: fallbackImg })))) : (React.createElement(vortex_api_1.EmptyPlaceholder, { icon: 'steam', text: t('No more mods'), fill: true }));
}
function RenderWait() {
    return (React.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        } },
        React.createElement(vortex_api_1.Spinner, { style: {
                width: '64px',
                height: '64px',
            } })));
}
function mapStateToProps(state) {
    const gameMode = vortex_api_1.selectors.activeGameId(state);
    if (!gameMode) {
        return { gameMode, totalMods: 0, fallbackImg: '' };
    }
    const game = vortex_api_1.selectors.gameById(state, gameMode);
    return {
        gameMode,
        fallbackImg: ((game === null || game === void 0 ? void 0 : game.extensionPath) && (game === null || game === void 0 ? void 0 : game.logo))
            ? path_1.default.join(game.extensionPath, game.logo)
            : path_1.default.join(__dirname, 'steam.jpg'),
        totalMods: vortex_api_1.util.getSafe(state, ['session', 'steamkit', 'cache', gameMode, 'totalMods'], 0),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetWorkshopModFilter: (filter) => dispatch(session_1.setWorkshopModFilter(filter)),
    };
}


/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minimatch");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "redux-act":
/*!****************************!*\
  !*** external "redux-act" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-act");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("timers");

/***/ }),

/***/ "turbowalk":
/*!****************************!*\
  !*** external "turbowalk" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("turbowalk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "vortex-api":
/*!*****************************!*\
  !*** external "vortex-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=steamkit.js.map