const path = require('path');
const { util, fs } = require('vortex-api');
const winapi = require('winapi-bindings');

const GAME_ID = 'stalkercallofchernobyl'
let GAME_PATH = '';
const GAME_EXEC = 'Stalker-CoC.exe'
const CMD_PATTERN = 'CommandLine | ';
const MOD_FILE_EXT = "";

function main(context) {
    //This is the main function Vortex will run when detecting the game extension. 
    context.registerGame({
        id: GAME_ID,
        name: 'S.T.A.L.K.E.R. Call of Chernobyl',
        mergeMods: true,
        queryPath: findGame,
		supportedTools: tools,
		queryModPath: () => path.join(GAME_PATH),
        logo: 'gameart.jpg',
        executable: () => GAME_EXEC,
        setup: prepareForModding,
		requiredFiles: [
            GAME_EXEC,
            'fsgame.ltx',
        ],
		details: {
		nexusPageId: GAME_ID,
		}
  });
  
  context.registerInstaller('stalkercallofchernobyl-mod', 25, testSupportedContent, installContent);
  return true;
}

let tools = [
  {
    id: 'stalkercallofchernobyldebug',
    name: 'S.T.A.L.K.E.R. Call of Chernobyl - Debug',
    logo: 'gameicon.png',
	shortName: 'CoC - Debug',
    executable: () => 'Stalker-CoC.exe',
    parameters: [
        '-dbg',
    ],
	requiredFiles: [
      GAME_EXEC,
    ],
    relative: true,
    exclusive: true,
  }
];

function findGame() {
  const getTrimmedPath = (gamePath) => {
    const trimmed = gamePath.substr(CMD_PATTERN.length);
    return path.dirname(trimmed);
  }
}

function prepareForModding(discovery) {
  return fs.ensureDirWritableAsync(path.join(discovery.path, GAME_PATH),
    () => Promise.resolve());
}

module.exports = {
    default: main,
};

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