var minDiffInBST = function (root) {
  if (!root) return 0
  let min = Infinity, prev = null;
  function getMin(root) {
    if (!root) return;
    const { val, left, right } = root
    //中序遍历
    getMin(left)
    if (prev) {
      min = Math.min(min, val - prev.val)
    }
    //将prev指向当前结点
    prev = root
    getMin(right)
  }
  getMin(root)
  return min
}

