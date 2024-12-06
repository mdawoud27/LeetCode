/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const result = {};

    for (let i = 0; i < nums.length; ++i) {
        const complement = target - nums[i];

        if (result.hasOwnProperty(complement)) {
            return [result[complement], i];
        }

        result[nums[i]] = i;
    }
    return [];
};