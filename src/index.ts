import steamApp, { type SteamAppOption } from './steam-app';
import steamLibrary, { type SteamLibraryOption } from './steam-library';
import steamRoot from './steam-root';
import { pipe } from './helper/index.js';

/**
 * A function that retrieves the root path of the Steam installation.
 *
 * @constant
 * @type {Function}
 */
export const getRootPath = steamRoot;

/**
 * A function pipeline that retrieves the Steam library information.
 * The pipeline first gets the Steam root path and then retrieves the Steam library.
 *
 * @constant
 * @type {Function}
 * @returns {Promise<SteamLibraryOption[]>} A promise that resolves to an array of `SteamLibraryOption` objects.
 */
export const getLibrary = pipe<void, SteamLibraryOption[]>(steamRoot, steamLibrary);

/**
 * A function pipeline that retrieves the Steam library information and maps it to `SteamAppOption` objects.
 * The pipeline first gets the Steam root path, then retrieves the Steam library,
 * and finally maps the library entries to `SteamAppOption` using the `steamApp` function.
 *
 * @constant
 * @type {Function}
 * @returns {Promise<SteamAppOption[]>} A promise that resolves to an array of `SteamAppOption` objects.
 */
export const getApps = pipe<void, SteamAppOption[]>(steamRoot, steamLibrary, (apps: SteamLibraryOption[]) =>
    apps.map((app) => steamApp(app)),
);

export default {
    getLibrary,
    getApps,
    getRootPath,
};

export { type SteamAppOption } from './steam-app';
export { type SteamLibraryOption } from './steam-library';
