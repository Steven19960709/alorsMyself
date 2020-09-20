// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function findSubString (s, words) {
  if (s === '') return []
  

}

function kmp (source, pattern){
  let next = buildNext(pattern)
  let n = source.length
  let i = 0
  let m = pattern.length
  let j = 0
  while (j < m && i < n) {
    if (0 > j || source[i] === pattern[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === m) return i - j
  return -1
}

function buildNext (pattern) {
  let len = pattern.length
  let j = 0
  let next = []
  next[0] = -1
  let t = -1
  while (j < len - 1) {
    if ( 0 > t || pattern[j] === pattern[t]) {
      next[++j] = ++t
    } else {
      t = next[t]
    }
  }
  return next
}

let a = kmp('foobar', 'bar')
console.log(a)