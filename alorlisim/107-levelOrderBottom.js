// 二叉树的层次遍历 给定一个二叉树，返回其节点值自底向上的层次遍历。
//（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root == null) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const res = [];

  while (queue.length) {
    const subRes = [];
    const levelSize = queue.length;// 注意这里取长度的时候，要额外申请一个变量，不要直接通过queue.length
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      subRes.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.unshift(subRes);
  }
  return res;
};

let arr = [1]

for (let i = 0; i < arr.length; i++) {
  console.log(i)
  arr.push(32)
}