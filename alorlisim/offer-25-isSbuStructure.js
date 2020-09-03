// 树的子结构

function isSubStructure (a, b) {

}

function isSameTree (p, q) { // 深度优先
  let l1 = p.left
  let l2 = q.left
  let lr = true
  while (l1 && l2) {
    if (!checkData(p.left, q.left)) {
      lr = false
      return lr
    }
    l1 = l1.left
    l2 = l2.left
    lr = isSameTree(l1, l2)
  }
  let r1 = p.right
  let r2 = q.right
  let rr = true
  while (r1 && r2) {
    if (!checkData(p.left, q.left)) {
      rr = false
      return false
    }
    r1 = r1.left
    r2 = r2.left
  }
  if (lr && rr && p.val === q.val) {
    return true
  }
  return false
}
function checkData (val1, val2) {
  return val1.val === val2.val
}