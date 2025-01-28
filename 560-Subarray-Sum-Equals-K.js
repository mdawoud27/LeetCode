/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    const prefixSumMap = new Map();
    prefixSumMap.set(0, 1);

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];

        if (prefixSumMap.has(sum - k)) {
            count += prefixSumMap.get(sum - k);
        }

        prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
    }
    return count;
};