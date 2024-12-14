/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0;

    // Approach 1: use sorting and tracking
    // nums.sort((a, b) => a - b);

    // let counter = 1, maxLength = 1;

    // for (let i = 1; i < nums.length; ++i) {
    //     if (nums[i] === nums[i - 1]) continue;
    //     else if (nums[i] - nums[i - 1] === 1) {
    //         counter += 1;
    //         maxLength = Math.max(counter, maxLength);
    //     } else {
    //         counter = 1;
    //     }
    // }

    // Approach 2: use hash-set
    const numSet = new Set(nums);
    let maxLength = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let counter = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                counter += 1;
            }
            maxLength = Math.max(counter, maxLength);
        }
    }

    return maxLength;
};