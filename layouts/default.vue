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
