/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  function mergeNode(n1,n2){
    if(n1===null){return n2}
    if(n2===null){return n1}
    if(n1.val<n2.val){
      n1.next = mergeNode(n1.next, n2);
      return n1;
    }else{
      n2.next = mergeNode(n1,n2.next);
      return n2;
    }
  }
  return mergeNode(l1,l2)
};
// @lc code=end

var mergeTwoLists = function(l1, l2) {
  if (l1===null) {
    return l2;
  }
  if(l2===null){
    return l1;
  }
  if(l1.val<l2.val){
    l1.next = mergeTwoLists(l1.next,l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1,l2.next);
    return l2;
  }
}
