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
import WorkThumbnail from "~/components/WorkThumbnail";

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
          detail: "",
          tag: "Ruby"
        },
        {
          name: "MonoCabinet2",
          url: "https://otoshimonno.herokuapp.com/222",
          technology: "Ruby on Rails/Ruby",
          thumbnail: "",
          period: "2ヶ月",
          detail: "",
          tag: "Ruby"
        }
      ]
    };
  },
  components: { WorkThumbnail }
};
</script>

<style>
</style>
