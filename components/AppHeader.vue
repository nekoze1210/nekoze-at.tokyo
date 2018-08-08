<template>
  <nav class='navbar has-shadow' role='navigation'>
    <div class='navbar-brand has-background-white'>
      <app-logo />
      <!-- <a type="button" class="navbar-burger burger" data-target="sideMenu" @click="$store.commit('toggleMenu')" :class="{ 'is-active' : $store.state.isMenuActive }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="sideMenu" class="navbar-menu" :class="{ 'is-active' : $store.state.isMenuActive }">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
        <nuxt-link to="/about" class="navbar-item is-tab" exact>About</nuxt-link>
        <a href="https://github.com/nekoze1210" target="_blank" class="navbar-item is-tab" @click="$store.commit('toggleMenu')">
          <i class="fa fa-github"></i>
        </a>
      </div> -->
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  data() {
    return {
      isActive: false
    }
  },
  components: { AppLogo }
}
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
}
.navbar-item.is-tab {
  &:hover {
    color: #63cd6d;
    border-bottom-color: #63cd6d;
  }
}
.navbar-item.is-tab.is-active {
  color: #63cd6d;
  border-bottom-color: #63cd6d;
}
</style>
