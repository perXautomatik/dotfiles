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

/***/ "../../node_modules/nanoid/format.browser.js":
/*!*******************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/nanoid/format.browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "../../node_modules/shortid/index.js":
/*!***********************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "../../node_modules/shortid/lib/index.js");


/***/ }),

/***/ "../../node_modules/shortid/lib/alphabet.js":
/*!******************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/alphabet.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "../../node_modules/shortid/lib/random/random-from-seed.js");

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

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "../../node_modules/shortid/lib/build.js":
/*!***************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/build.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "../../node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "../../node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

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

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "../../node_modules/shortid/lib/generate.js":
/*!******************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/generate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "../../node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "../../node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "../../node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "../../node_modules/shortid/lib/index.js":
/*!***************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "../../node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "../../node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "../../node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "../../node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

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
module.exports.isValid = isValid;


/***/ }),

/***/ "../../node_modules/shortid/lib/is-valid.js":
/*!******************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/is-valid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "../../node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "../../node_modules/shortid/lib/random/random-byte-browser.js":
/*!************************************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/random/random-byte-browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "../../node_modules/shortid/lib/random/random-from-seed.js":
/*!*********************************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/random/random-from-seed.js ***!
  \*********************************************************************************/
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

/***/ "../../node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!****************************************************************************************!*\
  !*** D:/Projects/awtsegsdg/node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./src/actions/persistent.ts":
/*!***********************************!*\
  !*** ./src/actions/persistent.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clearFulfillerSubscription = exports.setFulfillerSubscription = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.setFulfillerSubscription = redux_act_1.createAction('SET_FULFILLER_SUBSCRIPTION', (profileId, subId) => ({ profileId, subId }));
exports.clearFulfillerSubscription = redux_act_1.createAction('CLEAR_FULFILLER_SUBSCRIPTION', (profileId) => ({ profileId }));


/***/ }),

/***/ "./src/actions/session.ts":
/*!********************************!*\
  !*** ./src/actions/session.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserDataFilePath = exports.setProfileUserData = exports.setOpenProfileSelect = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.setOpenProfileSelect = redux_act_1.createAction('SET_OPEN_SELECT_USERDATA_PROFILE_DIALOG', (open) => {
    return open;
});
exports.setProfileUserData = redux_act_1.createAction('SET_USERDATA_PROFILE_DATA', (profileData) => profileData);
exports.setUserDataFilePath = redux_act_1.createAction('SET_USERDATA_FILEPATH', (filePath) => filePath);


/***/ }),

/***/ "./src/actions/settings.ts":
/*!*********************************!*\
  !*** ./src/actions/settings.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUrlSub = exports.removeUrlSub = exports.addUrlSub = exports.setReadNonPremiumNotif = exports.setEnableDebugMode = exports.setLockSub = exports.setAutoFulfillDependencies = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
exports.setAutoFulfillDependencies = redux_act_1.createAction('SET_AUTO_FULFILL_DEPENDENCIES', (fulfill) => fulfill);
exports.setLockSub = redux_act_1.createAction('SET_DEP_FULFILLER_LOCK_SUB', (lock) => lock);
exports.setEnableDebugMode = redux_act_1.createAction('SET_DEP_FULFILLER_DEBUG', (debug) => debug);
exports.setReadNonPremiumNotif = redux_act_1.createAction('SET_READ_NON_PREMIUM_NOTIFICATION', (read) => read);
exports.addUrlSub = redux_act_1.createAction('ADD_URL_SUB', (urlSub) => urlSub);
exports.removeUrlSub = redux_act_1.createAction('REMOVE_URL_SUB', (id) => id);
exports.setUrlSub = redux_act_1.createAction('SET_URL_SUB', (id, urlSub) => ({ id, urlSub }));


/***/ }),

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIVITY_NOTIF = exports.NEXUS = exports.MANIFESTS_PATH = exports.SUB_FILE = exports.DEP_MAN_SUFFIX = void 0;
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
exports.DEP_MAN_SUFFIX = '.vdeps';
exports.SUB_FILE = 'subscription' + exports.DEP_MAN_SUFFIX;
exports.MANIFESTS_PATH = path_1.default.join(vortex_api_1.util.getVortexPath('temp'), 'dependency manifests');
exports.NEXUS = 'www.nexusmods.com';
exports.ACTIVITY_NOTIF = 'dep-fulfiller-download-activity';


/***/ }),

