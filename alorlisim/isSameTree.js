function isSameTree (p, q) { // 深度优先
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
function checkData (val1, val2) {
  return val1.val === val2.val
}

function isSameTree2 (p, q) {
  // 广度优先
  if (!p && !q) return true
  if (!p || !q) return false

  const queueP = [p], queueQ = [q]

  while (queueP.length && queueQ.length) {
    let np = queueP.shift()
    let nq = queueQ.shift()

    if (np.val !== nq.val) return false
    if (np.left && nq.left) {
      queueP.push(np.left)
      queueQ.push(nq.left)
    } else if (np.left || nq.left) {
      return false
    }
    if (np.right && nq.right) {
      queueP.push(np.right)
      queueQ.push(nq.right)
    } else if (np.right || nq.right) {
      return false
    }
  }
  return queueP.length === 0 && queueQ.length === 0
}