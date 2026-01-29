1function maxProfit(prices: number[]): number {
2    let buyPrice: number = prices[0];
3    let maxProfit: number = 0;
4
5    for (let i = 1; i < prices.length; i++) {
6        if (prices[i] < buyPrice) {
7            buyPrice = prices[i];
8        } else {
9            const profit = prices[i] - buyPrice;
10            if (profit > maxProfit) {
11                maxProfit = profit;
12            }
13        }
14    }
15    return maxProfit;
16};