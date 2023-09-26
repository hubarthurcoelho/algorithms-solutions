// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


function maxProfit(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let j = i+1;
    while (prices[i] < prices[j]) {
      if (prices[j] - prices[i] > profit) {
        profit = prices[j] - prices[i];
      }

      j++;
    }
  }

  return profit;
};

console.log(maxProfit([1, 2]));
