function isValid(s: string): boolean {
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    const stack: string[] = [];
    
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') stack.push(char);
        else {
            if (stack[stack.length - 1] === brackets[char]) stack.pop();
            else return false;
        }
    }
    
    return stack.length === 0;
};