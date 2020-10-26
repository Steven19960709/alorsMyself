// 二叉树的层次遍历

function levelOrder(root) {
  if (!root) return
  let res = [[root.val]]
  let queue = [root]
  while (queue.length) {
    let len = queuel.length
    let arr = []
    while(len) {
      let cur = queue.shift()
      if (cur.left) {
        queue.push(cur.left)
        arr.push(cur.left.val)
      }
      if (cur.right) {
        queue.push(cur.right)
        arr.push(cur.right.val)
      }
      len--
    }
    if (arr.length) res.push(arr)
  }
  return res
}