1function pivotIndex(nums: number[]): number {
2    const total: number = nums.reduce((acc, curr) => acc + curr, 0);
3    let leftSum = 0;
4
5    for (let i = 0; i < nums.length; i++) {
6        if (leftSum === total - leftSum - nums[i]) return i;
7        leftSum += nums[i];
8    }
9
10    return -1;
11};