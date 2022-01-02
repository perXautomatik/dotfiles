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

/***/ "./src/actions/actions.ts":
/*!********************************!*\
  !*** ./src/actions/actions.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomConfigPath = exports.addCustomConfigPath = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.addCustomConfigPath = redux_act_1.createAction('ADD_CUSTOM_CONFIG_PATH', (gameId, path) => ({ gameId, path }));
exports.deleteCustomConfigPath = redux_act_1.createAction('DELETE_CUSTOM_CONFIG_PATH', (gameId, path) => ({ gameId, path }));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __webpack_require__(/*! path */ "path");
const IniEditor_1 = __webpack_require__(/*! ./views/IniEditor */ "./src/views/IniEditor.tsx");
const gameSupport_1 = __webpack_require__(/*! ./util/gameSupport */ "./src/util/gameSupport.ts");
const reducers_1 = __webpack_require__(/*! ./reducers/reducers */ "./src/reducers/reducers.ts");
function main(context) {
    context.registerReducer(['settings', 'ini-editor'], reducers_1.IniEditorReducer);
    context.registerDialog('ini-editor', IniEditor_1.default);
    context.registerAction('mod-icons', 25, 'mods', {}, 'INI Editor', () => {
        context.api.store.dispatch(vortex_api_1.actions.setDialogVisible('ini-editor'));
    }, () => gameSupport_1.gameHasIniFiles(context.api));
    context.once(() => {
        context.api.setStylesheet('ini-editor', path.join(__dirname, 'ini-editor.scss'));
    });
    return true;
}
exports.default = main;


/***/ }),

/***/ "./src/reducers/reducers.ts":
/*!**********************************!*\
  !*** ./src/reducers/reducers.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IniEditorReducer = void 0;
const actions = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.ts");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const IniEditorReducer = {
    reducers: {
        [actions.addCustomConfigPath]: (state, payload) => {
            let current = vortex_api_1.util.getSafe(state, [payload.gameId, 'filePaths'], []);
            if (!current.includes(payload.path))
                current.push(payload.path);
            return vortex_api_1.util.setSafe(state, [payload.gameId, 'filePaths'], current);
        },
        [actions.deleteCustomConfigPath]: (state, payload) => {
            let current = vortex_api_1.util.getSafe(state, [payload.gameId, 'filePaths'], []);
            let index = current.indexOf(payload.path);
            if (index > -1)
                current.splice(index, 1);
            return vortex_api_1.util.setSafe(state, [payload.gameId, 'filePaths'], current);
        },
    },
    defaults: {}
};
exports.IniEditorReducer = IniEditorReducer;


/***/ }),

/***/ "./src/util/gameSupport.ts":
/*!*********************************!*\
  !*** ./src/util/gameSupport.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameInis = exports.gameHasIniFiles = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __webpack_require__(/*! path */ "path");
