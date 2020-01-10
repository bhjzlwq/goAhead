import Dep from "./dep";

function observe(obj,callback) {
  Object.keys(obj).forEach((key) => defineReactive(obj,key,obj[key],callback))
}

function defineReactive(obj,key,val,callback) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get:()=>{
      // 依赖收集
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      return val
    },
    set: newVal=>{
      val = newVal;
      // callback();
      dep.notify();
    }
  })
}
export default observe;
