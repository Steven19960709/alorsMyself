// 给定一个二叉树，找出其最大深度。即二叉树的深度为根节点到最远叶子节点的最长路径的节点数

var maxDepth = function (root) {
  // 递归解法
  if (!root) return 0
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
}

function maxDepthBfs (root) {
  if (!root) return 0
  let queue = [root]
  let result = 0
  while (queue.length) {
    let i = queue.length
    result += 1
    while (i--) {
      let cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
  }
  return result
}