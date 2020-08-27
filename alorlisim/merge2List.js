//输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

function merge2List (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  let head = {}
  let tmp = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      tem.next = l2
      tmp = tmp.next
      l2 = l2.next
    } else {
      tmp.next = l1
      tmp = tmp.next
      l1 = l1.next
    }
  }
  while (l1) {
    cur.next = l1
    cur = cur.next
    l1 = l1.next
  }
  while (l2) {
    cur.next = l2
    cur = cur.next
    l2 = l2.next
  }
  if (l1 === null) tmp.next = l1
  if (l2 === null) tmp.next = l2
  return head.next
}