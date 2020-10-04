// 反转一个链表
function reverse (head, tail) {
  let prev = tail.next // 保留尾节点的相关信息
  let cur = head // 头指针
  while (cur) {
    const next = cur.next// 保留next节点信息
    cur.next = prev // 改变当且遍历节点的next信息
    prev = cur // 保留当前节点信息,作为下一次循环的next信息
    cur = next
  }
  return [tail, head] // 这里的顺序
}
