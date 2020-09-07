// 树的子结构

function isSubStructure (a, b) {
  if (!a || !b) return false
  return isSameTree(a, b) || isSubStructure(a.left, b) || isSubStructure(a.right, b)
}

function isSameTree (p, q) { // 深度优先
  if (q === null) return true
  if (p === null) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
