1function missingNumber(nums: number[]): number {
2    const set = new Set<number>();
3
4    for (const num of nums) {
5        set.add(num);
6    }
7
8    for (let i = 0; i <= nums.length; i++) {
9        if (!set.has(i)) return i;
10    }
11};