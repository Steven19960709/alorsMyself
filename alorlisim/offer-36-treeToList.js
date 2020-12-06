// 二叉搜索树与双向链表
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。
// 要求不能创建任何新的节点，只能调整树中节点指针的指向。
// 二叉搜索树的中序遍历是递增的遍历，完了，排序链表刚刚好用到这个特性

function treeToDoubblyList(root) {
  if (!root) {
    return;
  }

  const stack = [];
  let node = root;
  let pre = null;
  let head = null;
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      // 针对没有左右子节点的情况，更新一个node
      const top = stack.pop();
      if (!pre) {
        head = top;
      } else {
        pre.right = top;
      }
      top.left = pre;
      pre = top;
      node = top.right;
    }
  }

  head.left = pre;
  pre.right = head;
  return head;

}