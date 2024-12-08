/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    // Approach 1: 
    // let prefix = strs.reduce((a, b) => (a <= b ? a : b));

    // for (let i = 0; i < prefix.length; ++i) {
    //     const char = prefix[i];

    //     for (const word of strs) {
    //         if (word[i] !== char) {
    //             return prefix.slice(0, i);
    //         }
    //     }
    // }

    // return prefix;

    // Approach 2:
    let prefix = strs[0];

    for (const word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);

            if (prefix === '') return '';
        }
    }
    return prefix
};
