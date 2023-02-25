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

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
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

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

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

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

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

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

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

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

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

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

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

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
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

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
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

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const BethesdaImport_1 = __importDefault(__webpack_require__(/*! ./views/BethesdaImport */ "./src/views/BethesdaImport.tsx"));
const supportedGameIds = ['skyrimse', 'fallout4'];
function main(context) {
    if (process.platform !== "win32")
        return false;
    context.registerDialog('bethesda-net-import', BethesdaImport_1.default);
    context.registerAction('mod-icons', 120, 'import', {}, 'Import From Bethesda.net', () => {
        context.api.store.dispatch(vortex_api_1.actions.setDialogVisible('bethesda-net-import'));
    }, (instanceIds) => {
        const gameId = vortex_api_1.selectors.activeGameId(context.api.store.getState());
        return supportedGameIds.includes(gameId);
    });
    context.once(() => {
        context.api.setStylesheet('bethesda-net-import', path.join(__dirname, 'bethesda-net-import.scss'));
    });
    return true;
}
exports.default = main;


/***/ }),

/***/ "./src/util/bethesdaImportUtil.ts":
/*!****************************************!*\
  !*** ./src/util/bethesdaImportUtil.ts ***!
  \****************************************/
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
exports.getBethesdaNetModData = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const bluebird_1 = __importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const https = __importStar(__webpack_require__(/*! https */ "https"));
const filePathMatcher = /data\/([\w\-\/ \'\(\)]+.[a-zA-Z0-9]{3})/g;
const options = {
    'method': 'GET',
    'hostname': 'api.bethesda.net',
    'path': '/mods/ugc-workshop/content/get?content_id=',
    'headers': {},
    'maxRedirects': 20,
    'timeout': 10000,
};
function getBethesdaNetModData(manifestPath, creationClub) {
    return vortex_api_1.fs.readdirAsync(manifestPath)
        .then((manifests) => {
        if (!manifests)
            return bluebird_1.default.reject(`Error reading ${manifestPath}`);
        return bluebird_1.default.reduce(manifests, (accum, manifest, idx) => vortex_api_1.fs.readFileAsync(path.join(manifestPath, manifest))
            .then((data) => parseManifest(manifest, data.toString(), creationClub).then(m => {
            accum.push(m);
            return accum;
        }))
            .catch(err => {
            vortex_api_1.log('warn', 'Error reading Bethesda.net manifest', err);
            return accum;
        }), []);
    })
        .catch(err => bluebird_1.default.reject(err));
}
exports.getBethesdaNetModData = getBethesdaNetModData;
function parseManifest(manifest, data, cc) {
    const matches = data.match(filePathMatcher);
    if (!matches)
        return bluebird_1.default.reject(`Error matching files from manifest ${manifest}`);
    const files = matches.map(f => f.substr(5, f.length));
    const idandVersion = path.basename(manifest, '.manifest').split('-');
    const id = idandVersion[0];
    const version = idandVersion[1];
    const filename = files[0].substr(0, files[0].lastIndexOf('.'));
    const name = filename.charAt(0).toUpperCase() + filename.slice(1);
    return getApiData(parseInt(id))
        .then((data) => {
        const mod = {
            id,
            name: data ? data.name || name : name,
            files,
            author: data ? data.username || 'Bethesda.net' : 'Bethesda.net',
            description: data ? data.description : '',
            pictureUrl: data ? data.preview_file_url : '',
            version: data ? data.version || version : version,
            creationClub: data ? data.cc_mod : cc,
            manifest
        };
        return mod;
    });
}
function getApiData(id) {
    return new bluebird_1.default((resolve, reject) => {
        const reqOptions = Object.assign({}, options);
        reqOptions.path = `/mods/ugc-workshop/content/get?content_id=${id}`;
        const req = https.request(reqOptions, function (res) {
            let chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => {
                let body = Buffer.concat(chunks);
                try {
                    const data = JSON.parse(body.toString());
                    const details = data.platform.response.content;
                    resolve(details);
                }
                catch (err) {
                    resolve();
                }
            });
            res.on('error', (err) => {
                console.error(err);
                resolve();
            });
        });
        req.on('timeout', () => resolve());
        req.on('error', (err) => resolve());
        req.end();
    });
}
exports.default = getBethesdaNetModData;


/***/ }),

