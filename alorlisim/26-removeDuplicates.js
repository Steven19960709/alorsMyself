// 原地

var removeDuplicates = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let i = 0
  while (i < nums.length) {
      if (nums[i] === nums[i + 1]) {
          nums.splice(i, 1)
      } else {
          i++
      }
  }
  return nums
};

let res = removeDuplicates([1,1,2,2,5,6,7,7,8,8,9])
console.log(res)