/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = new Map();

    for (let num of nums) {
        if (count.has(num)) count.set(num, count.get(num) + 1);
        else count.set(num, 1);

        if (count.get(num) > nums.length / 2) return num;
    }
};