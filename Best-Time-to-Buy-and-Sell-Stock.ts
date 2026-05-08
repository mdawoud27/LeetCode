1function maxProfit(prices: number[]): number {
2    // approach 1
3    // let buyPrice: number = prices[0];
4    // let maxProfit: number = 0;
5
6    // for (let i = 1; i < prices.length; i++) {
7    //     if (prices[i] < buyPrice) {
8    //         buyPrice = prices[i];
9    //     } else {
10    //         const profit = prices[i] - buyPrice;
11    //         if (profit > maxProfit) {
12    //             maxProfit = profit;
13    //         }
14    //     }
15    // }
16
17    // approach 2 => sliding window
18    let left = 0; // for buy
19    let right = 1; // for sell
20    let maxProfit = 0;
21
22    while (right < prices.length) {
23        if (prices[right] > prices[left]) {
24            const profit = prices[right] - prices[left];
25            maxProfit = Math.max(maxProfit, profit);
26        } else {
27            left = right;
28        }
29        right++;
30    }
31
32    return maxProfit;
33};