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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_act_1 = __webpack_require__(3);
exports.setModArchive = redux_act_1.createAction('SET_MOD_ARCHIVE', (gameId, modId, archiveId) => ({ gameId, modId, archiveId }));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = __webpack_require__(0);
const reducer_1 = __webpack_require__(4);
const vortex_api_1 = __webpack_require__(1);
function fix(api, assignments) {
    const gameMode = vortex_api_1.selectors.activeGameId(api.store.getState());
    assignments.forEach(assign => {
        api.store.dispatch(actions_1.setModArchive(gameMode, assign.modId, assign.archiveId));
        api.store.dispatch(vortex_api_1.actions.setDownloadInstalled(assign.archiveId, gameMode, assign.modId));
    });
}
function main(context) {
    const t = (key, options) => context.api.translate(key, Object.assign({ ns: 'archive-binding-fix' }, (options || {})));
    context.registerReducer(['persistent', 'mods'], reducer_1.default);
    context.registerAction('mod-icons', 100, 'recover', {}, 'Fix Bindings', () => {
        const state = context.api.store.getState();
        const gameMode = vortex_api_1.selectors.activeGameId(state);
        const knownDownloads = vortex_api_1.util.getSafe(state, ['persistent', 'downloads', 'files'], {});
        const knownDownloadSet = new Set(Object.keys(knownDownloads));
        const mods = vortex_api_1.util.getSafe(state, ['persistent', 'mods', gameMode], {});
        const unBoundMods = Object.keys(mods).filter(modId => !knownDownloadSet.has(mods[modId].archiveId)
            && (mods[modId].attributes !== undefined)
            && (mods[modId].attributes['fileName'] !== undefined));
        const reassign = unBoundMods.map(modId => {
            const archiveId = Object.keys(knownDownloads)
                .find(dlId => knownDownloads[dlId].localPath === mods[modId].attributes.fileName);
            return { modId, archiveId };
        })
            .filter(assignment => assignment.archiveId !== undefined);
        if (reassign.length === 0) {
            if (unBoundMods.length === 0) {
                context.api.showDialog('info', t('Fix Bindings'), {
                    text: t('There were no mods with broken bindings that could be fixed.'),
                    options: { translated: true },
                }, [{ label: 'Close' }]);
            }
            else {
                context.api.showDialog('info', t('Fix Bindings'), {
                    text: t('There were {{count}} mods with broken bindings but no matching archive '
                        + 'was found for any of them.', { replace: { count: unBoundMods.length } }),
                    options: { translated: true },
                }, [{ label: 'Close' }]);
            }
        }
        else {
            context.api.showDialog('question', 'Fix Bindings', {
                text: t('The following mods can be bound to the corresponding archive:'),
                checkboxes: reassign.map(assign => ({
                    id: assign.modId,
                    text: `${vortex_api_1.util.renderModName(mods[assign.modId])} -> ${knownDownloads[assign.archiveId].localPath}`,
                    value: true
                })),
                options: { translated: true },
            }, [
                { label: 'Cancel' },
                { label: 'Fix' }
            ])
                .then(result => {
                if (result.action === 'Fix') {
                    fix(context.api, reassign.filter(assign => result.input[assign.modId] === true));
                }
            });
        }
    });
    return true;
}
exports.default = main;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux-act");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actions = __webpack_require__(0);
const vortex_api_1 = __webpack_require__(1);
const modsReducer = {
    reducers: {
        [actions.setModArchive]: (state, payload) => {
            const { gameId, modId, archiveId } = payload;
            return vortex_api_1.util.setSafe(state, [gameId, modId, 'archiveId'], archiveId);
        },
    },
    defaults: {},
};
exports.default = modsReducer;


/***/ })
/******/ ]);
//# sourceMappingURL=archive-binding-fix.js.map