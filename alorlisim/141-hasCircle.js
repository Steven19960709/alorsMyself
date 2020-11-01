// 判断一个链表是否有环
// 可以直接遍历，或者使用快慢指针来进行判断

function hasCircle(head) {
  // 快慢指针，时间复杂On，空间O1
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (!fast.next || !fast.next.next) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

function hasCircle1(head) { // 直接遍历,时间空间都是On
  if (!head || !head.next) return false
  let map = new Map()
  let cur = head
  while (cur) {
    if (map.get(cur)) return true
    map.set(cur, true)
    cur = cur.next
  }
  return false
}