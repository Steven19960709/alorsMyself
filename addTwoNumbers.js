// 两数之和，求和
// 标签：链表
// 将两个链表看成是相同长度的进行遍历，如果一个链表较短则在前面补 00，比如 987 + 23 = 987 + 023 = 1010
// 每一位计算的同时需要考虑上一位的进位问题，而当前位计算结束后同样需要更新进位值
// 如果两个链表全部遍历完毕后，进位值为 11，则在新链表最前方添加节点 11
// 小技巧：对于链表问题，返回结果为头结点时，通常需要先初始化一个预先指针 pre，该指针的下一个节点指向真正的头结点head。使用预先指针的目的在于链表初始化时无可用节点值，而且链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果。
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head')
  let temp = node , sum , n = 0
  while( l1 || l2 ){
      const n1 = l1 ? l1.val : 0
      const n2 = l2 ? l2.val : 0
      sum = n1 + n2 + n
      temp.next = new ListNode( sum % 10 )
      temp = temp.next
      n = parseInt( sum / 10 )
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
  }
  if( n > 0 ) temp.next = new ListNode(n)
  return node.next

};