const gameSupport = {
    "skyrim": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim', 'Skyrim.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim', 'SkyrimPrefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim', 'SkyrimCustom.ini')
        ]
    },
    "skyrimse": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim Special Edition', 'Skyrim.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim Special Edition', 'SkyrimPrefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim Special Edition', 'SkyrimCustom.ini')
        ]
    },
    "skyrimVR": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim VR', 'Skyrim.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim VR', 'SkyrimVR.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim VR', 'SkyrimPrefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim VR', 'SkyrimCustom.ini')
        ]
    },
    "fallout4": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4', 'Fallout4.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4', 'Fallout4Prefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4', 'Fallout4Custom.ini')
        ]
    },
    "fallout4vr": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4VR', 'Fallout4.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4VR', 'Fallout4Prefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4VR', 'Fallout4Custom.ini')
        ]
    },
    "falloutnv": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'FalloutNV', 'Fallout.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'FalloutNV', 'FalloutPrefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'FalloutNV', 'FalloutCustom.ini'),
        ]
    },
    "fallout3": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout3', 'Fallout.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout3', 'FalloutPrefs.ini'),
        ]
    },
    "oblivion": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Oblivion', 'Oblivion.ini'),
        ]
    },
    "enderal": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Enderal', 'Enderal.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Enderal', 'EnderalPrefs.ini'),
        ]
    },
    "enderalspecialedition": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Enderal', 'Enderal.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Enderal', 'EnderalPrefs.ini'),
        ]
    },
    "morrowind": {
        filePaths: [
            path.join('{gamepath}', 'Morrowind.ini')
        ]
    }
};
const xboxGamePassSupport = {
    "skyrimse": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim Special Edition MS', 'Skyrim.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim Special Edition MS', 'SkyrimPrefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Skyrim Special Edition MS', 'SkyrimCustom.ini')
        ]
    },
    "fallout4": {
        filePaths: [
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4 MS', 'Fallout4.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4 MS', 'Fallout4Prefs.ini'),
            path.join(vortex_api_1.util.getVortexPath('documents'), 'My Games', 'Fallout4 MS', 'Fallout4Custom.ini')
        ]
    },
};
function getGameInis(gameId, state) {
    if (!gameId)
        return undefined;
    const discovery = vortex_api_1.util.getSafe(state, ['settings', 'gameMode', 'discovered', gameId], undefined);
    const game = vortex_api_1.util.getGame(gameId);
    const ini = vortex_api_1.util.getSafe(game, ['iniFiles'], undefined);
    let iniFiles = ini ? ini(state) : gameSupport[gameId];
    if ((discovery === null || discovery === void 0 ? void 0 : discovery.path) && isXboxPath(discovery.path))
        iniFiles = xboxGamePassSupport[gameId] || iniFiles;
    if (!!iniFiles)
        iniFiles.filePaths = iniFiles.filePaths.map(path => path.replace('{gamepath}', discovery.path));
    return iniFiles;
}
exports.getGameInis = getGameInis;
function gameHasIniFiles(api) {
    const state = api.store.getState();
    const gameId = vortex_api_1.selectors.activeGameId(state);
    if (!gameId)
        return false;
    if (gameSupport[gameId])
        return true;
    const game = vortex_api_1.util.getGame(gameId);
    const ini = vortex_api_1.util.getSafe(game, ['iniFiles'], undefined);
    return (!!ini);
}
exports.gameHasIniFiles = gameHasIniFiles;
function isXboxPath(discoveryPath) {
    const hasPathElement = (element) => discoveryPath.toLowerCase().includes(element);
    return ['modifiablewindowsapps', '3275kfvn8vcwc'].find(hasPathElement) !== undefined;
}


/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigFileData = exports.ensureFile = exports.stopWatchingFile = exports.watchIniFile = exports.saveIniContent = exports.getAllIniContent = exports.getSelectOptions = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __webpack_require__(/*! path */ "path");
let watcher = undefined;
let watchPath;
let updater;
function getSelectOptions(iniList) {
    return iniList.map(ini => ({ value: ini, label: path.basename(ini) }));
}
exports.getSelectOptions = getSelectOptions;
function getAllIniContent(iniList) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = {};
        for (const ini of iniList) {
            result[ini] = yield getConfigFileData(ini);
        }
        return Promise.resolve(result);
    });
}
exports.getAllIniContent = getAllIniContent;
function getConfigFileData(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield vortex_api_1.fs.readFileAsync(filePath, { encoding: 'utf8' });
            return data;
        }
        catch (err) {
            if (err.code !== 'ENOENT')
                vortex_api_1.log('warn', 'Error loading config file data', { err, filePath });
            return '';
        }
    });
}
exports.getConfigFileData = getConfigFileData;
function ensureFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield vortex_api_1.fs.ensureFileAsync(path);
        }
        catch (err) {
            vortex_api_1.log('error', 'Error ensuring INI file exists', { err, path });
            throw err;
        }
    });
}
exports.ensureFile = ensureFile;
function watchIniFile(path, updateFunc) {
    watcher = vortex_api_1.fs.watch(path);
    watchPath = path;
    updater = updateFunc;
    watcher.on("change", (eventType, filename) => __awaiter(this, void 0, void 0, function* () {
        if (eventType === 'rename') {
            if (updater)
                updater('');
            return;
        }
        try {
            const data = yield vortex_api_1.fs.readFileAsync(watchPath, { encoding: 'utf8' });
            if (updater)
                updater(data);
        }
        catch (err) {
            vortex_api_1.log('error', 'Error reading changed file', { err, filename });
        }
    }));
}
exports.watchIniFile = watchIniFile;
function stopWatchingFile(keepUpdater) {
    if (watcher)
        watcher.close();
    if (!keepUpdater) {
        updater = undefined;
        watchPath = undefined;
    }
    ;
}
exports.stopWatchingFile = stopWatchingFile;
function saveIniContent(path, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            stopWatchingFile(true);
            yield vortex_api_1.fs.writeFileAsync(path, data, { encoding: 'utf8' });
            watchIniFile(path, updater);
        }
        catch (err) {
            vortex_api_1.log('error', 'Could not save INI file', { err, path });
        }
    });
}
exports.saveIniContent = saveIniContent;


/***/ }),

