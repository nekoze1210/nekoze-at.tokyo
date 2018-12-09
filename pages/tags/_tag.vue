<template>
  <div style="margin-top: 100px;">
    <header class="tag-page header">
      <div class="foreground">
        <div class="page-info wrapper">
          <h2>#{{ tag }} ({{ posts.length }})</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts" :key="post.id">
          <nuxt-link
            :to="{ name: 'articles-slug', params: { slug: post.fields.slug }}"
          >{{ post.fields.title }}</nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = contentful.createClient();
export default {
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.tags[in]": params.tag,
        order: "-sys.createdAt"
      })
      .then(entries => {
        return {
          posts: entries.items,
          tag: params.tag
        };
      });
  }
};
</script>