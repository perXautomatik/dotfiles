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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/session.ts":
/*!********************************!*\
  !*** ./src/actions/session.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setBroomMatchedFiles = exports.clearBroomMessages = exports.addBroomMessages = exports.setOpenBroomDialog = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.setOpenBroomDialog = redux_act_1.createAction('SET_OPEN_BROOM_DIALOG', (open) => open);
exports.addBroomMessages = redux_act_1.createAction('ADD_BROOM_MESSAGES', (msgList) => msgList);
exports.clearBroomMessages = redux_act_1.createAction('CLEAR_BROOM_MESSAGES', () => { });
exports.setBroomMatchedFiles = redux_act_1.createAction('SET_BROOM_MATCHED_FILES', (pathList) => pathList);


/***/ }),

/***/ "./src/actions/settings.ts":
/*!*********************************!*\
  !*** ./src/actions/settings.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setBroomUnhide = exports.setBroomDeleteFiles = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.setBroomDeleteFiles = redux_act_1.createAction('SET_BROOM_DELETE_FILES', (flag) => flag);
exports.setBroomUnhide = redux_act_1.createAction('SET_BROOM_UNHIDE', (flag) => flag);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BroomDialog_1 = __importDefault(__webpack_require__(/*! ./views/BroomDialog */ "./src/views/BroomDialog.tsx"));
const Settings_1 = __importDefault(__webpack_require__(/*! ./views/Settings */ "./src/views/Settings.tsx"));
const session_1 = __importDefault(__webpack_require__(/*! ./reducers/session */ "./src/reducers/session.ts"));
const settings_1 = __importDefault(__webpack_require__(/*! ./reducers/settings */ "./src/reducers/settings.ts"));
const session_2 = __webpack_require__(/*! ./actions/session */ "./src/actions/session.ts");
function main(context) {
    context.registerAction("mod-icons", 500, 'plugin-light', {}, 'Broom', () => {
        context.api.store.dispatch(session_2.setOpenBroomDialog(true));
    });
    context.registerReducer(['session', 'broom'], session_1.default);
    context.registerReducer(['settings', 'interface'], settings_1.default);
    context.registerDialog('broom-dialog', BroomDialog_1.default, () => ({}));
    context.registerSettings('Interface', Settings_1.default, undefined, undefined, 69);
    return true;
}
exports.default = main;


/***/ }),

/***/ "./src/reducers/session.ts":
/*!*********************************!*\
  !*** ./src/reducers/session.ts ***!
  \*********************************/
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
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const actions = __importStar(__webpack_require__(/*! ../actions/session */ "./src/actions/session.ts"));
const sessionReducer = {
    reducers: {
        [actions.setOpenBroomDialog]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['open'], payload);
        },
        [actions.addBroomMessages]: (state, payload) => {
            const currentMessages = vortex_api_1.util.getSafe(state, ['messages'], []);
            return vortex_api_1.util.setSafe(state, ['messages'], currentMessages.concat(payload));
        },
        [actions.clearBroomMessages]: (state) => {
            return vortex_api_1.util.setSafe(state, ['messages'], []);
        },
        [actions.setBroomMatchedFiles]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['matchedFiles'], payload);
        }
    },
    defaults: {
        open: false,
        messages: [],
        matchedFiles: []
    }
};
exports.default = sessionReducer;


/***/ }),