/***/ "./src/downloader.ts":
/*!***************************!*\
  !*** ./src/downloader.ts ***!
  \***************************/
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
exports.downloadImpl = exports.install = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
function genDownloadProps(api, archiveName) {
    const state = api.getState();
    const downloads = vortex_api_1.util.getSafe(state, ['persistent', 'downloads', 'files'], {});
    const downloadId = Object.keys(downloads).find(dId => downloads[dId].localPath === archiveName);
    return { downloads, downloadId, state };
}
function install(api, downloadInfo, downloadId) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const state = api.getState();
        if (downloadInfo.allowAutoInstall && ((_a = state.settings.automation) === null || _a === void 0 ? void 0 : _a['install']) !== true) {
            const gameId = util_1.convertGameDomain(downloadInfo.downloadIds.gameId);
            const profileId = vortex_api_1.selectors.lastActiveProfileForGame(state, gameId);
            const mods = vortex_api_1.util.getSafe(state, ['persistent', 'mods', gameId], {});
            const mId = Object.keys(mods).find(id => { var _a; return ((_a = mods[id].attributes) === null || _a === void 0 ? void 0 : _a.fileId) === downloadInfo.downloadIds.fileId; });
            if (!mId) {
                return new Promise((resolve, reject) => {
                    api.events.emit('start-install-download', downloadId, true, (err, modId) => {
                        if (err) {
                            vortex_api_1.log('error', 'failed to install dependency', err);
                            return resolve(undefined);
                        }
                        if (downloadInfo.allowAutoEnable && state.settings.automation.enable !== true) {
                            api.store.dispatch(vortex_api_1.actions.setModEnabled(profileId, modId, true));
                        }
                        return resolve(modId);
                    });
                });
            }
            else {
                if (downloadInfo.allowAutoEnable && state.settings.automation.enable !== true) {
                    api.store.dispatch(vortex_api_1.actions.setModEnabled(profileId, mId, true));
                }
                return Promise.resolve(mId);
            }
        }
        return Promise.resolve(undefined);
    });
}
exports.install = install;
function downloadImpl(api, downloadInfo, progress) {
    return __awaiter(this, void 0, void 0, function* () {
        const { downloadIds, archiveName, allowAutoInstall } = downloadInfo;
        if (!util_1.isPremium(api)) {
            return Promise.reject(new types_1.NotPremiumError());
        }
        if (progress) {
            progress(downloadInfo.archiveName);
        }
        if (genDownloadProps(api, archiveName).downloadId !== undefined) {
            const { downloadId } = genDownloadProps(api, downloadInfo.archiveName);
            install(api, downloadInfo, downloadId);
            return Promise.resolve();
        }
        return api.emitAndAwait('nexus-download', util_1.convertGameDomain(downloadIds.gameId), downloadIds.modId, downloadIds.fileId, archiveName, allowAutoInstall)
            .then(() => {
            const { downloadId } = genDownloadProps(api, downloadInfo.archiveName);
            install(api, downloadInfo, downloadId);
            return Promise.resolve();
        })
            .catch(err => {
            vortex_api_1.log('error', 'failed to download from NexusMods.com', JSON.stringify(downloadInfo, undefined, 2));
            err['attachLogOnReport'] = true;
            api.showErrorNotification('Failed to download dependency', err);
        });
    });
}
exports.downloadImpl = downloadImpl;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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
const electron_1 = __webpack_require__(/*! electron */ "electron");
const _ = __importStar(__webpack_require__(/*! lodash */ "lodash"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const timers_1 = __webpack_require__(/*! timers */ "timers");
const turbowalk_1 = __importDefault(__webpack_require__(/*! turbowalk */ "turbowalk"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const session_1 = __webpack_require__(/*! ./actions/session */ "./src/actions/session.ts");
const settings_1 = __webpack_require__(/*! ./actions/settings */ "./src/actions/settings.ts");
const common_1 = __webpack_require__(/*! ./common */ "./src/common.ts");
const downloader_1 = __webpack_require__(/*! ./downloader */ "./src/downloader.ts");
const persistent_1 = __importDefault(__webpack_require__(/*! ./reducers/persistent */ "./src/reducers/persistent.ts"));
const session_2 = __importDefault(__webpack_require__(/*! ./reducers/session */ "./src/reducers/session.ts"));
const settings_2 = __importDefault(__webpack_require__(/*! ./reducers/settings */ "./src/reducers/settings.ts"));
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const ProfileSelectionDialog_1 = __importDefault(__webpack_require__(/*! ./views/ProfileSelectionDialog */ "./src/views/ProfileSelectionDialog.tsx"));
const Settings_1 = __importDefault(__webpack_require__(/*! ./views/Settings */ "./src/views/Settings.tsx"));
const TIMEOUT_MS = 60000 * 5;
function init(context) {
    context.registerReducer(['settings', 'interface'], settings_2.default);
    context.registerReducer(['session', 'depfulfiller'], session_2.default);
    context.registerReducer(['persistent', 'depfulfiller'], persistent_1.default);
    context.registerAction('mods-action-icons', 300, 'clone', {}, 'Export Dependencies', instanceIds => { genDependencyManifest(context.api, instanceIds); });
    context.registerAction('mods-multirow-actions', 300, 'clone', {}, 'Export Dependencies', instanceIds => { genDependencyManifest(context.api, instanceIds); });
    context.registerAction('mod-icons', 300, 'import', {}, 'Import From Dependencies Dialog', instanceIds => queryImportType(context.api));
    context.registerAction('mod-icons', 300, 'import', {}, 'Import From Application State', instanceIds => { genFromUserData(context.api); }, () => {
        const state = context.api.getState();
        return vortex_api_1.util.getSafe(state, ['settings', 'interface', 'fulfillerDebugMode'], false);
    });
    context.registerAction('mod-icons', 300, 'import', {}, 'Import From Subscription', instanceIds => { genFromSubscription(context.api); }, () => {
        const state = context.api.getState();
        const profile = vortex_api_1.selectors.activeProfile(state);
        if ((profile === null || profile === void 0 ? void 0 : profile.id) === undefined) {
            return false;
        }
        const subId = vortex_api_1.util.getSafe(state, ['persistent', 'depfulfiller', profile.id, 'subId'], undefined);
        return subId !== 'none' && subId !== undefined;
    });
    context.registerSettings('Interface', Settings_1.default, undefined, undefined, 10);
    context.registerDialog('depfulfiller-select-profile-dialog', ProfileSelectionDialog_1.default, () => ({
        onSelectProfile: (profileData) => onProfileSelect(context.api, profileData),
    }));
    context.once(() => {
        context.api.onStateChange(['persistent', 'mods'], (prev, current) => onModsChange(context.api, prev, current));
    });
    return true;
}
function genFromSubscription(api) {
    return __awaiter(this, void 0, void 0, function* () {
        const state = api.getState();
        const profile = vortex_api_1.selectors.activeProfile(state);
        const subId = vortex_api_1.util.getSafe(state, ['persistent', 'depfulfiller', profile.id, 'subId'], undefined);
        if (subId === 'none') {
            return;
        }
        const subs = vortex_api_1.util.getSafe(state, ['settings', 'interface', 'urlSubscriptions'], []);
        const subscription = subs.find(sub => sub.id === subId);
        try {
            yield util_1.fetchDepFromUrl(subscription.url);
            yield genFromFilePath(api, path.join(common_1.MANIFESTS_PATH, common_1.SUB_FILE));
            api.store.dispatch(vortex_api_1.actions.setDeploymentNecessary(profile.gameId, true));
        }
        catch (err) {
            api.showErrorNotification('Failed to import from subscription', err);
        }
    });
}
function onProfileSelect(api, profileData) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const state = api.getState();
        const filePath = vortex_api_1.util.getSafe(state, ['session', 'depfulfiller', 'userDataFilePath'], undefined);
        if (filePath === undefined) {
            api.showErrorNotification('Invalid userdata filepath', new vortex_api_1.util.NotFound('User data file'));
            return;
        }
        try {
            const data = yield vortex_api_1.fs.readFileAsync(filePath, { encoding: 'utf8' });
            let persistent = JSON.parse(data);
            persistent = persistent.persistent !== undefined
                ? persistent.persistent
                : persistent;
            if (persistent.downloads.files === undefined
                || ((_a = persistent.mods) === null || _a === void 0 ? void 0 : _a[profileData.gameId]) === undefined
                || persistent.profiles === undefined) {
                throw new vortex_api_1.util.DataInvalid('Selected file does not contain required data');
            }
            const nexusDownloads = [];
            const mods = profileData.enabledModIds.map(modId => persistent.mods[profileData.gameId][modId]).filter(mod => mod !== undefined);
            const modsData = mods.map(mod => ({
                modId: mod.id,
                archiveId: mod.archiveId,
                rules: mod.rules || [],
            })).filter(modData => modData.archiveId !== undefined);
            const includedModIds = modsData.map(mod => mod.modId);
            for (const modData of modsData) {
                const arcId = modData.archiveId;
                const ids = util_1.extractIds(persistent.downloads.files[arcId]);
                if (ids === undefined || ((_b = persistent.downloads.files[arcId]) === null || _b === void 0 ? void 0 : _b.localPath) === undefined) {
                    if (persistent.downloads.files[arcId] !== undefined) {
                        vortex_api_1.log('warn', 'failed to extract required information', JSON.stringify(persistent.downloads.files[arcId]));
                    }
                    else {
                        vortex_api_1.log('warn', 'failed to extract required information - download archive missing', arcId);
                    }
                    continue;
                }
                const nexusDownload = {
                    archiveName: persistent.downloads.files[arcId].localPath,
                    downloadIds: ids,
                    allowAutoInstall: true,
                    rules: modData.rules.filter(rule => includedModIds.includes(rule.reference.id)),
                };
                nexusDownloads.push(nexusDownload);
            }
            yield fulfillDependencies(api, nexusDownloads);
            api.sendNotification({
                message: 'All dependencies fulfilled',
                type: 'success',
                id: 'all-dependencies-fulfilled',
                displayMS: 5000,
            });
            raiseRulesNotification(api, nexusDownloads);
        }
        catch (err) {
            api.showErrorNotification('Failed to generate dependencies from user data', err, { allowReport: false });
        }
    });
}
function genFromUserData(api) {
    return __awaiter(this, void 0, void 0, function* () {
        const selectedFile = yield api.selectFile({
            title: 'User Persistent Data',
            filters: [{ name: 'JSON file', extensions: ['json'] }],
        });
        if (selectedFile === undefined) {
            return;
        }
        try {
            const data = yield vortex_api_1.fs.readFileAsync(selectedFile, { encoding: 'utf8' });
            let persistent = JSON.parse(data);
            persistent = persistent.persistent !== undefined
                ? persistent.persistent
                : persistent;
            if (persistent.downloads === undefined
                || persistent.mods === undefined
                || persistent.profiles === undefined) {
                throw new vortex_api_1.util.DataInvalid('Selected file does not contain required data');
            }
            api.store.dispatch(session_1.setUserDataFilePath(selectedFile));
            const profileData = Object.keys(persistent.profiles).reduce((accum, iter) => {
                const profile = persistent.profiles[iter];
                const modState = vortex_api_1.util.getSafe(profile, ['modState'], {});
                accum[iter] = {
                    id: iter,
                    gameId: profile.gameId,
                    enabledModIds: Object.keys(modState).filter(modId => vortex_api_1.util.getSafe(modState, [modId, 'enabled'], false)),
                };
                return accum;
            }, {});
            api.store.dispatch(session_1.setProfileUserData(profileData));
            api.store.dispatch(session_1.setOpenProfileSelect(true));
        }
        catch (err) {
            api.showErrorNotification('Failed to generate dependencies from user data', err, { allowReport: false });
        }
    });
}
function onModsChange(api, prev, current) {
    return __awaiter(this, void 0, void 0, function* () {
        let state = api.getState();
        const autoFulfill = vortex_api_1.util.getSafe(state, ['settings', 'interface', 'autofulfill'], false);
        if (!autoFulfill) {
            return;
        }
        const gameModes = Object.keys(current);
        for (const gameMode of gameModes) {
            if (prev[gameMode] === undefined) {
                continue;
            }
            const prevMods = Object.keys(prev[gameMode]);
            const currMods = Object.keys(current[gameMode]);
            if (!_.isEqual(prevMods, currMods)) {
                const stagingFolder = vortex_api_1.selectors.installPathForGame(state, gameMode);
                const tryGenFromFilePath = (modId) => __awaiter(this, void 0, void 0, function* () {
                    state = api.getState();
                    const mod = vortex_api_1.util.getSafe(state, ['persistent', 'mods', gameMode, modId], undefined);
                    if ((mod === null || mod === void 0 ? void 0 : mod.installationPath) === undefined) {
                        vortex_api_1.log('debug', 'failed to complete dependency check - mod was removed', modId);
                        return Promise.resolve();
                    }
                    if (mod.state === 'installing') {
                        return new Promise((resolve) => timers_1.setTimeout(() => resolve(tryGenFromFilePath(modId)), 5000));
                    }
                    else if (mod.state === 'installed') {
                        const installationPath = path.join(stagingFolder, mod.installationPath);
                        return genFromDirPath(api, installationPath);
                    }
                });
                const diff = _.difference(currMods, prevMods);
                yield Promise.all(diff.map((modId) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b;
                    vortex_api_1.log('info', 'attempting to fulfill mod dependencies', modId);
                    const modInstallationPath = (_b = (_a = current[gameMode]) === null || _a === void 0 ? void 0 : _a[modId]) === null || _b === void 0 ? void 0 : _b.installationPath;
                    if (modInstallationPath !== undefined) {
                        try {
                            yield Promise.race([
                                tryGenFromFilePath(modId),
                                new Promise((resolve) => timers_1.setTimeout(() => {
                                    vortex_api_1.log('error', 'dependency check timed out - use "Import Dependencies" '
                                        + 'when mod installation finishes', modId);
                                    return resolve(undefined);
                                }, TIMEOUT_MS)),
                            ]);
                        }
                        catch (err) {
                            vortex_api_1.log('error', 'failed to complete dependency check', err);
                        }
                    }
                })));
            }
        }
    });
}
function raiseRulesNotification(api, downloads) {
    const hasRules = downloads.find(down => down.rules !== undefined && down.rules.length > 0) !== undefined;
    if (!hasRules) {
        return;
    }
    const t = api.translate;
    api.sendNotification({
        id: 'import-conflict-rules',
        type: 'info',
        message: t('Imported dependencies contained conflict rules'),
        allowSuppress: false,
        noDismiss: false,
        actions: [
            { title: 'More', action: (dismiss) => api.showDialog('question', t('Import conflict rules'), {
                    bbcode: t('The imported dependencies contain pre-defined rule metadata - if you would like to try '
                        + 'to import these, please make sure that all the dependencies have finished downloading '
                        + 'and are installed before clicking the "Import Rules" button.'),
                }, [
                    { label: 'Do This Later' },
                    {
                        label: 'Import Rules',
                        action: () => {
                            fulfillRules(api, downloads);
                            dismiss();
                        },
                    },
                ]),
            },
        ],
    });
}
function fulfillRules(api, downloads) {
    var _a;
    const props = util_1.genProps(api);
    if (props === undefined) {
        return;
    }
    const hasRule = (rule, modId) => vortex_api_1.util.testModReference(props.mods[modId], rule.reference);
    const mod = (fileName) => path.basename(fileName, path.extname(fileName));
    const match = (modId) => downloads.find(dwnl => mod(dwnl.archiveName) === modId) !== undefined;
    const installed = Object.keys(props.mods).filter(match);
    for (const download of downloads) {
        if (download.rules === undefined) {
            continue;
        }
        for (const rule of download.rules) {
            if (installed.includes((_a = rule.reference) === null || _a === void 0 ? void 0 : _a.id) && !hasRule(rule, mod(download.archiveName))) {
                api.store.dispatch(vortex_api_1.actions.addModRule(util_1.convertGameDomain(download.downloadIds.gameId), mod(download.archiveName), rule));
            }
        }
    }
}
function fulfillDependencies(api, downloads) {
    return __awaiter(this, void 0, void 0, function* () {
        const totalDownloads = downloads.length;
        let idx = 0;
        const progress = (archiveName) => {
            api.sendNotification({
                id: common_1.ACTIVITY_NOTIF,
                type: 'activity',
                title: 'Downloading dependencies - this can take a while!',
                message: archiveName,
                noDismiss: true,
                allowSuppress: false,
                progress: (idx * 100) / totalDownloads,
            });
            ++idx;
        };
        for (const download of downloads) {
            try {
                yield downloader_1.downloadImpl(api, download, progress);
            }
            catch (err) {
                const state = api.getState();
                if (err instanceof types_1.NotPremiumError) {
                    const readNotif = vortex_api_1.util.getSafe(state, ['settings', 'interface', 'readNonPremiumNotification'], false);
                    if (!readNotif) {
                        api.sendNotification({
                            message: 'Cannot fulfill dependencies automatically',
                            type: 'warning',
                            id: 'not-a-premium-account',
                            actions: [
                                {
                                    title: 'More',
                                    action: (dismiss) => api.showDialog('info', 'Not a premium member', {
                                        bbcode: 'As you probably know - Nexus Mods is one of the biggest mods '
                                            + 'hosting sites on the internet - this of course means that we must financially '
                                            + 'support an infrastructure capable of holding a MASSIVE volume of data; '
                                            + 'needless to say, this is very expensive and we wouldn\'t be able to afford '
                                            + 'to maintain and support it without your help.[br][/br][br][/br]'
                                            + 'Please understand that as a free user/supporter certain features will be '
                                            + 'unavailable as they will actively bypass the means by which you contribute '
                                            + 'to our community - in your case - by watching the ads on our website.[br][/br][br][/br]'
                                            + 'Although the dependency fulfiller extension is unable to pull your mods automatically, '
                                            + 'the mod pages for the required mods have been opened in your browser, please download the files from there.',
                                    }, [
                                        {
                                            label: 'Close',
                                            action: () => {
                                                api.store.dispatch(settings_1.setReadNonPremiumNotif(true));
                                                dismiss();
                                            },
                                        },
                                    ]),
                                },
                            ],
                        });
                    }
                }
                else {
                    api.showErrorNotification('Cannot fulfill dependencies automatically', err, { allowReport: false });
                }
                const props = util_1.genProps(api);
                if (props !== undefined) {
                    const dwnlId = Object.keys(props.downloads).find(dlId => {
                        const dl = props.downloads[dlId];
                        if ((dl === null || dl === void 0 ? void 0 : dl.localPath) === download.archiveName) {
                            return true;
                        }
                        const ids = util_1.extractIds(dl);
                        return util_1.compareIds(ids, download.downloadIds);
                    });
                    if (dwnlId !== undefined) {
                        yield downloader_1.install(api, download, dwnlId);
                        continue;
                    }
                }
                const url = path.join(common_1.NEXUS, download.downloadIds.gameId, 'mods', download.downloadIds.modId.toString())
                    + `?tab=files&file_id=${download.downloadIds.fileId}&nmm=1`;
                vortex_api_1.util.opn(url).catch(err => null);
            }
        }
        api.dismissNotification(common_1.ACTIVITY_NOTIF);
    });
}
function queryImportType(api) {
    const t = api.translate;
    const state = api.getState();
    const activeGameId = vortex_api_1.selectors.activeGameId(state);
    const stagingFolder = vortex_api_1.selectors.installPathForGame(state, activeGameId);
    api.showDialog('question', 'Import Dependencies', {
        bbcode: t('Vortex\'s dependency fulfiller can attempt to automatically download '
            + 'and install dependencies using two methods:[br][/br][br][/br][list][*] By searching your '
            + 'game\'s staging folder for files with the "{{suffix}}" suffix. This method '
            + 'requires the mod author to include such a file alongside their mod to function '
            + 'correctly. [*] Using any data you may have copied to your clipboard. Your friend '
            + 'can select multiple mods and export their mods information on their Vortex copy '
            + 'and send you the raw data/mods information which you can then copy (CTRL + C) '
            + 'and click the "Import from Clipboard" button below.[/list][br][/br][br][/br]'
            + 'Please note: you will need a Nexus Mods premium account for this to be done automatically. '
            + 'For free/supporter accounts, Vortex will open the webpages for you and you will have to '
            + 'download the mods manually.', { replace: { suffix: common_1.DEP_MAN_SUFFIX } }),
    }, [
        { label: 'Close' },
        { label: 'Import from Clipboard', action: () => genFromClipboard(api) },
        { label: 'Import from Staging Folder', action: () => genFromDirPath(api, stagingFolder) },
    ]);
}
function genFromClipboard(api) {
    return __awaiter(this, void 0, void 0, function* () {
        const fromClipBoard = electron_1.clipboard.readText();
        try {
            const nexusDownloads = JSON.parse(fromClipBoard);
            yield fulfillDependencies(api, nexusDownloads);
            api.sendNotification({
                message: 'All dependencies fulfilled',
                type: 'success',
                id: 'all-dependencies-fulfilled',
                displayMS: 5000,
            });
            raiseRulesNotification(api, nexusDownloads);
        }
        catch (err) {
            err.message = (err.message.indexOf('SyntaxError'))
                ? 'Invalid JSON string received - the clipboard based import expects valid JSON'
                : err.message;
            api.showErrorNotification('Failed to download dependencies', err, { allowReport: false });
        }
    });
}
function genFromFilePath(api, filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        let parsedDownloadInfo = [];
        try {
            const data = yield vortex_api_1.fs.readFileAsync(filePath, { encoding: 'utf8' });
            const parsedData = JSON.parse(data);
            parsedDownloadInfo = parsedDownloadInfo.concat(parsedData);
        }
        catch (err) {
            vortex_api_1.log('error', 'failed to read/parse dependency manifest', err);
        }
        const lockedSub = vortex_api_1.util.getSafe(api.getState(), ['settings', 'interface', 'lockSub'], false);
        if (lockedSub) {
            util_1.disableAllMods(api);
            parsedDownloadInfo = parsedDownloadInfo.map(download => (Object.assign(Object.assign({}, download), { allowAutoEnable: true })));
        }
        const uniqueDownloads = Array.from(new Set(parsedDownloadInfo.map(a => util_1.genIdentifier(a.downloadIds))))
            .map(id => parsedDownloadInfo.find(a => util_1.genIdentifier(a.downloadIds) === id));
        if (uniqueDownloads.length === 0) {
            return;
        }
        try {
            yield fulfillDependencies(api, uniqueDownloads);
            api.sendNotification({
                message: 'All dependencies fulfilled',
                type: 'success',
                id: 'all-dependencies-fulfilled',
                displayMS: 5000,
            });
            raiseRulesNotification(api, uniqueDownloads);
            return Promise.resolve();
        }
        catch (err) {
            api.showErrorNotification('Failed to download dependencies', err, { allowReport: false });
        }
    });
}
function genFromDirPath(api, dirPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let allManifests = [];
        yield turbowalk_1.default(dirPath, entries => {
            const manifests = entries.filter(entry => !entry.isDirectory
                && path.basename(entry.filePath).endsWith(common_1.DEP_MAN_SUFFIX));
            allManifests = allManifests.concat(manifests);
        }, { recurse: true });
        let parsedDownloadInfo = [];
        for (const manifest of allManifests) {
            try {
                const data = yield vortex_api_1.fs.readFileAsync(manifest.filePath, { encoding: 'utf8' });
                const parsedData = JSON.parse(data);
                parsedDownloadInfo = parsedDownloadInfo.concat(parsedData);
            }
            catch (err) {
                vortex_api_1.log('error', 'failed to read/parse dependency manifest', err);
                continue;
            }
        }
        const uniqueDownloads = Array.from(new Set(parsedDownloadInfo.map(a => util_1.genIdentifier(a.downloadIds))))
            .map(id => parsedDownloadInfo.find(a => util_1.genIdentifier(a.downloadIds) === id));
        if (uniqueDownloads.length === 0) {
            return;
        }
        try {
            yield fulfillDependencies(api, uniqueDownloads);
            api.sendNotification({
                message: 'All dependencies fulfilled',
                type: 'success',
                id: 'all-dependencies-fulfilled',
                displayMS: 5000,
            });
            raiseRulesNotification(api, uniqueDownloads);
            return Promise.resolve();
        }
        catch (err) {
            api.showErrorNotification('Failed to download dependencies', err, { allowReport: false });
        }
    });
}
function genDependencyManifest(api, modIds) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const props = util_1.genProps(api);
        if (props === undefined) {
            api.showErrorNotification('Failed to create dependencies manifest', 'no active profile', { allowReport: false });
        }
        const nexusDownloads = [];
        const mods = modIds.map(modId => props.mods[modId]).filter(mod => mod !== undefined);
        const modsData = mods.map(mod => ({
            modId: mod.id,
            archiveId: mod.archiveId,
            rules: mod.rules || [],
        })).filter(modData => modData.archiveId !== undefined);
        const includedModIds = modsData.map(mod => mod.modId);
        for (const modData of modsData) {
            const arcId = modData.archiveId;
            let ids = util_1.extractIds(props.downloads[arcId]);
            if (ids === undefined && ((_a = props.downloads[arcId]) === null || _a === void 0 ? void 0 : _a.fileMD5) !== undefined) {
                ids = yield util_1.resolveIdsUsingMD5(api, arcId);
            }
            if (ids === undefined || ((_b = props.downloads[arcId]) === null || _b === void 0 ? void 0 : _b.localPath) === undefined) {
                if (props.downloads[arcId] !== undefined) {
                    vortex_api_1.log('warn', 'failed to extract required information', JSON.stringify(props.downloads[arcId]));
                }
                else {
                    vortex_api_1.log('warn', 'failed to extract required information - download archive missing', arcId);
                }
                continue;
            }
            const allowAutoEnable = props.state.settings.automation.enable;
            const nexusDownload = {
                archiveName: props.downloads[arcId].localPath,
                downloadIds: ids,
                allowAutoInstall: true,
                allowAutoEnable,
                rules: modData.rules.filter(rule => includedModIds.includes(rule.reference.id)),
            };
            nexusDownloads.push(nexusDownload);
        }
        const timestamp = new Date();
        api.sendNotification({
            id: 'mod-dependency-manifest',
            type: 'success',
            message: 'Dependency information created',
            actions: [
                {
                    title: 'Save to file',
                    action: () => __awaiter(this, void 0, void 0, function* () {
                        yield vortex_api_1.fs.ensureDirWritableAsync(common_1.MANIFESTS_PATH);
                        const tmpPath = path.join(common_1.MANIFESTS_PATH, `${util_1.formatTime(timestamp)}${common_1.DEP_MAN_SUFFIX}`);
                        yield vortex_api_1.fs.writeFileAsync(tmpPath, JSON.stringify(nexusDownloads, undefined, 2));
                        vortex_api_1.util.opn(common_1.MANIFESTS_PATH).catch(() => null);
                    }),
                },
                {
                    title: 'Copy to clipboard',
                    action: () => electron_1.clipboard.writeText(JSON.stringify(nexusDownloads, undefined, 2)),
                },
            ],
        });
    });
}
exports.default = init;


