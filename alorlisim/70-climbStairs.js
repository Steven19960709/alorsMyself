// 爬楼梯，需要n阶才可以到楼顶，每次爬1 或者 2个台阶。有多少种不同方法。n是一个正整数。

var climbStairs = function (n) {
  // 用一个数组来缓存下来计算过的结果
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
}
