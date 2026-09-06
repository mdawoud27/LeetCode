function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0;

    const sorted = [...intervals].sort((a, b) => a[1] - b[1]);
    let removals = 0;
    let lastEnd = sorted[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (sorted[i][0] < lastEnd) removals++;
        else lastEnd = sorted[i][1];
    }
    return removals;
};