/***/ }),

/***/ "./src/reducers/persistent.ts":
/*!************************************!*\
  !*** ./src/reducers/persistent.ts ***!
  \************************************/
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
const actions = __importStar(__webpack_require__(/*! ../actions/persistent */ "./src/actions/persistent.ts"));
const persistentReducer = {
    reducers: {
        [actions.setFulfillerSubscription]: (state, payload) => {
            const { profileId, subId } = payload;
            return vortex_api_1.util.setSafe(state, [profileId, 'subId'], subId);
        },
        [actions.clearFulfillerSubscription]: (state, payload) => {
            const { profileId } = payload;
            return vortex_api_1.util.setSafe(state, [profileId, 'subId'], undefined);
        },
    },
    defaults: {},
};
exports.default = persistentReducer;


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
        [actions.setOpenProfileSelect]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['open'], payload);
        },
        [actions.setProfileUserData]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['userData'], payload);
        },
        [actions.setUserDataFilePath]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['userDataFilePath'], payload);
        },
    },
    defaults: {
        open: false,
        userData: {},
        userDataFilePath: '',
    },
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
        [actions.setAutoFulfillDependencies]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['autofulfill'], payload);
        },
        [actions.setEnableDebugMode]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['fulfillerDebugMode'], payload);
        },
        [actions.setReadNonPremiumNotif]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['readNonPremiumNotification'], payload);
        },
        [actions.setLockSub]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['lockSub'], payload);
        },
        [actions.addUrlSub]: (state, payload) => {
            const path = ['urlSubscriptions'];
            const copy = [].concat(vortex_api_1.util.getSafe(state, path, []), [payload]);
            return vortex_api_1.util.setSafe(state, path, copy);
        },
        [actions.removeUrlSub]: (state, payload) => {
            const path = ['urlSubscriptions'];
            const res = vortex_api_1.util.removeValueIf(state, path, sub => sub.id === payload);
            return res;
        },
        [actions.setUrlSub]: (state, payload) => {
            const path = ['urlSubscriptions'];
            let copy = vortex_api_1.util.getSafe(state, path, []);
            const idx = copy.findIndex(sub => sub.id === payload.id);
            if (idx === -1) {
                return state;
            }
            copy.splice(idx, 1, payload.urlSub);
            return vortex_api_1.util.setSafe(state, path, copy);
        },
    },
    defaults: {
        autofulfill: false,
        lockSub: false,
        fulfillerDebugMode: false,
        readNonPremiumNotification: false,
        urlSubscriptions: [],
    },
};
exports.default = settingsReducer;


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NotPremiumError = exports.TimeoutError = void 0;
class TimeoutError extends Error {
    constructor(modId) {
        super(`${modId}: Dependency operation timed out`);
        this.name = 'TimeoutError';
    }
}
exports.TimeoutError = TimeoutError;
class NotPremiumError extends Error {
    constructor() {
        super('Only available to premium users');
        this.name = 'NotPremiumError';
    }
}
exports.NotPremiumError = NotPremiumError;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDepFromUrl = exports.disableAllMods = exports.genIdentifier = exports.compareIds = exports.formatTime = exports.isPremium = exports.extractIds = exports.resolveIdsUsingMD5 = exports.genProps = exports.convertGameDomain = exports.toBlue = void 0;
const bluebird_1 = __importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const common_1 = __webpack_require__(/*! ./common */ "./src/common.ts");
function toBlue(func) {
    return (...args) => bluebird_1.default.resolve(func(...args));
}
exports.toBlue = toBlue;
const convertableNames = {
    skyrimspecialedition: 'skyrimse',
    newvegas: 'falloutnv',
    elderscrollsonline: 'teso',
};
function convertGameDomain(gameId) {
    return (convertableNames[gameId] !== undefined)
        ? convertableNames[gameId] : gameId;
}
exports.convertGameDomain = convertGameDomain;
function genProps(api, profileId) {
    const state = api.getState();
    const profile = (profileId !== undefined)
        ? vortex_api_1.selectors.profileById(state, profileId)
        : vortex_api_1.selectors.activeProfile(state);
    if ((profile === null || profile === void 0 ? void 0 : profile.gameId) === undefined) {
        return undefined;
    }
    const mods = vortex_api_1.util.getSafe(state, ['persistent', 'mods', profile.gameId], {});
    const downloads = vortex_api_1.util.getSafe(state, ['persistent', 'downloads', 'files'], {});
    return { state, profile, mods, downloads };
}
exports.genProps = genProps;
function resolveIdsUsingMD5(api, downloadId) {
    return __awaiter(this, void 0, void 0, function* () {
        const state = api.getState();
        let ids;
        const download = vortex_api_1.util.getSafe(state, ['persistent', 'downloads', 'files', downloadId], undefined);
        if (download === undefined) {
            return undefined;
        }
        if (download.fileMD5 !== undefined) {
            const gameId = Array.isArray(download.game) ? download.game[0] : download.game;
            const downloadPath = vortex_api_1.selectors.downloadPathForGame(api.getState(), gameId);
            const modInfo = yield api.lookupModMeta({
                fileMD5: download.fileMD5,
                filePath: path_1.default.join(downloadPath, download.localPath),
                gameId,
                fileSize: download.size,
            }, true);
            if (modInfo.length > 0) {
                const info = modInfo[0].value;
                const setInfo = (key, value) => {
                    if (value !== undefined) {
                        api.store.dispatch(vortex_api_1.actions.setDownloadModInfo(downloadId, key, value));
                    }
                };
                try {
                    const rgx = /\/mods\/(\d+)\/files\/(\d+)/i;
                    let parsed;
                    try {
                        parsed = new URL(info.sourceURI);
                    }
                    catch (err) {
                        return undefined;
                    }
                    const matches = parsed.pathname.match(rgx);
                    if ((parsed.protocol !== 'nxm:') || (matches === null) || (matches.length !== 3)) {
                        return undefined;
                    }
                    const domainName = info.domainName;
                    const modId = matches[1];
                    const fileId = matches[2];
                    ids = { gameId, modId: modId.toString(), fileId: fileId.toString() };
                    setInfo('source', 'nexus');
                    setInfo('nexus.ids.gameId', domainName);
                    setInfo('nexus.ids.fileId', fileId);
                    setInfo('nexus.ids.modId', modId);
                }
                catch (err) {
                }
                setInfo('meta', info);
            }
        }
        return Promise.resolve(ids);
    });
}
exports.resolveIdsUsingMD5 = resolveIdsUsingMD5;
function extractIds(download) {
    if (download === undefined) {
        return undefined;
    }
    const isValid = (ids) => ((ids === null || ids === void 0 ? void 0 : ids.fileId) !== undefined && (ids === null || ids === void 0 ? void 0 : ids.gameId) !== undefined && (ids === null || ids === void 0 ? void 0 : ids.modId) !== undefined);
    let ids = vortex_api_1.util.getSafe(download.modInfo, ['nexus', 'ids'], undefined);
    if (isValid(ids)) {
        return ids;
    }
    const meta = vortex_api_1.util.getSafe(download.modInfo, ['meta', 'details'], undefined);
    if ((meta === null || meta === void 0 ? void 0 : meta.fileId) !== undefined) {
        ids = { fileId: meta.fileId, modId: meta.modId, gameId: download.game[0] };
        if (isValid(ids)) {
            return ids;
        }
    }
    return undefined;
}
exports.extractIds = extractIds;
function isPremium(api) {
    const state = api.getState();
    return vortex_api_1.util.getSafe(state, ['persistent', 'nexus', 'userInfo', 'isPremium'], false);
}
exports.isPremium = isPremium;
function formatTime(input) {
    return [
        input.getFullYear(),
        vortex_api_1.util.pad(input.getMonth(), '0', 2),
        vortex_api_1.util.pad(input.getDay(), '0', 2),
        vortex_api_1.util.pad(input.getHours(), '0', 2),
        vortex_api_1.util.pad(input.getMinutes(), '0', 2),
    ].join('-');
}
exports.formatTime = formatTime;
function compareIds(lhs, rhs) {
    if ((lhs === null || lhs === void 0 ? void 0 : lhs.fileId) === undefined || (rhs === null || rhs === void 0 ? void 0 : rhs.fileId) === undefined) {
        return false;
    }
    if (genIdentifier(lhs) === genIdentifier(rhs)) {
        return true;
    }
    return false;
}
exports.compareIds = compareIds;
function genIdentifier(ids) {
    if (ids === undefined) {
        return undefined;
    }
    return `${ids.fileId}_${ids.modId}_${ids.gameId}`;
}
exports.genIdentifier = genIdentifier;
function disableAllMods(api) {
    const state = api.getState();
    const activeProfile = vortex_api_1.selectors.activeProfile(state);
    const mods = vortex_api_1.util.getSafe(state, ['persistent', 'mods', activeProfile.gameId], {});
    for (const modId of Object.keys(mods)) {
        api.store.dispatch(vortex_api_1.actions.setModEnabled(activeProfile.id, modId, false));
    }
}
exports.disableAllMods = disableAllMods;
function fetchDepFromUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const dest = path_1.default.join(common_1.MANIFESTS_PATH, common_1.SUB_FILE);
        try {
            const res = yield fetch(url);
            const buffer = yield res.arrayBuffer();
            yield vortex_api_1.fs.ensureDirWritableAsync(common_1.MANIFESTS_PATH);
            yield vortex_api_1.fs.writeFileAsync(dest, Buffer.from(buffer));
        }
        catch (err) {
            return Promise.reject(err);
        }
    });
}
exports.fetchDepFromUrl = fetchDepFromUrl;


