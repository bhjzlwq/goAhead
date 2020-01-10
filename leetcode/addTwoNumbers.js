// https://leetcode-cn.com/problems/add-two-numbers
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  var flag = 0;
  var list = new List();
  function getNum(num1,num2,num3){
    var temp = num1+num2+num3;
    if(temp > 9){
      temp = temp - 10;
      flag = 1;
    } else {
      flag = 0;
    }
    return temp;
  }
  while(l1 !== null || l2 !== null || flag){
    if(l1 === null && l2 === null){
      if(flag === 1){
        list.insert(1,null)
      }
      return list.head.next;
    }
    if(l1 === null){
      let temp = getNum(0, l2.val, flag)
      list.insert(temp,null)
      l2 = l2.next;
      continue;
    }
    if(l2 === null){
      let temp = getNum(l1.val, 0, flag)
      list.insert(temp,null)
      l1 = l1.next;
      continue;
    }
    let temp = getNum(l1.val, l2.val, flag)
    list.insert(temp,null)
    l1 = l1.next;
    l2 = l2.next;
  }
  return list.head.next;
}

function List(){
  this.head = new ListNode('head');
  this.find = (item)=>{
    var curNode = this.head;
    while(curNode.next){
      curNode = curNode.next;
    }
    return curNode;
  };
  this.insert = (newElement, item)=> {
    var newNode = new ListNode(newElement);
    var curNode = this.find(item);
    newNode.next = curNode.next;
    curNode.next = newNode;
  };
}
var a = addTwoNumbers({val:1,next:{val:8,next:null}},{val:1,next:null})
console.log(a)
