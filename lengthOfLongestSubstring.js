// 求最大无重复子串

lengthOfLongString () {
  if (!s) return 0
  let max = 0
  let len = s.length
  let map = new Map()
  for (let i = 0, j = 0; j < len; j++) {
    if (map.has(s[j])) {
      i = Math.max(s[j] + 1, i)
    }
    max = Math.max(j - i + 1, max)
    map.set(s[j], j)
  }
  return max
}

// 使用窗口来计算，窗口滑过的字符，不再滑动