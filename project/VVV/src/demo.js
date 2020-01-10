import VVV from './index'

let childComp = {
  template: '<div>{{msg}}</div>',
  created() {
    console.log('child created')
  },
  mounted() {
    console.log('child mounted')
  },
  data() {
    return {
      msg: 'Hello VVV'
    }
  }
}

VVV.mixin({
  created() {
    console.log('parent created')
  }
})

let app = new VVV({
  el: '#app',
  render: h => h(childComp)
})
