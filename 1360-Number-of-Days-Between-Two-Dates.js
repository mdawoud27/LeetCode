/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const dayInMilliseconds = 24 * 60 * 60 * 1000; // hour - minute - second - millisecond

    return Math.ceil(Math.abs(d1 - d2)) / dayInMilliseconds;
};