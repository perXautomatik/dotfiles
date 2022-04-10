/**
 * @packageDocumentation Types and interfaces required for extensions using the Vortex Showcase extension API.
 */

import { IExtensionApi } from 'vortex-api/lib/types/api';
import { IMod } from 'vortex-api/lib/types/api';

/**
 * @public
 */
export declare interface IShowcaseAction {
    runAction(renderer: string, output: string): Promise<void>;
    isEnabled?(renderer: string): boolean;
}

/**
 * @public
 * The interface for defining showcase formats.
 * The renderer is responsible for format-specific data models as well as generating the final report content.
 */
export declare interface IShowcaseRenderer {
    /**
     * Build a model for a given mod. Can also return undefined, or a partial model, to accept defaults.
     * @param api - Extension API
     * @param mod - The mod to build a info model for.
     * @param defaultModelFn - Function used to create the default template model. Use this if you only want to change some attributes.
     */
    createModel(api: IExtensionApi, mod: IMod, defaultModelFn?: () => ModInfoDisplay): ModInfoDisplay;
    /**
     * Builds/renders the final showcase based on a complete template model.
     *
     * @param api - Extension API
     * @param model - The complete showcase template model.
     */
    createShowcase(api: IExtensionApi, model: ITemplateModel): Promise<string>;
    /**
     * Optional function to build a target file name for a showcase using this format.
     *
     * @param title - The user-defined showcase title. Will not be escaped!
     */
    createFileName?(title: string): string | undefined;
    /**
     * Optional function to only enable this renderer based on current game. Defaults to true (i.e. enabled).
     *
     * @param gameId - The current game.
     */
    isEnabled?(gameId: string): boolean;
    /**
     * Optional function to disable the ability to save to file.
     * @remarks
     * Only use this for renderers where saving to a file is completely nonsense/impossible.
     */
    allowSave?(): boolean;
}

/**
 * @public
 */
export declare interface ITemplateModel {
    title: string;
    user: string;
    mods: ModInfoDisplay[];
    game: string;
}

/**
 * @public
 */
export declare type ModDeploymentMeta = {
    order?: number;
    time?: Date;
};

/**
 * @public
 */
export declare class ModInfoDisplay {
    name: string;
    gameId: string;
    gameName: string;
    description: string;
    image?: string;
    nexus?: NexusInfo;
    link?: string;
    version: string;
    category?: string;
    author: string;
    installed?: string;
    source: string;
    type: string;
    notes: string;
    meta: any;
    deployment: ModDeploymentMeta;
}

/**
 * @public
 */
export declare interface NexusInfo {
    id: number;
    fileId: number;
    endorsed: boolean;
    uploaded: Date;
}

/**
 * @public
 */
export declare type showcaseAPI = {
    addShowcaseRenderer: (key: string, rendererFunc: () => IShowcaseRenderer) => void;
    addShowcaseAction: (key: string, actionFn: () => IShowcaseAction) => void;
    createShowcase: (mods?: string[], format?: string, action?: string) => Promise<void>;
};

export { }
