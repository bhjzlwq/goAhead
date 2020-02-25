/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let len = lists.length
  for(let i =0;i<len;i++){
    lists[i] = merge2Lists(lists[2*i],lists[2*i+1])
  }

  function merge2Lists(list1,list2) {
    if(list1===null){return list2}
    if(list2===null){return list1}
    if(list1.val<=list2.val){
      list1.next = merge2Lists(list1.next,list2);
      return list1;
    }else{
      list2.next = merge2Lists(list1,list2.next);
      return list2;
    }
  }
};
// @lc code=end

