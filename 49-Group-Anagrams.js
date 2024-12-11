/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = new Map();

    // Approach 1: hashing with sorting
    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');

        if (result.has(sortedWord)) {
            result.get(sortedWord).push(word)
        } else {
            result.set(sortedWord, [word]);
        }
    }

    return Array.from(result.values());
};