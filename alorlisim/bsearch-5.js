// 查找最后一个小于等于给定值的数

function bsearch (arr, value) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (arr[mid] > value) {
      high = mid - 1
    } else {
      if (mid === 0 || arr[mid + 1] > value) return mid
      else {
        low = mid + 1
      }
    }
  }
  return -1
}
let res = bsearch([1,2,3,4,5,6,6,6,7,7,8], 5)
console.log(res)