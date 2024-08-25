function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let answer = [];
    for (const [i, num] of arr.entries()) {
        answer.push(fn(num, i));
    }
    return answer;
};