<template>
  <div class="columns is-mobile is-multiline">
    <a @click="selectSkill(skill)" class="column" v-for="skill in skills" :key="skill.name">
      <figure class="image is-96x96">
        <img :src="skillIconColor(skill)" :alt="skill.name" :id="skill.name">
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: "SkillList",
  props: ["skills"],
  methods: {
    selectSkill(skill) {
      this.$emit("changeSkill", skill);
    },
    togglePathColor(color) {
      return "--color: " + color;
    },
    skillIconColor(skill) {
      return this.$store.state.skill.name === skill.name
        ? skill.icon_color
        : skill.icon;
    }
  }
};
</script>

<style scoped>
.columns {
  margin-top: 40px;
}
</style>
