import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress template",
  description: "A VitePress Site",
  base:'/lh',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/start/' }
    ],

    sidebar: {
      '/start/':[
        {
        text: 'Start',
        items: [
          { text: 'Ukelig Plan', link: '/start/weekly_plan' },
          { text: 'Nøkkelparagrafer', link: '/start/paragraf_keywords' }
        ]
      }
      ]
    },
  }
})
