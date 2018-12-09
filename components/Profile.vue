<template>
  <div class="columns">
    <div class="column has-text-right">
      <h1 class="profile__myname">{{ myName }}</h1>
      <br>
      <h2 class="profile__myjob">{{ myJob }}</h2>
    </div>
    <div class="column">
      <figure class="image profile__avatar">
        <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded">
      </figure>
    </div>
  </div>
</template>

<script>
import ScrollDown from "~/components/ScrollDown.vue";

export default {
  name: "Profile",
  data() {
    return {
      myName: "Daiki Nagaoka",
      myJob: "Server Side Engineer"
    };
  }
};
</script>

<style lang="scss" scoped>
.profile {
  text-align: center;

  &__avatar {
    width: 204px;
    height: 204px;
  }

  &__myname {
    display: inline-block;
    text-align: left;
    font-family: YuGo, "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.7;
    letter-spacing: 3px;
    color: #444444;
  }

  &__myjob {
    display: inline-block;
    text-align: left;
    font-family: Avenir, "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 2px;
    color: #707070;
  }
}
</style>
