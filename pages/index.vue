<template>
  <div>
    <Particles />
    <div id="about" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <profile />
          <scroll-down />
        </div>
      </div>
    </div>
    <div id="skills" class="columns is-marginless">
      <skills style="min-height: 100vh;" />
    </div>
    <div id="contacts" class="columns is-marginless">
      <contacts style="min-height: 100vh;" />
    </div>
  </div>
</template>

<script>
import Particles from '~/components/Particles.vue'
import Profile from '~/components/Profile.vue'
import ScrollDown from '~/components/ScrollDown.vue'
import Skills from '~/components/Skills.vue'
import Contacts from '~/components/Contacts.vue'

export default {
  components: { Profile, Skills, ScrollDown, Particles, Contacts },
  fetch({ store }) {
    store.commit('resetMenu')
  },
  data() {
    return {
      posts: []
    }
  },
  head() {
    return {
      title: 'Top'
    }
  }
}
</script>

<style lang="scss" scoped>
.is-fullheight {
  min-height: 100vh;
}
</style>
