//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');
// Nexus Mods domain for the game. e.g. nexusmods.com/bayonetta
const GAME_ID = 'bayonetta';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = '460790';

const MOD_FILE_EXT = ".dat";

function testSupportedContent(files, gameId) {
  // Make sure we're able to support this mod.
  let supported = (gameId === 460790) &&
    (files.find(file => path.extname(file).toLowerCase() === MOD_FILE_EXT) !== undefined);

  return Promise.resolve({
    supported,
    requiredFiles: [],
  });
}

function installContent(files) {
  // The .dat file is expected to always be positioned in the data/subfolders directory we're going to disregard anything placed outside the root.
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

function prepareForModding(discovery) {
  return fs.ensureDirAsync(path.join(discovery.path, 'Bayonetta', 'data'));
}

function findGame() {
   return util.GameStoreHelper.findByAppId([STEAMAPP_ID])
       .then(game => game.gamePath);
}

 function main(context) {
	//This is the main function Vortex will run when detecting the game extension. 
	context.registerGame({
      id: GAME_ID,
      name: 'Bayonetta',
      mergeMods: true,
      queryPath: findGame,
      supportedTools: [],
      queryModPath: () => 'data',
      logo: 'gameart.jpg',
      executable: () => 'Bayonetta.exe',
      requiredFiles: [
        'Bayonetta.exe',
      ],
      setup: prepareForModding,
      environment: {
        SteamAPPId: STEAMAPP_ID,
      },
      details: {
        steamAppId: STEAMAPP_ID,
      },
    });
    
    context.registerInstaller('Bayonetta-mod', 25, testSupportedContent, installContent);

	return true
}

module.exports = {
    default: main,
  };