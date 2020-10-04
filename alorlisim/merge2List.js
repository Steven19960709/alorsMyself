//输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

function merge2List (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  let head = {}
  let tmp = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      tmp.next = l2
      l2 = l2.next // 移动对比链表的指针
      tmp = tmp.next // 移动当前头结点的指针
    } else {
      tmp.next = l1
      tmp = tmp.next
      l1 = l1.next
    }
  }
  while (l1) { // 处理未拼接完的链表
    tmp.next = l1
    tmp = tmp.next
    l1 = l1.next
  }
  while (l2) {
    tmp.next = l2
    tmp = tmp.next
    l2 = l2.next
  }

  // 处理已经拼接完的链表
  if (l1 === null) tmp.next = l1
  if (l2 === null) tmp.next = l2
  return head.next
}