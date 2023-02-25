const Bluebird = require('bluebird');
const path = require('path');
const { fs, log, util } = require('vortex-api');
const winapi = require('winapi-bindings');
const ZIP_EXT = '.zip';
const SEVENZIP_EXT = '.7z';
const GAME_ID = 'doom';
const STEAMAPP_ID = '379720';
const moddingTools = [
  {
    id: 'DOOMModLoader',
    name: 'DOOMModLoader',
    executable: () => 'DOOMModLoader.exe',
    requiredFiles: [
      'DOOMModLoader.exe',
    ],
    relative: true,
  },
];

function findGame() {
  try {
    const instPath = winapi.RegGetValue(
      'HKEY_LOCAL_MACHINE',
      'SOFTWARE\\WOW6432Node\\Steam\\steamapps\\common\\DOOM' + STEAMAPP_ID,
      'PATH');
    if (!instPath) {
      throw new Error('empty registry key');
    }
    return Promise.resolve(instPath.value);
  } catch (err) {
    return util.GameStoreHelper.findByAppId('379720', 'steam')
      .then(game => game.gamePath);
  }
}

async function testZipContent(files, gameId) {
  return Promise.resolve({
    supported: (gameId === GAME_ID),
    requiredFiles: []
  });
}

async function installZipContent(files, destinationPath) {
    const zipFiles = files.filter(file => [ZIP_EXT, SEVENZIP_EXT].includes(path.extname(file)));
    // If it's a double zip, we don't need to repack. 
    if (zipFiles.length) {
        const instructions = zipFiles.map(file => {
            return {
                type: 'copy',
                source: file,
                destination: path.basename(file),
            }
        });
        return Promise.resolve({ instructions });
    }
    // Repack the ZIP
    else {
        const szip = new util.SevenZip();
        const archiveName = path.basename(destinationPath, '.installing') + '.zip';
        const archivePath = path.join(destinationPath, archiveName);
        const rootRelPaths = await fs.readdirAsync(destinationPath);
        await szip.add(archivePath, rootRelPaths.map(relPath => path.join(destinationPath, relPath)), { raw: ['-r'] });
        const instructions = [{
            type: 'copy',
            source: archiveName,
            destination: path.basename(archivePath),
        }];
        return Promise.resolve({ instructions });
    }
}

function prepareForModding(discovery) {
    return fs.ensureDirAsync(path.join(discovery.path, 'mods'));
}

function toBlue(func) {
  return (...args) => Bluebird.Promise.resolve(func(...args));
}

function main(context) {
  //This is the main function Vortex will run when detecting the game extension. 
  context.registerGame({
    id: GAME_ID,
    name: 'DOOM',
    mergeMods: true,
    queryPath: findGame,
    supportedTools: moddingTools,
    queryModPath: () => 'mods',
    logo: 'gameart.jpg',
    executable: () => 'DOOMx64vk.exe',
    requiredFiles: [
      'DOOMx64vk.exe'
    ],
    setup: prepareForModding,
    environment: {
      SteamAPPId: STEAMAPP_ID,
    },
    details: {
      steamAppId: STEAMAPP_ID,
    },
  });

  context.registerInstaller('doom-zip-mod', 25, toBlue(testZipContent), toBlue(installZipContent));

  return true
}

module.exports = {
    default: main,
  };