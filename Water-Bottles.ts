1function numWaterBottles(numBottles: number, numExchange: number): number {
2    let totalDrank = numBottles;
3    let empty = numBottles;
4
5    while (empty >= numExchange) {
6        const newFull = Math.floor(empty / numExchange);
7        totalDrank += newFull;
8        empty = newFull + empty % numExchange
9    }
10    return totalDrank;
11};