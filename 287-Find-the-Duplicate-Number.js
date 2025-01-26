/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const result = new Map();

    for (const num of nums) {
        result.set(num, (result.get(num) || 0) + 1);

        if (result.get(num) > 1) return num;
    }
};