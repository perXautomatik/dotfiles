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

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const WorkshopImport_1 = __importDefault(__webpack_require__(/*! ./views/WorkshopImport */ "./src/views/WorkshopImport.tsx"));
const supportedGameIds = ['skyrim', 'ahatintime', 'enderal', 'darkestdungeon', 'dawnofman', 'divinityoriginalsin2', 'divinityoriginalsin2definitiveedition', 'faleanniversary', 'galacticcivilisations3', 'kenshi',
    'kerbalspaceprogram', 'legendofgrimrock', 'mbwarband', 'neverwinternightsenhancededition', 'oxygennotincluded', 'payday2', 'pillarsofeternity2deadfire', 'portal2', 'prisonarchitect',
    'rimworld', 'x4foundations', 'xcom2'];
function main(context) {
    if (process.platform !== "win32")
        return false;
    context.registerDialog('workshop-import', WorkshopImport_1.default);
    context.registerAction('mod-icons', 120, 'import', {}, 'Import From Steam Workshop', () => {
        context.api.store.dispatch(vortex_api_1.actions.setDialogVisible('workshop-import'));
    }, (instanceIds) => {
        const gameId = vortex_api_1.selectors.activeGameId(context.api.store.getState());
        return supportedGameIds.includes(gameId);
    });
    context.once(() => {
        context.api.setStylesheet('workshop-import', path.join(__dirname, 'workshop-import.scss'));
    });
    return true;
}
exports.default = main;


/***/ }),

/***/ "./src/util/import.ts":
/*!****************************!*\
  !*** ./src/util/import.ts ***!
  \****************************/
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
const path = __importStar(__webpack_require__(/*! path */ "path"));
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
function importMods(t, store, wsBasePath, mods, progress) {
    const gameId = vortex_api_1.selectors.activeGameId(store.getState());
    const errors = [];
    vortex_api_1.log('debug', 'Steam Workshop import starting');
    const installPath = vortex_api_1.selectors.installPath(store.getState());
    return bluebird_1.default.mapSeries(mods, (mod, idx, len) => {
        vortex_api_1.log('debug', 'transferring', mod);
        const vortexId = `steam-${mod.publishedfileid}`;
        progress(mod.title, idx / len);
        return transferMod(mod, wsBasePath, installPath, vortexId)
            .then(() => bluebird_1.default.resolve(''))
            .catch(err => {
            vortex_api_1.log('debug', 'Failed to import', err);
            errors.push(mod.title);
        })
            .then(() => {
            store.dispatch(vortex_api_1.actions.addMod(gameId, toVortexMod(mod, vortexId)));
            return bluebird_1.default.resolve();
        });
    })
        .then(() => {
        vortex_api_1.log('debug', 'Finished importing');
        return errors;
    });
}
function transferMod(mod, wsPath, installPath, vortexId) {
    const sourcePath = path.join(wsPath, mod.publishedfileid);
    const destinationPath = path.join(installPath, vortexId);
    return vortex_api_1.util.copyRecursive(sourcePath, destinationPath);
}
function toVortexMod(mod, vortexId) {
    const vortexMod = {
        id: vortexId,
        state: 'installed',
        type: '',
        installationPath: vortexId,
        attributes: {
            name: mod.title,
            author: 'Steam Workshop',
            description: mod.description,
            pictureUrl: mod.preview_url,
            installTime: new Date(),
            version: '1.0.0',
            notes: 'Imported from Steam Workshop',
            steamWorkshopId: mod.publishedfileid
        }
    };
    return vortexMod;
}
exports.default = importMods;


/***/ }),

/***/ "./src/util/workshopUtil.ts":
/*!**********************************!*\
  !*** ./src/util/workshopUtil.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const https = __importStar(__webpack_require__(/*! https */ "https"));