/***/ }),

/***/ "./src/views/ProfileSelectionDialog.tsx":
/*!**********************************************!*\
  !*** ./src/views/ProfileSelectionDialog.tsx ***!
  \**********************************************/
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
const session_1 = __webpack_require__(/*! ../actions/session */ "./src/actions/session.ts");
class ProfileSelectionDialog extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.onClick = () => {
            if (!!this.state.selectedProfileId) {
                this.props.onSelectProfile(this.props.profileData[this.state.selectedProfileId]);
            }
            this.props.onSetOpen(false);
        };
        this.close = () => {
            this.props.onSetOpen(false);
        };
        this.renderProfile = (profId) => {
            const { profileData } = this.props;
            const text = `${profId} - ${profileData[profId].gameId} (enabled: ${profileData[profId].enabledModIds.length})`;
            return React.createElement(react_bootstrap_1.MenuItem, { key: profId, eventKey: profId }, text);
        };
        this.selectProfileId = (eventKey) => {
            this.nextState.selectedProfileId = eventKey;
        };
        this.initState({
            selectedProfileId: undefined,
        });
    }
    render() {
        const { t, profileData, open } = this.props;
        const { selectedProfileId } = this.state;
        const profileIds = Object.keys(profileData);
        const title = selectedProfileId !== undefined
            ? `${selectedProfileId} - ${profileData[selectedProfileId].gameId} (enabled: ${profileData[selectedProfileId].enabledModIds.length})`
            : 'Select Profile';
        return (React.createElement(vortex_api_1.Modal, { id: 'import-select-profile', show: open, onHide: this.close },
            React.createElement(vortex_api_1.Modal.Header, null,
                React.createElement("h4", null,
                    " ",
                    t('Select a Profile'),
                    " ")),
            React.createElement(vortex_api_1.Modal.Body, null,
                t('Select the profile you wish to import from:'),
                React.createElement("br", null),
                React.createElement(react_bootstrap_1.SplitButton, { id: 'import-select-profile', title: title, onSelect: this.selectProfileId }, profileIds.map(this.renderProfile))),
            React.createElement(vortex_api_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { onClick: this.close }, 'Close'),
                React.createElement(react_bootstrap_1.Button, { onClick: this.onClick }, 'Import From Profile'))));
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onSetOpen: (open) => dispatch(session_1.setOpenProfileSelect(open)),
    };
}
function mapStateToProps(state) {
    return {
        open: vortex_api_1.util.getSafe(state, ['session', 'depfulfiller', 'open'], false),
        profileData: vortex_api_1.util.getSafe(state, ['session', 'depfulfiller', 'userData'], {}),
    };
}
exports.default = react_i18next_1.withTranslation(['common', 'dependency-fulfiller'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ProfileSelectionDialog));


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const UrlSubscriber_1 = __importDefault(__webpack_require__(/*! ./UrlSubscriber */ "./src/views/UrlSubscriber.tsx"));
const settings_1 = __webpack_require__(/*! ../actions/settings */ "./src/actions/settings.ts");
const common_1 = __webpack_require__(/*! ../common */ "./src/common.ts");
class Settings extends vortex_api_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.enableDebugMode = (enabled) => {
            const { onSetEnableDebugMode } = this.props;
            onSetEnableDebugMode(enabled);
        };
        this.toggle = (enabled) => {
            const { onSetAutoFulfillDependencies } = this.props;
            onSetAutoFulfillDependencies(enabled);
        };
    }
    render() {
        return (React.createElement("div", null,
            this.renderToggles(),
            React.createElement(UrlSubscriber_1.default, null)));
    }
    renderToggles() {
        const { t, autoFulfill } = this.props;
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.ControlLabel, null, t('Dependency Fulfillment')),
            React.createElement(vortex_api_1.Toggle, { checked: autoFulfill, onToggle: this.toggle },
                t('Fulfill mod dependencies automatically on mod installation'),
                React.createElement(vortex_api_1.More, { id: 'dep-fulfill-info', name: 'On Install Dependency Fulfiller' }, t('If checked, Vortex will search the new mod\'s installation folder for files with the '
                    + '"{{suffix}}" suffix and attempt to install any mod dependencies defined in that '
                    + 'file. (Obviously this will only work if the mod author included such a file with his '
                    + 'mod in the first place)', { replace: { suffix: common_1.DEP_MAN_SUFFIX } }))),
            React.createElement(vortex_api_1.Toggle, { checked: this.props.debugMode, onToggle: this.enableDebugMode },
                t('Enable ability to import dependencies from application state backups'),
                React.createElement(vortex_api_1.More, { id: 'dep-fulfill-info2', name: 'Debug Mode' }, t('If checked, Vortex will enable an additional import button which is configured '
                    + 'to use application state backups - this is intended to be used by Vortex developers '
                    + 'to re-create user mods setup for debugging purposes - use at own risk!', { replace: { suffix: common_1.DEP_MAN_SUFFIX } })))));
    }
}
function mapStateToProps(state) {
    return {
        autoFulfill: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'autofulfill'], false),
        debugMode: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'fulfillerDebugMode'], false),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetAutoFulfillDependencies: (fulfill) => dispatch(settings_1.setAutoFulfillDependencies(fulfill)),
        onSetEnableDebugMode: (debugMode) => dispatch(settings_1.setEnableDebugMode(debugMode)),
    };
}
exports.default = react_i18next_1.withTranslation(['common', 'dependency-fulfiller'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Settings));


