import Vue from 'vue';
import Router from 'vue-router';

const Portal = resolve => require(['@/pages/portal'], resolve); //单页面整体
const Home = resolve => require(['@/pages/home'], resolve); //单页面整体
const Camera = resolve => require(['@/pages/camera'], resolve); //设备管理
const historyAlarm = resolve => require(['@/pages/alarm/historyAlarm'], resolve); //历史报警
const checkFile = resolve => require(['@/pages/checkFile'], resolve); //核查存档

Vue.use(Router);


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portal',
      component: Portal
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/real',
      children: [
        {
          path: '/history',
          name: 'historyAlarm',
          component: historyAlarm,
        },
        {
          path: '/checkFile',
          name: 'checkFile',
          component: checkFile,
        },
        {
          path: '/camera',
          name: 'camera',
          component: Camera,
        },
      ]
    }, {
      path: '/*',
      redirect: '/'
    }
  ]
});
