<template>
  <div>
    <app-header/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader";

export default {
  head() {
    return {
      titleTemplate: "nekoze-at.tokyo"
    };
  },
  components: { AppHeader }
};
</script>

<style>
body h1 h2 h3 h4 h5 p a span {
  font-family: Avenir, "Helvetica neue", Helvetica, "游ゴシック", YuGothic,
    "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
    "ＭＳ Ｐゴシック", sans-serif;
}
</style>
