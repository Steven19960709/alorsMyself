// 删除排序链表中的重复元素

var deleteDuplicates = (head) => {
  let node = head
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}