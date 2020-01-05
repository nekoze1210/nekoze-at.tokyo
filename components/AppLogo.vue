<template>
  <nuxt-link to="/" class="navbar-item navbar-item-logo is-transparent">
    nekoze-at.tokyo
  </nuxt-link>
</template>

<style lang="scss" scoped>
.navbar-item-logo {
  object-fit: contain;
  font-family: Avenir;
  font-size: 30px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #247e55 !important;
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}

@media screen and (min-width: 200px) and (max-width: 1000px) {
  .navbar-item-logo {
    font-size: 25px;
  }
}
</style>
