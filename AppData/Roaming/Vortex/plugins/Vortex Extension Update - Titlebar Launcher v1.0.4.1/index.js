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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./src/ToolIcon.tsx":
/*!**************************!*\
  !*** ./src/ToolIcon.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const ToolIcon = (props) => {
    const [url, setUrl] = React.useState(props.imageUrl);
    if (url !== undefined) {
        const src = props.imageUrl;
        return (React.createElement(react_bootstrap_1.Image, { src: src, className: 'tool-icon', onError: () => { if (url === props.imageUrl) {
                setUrl(props.altUrl);
            }
            else {
                setUrl(undefined);
            } } }));
    }
    else {
        return (React.createElement(vortex_api_1.Icon, { name: 'executable', className: 'tool-icon' }));
    }
};
exports.default = ToolIcon;


/***/ }),

/***/ "./src/ToolStarter.tsx":
/*!*****************************!*\
  !*** ./src/ToolStarter.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const memoize_one_1 = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
const path = __webpack_require__(/*! path */ "path");
const React = __webpack_require__(/*! react */ "react");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const ToolIcon_1 = __webpack_require__(/*! ./ToolIcon */ "./src/ToolIcon.tsx");
const { MainContext } = __webpack_require__(/*! vortex-api */ "vortex-api");
function toolIconRW(gameId, toolId) {
    return path.join(vortex_api_1.util.getVortexPath('userData'), gameId, 'icons', toolId + '.png');
}
function toolIcon(gameId, extensionPath, toolId, toolLogo) {
    try {
        const iconPath = toolIconRW(gameId, toolId);
        vortex_api_1.fs.statSync(iconPath);
        return iconPath;
    }
    catch (err) {
        if (toolLogo === undefined) {
            return undefined;
        }
        try {
            const iconPath = path.join(extensionPath, toolLogo);
            vortex_api_1.fs.statSync(iconPath);
            return iconPath;
        }
        catch (err) {
            return undefined;
        }
    }
}
function toStarterInfo(game, gameDiscovery, tool, toolDiscovery) {
    return new vortex_api_1.util.StarterInfo(game, gameDiscovery, tool, toolDiscovery);
}
function starterMemoizer(game, discovery, primaryTool, tools) {
    return tools
        .filter(tool => tool.id !== primaryTool)
        .sort((lhs, rhs) => {
        var _a, _b;
        const tlhs = (_a = lhs.timestamp, (_a !== null && _a !== void 0 ? _a : 0));
        const trhs = (_b = rhs.timestamp, (_b !== null && _b !== void 0 ? _b : 0));
        return tlhs - trhs;
    })
        .map(toolDiscovery => {
        const tool = game.supportedTools.find(iter => iter.id === toolDiscovery.id);
        try {
            return toStarterInfo(game, discovery, tool, toolDiscovery);
        }
        catch (err) {
            return undefined;
        }
    })
        .filter(iter => iter !== undefined);
}
function ToolStarterIcon(props) {
    const { api } = React.useContext(MainContext);
    const onShowError = React.useCallback((message, details, allowReport) => {
        api.showErrorNotification(message, details, { allowReport });
    }, [api]);
    const startCB = React.useCallback(() => {
        vortex_api_1.util.StarterInfo.run(props.tool, api, onShowError);
    }, [props]);
    return (React.createElement(react_bootstrap_1.Button, { className: 'titlebar-button', title: props.tool.name, onClick: startCB, disabled: props.running },
        React.createElement(ToolIcon_1.default, { imageUrl: `${props.tool.iconOutPath}?${props.tool.timestamp || 0}`, altUrl: props.tool.iconPath }),
        props.running ? React.createElement(vortex_api_1.Spinner, { className: 'running-overlay' }) : null));
}
const toStarters = memoize_one_1.default(starterMemoizer);
function makeExeId(exePath) {
    return path.basename(exePath).toLowerCase();
}
function ToolStarter() {
    const { discovery, game, discoveredTools, primaryTool, toolsRunning } = react_redux_1.useSelector(mapStateToProps);
    const starters = toStarters(game, discovery, primaryTool, Object.values(discoveredTools || {}));
    return (React.createElement("div", { id: 'titlebar-starter' }, starters.map((starter, idx) => {
        const running = (starter.exePath !== undefined)
            && (toolsRunning[makeExeId(starter.exePath)] !== undefined);
        return React.createElement(ToolStarterIcon, { running: running, key: idx, tool: starter });
    })));
}
const emptyObj = {};
function mapStateToProps(state) {
    const game = vortex_api_1.selectors.currentGame(state);
    const discovery = vortex_api_1.selectors.currentGameDiscovery(state);
    return {
        game,
        discovery,
        discoveredTools: game !== undefined
            ? vortex_api_1.util.getSafe(state, ['settings', 'gameMode', 'discovered', game.id, 'tools'], emptyObj)
            : undefined,
        primaryTool: game !== undefined
            ? vortex_api_1.util.getSafe(state, ['settings', 'interface', 'primaryTool', game.id], undefined)
            : undefined,
        toolsRunning: state.session.base.toolsRunning,
    };
}
exports.default = ToolStarter;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(/*! path */ "path");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const ToolStarter_1 = __webpack_require__(/*! ./ToolStarter */ "./src/ToolStarter.tsx");
function init(context) {
    context.registerDynDiv('main-toolbar', ToolStarter_1.default, {
        condition: (props) => {
            return vortex_api_1.selectors.activeGameId(context.api.store.getState()) !== undefined;
        },
    });
    context.once(() => {
        context.api.setStylesheet('titlebar-launcher', path.join(__dirname, 'titlebar-launcher.scss'));
    });
    return true;
}
exports.default = init;


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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "vortex-api":
/*!*****************************!*\
  !*** external "vortex-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ })

/******/ });
//# sourceMappingURL=titlebar-launcher.js.map