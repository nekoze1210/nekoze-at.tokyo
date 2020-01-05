<template>
  <div class="columns is-mobile is-multiline">
    <a
      v-for="skill in skills"
      :key="skill.name"
      class="column"
      @click="selectSkill(skill)"
    >
      <figure class="image is-96x96">
        <img :id="skill.name" :src="skillIconColor(skill)" :alt="skill.name" />
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SkillList',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectSkill(skill) {
      this.$emit('changeSkill', skill)
    },
    togglePathColor(color) {
      return '--color: ' + color
    },
    skillIconColor(skill) {
      return this.$store.state.skill.name === skill.name
        ? skill.icon_color
        : skill.icon
    }
  }
}
</script>

<style scoped>
.columns {
  margin-top: 40px;
}
</style>
