
// Nexus Mods domain for the game. e.g. nexusmods.com/bloodstainedritualofthenight
const GAME_ID = 'shewillpunishthem';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = '1213740';

//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');

function main(context) {
	//This is the main function Vortex will run when detecting the game extension.
    // Inform Vortex that your game extension requires the BepInEx extension.
  context.requireExtension('modtype-bepinex');
}

function findGame() {
  return util.GameStoreHelper.findByAppId([STEAMAPP_ID])
      .then(game => game.gamePath);
}

function prepareForModding(discovery) {
    return fs.ensureDirAsync(path.join(discovery.path, 'BepInEx'));

}

function modsPath(gamePath) {
    return path.join(gamePath, 'BepInEx', 'plugins')
}

function main(context) {  
  context.registerGame({
    id: GAME_ID,
    name: 'She Will Punish Them',
    mergeMods: true,
    queryPath: findGame,
    supportedTools: [],
    queryModPath: modsPath,
    logo: 'gameart.png',
    setup: prepareForModding,
    executable: () => 'She Will Punish Them.exe',
    setup: undefined,
    requiredFiles: [
      'She Will Punish Them.exe',
    ],
    environment: {
      SteamAPPId: STEAMAPP_ID,
    },
    details: {
      steamAppId: STEAMAPP_ID,
    },
  });
  
   context.once(() => {
    // The context.once higher-Order function ensures that we only call items
    //  within this code block ONCE which makes it a perfect block to initialize
    //  functionality; which is why we've added the BepInEx registration function
    //  here - but theoretically you could do this during the game extension's
    //  setup functor too.
    if (context.api.ext.bepinexAddGame !== undefined) {
      context.api.ext.bepinexAddGame({
        gameId: GAME_ID,
        autoDownloadBepInEx: true,
		customPackDownloader: () => {
          return {
            // The game extension's domain Id/gameId as defined when registering
            //  the extension - in this case lets say it's shewillpunishthem
            gameId: 'shewillpunishthem',
            // We extracted this from the pack's mod page
            domainId: 'site',
            // Same as the domain Id, extracted from the URL
            modId: '115',
            // We extracted this one by hovering over the download buttons on the site
            fileId: '1273',
            // What we want to call the archive of the downloaded pack.
            archiveName: 'BepInEx_x64_5.4.17.zip',
            // Whether we want this to be installed automatically - should always be true
            allowAutoInstall: true,
			// The doorstopper will be deployed as "winhttp.dll" and will ignore the
          //  DOORSTOP_DISABLE environment variable
         doorstopConfig: {
          doorstopType: 'default',
          ignoreDisableSwitch: true,
		  
            }
          }
        }
      })
	}
  });
	
  // You need to include the testSupportedContent and installContent functions for this not to error.
  // context.registerInstaller('shewillpunishthem-mod', 25, testSupportedContent, installContent);

	return true
}

module.exports = {
  default: main
};