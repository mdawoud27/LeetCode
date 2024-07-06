/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = "", str2 = "";

    for (let str of word1) str1 += str;
    for (let str of word2) str2 += str;

    return str1 === str2;    
};