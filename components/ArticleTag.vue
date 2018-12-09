<template>
  <nuxt-link
    :to="{ path: 'tags/' + tag }"
    class="tag"
    :style="{ 'background-color': tagColors.backgroundColor, 'color': tagColors.textColor }"
  >#{{ tag }}</nuxt-link>
</template>

<script>
import tagMapper from "~/plugins/tag_mapper.js";

export default {
  name: "ArticleTag",
  props: ["tag"],
  data() {
    return {
      tagColors: ""
    };
  },
  mounted() {
    this.tagColors = tagMapper.setTagColors(this.tag.toLowerCase());
  }
};
</script>

<style lang="scss" scoped>
.tag {
  font-family: YuGo;
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.77;
  letter-spacing: normal;
}
</style>
