var rotateRight = function(head, k) {
  if (!head || !head.next) return head
  let curr = head, n = 0
  let hash = new Map()
  // 遍历并将数据存入map
  while (curr && ++n) {
      hash.set(n, curr)
      curr = curr.next
  }
  k = k % n // 去重
  // 通过查找map对链表进行操作
  hash.get(n).next = head // 链表最后一项指向头部形成环
  head = hash.get(n - k).next // 定位新的头节点
  hash.get(n - k).next = null // 打断链表环
  return head
};