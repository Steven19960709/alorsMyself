// 738 单调递增的数字
// 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
//（当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
// eg: n = 10, output: 9
// eg: n = 1234 output: 1234
// eg: n = 332 output: 299
// eg: n = 343234234234 output: 299999999999
// eg: n = 349 output: 349
var monotoneIncreasingDigits = function(N) {
  if (!N) return 0
  let a = (10 ** (Number(String(N).length - 1)))
  let fx = (N - (10 ** (Number(String(N).length - 1))))
  console.log(fx, a)
  if (N % 10 === 0) {
    return N - 1
  }
  if (isAutoBig(N)) return N
  if (!isAutoBig(N)) {
    let len = String(N).length
    let res = N - (N % (10 ** (len - 1))) - 1
    return res
  }
};
function isAutoBig (nums) {
  return Number(String(nums).split('').sort().join('')) === nums
}

let res = monotoneIncreasingDigits(234170230)
// console.log(res)