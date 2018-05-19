<template>
  <div class="post">
    <div class="column">
      <div class="article">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <h1 class="title article-title">ABOUT</h1>
            </div>
          </div>
          <div class="content article-body">
            <p>
              技術(特にプログラミング)ネタをアウトプットしていくブログです。
            </p>
          </div>
          <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <nuxt-link class="pagination-previous" to="/">&laquo; Back</nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    fetch({ store }) {
      store.commit('resetMenu')
    },
  }
</script>