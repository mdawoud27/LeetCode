/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const result = new Map();

    for (let i = 0; i < nums.length; ++i) {
        const complement = target - nums[i];

        if (result.has(complement)) {
            return [result.get(complement), i];
        } else {
            result.set(nums[i], i);
        }
    }
};