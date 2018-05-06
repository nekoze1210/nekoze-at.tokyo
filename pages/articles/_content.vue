<template>
  <div class="post">
    <div class="column">
      <div class="article">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <h1 class="title article-title">{{ post.title }}</h1>
              <p class="subtitle is-6 article-subtitle has-text-right">
                {{ post.created_at }}
              </p>
            </div>
          </div>
          <div class="content article-body">
            <nuxtent-body :body="post.body" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    post: payload || await app.$content('/').get(route.path)
  })
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
}
.promo-block .container {
  margin: 1rem 5rem;
}
</style>
