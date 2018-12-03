<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="resetModal"></div>
    <div class="modal-content">
      <div class="modal-card is-marginless">
        <div class="modal-card-body has-text-left">
          <div class="columns">
            <div class="column is-half">
              <figure class="image">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                >
              </figure>
            </div>
            <div class="column is-half">
              <h3>{{ selectedWork.name }}</h3>
              <h4>
                URL:
                <a :href="selectedWork.url" target="_blank">{{ selectedWork.url }}</a>
              </h4>
              <h4>使用技術: {{ selectedWork.technology }}</h4>
              <h4>製作期間: {{ selectedWork.period }}</h4>
              <p v-html="selectedWork.detail"/>
            </div>
          </div>
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

<style lang="scss" scoped>
h3 {
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: 2px;
  text-align: left;
  color: #444444;
}

h4 {
  font-family: Avenir;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: 1.3px;
  text-align: left;
  color: #707070;
  margin-top: 12px;
}

p {
  font-family: Avenir;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: 1.6px;
  text-align: left;
  color: #707070;
  margin-top: 38px;
}
</style>
