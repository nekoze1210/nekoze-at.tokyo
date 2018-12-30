<template>
  <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
    <div class="card" @mouseover="overlayColorEnable" @mouseleave="overlayColorDisable">
      <nuxt-link
        :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}"
        aria-label="article"
      >
        <div class="card-image">
          <figure class="image is-5by3">
            <img :src="post.fields.hero_image.fields.file.url" :alt="post.fields.slug">
          </figure>
          <div
            class="is-overlay"
            style="opacity: 0.4; transition: 0.2s linear;"
            :style="{'background-color': overlayColor}"
          ></div>
        </div>
      </nuxt-link>
      <div class="media-content">
        <nuxt-link :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}">
          <h3 class="title">{{ post.fields.title }}</h3>
        </nuxt-link>
      </div>
      <span class="posted_date">{{ ( new Date(post.fields.published)).toDateString() }}</span>
    </div>
  </div>
</template>

<script>
import ArticleTag from "~/components/ArticleTag.vue";

export default {
  name: "ArticleThumbnail",
  props: ["post"],
  data() {
    return {
      overlayColor: ""
    };
  },
  methods: {
    overlayColorEnable() {
      this.overlayColor = "#2d8e7b";
    },
    overlayColorDisable() {
      this.overlayColor = "";
    }
  },
  components: { ArticleTag }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: none;

  &:hover {
    box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.5);
    .image.is-5by3 img {
      transform: scale(1.1);
    }
    .title,
    .posted_date {
      color: #247e55;
      transition: 0.2s linear;
    }
  }

  .title {
    font-family: YuGo, "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.72;
    letter-spacing: normal;
    text-align: left;
    color: #292929;
    padding: 10px 0;
  }

  .posted_date {
    font-family: YuGo, "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.77;
    letter-spacing: normal;
    color: #292929;
  }

  .image.is-5by3 {
    overflow: hidden;
    img {
      transition: transform 0.2s;
    }
  }
}
</style>
