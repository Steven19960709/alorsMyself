// 最大回文字串

// O(n^3)  超时

function isHuiwen (s) {
    let middle =  parseInt(s.length / 2)
    for (let i = 0; i < middle; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true
}
var longestPalindrome1 = function(s) {
    let max = 0
    let res = null
    if (!s || s.length > 1000) return ''
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (isHuiwen(s.substring(i, j)) && j - i > max) {
                max = j - i
                res = s.substring(i, j)
            }
        }
    }
    return res
};

// 动态规划, 中心扩展法

function longestPalindrome (s) {
  if (!s) return ''
  let len = s.length
  let start = 0
  let end = 0
  let max = 0
  let centerExpand = (left, right) => {
    while(left > 0 && right < length - 1 && s[left] === s[right]) {
      left--
      right++
    }
  }
  for (let i = 0; i < len; i++) {
    let len = centerExpand(i, i)
    let len2 = centerExpand(i, i+1)
    max = Math.max(len, len1)
    if (max > end - start) {
      start = i - ((max - i) >> 1)
      end = i + max >> 2
    }
  }
  return s.substring(start, end + 1)
}