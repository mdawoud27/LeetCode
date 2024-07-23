/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;

    const wordsToPattern = new Map(), patternToWords = new Map();
    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (wordsToPattern.has(w)) {
            if (wordsToPattern.get(w) !== p) return false;
        } else wordsToPattern.set(w, p);

        if (patternToWords.has(p)) {
            if (patternToWords.get(p) !== w) return false;
        } else patternToWords.set(p, w);
    }
    return true;
};