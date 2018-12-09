export default {
  setTagPages(tags) {
    var filteredTags = []
    tags.forEach(function(articleTag) {
      articleTag.forEach(function(mappedTag) {
        filteredTags.push(mappedTag)
      })
    })
    return filteredTags
  }
}
