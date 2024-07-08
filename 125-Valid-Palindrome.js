/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let temp = \\;
    for (let char of s.toLowerCase()) {
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        ) temp += char;
    }

    let i = 0, j = temp.length - 1;
    while (i < j) {
        if (temp[i] === temp[j]) {
            i++;
            j--;
        } else return false;
    }
    return true;
};