/***/ "./src/views/IniEditor.tsx":
/*!*********************************!*\
  !*** ./src/views/IniEditor.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const react_select_1 = __webpack_require__(/*! react-select */ "react-select");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const gameSupport_1 = __webpack_require__(/*! ../util/gameSupport */ "./src/util/gameSupport.ts");
const actions_1 = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.ts");
const util_1 = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
function nop() {
}
class IniEditor extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.deleteIniPath = (gameId, path) => {
            const { deleteCustomIniPath, baseInis, customInis } = this.props;
            const { activeIni } = this.state;
            if (activeIni === path)
                this.setActiveIni([...baseInis, ...customInis][0]);
            deleteCustomIniPath(gameId, path);
        };
        this.browsePath = () => __awaiter(this, void 0, void 0, function* () {
            const { t, baseInis, customInis } = this.props;
            const allInis = [...baseInis, ...customInis].map(file => file.toLowerCase());
            const newFile = yield this.context.api.selectFile({
                title: 'Select configuration file',
                filters: [
                    { name: t('Config Files'), extensions: ['ini', 'txt', 'json', 'xml'] },
                    { name: t('INI File'), extensions: ['ini'] },
                    { name: t('Text File'), extensions: ['txt'] },
                    { name: t('JSON File'), extensions: ['json'] },
                    { name: t('XML File'), extensions: ['xml'] }
                ],
                defaultPath: vortex_api_1.util.getVortexPath('documents')
            });
            if (!newFile || allInis.includes(newFile.toLowerCase()))
                return;
            this.nextState.iniData[newFile] = yield util_1.getConfigFileData(newFile);
            return this.props.addCustomIniPath(this.props.gameId, newFile);
        });
        this.initState({
            bodyState: 'loading',
            saving: false,
        });
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (!this.props.visible && newProps.visible) {
            this.preload();
            this.nextState.bodyState = 'loading';
        }
        else if (!newProps.visible)
            util_1.stopWatchingFile();
    }
    preload() {
        return __awaiter(this, void 0, void 0, function* () {
            const { baseInis, customInis } = this.props;
            const allInis = [...baseInis, ...customInis];
            try {
                const iniData = yield util_1.getAllIniContent(allInis);
                this.nextState.iniData = iniData;
                this.setActiveIni(Object.keys(iniData)[0]);
            }
            catch (err) {
                console.log(err);
            }
            this.nextState.bodyState = 'editor';
            return Promise.resolve();
        });
    }
    setActiveIni(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            util_1.stopWatchingFile();
            if (this.state.iniData[filePath] === '')
                yield util_1.ensureFile(filePath);
            util_1.watchIniFile(filePath, (data) => {
                this.nextState.iniData[filePath] = data;
                this.nextState.editableData = data;
            });
            this.nextState.activeIni = filePath;
            this.nextState.editableData = `${this.nextState.iniData[filePath]}`;
            return Promise.resolve();
        });
    }
    updateEditable(event) {
        this.nextState.editableData = event.target.value;
    }
    render() {
        const { t, onHide, visible, game } = this.props;
        const { bodyState } = this.state;
        return (React.createElement(vortex_api_1.Modal, { id: 'ini-editor', show: visible, onHide: nop },
            React.createElement(vortex_api_1.Modal.Header, null,
                React.createElement("h3", null, t('{{game}} - INI Editor', { replace: { game: (game === null || game === void 0 ? void 0 : game.name) || '???' } }))),
            React.createElement(vortex_api_1.Modal.Body, null, visible ? this.renderBody(bodyState) : null),
            React.createElement(vortex_api_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { onClick: onHide }, t('Close')))));
    }
    renderBody(bodyState) {
        switch (bodyState) {
            case 'loading': return this.renderLoading();
            case 'editor': return this.renderEditor();
            case 'settings': return this.renderSettings();
            default: return null;
        }
    }
    renderLoading() {
        return (React.createElement("div", { className: 'ini-editor-loading' },
            React.createElement(vortex_api_1.Spinner, { className: 'ini-editor-loading-spinner' })));
    }
    renderEditor() {
        const { baseInis, customInis, t } = this.props;
        const { activeIni, iniData, editableData, saving } = this.state;
        const allInis = [...baseInis, ...customInis];
        const options = util_1.getSelectOptions(allInis);
        const data = iniData[activeIni];
        const blockSave = data == editableData;
        return (React.createElement("div", { className: 'ini-editor-edit' },
            React.createElement("div", { className: 'ini-editor-edit-controls' },
                React.createElement("span", { className: 'selector' },
                    React.createElement(react_select_1.default, { options: options, value: activeIni, onChange: (newValue) => this.setActiveIni(newValue.value), clearable: false })),
                React.createElement("span", null,
                    React.createElement(react_bootstrap_1.Button, { onClick: () => vortex_api_1.util.opn(activeIni).catch(() => undefined) },
                        React.createElement(vortex_api_1.Icon, { name: 'changelog' }),
                        " ",
                        t('View')),
                    React.createElement(react_bootstrap_1.Button, { onClick: () => this.nextState.bodyState = 'settings' },
                        React.createElement(vortex_api_1.Icon, { name: 'settings' }),
                        " ",
                        t('Settings')))),
            React.createElement("textarea", { spellCheck: false, className: 'ini-editor-textarea', value: editableData, onChange: this.updateEditable.bind(this) }),
            React.createElement(react_bootstrap_1.Button, { disabled: blockSave || saving, className: 'wide-button', onClick: this.saveIniEdits.bind(this) },
                React.createElement(vortex_api_1.Icon, { name: 'savegame' }),
                " ",
                t('Save'))));
    }
    saveIniEdits() {
        return __awaiter(this, void 0, void 0, function* () {
            const { activeIni, editableData } = this.state;
            const { setDeploymentRequired, gameId } = this.props;
            this.nextState.saving = true;
            try {
                yield util_1.saveIniContent(activeIni, editableData);
                this.nextState.iniData[activeIni] = editableData;
                setDeploymentRequired(gameId, true);
            }
            catch (err) {
                this.nextState.error = `Unable to save INI: ${err.message}`;
            }
            this.nextState.saving = false;
        });
    }
    renderSettings() {
        const { t, customInis, baseInis, deleteCustomIniPath, gameId, game } = this.props;
        const baseNames = util_1.getSelectOptions(baseInis);
        const customNames = util_1.getSelectOptions(customInis);
        const gameName = game.name;
        return (React.createElement("div", { className: 'ini-editor-settings' },
            t('Using the controls below, you can manage the files that appear in the drop-down selector for {{gameName}}. Hover you cursor over the file name to see the full path.', { replace: { gameName } }),
            baseInis ?
                React.createElement("div", null,
                    React.createElement("h4", null, t('Base INIs')),
                    React.createElement("ul", null, baseNames.map(ini => (React.createElement("li", { title: ini.value }, ini.label))))) : undefined,
            React.createElement("div", null,
                React.createElement("h4", null, t('Custom INIs')),
                React.createElement("ul", null,
                    customInis ? customNames.map(ini => (React.createElement("li", { title: ini.value },
                        ini.label,
                        " ",
                        React.createElement(react_bootstrap_1.Button, { onClick: () => this.deleteIniPath(gameId, ini.value) },
                            React.createElement(vortex_api_1.Icon, { name: 'toggle-uninstalled' }))))) : undefined,
                    React.createElement("li", null,
                        React.createElement(react_bootstrap_1.Button, { onClick: this.browsePath },
                            " ",
                            React.createElement(vortex_api_1.Icon, { name: 'add' }),
                            " ",
                            t('Add'),
                            " ")))),
            t('Valid files must have a .TXT, .JSON, .XML or .INI file extension.'),
            React.createElement("br", null),
            React.createElement(react_bootstrap_1.Button, { onClick: () => this.nextState.bodyState = 'editor' }, "Back")));
    }
}
function mapStateToProps(state) {
    const gameId = vortex_api_1.selectors.activeGameId(state);
    const game = vortex_api_1.util.getGame(gameId);
    const gameInis = gameSupport_1.getGameInis(gameId, state);
    const customInis = vortex_api_1.util.getSafe(state, ['settings', 'ini-editor', gameId], undefined);
    return {
        gameId,
        game,
        baseInis: (gameInis === null || gameInis === void 0 ? void 0 : gameInis.filePaths) || [],
        customInis: (customInis === null || customInis === void 0 ? void 0 : customInis.filePaths) || [],
    };
}
function dispatchStateToProps(dispatch) {
    return {
        setDeploymentRequired: (gameId, necessary) => dispatch(vortex_api_1.actions.setDeploymentNecessary(gameId, necessary)),
        addCustomIniPath: (gameId, path) => dispatch(actions_1.addCustomConfigPath(gameId, path)),
        deleteCustomIniPath: (gameId, path) => dispatch(actions_1.deleteCustomConfigPath(gameId, path))
    };
}
exports.default = react_i18next_1.withTranslation(['ini-editor'])(react_redux_1.connect(mapStateToProps, dispatchStateToProps)(IniEditor));


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

/***/ "vortex-api":
/*!*****************************!*\
  !*** external "vortex-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ })

/******/ });
//# sourceMappingURL=sample-extension.js.map