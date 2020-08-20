// quickSort 快排
let a = 0
function quickSort (arr) {
  // if ()
  if (a > 13) return []
  if (!arr.length) return []
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex]
  console.log(pivot)
  // var pivot1 = arr.splice(pivotIndex, 1)[0];
  // console.log(pivot1, pivot)
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  console.log(left, right)
  a += 1
  return quickSort(left).concat([pivot], quickSort(right))
}

let result = quickSort([2,4,341,21,34,11,5,1,6])
console.log(result)