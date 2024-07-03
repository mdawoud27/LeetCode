/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let ans1 = nums1.filter(num => !nums2.includes(num));
    let ans2 = nums2.filter(num => !nums1.includes(num));

    return [[...new Set(ans1)], [...new Set(ans2)]];  
};