/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let count = 1;
    let directionFlag = true;

    for (let i = 0; i < time; i++) {
        if (count === 1) directionFlag = true;
        if (count === n) directionFlag = false;

        count = directionFlag === true ? count + 1 : count - 1;
    }

    return count;
};