/***/ "./src/reducers/settings.ts":
/*!**********************************!*\
  !*** ./src/reducers/settings.ts ***!
  \**********************************/
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
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const actions = __importStar(__webpack_require__(/*! ../actions/settings */ "./src/actions/settings.ts"));
const settingsReducer = {
    reducers: {
        [actions.setBroomDeleteFiles]: (state, payload) => {
            var flag = vortex_api_1.util.getSafe(state, ['broomDeleteFiles'], false);
            if (flag === false)
                return vortex_api_1.util.setSafe(vortex_api_1.util.setSafe(state, ['broomUnhide'], false), ['broomDeleteFiles'], true);
            else
                return vortex_api_1.util.setSafe(state, ['broomDeleteFiles'], payload);
        },
        [actions.setBroomUnhide]: (state, payload) => {
            var flag = vortex_api_1.util.getSafe(state, ['broomUnhide'], false);
            if (flag === false)
                return vortex_api_1.util.setSafe(vortex_api_1.util.setSafe(state, ['broomDeleteFiles'], false), ['broomUnhide'], true);
            else
                return vortex_api_1.util.setSafe(state, ['broomUnhide'], payload);
        },
    },
    defaults: {
        deleteFiles: false,
        unhide: false
    }
};
exports.default = settingsReducer;


/***/ }),

/***/ "./src/util/globrex.js":
/*!*****************************!*\
  !*** ./src/util/globrex.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Globrex source code
// Copyright(c) 2018 Terkel Gjervig Nielsen

const isWin = process.platform === 'win32';
const SEP = isWin ? `\\\\+` : `\\/`;
const SEP_ESC = isWin ? `\\\\` : `/`;
const GLOBSTAR = `((?:[^/]*(?:/|$))*)`;
const WILDCARD = `([^/]*)`;
const GLOBSTAR_SEGMENT = `((?:[^${SEP_ESC}]*(?:${SEP_ESC}|$))*)`;
const WILDCARD_SEGMENT = `([^${SEP_ESC}]*)`;

/**
 * Convert any glob pattern to a JavaScript Regexp object
 * @param {String} glob Glob pattern to convert
 * @param {Object} opts Configuration object
 * @param {Boolean} [opts.extended=false] Support advanced ext globbing
 * @param {Boolean} [opts.globstar=false] Support globstar
 * @param {Boolean} [opts.strict=true] be laissez faire about mutiple slashes
 * @param {Boolean} [opts.filepath=''] Parse as filepath for extra path related features
 * @param {String} [opts.flags=''] RegExp globs
 * @returns {Object} converted object with string, segments and RegExp object
 */
