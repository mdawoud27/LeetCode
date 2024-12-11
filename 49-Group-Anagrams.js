/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = new Map();

    /* Approach 1: hashing with sorting */
    // for (const word of strs) {
    //     const sortedWord = word.split('').sort().join('');

    //     if (result.has(sortedWord)) {
    //         result.get(sortedWord).push(word)
    //     } else {
    //         result.set(sortedWord, [word]);
    //     }
    // }

    /* Approach 2: hashing with freq. array */
    for (const word of strs) {
        const freq = new Array(26).fill(0);

        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = freq.join('#');

        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key).push(word);
    }

    return Array.from(result.values());
};