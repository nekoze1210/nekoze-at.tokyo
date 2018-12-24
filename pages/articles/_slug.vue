<template>
  <div class="container">
    <div class="post">
      <div class="column is-paddingless">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h1 class="title article-title has-text-centered">{{ currentPost.fields.title }}</h1>
              <p
                class="subtitle is-6 article-subtitle has-text-right"
              >{{ ( new Date(currentPost.fields.published)).toDateString() }}</p>
              <div class="tags">
                <span v-for="tag in currentPost.fields.tags" :key="tag" class="tag">
                  <nuxt-link :to="{ name: 'tags-tag', params: { tag: tag }}">#{{ tag }}</nuxt-link>
                </span>
              </div>
            </div>
          </div>
          <div class="article-body">
            <vue-markdown class="content">{{ currentPost.fields.body }}</vue-markdown>
          </div>
          <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <nuxt-link
              v-if="prevPost"
              class="pagination-previous"
              :to="prevPost.fields.slug"
            >&laquo; {{ prevPost.fields.title }}</nuxt-link>
            <nuxt-link
              v-if="nextPost"
              class="pagination-next"
              :to="nextPost.fields.slug"
            >{{ nextPost.fields.title }} &raquo;</nuxt-link>
          </nav>
          <no-ssr>
            <adsbygoogle
              :ad-slot="'8702010588'"
              :ad-format="'fluid'"
              :ad-layout-key="'-fb+5w+4e-db+86'"
            />
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import VueMarkdown from "vue-markdown";

const client = contentful.createClient();
export default {
  fetch({ store }) {
    store.commit("resetMenu");
  },
  data() {
    return {
      allPosts: [],
      currentPost: []
    };
  },
  head() {
    return {
      title: this.currentPost.fields.title
    };
  },
  components: {
    VueMarkdown
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.published"
      })
      .then(entries => {
        const posts = entries.items;
        const current = posts.filter(function(item) {
          return item.fields.slug === params.slug;
        });
        return {
          allPosts: posts,
          currentPost: current[0]
        };
      })
      .catch();
  },
  computed: {
    dateOrder: function() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (
          this.allPosts[i].fields.published ===
          this.currentPost.fields.published
        ) {
          return i;
        }
      }
    },
    nextPost: function() {
      if (this.dateOrder === 0) {
        return false;
      } else {
        return this.allPosts[this.dateOrder - 1];
      }
    },
    prevPost: function() {
      if (this.dateOrder === this.allPosts.length - 1) {
        return false;
      } else {
        return this.allPosts[this.dateOrder + 1];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
}

.post {
  font-family: Arial, Avenir;
  margin: 1rem 0;
}

.post .content p {
  line-height: 1.9;
  margin: 15px 0;
}

.articles {
  margin: 5rem 0;
}

.media-center {
  display: block;
  margin-bottom: 1rem;
}

.content p {
  margin: 15px 0;
}

.media-content {
  margin-top: 3rem;
}

.article,
.promo-block {
  margin-top: 6rem;
}

div.column.is-8:first-child {
  padding-top: 0;
  margin-top: 0;
}

.article-subtitle {
  color: #909aa0;
  margin-bottom: 1.5rem;
}

.article-body {
  line-height: 200%;
}

.promo-block .container {
  margin: 1rem 5rem;
}
</style>
