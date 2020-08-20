// 合并排序
function mergeSort(arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  // 拆分成两个子数组
  let middle = Math.floor(len/2)
  let left = arr.slice(middle, len)
  // 递归拆分
  let mergeSortLeft = mergeSort(left)
  let mergeSortRight = mergeSort(right)
  return merge (mergeSortLeft, mergeSortRight)
}

function merge (left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift()) // 每次都要删除left或者right的第一个元素，然后加入result中
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}
