// getKlist 查找最后一个给定值的元素

function bsearch(arr, val) {

  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (arr[mid] > val) {
      high = mid - 1
    } else if (arr[mid] < value) {
      low = mid + 1
    } else {
      if ((mid == n - 1) || (arr[mid + 1] !== value)) return mid
      else low = mid + 1
    }
  }
  return -1
}
// 如果 a[mid]这个元素已经是数组中的最后一个元素了，那它肯定是我们要找的；
// 如果 a[mid]的后一个元素 a[mid+1]不等于 value，那也说明 a[mid]就是我们要找的最后一个值等于给定值的元素。