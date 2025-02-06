/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let nStons = 0;


    for (let stone of stones) {
        if (jewels.indexOf(stone) != -1) nStons++;
    }


    return nStons;
};