const contentful = require('contentful')
const config = require('./.contentful.json')
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
})

module.exports = {
  head: {
    title: 'Do What Works',
    htmlAttrs: {
      lang: 'ja'
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'application-name', content: 'Do What Works' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '「役立つことをする」をコンセプトにした技術系ブログ'
      },
      { name: 'theme-color', content: '#63CD6D' },
      {
        property: 'og:title',
        content: 'Do What Works',
        hid: 'ogTitle'
      }
    ]
  },
  router: {
    linkExactActiveClass: 'is-active'
  },
  loading: { color: '#63CD6D' },
  modules: ['@nuxtjs/axios', '@nuxtjs/font-awesome'],
  css: [{ src: 'bulma/bulma.sass', lang: 'sass' }],
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
  plugins: ['./plugins/contentful.js'],
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: config.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [
            ...entries.items.map(entry => `articles/${entry.fields.slug}`)
          ]
        })
    }
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  }
}
