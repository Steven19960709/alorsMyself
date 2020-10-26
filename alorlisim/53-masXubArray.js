// 给定一个整数数组nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素）返回器最大和

// 方法一：动态规划。

var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0

  for (let num of nums) {
    if (sum > 0) { // 大于0 说明有增益效果，小于0 说明没有增益，需要舍弃
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }
  
  return ans
  // let ans = nums[0];
  // let sum = 0;
  // for(const num of nums) {
  //     if(sum > 0) {
  //         sum += num;
  //     } else {
  //         sum = num;
  //     }
  //     ans = Math.max(ans, sum);
  // }
  // return ans;
}

console.log(maxSubArray([1,2,3,-10,-2,9,20]))