<template>
  <div class="column is-half-mobile is-half-tablet is-one-third-desktop">
    <div class="card" @mouseover="overlayColorEnable" @mouseleave="overlayColorDisable">
      <div class="card-image">
        <figure class="image is-5by3">
          <img :src="post.fields.hero_image.fields.file.url">
        </figure>
        <div
          class="is-overlay"
          style="opacity: 0.4; transition: 0.2s linear;"
          :style="{'background-color': overlayColor}"
        ></div>
      </div>
      <div class="media-content">
        <nuxt-link :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}">
          <h3 class="title">{{ post.fields.title }}</h3>
        </nuxt-link>
      </div>
      <div class="content is-clearfix">
        <div class="tags is-pulled-left">
          <article-tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="has-text-left"/>
        </div>
        <span
          class="is-pulled-right posted_date"
        >{{ ( new Date(post.fields.published)).toDateString() }}</span>
      </div>
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
      tags: [
        {
          name: "Ruby",
          color: "#cc2626",
          textColor: "#fff"
        },
        {
          name: "テキストエディタ",
          color: "#2d8e7b",
          textColor: "#fff"
        }
      ],
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
    font-family: YuGo;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.72;
    letter-spacing: normal;
    text-align: left;
    color: #707070;
    padding: 10px 0;
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

  .image.is-5by3 {
    overflow: hidden;
    img {
      transition: transform 0.2s;
    }
  }
}
</style>
