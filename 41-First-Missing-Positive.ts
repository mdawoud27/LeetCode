function firstMissingPositive(nums: number[]): number {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n) {
            const targetIdx = nums[i] - 1;

            if (nums[targetIdx] === nums[i]) break;

            [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return n + 1;
};