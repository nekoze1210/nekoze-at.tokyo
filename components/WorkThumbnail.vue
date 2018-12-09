<template>
  <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
    <a class="card">
      <div class="card-image">
        <figure class="image is-4by3" @click="clickWork(work)">
          <img
            :src="work.thumbnail ? work.thumbnail : 'https://bulma.io/images/placeholders/1280x960.png'"
            :alt="work.name"
          >
        </figure>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["work"],
  methods: {
    clickWork(work) {
      this.$store.commit("changeWorkDetail", work);
      this.$store.commit("toggleModal");
    }
  }
};
</script>
