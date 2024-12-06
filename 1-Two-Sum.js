/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = new Map();

    for (let i = 0; i < nums.length; ++i) {
        const comp = target - nums[i];

        if (result.has(comp)) {
            return [result.get(comp), i];
        } else {
            result.set(nums[i], i);
        }
    }
};