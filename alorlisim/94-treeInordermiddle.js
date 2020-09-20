function inorderTraversal (root) {
  // 中序遍历,广度优先
  let arr = []

  let stack = []
  while (root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    arr.push(root.val)
    root = root.right
  }
  return arr
}

function zhongxudigui (root) {
  if (!root) return
  let zuo, you
  let arr = []
  if (root.left) {
    zuo = zhongxudigui(root.left)
  }
  arr.push(root.val)
  you = zhongxudigui(root.right)
  arr.push(zuo, root.val, you)
  return arr
}

// 中序遍历：左子树---根结点---右子树
// 前序遍历：根结点---左子树---右子树
/// 后续遍历：左子树，右子树，根结点