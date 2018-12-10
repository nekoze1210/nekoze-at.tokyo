import contentful from 'contentful'
import tagMapper from './plugins/tag_mapper.js'
import config from './.contentful.json'

const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
})

export default {
  loading: '~/components/Loading.vue',
  head: {
    title: 'nekoze-at.tokyo',
    htmlAttrs: {
      lang: 'ja'
    },
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
      {
        hid: 'description',
        name: 'description',
        content: 'nekoze`s home page'
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
    '@nuxtjs/pwa'
    // '@nuxtjs/google-adsense'
  ],
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    { src: '~/assets/reset.css' },
    { src: 'loaders.css' }
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    './plugins/contentful.js',
    './plugins/tag_mapper.js',
    './plugins/vue-scrollto.js'
  ],
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: config.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          const tags = tagMapper.setTagPages(
            entries.items.map(entry => entry.fields.tags)
          )
          return [
            ...entries.items.map(entry => `articles/${entry.fields.slug}`),
            ...tags.map(tag => `tags/${tag}`)
          ]
        })
    }
  },
  manifest: {
    title: 'nekoze-at.tokyo',
    name: 'nekoze-at.tokyo',
    short_name: 'nekoze-at.tokyo',
    lang: 'ja'
  },
  // 'google-adsense': {
  //   id: 'ca-pub-6697069851005375'
  // },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  }
}
