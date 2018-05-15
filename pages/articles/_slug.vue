<template>
  <div class="post">
    <div class="column">
      <div class="card-content">
        <div class="media">
          <div class="media-content has-text-centered">
            <h1 class="title article-title">{{ currentPost.fields.title }}</h1>
            <p class="subtitle is-6 article-subtitle has-text-right">{{ ( new Date(currentPost.fields.published)).toDateString() }}</p>
          </div>
        </div>
        <div class="content article-body">
          <vue-markdown class="content">{{ currentPost.fields.body }}</vue-markdown>
        </div>
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <nuxt-link v-if="prevPost" class="pagination-previous" :to="prevPost.fields.slug">&laquo; {{ prevPost.fields.title }}</nuxt-link>
          <nuxt-link v-if="nextPost" class="pagination-next" :to="nextPost.fields.slug">{{ nextPost.fields.title }} &raquo;</nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'

const client = createClient()
export default {
  data () {
    return {
      allPosts: [],
      currentPost: []
    }
  },
  components: {
    VueMarkdown
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.published'
    }).then(entries => {
      const posts = entries.items
      const current = posts.filter(function (item) {
        return item.fields.slug === params.slug
      })
      return {
        allPosts: posts,
        currentPost: current[0]
      }
    }).catch(console.error)
  },
  computed: {
    dateOrder: function () {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].fields.published === this.currentPost.fields.published) {
          return i
        }
      }
    },
    nextPost: function () {
      if (this.dateOrder === 0) {
        return false
      } else {
        return this.allPosts[this.dateOrder - 1]
      }
    },
    prevPost: function () {
      if (this.dateOrder === this.allPosts.length - 1) {
        return false
      } else {
        return this.allPosts[this.dateOrder + 1]
      }
    }
  }
}
</script>
