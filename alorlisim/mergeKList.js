// 合并K个有序链表
function ListNode (val, next) {
  this.val = this.val
  this.next = next
}

function mergeKList (list) {
  if (!list) return null
  if (list.length === 1) return list[1]
  if (list.length === 2) return merge2List(list[0], list[1])

  let mid = Math.floor(list.length / 2)
  let l1 = []
  let l2 = []
  for (let i = 0; i < mid; i++) {
    l2[i] = lists[i]
  }
  for (let j = 0, i = mid; j <list.length; i++, j++) {
    l2[j] = list[i]
  }
  return merge2List(mergeKList(l1), mergeKList(l2))
}

function merge2List (l1, l2) {
  let head = {}
  let cur = head

  while (l1 !== null || l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1
      cur = cur.next
      l1 = l1.next
    } else {
      cur.next = l2
      cur = l2.next
      l1 = l1.next
    }
  }
  if ( l1 === null) {
    cur.next = l1
  } else {
    cur.next = l2
  }
  return head.next
}