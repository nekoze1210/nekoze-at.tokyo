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
        },
        {
          name: "今年の漢字博士",
          url:
            "https://assistant.google.com/services/a/uid/000000e75d0ebfdf?hl=ja",
          technology: "Javascript(ES6)/dialogflow/Google Assistant",
          thumbnail: require("~/assets/work_thumbnails/kanji.png"),
          period: "2週間",
          detail:
            "GoogleAssistantで歴代の「今年の漢字」を教えてくれるアプリを開発。",
          tag: "Javascript"
        },
        {
          name: "hankemory",
          url:
            "https://play.google.com/store/apps/details?id=io.nekoze.hankemory&hl=ja",
          technology: "Vue.js/Cordova/Android SDK",
          thumbnail: require("~/assets/work_thumbnails/hankemory.png"),
          period: "2週間",
          detail:
            "映画館で発券したチケットの半券を思い出として記録できるアプリ。画面の状態遷移・機能はすべてVue.js製。Cordovaを利用し、ハイブリットアプリとして現在GooglePlayストアに公開中",
          tag: "Javascript"
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
