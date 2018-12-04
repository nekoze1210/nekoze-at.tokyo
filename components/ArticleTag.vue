<template>
  <span
    :style="{ 'background-color': tag.color, 'color': tag.textColor }"
    class="tag"
  >#{{ tag.name }}</span>
</template>

<script>
export default {
  name: "ArticleTag",
  props: ["tag"]
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
  color: #ffffff;
}
</style>
