// summaryRanges
var summaryRanges = function(nums) {
  const ret = []
  let len = nums.length
  let i = 0
  while (i < len) {
    let low = i
    i++
    while (i < len && nums[i] - nums[i - 1] === 1) {
      i++
    }
    let high = i - 1
    if (nums[low] < nums[high]) {
      let res = nums[low] + '->' + nums[high]
      ret.push(res)
    } else {
      ret.push(`${nums[low]}`)
    }
  }
  return ret
};

let re = summaryRanges([0,1,2,4,5,7])
console.log(re)