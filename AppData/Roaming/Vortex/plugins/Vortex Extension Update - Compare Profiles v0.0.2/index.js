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

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const memoize_one_1 = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
const path = __webpack_require__(/*! path */ "path");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const referenceProfile = memoize_one_1.default((state) => {
    var _a;
    const profile = vortex_api_1.selectors.activeProfile(state);
    const refProfId = (_a = profile === null || profile === void 0 ? void 0 : profile.features) === null || _a === void 0 ? void 0 : _a.reference_profile;
    if (refProfId === undefined) {
        return undefined;
    }
    return vortex_api_1.selectors.profileById(state, refProfId);
});
function modState(api, mod) {
    var _a, _b, _c;
    if (mod.state === 'downloaded') {
        return (((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.wasInstalled) !== undefined)
            ? 'Uninstalled'
            : 'Never Installed';
    }
    else if (mod.state === 'installing') {
        return 'Installing';
    }
    const refProfile = referenceProfile(api.getState());
    if (refProfile === undefined) {
        return 'N/A';
    }
    return ((_c = (_b = refProfile === null || refProfile === void 0 ? void 0 : refProfile.modState) === null || _b === void 0 ? void 0 : _b[mod.id]) === null || _c === void 0 ? void 0 : _c.enabled) ? 'Enabled'
        : 'Disabled';
}
function onChangeEnabled(api, mods, value) {
    if (Array.isArray(mods)) {
        mods.forEach(mod => changeModEnabled(api, mod, value));
    }
    else {
        changeModEnabled(api, mods, value);
    }
}
function changeModEnabled(api, mod, value) {
    var _a, _b;
    if (['installing', undefined].includes(mod.state)) {
        return;
    }
    const refProfile = referenceProfile(api.getState());
    if (refProfile === undefined) {
        return;
    }
    if (value === undefined) {
        if (mod.state === 'downloaded') {
            api.events.emit('start-install-download', mod.id);
        }
        else {
            const currentState = ((_b = (_a = refProfile.modState) === null || _a === void 0 ? void 0 : _a[mod.id]) === null || _b === void 0 ? void 0 : _b.enabled) === true;
            api.store.dispatch(vortex_api_1.actions.setModEnabled(refProfile.id, mod.id, !currentState));
        }
    }
    else {
        const enabled = value === 'enabled';
        api.store.dispatch(vortex_api_1.actions.setModEnabled(refProfile.id, mod.id, enabled));
    }
}
function makeStatusAttribute(api, setOnChange) {
    return {
        id: 'ref-profile-enabled',
        name: 'Reference Status',
        description: 'Is mod enabled in reference profile',
        icon: 'check-o',
        position: 25,
        calc: (mod) => modState(api, mod),
        placement: 'table',
        isToggleable: true,
        edit: {
            inline: true,
            choices: () => [
                { key: 'enabled', text: 'Enabled', icon: 'toggle-enabled' },
                { key: 'disabled', text: 'Disabled', icon: 'toggle-disabled' },
                { key: 'uninstalled', text: 'Uninstalled', icon: 'toggle-uninstalled', disabled: true },
                { key: 'noprofile', text: 'N/A', icon: 'not-available', disabled: true },
            ],
            onChangeValue: (objects, newValue) => onChangeEnabled(api, objects, newValue),
        },
        noShrink: true,
        isSortable: false,
        isGroupable: true,
        filter: new vortex_api_1.OptionsFilter([
            { value: 'Enabled', label: 'Enabled' },
            { value: 'Disabled', label: 'Disabled' },
            { value: 'Uninstalled', label: 'Uninstalled' },
        ], true, false),
        externalData: (onChange) => { setOnChange(onChange); },
    };
}
function makeOnSelectReferenceProfile(api) {
    return (baseProfileIds) => {
        var _a;
        const state = api.getState();
        const profile = vortex_api_1.selectors.profileById(state, baseProfileIds[0]);
        const refProfId = (_a = profile.features) === null || _a === void 0 ? void 0 : _a.reference_profile;
        const profiles = vortex_api_1.selectors.gameProfiles(state, profile.gameId)
            .filter(prof => prof.id !== profile.id);
        api.showDialog('question', 'Select Reference Profile', {
            text: 'Please select another profile that should serve as a reference to compare against. '
                + 'Remember that you have to enable the "Reference Status" column on the mods table '
                + 'to see anything.',
            choices: [
                { id: '__none', text: 'None', value: refProfId === undefined },
            ].concat(profiles.map(prof => ({ id: prof.id, text: prof.name, value: prof.id === refProfId }))),
        }, [
            { label: 'Cancel' },
            { label: 'Continue' },
        ])
            .then((result) => {
            if (result.action === 'Continue') {
                const pick = Object.keys(result.input).find(profId => result.input[profId]);
                if (pick !== undefined) {
                    api.store.dispatch(vortex_api_1.actions.setFeature(profile.id, 'reference_profile', pick === '__none' ? undefined : pick));
                }
            }
        });
    };
}
function init(context) {
    let onChange;
    context.registerProfileFeature('reference_profile', 'string', 'reference', 'Reference', 'Reference Profile', () => true);
    context.registerTableAttribute('mods', makeStatusAttribute(context.api, (onChangeIn) => { onChange = onChangeIn; }));
    context.registerAction('profile-actions', 150, 'deploy', {}, 'Set Reference Profile', makeOnSelectReferenceProfile(context.api));
    context.once(() => {
        context.api.setStylesheet('ref-profile', path.join(__dirname, 'style.scss'));
        context.api.onStateChange(['persistent', 'profiles'], (prev, cur) => {
            var _a, _b;
            const state = context.api.getState();
            const profile = vortex_api_1.selectors.activeProfile(state);
            const refProfile = referenceProfile(state);
            if ((refProfile !== undefined)
                && (prev[refProfile.id].modState !== cur[refProfile.id].modState)) {
                onChange === null || onChange === void 0 ? void 0 : onChange();
            }
            else if ((profile !== undefined)
                && (((_a = prev[profile.id]) === null || _a === void 0 ? void 0 : _a.features) !== ((_b = cur[profile.id]) === null || _b === void 0 ? void 0 : _b.features))) {
                onChange === null || onChange === void 0 ? void 0 : onChange();
            }
        });
    });
    return true;
}
exports.default = init;


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
//# sourceMappingURL=ref-profile.js.map