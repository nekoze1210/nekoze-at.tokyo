<template>
  <nav class="navbar is-transparent" role="navigation">
    <div class="navbar-brand">
      <app-logo />
      <a
        type="button"
        class="navbar-burger burger"
        data-target="sideMenu"
        :class="{ 'is-active': $store.state.isMenuActive }"
        @click="$store.commit('toggleMenu')"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div
      id="sideMenu"
      class="navbar-menu"
      :class="{ 'is-active': $store.state.isMenuActive }"
    >
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item is-tab" exact>
          TOP
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: { AppLogo },
  data() {
    return {
      isActive: false
    }
  }
}
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

.navbar-burger:hover {
  background: none !important;
}
</style>
