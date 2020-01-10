function DOM2JSON(node) {
  let tag = node.nodeName;
  let children = node.children;
  let arr =[];
  for (let i = 0; i<children.length; i++){
    arr.push(DOM2JSON(children[i]));
  }
  return {
    tag,
    children: arr
  }
}

function throttle(fn,delay) {
  let flag = true;
  return function() {
    if(!flag){ return;}
    flag = false;
    setTimeout(() => {
      fn.apply(this,arguments);
      flag = true;
    }, delay);
  }
}
function debounce(fn , delay){
  let timer;
  return function(){
    if(timer){clearTimeout(timer)}
    timer = setTimeout(() => {
      fn.apply(this,arguments)
    }, delay);
  }
}

Function.prototype.call1 =function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  const args =  [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.apply1= function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  const args = arguments[1];
  let result ;
  if(args){
    if(args instanceof Array){
      throw new Error('argument must be array');
    }
    result = context.fn(...args);
  }else{
    result = context.fn();
  }
  return result;
}

Function.prototype.bind1 = function (context) {
  context = context ? Object(context) : window;
  const self = this;
  const args = [...arguments].slice(1);
  return function _bindFunction(){
    const newArgs = [...arguments];
    if(this instanceof _bindFunction){
      return self.apply(this, args.concat(newArgs))
    }
    return self.apply(context, args.concat(newArgs));
  }
}

function add () {
  const args = Array.prototype.slice.call(arguments);
  const fn = function () {
    const fnArgs = Array.prototype.slice.call(arguments);
    return add.apply(null, args.concat(fnArgs));
  }
  fn.toString = function () {
    return args.reduce((a,b)=>a+b);
  }
  return fn
}
console.log(add(1))
console.log(add(1)(2)(3)());
console.log(add(1,2,3)(4))
console.log(add(1,2,3)(4)()(5))

function repeat(func ,times, wait) {
  return function (str) {
    for(let i =0; i < times; i++){
      setTimeout(() => {
        console.log(str);
      }, wait*(i+1));
    }
  }
}
