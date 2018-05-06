<template>
  <div class="post">
    <div class="column">
      <div class="card-content">
        <div class="media">
          <div class="media-content has-text-centered">
            <h1 class="title article-title">{{ post.title }}</h1>
            <p class="subtitle is-6 article-subtitle has-text-right">
              {{ post.published }}
            </p>
          </div>
        </div>
        <div class="content article-body">
          <nuxtent-body :body="post.body" />
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
