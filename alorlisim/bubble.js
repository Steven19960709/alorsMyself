// 冒泡排序, 原地排序算法，稳定排序算法

function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }
    }
    if (!flag) break
  }
  return arr
}


console.log(bubbleSort([2,4,1,10,8,3,1]))