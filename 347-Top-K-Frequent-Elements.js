/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const mapNums = new Map();

    for (const num of nums) {
        mapNums.set(num, (mapNums.get(num) || 0) + 1);
    }

    return [...mapNums].sort((a, b) => b[1] - a[1]).slice(0, k).map(arr => arr[0]);
};