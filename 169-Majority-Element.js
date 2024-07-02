/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = {};

    for (let num of nums) {
        count[num] ? count[num] += 1 : count[num] = 1;
        if (count[num] > nums.length / 2) return num;
    }
};