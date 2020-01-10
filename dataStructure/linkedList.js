// 单链表链表节点 由值和下一项指针构成
function Node(element){
  this.element = element;
  this.next = null;
}

// 链表构造函数
// 初始化链表头
// 增（insert），删（remove），查（find，findPrev）
// 显示列表内容（display）
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrev = findPrev;
  this.display = display;
}

// 链表查询 从头开始
function find(item) {
  var curNode = this.head;
  while (curNode.element != item) {
    curNode = curNode.next;
  }
  return curNode;
}

// 链表插入，
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var curNode = this.find(item);
  newNode.next = curNode.next;
  curNode.next = newNode;
}

function display(){
  var curNode = this.head;
  while (curNode.next !== null) {
    console.log(curNode.next.element);
    curNode = curNode.next;
  }
}

function findPrev(item){
  var curNode = this.head;
  while (curNode.next!==null &&curNode.next.element != item) {
    curNode = curNode.next;
  }
  return curNode;
}

function remove(item){
  var prevNode = this.findPrev(item);
  prevNode.next = prevNode.next.next;
}

module.export = LList;

var fruits = new LList();
fruits.insert("Apple",'head');
fruits.insert("Banana","Apple");
fruits.insert("Pear","Banana");

fruits.display();
fruits.remove('Banana');
fruits.display();
