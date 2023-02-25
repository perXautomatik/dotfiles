//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');
const MOD_FILE_EXT = ".qst";
// Nexus Mods domain for the game. e.g. nexusmods.com/bloodstainedritualofthenight
const GAME_ID = 'fableanniversary';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = 288470;

const moddingTools = [
  {
    id: 'FableAUrealEditor',
    name: 'FableAUrealEditor',
    logo: 'FableAUE.png',
    executable: () => 'Fable Anniversary/Binaries/Win32/Editor.exe',
    requiredFiles: [
      'Fable Anniversary/Binaries/Win32/Editor.exe',
    ],
	relative: true,
    exclusive: true,
  }
];

function findGame() {
  return util.steam.findByAppId('288470')
      .then(game => game.gamePath);
}

function main(context) {
  context.registerGame({
    id: GAME_ID,
    name: 'Fable Anniversary',
    mergeMods: true,
    queryPath: findGame,
    supportedTools: moddingTools,
    queryModPath: () => 'Fable Anniversary/',
    logo: 'gameart.jpg',
    executable: () => 'Fable Anniversary/Binaries/Win32/Fable Anniversary.exe',
    requiredFiles: [
      'Fable Anniversary/Binaries/Win32/Fable Anniversary.exe' 
    ],
    //setup: prepareForModding,
    //environment: {
    //  SteamAPPId: '288470',
    //},
    details: {
      steamAppId: 288470,
    },
  });

  return true;
}

module.exports = {
    default: main,
  };