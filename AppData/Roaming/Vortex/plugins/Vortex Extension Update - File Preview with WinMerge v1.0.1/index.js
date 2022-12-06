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
/******/ 	return __webpack_require__(__webpack_require__.s = "e:\\WorkC\\extensions\\preview-winmerge\\src\\index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "e:\\WorkC\\extensions\\preview-winmerge\\src\\index.tsx":
/*!**********************************************************!*\
  !*** e:/WorkC/extensions/preview-winmerge/src/index.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
const React = __webpack_require__(/*! react */ "react");
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const DEFAULT_PATH = String.raw `C:\Program Files (x86)\WinMerge\WinMergeU.exe`;
function previewHandler(api, winmergePath, files) {
    return new Promise((resolve, reject) => {
        try {
            const proc = child_process_1.spawn(winmergePath, [files[0].filePath, files[1].filePath]);
            proc
                .on('error', err => {
                reject(err);
            })
                .on('exit', () => {
                resolve(null);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
function WinMergePathComponent(props) {
    const { t, api, onSetPath } = props;
    const [value, setValue] = React.useState(props.winmergePath);
    const setPathCB = React.useCallback((evt) => {
        setValue(evt.currentTarget.value);
    }, [setValue]);
    const apply = React.useCallback(() => {
        onSetPath(value);
    }, [value, onSetPath]);
    const browsePath = React.useCallback(() => {
        api.selectExecutable({
            defaultPath: value,
            filters: [{ name: 'WinMerge Executable', extensions: ['exe', 'cmd', 'bat'] }]
        })
            .then((selectedPath) => {
            if (selectedPath) {
                setValue(selectedPath);
            }
        });
    }, [setValue, value]);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.HelpBlock, null, t('Please select the path to the winmerge executable (WinMergeU.exe) or any other '
            + 'diff application you may want to use that uses the same command line parameters '
            + '(Beyond Compare works nicely for example).')),
        React.createElement(react_bootstrap_1.InputGroup, null,
            React.createElement(react_bootstrap_1.FormControl, { className: 'winmerge-path-input', style: { minWidth: '64ch' }, value: value, placeholder: DEFAULT_PATH, onChange: setPathCB }),
            React.createElement(react_bootstrap_1.InputGroup.Button, { className: 'inset-btn' },
                React.createElement(vortex_api_1.tooltip.Button, { tooltip: t('Browse'), onClick: browsePath },
                    React.createElement(vortex_api_1.Icon, { name: 'browse' })))),
        React.createElement(vortex_api_1.tooltip.Button, { tooltip: t('Click to save path'), onClick: apply }, t('Apply'))));
}
const setWinmergePath = redux_act_1.createAction('SET_PATH_WINMERGE', (input) => input);
function init(context) {
    context.registerReducer(['settings', 'tools'], {
        defaults: { winmergePath: DEFAULT_PATH },
        reducers: { [setWinmergePath]: (state, payload) => vortex_api_1.util.setSafe(state, ['winmergePath'], payload) },
    });
    context.registerPreview(150, (files, allowPick) => {
        const state = context.api.getState();
        return previewHandler(context.api, state.settings.tools.winmergePath, files);
    });
    context.registerSettings('Tools', WinMergePathComponent, () => ({
        t: context.api.translate,
        api: context.api,
        onSetPath: input => context.api.store.dispatch(setWinmergePath(input)),
        winmergePath: context.api.getState().settings.tools.winmergePath,
    }));
}
exports.default = init;


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

/***/ "redux-act":
/*!****************************!*\
  !*** external "redux-act" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-act");

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
//# sourceMappingURL=preview-winmerge.js.map