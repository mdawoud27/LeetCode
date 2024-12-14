/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0;
    
    nums.sort((a, b) => a - b);

    let counter = 1, maxLength = 1;

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] === nums[i - 1]) continue;
        else if (nums[i] - nums[i - 1] === 1) {
            counter += 1;
            maxLength = Math.max(counter, maxLength);
        } else {
            counter = 1;
        }
    }
    return maxLength;
};