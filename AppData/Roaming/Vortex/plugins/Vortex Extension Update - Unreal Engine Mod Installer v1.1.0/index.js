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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __webpack_require__(/*! path */ "path");
function main(context) {
    const testUnrealGame = (gameId, withLoadOrder) => {
        const game = vortex_api_1.util.getGame(gameId);
        const unrealModsPath = vortex_api_1.util.getSafe(game, ['compatible', 'unrealEngine'], undefined);
        const loadOrder = !!withLoadOrder ? vortex_api_1.util.getSafe(game, ['details', 'unrealEngine', 'loadOrder'], false) : true;
        return (!!unrealModsPath && loadOrder === true);
    };
    const testForUnrealMod = (files, gameId) => {
        const supportedGame = testUnrealGame(gameId);
        const fileExt = vortex_api_1.util.getSafe(vortex_api_1.util.getGame(gameId), ['details', 'unrealEngine', 'fileExt'], '.pak');
        let modFiles = [];
        if (fileExt)
            modFiles = files.filter(file => path.extname(file).toLowerCase() === fileExt.toLowerCase());
        const supported = (supportedGame && modFiles.length > 0);
        return Promise.resolve({
            supported,
            requiredFiles: []
        });
    };
    const getUnrealModsPath = (game) => {
        const absModsPath = vortex_api_1.util.getSafe(game, ['details', 'unrealEngine', 'absModsPath'], undefined);
        if (absModsPath)
            return absModsPath;
        const modsPath = vortex_api_1.util.getSafe(game, ['details', 'unrealEngine', 'modsPath'], undefined);
        const state = context.api.store.getState();
        const discoveryPath = vortex_api_1.util.getSafe(state.settings, ['gameMode', 'discovered', game.id, 'path'], undefined);
        const installPath = [discoveryPath].concat(modsPath.split(path.sep));
        return discoveryPath ? path.join.apply(null, installPath) : undefined;
    };
    context.registerInstaller('ue4-pak-installer', 25, testForUnrealMod, (files, destinationPath, gameId) => installUnrealMod(context.api, files, gameId));
    context.registerModType('ue4-modtype', 25, testUnrealGame, getUnrealModsPath, () => Promise.resolve(false), {
        name: 'Unreal Engine 4 Mod',
        mergeMods: false
    });
    context.registerModType('ue4-sortable-modtype', 25, (gameId) => testUnrealGame(gameId, true), getUnrealModsPath, () => Promise.resolve(false), {
        name: 'Unreal Engine 4 Sortable Mod',
        mergeMods: mod => loadOrderPrefix(context.api, mod) + mod.id
    });
    return true;
}
function installUnrealMod(api, files, gameId) {
    return __awaiter(this, void 0, void 0, function* () {
        const game = vortex_api_1.util.getGame(gameId);
        const fileExt = vortex_api_1.util.getSafe(game, ['details', 'unrealEngine', 'fileExt'], '.pak');
        const sortable = vortex_api_1.util.getSafe(game, ['details', 'unrealEngine', 'loadOrder'], false);
        if (!fileExt)
            Promise.reject('Unsupported game - UE4 installer failed.');
        const modFiles = files.filter(file => path.extname(file).toLowerCase() === fileExt.toLowerCase());
        const modType = {
            type: 'setmodtype',
            value: sortable ? 'ue4-sortable-modtype' : 'ue4-modtype'
        };
        const installFiles = (modFiles.length > 1)
            ? yield chooseFilesToInstall(api, modFiles, fileExt)
            : modFiles;
        const unrealModFiles = {
            type: 'attribute',
            key: 'unrealModFiles',
            value: modFiles.map(f => path.basename(f))
        };
        let instructions = installFiles.map(file => {
            return {
                type: 'copy',
                source: file,
                destination: path.basename(file)
            };
        });
        instructions.push(modType);
        instructions.push(unrealModFiles);
        return Promise.resolve({ instructions });
    });
}
function chooseFilesToInstall(api, files, fileExt) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = api.translate;
        return api.showDialog('question', t('Multiple {{PAK}} files', { replace: { PAK: fileExt } }), {
            text: t('The mod you are installing contains {{x}} {{ext}} files.', { replace: { x: files.length, ext: fileExt } }) +
                `This can be because the author intended for you to chose one of several options. Please select which files to install below:`,
            checkboxes: files.map((pak) => {
                return {
                    id: path.basename(pak),
                    text: path.basename(pak),
                    value: false
                };
            })
        }, [
            { label: 'Cancel' },
            { label: 'Install Selected' },
            { label: 'Install All_plural' }
        ]).then((result) => {
            if (result.action === 'Cancel')
                return Promise.reject(new vortex_api_1.util.ProcessCanceled('User cancelled.'));
            else {
                const installAll = (result.action === 'Install All' || result.action === 'Install All_plural');
                const installPAKS = installAll ? files : Object.keys(result.input).filter(s => result.input[s])
                    .map(file => files.find(f => path.basename(f) === file));
                return installPAKS;
            }
        });
    });
}
function makePrefix(input) {
    let res = '';
    let rest = input;
    while (rest > 0) {
        res = String.fromCharCode(65 + (rest % 25)) + res;
        rest = Math.floor(rest / 25);
    }
    return vortex_api_1.util.pad(res, 'A', 3);
}
function loadOrderPrefix(api, mod) {
    const state = api.store.getState();
    const profile = vortex_api_1.selectors.activeProfile(state);
    const loadOrder = vortex_api_1.util.getSafe(state, ['persistent', 'loadOrder', profile.id], {});
    const loKeys = Object.keys(loadOrder);
    const pos = loKeys.indexOf(mod.id);
    if (pos === -1) {
        return 'ZZZZ-';
    }
    return makePrefix(pos) + '-';
}
exports.default = main;


/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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
//# sourceMappingURL=unreal-engine-mod-installer.js.map