import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Echips Wiki",
  description: "Найдите нужную информацию тут",
  head: [
    [
      'script',
      {
        src: 'https://storage1.suvvy.ai/widget/loader.js',
        'data-widget-id': '69984b81dc65a0f917134eb469ba7988608bd676ec3ab70e',
        'data-lang': 'ru',
        async: ''
      }
    ]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Поддержка клиентов', link: '/support/' },
      // Вот наш мостик на закрытую базу:
      { text: 'Вход для Сервисных центров', link: 'https://echips-wiki.pages.dev/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
