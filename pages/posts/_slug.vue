<template>
  <div>
    <article-main />
    <nuxtent-body :body="content.title"/>
    <!-- <p>slug: {{slug}}</p> -->
  </div>
</template>

<script>
import ArticleMain from '~/components/ArticleMain'

export default {
  async asyncData ({ app, route, payload }) {
    console.log(app)
    console.log(route)
    console.log(payload)
    return {
      content: await app.$content('/').get(route.path)
    }
  },
  components: { ArticleMain }
}
</script>
