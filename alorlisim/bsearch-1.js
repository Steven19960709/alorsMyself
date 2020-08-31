// 二分查找：关键词，有序数据，顺序表。无序不行，链表不行
// 要注意的是，mid需要单独拿出来及你选哪个判断，low和high的更新需要写成mid-1和mid+1的形式，如果直接写成low = mid 或者 high = mid，可能会发生死循环
function bserach (arr, value) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] == value) {
      return mid
    } else if (arr[mid] < value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

let res = bserach([1,2,3,4,11,23,55,123,555], 123)
console.log(res)

// 适用于删除操作不频繁，依次排序多次查找的场景中。数据量太小也不适合。数据量太大不合适。

// 二分查找底层使用的是数组，散列表，二叉树这些使用的除了其本身还需要额外的内存信息