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
        content: '「役に立つことをする」をコンセプトにした技術系ブログです。'
      },
      { name: 'theme-color', content: '#FFFFFF' },
      {
        property: 'og:title',
        content: 'Do What Works',
        hid: 'ogTitle'
      }
    ]
  },
  loading: { color: '#63CD6D' },
  modules: ['nuxtent', '@nuxtjs/font-awesome', '@nuxtjs/pwa'],
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
  }
}
