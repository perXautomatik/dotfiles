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

/***/ "./src/getSafe.ts":
/*!************************!*\
  !*** ./src/getSafe.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSafe(state, path, fallback) {
    let current = state;
    for (const segment of path) {
        if ((current === undefined) || (current === null) || !current.hasOwnProperty(segment)) {
            return fallback;
        }
        else {
            current = current[segment];
        }
    }
    return current;
}
exports.default = getSafe;


/***/ }),

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
const getSafe_1 = __webpack_require__(/*! ./getSafe */ "./src/getSafe.ts");
const path = __webpack_require__(/*! path */ "path");
const fs = __webpack_require__(/*! fs */ "fs");
const activeProfile = (state) => {
    const profileId = state.settings.profiles.activeProfileId;
    return getSafe_1.default(state, ['persistent', 'profiles', profileId], undefined);
};
const getActiveGameId = (state) => {
    const profile = activeProfile(state);
    return profile !== undefined ? profile.gameId : undefined;
};
const transformModFormat = (mod) => ({
    name: mod.attributes.modName,
    game: mod.attributes.downloadGame,
    modId: mod.attributes.modId,
    fileId: mod.attributes.fileId,
    source: mod.attributes.source,
});
const getInstalledMods = (state) => Object.values(state.persistent.mods)
    .map(game => Object.values(game).map(mod => transformModFormat(mod)))
    .reduce((result, current) => result.concat(current), []);
const init = (context) => {
    const { api } = context;
    const backupMods = (thisGameOnly = false) => () => {
        const state = api.store.getState();
        let mods = getInstalledMods(state);
        api.selectFile({ create: true, title: 'Select file to export to' })
            .then(fileName => {
            const activeGameId = getActiveGameId(state);
            mods = mods
                .filter(mod => mod.modId && mod.fileId && mod.game);
            if (thisGameOnly) {
                mods = mods.filter(mod => mod.game === activeGameId);
            }
            if (fs.existsSync(fileName) && fs.readFileSync(fileName).length > 2) {
                try {
                    const existingMods = JSON.parse(fs.readFileSync(fileName)).filter((mod) => mod.game !== activeGameId);
                    mods = mods
                        .filter((mod) => mod.game === activeGameId)
                        .concat(existingMods);
                }
                catch (error) {
                    console.log(error);
                }
            }
            fs.writeFile(path.resolve(fileName), JSON.stringify(mods, null, 4), error => {
                if (error) {
                    api.showErrorNotification(error, error);
                    return;
                }
                api.sendNotification({
                    type: 'success',
                    title: 'Backup Complete',
                    message: `Modlist backed up to ${path.resolve(fileName)}`,
                });
            });
        })
            .catch((error) => console.log(error));
    };
    const restoreMods = () => {
        const state = api.store.getState();
        let shouldInstall = state.settings.automation.install;
        const doInstall = "Yes, download and install";
        const dontInstall = "No, download only";
        if (!getSafe_1.default(state, ['persistent', 'nexus', 'userInfo', 'isPremium'], false)) {
            api.showErrorNotification('You need to be a premium member to restore a list of mods', 'You need to be a premium member to restore a list of mods');
            return;
        }
        api.selectFile({ create: false, title: 'Select your backup file to import' })
            .then(fileName => {
            fs.readFile(path.resolve(fileName), (error, jsonString) => __awaiter(void 0, void 0, void 0, function* () {
                const activeGameId = getActiveGameId(state);
                if (error) {
                    api.showErrorNotification(error, error);
                    return;
                }
                shouldInstall = state.settings.automation.install || (yield api.showDialog("question", "Automatically install?", {
                    text: "In your settings, you've disabled automatic installation on download. Would you like to install these mods when they download anyway?"
                }, [
                    {
                        label: dontInstall,
                    },
                    {
                        label: doInstall
                    }
                ]).then(result => (result === null || result === void 0 ? void 0 : result.action) === doInstall));
                let mods = JSON.parse(jsonString);
                mods = mods
                    .filter(mod => mod.game === activeGameId)
                    .map(mod => {
                    if (!mod.source) {
                        mod.source = "nexus";
                    }
                    return mod;
                })
                    .filter(mod => { var _a; return mod.source === "nexus" || !((_a = mod.source) === null || _a === void 0 ? void 0 : _a.length); });
                const modsFound = mods.length;
                const installedMods = getInstalledMods(state);
                mods = mods.filter(mod => !installedMods.some(installedMod => installedMod.game === mod.game && installedMod.modId === mod.modId && installedMod.fileId === mod.fileId));
                for (const mod of mods) {
                    if (shouldInstall) {
                        api.events.emit('mod-update', mod.game, mod.modId, mod.fileId, mod.source);
                    }
                    else {
                        api.emitAndAwait('nexus-download', mod.game, mod.modId, mod.fileId);
                    }
                }
                api.sendNotification({
                    type: 'success',
                    title: `${mods.length} mods for ${activeGameId} restores`,
                    message: `${modsFound} mods found for ${activeGameId}, but only ${mods.length} mods installed`
                });
            }));
        })
            .catch((error) => console.log(error));
    };
    context.registerAction('mod-icons', 999, 'show', {}, 'Modlist Backup: Restore', restoreMods);
    context.registerAction('mod-icons', 999, 'show', {}, 'Modlist Backup All Games', backupMods());
    context.registerAction('mod-icons', 999, 'show', {}, 'Modlist Backup Only This Game', backupMods(true));
};
module.exports = { default: init };


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=modlist-backup.js.map