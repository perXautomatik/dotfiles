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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const electron_1 = __webpack_require__(/*! electron */ "electron");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const usvfs = __importStar(__webpack_require__(/*! node-usvfs */ "node-usvfs"));
const turbowalk_1 = __importDefault(__webpack_require__(/*! turbowalk */ "turbowalk"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const app = electron_1.app !== undefined ? electron_1.app : electron_1.remote.app;
const METHOD_ID = 'usvfs-deployment';
const UNSUPPORTED_GAMES = [
    'thesims4',
    'kingdomcomedeliverance',
];
class USVFSDeploymentMethod {
    constructor(api) {
        this.id = METHOD_ID;
        this.name = 'USVFS Deployment';
        this.description = 'Deployment happens only in memory and affects only '
            + 'applications started from Vortex';
        this.isFallbackPurgeSafe = false;
        this.priority = 15;
        this.mAPI = api;
    }
    detailedDescription(t) {
        return t(this.description);
    }
    isSupported(state, gameId, modTypeId) {
        var _a;
        if (process.platform !== 'win32') {
            return {
                description: t => t('Only supported on Windows'),
            };
        }
        const game = vortex_api_1.util.getGame(gameId);
        if (((_a = game.compatible) === null || _a === void 0 ? void 0 : _a.usvfs) === false) {
            return { description: t => t('Game doesn\'t support usfvs') };
        }
        if (UNSUPPORTED_GAMES.indexOf(gameId) !== -1) {
            return {
                description: t => t('Incompatible with "{{name}}".', {
                    replace: {
                        name: vortex_api_1.selectors.gameName(state, gameId),
                    }
                }),
            };
        }
        return undefined;
    }
    userGate() {
        return bluebird_1.default.resolve(bluebird_1.default.resolve());
    }
    prepare(dataPath, clean, lastActivation) {
        if (clean) {
            usvfs.ClearVirtualMappings();
        }
        this.mDataPath = dataPath;
        this.mDeployed = [];
        return bluebird_1.default.resolve();
    }
    finalize(gameId, dataPath, installationPath, progressCB) {
        return bluebird_1.default.resolve(this.mDeployed);
    }
    getDeployedPath(input) {
        return input;
    }
    activate(sourcePath, sourceName, dataPath, blackList) {
        return vortex_api_1.fs.statAsync(sourcePath)
            .then(() => {
            usvfs.VirtualLinkDirectoryStatic(sourcePath, path.join(this.mDataPath, dataPath), { recursive: true });
            return turbowalk_1.default(sourcePath, files => {
                this.mDeployed.push(...files.map(entry => ({
                    relPath: path.relative(sourcePath, entry.filePath),
                    source: sourceName,
                    time: entry.mtime,
                })));
            });
        })
            .catch(() => null);
    }
    deactivate(installPath, dataPath) {
        return bluebird_1.default.resolve();
    }
    prePurge() {
        return bluebird_1.default.resolve();
    }
    postPurge() {
        return bluebird_1.default.resolve();
    }
    purge(installPath, dataPath) {
        usvfs.ClearVirtualMappings();
        return bluebird_1.default.resolve();
    }
    externalChanges(gameId, installPath, dataPath, activation) {
        return bluebird_1.default.resolve([]);
    }
    isActive() {
        return false;
    }
    isDeployed(installPath, dataPath, file) {
        return bluebird_1.default.resolve(this.mDeployed.find(deployed => deployed.relPath === file.relPath) !== undefined);
    }
}
function init(context) {
    context.registerDeploymentMethod(new USVFSDeploymentMethod(context.api));
    context.registerStartHook(1000, 'usvfs-run', call => {
        const state = context.api.store.getState();
        const activator = vortex_api_1.selectors.currentActivator(state);
        if (activator !== METHOD_ID) {
            return bluebird_1.default.resolve(call);
        }
        const stackErr = new Error();
        return new bluebird_1.default((resolve, reject) => {
            if (vortex_api_1.util.getSafe(state, ['session', 'base', 'activity', 'mods'], []).indexOf('deployment') !== -1) {
                return resolve();
            }
            const deployCB = vortex_api_1.util.onceCB((err) => {
                if (err !== null) {
                    return reject(err);
                }
                else {
                    return resolve();
                }
            });
            deployCB.fromusvfs = true;
            context.api.events.emit('deploy-mods', deployCB);
        })
            .then(() => vortex_api_1.fs.statAsync(call.executable))
            .then(() => {
            try {
                usvfs.CreateProcessHooked(null, `${call.executable} ${call.args.join(' ')}`, call.options.cwd, Object.assign(Object.assign({}, process.env), call.options.env));
            }
            catch (err) {
                err.stack = stackErr.stack;
                return bluebird_1.default.reject(err);
            }
            return bluebird_1.default.reject(new vortex_api_1.util.ProcessCanceled('run through usvfs'));
        })
            .catch({ code: 'ENOENT' }, () => {
            try {
                const workingDir = call.options.cwd || path.dirname(call.executable);
                usvfs.CreateProcessHooked(null, `cmd /C "cd ${workingDir} && ${call.executable} ${call.args.join(' ')}"`, 'c:\\', Object.assign(Object.assign({}, process.env), call.options.env));
            }
            catch (err) {
                err.stack = stackErr.stack;
                return bluebird_1.default.reject(err);
            }
            return bluebird_1.default.reject(new vortex_api_1.util.ProcessCanceled('run through usvfs'));
        });
    });
    context.once(() => {
        usvfs.CreateVFS({
            logLevel: 2,
            instanceName: 'vortex-usvfs',
            debugMode: false,
            crashDumpPath: path.join(app.getPath('temp'), 'usvfs_dumps'),
            crashDumpType: 1,
        });
        usvfs.InitLogging();
        usvfs.PollLogMessages(message => {
            const tPos = message.indexOf('[');
            const logLevel = {
                D: 'debug',
                I: 'info',
                W: 'warning',
                E: 'error',
            }[message[tPos + 1]] || 'warning';
            if ((logLevel === 'error') && (message.indexOf('never released the mutex') !== -1)) {
                return true;
            }
            vortex_api_1.log(logLevel, message.slice(tPos + 4));
            return true;
        }, (err) => {
            if (err !== null) {
                context.api.showErrorNotification('USVFS logging no longer monitored', err);
            }
        });
        context.api.onStateChange(['settings', 'mods', 'activator'], (prev, next) => {
            const state = context.api.store.getState();
            const gameMode = vortex_api_1.selectors.activeGameId(state);
            if ((prev[gameMode] !== next[gameMode])
                && ((prev[gameMode] === METHOD_ID)
                    || (next[gameMode] === METHOD_ID))) {
                context.api.events.emit('restart-helpers');
            }
        });
    });
    return true;
}
exports.default = init;


/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "node-usvfs":
/*!**************************!*\
  !*** external "./usvfs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./usvfs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "turbowalk":
/*!****************************!*\
  !*** external "turbowalk" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("turbowalk");

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
//# sourceMappingURL=usvfs-deployment.js.map