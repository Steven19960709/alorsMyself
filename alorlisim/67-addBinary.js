// 二进制求和，提供两个二进制字符，返回它们的和。 需要考虑精度问题

var addBinary = function(a, b) {
  // let f = parseInt(a, 2)
  // let e = parseInt(b, 2)

  // let sum = Number(f) + Number(e)
  // console.log(sum)
  // return sum.toString(2)

  let ans = ''
  let ca = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = ca
    if (i >= 0) {
      sum += parseInt(a[i])
    } else {
      sum += 0
    }
    if (j >= 0) {
      sum += parseInt(a[j])
    } else {
      sum += 0
    }
    ans += sum % 2
    ca = Math.floor(sum / 2)
  }
  if (ca === 1) {
    ans += ca
  } else {
    ans += ""
  }
  return ans.split('').reverse().join('')
};
let res = addBinary("11", "11")
console.log(res)