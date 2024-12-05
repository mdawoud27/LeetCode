/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Approach 1
    // return s.trim().split(' ').pop().length;

    // Approach 2: The optimize solution
    let length = 0;
    let i = s.length - 1;

    // Remove the spaces from the end if found
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};