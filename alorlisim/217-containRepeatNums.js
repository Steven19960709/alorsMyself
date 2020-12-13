// 给定一个整数数组，判断是否存在重复元素。

// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
var containsDuplicate = function(nums) {
  // hashmap On On
  if (!nums.length) return false
  let map = {}
  for (let i of nums) {
      if (map[i]) return true
      else {
          map[i] = 1
      }
  }
  return false
};

var containsDuplicate = function(nums) {
  if (!nums.length) return false
  nums.sort((a, b) => a - b)
  // O logn Ologn
  let n = nums.length
  for (let i = 0; i < n - 1; i++) {
      if (nums[i] === nums[i + 1]) return true
  }
  return false
};