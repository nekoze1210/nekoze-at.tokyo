<template>
  <div class="articles">
    <div class="column">
      <div class="card article" v-for="post in posts" :key="post.title">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <router-link :to="post.permalink"><p class="title article-title">{{ post.title }}</p></router-link>
              <p class="subtitle is-6 article-subtitle">
                {{ post.published }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    asyncData: async ({ app, route, payload }) => ({
      posts: payload || await app.$content('/').getAll()
    })
  }
</script>
