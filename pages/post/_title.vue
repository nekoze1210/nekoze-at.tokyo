<template>
  <div>
    <article-main />
    <p>title: {{title}}</p>
  </div>
</template>

<script>
import ArticleMain from '~/components/ArticleMain'

export default {
  asyncData ({ params }) {
    const { title } = params
    return {
      title
    }
  },
  components: { ArticleMain }
}
</script>
