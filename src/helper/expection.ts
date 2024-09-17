import NodeError, { type NodeErrorCode } from './node-error';

type ExceptionMessage = string | (() => string);

/**
 * Asserts that the condition is true. If not, it throws a `NodeError` with the provided message and code.
 *
 * @template T - The type of the condition to assert.
 * @param {*} condition - The condition to check. If this evaluates to `false`, an error will be thrown.
 * @param {ExceptionMessage} [message] - Optional message or a function that returns a message to be included in the thrown error.
 * @param {NodeErrorCode} [code] - Optional error code to be used in the thrown error. Default is 'EUNKNOWN'.
 * @throws {NodeError} Throws a `NodeError` if the condition is `false`.
 * @returns {void}
 *
 * @example
 * // Example: Throwing an error when the condition is false
 * expection (false, 'Something went wrong', 'EFAIL');
 */
export default function expection(
    condition: unknown,
    message?: ExceptionMessage,
    code?: NodeErrorCode,
): asserts condition {
    if (condition) {
        return;
    }

    const providedMessage: string | undefined = typeof message === 'function' ? message() : message;
    throw new NodeError(providedMessage ?? 'Unknown error', code);
}
