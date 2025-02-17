/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const result = {};
    let flag = false;

    for (const num of nums) {
        result[num] = (result[num] || 0) + 1;

        if (result[num] > 1) {
            flag = true;
            break;
        }
    }

    return flag;
};