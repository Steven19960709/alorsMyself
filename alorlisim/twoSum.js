// 输入一个数组和目标值，求数组中两个和为目标值的数

// 每次遍历的时候都需要要把数组索引保存下来，后续查找差值的时候用来判断改差值是否存在再数组中
var twoSum = function(nums, target) {
  let map = {}
  let len = nums.length - 1

  while (len >= 0) {
      let count = target - nums[len]
      if (map[count]) {
        return [len, map[count]]
      }
      map[nums[len]] = len
      len--
  }
}