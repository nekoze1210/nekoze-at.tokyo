const Prism = require('prismjs')
const externalLinks = require('markdown-it-link-attributes')
const emoji = require('markdown-it-emoji')
const twemoji = require('twemoji')

module.exports = {
  content: {
    permalink: '/articles/:slug',
    page: '/_content',
    generate: ['get', 'getAll'],
    isPost: false
  },
  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(
            code,
            Prism.languages[lang] || Prism.languages.markup
          )}</code></pre>`
        }
      },
      plugins: [emoji, [externalLinks, { target: '_blank', rel: 'noopener' }]],
      customize(parser) {
        parser.linkify.tlds('onion')
        parser.renderer.rules['emoji'] = (token, idx) => {
          return twemoji.parse(token[idx].content)
        }
      }
    }
  },
  css: ['prismjs/themes/prism-coy.css'],
  api: { baseURL: process.env.BASE_URL || 'http://localhost:3000' }
}
