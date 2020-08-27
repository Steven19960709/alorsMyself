// 删除链表节点

function deleteNode (head, val) {
  if (!head) return null
  let pre = new ListNode(-1)
  pre.next = head
  let node = pre
  while(node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
      break
    }
    node = node.next
  }
  return pre.next
}