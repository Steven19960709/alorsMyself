// countingSort 计数排序，计算排序只用在数据范围不大的场景中，如果数据范围k比需要排序的数据n大很多，就不适合使用计数排序了

function calNumSort (arr) {
  let len = arr.length
  if (len <= 1) return
  let max = arr[0]
  for (let i = 1; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  // console.log(max) - > 5
  let c = [] // 计算数组
  for (let i = 0; i <= max; i++) {
    c[i] = 0
  }
  for( let i = 0; i < len; i++) {
    // 计算每一个元素的个数放入C中
    c[arr[i]] ++
  }
  console.log(c)
  for (let i = 1; i <= max; i++) { // 依次累加
    c[i] = c[i - 1] + c[i]
  }
  let temp = [] // 临时数组r，存储数组排序之后的结果
  for (let i = len - 1; i >= 0; i--) {
    // 关键步骤
    let index = c[arr[i]] - 1
    temp[index] = arr[i]
    c[arr[i]]--
  }
  // 将结果拷贝给arr数组
  // console.log(temp, c)
  for (let i = 0; i < len; ++i) {
    arr[i] = temp[i]
  }
  return arr
}

let test = [0, 2, 1, 1, 3, 3, 3, 5]
console.log(calNumSort(test))