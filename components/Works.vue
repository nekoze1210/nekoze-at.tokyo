<template>
  <div class="columns is-mobile has-text-left">
    <work-thumbnail
      class="column is-one-third"
      v-for="(work, index) in works"
      :key="index"
      :work="work"
    />
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
          thumbnail: "",
          period: "2ヶ月",
          detail:
            "<u>『落とし物を落とさせない。失くさない習慣をつける』</u><br><br>自分のモノを登録できるWEBアプリを開発",
          tag: "Ruby"
        },
        {
          name: "nekoze-at.tokyo",
          url: "https://nekoze-at.tokyo",
          technology: "Vue/Nuxt.js",
          thumbnail: "",
          period: "1ヶ月",
          detail: "",
          tag: "Vue"
        }
      ]
    };
  },
  components: { WorkThumbnail }
};
</script>

<style>
</style>
