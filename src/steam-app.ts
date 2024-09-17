import * as VDF from '@node-steam/vdf';
import { readFileSync } from 'fs';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { expection, partialRight } from './helper';
import type { SteamLibraryOption } from './steam-library';

interface InstalledDepot {
    manifest: number;
    size: number;
}

interface UserConfig {
    language?: string;
    BetaKey?: string;
}

interface AppState {
    appid: number;
    universe: number;
    LauncherPath: string;
    name: string;
    StateFlags: number;
    installdir: string;
    lastupdated: number;
    LastPlayed: number;
    SizeOnDisk: number;
    StagingSize: number;
    buildid: number;
    LastOwner: number;
    UpdateResult?: number;
    BytesToDownload?: number;
    BytesDownloaded?: number;
    BytesToStage?: number;
    BytesStaged?: number;
    TargetBuildID?: number;
    AutoUpdateBehavior: number;
    AllowOtherDownloadsWhileRunning: number;
    ScheduledAutoUpdate: number;
    SharedDepots?: Record<string, number>;
    InstalledDepots: Record<string, InstalledDepot>;
    InstallScripts?: Record<string, string>;
    UserConfig: UserConfig;
    MountedConfig: UserConfig;
}

interface SteamAppManifest {
    AppState: AppState;
}

const remappingManifest = (appState: AppState, { id, library }: SteamLibraryOption) => (
    {
        id: appState.appid,
        name: appState.name,
        installPath: appState.installdir ? resolve(library, 'steamapps/common', appState.installdir) : undefined,
        modPath: resolve(library, 'steamapps/workshop/content', id),
        language: appState.UserConfig?.language,
    }
);

export type SteamAppOption = ReturnType<typeof remappingManifest>;

export default function steamApp({ id, library }: SteamLibraryOption): SteamAppOption {
    const customExpection = partialRight<typeof expection>(expection, 'EMANIFEST');
    const manifestFile = resolve(library, 'steamapps', `appmanifest_${id}.acf`);

    customExpection(existsSync(manifestFile), `App ${id} not found in library ${library}`);

    const content = readFileSync(manifestFile, 'utf-8');

    const record: SteamAppManifest = VDF.parse(content);
    customExpection(record.AppState, 'Invalid manifest file');

    return remappingManifest(record.AppState, { id, library });
}