/**
 * A function that takes multiple functions as input and pipes the output of each function to the next one,
 * from left to right. It supports both synchronous and asynchronous (Promise) functions.
 *
 * @template T - The initial input type.
 * @template R - The final output type.
 * @param {...Array<((input: any) => any | Promise<any>)>} fns - A list of functions to execute sequentially.
 * Each function takes the output of the previous one as its input.
 * @returns {(input: T) => Promise<R>} A function that takes the initial input and returns a Promise that resolves
 * to the final output after all functions are applied.
 *
 * @example
 * const add = (x: number) => x + 2;
 * const multiply = (x: number) => x * 3;
 * const asyncDivide = async (x: number) => x / 2;
 *
 * const pipeline = pipe(add, multiply, asyncDivide);
 *
 * pipeline(5).then(result => console.log(result)); // Output: 10.5
 */
export default function pipe<T, R>(...fns: Array<(input: any) => any | Promise<any>>): (input: T) => Promise<R> {
    return async (input: T): Promise<R> => {
        let result: any = input;
        for (const function_ of fns) {
            result = await function_(result); // Awaiting each function in case it returns a promise
        }

        return result as R;
    };
}
