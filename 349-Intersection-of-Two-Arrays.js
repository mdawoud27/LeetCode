/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const nums1Map = new Map();  // o(n) - space
    const nums2Map = new Map();  // o(m) - space
    const result = [];

    for (const num of nums1) { // o(n) - time
        nums1Map.has(num)
            ? nums1Map.set(num, nums1Map.get(num) + 1)
            : nums1Map.set(num, 1);
    }

    for (const num of nums2) { // o(m) - time
        nums2Map.has(num)
            ? nums2Map.set(num, nums2Map.get(num) + 1)
            : nums2Map.set(num, 1);
    }

    for (const key of nums1Map.keys()) { // o(n) - time
        if (nums2Map.has(key)) {
            result.push(key);
        }
    }

    // space: O(n + m)
    // time : O(n + m)
    return result;
};