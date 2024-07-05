/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;

    let bracketStack = [];
    for (let char of s) {
        if (char === ')' && bracketStack[bracketStack.length - 1] === '(')
            bracketStack.pop();
        else if (char === ']' && bracketStack[bracketStack.length - 1] === '[')
            bracketStack.pop();
        else if (char === '}' && bracketStack[bracketStack.length - 1] === '{')
            bracketStack.pop();
        else
            bracketStack.push(char);
    }
    return !bracketStack.length;
};