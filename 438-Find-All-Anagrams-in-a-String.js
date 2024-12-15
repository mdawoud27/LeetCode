/**
 * @param {number[]} sArr
 * @param {number[]} pArr
 * @return {boolean}
 */
const arraysAreEqual = function(sArr, pArr) {
    for (let i = 0; i < 26; ++i) {
        if (sArr[i] !== pArr[i]) return false;
    }
    return true;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const answer = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    for (const char of p) {
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < s.length; ++i) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;

        if (i >= p.length) {
            sCount[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)]--;
        }

        if (arraysAreEqual(sCount, pCount)) {
            answer.push(i - p.length + 1);
        }
    }

    return answer;
};