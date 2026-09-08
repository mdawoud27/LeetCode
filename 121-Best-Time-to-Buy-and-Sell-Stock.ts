function maxProfit(prices: number[]): number {
    let minPrice = prices[0], maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
};