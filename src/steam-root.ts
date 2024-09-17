import Registry from 'winreg';
import { NodeError } from './helper';

const registryKey = '\\Software\\Valve\\Steam';

/**
 * Retrieves the installation path of Steam from the Windows registry.
 *
 * @returns {Promise<string>} A promise that resolves to the Steam installation path.
 * @throws {NodeError} Throws a `NodeError` if there's an issue accessing the registry or if the path is empty.
 */
export default async function steamRoot(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Define the registry path and key name
        const regKey = new Registry({
            hive: Registry.HKCU,  // HKEY_CURRENT_USER
            key: registryKey,      // Steam registry key
        });

        // Read the "SteamPath" key from the registry
        regKey.get('SteamPath', function (error, item) {
            if (error) {
                reject(new NodeError(`${error}`, 'EREGISTRY'));
            } else if (!item.value) {
                reject(new NodeError('Steam path is empty', 'EREGISTRY'));
            } else {
                resolve(item.value);
            }
        });
    });
}
