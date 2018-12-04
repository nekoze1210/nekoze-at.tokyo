<template>
  <div class="column is-half-mobile is-one-third-desktop">
    <div class="card">
      <div class="card-image">
        <figure class="image is-5by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png">
        </figure>
      </div>
      <div class="media-content">
        <a href="#">
          <h3 class="title">Title</h3>
        </a>
      </div>
      <div class="content is-clearfix">
        <div class="tags is-pulled-left">
          <article-tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="has-text-left"/>
        </div>
        <span class="is-pulled-right posted_date">2018-12-01</span>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleTag from "~/components/ArticleTag.vue";

export default {
  name: "ArticleThumbnail",
  data() {
    return {
      tags: [
        {
          name: "Ruby",
          color: "#cc2626"
        },
        {
          name: "テキストエディタ",
          color: "#2d8e7b"
        }
      ]
    };
  },
  components: { ArticleTag }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: none;

  .title {
    font-family: YuGo;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.72;
    letter-spacing: normal;
    text-align: left;
    color: #707070;
    padding: 20px 0;
    &:hover {
      color: #247e55;
      transition: 0.2s linear;
    }
  }

  .posted_date {
    font-family: YuGo;
    font-size: 13px;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.77;
    letter-spacing: normal;
    color: #707070;
  }
}
</style>
