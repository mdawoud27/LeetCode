/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let mp= new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!mp.has(sortedStr)) mp.set(sortedStr, []);
        mp.get(sortedStr).push(str);
    }
    let result = [];
    for (const value of mp.values())
        result.push(value);

    return result;
};