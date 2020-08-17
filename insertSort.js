// 插入排序 原地排序，稳定排序

function inSertSort (arr) {
  let len = arr.length
  if (len <= 1) return arr
  for (let i = 1; i < len; i++) {
    let compare = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if ( arr[j] > compare) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = compare
  }
  return arr
}

console.log(inSertSort([2,1,3,4,2,1,11,6,12,111,90]))