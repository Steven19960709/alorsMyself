function sumOfLeftLeves (root) {
  //  求所有左叶子的和,这里注意的是叶子，左叶子。不是左节点
  if (!root) return 0
  let sum = 0

  let queue = []

  queue.push(root.left)

  while(queue.length) {
    let cur = queue.shift()
    if (cur.left.left === null && cur.right.left === null) { //说明是左叶子
      sum += cur.left.val
    }
    if (cur.right) {
      queue.push(cur.right)
    }
  }
  return sum
}