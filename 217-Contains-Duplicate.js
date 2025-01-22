/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const result = new Map();
    let flag = false;

    for (const num of nums) {
        result.has(num) ? result.set(num, result.get(num) + 1) : result.set(num, 1);

        if (result.get(num) > 1) {
            flag = true;
            break;
        }
    }

    return flag;
};