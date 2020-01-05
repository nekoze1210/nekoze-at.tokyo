<template>
  <div class="column">
    <div class="container has-text-centered">
      <h3>Skills & Works</h3>
      <h4>こんなことできます & しました</h4>
      <skill-list :skills="skills" @changeSkill="changeSkill" />
      <divider />
      <skill-detail :skill="selectedSkill" />
      <works />
      <work-detail />
    </div>
  </div>
</template>

<script>
import Divider from "~/components/Divider.vue"
import SkillList from "~/components/SkillList.vue"
import SkillDetail from "~/components/SkillDetail.vue"
import Works from "~/components/Works.vue"
import WorkDetail from "~/components/WorkDetail.vue"

export default {
  name: "Skills",
  components: { SkillList, SkillDetail, Divider, Works, WorkDetail },
  data() {
    return {
      skills: [
        {
          name: "Ruby",
          icon: require("~/assets/skill_icons/ruby.svg"),
          icon_color: require("~/assets/skill_icons/ruby_color.svg"),
          period: "約3年",
          stars: 3,
          color: "#f82020"
        },
        {
          name: "Java",
          icon: require("~/assets/skill_icons/java.svg"),
          icon_color: require("~/assets/skill_icons/java_color.svg"),
          period: "約1.5年",
          stars: 3,
          color: "#DD9038"
        },
        {
          name: "PHP",
          icon: require("~/assets/skill_icons/php.svg"),
          icon_color: require("~/assets/skill_icons/php_color.svg"),
          period: "約5ヶ月",
          stars: 2,
          color: "#637EB1"
        },
        {
          name: "Swift",
          icon: require("~/assets/skill_icons/swift.svg"),
          icon_color: require("~/assets/skill_icons/swift_color.svg"),
          period: "約2ヶ月",
          stars: 1,
          color: "#E54C2E"
        },
        {
          name: "Sass",
          icon: require("~/assets/skill_icons/sass.svg"),
          icon_color: require("~/assets/skill_icons/sass_color.svg"),
          period: "約2年",
          stars: 3,
          color: "#B96790"
        },
        {
          name: "Javascript",
          icon: require("~/assets/skill_icons/javascript.svg"),
          icon_color: require("~/assets/skill_icons/javascript_color.svg"),
          period: "約2.5年",
          stars: 3,
          color: "#F4DE50"
        },
        {
          name: "React",
          icon: require("~/assets/skill_icons/react.svg"),
          icon_color: require("~/assets/skill_icons/react_color.svg"),
          period: "約3ヶ月",
          stars: 1,
          color: "#80D8F7"
        },
        {
          name: "Vue.js",
          icon: require("~/assets/skill_icons/vue.svg"),
          icon_color: require("~/assets/skill_icons/vue_color.svg"),
          period: "約1年",
          stars: 3,
          color: "#42b883"
        },
        {
          name: "Kotlin",
          icon: require("~/assets/skill_icons/kotlin.svg"),
          icon_color: require("~/assets/skill_icons/kotlin_color.svg"),
          period: "約1ヶ月",
          stars: 1,
          color: "#4E6698"
        }
      ]
    }
  },
  computed: {
    selectedSkill: {
      get() {
        return this.$store.state.skill
      }
    },
    selectedWork: {
      get() {
        return this.$store.state.work
      }
    }
  },
  mounted() {
    this.$store.commit("changeSkillDetail", this.skills[0])
  },
  methods: {
    changeSkill(skill) {
      this.$store.commit("changeSkillDetail", skill)
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: Avenir;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: 2.5px;
  text-align: center;
  color: #292929;
  margin-top: 60px;
}

h4 {
  font-family: Avenir;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 1.5px;
  text-align: center;
  color: #292929;
  margin-top: 11.1px;
}
</style>
