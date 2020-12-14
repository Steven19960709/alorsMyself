// 输入两个链表，找出它们的第一个公共节点。

var getIntersectionNode = function (headA, headB) {
  let node = headA
  let lengthA = 0
  while (node) {
    lengthA += 1
    node = node.next
  }
  if (!lengthA) return null
  node = headB
  let lengthB = 0
  while (node) {
    lengthB += 1
    node = node.next
  }
  if (!lengthB) return null
  let diff = 0, slow, fast
  if (lengthA > lengthB) {
    slow = headA
    fast = headB
    diff = lengthA - lengthB
  } else {
    slow = headB
    fast = headB
    diff = lengthA - lengthB
  }
  while (diff --) {
    slow = slow.next
  }
  while(slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}