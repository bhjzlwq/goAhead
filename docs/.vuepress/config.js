const path = require('path');

module.exports = {
  base: '/goAhead/',
  title: 'Go Ahead',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'LeetCode',
        link: '/leetcode/'
      },
      {
        text: '算法',
        link: '/algorithm/'
      },
      {
        text: '思考',
        link: '/thinking/'
      },
      // {
      //   text: 'GitHub',
      //   link: '/thinking'
      // },
    ],
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
    sidebarDepth: 2,
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    // 自定义插件：动态引入示例组件
  ],
  chainWebpack(config) {
    // config.resolve.alias
    //   .set('@mock', path.resolve(__dirname, '../../src/mock/'));
  }

}
