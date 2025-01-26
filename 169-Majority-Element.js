/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const result = new Map();

    for (let num of nums) {
        result.set(num, (result.get(num) || 0) + 1);

        if (result.get(num) > nums.length / 2) return num;
    }
};