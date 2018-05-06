module.exports = {
  content: {
    permalink: '/articles/:slug',
    page: '/_content',
    generate: [
      'get', 'getAll'
    ],
    isPost: false
  },
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
