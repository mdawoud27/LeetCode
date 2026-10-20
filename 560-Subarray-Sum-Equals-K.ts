function subarraySum(nums: number[], k: number): number {
    let total = 0, sum;

    for (let i = 0; i < nums.length; i++) {
        sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) total += 1;
        }
    }
    return total;
};