/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let countMinus = 0;

    for (let num of nums) {
        if (num === 0) return 0;
        if (num < 0) countMinus++;
    }

    if (countMinus % 2 === 0) return 1;
    else return -1;
};