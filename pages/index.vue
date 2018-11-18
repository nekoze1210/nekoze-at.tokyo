<template>
  <div>
    <div class="wrap"><profile /></div>
    <!-- <vue-particles
      color="#247e55"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#247e55"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles> -->
  </div>
</template>

<script>
import contentful from '~/plugins/contentful.js'
// import VueParticle from '~/plugins/vue-particle.js'
import Profile from '~/components/Profile.vue'

const client = contentful.createClient()
export default {
  fetch({ store }) {
    store.commit('resetMenu')
  },
  head() {
    return {
      title: 'Top'
    }
  },
  data() {
    return {
      posts: []
    }
  },
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.published'
      })
      .then(entries => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  },
  components: { Profile }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100vh;
}
</style>
