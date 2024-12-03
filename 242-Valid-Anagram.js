/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    // Aproach 1: sort and compare
    // s = s.split("").sort().join("");
    // t = t.split("").sort().join("");
    // return s === t;

    // Approch 2: hashing
    // const result = {};

    // for (const letter of s) {
    //     result[letter] ? result[letter]++ : result[letter] = 1;
    // }

    // for (const letter of t) {
    //     result[letter] ? result[letter]-- : result[letter] = 1;
    // }

    // let valueSum = 0;
    // for (const key in result) {
    //     valueSum += result[key];
    // }

    // return valueSum === 0;

    // Approach 3: hashing using Map()
    const charCount = new Map();

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    for (const char of t) {
        if (!charCount.has(char) || charCount.get(char) === 0) return false;
        charCount.set(char, charCount.get(char) - 1);
    }

    return true;
};