/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let lastWordLen = 0, currentWordLen = 0;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ' ') {
            currentWordLen = 0;
        } else {
            currentWordLen++;
            lastWordLen = currentWordLen;
        }
    }
    return lastWordLen;
};