// 求最长摇摆序列
// 不断关注 新的波谷或者 波峰，用贪心算法解决

var wiggleMaxLength = function(nums) {
  const len = nums.length
  let prediff = nums[1] - nums[0]
  let ret = prediff !== 0 ? 2 : 1
  for (let i = 2; i < len; i++) {
    let diff = nums[i] - nums[i - 1]

    if ( (diff > 0 && prediff <= 0) || (diff < 0 && prediff >= 0) ) {
      ret ++
      prediff = diff

    }
  }
  return ret
};

let res = wiggleMaxLength([1,7,4,9,2,5])
console.log(res)