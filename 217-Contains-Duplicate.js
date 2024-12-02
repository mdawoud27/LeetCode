/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    /** 
    // Approach 1: convert array to set and compare between their size

    const setNums = new Set(nums);
    return nums.length !== setNums.size;
    */

    // Approach 2: array and hashing
    const result = {};
    let flag = false;

    for (let num of nums) {
        result[num] ? result[num]++ : result[num] = 1;

        if (result[num] > 1) {
            flag = true;
            break;
        }
    }

    return flag;
};