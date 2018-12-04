<template>
  <div>
    <Particles/>
    <div class="hero is-fullheight" id="about">
      <div class="hero-body">
        <div class="container">
          <profile/>
        </div>
      </div>
    </div>
    <div class="columns is-marginless" id="skills">
      <skills style="min-height: 100vh;"/>
    </div>
    <div class="columns is-marginless is-mobile" id="articles">
      <articles style="min-height: 100vh;"/>
    </div>
    <div class="columns is-marginless" id="contacts">
      <contacts style="min-height: 100vh;"/>
    </div>
  </div>
</template>

<script>
import contentful from "~/plugins/contentful.js";
import Particles from "~/components/Particles.vue";
import Profile from "~/components/Profile.vue";
import ScrollDown from "~/components/ScrollDown.vue";
import Skills from "~/components/Skills.vue";
import Articles from "~/components/Articles.vue";
import Contacts from "~/components/Contacts.vue";

const client = contentful.createClient();
export default {
  fetch({ store }) {
    store.commit("resetMenu");
  },
  head() {
    return {
      title: "Top"
    };
  },
  data() {
    return {
      posts: []
    };
  },
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.published"
      })
      .then(entries => {
        return {
          posts: entries.items
        };
      })
      .catch(console.error);
  },
  components: { Profile, Skills, ScrollDown, Particles, Articles, Contacts }
};
</script>

<style lang="scss" scoped>
.is-fullheight {
  min-height: 100vh;
}
</style>
