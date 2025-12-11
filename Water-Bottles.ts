1function numWaterBottles(numBottles: number, numExchange: number): number {
2    let totalDrank = numBottles;
3
4    while (numBottles >= numExchange) {
5        const newFull = Math.floor(numBottles / numExchange);
6        totalDrank += newFull;
7        numBottles = newFull + numBottles % numExchange
8    }
9    return totalDrank;
10};