function firstMissingPositive(nums: number[]): number {
    const set = new Set<number>([...nums]);

    for (let i = 1; ; i++) {
        if (!set.has(i)) return i;
    }
};