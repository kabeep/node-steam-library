/**
 * Type representing possible error codes for `NodeError`.
 *
 * @typedef {string} NodeErrorCode
 * @property {'EUNKNOWN'} EUNKNOWN - Represents an unknown error.
 * @property {'EREGISTRY'} EREGISTRY - Represents a registry-related error.
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
