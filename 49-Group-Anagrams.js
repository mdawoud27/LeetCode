/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = new Map();

    for (const word of strs) {
        const freq = new Array(26).fill(0);
        for (let i = 0; i < word.length; ++i) {
            freq[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = freq.join('#');
        if (!result.has(key)) {
            result.set(key, []);
        }

        result.get(key).push(word);
    }
    return [...result.values()];
};