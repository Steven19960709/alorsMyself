// 求最大无重复子串
// 无重复字符的最长子串

// 滑动窗口来实现，当发现如果有重复字符串的时候，就需要收缩窗口，
// 具体收缩多少，要使重复字符串中的第一个重复字符刚好排在新的字符串第一个
// 例如：p w w e k e ,
// 1: p w 无重复，
// 遇到 w重复，滑动窗口，是当前窗口首字符位 重复的w，也可以理解为，收缩完窗口之后，窗口刚不包含重复字符
// 最长位：w e k, 更新i的时候需要考虑是否有多重复字符 xabvvsdfgsdvvvbax  取最大的i
// 复杂度On，空间复杂度Om


var lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  const map = new Map()
  let max = 0
  let length = s.length
  for (let i = 0, j = 0; j < length; j++) {
      if (map.has(s[j])) {
          i = Math.max(map.get(s[j]) + 1, i)
      }
      console.log(max, j, i)
      max = Math.max(max, j - i + 1)
      map.set(s[j], j)
  }
  return max
};

let res = lengthOfLongestSubstring('ababbb')
console.log(res)

// 使用窗口来计算，窗口滑过的字符，不再滑动