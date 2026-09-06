function canSeePersonsCount(heights: number[]): number[] {
    const n = heights.length;
    const answer = new Array(n).fill(0);
    const stack: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0) {
            answer[i]++;

            if (heights[i] > stack[stack.length - 1]) {
                stack.pop();
            } else break;
        }
        stack.push(heights[i]);
    }
    return answer;
};