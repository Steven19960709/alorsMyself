/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
  if (nums.length < 3) return []
  let len = nums.length
  let flag = false
  let d = nums.filter((item) => {
      if (item === 0) return true
      return false
  })
  if (d.length === len) return [[0, 0, 0]]
  let arr = nums.sort((a, b) => a - b)
  console.log(arr)
  let i = 0
  let resarr = []
  let map = {}
  while (i < arr.length) {
    while (arr[i] === arr[i - 1]) {
      console.log(i)
      i++
    }
    console.log(i)
    let num = -arr[i]
    let result = twoSum(arr.slice(i + 1), num)
    result.forEach((item) => {
      let d = [arr[i]].concat(item)
      if (!map[arr[i]]) {
        resarr.push(d)
      }
    })
    i++
  }
  return resarr
}
function twoSum (arr, target) {
  let result = []
  let i = 0
  let j = arr.length - 1
  let map = new Map()
  while (i < j) {
    console.log(i, j, arr, target)
      if (arr[i] + arr[j] === target) {
          let a = [arr[i], arr[j]]
          if (!map.get(arr[i])) {
            map.set(arr[i], 1)
            result.push(a)
            i++
            j--
          } else {
            break
          }
      }else if (arr[i] + arr[j] > target){
        j--
      } else {
        i++
      }
  }
  if (result.length > 0) return result
  return result
}

let d = threeSum([2,0,0,-2,2])
console.log(d)