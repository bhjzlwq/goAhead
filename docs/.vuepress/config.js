const path = require('path')

module.exports = {
  base: '/goAhead/',
  title: 'Go Ahead',
  description: '查阅知识',

  themeConfig: {
    search: true, //搜索
    searchMaxSuggestions: 10,
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
      }
      // {
      //   text: 'GitHub',
      //   link: '/thinking'
      // },
    ],
    sidebar: [
      {
        title: '算法',
        collapsable: true,
        children: [
          'sort/',
          'sort/冒泡排序',
          'sort/堆排序',
          'sort/归并排序',
          'sort/快速排序'
        ]
      }
    ],
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
    sidebarDepth: 3,
    smoothScroll: true,
    markdown: {
      lineNumbers: true
    }
  },
  plugins: [
    '@vuepress/back-to-top'
    // 自定义插件：动态引入示例组件
  ],
  chainWebpack (config) {
    // config.resolve.alias
    //   .set('@mock', path.resolve(__dirname, '../../src/mock/'));
  }
}
