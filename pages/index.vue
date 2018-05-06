<template>
  <div class="articles">
    <div class="column">
      <div class="card article" v-for="post in posts" :key="post.title">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <router-link :to="post.permalink"><p class="title article-title">{{ post.title }}</p></router-link>
              <p class="subtitle is-6 article-subtitle">
                {{ post.created_at }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import BlogList from '~/components/BlogList'
  export default {
    // components: { BlogList },
    asyncData: async ({ app, route, payload }) => ({
      posts: payload || await app.$content('/').getAll()
    })
  }
</script>

<style scoped>
.articles {
  margin: 5rem 0;
}
.media-center {
  display: block;
  margin-bottom: 1rem;
}
.content p {
    line-height: 1.9;
    margin: 15px 0;
}
.media-content {
  margin-top: 3rem;
}
.article, .promo-block {
  margin-top: 6rem;
}
div.column.is-8:first-child {
  padding-top: 0;
  margin-top: 0;
}
.article-title {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
}
.article-subtitle {
  color: #909AA0;
  margin-bottom: 3rem;
}
.article-body {
  line-height: 1.4;
  margin: 0 6rem;
}
.promo-block .container {
  margin: 1rem 5rem;
}
</style>
