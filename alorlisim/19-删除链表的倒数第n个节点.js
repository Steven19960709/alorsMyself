var removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(-1);
  preHead.next = head;
  let len = 0;
  let first = head;
  while(first){
      len++;
      first = first.next;
  }
  len -= n;
  first = preHead;
  while(len != 0){
      len--;
      first = first.next;
  }
  first.next = first.next.next;
  return preHead.next;
};  
