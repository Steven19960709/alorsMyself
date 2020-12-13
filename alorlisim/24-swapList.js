var swapPairs = function(head) {
  // 两两交换节点
  let preHead = new ListNode(null)
  preHead.next = head
  let tmp = preHead
  while (tmp.next && tmp.next.next) {
    let n1 = tmp.next
    let n2 = tmp.next.next
    tmp.next = n2
    n1.next = n2.next
    n2.next = n1
    tmp = n1
  }
  return preHead.next
};