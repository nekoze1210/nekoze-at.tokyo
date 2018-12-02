<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3" @click="clickWork(work)">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
        <p>{{ work }}</p>
      </div>
    </div>
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

<style>
</style>
