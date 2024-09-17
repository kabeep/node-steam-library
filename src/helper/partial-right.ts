/**
 * Creates a function that invokes `fn` with partially applied arguments from the right.
 *
 * @param {Function} fn - The function to partially apply arguments to.
 * @param {...any[]} args - The arguments to be partially applied from the right.
 * @returns {Function} - A new function with the partial arguments applied from the right.
 * @example
 * const greet = (greeting: string, name: string) => `${greeting}, ${name}`;
 * const greetJohn = partialRight(greet, 'John');
 * console.log(greetJohn('Hello')); // Output: "Hello, John"
 */
export default function partialRight<T extends (...args: any[]) => any>(
    fn: T,
    ...args: Parameters<T>
): (...rest: any[]) => ReturnType<T> {
    return (...rest: any[]) => fn(...rest, ...args);
}
