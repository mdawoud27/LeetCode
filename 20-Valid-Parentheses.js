/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bracketStack = [];
    let bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            bracketStack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (!bracketStack.length || bracketStack.pop() !== bracketPairs[char])
                return false;
        }
    }
    return !bracketStack.length;
};