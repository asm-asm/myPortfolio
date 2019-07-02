
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'noindex'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { name: 'msapplication-TileColor', content: '#00aba9'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'キーワード' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.npm_package_name || '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://url.jp/' },
      { hid: 'og:title', property: 'og:title', content: process.env.npm_package_name || '' },
      { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'og:image', property: 'og:image', content: 'https://url.jp/img/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css' },
    ],

    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
      
    },
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@assets/scss/_index.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    router: {
      routes: [
        {
          name: 'gallery-id',
          path: '/gallery/:id',
          component: 'pages/gallery/_id/index.vue'
        }
      ]
    }
  }
}
