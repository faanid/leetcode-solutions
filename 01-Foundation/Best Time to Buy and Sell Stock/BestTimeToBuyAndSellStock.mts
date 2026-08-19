/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
  let bestCost = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const todayPrice = prices[i];

    if (todayPrice < bestCost) {
      bestCost = todayPrice;
    }

    const profit = todayPrice - bestCost;

    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}