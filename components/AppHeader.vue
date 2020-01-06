<template>
  <nav class="navbar is-transparent" role="navigation">
    <div class="navbar-brand">
      <app-logo />
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: { AppLogo }
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