function globrex(glob, { extended = false, globstar = false, strict = false, filepath = false, flags = '' } = {}) {
    let regex = '';
    let segment = '';
    let path = { regex: '', segments: [] };

    // If we are doing extended matching, this boolean is true when we are inside
    // a group (eg {*.html,*.js}), and false otherwise.
    let inGroup = false;
    let inRange = false;

    // extglob stack. Keep track of scope
    const ext = [];

    // Helper function to build string and segments
    function add(str, { split, last, only } = {}) {
        if (only !== 'path') regex += str;
        if (filepath && only !== 'regex') {
            path.regex += (str === '\\/' ? SEP : str);
            if (split) {
                if (last) segment += str;
                if (segment !== '') {
                    if (!flags.includes('g')) segment = `^${segment}$`; // change it 'includes'
                    path.segments.push(new RegExp(segment, flags));
                }
                segment = '';
            } else {
                segment += str;
            }
        }
    }

    let c, n;
    for (let i = 0; i < glob.length; i++) {
        c = glob[i];
        n = glob[i + 1];

        if (['\\', '$', '^', '.', '='].includes(c)) {
            add(`\\${c}`);
            continue;
        }

        if (c === '/') {
            add(`\\${c}`, { split: true });
            if (n === '/' && !strict) regex += '?';
            continue;
        }

        if (c === '(') {
            if (ext.length) {
                add(c);
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === ')') {
            if (ext.length) {
                add(c);
                let type = ext.pop();
                if (type === '@') {
                    add('{1}');
                } else if (type === '!') {
                    add('([^\/]*)');
                } else {
                    add(type);
                }
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '|') {
            if (ext.length) {
                add(c);
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '+') {
            if (n === '(' && extended) {
                ext.push(c);
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '@' && extended) {
            if (n === '(') {
                ext.push(c);
                continue;
            }
        }

        if (c === '!') {
            if (extended) {
                if (inRange) {
                    add('^');
                    continue
                }
                if (n === '(') {
                    ext.push(c);
                    add('(?!');
                    i++;
                    continue;
                }
                add(`\\${c}`);
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '?') {
            if (extended) {
                if (n === '(') {
                    ext.push(c);
                } else {
                    add('.');
                }
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '[') {
            if (inRange && n === ':') {
                i++; // skip [
                let value = '';
                while (glob[++i] !== ':') value += glob[i];
                if (value === 'alnum') add('(\\w|\\d)');
                else if (value === 'space') add('\\s');
                else if (value === 'digit') add('\\d');
                i++; // skip last ]
                continue;
            }
            if (extended) {
                inRange = true;
                add(c);
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === ']') {
            if (extended) {
                inRange = false;
                add(c);
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '{') {
            if (extended) {
                inGroup = true;
                add('(');
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '}') {
            if (extended) {
                inGroup = false;
                add(')');
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === ',') {
            if (inGroup) {
                add('|');
                continue;
            }
            add(`\\${c}`);
            continue;
        }

        if (c === '*') {
            if (n === '(' && extended) {
                ext.push(c);
                continue;
            }
            // Move over all consecutive "*"'s.
            // Also store the previous and next characters
            let prevChar = glob[i - 1];
            let starCount = 1;
            while (glob[i + 1] === '*') {
                starCount++;
                i++;
            }
            let nextChar = glob[i + 1];
            if (!globstar) {
                // globstar is disabled, so treat any number of "*" as one
                add('.*');
            } else {
                // globstar is enabled, so determine if this is a globstar segment
                let isGlobstar =
                    starCount > 1 && // multiple "*"'s
                    (prevChar === '/' || prevChar === undefined) && // from the start of the segment
                    (nextChar === '/' || nextChar === undefined); // to the end of the segment
                if (isGlobstar) {
                    // it's a globstar, so match zero or more path segments
                    add(GLOBSTAR, { only: 'regex' });
                    add(GLOBSTAR_SEGMENT, { only: 'path', last: true, split: true });
                    i++; // move over the "/"
                } else {
                    // it's not a globstar, so only match one path segment
                    add(WILDCARD, { only: 'regex' });
                    add(WILDCARD_SEGMENT, { only: 'path' });
                }
            }
            continue;
        }

        add(c);
    }


    // When regexp 'g' flag is specified don't
    // constrain the regular expression with ^ & $
    if (!flags.includes('g')) {
        regex = `^${regex}$`;
        segment = `^${segment}$`;
        if (filepath) path.regex = `^${path.regex}$`;
    }

    const result = { regex: new RegExp(regex, flags) };

    // Push the last segment
    if (filepath) {
        path.segments.push(new RegExp(segment, flags));
        path.regex = new RegExp(path.regex, flags);
        path.globstar = new RegExp(!flags.includes('g') ? `^${GLOBSTAR_SEGMENT}$` : GLOBSTAR_SEGMENT, flags);
        result.path = path;
    }

    return result;
}

module.exports = globrex;


/***/ }),

/***/ "./src/views/BroomDialog.tsx":
/*!***********************************!*\
  !*** ./src/views/BroomDialog.tsx ***!
  \***********************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const session_1 = __webpack_require__(/*! ../actions/session */ "./src/actions/session.ts");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const pathlib = __importStar(__webpack_require__(/*! path */ "path"));
const globrex = __webpack_require__(/*! ../util/globrex */ "./src/util/globrex.js");
class BroomDialog extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.enter = () => {
            this.setState({ cleanButtonDisabled: true });
            this.props.onSetMatchedFiles([]);
            this.props.onClearMessages();
        };
        this.close = () => {
            this.setState({ cleanButtonDisabled: true });
            this.props.onClearMessages();
            this.props.onSetOpen(false);
        };
        this.fileHandler = () => __awaiter(this, void 0, void 0, function* () {
            for (var file of this.props.matchedFiles) {
                if (this.isParentDir(file, this.props.stagingPath)) {
                    if (this.props.deleteOption) {
                        yield vortex_api_1.fs.unlinkAsync(file);
                    }
                    else if (this.props.unhideOption) {
                        yield vortex_api_1.fs.renameAsync(file, file.replace(/.vohidden$/, ""));
                    }
                    else {
                        yield vortex_api_1.fs.renameAsync(file, file + ".vohidden");
                    }
                }
                else {
                    this.errorHandler("Attempted to process a file outside the mods directory.");
                    return;
                }
            }
            this.doneFileHandler();
        });
        this.findFiles = (path, patternList, skipPattern, output) => __awaiter(this, void 0, void 0, function* () {
            if ((yield vortex_api_1.fs.lstatAsync(path)).isDirectory()) {
                const entries = yield vortex_api_1.fs.readdirAsync(path);
                for (var entry of entries) {
                    var entryPath = pathlib.join(path, entry);
                    if ((yield vortex_api_1.fs.lstatAsync(entryPath)).isDirectory()) {
                        yield this.findFiles(entryPath, patternList, skipPattern, output);
                    }
                    else {
                        for (var pattern of patternList) {
                            if (entryPath.search(pattern) != -1 && output.indexOf(entryPath) == -1) {
                                if (skipPattern && entryPath.search(skipPattern) != -1) {
                                }
                                else {
                                    output.push(entryPath);
                                }
                            }
                        }
                    }
                }
            }
        });
        this.search = () => __awaiter(this, void 0, void 0, function* () {
            const { stagingPath, enabledMods } = this.props;
            var globalRules = "";
            for (let mod of enabledMods) {
                var broomFiles = [];
                var modPath = pathlib.join(stagingPath, mod.installationPath);
                yield this.findFiles(modPath, [/\.broom(\.vohidden)?$/i], null, broomFiles);
                for (var broomFilePath of broomFiles) {
                    globalRules += vortex_api_1.fs.readFileSync(broomFilePath, 'utf8') + "\n";
                }
            }
            var globalRulesList = globalRules.split(/\r?\n/).map(x => x.trim()).filter(x => x.length > 0);
            if (this.props.unhideOption && !this.props.deleteOption)
                for (var i = 0; i < globalRulesList.length; i++)
                    globalRulesList[i] += ".vohidden";
            this.rulesHandler(globalRulesList);
            if (globalRulesList.length == 0)
                return;
            var globalRulesTranslated = globalRulesList.map(x => globrex(x, { flags: 'g' }).regex);
            var skipPattern = /\.vohidden$/;
            if (this.props.deleteOption || this.props.unhideOption)
                skipPattern = null;
            for (let mod of enabledMods) {
                var filesToSweep = [];
                var modPath = pathlib.join(stagingPath, mod.installationPath);
                yield this.findFiles(modPath, globalRulesTranslated, skipPattern, filesToSweep);
                if (filesToSweep.length > 0) {
                    this.matchHandler(filesToSweep);
                }
            }
            this.doneSearchHandler();
        });
        this.findButtonHandler = () => __awaiter(this, void 0, void 0, function* () {
            this.props.onClearMessages();
            var searchMsg = "<b style='color:lightblue'>Searching for rule configuration files...</b>";
            this.props.onAddMessages([searchMsg, "</br>"]);
            yield this.search();
        });
        this.rulesHandler = (globalRulesList) => {
            var ruleMessages = [];
            if (globalRulesList.length == 0) {
                ruleMessages.push("No rules found. Make sure your Broom rules are properly installed as mods.");
            }
            else {
                ruleMessages.push("<b style='color:lightblue'>Rules found:</b>", "</br>");
                ruleMessages = ruleMessages.concat(globalRulesList);
                ruleMessages.push("</br>", "<b style='color:lightblue'>Scanning modlist for matching files...</b>", "</br>");
            }
            this.props.onAddMessages(ruleMessages);
        };
        this.matchHandler = (values) => {
            const { matchedFiles } = this.props;
            this.props.onSetMatchedFiles(matchedFiles.concat(values));
            this.props.onAddMessages(values);
        };
        this.doneSearchHandler = () => {
            var doneMessages = [];
            if (this.props.matchedFiles.length == 0) {
                doneMessages.push("No files found.");
            }
            else {
                var doneMessage = "";
                if (this.props.deleteOption)
                    doneMessage = "Done. Press the Delete Files button to delete the above files.";
                else if (this.props.unhideOption)
                    doneMessage = "Done. Press the Un-hide Files button to restore the above files.";
                else
                    doneMessage = "Done. Press the Hide Files button to hide the above files.";
                doneMessages.push("</br>", `<b style='color:orange;'>${doneMessage}</b>`, "</br>");
                this.setState({ cleanButtonDisabled: false });
            }
            this.props.onAddMessages(doneMessages);
        };
        this.errorHandler = (msg) => {
            this.props.onAddMessages([msg, "</br>"]);
        };
        this.cleanButtonHandler = () => {
            var actionMsg = "";
            if (this.props.deleteOption)
                actionMsg = "Deleting files...";
            else if (this.props.unhideOption)
                actionMsg = "Restoring files...";
            else
                actionMsg = "Hiding files...";
            actionMsg = `<b style='color:lightblue'>${actionMsg}</b>`;
            this.props.onAddMessages([actionMsg, "</br>"]);
            this.fileHandler();
        };
        this.doneFileHandler = () => {
            var outcomeMsg = "";
            if (this.props.deleteOption)
                outcomeMsg = "were deleted";
            else if (this.props.unhideOption)
                outcomeMsg = "were restored";
            else
                outcomeMsg = "were hidden";
            outcomeMsg = "" + this.props.matchedFiles.length + " files " + outcomeMsg;
            var finalMessage = "<b style='color:orange'>Close this dialog and Deploy Mods to complete the operation.</b>";
            this.setState({ cleanButtonDisabled: true });
            this.props.onAddMessages([outcomeMsg, "</br>", finalMessage]);
        };
        this.initState({
            cleanButtonDisabled: true
        });
    }
    render() {
        const { t, open, messages } = this.props;
        const { cleanButtonDisabled } = this.state;
        const styleObj = {
            userSelect: 'text'
        };
        var cleanButtonTitle = "Hide Files";
        if (this.props.deleteOption)
            cleanButtonTitle = "Delete Files";
        else if (this.props.unhideOption)
            cleanButtonTitle = "Un-hide Files";
        return (react_1.default.createElement(vortex_api_1.Modal, { id: 'broom-page', show: open, onEnter: this.enter, onHide: this.close, bsSize: "large", dialogClassName: "broom-modal" },
            react_1.default.createElement(vortex_api_1.Modal.Header, null,
                react_1.default.createElement(react_bootstrap_1.Grid, null,
                    react_1.default.createElement(react_bootstrap_1.Row, { className: "show-grid" },
                        react_1.default.createElement(react_bootstrap_1.Col, { lg: 4 },
                            react_1.default.createElement(react_bootstrap_1.Button, { className: "btn-block", onClick: this.findButtonHandler }, 'Find Files'),
                            ' '),
                        react_1.default.createElement(react_bootstrap_1.Col, { lg: 4 },
                            react_1.default.createElement(react_bootstrap_1.Button, { className: "btn-block", onClick: this.cleanButtonHandler, disabled: cleanButtonDisabled }, cleanButtonTitle))))),
            react_1.default.createElement(vortex_api_1.Modal.Body, { style: styleObj }, messages.map(msg => react_1.default.createElement("div", { style: styleObj, dangerouslySetInnerHTML: { __html: msg } }))),
            react_1.default.createElement(vortex_api_1.Modal.Footer, null,
                react_1.default.createElement(react_bootstrap_1.Button, { onClick: this.close }, 'Close'))));
    }
    isParentDir(child, parent) {
        var prev = "";
        var current = child;
        while (current != prev) {
            prev = current;
            current = pathlib.dirname(current);
            if (current == parent)
                return true;
        }
        return false;
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onSetOpen: (open) => dispatch(session_1.setOpenBroomDialog(open)),
        onAddMessages: (msgList) => dispatch(session_1.addBroomMessages(msgList)),
        onClearMessages: () => dispatch(session_1.clearBroomMessages([])),
        onSetMatchedFiles: (pathList) => dispatch(session_1.setBroomMatchedFiles(pathList))
    };
}
function mapStateToProps(state) {
    const gameId = vortex_api_1.selectors.activeGameId(state);
    var mods = vortex_api_1.util.getSafe(state.persistent, ['mods', gameId], {});
    var profile = vortex_api_1.selectors.activeProfile(state);
    var profileMods = vortex_api_1.util.getSafe(profile, ['modState'], {});
    return {
        open: vortex_api_1.util.getSafe(state, ['session', 'broom', 'open'], false),
        messages: vortex_api_1.util.getSafe(state, ['session', 'broom', 'messages'], []),
        matchedFiles: vortex_api_1.util.getSafe(state, ['session', 'broom', 'matchedFiles'], []),
        stagingPath: vortex_api_1.selectors.installPathForGame(state, gameId),
        enabledMods: Object.keys(profileMods).filter(m => profileMods[m].enabled).map(x => mods[x]),
        deleteOption: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'broomDeleteFiles'], false),
        unhideOption: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'broomUnhide'], false),
    };
}
exports.default = react_i18next_1.withTranslation(['common', 'broom'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(BroomDialog));


/***/ }),

