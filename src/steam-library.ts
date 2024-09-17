import * as VDF from '@node-steam/vdf';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expection, partialRight } from './helper';

interface SteamLibrary {
    libraryfolders: Record<string, SteamLibraryFolder>;
}

interface SteamLibraryFolder {
    path: string;
    label: string;
    contentid: number;
    totalsize: number;
    update_clean_bytes_tally: number;
    time_last_update_corruption: number;
    apps: Record<string, number>;
}

export interface SteamLibraryOption {
    library: string;
    id: string;
}

/**
 * Parses the Steam library folders file and returns an array of installed apps.
 *
 * @param {string} rootPath - The root installation path of Steam.
 * @returns {SteamLibraryOption[]} An array of Steam applications, each with a library and id.
 * @throws {NodeError} Throws a `NodeError` if the library file is not found or if the file format is invalid.
 */
export default function steamLibrary(rootPath: string): SteamLibraryOption[] {
    const customExpection = partialRight(expection, 'ELIBRARY');
    const libraryFile = resolve(rootPath, 'steamapps/libraryfolders.vdf');

    // Check if the library file exists
    customExpection(existsSync(libraryFile), 'Steam library file not found');

    // Read the file content
    const content = readFileSync(libraryFile, 'utf-8');

    // Parse the VDF content into a structured object
    const record: SteamLibrary = VDF.parse(content);

    // Ensure the parsed content contains valid library folders
    customExpection(record.libraryfolders, 'Invalid library file');

    const apps: SteamLibraryOption[] = [];

    // Loop through the library folders and extract game IDs and paths
    for (const index in record.libraryfolders) {
        const item = record.libraryfolders[index];

        for (const gameId in item.apps) {
            apps.push({ library: item.path, id: gameId });
        }
    }

    return apps;
}
