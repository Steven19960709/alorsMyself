// 获取第k个链表节点

function getKListNode(head, k) {
  let right = head
  for (let i = 0; i < k; i++) {
    if (right === null) {
      return null
    }
    right = right.next
  }

  let left = head
  while(right) {
    right = right.next
    left = left.next
  }
  return left
}