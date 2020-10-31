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
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(a[j]) : 0
    ans += sum % 2
    ca = Math.floor(sum / 2)
  }
  ans += ca == 1 ? ca : ""
  return ans.split('').reverse().join('')
};
let res = addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")
console.log(res)