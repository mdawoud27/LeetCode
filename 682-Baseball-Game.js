/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let record = [];

    for (let i = 0; i < operations.length; i++) {
        if (Number(operations[i]))
            record.push(Number(operations[i]));
        else if (operations[i] === 'C')
            record.pop();
        else if (operations[i] === 'D')
            record.push(record[record.length - 1] * 2);
        else if (operations[i] === '+')
            record.push(record[record.length - 1] + record[record.length - 2]);
    }

    return record.reduce((acc, curr) => acc + curr, 0);
};