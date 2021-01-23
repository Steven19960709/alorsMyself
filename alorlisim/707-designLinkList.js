/**节点 */
class ListNode {
  /**@param {ListNode} next */
  constructor(val, next = null) {
      /**节点值 */
      this.val = val;
      /**下一节点 */
      this.next = next;
  }
}
/**单链表 */
class MyLinkedList {
  constructor() {
      /**哑结点 */
      this.head = new ListNode('head');
      /**尾节点 */
      this.end = this.head;
      /**节点数 */
      this.len = 0;
  }
  /**获取链表中第 index 个节点的值。如果索引无效，则返回-1 */
  get(index) {
      if (index >= this.len || index < 0) {
          return -1;
      } else if (index === this.len - 1) {
          return this.end.val;
      } else {
          let target = this.head.next;
          while (index-- > 0) {
              target = target.next;
          }
          return target.val;
      }
  }
  /**在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点 */
  addAtHead(val) {
      let target = new ListNode(val, this.head.next);
      this.head.next = target;
      if (this.len === 0) this.end = target;
      this.len++;
  }
  /**将值为 val 的节点追加到链表的最后一个元素 */
  addAtTail(val) {
      this.end = this.end.next = new ListNode(val);
      this.len++;
  }
  /**
   * 在链表中的第 index 个节点之前添加值为 val 的节点。
   * 如果 index 小于等于0，则在头部插入节点。
   * 如果 index 等于链表的长度，则该节点将附加到链表的末尾。
   * 如果 index 大于链表长度，则不会插入节点。
   */
  addAtIndex(index, val) {
      if(index <= 0) {
          this.addAtHead(val);
      } else if (index === this.len) {
          this.addAtTail(val);
      } else if (index < this.len) {
          let target = this.head;
          while (index-- > 0) {
              target = target.next;
          }
          target.next = new ListNode(val, target.next);
          this.len++;
      }
  }
  /**如果索引 index 有效，则删除链表中的第 index 个节点 */
  deleteAtIndex(index) {
      if (this.len === 0 || index >= this.len || index < 0) return;
      let target = this.head;
      while (index-- > 0) {
          target = target.next;
      }
      if (target.next === this.end) this.end = target;
      target.next = target.next.next;
      this.len--;
  }
};

// 关键要留出 end 和 len接口

