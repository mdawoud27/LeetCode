interface IOperatorSet {
    [key: string]: (a: number, b: number) => number;
}

function evalRPN(tokens: string[]): number {
    const operatorSets: IOperatorSet = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    }

    const stack: number[] = [];

    for (const token of tokens) {
        if (operatorSets[token] !== undefined) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operatorSets[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};