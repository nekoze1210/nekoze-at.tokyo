<template>
  <div class="post">
    <div class="column">
      <article-body />
    </div>
  </div>
</template>

<script>
import ArticleBody from '~/components/ArticleBody'

export default {
  components: { ArticleBody }
}
</script>

<style scoped>
.post {
  margin: 2.5rem 0;
}
.post .content p {
    line-height: 1.9;
    margin: 15px 0;
}
</style>
