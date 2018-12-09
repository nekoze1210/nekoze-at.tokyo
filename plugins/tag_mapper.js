const tagColorList = {
  java: {
    backgroundColor: '#DD9038',
    textColor: '#fff'
  },
  ruby: {
    backgroundColor: '#f82020',
    textColor: '#fff'
  },
  swift: {
    backgroundColor: '#E54C2E',
    textColor: '#fff'
  },
  sass: {
    backgroundColor: '#B96790',
    textColor: '#fff'
  },
  javascript: {
    backgroundColor: '#F4DE50',
    textColor: '#fff'
  },
  react: {
    backgroundColor: '#80D8F7',
    textColor: '#fff'
  },
  vue: {
    backgroundColor: '#42b883',
    textColor: '#fff'
  },
  go: {
    backgroundColor: '#85D4E2',
    textColor: '#707070'
  },
  kotlin: {
    backgroundColor: '#4E6698',
    textColor: '#fff'
  }
}
export default {
  setTagPages(tags) {
    var filteredTags = []
    tags.forEach(function(articleTag) {
      articleTag.forEach(function(mappedTag) {
        filteredTags.push(mappedTag)
      })
    })
    return filteredTags
  },
  setTagColors(tag) {
    if (Object.keys(tagColorList).includes(tag)) {
      console.log(tagColorList[tag].textColor)
      let colorSet = {
        backgroundColor: tagColorList[tag].backgroundColor,
        textColor: tagColorList[tag].textColor
      }
      return colorSet
    } else {
      return { backgroundColor: 'whitesmoke', textColor: '#707070' }
    }
  }
}
