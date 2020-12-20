// 剑指 Offer 52. 两个链表的第一个公共节点

var getIntersectionNode = function(headA, headB) {
    let node1 = headA
    let node2 = headB
    while (node1 !== node2) {
      node1 = node1 ? node1.next : headB
      node2 = node2 ? node2.next : headA
    }
    return node1
};