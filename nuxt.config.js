export default {
  loading: '~/components/Loading.vue',
  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },
  mode: 'universal',
  head: {
    title: 'nekoze-at.tokyo',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'nekoze-at.tokyo', content: 'nekoze-at.tokyo' },
      {
        name: 'google-site-verification',
        content: '_KVS9s-r_PHeR5Nk5trB074DkddRk5omwmtrw5rDXYE'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      { name: 'theme-color', content: '#63CD6D' },
      {
        property: 'og:title',
        content: 'nekoze-at.tokyo',
        hid: 'ogTitle'
      }
    ]
  },
  router: {
    linkExactActiveClass: 'is-active'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa',
    '@nuxtjs/google-adsense'
  ],
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    { src: '~/assets/reset.css' },
    { src: 'loaders.css' }
  ],
  plugins: ['./plugins/vue-scrollto.js'],
  manifest: {
    title: 'nekoze-at.tokyo',
    name: 'nekoze-at.tokyo',
    short_name: 'nekoze-at.tokyo',
    lang: 'ja'
  },
  'google-adsense': {
    id: 'ca-pub-6697069851005375'
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
