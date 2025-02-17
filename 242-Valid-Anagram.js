/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    
    const freqCounter = {};
    for (const char of s) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    for (const char of t) {
        if (!freqCounter[char]) return false;
        freqCounter[char] -= 1;
    }
    return true;

    
};