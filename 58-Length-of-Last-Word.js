/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const splitedStr = s.trim().split(' ');
    return splitedStr[splitedStr.length - 1].length;
};