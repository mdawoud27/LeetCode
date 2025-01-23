/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    return [...new Set([...nums1Set].filter(num => nums2Set.has(num)))];
};