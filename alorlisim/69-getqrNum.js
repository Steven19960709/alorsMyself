// 获取一个数的开根
/**
 * @param {number} x
 * @return {return}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  let left = 1
  let right = x
  while (right - left > 1) {
      let mid = Math.floor((right + left) / 2)
      if ((mid * mid) <= x) {
          left = mid
      } else {
          right = mid
      }
  }
  return left
};