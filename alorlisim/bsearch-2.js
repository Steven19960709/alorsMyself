// 查找第一个比目标数小的数

function bsearch (a, value) {
  let low = 0
  let high = a.length - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (a[mid] > value) {
      high = mid - 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      if ((mid === 0) || (a[mid - 1] !== value)) return mid // 确认是不是第一个出现
      else high = mid - 1
    }
  }
  return -1
}

let res = bsearch([1,2,4,5,6,6,6,6,7,7,90], 7)
console.log(res)