
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let j = 0
  let min = strs[0].length
  let word = ''
  strs.forEach((item) => {
      if (item.length <= min) {
          min = item.length
          word = item
      }

  })
  // max = 5
  let arr = word.split('')
  let a = ''
  while (j < arr.length) {
    let flag = false
    let i = 0
    while (i < strs.length) {
      if (strs[i][j] === arr[j]) {
        flag = true
      }
      else {
        flag =false
        break
      }
      i++
    }
    if (i !== strs.length && a === '') return ''
    if (flag) {
        a += arr[j]
    }
    j++
  }
  return a
};