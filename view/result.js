// 面试官你好，我是刘文乔，非常高兴参加今天的面试
// 从16年开始，我一直从事前端开发工作，目前就职于北京旷视科技有限公司，安防业务开发部门
// 我司的核心技术是人脸识别，我们部门主要是基于人脸识别技术为客户提供人员识别、定位追踪等分析功能。
// 主要客户群体是政府机构，比如省市公安厅等等
// 在过去的两年里，我参与了部门大多数项目的开发，比如洞鉴大数据平台，它是目前我司安防方面的主要产品
// 再比如megviiUI，是目前安防部门的前端UI框架，同时也面向全公司
// 在最近的一年里，除了开发业务，我也逐步开始对接项目，负责项目整体把控，比如codeReview、需求评审与设计、进度把控等
// 总的来说，个人觉得在业务开发和项目管理方面都是有着较为丰富的经验的

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
