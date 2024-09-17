/**
 * Type representing possible error codes for `NodeError`.
 *
 * @typedef {string} NodeErrorCode
 * @property {'EUNKNOWN'} EUNKNOWN - Represents an unknown error that doesn't fall into any specific category.
 * @property {'EREGISTRY'} EREGISTRY - Represents an error related to registry operations, such as failure to read from or write to the Windows registry.
 * @property {'ELIBRARY'} ELIBRARY - Represents an error related to Steam library operations, such as issues with finding or parsing the Steam library folders.
 * @property {'EMANIFEST'} EMANIFEST - Represents an error related to manifest files, such as missing or malformed Steam manifest files.
 */
export type NodeErrorCode = 'EUNKNOWN' | 'EREGISTRY' | 'ELIBRARY' | 'EMANIFEST';

/**
 * Custom error class that extends the built-in `Error` class.
 * This class adds an error code to distinguish different types of errors.
 *
 * @extends Error
 *
 * @param {string} message - The error message.
 * @param {NodeErrorCode} [code='EUNKNOWN'] - The error code. Defaults to 'EUNKNOWN' if not provided.
 */
export default class NodeError extends Error {
    /**
     * Creates an instance of `NodeError`.
     *
     * @param {string} message - The error message.
     * @param {NodeErrorCode} [code='EUNKNOWN'] - The error code. Defaults to 'EUNKNOWN'.
     */
    constructor(
        message: string,
        public code: NodeErrorCode = 'EUNKNOWN',
    ) {
        super(message);
        this.name = 'NodeError'; // Set the error name to 'NodeError' for better identification.
    }
}
