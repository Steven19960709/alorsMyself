// 搜索插入位置

var searchInsert = function(nums, target) {
  let arr = nums.sort((a, b) => a - b)
  console.log(arr)
  if (arr.includes(target)) {
      return arr.findIndex((item) => item === target)
  }
  const length = arr.length
  cosnst 
  for (let i = 0; i < length; i++) {
      if (arr[i] > target) {
          return i
      }
  }
};

console.log(searchInsert([1,2,3,4], 3))