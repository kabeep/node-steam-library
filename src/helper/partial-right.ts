/**
 * Creates a function that invokes `fn` with partially applied arguments from the right.
 *
 * @param {Function} function_ - The function to partially apply arguments to.
 * @param {...any[]} arguments_ - The arguments to be partially applied from the right.
 * @returns {Function} - A new function with the partial arguments applied from the right.
 * @example
 * const greet = (greeting: string, name: string) => `${greeting}, ${name}`;
 * const greetJohn = partialRight(greet, 'John');
 * console.log(greetJohn('Hello')); // Output: "Hello, John"
 */
export default function partialRight<T extends (...arguments_: any[]) => any>(
    function_: T,
    ...arguments_: Parameters<T>
): (...rest: any[]) => ReturnType<T> {
    return (...rest: any[]) => function_(...rest, ...arguments_);
}
