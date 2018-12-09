<template>
  <div class="container">
    <div class="columns is-multiline is-mobile">
      <article-thumbnail v-for="post in posts" :key="post.fields.slug" :post="post"/>
    </div>
  </div>
</template>

<script>
import ArticleThumbnail from "~/components/ArticleThumbnail.vue";

export default {
  name: "ArticleList",
  props: ["posts"],
  components: { ArticleThumbnail }
};
</script>

<style scoped>
.columns {
  margin-top: 40px;
}
</style>
