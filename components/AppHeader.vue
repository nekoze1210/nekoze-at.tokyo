<template>
  <nav class='navbar is-fixed-top' role='navigation'>
    <app-logo />
    <div id="sideMenu" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div class="navbar-item">
          <router-link to="/about">About</router-link>
        </div>
        <div class="navbar-item">
          <a href="https://github.com/nekoze1210/do-what-works" target="_blank"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import AppLogo from '~/components/AppLogo'

  export default {
    components: { AppLogo }
  }
</script>
