import { defineConfig } from 'vitepress'
import { autoGenerateSidebar } from 'press-util'

export default defineConfig({
  base: '/',
  appearance: true,
  title: 'Magic Hooks',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/logo.svg',
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '🎯 快速入手',
      link: '/start.md'
    }],
    sidebar: autoGenerateSidebar as any,
  }
})
