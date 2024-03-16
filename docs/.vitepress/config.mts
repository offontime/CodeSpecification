import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码规范",
  description: "For apron.design",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/start' }
    ],

    sidebar: [
      {
        text: '快速开始',
        link: '/start'
      },
      { text: '阅读顺序', link: '/order' },
      {
        text: '规则',
        items: [
          { text: '基本规则', link: '/rules/basis' },
          { text: '命名', link: '/rules/naming' },
          { text: '常量', link: '/rules/constant' },
          { text: '变量', link: '/rules/variable' },
          { text: '类', link: '/rules/class' },
          { text: '函数', link: '/rules/function' },
          { text: '分号', link: '/rules/semicolon' },
          { text: '空格', link: '/rules/space' },
          { text: '空行', link: '/rules/blank-line' },
          { text: '换行', link: '/rules/newline' },
          { text: '缩进', link: '/rules/indentation' },
        ]
      },
      {
        text: '语言规范',
        items: [
          { text: 'HTML', link: '/language/html' },
          { text: 'CSS', link: '/language/css' },
          { text: 'Less', link: '/language/less' },
          { text: 'JavaScript', link: '/language/javascript' },
          { text: 'TypeScript', link: '/language/typescript' }
        ]
      },
      {
        text: '框架及项目规范',
        items: [
          { text: 'Vue2 项目', link: '/framework/vue' },
          { text: 'Vue3 项目', link: '/framework/vue-next' },
          { text: 'React 项目', link: '/framework/react' },
          { text: 'Taro 项目', link: '/framework/react-taro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  cleanUrls: true
})
