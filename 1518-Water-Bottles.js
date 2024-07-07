/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let emptyBottles = numBottles;
    let bottleCount = numBottles;

    while (emptyBottles >= numExchange) {
        let newBottles = Math.floor(emptyBottles / numExchange);
        bottleCount += newBottles;
        emptyBottles = newBottles + (emptyBottles % numExchange);
    }
    return bottleCount;
};