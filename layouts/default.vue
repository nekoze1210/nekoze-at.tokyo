<template>
  <div>
    <app-header/>
    <div class='container'>
      <nuxt/>
    </div>
    <!-- ↓いる？？ -->
    <!-- <app-footer/> -->
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader'
  import AppFooter from '~/components/AppFooter'

  export default {
    components: { AppHeader, AppFooter }
  }
</script>
