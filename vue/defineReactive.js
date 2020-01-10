import Dep from "./dep";
import { Observer } from "./defineReactive";

function defineReactive(data,key,val) {
  if(typeof val === 'object'){
    new Observer(val)
  }
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      // dep.push
      dep.depend();
      return val;
    },
    set: function (newVal) {
      if(newVal === val){
        return ;
      }
      val = newVal;
      dep.notify();
    }
  })
}
