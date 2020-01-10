function VVV(option) {
  if ( process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    console.error('Vue is a constructor and should be called with the `new` keyword');
  }
  const vm = this;
  // 合并配置
  vm.$option = mergeOptions(
    resolveConstructions(vm.constructor),
    option,
    vm
  )
  initLifecycle(vm);
  initEvents(vm);
  initRender(vm);
  initState(vm);

  vm.$mount(vm.$options.el)
}
function mergeOptions(parent,child,vm){
  //  ...
  return {
    component: {},
    created: [],
    directives: {},
    filters: {},
    _base: VVV,
    el: "#app",
    render: function (h) {
      // ...
    }
  }
}
export default VVV;
