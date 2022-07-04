"use strict";
/**
 * @description Using this article https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
 */
Object.defineProperty(exports, "__esModule", { value: true });
// This first function 'basic' uses a brute-force squaring technique (nested loops) so the first run will be 
// expensive, but subsequent runs will check for the value in the cache (prevValues)
function basic() {
    const prevValues = [];
    // console.warn('Inside Wrapper with args: ', arguments)
    return function (...args) {
        // if (prevValues[n] != null) {
        //     console.info('Reading from cache...')
        //     return prevValues[n]
        // }
        console.warn('Running calculation...');
        console.warn('args anonFunc: ', args[0]);
        let result = 0;
        for (let i = 1; i <= args[0]; i++) {
            // console.warn('args inside outter loop: ', arguments)
            for (let j = 1; j <= args[0]; j++) {
                result += 1;
            }
        }
        prevValues[args[0]] = result;
        return result;
    };
}
console.log(basic()(5));
