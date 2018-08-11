<template>
  <div class="columns columns--main">   
    <section class="column is-three-quarters">
      <div class="articles">
        <h2 class="articles__heading">Articles</h2>
        <hr class="articles__ruler">
        <div class="container is-fluid">
          <div class="columns is-multiline">
            <div class="column is-half" v-for="post in posts" :key="post.fields.slug">
              <div class="card" :style="{ 'background-image': 'url(' + post.fields.hero_image.fields.file.url +')' }">
                <div class="card-content">
                  <p class="title"><nuxt-link :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link></p>
                  <p class="subtitle">{{ ( new Date(post.fields.published)).toDateString() }}</p>
                  <div class="tags">
                    <span v-for="tag in post.fields.tags" :key="tag" class="tag"><nuxt-link :to="{ name: 'tags-tag', params: { tag: tag }}"> #{{ tag }}</nuxt-link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="column">
      <profile></profile>
      <div class="sponsor">
        <h2 class="sponsor__heading">Ads</h2>
        <hr class="sponsor__ruler">
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-6697069851005375",
                  enable_page_level_ads: true
            });
        </script>
      </div>
    </section>
  </div>
</template>

<script>
import profile from '~/components/Profile.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
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
  components: { profile }
}
</script>

<style lang="scss">
.columns--main {
  margin: 0 30px;
}

@media screen and (min-width: 200px) and (max-width: 1000px) {
  .columns--main {
    margin: 0 10px;
  }
}

.card {
  position: relative;
  min-height: 490px;
  order: solid 0.2px #707070;
  border-radius: 4px;
  box-shadow: 4px 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-size: cover;

  &::before {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
  }

  &-content {
    position: absolute;
    font-family: Avenir;
    p.title {
      padding-top: 55%;
      a {
        color: #fff; // ここ動的にしたい
      }
    }
    p.subtitle {
      font-size: 20px;
      font-weight: 900;
      font-style: oblique;
      font-stretch: normal;
      line-height: 1.35;
      letter-spacing: normal;
      text-align: left;
      color: #fefefe;
    }
    .tags {
      .tag {
        background-color: transparent;
        a {
          font-size: 20px;
          font-weight: 900;
          font-style: oblique;
          font-stretch: normal;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }
}

.articles {
  margin-top: 3.5em;
  &__heading {
    width: 177px;
    height: 68px;
    font-family: Avenir;
    font-size: 50px;
    font-weight: 900;
    font-style: oblique;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #434040;
  }

  &__ruler {
    border: solid 1px #707070;
  }

  @media screen and (min-width: 1000px) {
    .card {
      margin-right: 15%;
    }
  }
}

.sponsor {
  margin-top: 3.5em;
  &__heading {
    font-family: Avenir;
    font-size: 50px;
    font-weight: 900;
    font-style: oblique;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #434040;
  }

  &__ruler {
    border: solid 1px #707070;
  }
}
</style>
