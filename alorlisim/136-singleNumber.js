function singlerNumber(nums) {
  if (!nums.length) return []
  let ans = 0
  for (let i of nums) {
    ans = ans ^ i
  }
  return ans
}

// 通过异或操作获取，0 异或 a 为 a， a 异或 a 为0