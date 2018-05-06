<template>
  <div>
    <app-header/>
    <div class='container'>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'

export default {
  components: { AppHeader }
}
</script>

<style>
.post {
  margin: 1.0rem 0;
}
.post .content p {
    line-height: 1.9;
    margin: 15px 0;
}
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
}
.promo-block .container {
  margin: 1rem 5rem;
}
</style>
