<template>
  <div class="articles">
    <div class="column">
      <h2>2018</h2>
      <blog-card />
      <blog-card />
      <blog-card />
      <blog-card />
      <h2>2017</h2>
      <blog-card />
    </div>
  </div>
</template>

<script>
import BlogCard from '~/components/BlogCard'
export default {
  components: { BlogCard }
}
</script>

<style scoped>
  .articles {
    margin: 5rem 0;
  }
</style>
