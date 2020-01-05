<template>
  <div class="column">
    <div class="container has-text-centered">
      <h3>Articles</h3>
      <h4>独学・仕事で学んだ知見など</h4>
    </div>
    <article-list :posts="posts" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'

export default {
  name: 'Articles',
  components: { ArticleList },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: Avenir;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: 2.5px;
  text-align: center;
  color: #292929;
  margin-top: 60px;
}

h4 {
  font-family: Avenir;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 1.5px;
  text-align: center;
  color: #292929;
  margin-top: 11.1px;
}
</style>
