// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素
function singleNumber (nums) {
  let ans_o = 0
  let ans_t = 0

  for (let o of nums) {
    ans_o = ~ans_t & (ans_o ^ o)
    ans_t = ~ans_o & (ans_t ^ o)
  }
  return ans_o
}
