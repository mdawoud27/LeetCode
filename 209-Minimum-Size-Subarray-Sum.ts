function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0, left = 0;
    let minLen = Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while (sum >= target) {
            minLen = Math.min(minLen, i - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};