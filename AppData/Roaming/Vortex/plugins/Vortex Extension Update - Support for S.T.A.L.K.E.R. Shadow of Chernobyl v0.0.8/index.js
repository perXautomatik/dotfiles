//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');
const winapi = require('winapi-bindings');

// Nexus Mods domain for the game. e.g. nexusmods.com/stalkershadowofchernobyl
const GAME_ID = 'stalkershadowofchernobyl';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = '4500';

//GOG Application ID, you can get this from https://www.gogdb.org/
const GOGAPP_ID = '1207660573';

let GAME_PATH = '';

const MOD_FILE_EXT = "";

function main(context) {
	//This is the main function Vortex will run when detecting the game extension. 
	
	context.registerGame({
    id: GAME_ID,
    name: 'S.T.A.L.K.E.R.: Shadow of Chernobyl',
    mergeMods: true,
    queryPath: findGame,
    supportedTools: [],
	queryModPath: () => path.join(GAME_PATH),
    logo: 'gameart.png',
	executable: () => 'bin/XR_3DA.exe',
	requiredFiles: [
		'bin/XR_3DA.exe',
	],
    setup: prepareForModding,
    environment: {
      SteamAPPId: STEAMAPP_ID,
    },
    details: {
      steamAppId: STEAMAPP_ID,
      gogAppId: GOGAPP_ID,
    },
  });
	context.registerInstaller('stalkershadowofchernobyl-mod', 25, testSupportedContent, installContent);
	return true
}

module.exports = {
    default: main,
  };
  
function findGame() {
  try {
    const instPath = winapi.RegGetValue(
      'HKEY_LOCAL_MACHINE',
      'SOFTWARE\\WOW6432Node\\GOG.com\\Games\\' + GOGAPP_ID,
      'PATH');
    if (!instPath) {
      throw new Error('empty registry key');
    }
    return Promise.resolve(instPath.value);
  } catch (err) {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID, GOGAPP_ID])
      .then(game => game.gamePath);
  }
}

function prepareForModding(discovery) {
  return fs.ensureDirWritableAsync(path.join(discovery.path, GAME_PATH),
    () => Promise.resolve());
}

function testSupportedContent(files, gameId) {
  // Make sure we're able to support this mod.
  let supported = (gameId === GAME_ID) &&
    (files.find(file => path.extname(file).toLowerCase() === MOD_FILE_EXT) !== undefined);

  // Test for a mod installer.
  if (supported && files.find(file =>
      (path.basename(file).toLowerCase() === 'moduleconfig.xml')
      && (path.basename(path.dirname(file)).toLowerCase() === 'fomod'))) {
    supported = false;
  }

  return Promise.resolve({
    supported,
    requiredFiles: [],
  });
}

function installContent(files) {
  // Files is expected to always be positioned in the mods directory we're going to disregard anything placed outside the root.
  const modFile = files.find(file => path.extname(file).toLowerCase() === MOD_FILE_EXT);
  const idx = modFile.indexOf(path.basename(modFile));
  const rootPath = path.dirname(modFile);
  
  // Remove directories and anything that isn't in the rootPath.
  const filtered = files.filter(file => 
    ((file.indexOf(rootPath) !== -1) 
    && (!file.endsWith(path.sep))));

  const instructions = filtered.map(file => {
    return {
      type: 'copy',
      source: file,
      destination: path.join(file.substr(idx)),
    };
  });

  return Promise.resolve({ instructions });
}