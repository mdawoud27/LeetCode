function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
    const result: number[][] = [sorted[0]];

    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = sorted[i];

        if (current[0] <= last[1]) {
            last[1] = Math.max(current[1], last[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};