1function findKthLargest(nums: number[], k: number): number {
2    nums.sort((a, b) => b - a);
3    return nums[k - 1];
4};