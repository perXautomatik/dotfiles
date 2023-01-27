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
exports.runxEdit = exports.setCleaning = exports.doNotCleanMessages = exports.excludedPlugins = exports.gameSupportData = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
exports.gameSupportData = [
    {
        game: "skyrimse",
        exeName: "SSEEdit",
        gameParam: "-sse"
    },
    {
        game: "skyrim",
        exeName: "TES5Edit",
        gameParam: "-tes5"
    },
    {
        game: "skyrimvr",
        exeName: "TES5VREdit",
        gameParam: "-tes5vr"
    },
    {
        game: "fallout4",
        exeName: "FO4Edit",
        gameParam: "-fo4"
    },
    {
        game: "oblivion",
        exeName: "TES4Edit",
        gameParam: "-tes4"
    },
    {
        game: "enderal",
        exeName: "EnderalEdit",
        gameParam: "-enderal"
    },
    {
        game: "fallout3",
        exeName: "FO3Edit",
        gameParam: "-fo3"
    },
    {
        game: "falloutnv",
        exeName: "FNVEdit",
        gameParam: "-fnv"
    },
    {
        game: "fallout4vr",
        exeName: "FO4VREdit",
        gameParam: "-fo4vr"
    },
    {
        game: "fallout76",
        exeName: "FO76Edit",
        gameParam: "-fo76"
    },
    {
        game: "morrowind",
        exeName: "TES3Edit",
        gameParam: "-tes3"
    },
];
exports.excludedPlugins = ["skyrim.esm", "fallout4.esm", "falloutnv.esm", "fallout3.esm", " oblivion.esm", "seventysix.esm", "enderal - forgotten stories.esm"];
exports.doNotCleanMessages = [
    'Do not clean ITM records, they are intentional and required for the mod to function. It is safe to undelete records, but do not do anything other than that.',
    'Rengør ikke ITM-poster: de er forsætlige og krævede for at mod’en fungerer. Det er sikkert at gendanne poster, men gør ikke andet end dét.',
    'ITM-Einträge in diesem Plugin sollten nicht gesäubert werden, sie sind absichtlich enthalten und werden benötigt, damit die Mod richtig funktioniert. Gelöschte Einträge wiederherzustellen ist in Ordnung, alles andere aber nicht.',
    'No limpiar las referencias ITM (iguales al master), ya que son intencionales y necesarias para que el Mod funcione. Sí es seguro restaurar las UDR (referencias borradas), pero no haga más que eso.',
    'IMTレコードはクリーンしないでください。これらは意図的に残されたデータであり、Modを機能させるために必要です。削除の取り消しは安全に行えますが、それ以外のことは行わないでください。',
    'ITM 자료를 삭제하지 마십시오. 모드가 정상 작동하기 위해 의도적으로 남겨진 자료입니다. 삭제를 취소하는 것 이외에는 안전하지 않습니다.',
    'Nie czyść rekordów ITM, są one zamierzone i potrzebne do działania tego moda. Jest bezpieczne aby cofnąć usunięcie rekordów (UDR), ale nie rób nic innego ponad to. ',
    'Não apagar os registos ITM. São intencionais e necessárias para o funcionamento do mod. É seguro restaurar os registos, mas não faça nada mais que isso.',
    'Não apague os registros ITM. Eles são intencionais e necessários para que o mod funcione. É seguro restaurar os registros, mas nada mais além disso.',
    'Не очищать ITM-записи. "Грязные" правки оставлены специально и требуются для функционирования мода. Восстановить удаленные записи (UDR) можно безопасно, но идентичные мастерфайлу лучше оставить.',
    'Städa inte bort ITM records, de är avsiktliga och krävs för att modden ska fungera. Det är säkert att återställa records, men gör ingenting förutom det.',
    '不干净。"脏"数据是故意的，这是mod需要的功能。'
];
const xEditParams = {
    "quickautoclean": ["{gamePara}", "-quickautoclean", "-autoexit", "-autoload", "{pluginName}"],
    "autoloadplugin": ["{gamePara}", "-quickedit:{pluginName}"],
    "autoloadall": ["{gamePara}", "-autoload"]
};
let cleaningInProgress = false;
let pluginBeingCleaned = "";
function setCleaning(status, pluginName = "") {
    cleaningInProgress = status;
    pluginBeingCleaned = pluginName;
}
exports.setCleaning = setCleaning;
function init(context) {
    context.requireVersion('^1.1.0');
    context.requireExtension('gamebryo-plugin-management');
    context.registerAction('gamebryo-plugin-icons', 300, 'xEdit', {}, 'Open xEdit', () => {
        runxEdit('', context.api, [...xEditParams['autoloadall']]);
    }, () => {
        const activeGameId = vortex_api_1.selectors.activeGameId(context.api.store.getState());
        return exports.gameSupportData.find(g => g.game === activeGameId) ? true : false;
    });
    context.registerAction('gamebryo-plugins-action-icons', 500, 'xEdit', {}, 'Clean with xEdit', instanceIds => {
        runxEdit(instanceIds[0], context.api, [...xEditParams['quickautoclean']]);
    }, instanceIds => {
        const activeGameId = vortex_api_1.selectors.activeGameId(context.api.store.getState());
        return exports.gameSupportData.find(g => g.game === activeGameId) ? true : false;
    });
    context.registerAction('gamebryo-plugins-action-icons', 100, 'xEdit', {}, 'Open in xEdit', instanceIds => {
        runxEdit(instanceIds[0], context.api, [...xEditParams['autoloadplugin']]);
    }, instanceIds => {
        const activeGameId = vortex_api_1.selectors.activeGameId(context.api.store.getState());
        return exports.gameSupportData.find(g => g.game === activeGameId) ? true : false;
    });
    context.once(() => {
        vortex_api_1.util.installIconSet('xedit-icons', `${__dirname}/xediticon.svg`);
        context.api.onStateChange(['session', 'base', 'toolsRunning'], (previous, current) => __awaiter(this, void 0, void 0, function* () {
            if (cleaningInProgress && (Object.keys(previous).length > 0) && (Object.keys(current).length === 0)) {
                context.api.sendNotification({
                    type: "success",
                    title: "Plugin Cleaning Completed",
                    message: `${pluginBeingCleaned} was cleaned with xEdit.`,
                    group: "xEdit-cleaning-done",
                    displayMS: 10000
                });
                setCleaning(false);
                vortex_api_1.log("debug", "xEdit plugin cleaning completed");
            }
        }));
    });
}
function runxEdit(pluginName, api, params) {
    const store = api.store;
    const activeGameId = vortex_api_1.selectors.activeGameId(store.getState());
    const pluginData = vortex_api_1.util.getSafe(store.getState(), ['session', 'plugins', 'pluginInfo', pluginName.toLowerCase()], undefined);
    if (pluginData) {
        const lootMessages = pluginData.messages || [];
        const doNotCleanMessage = lootMessages.find(m => exports.doNotCleanMessages.includes(m.value));
        const missingMaster = pluginData.warnings['missing-master'];
        if (doNotCleanMessage)
            return api.sendNotification({ type: 'warning', title: `Cannot clean this plugin`, message: `Vortex could not clean ${pluginData.name}, please check the LOOT messages.`, displayMS: 5000 });
        if (missingMaster)
            return api.sendNotification({ type: 'warning', title: `Cannot clean this plugin`, message: `Vortex could not clean ${pluginData.name} as it has missing masters.`, displayMS: 5000 });
    }
    if (exports.excludedPlugins.indexOf(pluginName.toLowerCase()) !== -1 && params.includes('-quickautoclean'))
        return api.sendNotification({ type: 'warning', title: `Cannot clean this plugin`, message: `Vortex could not clean ${pluginData.name} as it is the game master file.`, displayMS: 5000 });
    const xEditData = exports.gameSupportData.find(g => g.game === activeGameId);
    params.indexOf('{gamePara}') !== -1 && xEditData.gameParam ? params[params.indexOf('{gamePara}')] = xEditData.gameParam : null;
    params.indexOf('{pluginName}') !== -1 && pluginName !== '' ? params[params.indexOf('{pluginName}')] = pluginName : null;
    params.indexOf('-quickedit:{pluginName}') !== -1 && pluginName !== '' ? params[params.indexOf('-quickedit:{pluginName}')] = `-quickedit:${pluginName}` : null;
    const gamePath = vortex_api_1.util.getSafe(store.getState(), ['settings', 'gameMode', 'discovered', activeGameId, 'path'], undefined);
    const tools = vortex_api_1.util.getSafe(store.getState(), ['settings', 'gameMode', 'discovered', activeGameId, 'tools'], undefined);
    const xEditKey = tools ? Object.keys(tools).find(t => t === xEditData.exeName) : undefined;
    const xEditTool = xEditKey ? tools[xEditKey] : undefined;
    if (!xEditTool || !xEditTool.path)
        return api.showErrorNotification(`xEdit not found`, `Vortex could not find ${xEditData.exeName}. Please check the tool in your starter dashlet is pointing to the right place.`);
    api.runExecutable(xEditTool.path, params, {
        cwd: gamePath,
        suggestDeploy: false,
        shell: false,
        onSpawned: () => api.store.dispatch(vortex_api_1.actions.setToolRunning(xEditTool.path, Date.now(), true))
    }).then(params.includes('-quickautoclean') ? setCleaning(true, pluginData.name || pluginName) : null)
        .catch(err => {
        if (err.errno === 'ENOENT') {
            api.showErrorNotification(`xEdit not found`, `Failed to run tool. Vortex could not find xEdit at ${xEditTool.path}. Please check the tool in your starter dashlet is pointing to the right place.`);
        }
        else
            console.log(err);
    });
}
exports.runxEdit = runxEdit;
exports.default = init;


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
//# sourceMappingURL=xedit-integration.js.map