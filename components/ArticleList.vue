<template>
  <div class="container">
    <div class="columns is-multiline is-mobile">
      <article-thumbnail/>
      <article-thumbnail/>
      <article-thumbnail/>
      <article-thumbnail/>
      <article-thumbnail/>
      <article-thumbnail/>
    </div>
  </div>
</template>

<script>
import ArticleThumbnail from "~/components/ArticleThumbnail.vue";

export default {
  name: "ArticleList",
  components: { ArticleThumbnail }
};
</script>

<style scoped>
.columns {
  margin-top: 40px;
}
</style>
