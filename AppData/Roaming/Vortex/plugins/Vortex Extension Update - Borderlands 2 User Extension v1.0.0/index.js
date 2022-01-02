const path = require('path');
const { fs, log, util } = require('vortex-api');

const EXEC_PATH = path.join('win32', 'Launcher.exe');
const GAME_ID = 'borderlands2';

// All BL2 mods will be .txt files
const MOD_FILE_EXT = ".txt";

// let tools = [
  // {
	  // id: 'EpicGamesLauncher',
    // name: 'Epic Games Launcher',
    // logo: 'gameart.jpg',
    // executable: () =>  'EpicGamesLauncher.exe',
    // requiredFiles: [
	// EpicGamesLauncher.exe'
    // ],
  // },
// ];

class Borderlands2 {
  constructor(context) {
    this.context = context;
    this.id = 'borderlands2';
    this.name = 'Borderlands 2';
    this.mergeMods = true;
    this.logo = 'gameart.jpg';
//	this.supportedtools = tools;
    this.details = {
      steamAppId: 49520,
    };
    this.requiredFiles = [EXEC_PATH];
  }

  queryPath() {
    return util.GameStoreHelper.findByName('borderlands2')
      .then(game => {
        if (game.appid === '49520') {
          this.details = {
            steamAppId: game.appid,
          };
        }
        return game.gamePath;
      });
  }

  queryModPath() {
    return '.';
  }

  executable() {
    return EXEC_PATH;
  }
}


function testSupportedContent(files, gameId) {
  // Make sure we're able to support this mod.
  let supported = (gameId === GAME_ID) &&
    (files.find(file => path.extname(file).toLowerCase() === MOD_FILE_EXT) !== undefined);

  return Promise.resolve({
    supported,
    requiredFiles: [],
  });
}

function installContent(files) {
  // The .txt file is expected to always be positioned in the binaries directory we're going to disregard anything placed outside the root.
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



function main(context) {
  context.registerGame(new Borderlands2(context));

  context.registerInstaller('Borderlands2_mod', 25, testSupportedContent, installContent);

  return true;
}

module.exports = {
  default: main,
};