/***/ }),

/***/ "./src/views/UrlSubscriber.tsx":
/*!*************************************!*\
  !*** ./src/views/UrlSubscriber.tsx ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const shortid_1 = __webpack_require__(/*! shortid */ "../../node_modules/shortid/index.js");
const persistent_1 = __webpack_require__(/*! ../actions/persistent */ "./src/actions/persistent.ts");
const settings_1 = __webpack_require__(/*! ../actions/settings */ "./src/actions/settings.ts");
const common_1 = __webpack_require__(/*! ../common */ "./src/common.ts");
class UrlSubscriber extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mNone = {
            id: 'none',
            name: 'No Subscription',
            url: 'none',
        };
        this.removeSub = () => {
            const { selectedUrlSubId } = this.state;
            const { onRemoveSub, profile, onClearSubscription } = this.props;
            onRemoveSub(selectedUrlSubId);
            onClearSubscription(profile.id);
        };
        this.nop = () => null;
        this.renderSubUrl = (sub) => {
            return React.createElement("option", { key: sub.id, value: sub.id, "data-id": sub.id }, sub.name);
        };
        this.selectSub = (evt) => {
            var _a;
            const { profile, onSetSubscription } = this.props;
            const subId = (_a = evt.target.selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.getAttribute('data-id');
            if (subId === 'none') {
                this.nextState.selectedUrlSubId = undefined;
                onSetSubscription(profile.id, undefined);
            }
            else {
                this.nextState.selectedUrlSubId = subId;
                onSetSubscription(profile.id, subId);
            }
        };
        this.toggleLock = (lock) => {
            const { onSetLock } = this.props;
            onSetLock(lock);
        };
        this.subEditorDialog = (evt) => __awaiter(this, void 0, void 0, function* () {
            const id = evt.currentTarget.getAttribute('data-id');
            const { onEditSub, onAddSub } = this.props;
            const sub = this.getSub(id);
            const res = yield this.context.api.showDialog('info', 'Create/Edit URL Subscription', {
                text: 'Please type in a human readable name for this subscription and a valid URL '
                    + 'from which the dependencies JSON can be fetched.',
                input: [
                    { id: 'name', type: 'text', value: sub === null || sub === void 0 ? void 0 : sub.name, placeholder: 'A unique name to identify this url by' },
                    { id: 'url', type: 'text', value: sub === null || sub === void 0 ? void 0 : sub.url, placeholder: 'https://www.pathtoajsonfile.com/file.json' },
                ],
            }, [
                { label: 'Cancel' },
                { label: 'Save' },
            ]);
            if (res.action === 'Save') {
                const name = res.input['name'];
                let url;
                try {
                    url = new URL(res.input['url']);
                }
                catch (err) {
                    this.context.api.showErrorNotification('Invalid URL - try again', err, { allowReport: false });
                    return;
                }
                const newSub = {
                    id: (sub === null || sub === void 0 ? void 0 : sub.id) !== undefined ? sub.id : shortid_1.generate(),
                    name,
                    url,
                };
                if (sub !== undefined) {
                    onEditSub(sub.id, newSub);
                }
                else {
                    onAddSub(newSub);
                }
            }
        });
        this.initState({
            selectedUrlSubId: undefined,
        });
    }
    componentDidMount() {
        const { subId } = this.props;
        this.nextState.selectedUrlSubId = subId;
    }
    render() {
        const { t, lockSub, subId, availableSubs } = this.props;
        const { selectedUrlSubId } = this.state;
        const sub = this.getSub(selectedUrlSubId);
        const title = ((sub === null || sub === void 0 ? void 0 : sub.name) !== undefined) ? sub.name : 'Select URL';
        return (React.createElement(react_bootstrap_1.FormGroup, { id: 'fulfiller-subscribe-url-select' },
            React.createElement(react_bootstrap_1.ControlLabel, null,
                t('Select a URL you wish to subscribe to '),
                React.createElement(vortex_api_1.More, { id: 'more-fulfiller-subs', name: t('Subscribed Url') }, t('Use the buttons below to Add/Remove/Edit a subscription. '
                    + 'The Dependency Fulfiller will use the selected subscription to fetch '
                    + 'dependency data and attempt to download the required mods from the URL '
                    + 'specified by the subscription when clicking the "Import From Subscription" '
                    + 'button in the mods page.'))),
            React.createElement(vortex_api_1.FlexLayout, { type: 'row' },
                React.createElement(vortex_api_1.FlexLayout.Fixed, null,
                    React.createElement(react_bootstrap_1.InputGroup, { style: { padding: '0px 0px 0px 2px' } },
                        React.createElement(react_bootstrap_1.FormControl, { componentClass: 'select', onChange: this.selectSub, value: selectedUrlSubId }, [].concat(this.mNone, availableSubs).map(this.renderSubUrl)))),
                React.createElement(vortex_api_1.FlexLayout.Fixed, null,
                    React.createElement(react_bootstrap_1.InputGroup.Button, { style: { padding: '0px 2px 0px 6px' } },
                        React.createElement(vortex_api_1.tooltip.Button, { tooltip: t('Add New Subscription'), onClick: this.subEditorDialog },
                            React.createElement(vortex_api_1.Icon, { name: 'add' }))),
                    React.createElement(react_bootstrap_1.InputGroup.Button, { style: { padding: '0px 2px 0px 2px' } },
                        React.createElement(vortex_api_1.tooltip.Button, { tooltip: t('Remove Subscription'), onClick: this.removeSub, disabled: selectedUrlSubId === undefined },
                            React.createElement(vortex_api_1.Icon, { name: 'remove' }))),
                    React.createElement(react_bootstrap_1.InputGroup.Button, { style: { padding: '0px 2px 0px 2px' } },
                        React.createElement(vortex_api_1.tooltip.Button, { "data-id": selectedUrlSubId, tooltip: t('Edit Subscription'), onClick: this.subEditorDialog, disabled: selectedUrlSubId === undefined },
                            React.createElement(vortex_api_1.Icon, { name: 'show' }))))),
            React.createElement(vortex_api_1.Toggle, { checked: lockSub, onToggle: this.toggleLock },
                t('Lock your mod list to the assigned subscription'),
                React.createElement(vortex_api_1.More, { id: 'dep-lock-info', name: 'Lock Subscription' }, t('If toggled and a valid subscription is selected, Vortex will '
                    + 'automatically disable mods that are not part of the dependency data '
                    + 'it downloads from the URL defined by the subscription. All dependencies '
                    + 'will be automatically enabled upon their successful installation.', { replace: { suffix: common_1.DEP_MAN_SUFFIX } })))));
    }
    getSub(id) {
        const { availableSubs } = this.props;
        return availableSubs.find(sub => sub.id === id);
    }
}
function mapStateToProps(state) {
    const profile = vortex_api_1.selectors.activeProfile(state);
    return {
        profile,
        subId: vortex_api_1.util.getSafe(state, ['persistent', 'depfulfiller', profile.id, 'subId'], undefined),
        lockSub: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'lockSub'], false),
        availableSubs: vortex_api_1.util.getSafe(state, ['settings', 'interface', 'urlSubscriptions'], []),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetLock: (lock) => dispatch(settings_1.setLockSub(lock)),
        onAddSub: (sub) => dispatch(settings_1.addUrlSub(sub)),
        onEditSub: (id, sub) => dispatch(settings_1.setUrlSub(id, sub)),
        onRemoveSub: (id) => dispatch(settings_1.removeUrlSub(id)),
        onSetSubscription: (profileId, subId) => dispatch(persistent_1.setFulfillerSubscription(profileId, subId)),
        onClearSubscription: (profileId) => dispatch(persistent_1.clearFulfillerSubscription(profileId)),
    };
}
exports.default = react_i18next_1.withTranslation(['common', 'dependency-fulfiller'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UrlSubscriber));


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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "vortex-api":
/*!*****************************!*\
  !*** external "vortex-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ })

/******/ });
//# sourceMappingURL=bundledPlugins/dependency-fulfiller/dependency-fulfiller.js.map