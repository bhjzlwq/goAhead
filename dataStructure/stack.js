function Stack() {
  this.value =[];
  this.pop = function () {
    this.value.pop();
  }
  this.push = function(){
    this.value.push(...arguments)
  }
}

var stack = new Stack();
stack.push(1,2,3)
console.log(stack);
stack.pop();
console.log(stack);
