1function findDuplicate(nums: number[]): number {
2    const set = new Set<number>();
3
4    for (const num of nums) {
5        if (set.has(num)) return num;
6        set.add(num);
7    }
8    return -1;
9};