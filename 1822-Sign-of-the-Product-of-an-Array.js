/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let product = nums.reduce((acc, cur) => acc *= cur, 1);

    const signFunc = num => num > 0 ? 1 : num < 0 ? -1 : 0;

    return signFunc(product);
};