export function setTagPages(tags) {
  filteredTags = []
  tags.forEach(function(articleTag) {
    articleTag.forEach(function(mappedTag) {
      filteredTags.push(mappedTag)
    })
  })
  return filteredTags
}
