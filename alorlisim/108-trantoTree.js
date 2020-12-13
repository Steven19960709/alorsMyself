// 将一个有序数组转化为一个高度平衡的二叉搜索树
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 二叉搜索树：BSt，根结点左子树的值都小于根结点，右子树的值都大于根结点、
// 关键是怎样选择根结点。
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null
  let root = new TreeNode(null)
  if (nums.length > 1) {
    root.left = sortedArrayToBST(0, nums.splice(0, nums.length / 2))
  }
  root.val = nums[0]
  root.right = sortedArrayToBST(nums.splice(1))
  return root
};

