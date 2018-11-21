<template>
  <div>
    <div class="columns">
      <div class="column is-full"><profile/></div>
      <div class="column is-full"><skills /></div>
    </div>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'
import Profile from '~/components/Profile'
import Skills from '~/components/SKills'

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
  components: { Profile, Skills }
}
</script>
