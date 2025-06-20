import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '表达欲',
    subtitle: 'Expressiveness',
    author: 'Liang Tao',
    description: '没什么意义，但也想留下点什么',
    website: 'https://liangtao.cc',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/jimmyrogue',
      },
      {
        name: 'twitter',
        href: 'https://x.com/jimmy_rogue',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      // {
      //   name: 'Archive',
      //   href: '/archive',
      // },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: 'Article', path: 'article' }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@jimmy_rogue',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    disqus: { shortname: 'express-11' },
  },
  analytics: {
    googleAnalyticsId: 'G-Y85WNZNF3N',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
