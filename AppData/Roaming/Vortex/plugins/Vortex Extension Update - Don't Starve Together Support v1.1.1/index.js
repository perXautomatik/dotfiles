const { fs, util, log } = require('vortex-api');
const path = require('path');

const GAME_ID = 'dontstarvetogether';
const STEAMAPP_ID = '322330';

// const MOD_EXT = 'modinfo.lua';


function findGame() {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID])
        .then(game => game.gamePath);
}

async function getGameVersion(discoveryPath) {
    const versionFile = path.join(discoveryPath, 'version.txt');
    try {
        const version = await fs.readFileAsync(versionFile, { encoding: 'utf8' });
        return version.trim();
    }
    catch(err) {
        log('warn', 'Unable to determine game version for Don\'t Starve Together.', err);
        return undefined;
    }
}

const executable = () => process.platform == 'win32' ? path.join('bin', 'dontstarve_steam.exe') : path.join('bin', 'dontstarve_steam');


function main(context) {
    context.registerGame({
        id: GAME_ID,
        name: 'Don\'t Starve Together',
        mergeMods: true,
        queryPath: findGame,
        queryModPath: () => 'mods',
        logo: 'gameart.jpg',
        executable,
        requiredFiles: process.platform == 'win32' 
            ? [ executable() ] 
            : [],
        details: {
            steamAppId: STEAMAPP_ID
        },
        getGameVersion
    });

    return true;
}

module.exports = {
    default: main
};