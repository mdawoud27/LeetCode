/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    // two-pointer approach
    let missingCount = 0;
    let currentNumber = 1;
    let i = 0;

    while (true) {
        if (i < arr.length && arr[i] === currentNumber) {
            i++;
        } else {
            missingCount++;
            if (missingCount === k) {
                return currentNumber;
            }
        }
        currentNumber++;
    }
};