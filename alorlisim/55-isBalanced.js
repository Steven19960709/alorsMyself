// 判断一颗二叉树是否是一个平衡二叉树

function isBalanced (root) {
  if (!root) return null
  let leftHeight = getNodeHeight(root.left)
  let rightHeight = getNodeHeight(root.right)
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
}

function getNodeHeight (node) {
  if (!node) {
    return 0
  }
  return Math.max(getNodeHeight(node.left), getNodeHeight(node.right)) + 1
}