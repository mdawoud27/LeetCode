1function twoSum(nums: number[], target: number): number[] {
2    if (nums.length === 2) return [0, 1];
3
4    const map = new Map<number, number>();
5    const result: number[] = [];
6
7    for (let i = 0; i < nums.length; i++) {
8        const temp = target - nums[i];
9
10        if (map.has(temp)) return [i, map.get(temp)];
11        map.set(nums[i], i);
12    }
13    return [];
14};