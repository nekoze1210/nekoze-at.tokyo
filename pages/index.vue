<template>
  <div class="articles">
    <div class="column">
      <div class="card article" v-for="post in posts" :key="post.fields.slug">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <nuxt-link :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}"><p class="title article-title">{{ post.fields.title }}</p></nuxt-link>
              <p class="subtitle is-6 article-subtitle">
                {{ ( new Date(post.fields.published)).toDateString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  fetch({ store }) {
    store.commit('resetMenu')
  },
  head () {
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
  }
}
</script>
