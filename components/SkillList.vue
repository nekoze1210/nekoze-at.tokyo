<template>
  <div class="columns is-mobile is-multiline">
    <a @click="showDetail(skill)" class="column" v-for="skill in skills" :key="skill.name">
      <figure class="image is-96x96">
        <img :src="skill.icon" :alt="skill.name">
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SkillList',
  data() {
    return {
      skills: [
        {
          name: 'Ruby',
          icon: require('~/assets/skill_icons/ruby.svg')
        },
        {
          name: 'Java',
          icon: require('~/assets/skill_icons/java.svg')
        },
        {
          name: 'PHP',
          icon: require('~/assets/skill_icons/php.svg')
        },
        {
          name: 'Swift',
          icon: require('~/assets/skill_icons/swift.svg')
        },
        {
          name: 'Sass',
          icon: require('~/assets/skill_icons/sass.svg')
        },
        {
          name: 'React',
          icon: require('~/assets/skill_icons/react.svg')
        },
        {
          name: 'Javascript',
          icon: require('~/assets/skill_icons/javascript.svg')
        }
      ]
    }
  },
  methods: {
    showDetail(skill) {
      console.log(skill.name)
    }
  }
}
</script>

<style scoped>
.columns {
  margin-top: 40px;
}
</style>
