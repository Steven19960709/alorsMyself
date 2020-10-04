// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

var buildTree = function(preorder, inorder) {
  if(!preorder.length || !inorder.length) return null
  let rootVal = preorder[0]
  const node = new TreeNode(rootVal);
  let i = 0
  for (; i < preorder.length; i++) {
    if (inorder[i] === root) break
  }
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0,i))
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))
  return node
};


// tips: 在前序遍历中，根节点总是被最先访问。中序遍历中，访问根节点之前的所有节点都是左子树中的节点