<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
        <div class="modal-card-body">
          <h3>{{ selectedWork.name }}</h3>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="resetModal"></button>
  </div>
</template>

<script>
export default {
  computed: {
    selectedWork: {
      get() {
        return this.$store.state.work;
      }
    },
    isActive: {
      get() {
        return this.$store.state.isModalActive;
      }
    }
  },
  methods: {
    resetModal() {
      this.$store.commit("resetModalContent");
    }
  }
};
</script>

<style>
</style>
