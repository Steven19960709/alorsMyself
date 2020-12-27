var lengthOfLastWord = function(s) {
  let d = s.split(' ')
  let len = d.length
  let cur = ''
  while (!cur && len > 0) {
      cur = d[len - 1]
      len -= 1
  }
  return cur.length
}
let res = lengthOflastWord('h      ')
console.log(res)
let r = lengthOflastWord(' ')