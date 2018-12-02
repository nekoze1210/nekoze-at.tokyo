<template>
  <nav class="navbar is-transparent" role="navigation">
    <div class="navbar-brand">
      <app-logo/>
      <a
        type="button"
        class="navbar-burger burger"
        data-target="sideMenu"
        @click="$store.commit('toggleMenu')"
        :class="{ 'is-active' : $store.state.isMenuActive }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="sideMenu" class="navbar-menu" :class="{ 'is-active' : $store.state.isMenuActive }">
      <div class="navbar-end">
        <nuxt-link to="/#about" class="navbar-item is-tab" exact>About</nuxt-link>
        <nuxt-link to="/#skills" class="navbar-item is-tab" exact>Skills & Works</nuxt-link>
        <nuxt-link to="/#articles" class="navbar-item is-tab" exact>Articles</nuxt-link>
        <nuxt-link to="/#contacts" class="navbar-item is-tab" exact>Contacts</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from "~/components/AppLogo";

export default {
  data() {
    return {
      isActive: false
    };
  },
  components: { AppLogo }
};
</script>

<style lang="scss" scoped>
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
.navbar-item.is-tab {
  font-family: Avenir;
  font-weight: 900;
  &:hover {
    color: #247e55;
    border-bottom-color: #247e55;
  }
}
.navbar-item.is-tab.is-active {
  color: #247e55;
  border-bottom-color: #247e55;
}
</style>
