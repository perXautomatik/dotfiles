const { actions, log, selectors, util } = require('vortex-api');

const NAMESPACE = 'IGNOREUPDATES';

const blankUpdate = { newestFileId: undefined, newestVersion: undefined };

function main(context) {

    const t = context.api.translate;

    context.registerAction('mods-multirow-actions', 100, 'hide', {}, t('Ignore Updates', { ns: NAMESPACE }), ignoreUpdate, modHasUpdate);
    context.registerAction('mods-action-icons', 100, 'hide', {}, t('Ignore Update', { ns: NAMESPACE }), ignoreUpdate, modHasUpdate);

    function modHasUpdate(instanceIds) {
        const store = context.api.store;
        const state = store.getState();
        const gameMode = selectors.activeGameId(state);
        let showOption = false;
        instanceIds.forEach(modId => {
            const mod = util.getSafe(state.persistent.mods, [gameMode, modId], undefined);
            if (mod && mod.attributes){
                const modVersion = mod.attributes.version;
                const newestVersion = mod.attributes.newestVersion;
                if (modVersion && newestVersion) {
                    if (!showOption) showOption = (modVersion !== newestVersion);
                }
                const fileId = mod.attributes.fileId;
                const newestFileId = mod.attributes.newestFileId;
                if ((fileId && newestFileId) || newestFileId === 'unknown') {
                    if (!showOption) showOption = (newestFileId === 'unknown' || (fileId !== newestFileId));
                }
            }
        });

        return showOption;
    }

    function ignoreUpdate(instanceIds) {
        const store = context.api.store;
        const state = store.getState();
        const gameMode = selectors.activeGameId(state);
        instanceIds.forEach(modId => {
            store.dispatch(actions.setModAttributes(gameMode, modId, blankUpdate));
        });
    }

}

module.exports = { default: main };