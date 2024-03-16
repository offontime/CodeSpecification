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
          { text: 'React 项目', link: '/framework/react-taro' },
          { text: 'Taro 项目', link: '/framework/taro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
