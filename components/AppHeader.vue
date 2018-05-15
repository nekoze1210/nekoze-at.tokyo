<template>
  <nav class='navbar is-fixed-top has-shadow' role='navigation'>
    <div class='navbar-brand'>
      <app-logo />
      <a type="button" class="navbar-burger burger " :class="{ 'is-active' : isActive }" data-target="sideMenu" v-on:click="isActive=!isActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="sideMenu" class="navbar-menu" :class="{ 'is-active' : isActive }">
      <div class="navbar-end">
        <!-- <div class="navbar-item">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div> -->
        <nuxt-link to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
        <nuxt-link to="/about" class="navbar-item is-tab" exact>About</nuxt-link>
        <a href="https://github.com/nekoze1210" target="_blank" class="navbar-item is-tab"><i class="fa fa-github"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  data () {
    return {
      isActive: false
    }
  },
  components: { AppLogo }
}
</script>

<style lang="scss" scoped>
  .navbar-item.is-tab {
    &:hover {
      color: #63CD6D;
      border-bottom-color: #63CD6D;
    }
  }
  .navbar-item.is-tab.is-active {
    color: #63CD6D;
    border-bottom-color: #63CD6D;
  }
</style>