/***/ "./src/util/import.ts":
/*!****************************!*\
  !*** ./src/util/import.ts ***!
  \****************************/
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
const bluebird_1 = __importDefault(__webpack_require__(/*! bluebird */ "bluebird"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const shortid_1 = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
const modmeta_db_1 = __webpack_require__(/*! modmeta-db */ "modmeta-db");
function importMods(t, store, gamePath, mods, createArchives, progress) {
    const gameId = vortex_api_1.selectors.activeGameId(store.getState());
    const errors = [];
    vortex_api_1.log('debug', 'Bethesda.net import starting');
    const installPath = vortex_api_1.selectors.installPath(store.getState());
    const downloadPath = vortex_api_1.selectors.downloadPath(store.getState());
    return bluebird_1.default.mapSeries(mods, (mod, idx, len) => {
        vortex_api_1.log('debug', 'transferring', mod);
        const vortexId = `bethesdanet-${mod.id}-${mod.version}`;
        progress(mod.name, idx / len);
        return transferMod(mod, gamePath, installPath, vortexId)
            .then(() => {
            if (!createArchives)
                return bluebird_1.default.resolve();
            return createArchive(installPath, downloadPath, mod, vortexId, store)
                .then(() => bluebird_1.default.resolve())
                .catch(err => errors.push({ name: mod.name, errors: err }));
        })
            .catch(err => {
            vortex_api_1.log('debug', 'Failed to import', err);
            errors.push({ name: mod.name, version: mod.version, errors: err });
        })
            .then(() => {
            if (errors.find(e => e.name === mod.name))
                return bluebird_1.default.resolve();
            store.dispatch(vortex_api_1.actions.addMod(gameId, toVortexMod(mod, vortexId, gameId)));
            return bluebird_1.default.resolve();
        });
    })
        .then(() => {
        vortex_api_1.log('debug', 'Finished importing');
        return errors;
    });
}
function transferMod(mod, gamePath, installPath, vortexId) {
    const modFolder = mod.creationClub ? 'Creations' : 'Mods';
    const manifest = path.join(gamePath, modFolder, mod.manifest);
    const stagingPath = path.join(installPath, vortexId);
    const transferData = mod.files
        ? mod.files.map(f => {
            return {
                sourcePath: path.join(gamePath, 'data', f),
                destinationPath: path.join(stagingPath, f)
            };
        })
        : [];
    let errors = [];
    if (mod.isAlreadyManaged) {
        errors.push({ message: `This mod has already been imported. Please uninstall the current version from Vortex before importing again.` });
        return bluebird_1.default.reject(errors);
    }
    return bluebird_1.default.all(transferData.map(t => {
        return vortex_api_1.fs.statAsync(t.sourcePath).catch((err) => errors.push(err));
    }))
        .then(() => {
        if (errors.length)
            return bluebird_1.default.reject(errors);
        return vortex_api_1.fs.ensureDirAsync(stagingPath).catch((err) => errors.push(err))
            .then(() => {
            if (errors.length)
                return bluebird_1.default.reject(errors);
            return bluebird_1.default.all(transferData.map(t => {
                return vortex_api_1.fs.moveAsync(t.sourcePath, t.destinationPath).catch((err) => errors.push(err));
            })).catch((err) => errors.push(err))
                .then(() => vortex_api_1.fs.removeAsync(manifest));
        });
    })
        .catch((err) => {
        return bluebird_1.default.reject(errors);
    });
}
function createArchive(installPath, downloadPath, mod, vortexId, store) {
    if (mod.isAlreadyManaged)
        return bluebird_1.default.resolve();
    vortex_api_1.log('debug', 'Creating Archive', vortexId);
    const sevenZip = new vortex_api_1.util.SevenZip();
    const gameId = vortex_api_1.selectors.activeGameId(store.getState());
    const archiveName = `${sanitizeForFileName(mod.name)}-${mod.id}-${mod.version}`;
    const archivePath = path.join(downloadPath, `${archiveName}.7z`);
    const tempPath = path.join(installPath, `${archiveName}.7z`);
    const filesToPack = mod.files.map(f => path.join(installPath, vortexId, f));
    mod.archiveId = shortid_1.generate();
    return sevenZip.add(tempPath, filesToPack)
        .then(() => {
        return modmeta_db_1.genHash(tempPath)
            .then((hash) => {
            mod.md5hash = hash.md5sum;
            return vortex_api_1.fs.statAsync(tempPath)
                .then((stats) => {
                store.dispatch(vortex_api_1.actions.addLocalDownload(mod.archiveId, gameId, path.basename(archivePath), stats.size));
                store.dispatch(vortex_api_1.actions.setDownloadModInfo(mod.archiveId, 'name', mod.name));
                store.dispatch(vortex_api_1.actions.setDownloadModInfo(mod.archiveId, 'version', mod.version));
                store.dispatch(vortex_api_1.actions.setDownloadModInfo(mod.archiveId, 'game', gameId));
                return vortex_api_1.fs.moveAsync(tempPath, archivePath)
                    .then(() => {
                    return bluebird_1.default.resolve();
                });
            });
        });
    }).catch(err => bluebird_1.default.reject([err]));
}
function toVortexMod(mod, vortexId, gameId) {
    const vortexMod = {
        id: vortexId,
        state: 'installed',
        type: '',
        installationPath: vortexId,
        archiveId: mod.archiveId,
        attributes: {
            name: mod.name,
            logicalFileName: mod.name,
            author: mod.author,
            installTime: new Date(),
            version: mod.version.toString(),
            shortDescription: mod.description ? mod.description.length >= 175 ? `${mod.description.substr(0, 175)}...` : mod.description : undefined,
            description: mod.description,
            pictureUrl: mod.pictureUrl,
            notes: 'Imported from Bethesda.net',
            modId: mod.id,
            fileMD5: mod.md5hash,
            source: 'website',
            url: `https://bethesda.net/en/mods/${bethesdaNetGameId(gameId)}/mod-detail/${mod.id}`
        },
    };
    return vortexMod;
}
function bethesdaNetGameId(vortexGameId) {
    switch (vortexGameId) {
        case 'fallout4': return 'fallout4';
        case 'skyrimse': return 'skyrim';
        case 'skyrimspecialedition': return 'skyrim';
        default: return vortexGameId;
    }
}
function sanitizeForFileName(input) {
    const illegalRe = /[\/\?<>\\:\*\|":]/g;
    const controlRe = /[\x00-\x1f\x80-\x9f]/g;
    const reservedRe = /^\.+$/;
    const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
    return input.replace(illegalRe, '')
        .replace(controlRe, '')
        .replace(reservedRe, '')
        .replace(windowsReservedRe, '');
}
exports.default = importMods;


/***/ }),

/***/ "./src/views/BethesdaImport.tsx":
/*!**************************************!*\
  !*** ./src/views/BethesdaImport.tsx ***!
  \**************************************/
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
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const bethesdaImportUtil_1 = __importDefault(__webpack_require__(/*! ../util/bethesdaImportUtil */ "./src/util/bethesdaImportUtil.ts"));
const import_1 = __importDefault(__webpack_require__(/*! ../util/import */ "./src/util/import.ts"));
class BethesdaImport extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.nop = () => undefined;
        this.cancel = () => {
            this.props.onHide();
        };
        this.next = () => {
            const { importStep } = this.state;
            const currentIdx = BethesdaImport.STEPS.indexOf(importStep);
            this.setStep(BethesdaImport.STEPS[currentIdx + 1]);
        };
        this.previous = () => {
            const { importStep } = this.state;
            const currentIdx = BethesdaImport.STEPS.indexOf(importStep);
            this.setStep(BethesdaImport.STEPS[currentIdx - 1]);
        };
        this.initState({
            importStep: undefined,
            importEnabled: {},
            failedImports: [],
            counter: 0,
            modsToImport: {},
            importCC: false,
            createArchives: true,
            ccCount: 0,
            modCount: 0
        });
        this.mActions = this.genActions();
        this.mAttributes = this.genAttributes();
    }
    ;
    UNSAFE_componentWillReceiveProps(newProps) {
        if (!this.props.visible && newProps.visible) {
            this.start();
            this.nextState.importCC = false;
            this.nextState.createArchives = true;
            this.nextState.modsToImport = {};
        }
    }
    start() {
        const { t } = this.props;
        const { discovered, gameId } = this.props;
        this.nextState.importStep = 'start';
        this.nextState.error = undefined;
        this.nextState.modsToImport = {};
        const gamePath = discovered[gameId].path;
        this.nextState.gamePath = gamePath;
        this.nextState.bethesdaModManifestPath = path.join(gamePath, 'Mods');
        this.nextState.bethesdaCCManifestPath = path.join(gamePath, 'Creations');
        return vortex_api_1.fs.readdirAsync(path.join(gamePath, 'Creations'))
            .catch(() => null)
            .then((ccContent) => {
            this.nextState.ccCount = ccContent ? ccContent.length : 0;
            vortex_api_1.fs.readdirAsync(path.join(gamePath, 'Mods'))
                .then(manifests => {
                const total = ccContent ? manifests.concat(ccContent) : manifests;
                this.nextState.modCount = manifests ? manifests.length : 0;
                if (!total.length)
                    this.nextState.error = (React.createElement("span", null,
                        React.createElement("h3", null, t('No mods detected')),
                        t('You do not appear to have any mods from Bethesda.net installed.')));
                return Promise.resolve();
            })
                .catch(err => {
                if (err.code === 'ENOENT') {
                    if (this.state.ccCount)
                        return Promise.resolve();
                    this.nextState.error = (React.createElement("span", null,
                        React.createElement("h3", null, t('No mods detected')),
                        t('You do not appear to have any mods from Bethesda.net installed.')));
                }
                else {
                    this.nextState.error = (React.createElement("span", null,
                        React.createElement("h3", null, t('An unknown error occured')),
                        t('The following error occurred while attempting to locate the Bethesda.net mod manifests.'),
                        err.code,
                        " - ",
                        err.message));
                }
            });
        });
    }
    setup() {
        const { bethesdaCCManifestPath, bethesdaModManifestPath, importCC } = this.state;
        const { mods, t } = this.props;
        return bethesdaImportUtil_1.default(bethesdaModManifestPath, false)
            .catch(() => null)
            .then((bnMods) => {
            if (!importCC) {
                this.nextState.modsToImport = convertModArray(bnMods, mods);
                return Promise.resolve();
            }
            return bethesdaImportUtil_1.default(bethesdaCCManifestPath, true)
                .then((ccMods) => {
                const allMods = bnMods ? bnMods.concat(ccMods) : ccMods;
                this.nextState.modsToImport = convertModArray(allMods, mods);
                return Promise.resolve();
            })
                .catch(err => {
                if (bnMods.length) {
                    this.nextState.modsToImport = convertModArray(bnMods, mods);
                    return Promise.resolve();
                }
                ;
                this.nextState.error = (React.createElement("span", null,
                    React.createElement("h3", null, t('An unknown error occured')),
                    t('The following error occurred while attempting to identify Bethesda.net mods.'),
                    err.code,
                    " - ",
                    err.message));
                return Promise.resolve();
            });
        });
    }
    startImport() {
        const { t } = this.props;
        const { modsToImport, gamePath, createArchives } = this.state;
        const modList = modsToImport ? Object.keys(modsToImport).map(id => modsToImport[id]) : [];
        const enabledMods = modList.filter(mod => this.isModEnabled(mod));
        import_1.default(t, this.context.api.store, gamePath, enabledMods, createArchives, (mod, perc) => {
            this.nextState.progress = { mod, perc };
        })
            .then(errors => {
            this.nextState.failedImports = errors;
            this.setStep('review');
        });
        return Promise.resolve();
    }
    render() {
        const { t, visible } = this.props;
        const { error, importStep } = this.state;
        const canCancel = ['start', 'setup', 'working'].indexOf(importStep) !== -1;
        return (React.createElement(vortex_api_1.Modal, { id: 'bethesda-import-dialog', show: visible, onHide: this.nop },
            React.createElement(vortex_api_1.Modal.Header, null,
                React.createElement("h2", null, t('Bethesda.net Import Tool')),
                this.renderSteps(importStep)),
            React.createElement(vortex_api_1.Modal.Body, null, error !== undefined ? React.createElement(react_bootstrap_1.Alert, null, error) : this.renderContent(importStep)),
            React.createElement(vortex_api_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { disabled: !canCancel, onClick: this.cancel }, t('Cancel')),
                React.createElement(react_bootstrap_1.Button, { disabled: this.previousDisabled(), onClick: this.previous }, t('Previous')),
                React.createElement(react_bootstrap_1.Button, { disabled: this.nextDisabled(), onClick: this.next }, importStep === 'review' ? t('Finish') : t('Next')))));
    }
    nextDisabled() {
        const { error, importStep, importEnabled, importCC, ccCount, modCount } = this.state;
        const startModsCount = importCC ? ccCount + modCount : modCount;
        return (error !== undefined) || (['wait', 'working'].includes(importStep))
            || ((importStep === 'start') && (!startModsCount))
            || ((importStep === 'setup') && (Object.keys(importEnabled).filter(key => importEnabled[key] === true).length) === 0);
    }
    previousDisabled() {
        const { error, importStep } = this.state;
        return (error !== undefined) || (['wait', 'start', 'working', 'review'].includes(importStep));
    }
    setStep(newStep) {
        this.nextState.importStep = 'wait';
        let job = Promise.resolve();
        if (newStep === 'start') {
            job = this.start();
        }
        else if (newStep === 'setup') {
            job = this.setup();
        }
        else if (newStep === 'working') {
            job = this.startImport();
        }
        else if (newStep === undefined) {
            this.props.onHide();
        }
        job.then(() => this.nextState.importStep = newStep);
    }
    renderSteps(step) {
        const { t } = this.props;
        const { importStep } = this.state;
        return (React.createElement(vortex_api_1.Steps, { step: importStep, style: { marginBottom: 32 } },
            React.createElement(vortex_api_1.Steps.Step, { key: 'start', stepId: 'start', title: t('Start'), description: t('Introduction') }),
            React.createElement(vortex_api_1.Steps.Step, { key: 'setup', stepId: 'setup', title: t('Setup'), description: t('Select Mods to import') }),
            React.createElement(vortex_api_1.Steps.Step, { key: 'working', stepId: 'working', title: t('Import'), description: t('Magic happens') }),
            React.createElement(vortex_api_1.Steps.Step, { key: 'review', stepId: 'review', title: t('Review'), description: t('Import result') })));
    }
    ;
    renderContent(step) {
        switch (step) {
            case 'wait': return this.renderWait();
            case 'start': return this.renderStart();
            case 'setup': return this.renderSelectMods();
            case 'working': return this.renderWorking();
            case 'review': return this.renderReview();
            default: return null;
        }
    }
    renderWait() {
        return (React.createElement("div", { className: 'bethesda-wait-container' },
            React.createElement(vortex_api_1.Spinner, { className: 'page-wait-spinner' })));
    }
    renderStart() {
        const { t } = this.props;
        const { importCC, createArchives, ccCount, modCount } = this.state;
        const state = this.context.api.store.getState();
        const networkState = state.session.base.networkConnected;
        return (React.createElement("span", { className: 'bethesda-start' },
            React.createElement("img", { src: `file://${__dirname}/beth-to-vortex.png` }),
            React.createElement("h3", null, t('Bring your Bethesda.net mods to Vortex')),
            React.createElement("p", null, t('This tool will allow you to import mods installed through Bethesda.net into Vortex.')),
            React.createElement("p", null, t('Vortex has detected {{mods}} mods and {{cc}} Creation Club DLCs.', { replace: { mods: modCount, cc: ccCount } })),
            React.createElement("div", null,
                t('Before you continue, please be aware of the following:'),
                React.createElement("ul", null,
                    React.createElement("li", null, t('Vortex will attempt to important some basic mod information for Bethesda.net but this data may be incomplete.')),
                    React.createElement("li", null, t('Once imported, the mods will be removed from Bethesda.net but may still appear in "My Library".')),
                    React.createElement("li", null, t('Imported mods will not be updated when a new version is posted on Bethesda.net.')),
                    !networkState ? (React.createElement("li", null,
                        React.createElement("b", { style: { color: 'var(--brand-warning)' } }, t('You are offline! No data will be imported from Bethesda.net')))) : '')),
            React.createElement("h4", null, t('Options')),
            React.createElement(react_bootstrap_1.Checkbox, { id: 'archives', checked: createArchives, title: t('Vortex will create compressed (zipped) archives of imported mods in the downloads folder, so they can be reinstalled.'), onChange: () => this.nextState.createArchives = !createArchives }, t('Create archives for imported mods')),
            React.createElement(react_bootstrap_1.Checkbox, { id: 'includeCC', checked: importCC, title: t('Import mini-DLCs purchased from the Creation Club store as mods.'), onChange: () => this.nextState.importCC = !importCC, disabled: ccCount === 0 }, t('Include Creation Club content'))));
    }
    renderWorking() {
        const { t } = this.props;
        const { progress } = this.state;
        if (progress === undefined)
            return null;
        const perc = Math.floor(progress.perc * 100);
        return (React.createElement("div", { className: 'bethesda-import-container' },
            React.createElement("span", null, t('Currently importing: {{mod}}', { replace: { mod: progress.mod } })),
            React.createElement(react_bootstrap_1.ProgressBar, { now: perc, label: `${perc}%` }),
            React.createElement("span", null, t('This can take a while if the Bethesda.net API is being slow.'))));
    }
    renderSelectMods() {
        const { t } = this.props;
        const { counter, modsToImport } = this.state;
        return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column', height: '100%', width: '100%' } },
            React.createElement(vortex_api_1.Table, { tableId: 'bethesda-mod-imports', data: modsToImport, dataId: counter, actions: this.mActions, staticElements: this.mAttributes })));
    }
    renderReview() {
        const { t } = this.props;
        const { failedImports } = this.state;
        return (React.createElement("div", { className: 'bethesda-import-container' }, failedImports.length === 0
            ? (React.createElement("span", { className: 'import-success' },
                React.createElement(vortex_api_1.Icon, { name: 'feedback-success' }),
                t('Import completed successfully')))
            : (React.createElement("span", null,
                React.createElement("span", { className: 'import-warning' },
                    React.createElement(vortex_api_1.Icon, { name: 'feedback-warning' }),
                    t('Import completed with errors')),
                React.createElement("span", { className: 'import-warning-group' }, t('The import process encountered the following errors. You should fix any errors before retrying. Most issues can be solved by reinstalling the mods through Bethesda.net')),
                this.renderErrors()))));
    }
    renderErrors() {
        const { t } = this.props;
        const { failedImports } = this.state;
        return (React.createElement("span", null, failedImports.map(f => {
            return (React.createElement("div", { key: `errors-${f.name}`, className: 'import-warning-group' },
                React.createElement("b", null,
                    "Errors importing \"",
                    f.name,
                    "\" (v",
                    f.version,
                    ")"),
                React.createElement("ul", null, f.errors ? f.errors.map(e => (React.createElement("li", { key: `errors-${f.name}-${f.errors.indexOf(e)}` }, e.message))) : React.createElement("li", null, t('Unknown error! \n {{details}}', { replace: { details: JSON.stringify(f) } })))));
        })));
    }
    isModEnabled(mod) {
        return (this.state.importEnabled[mod.id] && this.state.importEnabled[mod.id] !== false);
    }
    genActions() {
        return [
            {
                icon: 'checkbox-checked',
                title: 'Import',
                action: (instanceIds) => {
                    instanceIds.forEach(id => this.nextState.importEnabled[id] = true);
                    ++this.nextState.counter;
                },
                singleRowAction: false
            },
            {
                icon: 'checkbox-unchecked',
                title: 'Skip',
                action: (instanceIds) => {
                    instanceIds.forEach(id => this.nextState.importEnabled[id] = false);
                    ++this.nextState.counter;
                },
                singleRowAction: false
            }
        ];
    }
    genAttributes() {
        return [
            {
                id: 'status',
                name: 'Import',
                description: 'The import status of this mod.',
                icon: 'level-up',
                calc: mod => this.isModEnabled(mod) ? 'Import' : 'Skip',
                placement: 'table',
                isToggleable: true,
                isSortable: true,
                isVolatile: true,
                edit: {
                    inline: true,
                    choices: () => [
                        { key: 'yes', text: 'Import' },
                        { key: 'no', text: 'Skip' }
                    ],
                    onChangeValue: (mod, value) => {
                        this.nextState.importEnabled[mod.id] = !(!!this.state.importEnabled[mod.id] && this.state.importEnabled[mod.id] !== false);
                        ++this.nextState.counter;
                    }
                }
            },
            {
                id: 'name',
                name: 'Mod Name',
                description: 'The mod title.',
                icon: 'quote-left',
                calc: (mod) => mod.name,
                placement: 'both',
                isToggleable: true,
                isSortable: true,
                edit: {},
                sortFunc: (lhs, rhs, locale) => {
                    return lhs.localeCompare(rhs, locale, { sensitivity: 'base' });
                }
            },
            {
                id: 'version',
                name: 'Version',
                description: 'The Bethesda.net version of this mod.',
                icon: 'id-badge',
                calc: (mod) => mod.version,
                placement: 'both',
                isToggleable: true,
                isSortable: true,
                isDefaultVisible: false,
                edit: {}
            },
            {
                id: 'author',
                name: 'Author',
                description: 'The Bethesda.net author of this mod.',
                icon: 'id-badge',
                calc: (mod) => mod.author,
                placement: 'both',
                isToggleable: true,
                isSortable: true,
                isDefaultVisible: true,
                edit: {},
                sortFunc: (lhs, rhs, locale) => {
                    return lhs.localeCompare(rhs, locale, { sensitivity: 'base' });
                }
            },
            {
                id: 'id',
                name: 'Bethesda.net ID',
                description: 'The Bethesda.net ID of this mod.',
                icon: 'id-badge',
                calc: (mod) => mod.id,
                placement: 'both',
                isToggleable: true,
                isSortable: true,
                isDefaultVisible: false,
                edit: {},
                sortFunc: (lhs, rhs, locale) => {
                    return lhs.localeCompare(rhs, locale, { sensitivity: 'base' });
                }
            },
            {
                id: 'exists',
                name: 'Already Imported',
                description: 'Has this mod already been imported?',
                icon: 'level-up',
                customRenderer: (mod, detail) => {
                    return mod.isAlreadyManaged ? (React.createElement(vortex_api_1.tooltip.Icon, { id: `already-managed-${mod.id}`, tooltip: 'This mod has already been imported. \nYou must uninstall it before importing again.', name: 'feedback-warning' })) : null;
                },
                calc: mod => mod.isAlreadyManaged,
                placement: 'table',
                isToggleable: true,
                isSortable: true,
                edit: {}
            },
            {
                id: 'modType',
                name: 'Type',
                description: 'Is this a CC mod?',
                icon: 'level-up',
                calc: (mod) => mod.creationClub ? 'Creation Club Content' : 'Bethesda.net Mod',
                placement: 'detail',
                isToggleable: true,
                isSortable: true,
                edit: {},
                condition: () => this.state.importCC
            },
            {
                id: 'files',
                name: 'Mod Files',
                description: 'Files added by this mod.',
                icon: 'id-badge',
                calc: (mod) => mod.files.length,
                customRenderer: (mod, detail) => {
                    return (React.createElement("textarea", { className: 'form-control', readOnly: true, value: mod.files.join('\n') }));
                },
                isSortable: false,
                placement: 'detail',
                edit: {}
            }
        ];
    }
}
BethesdaImport.STEPS = ['start', 'setup', 'working', 'review'];
function convertModArray(mods, vortexMods) {
    const mappedObject = {};
    if (!mods || !mods.length)
        return mappedObject;
    mods.map(mod => {
        mappedObject[mod.id] = mod;
        if (!!vortexMods[`bethesdanet-${mod.id}-${mod.version}`])
            mappedObject[mod.id].isAlreadyManaged = true;
        return mod;
    });
    return mappedObject;
}
function mapStateToProps(state) {
    const gameId = vortex_api_1.selectors.activeGameId(state);
    const game = vortex_api_1.selectors.gameById(state, gameId);
    const steamAppId = vortex_api_1.util.getSafe(game, ['details', 'steamAppId'], undefined);
    return {
        steamAppId,
        gameId,
        discovered: vortex_api_1.util.getSafe(state, ['settings', 'gameMode', 'discovered'], {}),
        mods: vortex_api_1.util.getSafe(state, ['persistent', 'mods', gameId], {}),
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}
exports.default = react_i18next_1.withTranslation(['common'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(BethesdaImport));


/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "modmeta-db":
/*!*****************************!*\
  !*** external "modmeta-db" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("modmeta-db");

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

/***/ "vortex-api":
/*!*****************************!*\
  !*** external "vortex-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ })

/******/ });
//# sourceMappingURL=bethesda.net-import.js.map