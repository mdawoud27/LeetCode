type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let answer: number[] = [];
    for (const [i, num] of arr.entries())
        if (fn(num, i)) answer.push(num);
    return answer;
};