/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let answer = [];
    let anagram = {};

    for (let str of strs) {
        let strSorted = str.split('').sort().join('');
        anagram[strSorted] ? anagram[strSorted].push(str) : anagram[strSorted] = [str];
    }

    for (let value of Object.values(anagram))
        answer.push(value);

    return answer;
};