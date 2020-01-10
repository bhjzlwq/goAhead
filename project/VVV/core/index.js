import Watcher from "./watcher";

function _proxy(_data){
  const that = this;
  Object.keys(_data).forEach((key)=>{
    console.log(key);
    Object.defineProperty(that, key, {
      enumerable: true,
      configurable: true,
      get: ()=> {
        return _data[key];
      },
      set: newVal =>{
        that._data[key] = newVal;
      }
    })
  })
}

class Vue {
  constructor(options){
    this._data = options.data;
    observe(this._data, options.render)
    _proxy.call(this, this._data);
    let Watcher = new Watch(this)
  }
}

let app = new Vue({
  el: "#app",
  template:`
    <div>
      <p>{{text1}}</p>
      <p>{{text2}}</p>
    <div>
  `,
  data: {
    text1: "text1",
    text2: "text2",
    text3: "text3"
  },
  render(){
    console.log("render")
  }
})
