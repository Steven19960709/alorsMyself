// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
function singleNumber () {

}

var singleNumber = function(nums) {
  let obj = {}
  nums.forEach((item) => {
      if (!obj[item]) obj[item] = 1
      else obj[item] += 1
  })
  for (let prop in obj) {
      if (obj[prop] === 1) return prop
  }
};

// 方法一，就是用哈希表，但是会用O(n)的额外的时间复杂度

// 方法二，使用异或算法，可以不用额外的空间。

// a 异或 a = 1， b 异或 a = 1， 满足结合律和交换律