const querystring = __importStar(__webpack_require__(/*! querystring */ "querystring"));
const steamRequestOptions = {
    hostname: 'api.steampowered.com',
    port: 443,
    path: '/ISteamRemoteStorage/GetPublishedFileDetails/v1/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};
function getWorkshopModData(workshopPath) {
    return vortex_api_1.fs.readdirAsync(workshopPath)
        .then((workshopIds) => {
        if (!workshopIds || !workshopIds.length)
            return Promise.resolve([]);
        const dataObject = { 'itemcount': workshopIds.length };
        workshopIds.map((id, idx) => dataObject[`publishedfileids[${idx}]`] = id);
        const data = querystring.stringify(dataObject);
        steamRequestOptions.headers['Content-size'] = data.length;
        return new Promise((resolve, reject) => {
            const req = https.request(steamRequestOptions, (res) => {
                let rawData = '';
                res.on('data', d => rawData += d);
                res.on('end', () => {
                    var _a;
                    const reply = JSON.parse(rawData);
                    if (!((_a = reply.response) === null || _a === void 0 ? void 0 : _a.publishedfiledetails)) {
                        const err = new Error('The Steam API returned an invalid response, please report this error including your Vortex.log file.');
                        err.code = 'STEAMAPIERROR';
                        vortex_api_1.log('error', 'Steam API response did not contain publishedfiledetails', (reply.response || reply));
                        return reject(err);
                    }
                    const mappedData = workshopIds.map(id => reply.response.publishedfiledetails.find(file => file.publishedfileid === id));
                    return resolve(mappedData);
                });
            });
            req.on('error', (error) => reject(error));
            req.write(data);
            req.end();
        }).catch(err => Promise.reject(err));
    })
        .catch(err => {
        Promise.reject(err);
    });
}
exports.getWorkshopModData = getWorkshopModData;
function findWorkshopPath(games, gameId, steamAppId) {
    if (!steamAppId)
        return Promise.reject('NON_STEAM');
    const gamePath = games[gameId].path;
    if (gamePath.indexOf('steamapps') === -1)
        return Promise.reject('NON_STEAM');
    const steamApps = gamePath.substr(0, gamePath.indexOf('steamapps') + 9);
    const steamWorkshopFolder = path.join(steamApps, 'workshop', 'content', steamAppId.toString());
    return vortex_api_1.fs.readdirAsync(steamWorkshopFolder)
        .then((dirs) => {
        if (!dirs.length)
            return Promise.reject('NO_MODS');
        return Promise.resolve(steamWorkshopFolder);
    })
        .catch(err => {
        return Promise.reject(err);
    });
}
exports.default = findWorkshopPath;


/***/ }),

