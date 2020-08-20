// quickSort 快排
function quickSort (arr) {
  if (!arr.length) return []
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0] // 这里注意是剪切，不是直接赋值
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

let result = quickSort([2,4,341,21,34,11,5,1,6])
console.log(result)