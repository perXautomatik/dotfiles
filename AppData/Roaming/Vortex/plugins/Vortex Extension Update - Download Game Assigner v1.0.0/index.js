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

/***/ "./src/actions.ts":
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resetAutoAssignRules = exports.deleteAutoAssignRule = exports.addAutoAssignRule = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.addAutoAssignRule = redux_act_1.createAction('ADD_AUTOASSIGN_RULE', (downloadFor, assignGame) => ({ downloadFor, assignGame, timeAdded: new Date().getTime() }));
exports.deleteAutoAssignRule = redux_act_1.createAction('DELETE_AUTOASSIGN_RULE', (downloadFor, assignGame) => ({ downloadFor, assignGame }));
exports.resetAutoAssignRules = redux_act_1.createAction('RESET_AUTOASSIGN_RULES', () => ({}));


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
const reducer_1 = __webpack_require__(/*! ./reducer */ "./src/reducer.ts");
function main(context) {
    context.registerReducer(['settings', 'downloadAssigner'], reducer_1.autoAssignerReducer);
    context.registerSettings('Download', vortex_api_1.util.LazyComponent(() => __webpack_require__(/*! ./views/DownloadAssignmentSettings */ "./src/views/DownloadAssignmentSettings.tsx")), () => { }, () => true, 100);
    context.once(() => {
        context.api.onStateChange(['persistent', 'downloads', 'files'], (prevDLs, newDLs) => updateGames(prevDLs, newDLs, context.api));
    });
    return true;
}
function updateGames(prevDLs, newDLs, api) {
    const prevIds = Object.keys(prevDLs);
    const newIds = Object.keys(newDLs);
    if (prevIds.length < newIds.length) {
        const found = newIds.filter(dl => prevIds.indexOf(dl) === -1)
            .map(newDownload => (Object.assign({ id: newDownload }, newDLs[newDownload])));
        const state = api.store.getState();
        const rules = vortex_api_1.util.getSafe(state, ['settings', 'downloadAssigner', 'rules'], []);
        const games = vortex_api_1.util.getSafe(state, ['settings', 'gameMode', 'discovered'], {});
        found.forEach((newDownload) => {
            const filteredRules = rules.filter(r => newDownload.game.includes(r.downloadFor));
            filteredRules.forEach((rule) => {
                var _a;
                if (!games[rule.assignGame])
                    return;
                if (newDownload.game.includes(rule.downloadFor) && !newDownload.game.includes(rule.assignGame)) {
                    const newGames = [...newDownload.game];
                    newGames.push(rule.assignGame);
                    vortex_api_1.log('info', 'Automatically assigning compatible game to download', { dl: ((_a = newDownload.modInfo) === null || _a === void 0 ? void 0 : _a.name) || newDownload.id, game: rule.assignGame });
                    api.store.dispatch(vortex_api_1.actions.setCompatibleGames(newDownload.id, newGames));
                }
            });
        });
    }
}
exports.default = main;


/***/ }),

/***/ "./src/reducer.ts":
/*!************************!*\
  !*** ./src/reducer.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.autoAssignerReducer = void 0;
const actions = __webpack_require__(/*! ./actions */ "./src/actions.ts");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const defaultRules = [
    {
        downloadFor: "enderal",
        assignGame: "skyrim",
        timeAdded: 0
    },
    {
        downloadFor: "enderalspecialedition",
        assignGame: "skyrimse",
        timeAdded: 1
    },
    {
        downloadFor: "skyrimse",
        assignGame: "skyrimvr",
        timeAdded: 3
    },
    {
        downloadFor: "fallout4",
        assignGame: "fallout4vr",
        timeAdded: 2
    },
    {
        downloadFor: "xcom2",
        assignGame: "xcom2-wotc",
        timeAdded: 4
    }
];
const autoAssignerReducer = {
    reducers: {
        [actions.addAutoAssignRule]: (state, payload) => {
            const rules = vortex_api_1.util.getSafe(state, ['rules'], []);
            rules.push(payload);
            return vortex_api_1.util.setSafe(state, ['rules'], rules);
        },
        [actions.deleteAutoAssignRule]: (state, payload) => {
            const rules = vortex_api_1.util.getSafe(state, ['rules'], []);
            const newRules = rules.filter(r => r.assignGame !== payload.assignGame && r.downloadFor !== payload.downloadFor);
            return vortex_api_1.util.setSafe(state, ['rules'], newRules);
        },
        [actions.resetAutoAssignRules]: (state, payload) => vortex_api_1.util.setSafe(state, ['rules'], [...defaultRules]),
    },
    defaults: {
        rules: [...defaultRules]
    }
};
exports.autoAssignerReducer = autoAssignerReducer;


/***/ }),

/***/ "./src/views/DownloadAssignmentSettings.tsx":
/*!**************************************************!*\
  !*** ./src/views/DownloadAssignmentSettings.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const actions_1 = __webpack_require__(/*! ../actions */ "./src/actions.ts");