/***/ "./src/views/Settings.tsx":
/*!********************************!*\
  !*** ./src/views/Settings.tsx ***!
  \********************************/
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
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const settings_1 = __webpack_require__(/*! ../actions/settings */ "./src/actions/settings.ts");
class Settings extends vortex_api_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.toggleDeleteFiles = (enabled) => {
            const { onSetDeleteFiles } = this.props;
            onSetDeleteFiles(enabled);
        };
        this.toggleUnhide = (enabled) => {
            const { onSetUnhide } = this.props;
            onSetUnhide(enabled);
        };
    }
    render() {
        const { t, deleteFiles, unhide } = this.props;
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.ControlLabel, null, t('Broom - The Loose File Sweeper')),
            React.createElement(vortex_api_1.Toggle, { checked: deleteFiles, onToggle: this.toggleDeleteFiles },
                t('Delete files instead of hiding them'),
                React.createElement(vortex_api_1.More, { id: 'broom-delete-files', name: 'Delete files instead of hiding them' }, t('If this is enabled, the Hide Files button on the Broom dialog will change to Delete Files. ' +
                    'Matching files will be permanently deleted. Use this option with care.'))),
            React.createElement(vortex_api_1.Toggle, { checked: unhide, onToggle: this.toggleUnhide },
                t('Unhide files'),
                React.createElement(vortex_api_1.More, { id: 'broom-unhide-files', name: 'Unhide files' }, t('Revert the hide operation by finding all matching files and removing the .vohidden extension. ' +
                    'Incompatible with the "Delete files" option.')))));
    }
}
function mapStateToProps(state) {
    return {
        deleteFiles: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'broomDeleteFiles'], false),
        unhide: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'broomUnhide'], false),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetDeleteFiles: (flag) => dispatch(settings_1.setBroomDeleteFiles(flag)),
        onSetUnhide: (flag) => dispatch(settings_1.setBroomUnhide(flag)),
    };
}
exports.default = react_i18next_1.withTranslation(['common', 'broom'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Settings));


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
//# sourceMappingURL=broom.js.map