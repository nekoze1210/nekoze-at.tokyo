module.exports = {
  content: {
    permalink: ':slug',
    page: '_slug',
    isPost: false,
    generate: [
      'get',
      'getAll'
    ]
  }
}
