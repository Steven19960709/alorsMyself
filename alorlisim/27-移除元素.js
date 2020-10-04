var removeElement = function(nums, val) {
  let len = nums.length
  let i = 0
  for (; i < len; i++, len--) {
      if (nums[i] === val) {
          // nums.splice(i, 1)
          nums[i] = 'same'
      } 
      if (nums[len - 1] === val) {
          // nums.splice(len - 1, 1)
          nums[len - 1] = 'same'
      }
    }
  nums = nums.filter((item) => {
    return item !== 'same'
  })
  console.log(nums)
  return nums.length
};

removeElement([3,2,2,3,1,2,3,5,2], 2)