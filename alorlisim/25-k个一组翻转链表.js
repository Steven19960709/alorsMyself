function reverseKGroup (head, k) {
  const sentry = new ListNode(0)
  sentry.next = head
  let pre = sentry // 头指针

  while (head) {
    let tail = pre
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) return sentry.next
    }
    const next = tail.next // 保存一下尾节点的下一个节点,下次会有用
    [head, tail] = reverse(head, tail) // 反转k个节点
    pre.next = head // 将一开始保留的上一次的头节点接到新的头部
    tail.next = next // 接驳
    pre = tail // 头指针移动到新的尾节点
    head = tail.next // head节点 是怕热节点的next节点
  }
  return sentry.next
}

function reverse (head, tail) {
  let prev = tail.next // 保留尾节点的相关信息
  let cur = head // 头指针
  while (prev !== tail) {
    const next = cur.next// 保留next节点信息
    cur.next = prev // 改变当且遍历节点的next信息
    prev = cur // 保留当前节点信息,作为下一次循环的next信息
    cur = next
  }
  return [tail, head] // 这里的顺序
}

class ListNode {
  constructor (val, next) {
    this.val = val
    this.next = next
  }
}

// let b = new ListNode ('b', null)
// let a = new ListNode('a', b)
// let c = new ListNode('c', a)
// let d = new ListNode('d', c)
let res = reverse(a, b)

console.log(res)

var reverseKGroup = function(head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while (head) {
      let tail = pre;
      // 查看剩余部分长度是否大于等于 k
      for (let i = 0; i < k; ++i) {
          tail = tail.next;
          if (!tail) {
              return hair.next;
          }
      }
      const nex = tail.next;
      [head, tail] = myReverse(head, tail);
      // 把子链表重新接回原链表
      pre.next = head;
      tail.next = nex;
      pre = tail;
      head = tail.next;
  }
  return hair.next;
};
