function majorityElement(nums: number[]): number {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[Math.floor(sortedNums.length / 2)];
};