/***/ "./src/views/WorkshopImport.tsx":
/*!**************************************!*\
  !*** ./src/views/WorkshopImport.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
const workshopUtil_1 = __importStar(__webpack_require__(/*! ../util/workshopUtil */ "./src/util/workshopUtil.ts"));
const import_1 = __importDefault(__webpack_require__(/*! ../util/import */ "./src/util/import.ts"));
class ImportDialog extends vortex_api_1.ComponentEx {
    constructor(props) {
        super(props);
        this.nop = () => undefined;
        this.cancel = () => {
            this.props.onHide();
        };
        this.next = () => {
            const { importStep } = this.state;
            const currentIdx = ImportDialog.STEPS.indexOf(importStep);
            this.setStep(ImportDialog.STEPS[currentIdx + 1]);
        };
        this.previous = () => {
            const { importStep } = this.state;
            const currentIdx = ImportDialog.STEPS.indexOf(importStep);
            this.setStep(ImportDialog.STEPS[currentIdx - 1]);
        };
        this.initState({
            importStep: undefined,
            importArchives: true,
            importEnabled: {},
            workshopPath: undefined,
            failedImports: [],
            counter: 0,
            modsToImport: {},
        });
        this.mActions = this.genActions();
        this.mAttributes = this.genAttributes();
    }
    ;
    UNSAFE_componentWillReceiveProps(newProps) {
        if (!this.props.visible && newProps.visible) {
            this.start();
        }
    }
    start() {
        const { t } = this.props;
        const { discovered, gameId, steamAppId } = this.props;
        this.nextState.importStep = 'start';
        this.nextState.error = undefined;
        return workshopUtil_1.default(discovered, gameId, steamAppId)
            .then(found => {
            this.nextState.workshopPath = found;
        })
            .catch(err => {
            if (err === 'NON_STEAM') {
                this.nextState.error = (React.createElement("span", null,
                    React.createElement("h3", null, t('Steam Workshop folder not found')),
                    t('This game is not installed via Steam or the Steam App ID is not definied in the extension.')));
            }
            else if (err.code === 'ENOENT') {
                this.nextState.error = (React.createElement("span", null,
                    React.createElement("h3", null, t('Steam Workshop folder not found')),
                    t('The Steam Workshop folder does not exist for this game. This could mean that this game is not installed through Steam or you do not have any mods from the Workshop.')));
            }
            else if (err === 'NO_MODS') {
                this.nextState.error = (React.createElement("span", null,
                    React.createElement("h3", null, t('No Workshop mods installed')),
                    t('It doesn\'t look like you have any Steam Workshop mods installed at the moment.')));
            }
            else {
                this.nextState.error = (React.createElement("span", null,
                    React.createElement("h3", null, t('Unknown error')),
                    t('An error occured accessing your Steam Workshop folder:'),
                    " ",
                    err.message,
                    "."));
            }
        });
    }
    setup() {
        const { workshopPath } = this.state;
        const { mods } = this.props;
        const vortexState = this.context.api.store.getState();
        const networkConnected = vortexState.session.base.networkConnected;
        if (!networkConnected) {
            this.nextState.error = (React.createElement("span", null,
                React.createElement("h2", null, "No network connection"),
                "Vortex is currently offline. An internet connection is required to use this feature."));
            return Promise.resolve();
        }
        return workshopUtil_1.getWorkshopModData(workshopPath)
            .then((workshopMods) => this.nextState.modsToImport = convertWorkshopMods(workshopMods, mods))
            .catch(err => {
            if (err.code === 'ENOTFOUND')
                return this.nextState.error = (React.createElement("span", null,
                    React.createElement("h3", null, "Steam API could not be reached"),
                    "Please ensure you have an internet connection to use the feature."));
            else
                this.nextState.error = React.createElement("p", null,
                    "Error getting workshop mod data: ",
                    err.code,
                    " ",
                    err.message);
        });
    }
    startImport() {
        const { t } = this.props;
        const { modsToImport, workshopPath } = this.state;
        const modList = modsToImport ? Object.keys(modsToImport).map(id => modsToImport[id]) : [];
        const enabledMods = modList.filter(mod => this.isModEnabled(mod));
        import_1.default(t, this.context.api.store, workshopPath, enabledMods, (mod, perc) => {
            this.nextState.progress = { mod, perc };
        })
            .then(errors => {
            this.nextState.failedImports = errors;
            this.setStep('cleanup');
        });
        return Promise.resolve();
    }
    cleanupCheck() {
        const { modsToImport, workshopPath, failedImports } = this.state;
        const modList = Object.keys(modsToImport).map(id => modsToImport[id]);
        const enabledMods = modList.filter(mod => this.isModEnabled(mod) && !failedImports.includes(mod.title));
        if (!enabledMods.length) {
            this.setStep('review');
            return Promise.resolve();
        }
        const modIds = enabledMods.map(mod => mod.publishedfileid);
        return vortex_api_1.fs.readdirAsync(workshopPath)
            .then((folders) => {
            if (!folders.length)
                return this.setStep('review');
            const pending = folders.map(id => modIds.includes(id) ? modsToImport[id] : null).filter(m => m !== null);
            this.nextState.importModsToDisable = pending;
            return Promise.resolve();
        })
            .catch(err => this.nextState.error = (React.createElement("span", null,
            React.createElement("h3", null, "Unknown error"),
            err.message)));
    }
    render() {
        const { t, visible } = this.props;
        const { error, importStep } = this.state;
        const canCancel = ['start', 'setup'].indexOf(importStep) !== -1;
        return (React.createElement(vortex_api_1.Modal, { id: 'workshop-import-dialog', show: visible, onHide: this.nop },
            React.createElement(vortex_api_1.Modal.Header, null,
                React.createElement("h2", null, t('Steam Workshop Import Tool')),
                this.renderSteps(importStep)),
            React.createElement(vortex_api_1.Modal.Body, null, error !== undefined ? React.createElement(react_bootstrap_1.Alert, null, error) : this.renderContent(importStep)),
            React.createElement(vortex_api_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { disabled: !canCancel, onClick: this.cancel }, t('Cancel')),
                React.createElement(react_bootstrap_1.Button, { disabled: this.previousDisabled(), onClick: this.previous }, t('Previous')),
                React.createElement(react_bootstrap_1.Button, { disabled: this.nextDisabled(), onClick: this.next }, importStep === 'review' ? t('Finish') : t('Next')))));
    }
    nextDisabled() {
        const { error, workshopPath, importStep, importModsToDisable, importEnabled } = this.state;
        return (error !== undefined) || (importStep === 'wait')
            || ((importStep === 'start') && (workshopPath === undefined))
            || ((importStep === "cleanup") && (!!importModsToDisable.length))
            || ((importStep === 'setup') && (Object.keys(importEnabled).map(key => importEnabled[key] === true).length) === 0);
    }
    previousDisabled() {
        const { error, importStep } = this.state;
        return (error !== undefined) || (importStep === 'wait') || (importStep === 'start') || (importStep === 'cleanup');
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
        else if (newStep === 'cleanup') {
            job = this.cleanupCheck();
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
            React.createElement(vortex_api_1.Steps.Step, { key: 'cleanup', stepId: 'cleanup', title: t('Cleanup'), description: t('Unsubscribe from the workshop mods') }),
            React.createElement(vortex_api_1.Steps.Step, { key: 'review', stepId: 'review', title: t('Review'), description: t('Import result') })));
    }
    ;
    renderContent(step) {
        switch (step) {
            case 'wait': return this.renderWait();
            case 'start': return this.renderStart();
            case 'setup': return this.renderSelectMods();
            case 'working': return this.renderWorking();
            case 'cleanup': return this.renderCleanup();
            case 'review': return this.renderReview();
            default: return null;
        }
    }
    renderWait() {
        return (React.createElement("div", { className: 'workshop-wait-container' },
            React.createElement(vortex_api_1.Spinner, { className: 'page-wait-spinner' })));
    }
    renderStart() {
        const { t } = this.props;
        const { workshopPath } = this.state;
        return (React.createElement("span", { className: 'workshop-start' },
            React.createElement("img", { src: `file://${__dirname}/steam-to-vortex.png` }),
            React.createElement("h3", null, t('Bring your Workshop mods to Vortex')),
            t('This tool will allow you to import mods installed through Steam Workshop into Vortex.'),
            React.createElement("div", null,
                t('Before you continue, please be aware of the following:'),
                React.createElement("ul", null,
                    React.createElement("li", null, t('If you have a lot of mods, this process can take some time.')),
                    React.createElement("li", null, t('You must be logged into Steam with the user account subscribed to the Workshop items.')),
                    React.createElement("li", null, t('Once your mods have been imported, they will no longer be updated by Steam.')))),
            !workshopPath ? React.createElement(vortex_api_1.Spinner, null)
                : (React.createElement("div", null,
                    t('Your Steam workshop mods have been found in: '),
                    React.createElement("a", { onClick: () => vortex_api_1.util.opn(workshopPath) }, workshopPath)))));
    }
    renderWorking() {
        const { t } = this.props;
        const { progress } = this.state;
        if (progress === undefined)
            return null;
        const perc = Math.floor(progress.perc * 100);
        return (React.createElement("div", { className: 'workshop-import-container' },
            React.createElement("span", null, t('Currently importing: {{mod}}', { replace: { mod: progress.mod } })),
            React.createElement(react_bootstrap_1.ProgressBar, { now: perc, label: `${perc}%` })));
    }
    renderSelectMods() {
        const { t } = this.props;
        const { counter, modsToImport } = this.state;
        return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column', height: '100%', width: '100%' } },
            React.createElement(vortex_api_1.Table, { tableId: 'workshop-mod-imports', data: modsToImport, dataId: counter, actions: this.mActions, staticElements: this.mAttributes })));
    }
    renderCleanup() {
        const { t } = this.props;
        const { importModsToDisable, workshopPath } = this.state;
        return (React.createElement("div", { className: 'workshop-import-container' },
            React.createElement("h3", null, t('Unsubscribe in Steam Workshop')),
            React.createElement("p", null, t('Your Steam Workshop mods have been imported successfully!')),
            React.createElement("p", null, t('Before you continue, you need to unsubscribe from the mods to prevent conflicts with the imported copy.')),
            React.createElement("p", null,
                React.createElement("a", { href: 'steam://openurl/https://steamcommunity.com/id/Silly_zombie/myworkshopfiles?browsefilter=mysubscriptions' }, t('See all subscribed mods in Steam'))),
            React.createElement(react_bootstrap_1.Button, { className: "refresh-btn", onClick: () => this.setStep('cleanup') }, t('Refresh')),
            React.createElement("div", { className: 'import-mods-to-disable' }, this.renderModsToDisable(importModsToDisable)),
            React.createElement("b", null, t('Stuck here?')),
            React.createElement("p", null,
                t('If you\'ve unsubcribed from all the mods but you cannot continue, you\'ll need to delete the leftover folders in your Workshop directory. The folder names are:'),
                " ",
                importModsToDisable.map(m => m.publishedfileid).join(', '),
                " "),
            React.createElement("a", { onClick: () => vortex_api_1.util.opn(workshopPath) }, "Open Steam Workshop folder")));
    }
    renderModsToDisable(mods) {
        const { t } = this.props;
        const listItems = mods.map((mod) => {
            const steamAppUrl = `steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.publishedfileid}`;
            return (React.createElement(react_bootstrap_1.Row, { key: mod.publishedfileid },
                React.createElement(react_bootstrap_1.Col, { sm: '2' },
                    React.createElement("img", { src: mod.preview_url, style: { maxWidth: '50px', maxHeight: '50px' } })),
                React.createElement(react_bootstrap_1.Col, { sm: '6' }, mod.title),
                React.createElement(react_bootstrap_1.Col, { sm: '4' },
                    React.createElement(react_bootstrap_1.Button, { href: steamAppUrl }, t('Open in Workshop')))));
        });
        return listItems;
    }
    renderReview() {
        const { t } = this.props;
        const { failedImports } = this.state;
        return (React.createElement("div", { className: 'workshop-import-container' }, failedImports.length === 0
            ? (React.createElement("span", { className: 'import-success' },
                React.createElement(vortex_api_1.Icon, { name: 'feedback-success' }),
                t('Import successful')))
            : (React.createElement("span", { className: 'import-errors' },
                React.createElement(vortex_api_1.Icon, { name: 'feedback-error' }),
                t('Import successful')))));
    }
    isModEnabled(mod) {
        return (this.state.importEnabled[mod.publishedfileid] && this.state.importEnabled[mod.publishedfileid] !== false);
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
                        this.nextState.importEnabled[mod.publishedfileid] = !(!!this.state.importEnabled[mod.publishedfileid] && this.state.importEnabled[mod.publishedfileid] !== false);
                        ++this.nextState.counter;
                    }
                }
            },
            {
                id: 'name',
                name: 'Mod Name',
                description: 'The mod title.',
                icon: 'quote-left',
                calc: (mod) => mod.title,
                placement: 'both',
                isToggleable: true,
                isSortable: true,
                filter: new vortex_api_1.TableTextFilter(true),
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
                    return mod.isAlreadyManaged ? (React.createElement(vortex_api_1.tooltip.Icon, { id: `already-managed=${mod.publishedfileid}`, tooltip: 'This mod has already been imported. \nImporting it again will overwrite the current entry.', name: 'feedback-warning' })) : null;
                },
                calc: mod => mod.isAlreadyManaged,
                placement: 'table',
                isToggleable: true,
                isSortable: true,
                edit: {}
            },
            {
                id: 'id',
                name: 'Workshop ID',
                description: 'The Steam Workshop ID of this mod.',
                icon: 'id-badge',
                calc: (mod) => {
                    try {
                        return parseInt(mod.publishedfileid);
                    }
                    catch (err) {
                        return 0;
                    }
                },
                placement: 'both',
                isToggleable: true,
                isSortable: true,
                isDefaultVisible: false,
                edit: {}
            },
        ];
    }
}
ImportDialog.STEPS = ['start', 'setup', 'working', 'cleanup', 'review'];
function convertWorkshopMods(mods, vortexMods) {
    const mappedObject = {};
    if (!mods || !mods.length)
        return mappedObject;
    mods.map(mod => {
        mappedObject[mod.publishedfileid] = mod;
        if (!!vortexMods[`steam-${mod.publishedfileid}`])
            mappedObject[mod.publishedfileid].isAlreadyManaged = true;
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
        mods: vortex_api_1.util.getSafe(state, ['persistent', 'mods', gameId], {})
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}
exports.default = react_i18next_1.withTranslation(['common'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ImportDialog));


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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

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
//# sourceMappingURL=steam-workshop-import.js.map