/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head)return null;
  let fast=head,slow=head;
  while(fast.next&&fast.next.next){
    if(fast.next.next===slow.next){
      fast = head;
      slow = slow.next;
      while(fast!==slow){
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }else{
      fast=fast.next.next;
      slow= slow.next;
    }
  }
  return null;
};
// @lc code=end

