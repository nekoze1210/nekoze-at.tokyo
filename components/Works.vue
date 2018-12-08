<template>
  <div class="container">
    <div class="columns is-multiline is-mobile">
      <work-thumbnail
        v-for="(work, index) in works"
        :key="index"
        :work="work"
        v-show="isTagged(work)"
      />
    </div>
  </div>
</template>

<script>
import WorkThumbnail from "~/components/WorkThumbnail.vue";

export default {
  data() {
    return {
      works: [
        {
          name: "MonoCabinet",
          url: "https://otoshimonno.herokuapp.com/",
          technology: "Ruby on Rails/Ruby",
          thumbnail: require("~/assets/work_thumbnails/monocabinet.png"),
          period: "2ヶ月",
          detail:
            "<u>『落とし物を落とさせない。失くさない習慣をつける』</u><br><br>自分のモノを登録できるWEBアプリを開発",
          tag: "Ruby"
        },
        {
          name: "nekoze-at.tokyo",
          url: "https://nekoze-at.tokyo",
          technology: "Vue/Nuxt.js",
          thumbnail: require("~/assets/work_thumbnails/myblog.png"),
          period: "1ヶ月",
          detail: "",
          tag: "Vue.js"
        }
      ]
    };
  },
  methods: {
    isTagged(work) {
      if (this.$store.state.skill.name === work.tag) {
        return true;
      }
    }
  },
  components: { WorkThumbnail }
};
</script>

<style>
</style>
