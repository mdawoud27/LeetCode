/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().trim();

    let temp = '';

    for (let i = 0; i < s.length; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z' || s[i] >= '0' && s[i] <= '9') temp += s[i];
    }

    let i = 0, j = temp.length - 1;
    while (i <= j) {
        if (temp[i] !== temp[j]) return false;
        i++;
        j--;
    }
    return true;
};