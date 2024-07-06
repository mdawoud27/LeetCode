/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const cycleLength = 2 * (n - 1);
    const remainingTime = time % cycleLength;

    if (remainingTime <= n - 1) return remainingTime + 1;
    else return n - (remainingTime - (n - 1));
};