1function containsNearbyDuplicate(nums: number[], k: number): boolean {
2    const set = new Set<number>();
3
4    for (let i = 0; i < nums.length; i++) {
5        if (set.has(nums[i])) return true
6
7        set.add(nums[i]);
8
9        if (set.size > k) set.delete(nums[i - k]);
10    }
11    return false;
12};