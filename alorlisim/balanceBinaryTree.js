// 求一个二叉树是否是一个平衡二叉树，一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1

// 可以使用递归方式判断二叉树是不是平衡二叉树，递归的顺序可以是自顶向下或者自底向上

var isBalanced = (root) => {
  let flag = true
  let maxHeight = (r) => {
    if (!r) return 0
    let left = maxHeight(r.left)
    let right = maxHeight(r.right)
    if (Math.abs(left - right) > 1) {
      flag = false
    }
    return Math.max(left, right) + 1 // 一次递归，能获取到子树高度
  }
  maxHeight(root)
  return flag
}


// function getMax (root) {
//   let flag = true
//   maxHeight = (root) => {
//     if (!root) return 0
//     let left = getMax(root.left)
//     let right = getMax(root.right)

//     if (left - right > 1 || left - right < -1) {
//       flag = false
//     }
//     return Math.max(left, right) + 1
//   }
//   maxHeight(root)
//   return flag
// }

// function sum (a) {
//   if (!a) return 0

//   return (b) => {
//     if (b) return sum(a + b)
//     else return a
//   }
// }
// let res = sum(1)(2)(4)
// console.log(res)