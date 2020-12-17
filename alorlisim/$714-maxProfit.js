// 买卖股票的最大收益
//  prices = [1, 3, 2, 8, 4, 9], fee = 2 
// 收益最大 8
//在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

var maxProfit = function (prices, fee) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for (let i = 1; i < n; ++i) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};
