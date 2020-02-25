/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans =null;
  recursion(root);
  function recursion(node){
    if(ans){ return; }
    if(node === null){
      return false;
    }
    let left = recursion(node.left) ? 1:0;
    let right = recursion(node.right) ? 1:0;
    let mid = node===p||node===q ?1:0;
    if(left+right+mid>=2){
      ans = node;
    }
    return left+right+mid>0;
  }
  return ans
};
// @lc code=end