class DownloadAssignmentSettings extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.initState({
            downloadFor: '',
            assignGame: ''
        });
    }
    render() {
        const { t } = this.props;
        const { downloadFor, assignGame } = this.state;
        const recommendTitle = t('Use a set of recommended defaults based on the common combinations of games this feature would be useful for.');
        return (React.createElement("form", null,
            React.createElement(react_bootstrap_1.FormGroup, null,
                React.createElement(react_bootstrap_1.ControlLabel, null,
                    t('Download Game Assignments'),
                    React.createElement(vortex_api_1.More, { id: 'more-downloadassigner', name: t('Download Game Assignment') }, t('When Vortex adds a new download from Nexus Mods, these settings will be used to decide which games to assign as compatible to each archive.'
                        + 'This will prevent Vortex from reminding you that the mod was intended for a different game during installation and ensure it correctly shows up '
                        + 'in the downloads tab while your preferred game is active.'))),
                React.createElement(react_bootstrap_1.HelpBlock, null, t('Add a new row to automatically mark downloaded archives for the game in the first column as compatible with game in the second column.')),
                React.createElement(react_bootstrap_1.Table, null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, t('Downloads for')),
                            React.createElement("th", null, t('are compatible with')),
                            React.createElement("th", null, t('Actions')))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("select", { className: 'form-control', value: downloadFor, onChange: this.handleDownloadFor.bind(this) },
                                    React.createElement("option", { value: '' }, t('Select game')),
                                    this.gameList(true))),
                            React.createElement("td", null,
                                React.createElement("select", { className: 'form-control', value: assignGame, onChange: this.handleAssignGame.bind(this) },
                                    React.createElement("option", { value: '' }, t('Select game')),
                                    this.gameList(false))),
                            React.createElement("td", null,
                                React.createElement(react_bootstrap_1.Button, { disabled: !downloadFor || !assignGame, title: t('Add new rule'), onClick: this.addNewRule.bind(this) },
                                    React.createElement(vortex_api_1.Icon, { name: 'add' })))),
                        this.ruleList())),
                React.createElement(react_bootstrap_1.Button, { title: recommendTitle, onClick: this.defaults.bind(this) },
                    React.createElement(vortex_api_1.Icon, { name: 'smart' }),
                    " ",
                    t('Use recommended')))));
    }
    handleDownloadFor(event) {
        const { assignGame } = this.state;
        let newValue = event.target.value;
        if (assignGame === newValue)
            newValue = undefined;
        this.nextState.downloadFor = newValue;
    }
    handleAssignGame(event) {
        const { downloadFor } = this.state;
        let newValue = event.target.value;
        if (downloadFor === newValue)
            newValue = undefined;
        this.nextState.assignGame = newValue;
    }
    addNewRule() {
        const { downloadFor, assignGame } = this.state;
        const { addRule, rules } = this.props;
        const existingRule = rules.find(r => r.assignGame === assignGame && r.downloadFor === downloadFor);
        if (!existingRule)
            addRule({ downloadFor, assignGame });
        this.nextState.assignGame = '';
        this.nextState.downloadFor = '';
    }
    defaults() {
        const { resetToDefaults } = this.props;
        resetToDefaults();
    }
    gameList(primary) {
        const { downloadFor, assignGame } = this.state;
        const { games, gameName } = this.props;
        const filterValue = !primary ? downloadFor : assignGame;
        const filteredGames = games.filter(g => g.id !== filterValue)
            .sort((a, b) => gameName(a.id) < gameName(b.id) ? -1 : 1);
        const options = filteredGames.map(game => (React.createElement("option", { value: game.id }, gameName(game.id))));
        return (React.createElement(React.Fragment, null, options));
    }
    ruleList() {
        const { t, rules, deleteRule, gameName } = this.props;
        const listing = rules.sort(sortRulesByTime).map(rule => {
            const ruleAdded = (rule.timeAdded > 0) ? new Date(rule.timeAdded).toLocaleDateString() : t('by default');
            return (React.createElement("tr", { title: t('Rule created {{ruleAdded}}', { replace: { ruleAdded } }) },
                React.createElement("td", null, gameName(rule.downloadFor)),
                React.createElement("td", null, gameName(rule.assignGame)),
                React.createElement("td", null,
                    React.createElement(react_bootstrap_1.Button, { onClick: () => deleteRule(rule), title: t('Delete rule') },
                        React.createElement(vortex_api_1.Icon, { name: 'delete' })))));
        });
        return (React.createElement(React.Fragment, null, listing));
    }
}
function sortRulesByTime(a, b) {
    return a.timeAdded > b.timeAdded ? 1 : -1;
}
function mapStateToProps(state) {
    const rules = vortex_api_1.util.getSafe(state, ['settings', 'downloadAssigner', 'rules'], []);
    const discovered = vortex_api_1.util.getSafe(state, ['settings', 'gameMode', 'discovered'], {});
    const games = vortex_api_1.selectors.knownGames(state);
    return {
        rules,
        discovered,
        games,
        gameName: (gameId) => vortex_api_1.selectors.gameName(state, gameId)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addRule: (rule) => dispatch(actions_1.addAutoAssignRule(rule.downloadFor, rule.assignGame)),
        deleteRule: (rule) => dispatch(actions_1.deleteAutoAssignRule(rule.downloadFor, rule.assignGame)),
        resetToDefaults: () => dispatch(actions_1.resetAutoAssignRules(undefined)),
    };
}
exports.default = react_i18next_1.withTranslation(['download-game-assigner'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DownloadAssignmentSettings));


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
//# sourceMappingURL=download-game-assigner.js.map