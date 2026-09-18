function search(nums: number[], target: number): number {
    const map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    if (map.has(target)) return map.get(target);
    return -1;
};