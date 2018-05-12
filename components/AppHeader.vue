<template>
  <nav class='navbar is-fixed-top' role='navigation'>
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
        <div class="navbar-item">
          <nuxt-link to="/about" class="has-text-black">About</nuxt-link>
        </div>
        <div class="navbar-item">
          <a href="https://github.com/nekoze1210" target="_blank"><i class="fa fa-github has-text-black"></i></a>
        </div>
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
